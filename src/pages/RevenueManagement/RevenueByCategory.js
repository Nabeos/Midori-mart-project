import React from 'react'
import styles from "./RevenueByCategory.module.css";
import { Chart } from "react-google-charts";
export default function RevenueByCategory() {
  const data = [
    ["Danh mục sản phẩm", "Phầm trăm"],
    ["Thịt", 11],
    ["Rau", 2],
    ["Thực phẩm khô", 2],
    ["Trái cây", 2],
    ["Thực phẩm chế biến", 7],
  ];
  const options = {
    title: "Danh mục sản phẩm",
    
  };
  return (
    <div>
      <div className="ml-5 text-lg font-semibold" style={{width:"100%"}}>
        Thống kê theo danh mục sản phẩm
      </div>
      <div className='flex justify-center' style={{width:"100%"}}>
        {/* table for sales by category */}
         <div className='flex justify-center'>
         <table
                    className={`${styles.revenuebycategory__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                    style={{ width: "50rem", minHeight: "10rem" }}
                  >
                    <thead>
                      <tr>
                        <th className="border border-slate-300 p-2 text-center">
                          {" "}
                          STT
                        </th>
                        <th className="border border-slate-300 p-2 text-center">
                          {" "}
                          Danh mục
                        </th>
                        <th className="border border-slate-300 p-2 text-center">
                          Doanh thu
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 text-center">1</td>
                        <td className="border border-slate-300 text-center">
                          Rau
                        </td>
                        <td className="border border-slate-300 text-center">
                          23trđ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 text-center">2</td>
                        <td className="border border-slate-300 text-center">
                          Thịt
                        </td>
                        <td className="border border-slate-300 text-center">
                          23trđ
                        </td>                        
                      </tr>
                      <tr>
                        <td className="border border-slate-300 text-center">3</td>
                        <td className="border border-slate-300 text-center">
                          Đồ khô
                        </td>
                        <td className="border border-slate-300 text-center">
                          23trđ
                        </td>                        
                      </tr>
                    </tbody>
                  </table>
         </div>
         {/* revenue by piechart */}
      <div className='-mt-7 flex justify-center' >
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"30rem"}
      height={"300px"}
      
    />
      </div>
      </div>
     
    </div>
  )
}
