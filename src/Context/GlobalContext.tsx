import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

interface globalContextProps {
  children: React.ReactNode;
  value: string;
}

function GlobalProvider({ children }: globalContextProps) {
  const colors = ["#4f772d", "#1122aa", "#16d5bc ", "#744df5"];

  //date Generator function
  const event = new Date(Date.now());
  const dateGen = event.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <GlobalContext.Provider
      value={{
        dateGen,
        colors,
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
