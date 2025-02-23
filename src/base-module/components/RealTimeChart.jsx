import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const RealTimeChart = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categories2, setCategories2] = useState([]);
  const [count, setCount] = useState(11);

  useEffect(() => {
    // Initialize data
    let now = new Date();
    let initCategories = [];
    let initCategories2 = [];
    let initData = [];
    let initData2 = [];

    for (let i = 0; i < 5; i++) {
      initCategories.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
      now = new Date(+now - 2000);
      initCategories2.push(i);
      initData.push(Math.round(Math.random() * 1000));
      initData2.push(+(Math.random() * 10 + 5).toFixed(1));
    }

    setCategories(initCategories);
    setCategories2(initCategories2);
    setData(initData);
    setData2(initData2);

    const interval = setInterval(() => {
      let axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
      
      setData((prevData) => [...prevData.slice(1), Math.round(Math.random() * 1000)]);
      setData2((prevData2) => [...prevData2.slice(1), +(Math.random() * 10 + 5).toFixed(1)]);
      setCategories((prevCategories) => [...prevCategories.slice(1), axisData]);
      setCategories2((prevCategories2) => [...prevCategories2.slice(1), count]);
      setCount((prevCount) => prevCount + 1);
    }, 2100);

    return () => clearInterval(interval);
  }, [count]);

  const option = {
    grid: {
      left: 0,   // Remove left padding
      right: 0,  // Remove right padding
      top: 0,    // Remove top padding
      bottom: 0, // Remove bottom padding
      containLabel: true, // Ensures labels fit within the chart area
    },
   
    legend: {},
    toolbox: {
      show: false,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: categories,
        axisLabel: { color: "#ffffff", fontSize: 10 }
        
      },
      {
        type: "category",
        boundaryGap: true,
        data: categories2,
        axisLabel: { show: false },
      },
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        max: 20,
        min: 0,
        boundaryGap: [0.3, 0.3],
        splitLine: { show: false },
       
        axisLabel: { show: false },
       
      },
      {
        type: "value",
        scale: true,
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2],
        splitLine: { show: false },
        axisLabel: { show: false }, 
      },
    ],
    series: [
      {
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data,
        itemStyle: {
            color: "rgba(255, 255, 255, 0.6)",
           //color: "rgba(165, 190, 0, 0.5)",
       

        },
      },
      {
        type: "line",
        data: data2,
        itemStyle: {
          color: "#ffffff",
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "400px"}} />;
};

export default RealTimeChart;
