import React, { Component } from 'react';
require('../scss/styles.scss');

import MainContainer from './MainContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Trivia Hapi</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;