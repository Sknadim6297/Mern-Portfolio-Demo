import React, { useState } from 'react'
import axios from 'axios';
import { LoadImage } from '../../helpers/LoadImage';


function CreateProjects() {
  const [name,setName]=useState("");
  const [desc,setDesc]=useState("");
  const [selectedImage,setSelectedImage]=useState(null);
  const [gitHubUrl,setgitHubUrl]=useState("");
  const [hostedUrl,sethostedUrl]=useState("");

  const handleImg = (e)=>{
    const file= e.target.files[0];
    setSelectedImage(file);

  }
  const AddProject= async (e)=>{
    e.preventDefault();
    

    // console.log("Project Name: ", name);
    // console.log("Project Description: ", desc);
    // console.log("Selected Image: ", selectedImage.name);
    // console.log("GitHub URL: ", gitHubUrl);
    // console.log("Hosted URL: ", hostedUrl);

    if(!name || !desc || !selectedImage){
      return console.log("Please fill all the fields");
    }
    const uploadedImg = await LoadImage(selectedImage);

    if(!uploadedImg){
      return console.log("Error uploading image to cloudinary");
    }

    try {
        const res = await fetch('https://mern-portfolio-demo.onrender.com/api/addproject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          desc,
          img:uploadedImg.url,
          gitHubUrl:gitHubUrl,
          hostedUrl,
          publicId: uploadedImg.public_id,
          deleteToken: uploadedImg.delete_token
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log('Error response from server:', errorData);
        return;
      }

      const data = await res.json();
      console.log(data);

      setName("");
      setDesc("");
      setSelectedImage(null);
      setgitHubUrl("");
      sethostedUrl("");

      alert("Project added successfully ");
    
      
    } catch (error) {
      console.log(error); 
    }
  }
  
  return (
    <div className='text-white w-fit mx-auto rounded-md mt-5'>
      <h1 className='text-3xl lg:text-5xl mb-5'>Create Project</h1>
      <form className='flex flex-col gap-3' onSubmit={AddProject}>
        <input type="text"
          name='name'
          id='name'
          onChange={(e)=>setName(e.target.value)}
          placeholder='Project Name'
          required className='bg-transparent px-3 py-2 border font-bold text-xl rounded-full w-full lg:w-[40vw] outline-none' />
        <textarea onChange={(e)=>setDesc(e.target.value)} name="desc" id="desc" cols="25" rows="4" placeholder='Project Description' className='bg-transparent px-3 py-2 border font-bold text-xl rounded-lg w-full lg:w-[40vw] outline-none' />
        <div>
          <label className='text-xl text-purple-500' htmlFor="img">Project Image:  </label>
          <input onChange={handleImg} className='' type="file" name='img' id='img' accept='image' required />
        </div>
        <input type="url" name="githuburl" id="githuburl" placeholder='Github Url' className='bg-transparent px-3 py-2 border font-bold text-xl rounded-full w-full lg:w-[40vw] outline-none'   onChange={(e)=>setgitHubUrl(e.target.value)} />
        <input type="url" name="hosturl" id="hosturl" placeholder='Hosted Url' className='bg-transparent px-3 py-2 border font-bold text-xl rounded-full w-full lg:w-[40vw] outline-none' onChange={(e)=>sethostedUrl(e.target.value)} />
        <button className='bg-blue-500 px-3 py-2 rounded-full mx-auto w-[40vw] lg:w-[10vw] font-bold ' type='submit'>Add Project</button>
      </form>
    </div>
  )
}

export default CreateProjects
