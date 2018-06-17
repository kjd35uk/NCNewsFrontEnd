import React from "react";
import * as api from "../api";
import Heading from '../Heading'


class CreateArticle extends React.Component {
  state = {
    title: "",
    body: ""
  };
  render() {
    return (
      <div>
      <Heading/>
    <form>
      <input
        placeholder="Enter article title"
        value={this.state.title}
        onChange={event => this.handleChange(event, "title")}
        type="text"
        className="input"
        id='article-title-input'
      />
      <input
        placeholder="Enter article content"
        value={this.state.body}
        onChange={event => this.handleChange(event, "body")}
        type="text"
        className="input"
        id='article-body-input'

      />
      <button onClick={this.handleSubmit} className="button">
        Create an article
      </button>
    </form>
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
    console.log(event,'EVENT')
    console.log(this.props.postArticle, 'PROPS')
    event.preventDefault();
    this.props.postArticle(this.state.title, this.state.body, this.props.match.params.topic)
    this.setState({
      title: "",
      body: ""
    })
  }

  // CreateArticle = (title, body) => {
  //   if (title && body) {
  //     const newArticle = {'title': title, 'body': body, 'topic': `${this.props.match.params.topic}`
  //   }
  //     return newArticle
  //   }
  // };
}
export default CreateArticle;
