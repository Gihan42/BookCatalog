import React, { Component } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';

export default class Header extends Component {
    render() {
      const activeLink = "border-b-2 cursor-pointer text-slate-300 pr-0 no-underline ";
       const normalLink = "cursor-pointer text-slate-300 pr-0 no-underline ";
      return (
        <>
       <div className='bg-slate-900 h-20 p-4 text-white w-full fixed top-0 z-10 '>
        <div className=' w-full h-full	'>
            <div className='flex w-full h-full justify-start'>
                <div className='w-1/2'>
                    <div className='font-Poppins font-bold text-slate-300 text-2xl	'><AutoStoriesIcon className='mb-1 mr-4 ml-4 text-stone-50'/>Books Catalog</div>
                </div>
                <div className='w-1/2 flex mr-20'>
                              <div className='flex w-full justify- gap-12 align-middle text-white'>
                                 <NavLink to={"/"} className={({ isActive }) =>
                                 isActive ? activeLink : normalLink
                               } >Home</NavLink>
                                 <NavLink to={"/details"} className={({ isActive }) =>
                                 isActive ? activeLink : normalLink
                               }>Book Details</NavLink>
                              
                
                              </div>
                              <div className='flex w-full justify-end gap-12 align-middle'>
                                     <NavLink to={"/"} className='text-slate-300 '><LogoutIcon/></NavLink>
                                     <NavLink to={""} className="text-slate-300 "><LightModeIcon/></NavLink>
                              </div>
                </div>
            </div>
        </div>
          </div >
          </>
    )
  }
}
