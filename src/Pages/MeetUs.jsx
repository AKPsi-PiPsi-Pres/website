import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import BrotherList from "./BrotherList";
import { Button, ButtonGroup } from "@mui/material";
import "./MeetUs.css"

const SHEET_ID = "167TmecKc4cduWtdounqiXDkYgQjssu9cSz4QLljuKLg";
const API_KEY = "AIzaSyAr5dAYznujGAFBNfnrjLLO27hgzelm5Tk";
const RANGE_ACTIVES = "Form Responses 1!C2:L";
const RANGE_EXECUTIVES = "Leadership!C2:L";

export default function MeetUs() {
  const [activeBrothers, setActiveBrothers] = useState([]);
  const [executiveBrothers, setExecutiveBrothers] = useState([]);
  const [viewLeadership, setViewLeadership] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBrothers = useCallback(async (isLeadership) => {
    setIsLoading(true);
    try {
      const range = isLeadership ? RANGE_EXECUTIVES : RANGE_ACTIVES;
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`
      );
      if (isLeadership) {
        setExecutiveBrothers(response.data.values);
      } else {
        setActiveBrothers(response.data.values);
      }
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch active brothers on initial load
    if (activeBrothers.length === 0) {
      fetchBrothers(false);
    }
  }, [fetchBrothers, activeBrothers.length]);

  const makeLeadershipView = () => {
    setViewLeadership(() => {
      const newViewLeadership = true;
      if (newViewLeadership && executiveBrothers.length === 0) {
        fetchBrothers(true);
      }
      return newViewLeadership;
    });
  };

  const makeActiveView = () => {
    setViewLeadership(() => {
      const newViewLeadership = false;
      if (newViewLeadership && executiveBrothers.length === 0) {
        fetchBrothers(true);
      }
      return newViewLeadership;
    });
  };

  const displayedBrothers = viewLeadership ? executiveBrothers : activeBrothers;

  return (
    <div className="meet-us-page pageContainer">
      <div className="content-wrapper">
      <div className="meet-us-header">
      <h1>{viewLeadership ? "Leadership" : "Active Brothers"}</h1>
      <ButtonGroup>
        <Button
          onClick={makeActiveView}
          variant={!viewLeadership ? "contained" : "outlined"}
        >
          {"Active Brothers"}
        </Button>
        <Button
          onClick={makeLeadershipView}
          variant={viewLeadership ? "contained" : "outlined"}
        >
          {"Leadership"}
        </Button>
      </ButtonGroup>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <BrotherList brothers={displayedBrothers} />
      )}
      </div>
    </div>
  );
}
