import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

interface globalContextProps {
  children: React.ReactNode;
  value: string;
}

function GlobalProvider({ children }: globalContextProps) {
  const colors = ["#ffd166", "#ef476f", "#16d5bc ", "#744df5"];

  /* date Generator function */
  const event = new Date(Date.now());
  const dateGen = event.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  /* Loading Layout */
  const [isLoading, setIsLoading] = useState(false);

  
  /* Contact support Layout */
  const [showContact, setShowContact] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        dateGen,
        colors,
        isLoading,
        showContact,
        setIsLoading,
        setShowContact,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}


//
function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { useGlobalContext, GlobalProvider };
