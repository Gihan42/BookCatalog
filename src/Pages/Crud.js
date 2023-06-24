import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../component/Header';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import bookphot from'../assets/book.png'
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default class Crud extends Component {
  render() {
    return (
      <>
        <Header/>
        <div className='w-full mt-28 space-y-6 p-11 justify-center'>
          <div className='font-Poppins font-bold text-cyan-900 text-4xl flex	justify-center'>
            <img src={bookphot} alt=" " className='h-16 w-16 mr-3' />
           <h1 className='mt-1'>Book Catalog </h1> 
          </div>

        <div className="cursor-pointer w-full pt-2 border-2 border-white pb-2 pl-6 bg-cyan-950 text-white rounded flex justify-between items-center ">
             <h1 className='text-2xl '>Books Details</h1>
          </div>
          {/* conten */}
           <from>
          <div className='grid grid-cols-2 gap-4 mt-9'>
            <div className='p-5 ml-2 border-1 rounded-2xl shadow-2xl shadow-black'>01
               
                <div className='flex justify-center space-x-4'>
                            <TextField
                            label="Book Id"
                            name="name"
                            type="text"
                            variant="outlined"
                            placeholder="Enter Your Product Name"
                             sx={{ width: 300 }}
                            required
                  />
                  <button type="button" class="btn btn-success">Search <SearchIcon/></button>
                </div>

            </div>
                  
            <div className='p-10'>
              <table class="table text-2xl shadow-xl shadow-slate-400">
                      <thead>
                        <tr>
                          <th scope="col">Book Id</th>
                          <th scope="col">Book Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Aouther</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                       
                      </tbody>
                    </table>
                 </div>
            </div>
            </from>
      </div>
    
      </>
    )   
  }
}
