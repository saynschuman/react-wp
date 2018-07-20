import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {loadArticles} from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
          <button onClick={this.props.loadArticles}>load articles</button>
      </div>
    );
  }
}

export default connect(null, {loadArticles})(App);
