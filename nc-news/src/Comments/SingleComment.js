import React from 'react';
import Vote from '../Vote'

const SingleComment = ({comment}) => {
  return(
    <div>
      <p>{comment.body}</p>
      <p>votes: {comment.votes}</p>
      <p>created by: {comment.created_by.username}</p>
    <Vote {...this.props} id={comment._id}/>
    
    </div>
  )
}

export default SingleComment;
