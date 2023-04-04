import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

// Code below!!!!

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
    return (
      <main>
        <Temperature />
      </main>
    );
  }
}

class Temperature extends React.Component {
  render() {
    const { temperature } = this.props;
    return (
      <div id="temperature">
        <span>{ temperature } Oc</span>
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

export default App;