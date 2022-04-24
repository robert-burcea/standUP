import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'

export default function AddJoke() {
  const screen = useScreen();
  const changeScreen = useSetScreen();
  const [title,setTitle] = useState();
  const [content,setContent] = useState();
  const getTitleInput = (e) => {
    setTitle(e.target.value);
  }
  const getContentInput = (e) => {
    setContent(e.target.value);
  }
  const handleSubmit = (e) => {
    let newJokes = screen.jokes;
    newJokes.push({id:12312, name:title, content:content});
    changeScreen({...screen, jokes:newJokes, name:'initial'});
  }
  const handleCancel = (e) => {
    changeScreen({...screen,name:'initial'});
  }
  return (
    <div>
      <input type="text" onChange={getTitleInput} value={title}/>
      <input type="text" onChange={getContentInput} value={content}/>
      <button onClick={handleSubmit}>SUBMIT CHANGES</button>
      <button onClick={handleCancel}>CANCEL</button>
    </div>
  )
}
