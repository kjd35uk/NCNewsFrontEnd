import React, { Component } from "react";
import Heading from "../Components/Heading";
import ArticleHeader from "./Article/ArticleHeader";
import { Link } from "react-router-dom";
import * as api from "../api";
import Users from '../Components/Users';
import Loading from './Loading';


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
    if(this.state.articles.length > 0) {
    return (
      <div className="App">
        <Heading />
        <Users fetchArticlesbyUserId={this.fetchArticlesbyUserId} users={this.state.users}/>
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
  return <Loading />;
}

  fetchArticlesbyUserId = async (username) => {
    const user = [...this.state.users].find(user => user.username === username)
    const id = user._id
  try {
    const { articles } = await api.fetchArticlesbyUserId(id);
    this.setState({ articles });

  } catch (err) {
    if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
    else this.props.history.push("500");
  }
};
}

export default Home;
