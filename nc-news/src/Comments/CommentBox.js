import React from "react";


class CommentBox extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
    <div><input onChange={this.handleChange} type="text" value={this.state.value} />
        <button onClick={this.handleSubmit}>Post comment!</button>
        </div>)
  }

  handleChange = (event) => {
    // event.preventDefault();
    const newVal = event.target.value;
    this.setState ({
      value: newVal
    })
  }
  handleSubmit = (event) => {
    // event.preventDefault();
    this.props.postComment(this.state.value)
    this.setState ({
      value: ''
    })
  }
}

export default CommentBox;