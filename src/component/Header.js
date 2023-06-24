import React, { Component } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import ModeNightIcon from '@mui/icons-material/ModeNight';

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
                <div className='w-1/2'>
                              <div className='flex w-full justify-start gap-12 align-middle '>
                                
                                  <h1>Home</h1>
                                  <h1>Books</h1>
                    {/* <div className='flex w-full justify-end gap-12 '>
                        <NavLink to={"/"} className= 'cursor-pointer text-slate-300 pr-0'>Home</NavLink>
                        <NavLink to={"/"} className='text-slate-300 '>About</NavLink>
                        <NavLink to={"/"} className='text-slate-300 '>Contact</NavLink>
                        <NavLink to={"/"} className='text-slate-300 '>Profile</NavLink>
                        <NavLink to={"/"} className='text-slate-300 '></NavLink>
                        <NavLink to={""} className="text-slate-300"></NavLink>

                    </div> */}
                        </div>
                </div>
            </div>
        </div>
          </div >
          </>
    )
  }
}
