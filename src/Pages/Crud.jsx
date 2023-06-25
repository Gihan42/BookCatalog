import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../component/Header';
import DeblurIcon from '@mui/icons-material/Deblur';
import bookphot from '../assets/book.png';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import Autocomplete from '@mui/material/Autocomplete';
import axios from '../axios';
import {  Select ,MenuItem} from '@mui/material'
export default class Crud extends Component {
  constructor() {
    super();
    this.state = {
      bookList:[],
      bookId: 0,
      bookName: "",
      description: "",
      category: "",
      author: "",
      price: 0
    };
  }

  alertState = () => {
    alert(this.state.bookId + this.state.category);
  };
   componentDidMount() {
    this.getAllBooks();
  }

  handleInput = (event) => {
    const { name, value, type } = event.target;
    const inputValue = type === "number" ? parseInt(value) : value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };
  //Save Book
  handleSubmit = (event) => {
    event.preventDefault();
    const { bookId, bookName, description, category, author, price } = this.state;
    let newBook = {
      bookId: bookId,
      bookName: bookName,
      description: description,
      category: category,
      author: author,
      price: price,
    };

    axios
      .post("http://localhost:8080/api/v1/books", newBook).then((res) => {
        this.getAllBooks();
        console.log(res);
      })
      .catch((error) => {});
  };
    //Update Book
  updateBook = () => {
        const { bookId, bookName, description, category, author, price } = this.state;

    let book = {
      bookId:bookId,
      bookName: bookName,
      description: description,
      category: category,
      author: author,
      price: price,
    }
    axios.put("http://localhost:8080/api/v1/books",book).then((res) => {
      alert(res.data.message);
    }).catch((error) => {
      alert('something went wrong')
    });
  };


    //SearchBook
  searchBook = () => {
            // http://localhost:8080/api/v1/books?bookId=3
            axios.get(`http://localhost:8080/api/v1/books?bookId=${this.state.bookId}`).then((res)=>{
              const { bookId, bookName, description, category, author, price } = res.data.data;
              this.setState((prevState) => ({
                  
                    bookId:bookId,
                    bookName:bookName,
                    description:description,
                    category:category,
                    author: author,
                    price: price,
                })); 
            });
  };

   //Get All Book
  
  getAllBooks = () => {
    axios.get("books/all?bookName=&category=").then((res) => {
      console.log(res.data.responseData + "books");
      this.setState((prevState) => ({
        ...prevState,
        bookList: res.data.data,
      }));
    });
  };
 handleClick = () => {
  this.state.setText(
    this.state.bookId,
    this.state.bookName,
    this.state.description,
    this.state.category,
    this.state.author,
    this.state.price,
   
  );
 };
  //Delete Book
  deleteBook = () =>{
  axios.delete(`http://localhost:8080/api/v1/books?bookId=${this.state.bookId}`).then((res)=>{
    alert(res.data.message);
    this.getAllBooks();
  }).catch((error)=>{
    alert('not deleted')
  });
};
  render() {
    return (
      <>
        <Header />
        <div className="bg-slate-200 h-full w-full mt-0 space-y-6 pr-11 pl-11 pt-11 justify-center ">
          <div className="cursor-pointer w-full pt-2 border-2 border-white pb-0 pl-6 bg-cyan-950 text-white rounded flex justify-between items-center ">
            <h1 className="text-2xl ">Books Details</h1>
          </div>
          {/* conten */}
          <form>
            <div className="grid grid-cols-2 gap-4 mt-9">
              <div className=" bg-white pl-5 pr-5 ml-2 pb-5 border-1 rounded-2xl shadow-2xl shadow-black">
                <div className="font-Poppins font-bold text-cyan-900 text-4xl flex	justify-center">
                  <img src={bookphot} alt=" " className="h-14 w-1h-14 mr-3" />
                  <h1 className="mt-1 text-4xl">Books Details</h1>
                </div>

                <div className="flex justify-start mt-10 space-x-20 ">
                  <div className="text-xl">
                    <DeblurIcon />Book Id
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="bookName"
                      label="Book Name"
                      name="bookId"
                      autoFocus
                      type="text"
                      variant="standard"
                      value={this.state.bookId}
                      onChange={this.handleInput}
                    />
                  </div>
                  <button type="button" className="btn btn-success mt-5 h-12 w-28"
                    onClick={this.searchBook}
                  >
                  Search <SearchIcon />
                  </button>
                  <div className="text-xl">
                    <DeblurIcon />Book Name
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="bookName"
                      label="Book Name"
                      name="bookName"
                      autoFocus
                      type="text"
                      variant="standard"
                      value={this.state.bookName}
                      onChange={this.handleInput}
                    />
                  </div>

                  
                </div>

                <div className="flex justify-start mt-6 space-x-20 ">
                  <div className="text-xl space-y-2">
                    <DeblurIcon />Description
                    <TextField
                      label="Description"
                      type="text"
                      variant="outlined"
                      placeholder="Type Description Here"
                      sx={{ width: 800 }}
                      multiline
                      minRows={4}
                      maxRows={Infinity}
                      required
                      name="description"
                      value={this.state.description}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>

                <div className="flex justify-start mt-6 space-x-20 ">
                  <div className="text-xl">
                    <DeblurIcon />Categories
                   
                   <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="category"
                      label="Categories"
                      name="category"
                      autoFocus
                      type="text"
                      variant="standard"
                      value={this.state.category}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="text-xl">
                    <DeblurIcon />Author Name
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="author"
                      label="Author Name"
                      name="author"
                      autoFocus
                      type="text"
                      variant="standard"
                      value={this.state.author}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>

                <div className="flex justify-start mt-3 space-x-6 ">
                  <div className="text-xl">
                    <DeblurIcon />Price
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="price"
                      label="Price"
                      name="price"
                      autoFocus
                      type="text"
                      variant="standard"
                      value={this.state.price}
                      onChange={this.handleInput}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary  mt-5 h-12 w-28"
                    onClick={this.handleSubmit}
                  >
                    Save <SaveAltIcon />
                  </button>
                  <button type="button" className="btn btn-warning  mt-5 h-12 w-28"
                  onClick={this.updateBook}>
                     
                    Update<UpdateIcon />{" "}
                  </button>
                  <button type="button" className="btn btn-danger  mt-5 h-12 w-28"
                  onClick={this.deleteBook}
                  >
                    Delete <DeleteIcon />
                  </button>
                </div>
              </div>

              <div className="p-10">
                <table className="table text-xl shadow-xl shadow-slate-400">
                  <thead>
                    <tr>
                      <th scope="col"> Id</th>
                      <th scope="col">Book Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Author Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody   >
                   
                    {this.state.bookList.map((book) => (
                        <tr >
                       <td>{book.bookId}</td>
                       <td>{book.bookName}</td>
                       <td>{book.description}</td>
                       <td>{book.author}</td>
                       <td>{book.category}</td>
                       <td>{book.price}</td>
                        </tr>
                     ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}


