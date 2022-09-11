import React from 'react'
import JokeBox from './JokeBox'
import './css/Printer.css'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'
import Footer from './Footer'
import { Fab } from '@mui/material';
import SetBox from './SetBox'

export default function Printer(props) {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const reverseJokes = screen.jokes.bits.map((val, index, array) => array[array.length - 1 - index]);
  return props.choice === 'bits' ? (<div className="printer">
      {screen.jokes.bits?.length > 0 ? reverseJokes.map((joke) => {
          return <JokeBox joke={joke} key={joke.id}/>
      }) : <>No jokes to display, write one</>}
      <Footer />
  </div>
  ) :
  (screen.jokes.sets?.map((set) => {
    return <SetBox set={set} key={set.id}/>
  }))
}
