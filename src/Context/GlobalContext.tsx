import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

interface globalContextProps {
  children: React.ReactNode;
  value: string;
  country: undefined | string;
  region: undefined | string;
  municipality: undefined | string;
  ageGroup: undefined | string;
  gender: undefined | string;
  livingSituation: undefined | string;
  assistance: undefined | string;
}

function GlobalProvider({ children }: globalContextProps) {
  const [formSelectedData, setFormSelectedData] = useState({
    country: "",
    region: "",
    municipality: "",
    ageGroup: "",
    gender: "",
    livingSituation: "",
    assistance: "",
  });

  /* colors */
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

  /**Add new item to the list (fetching) */
  const fetchingNewItem = async () => {
    const response = await fetch("hestia-agora.com/ascot/filteredresponse/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSelectedData),
    });

    console.log(response);
  };

  return (
    <GlobalContext.Provider
      value={{
        dateGen,
        colors,
        isLoading,
        showContact,
        formSelectedData,
        setIsLoading,
        setShowContact,
        setFormSelectedData,
        fetchingNewItem,
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
