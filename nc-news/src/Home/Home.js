import React, { Component } from 'react';
import '../App.css';
import Heading from '../Heading';
import ArticleHeader from '../Article/ArticleHeader';
import { Link } from 'react-router-dom';
import * as api from '../api';


class Home extends Component {
  state = {
    articles: [], 
  }

  componentDidMount = async () => {
    const {articles} = await api.fetchArticles()
    this.setState({ articles })
  }

  render() {
    return (
      <div className="Home">
        <Heading />   
        {this.state.articles.sort((a, b) => b.votes - a.votes).map(article =>  <div key={article._id}><Link to={`/articles/${article._id}`}><ArticleHeader article={article}/></Link></div>)}

      </div>
    );
  }

}

export default Home;