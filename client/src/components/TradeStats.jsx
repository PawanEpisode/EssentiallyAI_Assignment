import React from "react";

const TradeStats = ({ tradeStats }) => {
  return (
    <div className="trade-stats">
      <h2>
        Trade Statistics for {tradeStats.symbol} on {tradeStats.from}
      </h2>
      <p>Open: {tradeStats.open}</p>
      <p>High: {tradeStats.high}</p>
      <p>Low: {tradeStats.low}</p>
      <p>Close: {tradeStats.close}</p>
      <p>Volume: {tradeStats.volume}</p>
    </div>
  );
};

export default TradeStats;
