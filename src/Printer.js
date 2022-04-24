import React from 'react'
import JokeBox from './JokeBox'
import './css/Printer.css'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'

export default function Printer(props) {
  const screen = useScreen();
  const changeScreen = useSetScreen();

  const handleClick = () => {
    changeScreen({...screen, name:'addJoke'})
  }
  return (<div className="printer">
      {screen.jokes.map((joke) => {
          return <JokeBox joke={joke}/>
      })}
      <button id="add-task" onClick={handleClick}>ADD A JOKE</button>
  </div>
  )
}
