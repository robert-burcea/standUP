import React, {useEffect, useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import JokeBox from './JokeBox'
import SetBox from './SetBox'
import ListViewer from './ListViewer'

export default function Search(props) {
    const [value, setValue] = useState('')
    const screen = useScreen();
    const changeScreen = useSetScreen();
    const searchFunction = (value) => {
        screen.jokes.bits.map((bit) => {
            return bit.text.includes(value) && <JokeBox joke={bit} />
        })
    }
      useEffect(() => {

  }, [])
  return (screen.searchOption === 'bits' ?
  <div>
    Search joke:
    <input type="text" 
    className="search-button" 
    value={value} 
    onChange={(e) => {setValue(e.target.value)}}>
    </input>
    <span>
    {screen.jokes.bits.map((bit) => {
            return bit.title.includes(value) && <JokeBox joke={bit} key={bit.id}/>
        })}
    </span>
  </div> :
  <div>
  Search set:
  <input type="text" 
  className="search-button" 
  value={value} 
  onChange={(e) => {setValue(e.target.value)}}>
  </input>
  <span>
  {screen.jokes.sets?.map((set) => {
          return set.title.includes(value) && <SetBox set={set} onClick={props?.onClick}/>
      })}
  </span>
</div>)
}
