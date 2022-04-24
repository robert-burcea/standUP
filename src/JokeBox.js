import './css/JokeBox.css'
import React from 'react'
import Editor from './Editor'
import {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'


export default function JokeBox(props) {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const handleClick = () => {
    changeScreen({...screen, name:'editor', jokeID:props.joke.id, activeJoke: props.joke})
  }
  return (
    <div className="joke-main">
        <><div className="joke-header">
          {props.joke.name}
          <button className="edit-joke-button" onClick={handleClick}>EDIT</button>
        </div><div className="joke-content">
            {props.joke.content}
          </div><div className="joke-footer">JokeFooter</div></>   
    </div>
  )
}
