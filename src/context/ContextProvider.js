import { useState, useContext, createContext } from 'react';

const StateContext = createContext();

const initialState = {
    notification: false,
    userProfile: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked, setIsClicked] = useState (initialState);

    const handleClick = (clicked) => setIsClicked ({ ...initialState, clicked: true});

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);