import React, { useState } from "react";
import { useEffect } from "react";

// Auto Sync
const AutoSync = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  const syncInfo = () => {
    setName("James");
    setAge(99);
    setPosition("Instructor");
  };

  useEffect(syncInfo, [])

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Position: {position}</h3>
    </div>
  );
};

export default AutoSync;
