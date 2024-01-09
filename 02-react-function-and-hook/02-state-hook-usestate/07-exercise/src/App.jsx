import React, { useState } from 'react';

function App() {
    // adding state here.

  const handleClick = (value) => {
    // code here.
  };

  return (
    <div>
      <button>Fullname</button>
      <button>Age</button>
      <button>Picture</button>
      <DisplayInfo />
    </div>
  );
}

function DisplayInfo(props) {

  let ___;
  if (___ === 'Fullname') {
    ___ = <h2>John Doe</h2>;
  } else if (___ === 'Age') {
    ___ = <h2>30</h2>;
  } else if (___ === 'Picture') {
    ___ = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    ___ = <p>Please select an option.</p>;
  }

  return (
    <div>
      {___}
    </div>
  );
}

export default App;
