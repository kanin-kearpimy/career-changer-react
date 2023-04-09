import React, { useState } from "react";

const App = () => {
  const [rate, setRate] = useState(0);
  const [exchange, setExchange] = useState(1);

  const syncRate = () => {
    setRate(30);
  };

  const handleExchangeChange = (event) => {
    const newExchange = event.target.value;
    setExchange(newExchange);
  };

  return (
    <div>
      <h1>Current Rate: {rate}</h1>
      <button onClick={syncRate}>Sync Rate</button>
      <input type="number" value={exchange} onChange={handleExchangeChange} />
      <h2>Calculated Exchange: {exchange * rate}</h2>
    </div>
  );
};

export default App;
