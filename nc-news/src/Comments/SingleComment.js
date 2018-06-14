import React from 'react';
import Vote from '../Vote';
import axios from 'axios';


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
    
    </div>
  )
}
vote = async query => {
 
  const {data:{comment}} = await axios.put(`https://northcoders-news-kirstiecodes.herokuapp.com/api/comments/${this.props.comment._id}?vote=${query}`)
  this.setState({
    comment
  })

}

}

export default SingleComment;
