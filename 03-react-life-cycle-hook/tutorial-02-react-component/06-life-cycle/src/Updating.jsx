import React from 'react';

class Updating extends React.Component {
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

  componentDidUpdate() {
    alert('<Updating /> is updated.')
  }

  render() {
    return (
      <div id="app">
        <button onClick={this.increase}>Increase</button>
        <Header temperature={this.state.temperature} />
        <Content temperature={this.state.temperature} />
        <Footer increase={this.increase} decreate={this.decreate} />
      </div>
    );
  }
}

class Header extends React.Component {
  componentDidUpdate() {
    alert('<Header /> is re-render due to props change.')
  }
  render() {
    return (
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: {this.props.temperature}</p>
      </header>
    );
  }
}

class Content extends React.Component {
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
        <button onClick={this.props.increase}>Up</button>
        <button onClick={this.props.decreate}>Down</button>
      </footer>
    );
  }
}

export default Updating;