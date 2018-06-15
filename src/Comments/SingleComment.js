import React from 'react';
import Vote from '../Vote';
import * as api from '../api';
import moment from 'moment';



class SingleComment extends React.Component {
  state = {
    comment: this.props.comment
  }
  render() {
const {comment} = this.state
  return(
    <div className='comment-container'>
    <div className='comment-body'>
      <p>{comment.body}</p>
      <p>votes: {comment.votes}</p>
      <p>created by: {comment.created_by.username}</p>
      <p>submitted: {moment(comment.created_at).fromNow()}</p>
      </div>
      <div className='comment-buttons-container'>
    <Vote className='comment-vote' {...this.props} vote={this.vote} id={comment._id}/>
    {comment.created_by.username==='tickle122' && (<button className='button' onClick = {this.props.deleteComment} >Delete</button>)}
    </div>
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
