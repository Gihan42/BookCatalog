import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../component/Header';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import bookphot from'../assets/book.png'
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import Autocomplete from '@mui/material/Autocomplete';

export default class Crud extends Component {
  render() {
    return (
      <>
        <Header/>
        <div className='bg-slate-200 h-full w-full mt-0 space-y-6 pr-11 pl-11 pt-11 justify-center '>
         
        <div className="cursor-pointer w-full pt-2 border-2 border-white pb-0 pl-6 bg-cyan-950 text-white rounded flex justify-between items-center ">
             <h1 className='text-2xl '>Books Details</h1>
          </div>
          {/* conten */}
           <from>
          <div className='grid grid-cols-2 gap-4 mt-9'>
            <div className=' bg-white p-5 ml-2 border-1 rounded-2xl shadow-2xl shadow-black'>
               
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
            <div className='flex justify-start mt-6 space-x-20 '>
                <div className='text-xl'>Book Id
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="DId"
                  label="Book Id"
                  name="DId"
                  autoFocus
                  type="text"
                  variant="standard"

                  value={""}
                  onChange={""}
                />
                  </div>
                  <div className='text-xl'>Book Name
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="DId"
                  label="Book Name"
                  name="DId"
                  autoFocus
                  type="text"
                  variant="standard"

                  value={""}
                  onChange={""}
                />
                  </div>
              </div>
            <div className='flex justify-start mt-6 space-x-20 '>
                <div className='text-xl space-y-2'>Description
                <TextField
                    label="Description"
                    type="text"
                    variant='outlined'
                    placeholder='Type Description Here'
                    sx={{ width: 800 }}
                    multiline
                    minRows={4}
                    maxRows={Infinity}
                    required

                  value={""}
                  onChange={""}
                />
                 </div>
                </div>
                  <div className='flex justify-start mt-6 space-x-20 '>
                <div className='text-xl'>Catergories
              <Autocomplete
                   disablePortal
                   options={top100Films}
                   id="combo-box-demo"
                   sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Categories" />}
                  />
                                </div>
                  <div className='text-xl'>Author Name
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="DId"
                  label="Author Name"
                  name="DId"
                  autoFocus
                  type="text"
                  variant="standard"

                  value={""}
                  onChange={""}
                />
                  </div>
              </div>
                <div className='flex justify-start mt-3 space-x-6 '>
                <div className='text-xl'>Price
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="DId"
                  label="Price"
                  name="DId"
                  autoFocus
                  type="text"
                  variant="standard"
                  value={""}
                  onChange={""}
                    />
                    
               
                  </div>
                <button type="button" class="btn btn-primary  mt-5 h-12 w-28">Save <SaveAltIcon/></button>
                <button type="button" class="btn btn-warning  mt-5 h-12 w-28">Update<UpdateIcon/> </button>
                <button type="button" class="btn btn-danger  mt-5 h-12 w-28">Delete <DeleteIcon/></button>
                  </div>
            </div>
                  
            <div className='p-10'>
              <table class="table text-2xl shadow-xl shadow-slate-400">
                      <thead>
                        <tr>
                          <th scope="col">Book Id</th>
                          <th scope="col">Book Name</th>
                          <th scope="col">Description</th>
                       <th scope="col">Aouther Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                      <td>@fat</td>
                      <td>Otto</td>
                          <td>@mdo</td>
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
const top100Films = [
  { label: 'All' },
  { label: 'Horror' },
  { label: 'Music' },
  { label: 'History' },
  { label: 'Love Story' },
 
]