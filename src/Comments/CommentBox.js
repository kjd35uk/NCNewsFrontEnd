import React from "react";


class CommentBox extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
    <div className='comment-heading'><input className='input' id='comment-add-input' onChange={this.handleChange} type="text" value={this.state.value} />
        <button className='button' id='comment-add-button' onClick={this.handleSubmit}>Join the discussion!</button>
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