import React, { Component } from 'react'
import Header from '../component/Header'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
export default class Home extends Component {
  render() {
      return (
          <>
              <Header/>
              <div className='w-full mt-28 space-y-6 p-11 '>
                  <div className='w-full h-20 bg-cyan-950 rounded-xl p-7 flex space-x-12 justify-center  text-4xl'>
                     <ReadMoreIcon className='text-stone-50 '/> <h1 className=' text-xl justify-center'>The Leo Baeck Institute is a non-profit organization. Any income from the store is supporting the institute's activities.</h1>
                  </div>
                  <div className='border justify-start flex '>
                      <h1 className='text-lg text-slate-950'>Hello World</h1>
                  </div>
              </div>
        </>
      
    )
  }
}
