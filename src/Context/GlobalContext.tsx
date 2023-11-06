import React, { createContext, useContext} from "react";

const GlobalContext = createContext();

interface globalContextProps{
    children: any;
    value:string;
}


function GlobalProvider({ children }: globalContextProps) {

    //date Generator function
    const event = new Date(Date.now());
    const dateGen = event.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return(
        <GlobalContext.Provider 
            value={{ 
                dateGen
            }}
        >
        {children}
        </GlobalContext.Provider>
    )

}
function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
  }
  
  export { useGlobalContext, GlobalProvider };