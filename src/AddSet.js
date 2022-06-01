import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import {v4 as uuidv4} from 'uuid';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import Search from './Search'

export default function AddSet(props) {
  const screen = useScreen();
  const changeScreen = useSetScreen();
    const [title,setTitle] = useState();
    const getTitleInput = (e) => {
    setTitle(e.target.value);
    console.log(title)
  }
  
  return (
    <div>
        Title:<br></br><input type="text" onChange={getTitleInput} value={title}/>
    </div>
  )
}
