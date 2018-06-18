import React, { Component } from "react";
import Heading from "../Heading";
import ArticleHeader from "../Article/ArticleHeader";
import { Link } from "react-router-dom";
import * as api from "../api";
import Users from '../Users/Users';

class Home extends Component {
  state = {
    articles: [],
    users:[]
  };

  componentDidMount = async () => {
    try {
      const { articles } = await api.fetchArticles();
      const { users } = await api.fetchUsers()
      this.setState({ articles, users });

    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
      else this.props.history.push("500");
    }
  };

  componentDidUpdate = async prevProps => {
    if (prevProps !== this.props) {
      try {
        const { articles } = await api.fetchArticles();
        this.setState({ articles });
      } catch (err) {
        if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
        else this.props.history.push("500");
      }
    }
  };
 
  render() {
    const articles = [...this.state.articles];
    return (
      <div className="App">
        <Heading />
        <Users getArticlesByUser={this.getArticlesByUser} users={this.state.users}/>
        <div className="article-container">
          {articles.sort((a, b) => b.votes - a.votes).map(article => (
            <div className="article" key={article._id}>
              <Link to={`/articles/${article._id}`}>
                <ArticleHeader article={article} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

getArticlesByUser = async (username) => {
const { articles } = await api.fetchArticles();
// const articles = [...this.state.articles]
if(username) {
  const newArticles = articles.filter(article => article.created_by.username === username)
  this.setState({articles: newArticles})
  }
  else this.setState({articles})
}
}

export default Home;
