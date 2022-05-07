import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import {v4 as uuidv4} from 'uuid';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

export default function AddJoke() {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const [title,setTitle] = useState();
  const [text,setText] = useState();
  const getTitleInput = (e) => {
    setTitle(e.target.value);
  }
  const getTextInput = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    let newJokes = screen.jokes.bits;
    newJokes.push({id:uuidv4(), title:title, text:text, dateCreated:new Date()});
    changeScreen({...screen, jokes:{...screen.jokes, bits:newJokes}, name:'initial'});
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
