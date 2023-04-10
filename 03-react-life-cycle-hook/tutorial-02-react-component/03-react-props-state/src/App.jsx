import React from 'react';

class App extends React.Component {
<<<<<<< HEAD
  
  constructor(props) {
  super(props)
  this.state = { 
    temperature: 34,
  };

  this.handleIncrease = this.handleIncrease.bind(this);
  this.handleDecrease = this.handleDecrease.bind(this);
  
}

  handleIncrease() {
    this.setState({ temperature: this.state.temperature + 1 });
  }

  handleDecrease() {
    this.setState({ temperature: this.state.temperature - 1 });
  }
  
  render() {
    return (
      <div id="app">
        <Header temperature={this.state.temperature}/>
        <Content temperature={this.state.temperature}/>
        <Footer 
          onIncrease={this.handleIncrease} 
          onDecrease={this.handleDecrease} />
=======

  constructor(props) {
    super(props)
    this.state = {
      temperature: 30
    }

    this.increase = this.increase.bind(this)
    this.decreate = this.decreate.bind(this)
  }

  increase() {
    let previous_temperature = this.state.temperature
    previous_temperature += 1
    this.setState(
      {
        temperature: previous_temperature
      }
    ) 
  }

  decreate() {
    let previous_temperature = this.state.temperature
    previous_temperature -= 1
    this.setState(
      {
        temperature: previous_temperature
      }
    ) 
  }

  render() {
    return (
      <div id="app">
        <Header temperature={this.state.temperature} />
        <Content temperature={this.state.temperature} />
        <Footer increase={this.increase} decreate={this.decreate} />
>>>>>>> c9ffb139f6cb8af27d936f3b8a49d926fd3c1ab4
      </div>
    );
  }
}

// Code below!!!!

class Header extends React.Component {
  // Pass by hard code javascript

  render() {
    let temperature = 30
    return (
      <header>
        <span>Turn on / off</span>
<<<<<<< HEAD
        <p>Current Temperature: {this.props.temperature} Oc</p>
=======
        <p>Current Temperature: {temperature}</p>
>>>>>>> c9ffb139f6cb8af27d936f3b8a49d926fd3c1ab4
      </header>
    );
  }
}

class Content extends React.Component {
  // code here.
  // hint: how to create props in React class component?
  render() {
    return (
      <main>
        <Temperature temperature={this.props.temperature} />
      </main>
    );
  }
}

class Temperature extends React.Component {
  render() {
    return (
      <div id="temperature">
        <span>{this.props.temperature} Oc</span>
<<<<<<< HEAD
      </div>
=======
    </div>
>>>>>>> c9ffb139f6cb8af27d936f3b8a49d926fd3c1ab4
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
<<<<<<< HEAD
        <button onClick={this.props.onIncrease}>Up</button>
        <button onClick={this.props.onDecrease}>Down</button>
=======
        <button onClick={this.props.increase}>Up</button>
        <button onClick={this.props.decreate}>Down</button>
>>>>>>> c9ffb139f6cb8af27d936f3b8a49d926fd3c1ab4
      </footer>
    );
  }
}

export default App;