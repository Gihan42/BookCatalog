import React, { Component } from 'react';
import Header from '../component/Header';
import bookphot from '../assets/book.png';
import Bookimg from '../assets/book.png';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import BookCard from '../component/BookCard';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import axios from '../axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      bookList:[]
    };
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    axios.get("books/all?bookName=&category=").then((res) => {
      console.log(res.data.responseData + "books");
      this.setState((prevState) => ({
        ...prevState,
        bookList: res.data.data,
      }));
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className='w-full mt-0 space-y-6 p-11 bg-slate-200 h-max'>
          <div className='font-Poppins font-bold text-cyan-900 text-4xl flex justify-center'>
            <img src={bookphot} alt=" " className='h-16 w-16 mr-3' />
            <h1 className='mt-1'>Books Catalog </h1>
          </div>
          <div className='w-full h-20 bg-cyan-950 rounded-xl p-7 flex space-x-12 justify-center text-4xl'>
            <h1 className='text-zinc-50 text-xl justify-center'>The Leo Baeck Institute is a non-profit organization. Any income from the store is supporting the institute's activities.</h1>
          </div>
          <div className='justify-center flex'>
            <form className="w-full justify-center flex flex-row space-x-5 mt-3">
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
            {this.state.bookList.map((book) => (
              <div>
                {book.bookId}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

const top100Films = [
  { label: 'All' },
  { label: 'Horror' },
  { label: 'Music' },
  { label: 'History' },
  { label: 'Love Story' },
];
