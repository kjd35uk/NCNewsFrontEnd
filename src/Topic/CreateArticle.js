import React from "react";
import * as api from "../api";
import Heading from '../Heading'


class CreateArticle extends React.Component {
  state = {
    title: "",
    body: "",
    message:""
  };
  render() {
    return (
      <div>
      <Heading/>
    <form className='article-form'>
    <span className='article-form-span'>Article title:
      <input
        placeholder="Enter article title"
        value={this.state.title}
        onChange={event => this.handleChange(event, "title")}
        type="text"
        className="input"
        id='article-title-input'
      />
      </span>
      <br/>
      <span className='article-form-span'>Article content:
      <textarea
        placeholder="Enter article content"
        value={this.state.body}
        onChange={event => this.handleChange(event, "body")}
        type="text"
        className="input"
        id='article-body-input'
      />
      </span>

      <br/>
      <button onClick={this.handleSubmit} className="button" id='article-page-create-button'>
        Create article here!
      </button>
    </form>
    {this.state.message && (<p>Thanks for contributing! You can check out your article on the home or topic pages!</p>)}
    </div>)

  }

  handleChange = (event, targetState) => {
    event.preventDefault();
    const newVal = event.target.value;
    this.setState ({
      [targetState]: newVal
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.postArticle(this.state.title, this.state.body, this.props.match.params.topic)
    this.setState({
      title: "",
      body: "",
      message:""
    })
  }

  postArticle = async (title, body) => {
    if (title && body) {
      try {
        const data = await api.postArticle(
          title,
          body,
          this.props.match.params.topic
        );
        const article = {...data.article, created_by: {username:'tickle122'}}
        console.log(article, 'ARTICLE THAT WAS POSTED')
        this.setState({ message: 'Success'});
      } catch (err) {
        if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
        else this.props.history.push("500");
      }
    }
  };
}

export default CreateArticle;
