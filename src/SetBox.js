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
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


export default function SetBox(props) {
    const screen = useScreen();
    const changeScreen = useSetScreen();
    const handleClick = () => {
      changeScreen({...screen, name:'editor'})
    }
    return (
      <Card sx = {{m:1.3}} draggable>
          <CardHeader
            title={props.set.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
             {props.set.bits.map((bit) => {
                 return <span>{bit.title}<br></br></span>
             })}
           </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button variant="contained" size="large" endIcon={<EditIcon />} onClick={handleClick}> EDIT </Button>
        </CardActions>
      </Card>
    )
}
