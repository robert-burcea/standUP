import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import {v4 as uuidv4} from 'uuid';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

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
      name:'initial'
    });
    console.log(screen)
    props.updateData();
  }
  const handleCancel = (e) => {
    changeScreen({...screen,name:'initial'});
  }
  return (
    <div>
      Title:<input type="text" onChange={getTitleInput} value={title}/>
      Text:<input type="text" onChange={getTextInput} value={text}/>
      <Button variant="contained" size="large" endIcon={<SendIcon />} onClick={handleSubmit}> SUBMIT </Button>
      <Button variant="contained" size="large" endIcon={<CancelIcon />} onClick={handleCancel}> CANCEL </Button>
    </div>
  )
}
