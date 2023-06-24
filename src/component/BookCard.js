import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../assets/book-composition-with-open-book.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
export default class BookCard extends Component {
    render() {
    return (
        <div >
              <Card className='hover:bg-slate-300 drop-shadow-2xl shadow-black rounded-3xl border cursor-pointer ' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="../assets/book-composition-with-open-book.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         Book Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
            </Typography>
             <Typography gutterBottom variant="h5" component="div">
              Author : 
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small"><FavoriteIcon className='hover:text-cyan-950'/></Button>
        <Button size="small"><ShareIcon className='hover:text-cyan-950'/></Button>
      </CardActions>
    </Card>
    </div>
    )
  }
}
