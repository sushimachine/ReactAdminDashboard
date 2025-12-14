import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface StateContextType {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: typeof initialState;
  setIsClicked: React.Dispatch<React.SetStateAction<typeof initialState>>;
  handleClick: (clicked: string) => void;
  screenSize: number | undefined;
  setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const initialState = {
  chat : false,
  cart : false,
  notifications : false,
  profile : false
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true })
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