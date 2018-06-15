import React, { Component } from "react";
import Heading from "../Heading";
import ArticleHeader from "../Article/ArticleHeader";
import { Link } from "react-router-dom";
import * as api from "../api";

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    try {
      const { articles } = await api.fetchArticles();
      this.setState({ articles });
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
      else this.props.history.push("500");
    }
  };

  render() {
    const articles = [...this.state.articles];

    return (
      <div className="App">
        <Heading />
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
}

export default Home;
