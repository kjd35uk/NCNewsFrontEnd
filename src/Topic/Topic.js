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
        <h1 className="Topic-header">{`You are browsing ${
          this.props.match.params.topic
        } articles`} <form>
          <input placeholder='Enter article title' value={this.state.title} onChange={(event) => this.handleChange(event, 'title')} type="text" className='input'/>
          <input placeholder='Enter article content' value={this.state.body} onChange={(event) => this.handleChange(event, 'body')} type="text" className='input'/>
          <button onClick={this.handleSubmit} className='button'>Create an article</button></form></h1>
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

  postArticle = async (title, body) => {
    if (title && body) {
      try {
        const data = await api.postArticle(
          title,
          body,
          this.props.match.params.topic
        );
        const article = {...data.article, created_by: {username:'tickle122'}}
        console.log(article)
        this.setState({ articles: [article, ...this.state.articles] , body: '', title: ''});
      } catch (err) {
        console.log(err, 'ERROR')
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