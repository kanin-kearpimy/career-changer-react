import React from 'react';

class App extends React.Component {
  
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
      </div>
    );
  }
}

// Code below!!!!

class Header extends React.Component {
  // code here.
  // hint: how to create props in React class component?
  render() {
    return (
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: {this.props.temperature} Oc</p>
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
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <button onClick={this.props.onIncrease}>Up</button>
        <button onClick={this.props.onDecrease}>Down</button>
      </footer>
    );
  }
}

export default App;