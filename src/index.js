import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Test from './Test';
import Test2 from './Test2';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Test/><Test2/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
