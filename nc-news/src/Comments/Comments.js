import React from 'react';
import SingleComment from './SingleComment';
import axios from 'axios';


class Comments extends React.Component {
  state = {
    comments: []
  }

  render() {

    return(
    <div>
    <h3>Here is the whole comments list from comments.js component</h3>
    {this.state.comments.map(comment => <div>
      <p>{comment.body}</p>
      <p>votes: {comment.votes}</p>
      <p>created by: {comment.created_by.username}</p>
      </div>)}
    <SingleComment />
    </div>
  )
  }
  componentDidMount = async () => {
    const {comments} = await this.fetchCommentsbyArticleId()
    this.setState({ comments })
  }
  componentDidUpdate = async(prevProps) => {
    if(prevProps !== this.props) {
    const {comments} = await this.fetchCommentsbyArticleId()
    this.setState({ comments })
    }
  }
  
  fetchCommentsbyArticleId = async query => {
    const {data} = await axios.get(`https://northcoders-news-kirstiecodes.herokuapp.com/api/articles/${this.props.match.params.article_id}/comments`)
    return data;
  }
}

export default Comments;