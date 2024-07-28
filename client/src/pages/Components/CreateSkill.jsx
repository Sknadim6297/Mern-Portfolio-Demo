import React, { useState } from 'react'
import axios from 'axios';

function CreateSkill() {
  const [skill,setSkill]= useState('');
  const [level,setLevel]= useState(0);
  const addSkill = async (e) => {
    e.preventDefault();
    if (skill === '' || level === 0) {
      alert('Please fill in all fields');
      return;
    }
    if (level >= 1 && level <= 5) {
      try {
        const res = await fetch('http://localhost:5000/api/addskills', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ skill, level }),
        });
        
        if (res.ok) {
          const data = await res.json();
          alert(data.msg);
          console.log(data);
          setSkill('');
          setLevel(0);
        } else {
          console.log('Error:', res.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Level must be between 1 and 5');
    }
}

  return (
    <div className='p-4 backdrop-blur-3xl rounded-md w-full lg:w-fit mx-auto  '>
    <h1 className=' text-3xl text-white lg:text-5xl my-5'>Create Skil</h1>
    <form  className='flex flex-col gap-3 ' onSubmit={addSkill}>
     <input type="text" name='skill' id='skill' placeholder='Enter new skill' className='bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl text-white'  onChange={(e)=>setSkill(e.target.value)} 
     value={skill} required />
     <input type="tel" name='level' id='level' placeholder='Not more than 5' className='bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl text-white'  onChange={(e) => setLevel(Number(e.target.value))}
     value={level}  required/>
     <button className='bg-blue-500 px-3 py-2 rounded-full mx-auto w-[40vw] lg:w-[10vw] font-bold text-xl  ' type='submit'>Add Skill</button>

    </form>
    </div>
  )
}


export default CreateSkill
