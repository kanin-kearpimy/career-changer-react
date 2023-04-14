import React, { useState } from 'react';

function App() {
    const [temperature, setTemperature] = useState(0)
    const increaseTemperature = () => {
        setTemperature(temperature + 1)
    }
    const decreaseTemperature = () => {
        setTemperature(temperature - 1)
    }
  return (
    <div id="app">
      <Header temperature={temperature} />
      <Content 
        temperature={temperature}
        />
      <Footer         
        increaseTemperature={increaseTemperature} 
        decreaseTemperature={decreaseTemperature}  
        />
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {props.temperature}</p>
    </header>
  );
}

function Content(props) {
  return (
    <main>
      <Temperature temperature={props.temperature} />
    </main>
  );
}

function Temperature(props) {
  return(
    <div id="temperature">
      <span>{props.temperature} Oc</span>
    </div>
  )
}



function Footer(props) {
  return (
    <footer>
      <button onClick={props.increaseTemperature}>Up</button>
      <button onClick={props.decreaseTemperature}>Down</button>
    </footer>
  );
}

export default App;
