import React, {useEffect, useState} from 'react'
import { useScreen, useSetScreen } from './UserContext'
import JokeBox from './JokeBox'

export default function Search() {
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
  return (
    <div>
        Search joke:<input type="text" className="search-button" value={value} onChange={(e) => {setValue(e.target.value); console.log(value)}}></input>
        <span>
        {screen.jokes.bits.map((bit) => {
            return bit.text.includes(value) && <JokeBox joke={bit} key={bit.id}/>
        })}
        </span>
    </div>
  )
}
