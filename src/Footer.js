import React from 'react'
import AddJoke from './AddJoke'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';

export default function Footer() {
    const screen = useScreen();
  const changeScreen = useSetScreen();

  const handleClick = () => {
    changeScreen({...screen, name:'addJoke'})
  }
  return (
    <div className="footer">
      Created by Robert B
    </div>
  )
}
