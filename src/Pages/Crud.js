import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../component/Header';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import bookphot from'../assets/book.png'

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
          
          <div className='grid grid-cols-2 gap-4'>
            <div>01
              
              
                </div>
                  
            <div className='p-10'>
              
              <table class="table text-2xl">
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
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                 </div>
          </div>
      </div>
    
      </>
    )   
  }
}
