import React from "react";
import Heading from "../Heading";
import ArticleDisplay from "./ArticleDisplay";
import Comments from "../Comments/Comments";
import ArticleHeader from "./ArticleHeader";
import Vote from "../../Vote";
import * as api from "../../api";

class Article extends React.Component {
  state = {
    article: {}
  };

  render() {
    return (
      <div className='article-page'>
        <Heading />
        <div className="article-container-single">
          <ArticleHeader article={this.state.article} />
          <Vote {...this.props} vote={this.vote} id={this.state.article._id} />
          <ArticleDisplay article={this.state.article} />
        </div>
        <Comments {...this.props} article={this.state.article} />
      </div>
    );
  }
  componentDidMount = async () => {
    try {
      const { article } = await api.fetchArticlebyId(
        this.props.match.params.article_id
      );
      this.setState({ article });
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
      else this.props.history.push("500");
    }
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.article_id !== this.props.article_id) {
      try {
        const { article } = await api.fetchArticlebyId(
          this.props.match.params.article_id
        );
        this.setState({ article });
      } catch (err) {
        if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
        else this.props.history.push("500");
      }
    }
  };

  vote = async query => {
    const { article } = this.state;
    api.vote(article._id, query ? "up" : "down");
    this.setState({
      article: {
        ...article,
        votes: query === "up" ? article.votes + 1 : article.votes - 1
      }
    });
  };
}

export default Article;
