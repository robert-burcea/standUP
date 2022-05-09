import React from 'react'
import JokeBox from './JokeBox'
import './css/Printer.css'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'
import Footer from './Footer'
import { Fab } from '@mui/material';

export default function Printer(props) {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  return (<div className="printer">
      {screen.jokes.bits.map((joke) => {
          return <JokeBox joke={joke} key={joke.id}/>
      })}
      <Footer />
  </div>
  )
}
