import React, { useContext } from 'react'
import { useScreen, useSetScreen } from './UserContext'
import './css/App.css'

export default function Header() {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  return (
    <div className="header">
      <h1>STAND <span class="red">UP</span> JOKES</h1>
        <nav>
          <span></span>
        </nav>
    </div>
  )
}
