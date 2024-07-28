import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch,useSelector} from 'react-redux'
import { toggle } from '../../redux/slices/navSlice'
import { setPage } from '../../redux/slices/PageSlice'


function AdminNavbar() {
    const toggleNav=useSelector((state)=>state.nav.toggleNav)
    const dispatch=useDispatch()
    console.log(toggleNav);
 
    return (
        <nav className={`bg-gray-100 backdrop-blur-xl w-screen text-center z-10 fixed h-screen lg:static lg:h-fit flex flex-col lg:flex-row transition-all ease-in-out delay-100 justify-evenly items-center lg:justify-between border border-none lg:border-gray-500 py-10 lg:py-3 lg:px-5
         lg:translate-x-0 ${toggleNav ? "translate-x-0" :"-translate-x-full"}`}>
        <AiOutlineClose onClick={()=> dispatch(toggle( ))} className='absolute top-5 right-5 text-lg hover:scale-125 cursor-pointer hover:text-red-500 transition-all lg:hidden '/>
            <ul className='text-xl flex items-center flex-col lg:flex-row gap-3'>
                <li className='text-start cursor-pointer px-5 py-3 transition all hover:text-purple-500' onClick={()=>{ dispatch(setPage("CreateProject"))
            dispatch(toggle())}}>Create Project</li>
                <li className='text-start cursor-pointer px-5 py-3 transition all hover:text-purple-500' onClick={()=>{ dispatch(setPage("CreateSkill"))
            dispatch(toggle())}}>Create Skills</li>
                <li className='text-start cursor-pointer px-5 py-3 transition all hover:text-purple-500 ' onClick={()=>{ dispatch(setPage("AllProject"))
            dispatch(toggle())}}>All Projects</li>
            <li className='text-start cursor-pointer px-5 py-3 transition all hover:text-purple-500 ' onClick={()=>{ dispatch(setPage("AllSkill"))
            dispatch(toggle())}}>All Skills</li>
            </ul>
            <button className='text-xl px-5 py-3 hover:text-blue-400 text-center transition-all '>Logout</button>

        </nav>
    )
}

export default AdminNavbar
