import React, { useState } from "react";
import axios from "axios";
import TradeStats from "./TradeStats";

const StockForm = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [date, setDate] = useState("");
  const [tradeStats, setTradeStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/fetchStockData"; // Replace with your server's URL
      const requestData = {
        // Your POST data goes here
        stockTickerSymbol: stockSymbol,
        date: date,
      };
      const response = await axios.post(url, requestData);
      setTradeStats(response?.data?.polygonData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setTradeStats(null);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="stockSymbol">Stock Symbol:</label>
        <input
          type="text"
          id="stockSymbol"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value.toUpperCase())}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Get Trade Statistics</button>
      </form>
      {tradeStats && <TradeStats tradeStats={tradeStats} />}
    </div>
  );
};

export default StockForm;
