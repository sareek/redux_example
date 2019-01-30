import React, { Component } from 'react';

import Post from './component/Post'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Welcome</p>
        <Post />
      </div>
    );
  }
}

export default App;
