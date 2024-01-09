import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const checkExceedCart = () => {
    if (count > 5) {
      alert("Item exceeded limit (5 item per cart).");
    }
  }

  useEffect(checkExceedCart, [count]);

  return (
    <div>
      <h5>You can only buy up to 5 items</h5>
      <h1>Item in Carts: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
