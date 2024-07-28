import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { setProjects } from '../../redux/slices/UserSlice';
import { MdEdit } from 'react-icons/md';
import {TiTick} from 'react-icons/ti'
import { MdDelete } from 'react-icons/md'

function AllProjects() {
  const [edit, setEdit] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.user.projects)

  const getProjects = async () => {
    const res = await axios.get('http://localhost:5000/api/getprojects');
    const data = await res.data.projects;
    dispatch(setProjects(data));
    // console.log(projects);
  };
  useEffect(() => {
    getProjects();
  }, [])

  const handleFileChange = (e, projectId) => {
    setFiles({
      ...files,
      [projectId]: e.target.files[0],
    });
  };



  return (
    <div className='flex flex-col justify-center items-center gap-5 text-white lg:h-[80vh]'>

      {projects.map((project) => {
        return (
          <div key={project._id}
          className=' flex flex-col border-2 w-[80vw] lg:w-[40vw] rounded-lg px-2 py-2 gap-3'>
            <div className='flex flex-col lg:flex-row justify-between gap-5'>
              <img src={project.img} alt={project.name} className={`flex w-fit h-[180px] lg:w-[200px] lg:h-auto ${edit && "hidden"}`} />
              <input className={`${edit && "hiddden"}`} type="file" name='img' id='img' accept='image/*' onChange={(e) => handleFileChange(e, project._id)} />
              <div className='flex flex-col gap-1 '> 
                <h1 className={`text-xl lg:text-3xl ${edit && selectedProject ===project._id ? newName:project.name }`}> {edit ? (<input type='text' name='name' id='name' />) : (project.name)}</h1>
                <div>
                   <label htmlFor="desc">Desc:</label>
                  <h1>{edit ? (<input type='text' name='desc' id='desc' />) : (project.desc)}</h1>
                </div>
                <div>
                    <label htmlFor="gitHubUrl">gitHubUrl</label>
                  <h1>{edit ? (<input type='text' name='gitHubUrl' id='gitHubUrl' />) : (project.gitHubUrl)}</h1>
                </div>
                <div>
                    <label htmlFor="hostedUrl">hostedUrl</label>
                  <h1>{edit ? (<input type='text' name='hostedUrl' id='hostedUrl' />) : (project.hostedUrl)}
                  </h1>
                </div>
              </div>
              <div>
                <MdEdit onClick={() => setEdit(!edit)} />
                <TiTick />
                <MdDelete />
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllProjects
