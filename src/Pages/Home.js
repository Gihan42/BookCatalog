import React, { Component } from 'react'
import Header from '../component/Header'
// import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Bookimg from '../assets/book.png'
import { TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import BookCard from '../component/BookCard';
export default class Home extends Component {
  render() {
      return (
          <>
              <Header/>
              <div className='w-full mt-28 space-y-6 p-11 '>
                  <div className='w-full h-20 bg-cyan-950 rounded-xl p-7 flex space-x-12 justify-center  text-4xl'>
                    <h1 className=' text-xl justify-center'>The Leo Baeck Institute is a non-profit organization. Any income from the store is supporting the institute's activities.</h1>
                  </div>
                  <div className=' justify-center flex  '>
                        <form className="w-full justify-center flex flex-row space-x-5  mt-3">
                          <TextField
                            label="Book Name"
                            name="name"
                            type="text"
                            variant="outlined"
                            placeholder="Enter Your Product Name"
                             sx={{ width: 800 }}
                            required
                                />
                             <Autocomplete
                                disablePortal
                                options={top100Films}
                                id="combo-box-demo"
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Categories" />}
                              />
                        </form>
            </div>
            {/* Card  Div  */}
            <div className='border p-10 mt-10 flex gap-10 justify-center flex-wrap items-center'>
              <BookCard/>
            </div>
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