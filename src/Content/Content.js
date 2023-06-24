import React, { Component } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Crud from '../Pages/Crud'
import Home from '../Pages/Home'

export default class Content extends Component {
  render() {
    return (
        <div className='mt-20 flex  justify-center h-screen'>
            <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/details' element={<Crud />}></Route>
            </Routes>
           
        </div>
    )
  }
}
