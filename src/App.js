import './css/App.css';
import Printer from './Printer'
import {useEffect, useState} from 'react'
import Editor from './Editor'
import Header from './Header'
import React from 'react'
import UserContext from './UserContext'
import { useScreen, useSetScreen } from './UserContext'
import AddJoke from './AddJoke'
import AddSet from './AddSet'
import Search from './Search'
import JokeBox from './JokeBox'
import { app, database } from './firebaseConfig';
import Login from './Login'
import Footer from './Footer'

function App() {  
  const [dataReady, setDataReady] = useState()
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const login = true;
  const docRef = database.collection("users").doc(screen.id);
  const getData = () => {
    docRef.get()
    .then((doc) => {
      if(doc.exists) {
        console.log(doc.data());
        changeScreen({...screen, jokes:doc.data().jokes})
        setDataReady(true)
      }
    else {
      console.log("No such document")
    }
    })
    .catch((error) =>{
      console.log("Error getting document:", error)
    })
  }
  const updateData = () => {
    docRef.update({jokes:{...screen.jokes}})
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
      {!login ? <Login /> : <></>}
      {<Header />}
      {console.log(screen)}
      {screen.name === 'bits' && login && dataReady ? 
      <Printer choice='bits'/> : screen.name === 'bits' ? 
      <>Loading data...</> : <></>}
      {screen.name === 'sets' && login && dataReady ? 
      <Printer choice='sets'/> : screen.name === 'sets' ? 
      <>Loading data...</> : <></>}
      {screen.name === 'editor' && login && dataReady ? 
      <Editor updateData={updateData}/> : <></>}
      {screen.name === 'addJoke' && login && dataReady ? 
      <AddJoke updateData={updateData}/> : <></>}
      {screen.name === 'addSet' && login && dataReady ? 
      <AddSet updateData={updateData}/> : <></>}
      {screen.name === 'search' && login && dataReady ? 
      <Search choice={screen.searchOption}/> : <></>}
      <Footer />
    </div>
  );
}

export default App;
