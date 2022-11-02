import React from "react";
import styles from "./RevenueByLineGraph.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import { Chart } from "react-google-charts";
export default function RevenueByLineGraph() {
    // chart data
    const data = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
      ];
    // chart options
    const optionsSales = {
        title: "Thống kê doanh số",
        curveType: "function",
        legend: { position: "right" },
        series: {
            1: { curveType: "function" },
          },
      };

      const optionsRevenue = {
        title: "Thống kê lợi nhuận",
        curveType: "function",
        legend: { position: "right" },
        series: {
            1: { curveType: "function" },
          },
      };
  return (
    <div className="mt-8" >
      <div className="flex flex-row" style={{width:"100%"}}>
        <div className="ml-5 text-lg font-semibold" style={{width:"100%"}}>
            Thống kê doanh thu
        </div>
        <div className="flex justify-end mr-5 " style={{width:"100%"}}>
          <Input className="hover:border-green-700 focus:border-green-700 no-shadow" type="date" style={{height:"2.2rem",width:"20%", borderRadius:"5px"}}/>
        </div>
      </div>
        
      <div>
      <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={optionsSales}
    />
        </div>
        <div>
        <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={optionsRevenue}
    />
        </div>
    </div>
  );
}
