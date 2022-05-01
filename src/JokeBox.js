import './css/JokeBox.css'
import React from 'react'
import Editor from './Editor'
import {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';


export default function JokeBox({joke}) {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const handleClick = () => {
    changeScreen({...screen, name:'editor', jokeID:joke.id, activeJoke: joke})
  }
  return (
    <Card>
        <CardHeader
          title={joke.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {joke.text}
         </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="edit" onClick={handleClick}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
