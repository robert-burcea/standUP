import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import {v4 as uuidv4} from 'uuid';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import Search from './Search'
import './css/App.css';
import ListViewer from './ListViewer'

export default function AddSet(props) {
  const screen = useScreen();
  const changeScreen = useSetScreen();
    const [title,setTitle] = useState();
    const [listOfJokes, setList] = useState([]);
    const getTitleInput = (e) => {
    setTitle(e.target.value);
    console.log(title)
  }
  const onClick = (e) => {
    setList(listOfJokes.push(e.target))
  } 
  
  return (
    <div>
        Title:<br></br><input type="text" onChange={getTitleInput} value={title}/>
        <div className='add-set'>
            <span className='add-set-content'>
            <Search onClick={onClick}/>
            </span>
            <span className='add-set-list'>
                {listOfJokes?.map((el) => {
                    return el;
                })}
            </span>
        </div>
    </div>
  )
}
