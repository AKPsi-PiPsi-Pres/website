import React, { useState } from "react";
import axios from "axios";
import CareerDataRow from "./CareerDataRow";

const SHEET_ID = "1YY9TyYXJPHNJ8n1M2O9iKQaB00oCIghhkb5UpxTxV0g";
const API_KEY = "AIzaSyB4VMnva4PLLAocjljvt4dLtA-kHaSWcu0";
const RANGE = "Form Responses 1!B2:G";

const TableInfo = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2024");

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`,
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
    <div className="tabs is-centered is-toggle is-toggle-rounded">
      <ul className="years">
        {Object.keys(data).map(year => (
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
          <tr className="accounting-row">
            <td colSpan="4"><span className="subtitle has-text-weight-semibold">Accounting</span></td>
          </tr>
          <tbody className="accounting-data">{renderTableData('Accounting')}</tbody>
          <tr className="finance-row">
            <td colSpan="4"><span className="subtitle has-text-weight-semibold">Finance</span></td>
          </tr>
          <tbody className="finance-data">{renderTableData('Finance')}</tbody>
          <tr className="consulting-row">
            <td colSpan="4"><span className="subtitle has-text-weight-semibold">Consulting</span></td>
          </tr>
          <tbody className="consulting-data">{renderTableData('Consulting')}</tbody>
          <tr className="marketing-row">
            <td colSpan="4"><span className="subtitle has-text-weight-semibold">Marketing</span></td>
          </tr>
          <tbody className="marketing-data">{renderTableData('Marketing')}</tbody>
          <tr className="tech-row">
            <td colSpan="4"><span className="subtitle has-text-weight-semibold">Technology</span></td>
          </tr>
          <tbody className="tech-data">{renderTableData('Technology')}</tbody>
          <tr className="misc-row">
            <td colSpan="4"><span className="subtitle has-text-weight-semibold">Miscellaneous</span></td>
          </tr>
          <tbody className="misc-data">{renderTableData('Misc')}</tbody>
        </tbody>
      </table>
    </div>
  </div>
);
};

export default TableInfo;
