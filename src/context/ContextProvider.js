import { useState, useContext, createContext } from 'react';
import { userDetails } from '../data/dummy';

const StateContext = createContext();

const initialState = {
    notification: false,
    userProfile: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked, setIsClicked] = useState (initialState);
    const [EditMode, setEditMode] = useState (false);
    const [user, setUser] = useState (userDetails);

    const handleEditClick = () => {
        setEditMode (true);
    };


    const handleClick = (clicked) => {
        setIsClicked ({ ...initialState, [clicked]: !isClicked[clicked] });
    }

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, EditMode, handleEditClick, setEditMode, user, setUser }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);