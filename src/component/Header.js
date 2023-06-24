import React, { Component } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';

export default class Header extends Component {
    render() {
        const navStyle="font-bold border-b-2"
        const clr="bg-black"
      return (
        <>
       <div className='bg-slate-900 h-20 p-4 w-full fixed top-0 z-10 '>
        <div className=' w-full h-full	'>
            <div className='flex w-full h-full items-center'>
                <div className='w-1/2'>
                    <div className='font-Poppins font-bold text-slate-300 text-2xl	'><AutoStoriesIcon className='mb-1 mr-4 ml-4 text-stone-50'/>Book Catalog</div>
                </div>
                <div className='w-1/2 flex'>
                              <div className='flex w-full justify-start gap-12 align-middle '>
                                 <NavLink to={"/"} className= 'cursor-pointer  text-lg  text-white pr-0'>Home</NavLink>
                                 <NavLink to={"/details"} className='text-white text-lg '>Book Details</NavLink>
                              
                
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
