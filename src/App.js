import './css/App.css';
import Printer from './Printer'
import {useEffect, useState} from 'react'
import Editor from './Editor'
import Header from './Header'
import React from 'react'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'
import AddJoke from './AddJoke'

function App() {  
  const screen = useScreen();
  const changeScreen = useSetScreen();
  useEffect(() => {
    localStorage.setItem('jokes', JSON.stringify(screen.jokes));
  }, [screen])
  return (
    <div className="App">
      <Header />
      {console.log(screen)}
      {screen.name === 'initial' ? <Printer /> : <></>}
      {screen.name === 'editor' ? <Editor /> : <></>}
      {screen.name === 'addJoke' ? <AddJoke /> : <></>}
    </div>
  );
}

export default App;
