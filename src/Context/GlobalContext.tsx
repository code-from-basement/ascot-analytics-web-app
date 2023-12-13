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

  /**Rendering charts */
  const [lineChartData, setLineChartData] = useState();
  const [barChartData, setBarChartData] = useState();

  useEffect(() => {
    const series = listItem.map((item: any) => {
      return { name: item.data.lineChart.name.charAt(0).toUpperCase() + item.data.lineChart.name.slice(1), data: { x: item.data.lineChart.year, y: item.data.lineChart.data } };
    });
    setLineChartData(series);
    console.log(listItem, "list item");
  }, [listItem]);
  console.log(lineChartData, "_____line chart DAta____");

  useEffect(() => {
    const series = listItem.map((item: any) => {
      return { name: item.data.barChart.name.charAt(0).toUpperCase() + item.data.barChart.name.slice(1), data: item.data.barChart.data };
    });
    setBarChartData(series);
  }, [listItem]);
  console.log(barChartData, "___bar chart___");

  /* colors */
  const colors = ["#4895ef", "#ef476f", "#16d5bc", "#6337f3"];

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
  //**Limited List item modal message show */
  const [limitedListShow, setLimitedListShow] = useState(false);
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
      setLimitedListShow(true);
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
        setListItem((prevData): any => {
          return [...prevData, { ["id"]: Math.random(), data }];
        });

        setTimeout(() => {
          notifyAddItem("New municipality Successfully  added to the list.");
        }, 500);
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
        notifyStatus,
        limitedListShow,
        setIsLoading,
        setShowContact,
        setFormSelectedData,
        fetchingNewItem,
        setListItem,
        setLimitationListItemError,
        setShowContainerLayout,
        notifyAddItem,
        notifyDeleteItem,
        setLimitedListShow,
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
