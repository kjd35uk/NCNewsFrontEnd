import React from "react";
import { Link } from "react-router-dom";
import ArticleHeader from "../Article/ArticleHeader";
import * as api from "../api";
import Heading from "../Heading";

class Topic extends React.Component {
  state = {
    articles: [],
    title:'',
    body: ''
  };
  render() {

    return (
      <div>
        <Heading />
        <h1 className="Topic-header" id='topic-header-words'>{`You are browsing ${
          this.props.match.params.topic
        } articles`} 
        <Link to={`/topics/${this.props.match.params.topic}/create_article`}>
                <button className='button' id='article-create-button'>CREATE AN ARTICLE</button>
              </Link>
              </h1>
        <div className="article-container">
          {this.state.articles.map(article => (
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
      )
      articles.sort((a, b) => b.votes - a.votes);
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
        articles.sort((a, b) => b.votes - a.votes);

        this.setState({ articles });
      } catch (err) {
        if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
        else this.props.history.push("500");
      }
    }
  };

  handleChange = (event, targetState) => {
    event.preventDefault();
    const newVal = event.target.value;
    this.setState ({
      [targetState]: newVal
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.postArticle(this.state.title, this.state.body)
  }

}


export default Topic;
