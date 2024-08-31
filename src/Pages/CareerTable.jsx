import React, { useState } from "react";
import axios from "axios";
import CareerDataRow from "./CareerDataRow";

const SHEET_ID = "1YY9TyYXJPHNJ8n1M2O9iKQaB00oCIghhkb5UpxTxV0g";
const API_KEY = "AIzaSyB4VMnva4PLLAocjljvt4dLtA-kHaSWcu0";
const RANGE = "Form Responses 1!B2:G";

const TableInfo = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`,
      );
      setData(response.data.values);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Company</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>
          {console.log("HERE")}
          {data.map((info) => (
            <CareerDataRow key={info.id} data={info} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
