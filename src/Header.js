import React, { useContext } from 'react'
import { useScreen, useSetScreen } from './UserContext'

export default function Header() {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const handleClick = () => {
    changeScreen({name:'editor', payload:4})
  }
  return (
    <div className="header">
        <nav>
          <span>{screen.name}</span>
          <button onClick={handleClick}>CHANGE</button>
        </nav>
    </div>
  )
}
