import React, { useState } from "react";

// Manual Sync
const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  const syncInfo = () => {
    setName("James");
    setAge(99);
    setPosition("Instructor");
  };

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Position: {position}</h3>
      <button onClick={() => {syncInfo()}}>Sync Info</button>
    </div>
  );
};

export default App;
