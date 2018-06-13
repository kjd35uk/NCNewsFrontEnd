import React, { Component } from 'react';
import '../App.css';
import Heading from '../Heading';
import ArticleHeader from '../Article/ArticleHeader';
import { Route, Link } from 'react-router-dom';
import articleList from '../data/articleList';
import axios from 'axios';

class Home extends Component {
  state = {
    articles: [], 
  }

  componentDidMount = async () => {
    const {articles} = await this.fetchArticles()
    this.setState({ articles })
  }

  render() {
    return (
      <div className="Home">
        <Heading />   
        {this.state.articles.map(article =>  <Link to={`/articles/${article._id}`}><ArticleHeader article={article}/></Link>)}
        {/* {this.state.articles.map(article => <div><h3>{article.title}</h3><p>{article.body}</p></div>)} */}

      </div>
    );
  }
  fetchArticles = async query => {
    const {data} = await axios.get(`https://northcoders-news-kirstiecodes.herokuapp.com/api/articles`)
    return data;
  }
}

export default Home;