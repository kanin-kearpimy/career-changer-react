import React from 'react';
import { getTemp } from './api/getTemp';
class Mounting extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      temperature: 0
    }
  }

  componentDidMount() {
    const real_temperature = getTemp()
    this.setState({temperature: real_temperature})
  }
  
  render() {
    return (
      <div id="app">
        <Header temperature={this.state.temperature} />
        <Content temperature={this.state.temperature} />
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
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
        <button>Up</button>
        <button>Down</button>
      </footer>
    );
  }
}

export default Mounting;