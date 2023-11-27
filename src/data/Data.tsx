import React from "react";

/** fetching data */
/** fetching data after adding municipality */
const database = [
  {
    id: 1,
    info: { country: "sweden", region: "skane", municipality: "malmo", ageGroup: "60-64", gender: "", assistance: "", livingSituation: "" },
    qolAvg: 0.8,
    lineChart: [{ name: "malmo", data: [0.2, 0.3, 0.4, 0.2] }], // data is based on year order[2020, 2021, 2022, 2023]
    barChart: [{ name: "malmo", data: [0.1, 0.9, 0.2, 0.2, 0.2, 0.3, 0.5, 0.7] }],
  },
  {
    id: 2,
    info: { country: "sweden", region: "skane", municipality: "lund", ageGroup: "", gender: "", assistance: "", livingSituation: "" },
    qolAvg: 0.8,
    lineChart: [{ name: "lund", data: [0.1, 0.4, 0.5, 0.2] }], // data is based on year order[2020, 2021, 2022, 2023]
    barChart: [{ name: "lund", data: [0.1, 0.9, 0.2, 0.2, 0.2, 0.3, 0.5, 0.7] }],
  },
];

/**first fetched data format after start the page, first time load the page  */
const PageFirstLoad = {
  countryList: [], //list of  available country  in your database, for using in drop down menu
  region: [], //list of available region  in your database, for using in drop down menu
  municipality: [], //list available of municipality  in your database, for using in drop down menu
  questionsLabel: ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"], //list of available question in your database
  yearsLabel: [2020, 2021, 2022, 2023], //list of available year in your database
};

function Data() {
  const [val, setVal] = React.useState([]);

  // const barChart = database.map((item) => {
  //   return { [item.info.municipality]: item.barChart };
  // });

  const barChart = database.map((item) => {
    return item.barChart;
  });

  const linechartK = database.map((item) => {
    return item.lineChart;
  });

  const mahyar = barChart.flat(Infinity);

  const jasem = mahyar.map((item) => {
    return;
  });

  const listItem = database.map((item, index) => {
    return (
      <div key={index}>
        {item.info.country}/{item.info.municipality}
      </div>
    );
  });
  const process = () => {
    const lineChart = database.map((item) => {
      return item.lineChart.map((item) => {
        return item.qolAvg;
      });
    });
    setVal(lineChart);
  };
  // process();

  console.log(mahyar);

  //
  return <div style={{ padding: "10rem" }}>{listItem}</div>;
}

export default Data;
