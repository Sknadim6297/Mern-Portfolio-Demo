import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector,useDispatch } from 'react-redux'
import { toggle } from '../../redux/slices/navSlice';
import CreateSkill from '../Components/CreateSkill';
import CreateProject from '../Components/CreateProject';
import AllProject from '../Components/AllProject';
import AllSkill from '../Components/AllSkill';

function AdminDashBoard() {
  const dispatch=useDispatch();
  const toggleNav=useSelector((state)=> state.nav.toggleNav)
  const page = useSelector((state)=> state.page.page)
  return (
    <div>
    <AdminNavbar />
    <GiHamburgerMenu onClick={()=> dispatch(toggle())} className={`text-white fixed text-2xl top-5 right-5 z-10 cursor-pointer lg:hidden 
        ${toggleNav ? "hidden z-10" : "block"}`}/>
    <div className=''>
   {
    (()=> {
      switch(page){
        case "CreateSkill":
        return <CreateSkill/>;
        case "AllSkill":
        return <AllSkill/>;
        case "CreateProject":
        return <CreateProject/>;
        case "AllProject":
        return <AllProject/>;
        default:
        return <CreateProject/>
        
      }
    })()}
    </div>
    </div>
  )
}

export default AdminDashBoard
