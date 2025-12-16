import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const initialState = {
  chat : false,
  cart : false,
  notifications : false,
  profile : false
}

const StateContext = createContext<StateContextType | undefined>(undefined);

type ClickedKey = keyof typeof initialState;

interface StateContextType {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: typeof initialState;
  setIsClicked: React.Dispatch<React.SetStateAction<typeof initialState>>;
  handleClick: (clicked: ClickedKey) => void;
  screenSize: number | undefined;
  setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  // closeAll : (clicked: ClickedKey) => void;
}
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  // const [closeIcons, setCloseIcons] = useState(initialState)

  
  const handleClick = (clicked: ClickedKey) => {
    setIsClicked(prev => ({
      ...initialState,
      [clicked]: !prev[clicked],
    }))
  }

  return (
    <StateContext.Provider
      value = {{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        // closeAll
      }} >
        {children}
      </StateContext.Provider>
  );
};


export const useStateContext = () => {
  const context = useContext(StateContext)

  if (context === undefined) {
      throw new Error('useStateContext must be used within a ContextProvider');
  }
  return context;
}