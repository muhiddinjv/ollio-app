import React from "react";

export const GlobalContext = React.createContext();

export function GlobalState({ children }){
    const [goodId, setGoodId] = React.useState()
  
    return (
      <GlobalContext.Provider value={{ goodId, setGoodId }}>
        {children}
      </GlobalContext.Provider>
    );
};