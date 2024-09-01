import React, { useState, useEffect } from "react";
import axios from "axios";
import CareerDataRow from "./CareerDataRow";
import "./CareerTable.css";

const SHEET_ID = "1YY9TyYXJPHNJ8n1M2O9iKQaB00oCIghhkb5UpxTxV0g";
const API_KEY = "AIzaSyB4VMnva4PLLAocjljvt4dLtA-kHaSWcu0";
const RANGE = "Form Responses 1!B2:G";

const TableInfo = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2024");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const values = response.data.values;

        const mainObj = {
          "2020": { "Accounting": [], "Finance": [], "Consulting": [], "Marketing": [], "Technology": [], "Misc": [] },
          "2019": { "Accounting": [], "Finance": [], "Consulting": [], "Marketing": [], "Technology": [], "Misc": [] },
          "2018": { "Accounting": [], "Finance": [], "Consulting": [], "Marketing": [], "Technology": [], "Misc": [] },
          "2021": { "Accounting": [], "Finance": [], "Consulting": [], "Marketing": [], "Technology": [], "Misc": [] },
          "2022": { "Accounting": [], "Finance": [], "Consulting": [], "Marketing": [], "Technology": [], "Misc": [] },
          "2023": { "Accounting": [], "Finance": [], "Consulting": [], "Marketing": [], "Technology": [], "Misc": [] },
          "2024": { "Accounting": [], "Finance": [], "Consulting": [], "Marketing": [], "Technology": [], "Misc": [] },
          "2025": { "Accounting": [], "Finance": [], "Consulting": [], "Marketing": [], "Technology": [], "Misc": [] }
        };

        values.forEach(row => {
          mainObj[row[1]][row[2]].push({ "Name": row[0], "Position": row[5], "Company": row[4], "Sector": row[3] });
        });

        setData(mainObj);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const renderTableData = (category) => {
    return data[selectedYear]?.[category]?.map((row, index) => (
      <CareerDataRow key={index} data={row} />
    ));
  };

  return (
    <div>
      <div className="tabs">
        <ul className="years">
          {Object.keys(data)
          .sort((a, b) => b - a)
          .map(year => (
            <li key={year} className={selectedYear === year ? 'is-active' : ''} onClick={() => handleYearChange(year)}>
              <a>{year}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="careers-container">
        <table className="careers-table table is-fullwidth is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Company</th>
              <th>Sector</th>
            </tr>
          </thead>
          <tbody>
            {["Accounting", "Finance", "Consulting", "Marketing", "Technology", "Misc"].map(category => {
            const categoryRows = renderTableData(category) || [];
            if (categoryRows.length > 0) {
              return (
              <React.Fragment key={category}>
                <tr>
                  <td colSpan="4" className="subtitle has-text-weight-semibold"
                  style={{ textDecoration: 'none', fontWeight: 'bold' }}
                  >{category}</td>
                </tr>
                {categoryRows}
              </React.Fragment>
              );
            } 
            return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableInfo;
