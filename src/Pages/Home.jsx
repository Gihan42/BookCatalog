import React, { Component } from 'react';
import Header from '../component/Header';
import bookphot from '../assets/book.png';
import Bookimg from '../assets/book.png';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import BookCard from '../component/BookCard';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import axios from '../axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


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
handleChange = () => {
    setAge(target.value );
  };
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
                    <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={0}
                  label="Age"
                onChange={""}
                sx={{ width: 300 }}
              >
                  <MenuItem value={0}>All</MenuItem>
                  <MenuItem value={10}>Horror</MenuItem>
                  <MenuItem value={20}>Romantic</MenuItem>
                  <MenuItem value={30}>Novels</MenuItem>
                </Select>
            </form>
          </div>
          {/* Card  Div  */}
          <div className='border p-10 mt-10 flex gap-10 justify-center flex-wrap items-center'>
            {this.state.bookList.map((book) => (

              console.log(book),
              (<BookCard
                key={book.bookId}
                bookName={book.bookName}
                desc={book.description}
                price={book.price}
                author={book.author}
              />)
                 
            ))}
          </div>
        </div>
      </>
    );
  }
}


