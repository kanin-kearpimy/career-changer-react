import React, { Component } from 'react';

class GPT extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <span>Header</span>
        <p>This is the header component</p>
      </header>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <main>
        <Temperature />
      </main>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <button>Button 1</button>
        <button>Button 2</button>
      </footer>
    );
  }
}

class Temperature extends Component {
  render() {
    return (
      <div>
        <span>Temperature: 25°C</span>
      </div>
    );
  }
}

export default GPT;
