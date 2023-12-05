import React, { createContext, useContext, useState, useEffect } from "react";
import { SnackbarAlert } from "../Components/UI/Snackbar/SnackbarAlert";

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
// const GlobalContext = createContext<globalContextProps|null>(null);
const GlobalContext = createContext();

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
    surveyFiller: "",
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
      { surveyFiller: formSelectedData.surveyFiller },
    ],
  };

  /**rendering charts */
  const [lineChartData, setLineChartData] = useState();
  const [barChartData, setBarChartData] = useState();

  // const yearForChart = listItem.map((item)=>{
  //   return (item.data.lineChart.year);
  // });

  useEffect(() => {
    const series = listItem.map((item: any) => {
      return { name: item.data.lineChart.name, data: item.data.lineChart.data };
    });
    setLineChartData(series);
  }, [listItem]);

  useEffect(() => {
    const series = listItem.map((item: any) => {
      return { name: item.data.barChart.name, data: item.data.barChart.data };
    });
    setBarChartData(series);
  }, [listItem]);

  /* colors */
  const colors = ["#4895ef", "#ef476f", "#16d5bc", "#744df5"];

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

  //-------------------------------------------//
  /**Add new item to the list (fetching) */
  async function fetchingNewItem() {
    if (lengthOfListItem === 4) {
      setLimitationListItemError(true);
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch("https://hestia-agora.com/ascot/filteredresponse/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formSelectedDataArr),
      });

      // console.log(response);
      // if (response.statusText === "No reports matching filters") {
      //   throw new Error(response.statusText);
      // }

      const data = await response.json();
      if (data.barChart && data.lineChart && data.info && data.qolAvg) {
        setListItem((prevData) => {
          return [...prevData, { ["id"]: Math.random(), data }];
        });
      } else {
        alert("There is no such information as you requested, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finalized");
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      // console.log(JSON.stringify(formSelectedDataArr));
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
        lineChartData,
        barChartData,
        // yearForChart,
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
