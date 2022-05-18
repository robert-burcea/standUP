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
import { Button } from '@mui/material';

export default function Editor(props) {
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
    changeScreen({...screen, 
      jokeID:null, 
      activeJoke:null, 
      name:'initial', 
    jokes: {...screen.jokes, bits:newJokes}});
    props.updateData();
  }
  const handleRemove = (e) => {
    const confirmBox = window.confirm("Are you sure you want to delete this joke?");
    if(confirmBox) {
      let jokeIndex = screen.jokes.bits.findIndex(x => x.id === screen.jokeID);
      let newJokes = screen.jokes.bits;
      newJokes.splice(jokeIndex,1)
      console.log(newJokes)
      changeScreen({...screen, 
        jokeID:null, 
        activeJoke:null, 
        name:'initial', 
      jokes: {...screen.jokes, bits:newJokes}})
    }
    props.updateData();
  }
  const handleCancel = (e) => {
    changeScreen({...screen,name:'initial'});
  }
  return (
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
          <Button variant="contained" size="large" endIcon={<SaveIcon />} 
          onClick={handleSubmit}> SAVE </Button>
          <Button variant="contained" size="large" endIcon={<CancelIcon />} 
          onClick={handleCancel}> CANCEL </Button>
          <Button variant="contained" size="large" endIcon={<DeleteIcon />} 
          onClick={handleRemove}> DELETE </Button>
      </CardActions>
    </Card>
  )
}
