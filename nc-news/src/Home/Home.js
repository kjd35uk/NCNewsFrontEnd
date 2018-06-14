import React, { Component } from 'react';
import '../App.css';
import Heading from '../Heading';
import ArticleHeader from '../Article/ArticleHeader';
import { Link } from 'react-router-dom';
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

      </div>
    );
  }
  fetchArticles = async query => {
    const {data} = await axios.get(`https://northcoders-news-kirstiecodes.herokuapp.com/api/articles`)
    return data;
  }
}

export default Home;