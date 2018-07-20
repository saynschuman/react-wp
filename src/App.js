import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadArticles } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.loadArticles();
  }
  toHtml = html => {
    return html.dangerouslySetInnerHTML;
  };
  render() {
    const stateArticles = Array.from(this.props.articles);
    const articleElements = stateArticles.map(article => (
      <li key={article.id}>
        <h2>{article.title.rendered}</h2>
        <h4>{article.date}</h4>
        <div>{article.content.rendered}</div>
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
      articles: state.articlesReducer,
    };
  },
  { loadArticles },
)(App);
