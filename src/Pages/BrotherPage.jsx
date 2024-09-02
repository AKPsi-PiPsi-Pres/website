import React from "react";
import { useParams } from "react-router-dom";
import ActiveBrother from "./ActiveBrother";
import NotFoundPage from "./NotFoundPage";
import { useCallback, useState, useEffect } from "react";
import axios from "axios";

export default function BrotherPage() {
  const [brotherInfo, setBrotherInfo] = useState(null);
  const { name } = useParams();
  const SHEET_ID = "167TmecKc4cduWtdounqiXDkYgQjssu9cSz4QLljuKLg";
  const API_KEY = process.env.REACT_APP_ACTIVE_INFO_KEY;
  const range = "Form Responses 1!C2:L";

  const getBrotherInfo = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`,
      );
      const brotherIndex = response.findIndex(
        (brother) => brother.name.replace(" ", "-") === name,
      );
      if (brotherIndex !== -1) {
        setBrotherInfo(response[brotherIndex]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    getBrotherInfo(false);
  }, [getBrotherInfo, name]);

  if (!brotherInfo) {
    return <NotFoundPage brother={true} />;
  }

  return (
    <div>
      <ActiveBrother brotherInfo={brotherInfo} />
    </div>
  );
}
