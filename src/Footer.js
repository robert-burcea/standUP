import React from 'react'
import AddJoke from './AddJoke'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Fab } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function Footer() {
    const screen = useScreen();
  const changeScreen = useSetScreen();

  const handleBit = () => {
    changeScreen({...screen, name:'bits'})
  }
  const handleSet = () => {
    changeScreen({...screen, name:'sets'})
  }
  return (
    <div className="footer">
      <BottomNavigation>
        <BottomNavigationAction 
        label="Bits" 
        icon={<ChatBubbleIcon size="large"/>} 
        onClick={handleBit}/>
        <BottomNavigationAction 
        label="Sets" 
        icon={<FormatListBulletedIcon size="large"/>} 
        onClick={handleSet}/>
      </BottomNavigation>
    </div>
  )
}
