import React from 'react'
import {useState, useContext} from 'react'

export const Screen = React.createContext();
export const SetScreen = React.createContext();

export const useScreen = () => {
    return useContext(Screen);
}

export const useSetScreen = () => {
    return useContext(SetScreen);
}

export default function UserContext({value, children}) {
    const [screen, setScreen] = useState(value)
  return (
        <Screen.Provider value={screen}>
            <SetScreen.Provider value={setScreen}>
                {children}
            </SetScreen.Provider>
        </Screen.Provider>
  )
}
