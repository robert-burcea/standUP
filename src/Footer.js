import React from 'react'
import AddJoke from './AddJoke'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Footer() {
    const screen = useScreen();
  const changeScreen = useSetScreen();

  const handleClick = () => {
    changeScreen({...screen, name:'addJoke'})
  }
  return (
    <Button variant="contained" size="large" endIcon={<AddCircleIcon />} onClick={handleClick}> ADD JOKE </Button>
  )
}
