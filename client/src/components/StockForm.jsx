import React, { useState } from "react";
import axios from "axios";
import TradeStats from "./TradeStats";
import Loading from "./Loading";
import ErrorComp from "./ErrorComp";

import "./StockForm.css";

const StockForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("");
  const [date, setDate] = useState("");
  const [tradeStats, setTradeStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = "http://localhost:5000/api/fetchStockData"; // Replace with your server's URL
      const requestData = {
        // Your POST data goes here
        stockTickerSymbol: stockSymbol,
        date: date,
      };
      const response = await axios.post(url, requestData);
      console.log("response", response);
      if (response?.data?.status === 200) {
        setError(false);
        setTradeStats(response?.data?.polygonData);
      } else {
        setError(true);
        setTradeStats(null);
        setStockSymbol("");
        setDate("");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setTradeStats(null);
    }
    // setError(false);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {!tradeStats && (
        <div className="stockForm">
          <form className="formWrapper" onSubmit={handleSubmit}>
            <div class="heading">
              <p class="heading-title">Stock Trade Statictics Form</p>
              <span class="small-desc">
                A Tool to display the trade statistics (Open, High, Low, Close,
                Volume) of a particular stock for a particular day
              </span>
            </div>
            <div className="stockSymbolWrapper">
              <label className="labelText" htmlFor="stockSymbol">
                Stock Symbol:
              </label>
              <input
                type="text"
                id="stockSymbol"
                value={stockSymbol}
                onChange={(e) => setStockSymbol(e.target.value.toUpperCase())}
                required
                maxLength={4}
              />
            </div>
            <div className="particularDate">
              <label className="labelText" htmlFor="date">
                Stock Date:
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            {error ? <ErrorComp /> : null}
            <button className="tradeBtn labelText" type="submit">
              Get Trade Statistics
            </button>
          </form>
        </div>
      )}
      {tradeStats && (
        <TradeStats
          tradeStats={tradeStats}
          setTradeStats={setTradeStats}
          setStockSymbol={setStockSymbol}
          setDate={setDate}
        />
      )}
    </>
  );
};

export default StockForm;
