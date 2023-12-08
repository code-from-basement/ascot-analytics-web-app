import React, { createContext, useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

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

  /**Fetching List Items in filters */
  const [filtersListData, setFiltersListsData] = useState({
    countries: "",
    regions: "",
    municipalities: "",
  });
  async function fetchingFiltersLists(urlLists: []) {
    try {
      setIsLoading(true);
      const response = await Promise.all(urlLists.map((url) => fetch(url)));
      const data = await Promise.all(response.map((item) => item.json()));

      setFiltersListsData({
        countries: data[0].COUNTRIES,
        regions: data[1].REGIONS,
        municipalities: data[2].MUNICIPALITIES,
      });
    } catch (error) {
      console.log("list error");
    } finally {
      console.log("list finally");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }

  // -------------------------------//

  /**Rendering charts */
  const [lineChartData, setLineChartData] = useState();
  const [barChartData, setBarChartData] = useState();

  useEffect(() => {
    const series = listItem.map((item: any) => {
      return { name: item.data.lineChart.name.charAt(0).toUpperCase() + item.data.lineChart.name.slice(1), data: [{ x: item.data.lineChart.year, y: item.data.lineChart.data }] };
    });
    setLineChartData(series);
    console.log(listItem, "list item");
  }, [listItem]);
  console.log(lineChartData, "_____line chart____");

  useEffect(() => {
    const series = listItem.map((item: any) => {
      return { name: item.data.barChart.name, data: item.data.barChart.data };
    });
    setBarChartData(series);
  }, [listItem]);
  console.log(barChartData, "___bar chart___");

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

  /**error handling during fetching more then 4 items */
  const [limitationListItemError, setLimitationListItemError] = useState(false);
  //
  /* Loading Layout */
  const [isLoading, setIsLoading] = useState(false);

  /* Container for table and chart container*/
  const [showContainerLayout, setShowContainerLayout] = useState(true);

  /* Contact support Layout */
  const [showContact, setShowContact] = useState(false);

  //-------------------------------------------//
  /* Hot Toast Alert for adding and deleting item from list */
  const [notifyStatus, setNotifyStatus] = useState("");
  const notifyAddItem = (message: string) => {
    setNotifyStatus("success");
    toast.success(`${message}`, { duration: 2000 });
  };

  const notifyDeleteItem = (message: string) => {
    setNotifyStatus("error");
    toast.error(`${message}`, { duration: 2000 });
  };

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

      const data = await response.json();
      if (data.barChart && data.lineChart && data.info && data.qolAvg) {
        setListItem((prevData) => {
          return [...prevData, { ["id"]: Math.random(), data }];
        });
        notifyAddItem("New municipality Successfully  added to the list.");
      } else {
        alert("There is no such information as you requested, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finalized");
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
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
        showContainerLayout,
        filtersListData,
        notifyStatus,
        setIsLoading,
        setShowContact,
        setFormSelectedData,
        fetchingNewItem,
        setListItem,
        setLimitationListItemError,
        setShowContainerLayout,
        fetchingFiltersLists,
        notifyAddItem,
        notifyDeleteItem,
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
