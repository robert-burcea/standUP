import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'

export default function Editor() {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const [title,setTitle] = useState(screen.activeJoke.name)
  const [content,setContent] = useState(screen.activeJoke.content)
  const getTitleInput = (e) => {
    setTitle(e.target.value);
  }
  const getContentInput = (e) => {
    setContent(e.target.value);
  }
  const handleSubmit = (e) => {
    let jokeIndex = screen.jokes.findIndex(x => x.id === screen.jokeID);
    let newJokes = screen.jokes;
    newJokes[jokeIndex].name = title;
    newJokes[jokeIndex].content = content;
    changeScreen({...screen, jokeID:null, activeJoke:null, name:'initial', jokes: newJokes})
  }
  const handleRemove = (e) => {
    const confirmBox = window.confirm("Are you sure you want to delete this joke?");
    if(confirmBox) {
      let jokeIndex = screen.jokes.findIndex(x => x.id === screen.jokeID);
      let newJokes = screen.jokes;
      newJokes.splice(jokeIndex,1)
      changeScreen({...screen, jokeID:null, activeJoke:null, name:'initial', jokes: newJokes})
    }
  }
  const handleCancel = (e) => {
    changeScreen({...screen,name:'initial'});
  }
  return (
    <div>
      <input type="text" onChange={getTitleInput} value={title}/>
      <input type="text" onChange={getContentInput} value={content}/>
      <button onClick={handleSubmit}>SUBMIT CHANGES</button>
      <button onClick={handleRemove}>REMOVE JOKE</button>
      <button onClick={handleCancel}>CANCEL</button>
    </div>
  )
}
