import React from 'react';
import Vote from '../Vote';
import * as api from '../api';



class SingleComment extends React.Component {
  state = {
    comment: this.props.comment
  }
  render() {
const {comment} = this.state
  return(
    <div>
      <p>{comment.body}</p>
      <p>votes: {comment.votes}</p>
      <p>created by: {comment.created_by.username}</p>
    <Vote {...this.props} vote={this.vote} id={comment._id}/>
    <button onClick = {this.props.deleteComment} >Delete</button>
    </div>
  )
}

vote = async query => {
  const {comment} = this.state;
  api.vote(comment._id, query ? 'up' : 'down')
  this.setState({
    comment: {
      ...comment, 
      votes: query === 'up' ? comment.votes + 1 : comment.votes - 1
    }
  })
}

}

export default SingleComment;
