import React from "react";
import { Link } from "react-router-dom";
import ArticleHeader from "../Article/ArticleHeader";
import * as api from "../api";
import Heading from "../Heading";

class Topic extends React.Component {
  state = {
    articles: []
  };
  render() {
    const articles = [...this.state.articles];

    return (
      <div>
        <Heading />
        <h1 className="Topic-header">{`You are browsing ${
          this.props.match.params.topic
        } articles`}</h1>
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
  componentDidMount = async () => {
    try {
      const { articles } = await api.fetchArticlesbyTopic(
        this.props.match.params.topic
      );
      this.setState({ articles });
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
      else this.props.history.push("500");
    }
  };

  componentDidUpdate = async prevProps => {
    if (prevProps !== this.props) {
      try {
        const { articles } = await api.fetchArticlesbyTopic(
          this.props.match.params.topic
        );
        this.setState({ articles });
      } catch (err) {
        if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
        else this.props.history.push("500");
      }
    }
  };
}

export default Topic;
