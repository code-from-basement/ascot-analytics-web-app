import React, { createContext, useContext, useState } from "react";

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
  //**List Item  */
  const [listItem, setListItem] = useState([]);
  //
  const lengthOfListItem = +listItem.length;
  //

  const [formSelectedData, setFormSelectedData] = useState({
    country: "",
    region: "",
    municipality: "",
    ageGroup: "",
    gender: "",
    livingSituation: "",
    assistance: "",
  });

  /*the object use for main fetching*/

  const formSelectedDataArr = {
    filters: [
      { country: formSelectedData.country },
      { region: formSelectedData.region },
      { municipality: formSelectedData.municipality },
      { ageGroup: formSelectedData.ageGroup },
      { gender: formSelectedData.gender },
      { livingSituation: formSelectedData.livingSituation },
      { assistance: formSelectedData.assistance },
    ],
  };

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
  //
  /**error handling during fetching m,ore then 4 items */
  const [limitationListItemError, setLimitationListItemError] = useState(false);
  //
  /* Loading Layout */
  const [isLoading, setIsLoading] = useState(false);
  /* Contact support Layout */
  const [showContact, setShowContact] = useState(false);

  /**Add new item to the list (fetching) */
  async function fetchingNewItem() {
    if (lengthOfListItem === 4) {
      setLimitationListItemError(true);
      return;
    }
    try {
      const response = await fetch("https://hestia-agora.com/ascot/filteredresponse/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formSelectedDataArr),
      });
      const data = await response.json();
      setListItem((prevData) => {
        return [...prevData, { ["id"]: Math.random(), data }];
      });
    } catch {
      console.log("error");
    } finally {
      console.log("finalized");
      console.log(JSON.stringify(formSelectedDataArr));
    }
  }
  console.log(listItem);

  //

  return (
    <GlobalContext.Provider
      value={{
        dateGen,
        colors,
        isLoading,
        showContact,
        formSelectedData,
        listItem,
        lengthOfListItem,
        limitationListItemError,
        setIsLoading,
        setShowContact,
        setFormSelectedData,
        fetchingNewItem,
        setListItem,
        setLimitationListItemError,
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
