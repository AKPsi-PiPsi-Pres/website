import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SHEET_ID = '1YY9TyYXJPHNJ8n1M2O9iKQaB00oCIghhkb5UpxTxV0g';
const API_KEY = 'AIzaSyB4VMnva4PLLAocjljvt4dLtA-kHaSWcu0';
const RANGE = 'Form Responses 1!B2:G';

const App = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
            );
            setData(response.data.values);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Company</th>
                <th>Sector</th>

              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default App;