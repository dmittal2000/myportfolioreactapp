import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Circle2 } from 'react-preloaders';

class App extends Component {

  render() {
    return (
      <>
        <React.Fragment>
          <Circle2 />
        </React.Fragment>

        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>

      </>
    );
  }
}

export default App;  