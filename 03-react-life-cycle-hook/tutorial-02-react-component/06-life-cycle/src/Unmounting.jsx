import React from 'react';

class Unmounting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: 1
    }
    this.decreate = this.decreate.bind(this)
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
        <Header />
        <Content temperature={this.state.temperature} />
        <Footer decreate={this.decreate} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    if(this.props.temperature < 0) {
      return (
        <div>
          Error
        </div>
      )
    }else{
      return (
        <main>
          <Temperature temperature={this.props.temperature} />
        </main>
      );
    }

  }
}

class Temperature extends React.Component {
  componentWillUnmount() {
    alert('สาธุ 99')
  }

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
        <button onClick={this.props.decreate}>Down</button>
      </footer>
    );
  }
}

export default Unmounting;