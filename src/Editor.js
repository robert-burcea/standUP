import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'

export default function Editor() {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const [title,setTitle] = useState(screen.activeJoke.title)
  const [text,setText] = useState(screen.activeJoke.text)
  const getTitleInput = (e) => {
    setTitle(e.target.value);
  }
  const getTextInput = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    let jokeIndex = screen.jokes.bits.findIndex(x => x.id === screen.jokeID);
    let newJokes = screen.jokes.bits;
    newJokes[jokeIndex].title = title;
    newJokes[jokeIndex].text = text;
    newJokes[jokeIndex].lastEdited = new Date();
    changeScreen({...screen, jokeID:null, activeJoke:null, name:'initial', jokes: {...screen.jokes, bits:newJokes}});
  }
  const handleRemove = (e) => {
    const confirmBox = window.confirm("Are you sure you want to delete this joke?");
    if(confirmBox) {
      let jokeIndex = screen.jokes.bits.findIndex(x => x.id === screen.jokeID);
      let newJokes = screen.jokes.bits;
      newJokes.splice(jokeIndex,1)
      changeScreen({...screen, jokeID:null, activeJoke:null, name:'initial', jokes: newJokes})
    }
  }
  const handleCancel = (e) => {
    changeScreen({...screen,name:'initial'});
  }
  return (
    <div>
      Title:<input type="text" onChange={getTitleInput} value={title}/>
      Text:<input type="text" onChange={getTextInput} value={text}/>
      <button onClick={handleSubmit}>SUBMIT CHANGES</button>
      <button onClick={handleRemove}>REMOVE JOKE</button>
      <button onClick={handleCancel}>CANCEL</button>
    </div>
  )
}
