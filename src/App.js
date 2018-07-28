import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadArticles } from './actions';
import {mapToArr} from './helpers'

class App extends Component {
  componentDidMount() {
    this.props.loadArticles();
  }

  render() {
    const stateArticles = Array.from(this.props.articles);
    const articleElements = stateArticles.map(article => (
      <li key={article.id}>
        <h3>{article.title}</h3>
      </li>
    ));
    return (
      <div>
        <ul className="article-title">{articleElements}</ul>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      articles: mapToArr(state.articlesReducer.articles),
    };
  },
  { loadArticles },
)(App);
