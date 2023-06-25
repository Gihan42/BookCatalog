import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import photo from '../assets/book-composition-with-open-book.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default class BookCard extends Component {
  render() {
    
    return (
        <div>
      <Card className='hover:bg-slate-300 drop-shadow-2xl shadow-black rounded-3xl border  cursor-pointer ' sx={{ maxWidth: 345 }}>
          <img src={photo } alt=" " className='h-60 w-full mr-3'/>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         {this.props.bookName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
             {this.props.desc}
            </Typography>
             <Typography gutterBottom variant="h5" component="div" className='flex-col ml-3'>
              <div className='text-lg'>{this.props.author}</div>
               <div className='text-lg'>Rs: {this.props.price}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small"><FavoriteIcon className='hover:text-cyan-950'/></Button>
            <Button size="small"><ShareIcon className='hover:text-cyan-950' /></Button>
              <Button size="small"><AddShoppingCartIcon className='hover:text-cyan-950'/></Button>
      </CardActions>
    </Card>
    </div>
    )
  }
}
