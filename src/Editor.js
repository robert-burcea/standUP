import React, {useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';

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
    /*<div>
      Title:<input type="text" onChange={getTitleInput} value={title}/>
      Text:<input type="text" onChange={getTextInput} value={text}/>
      <button onClick={handleSubmit}>SUBMIT CHANGES</button>
      <button onClick={handleRemove}>REMOVE JOKE</button>
      <button onClick={handleCancel}>CANCEL</button>
    </div> */
    <Card sx = {{m:1.3}}>
      <CardHeader
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <TextField value={title} 
          id="outlined-basic" label="Title" variant="outlined" multiline={true} fullWidth
          onChange={getTitleInput}/>
          <TextField value={text} 
          id="outlined-basic" label="Text" variant="outlined" multiline={true} fullWidth
          onChange={getTextInput}/>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="save" onClick={handleSubmit}>
          <SaveIcon />
        </IconButton>
        <IconButton aria-label="cancel" onClick={handleCancel}>
          <CancelIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
