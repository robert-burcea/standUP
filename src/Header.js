import React, { useContext } from 'react'
import { useScreen, useSetScreen } from './UserContext'
import './css/App.css'
import SearchIcon from '@mui/icons-material/Search';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import logo from './img/stand-up.png';

export default function Header() {
  const screen = useScreen();
  const changeScreen = useSetScreen();

  const handleSearch = () => {
    changeScreen({...screen,name:'search'});
  }
  const handleAdd = () => {
    changeScreen({...screen, name:'addJoke'})
  }
  const handleLogo = () => {
    changeScreen({...screen, name:'initial'})
  }
  return (
    <div className="header">
      <div className="title" onClick={handleLogo}><h1 className="header-title"><img src={logo} style={{width:'140px', height:'60px'}}></img></h1></div>
        <nav>
          <span className="header-search-btn">
          <Fab size="large" color="secondary" aria-label="add" onClick={handleAdd}>
            <AddIcon />
          </Fab>
          <Fab size="large" color="secondary" aria-label="add" onClick={handleSearch}>
            <SearchIcon />
          </Fab>
          </span>
        </nav>
    </div>
  )
}
