import React, { useState } from 'react';

function App() {
    // adding state here.
    const [choices, setChoices] = useState()

  const handleClick = (value) => {
    setChoices(value)
  };

  return (
    <div>
      <button onClick={() => handleClick('Fullname')}>Fullname</button>
      <button onClick={() => handleClick('Age')}>Age</button>
      <button onClick={() => handleClick('Picture')}>Picture</button>
      <DisplayInfo choices={choices} />
    </div>
  );
}

function DisplayInfo(props) {

  let element;
  if (props.choices === 'Fullname') {
    element = <h2>John Doe</h2>;
  } else if (props.choices === 'Age') {
    element = <h2>30</h2>;
  } else if (props.choices === 'Picture') {
    element = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    element = <p>Please select an option.</p>;
  }

  return (
    <div>
      {element}
    </div>
  );
}

export default App;
