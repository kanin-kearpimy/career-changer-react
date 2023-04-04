import React, { Component } from 'react';

class App extends Component {
  state = {
    choices: '',
  }

  handleClick = (value) => {
    this.setState({ choices: value })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('Fullname')}>Fullname</button>
        <button onClick={() => this.handleClick('Age')}>Age</button>
        <button onClick={() => this.handleClick('Picture')}>Picture</button>
        <DisplayInfo choices={this.state.choices} />
      </div>
    );
  }
}

class DisplayInfo extends Component {
  render() {
    const { choices } = this.props;

    let info;
    if (choices === 'Fullname') {
      info = <h2>John Doe</h2>;
    } else if (choices === 'Age') {
      info = <h2>30</h2>;
    } else if (choices === 'Picture') {
      info = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
    } else {
      info = <p>Please select an option.</p>;
    }

    return (
      <div>
        {info}
      </div>
    );
  }
}

export default App;
