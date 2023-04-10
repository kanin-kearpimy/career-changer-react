import React, { useState } from 'react';

function App() {
    // adding state here.
  const [state, setState] = useState("")

  const handleClick = (value) => {
    // code here.
    setState(value) 
  };

  return (
    <div>
      <button onClick={() => handleClick('Fullname')}>Fullname</button>
      <button onClick={() => handleClick('Age')}>Age</button>
      <button onClick={() => handleClick('Picture')}>Picture</button>
      <button onClick={() => handleClick('')}>Empty</button>
      <DisplayInfo state={state}/>
    </div>
  );
}

function DisplayInfo(props) {

  let DivElement = <div></div>;
  if (props.state === 'Fullname') {
    DivElement = <h2>John Doe</h2>;
  } else if (props.state === 'Age') {
    DivElement = <h2>30</h2>;
  } else if (props.state === 'Picture') {
    DivElement = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    DivElement = <p>Please select an option.</p>;
  }

  return (
    <div>
      {DivElement}
    </div>
  );
}

export default App;
