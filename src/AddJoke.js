import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import {v4 as uuidv4} from 'uuid';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function AddJoke(props) {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const [title,setTitle] = useState();
  const [text,setText] = useState();
  const getTitleInput = (e) => {
    setTitle(e.target.value);
    console.log(title)
  }
  const getTextInput = (e) => {
    setText(e.target.value);
    console.log(text)
  }
  const handleSubmit = (e) => {
    var newJokes = [];
    if(screen.jokes?.bits?.length > 0)
      newJokes = screen.jokes.bits;
    newJokes.push({id:uuidv4(), title:title, text:text, dateCreated:new Date()});
    console.log("newJokes:", newJokes);
    changeScreen({
      ...screen, 
      jokes:{...screen.jokes, bits:newJokes}, 
      name:'bits'
    });
    console.log(screen)
    props.updateData();
  }
  const handleCancel = (e) => {
    changeScreen({...screen,name:'bits'});
  }
  return(<Card sx = {{m:1.3}}>
      <CardHeader
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <TextField value={title} 
          id="outlined-basic" label="Title" variant="outlined" multiline={true} fullWidth
          onChange={getTitleInput}/>
          <TextField value={text} 
          id="outlined-basic" label="Text" variant="outlined" multiline={true} fullWidth
          onChange={getTextInput}/>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <Button variant="contained" size="large" endIcon={<SaveIcon />} 
          onClick={handleSubmit}> SAVE </Button>
          <Button variant="contained" size="large" endIcon={<CancelIcon />} 
          onClick={handleCancel}> CANCEL </Button>
      </CardActions>
    </Card>
  )
}
