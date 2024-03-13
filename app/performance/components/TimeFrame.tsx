import React from "react";

export const TimeFrame: React.FC = () => {
  const handleGetData = (timeFrame: string) => {
    // Logic to get data based on the selected time frame
    console.log(`Getting data for ${timeFrame} timeframe...`);
  };

  return (
    <div>
      <button onClick={() => handleGetData("Daily")}>Daily</button>
      <button onClick={() => handleGetData("Weekly")}>Weekly</button>
      <button onClick={() => handleGetData("Yearly")}>Yearly</button>
    </div>
  );
};
