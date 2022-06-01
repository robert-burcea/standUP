import React from 'react'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'

export default function ListViewer(props) {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  return props.choice === 'bits' ? 
  screen.jokes.bits.map((bit) => {
      return <span>{bit.title}</span>
  }) :
  screen.jokes.sets.map((set) => {
      return <div>
          <span>{set.title}</span><br></br>
          <span>{set.bits.map((bit) => {
              return <>{bit.title}<br></br></>;
          })}</span><br></br>
          </div>
  })
}
