import React from 'react';
import SingleComment from './SingleComment';
import axios from 'axios';
import Vote from '../Vote'


class Comments extends React.Component {
  state = {
    comments: []
  }

  render() {

    return(
    <div>
    <h3> Comments</h3>
    <button>Post comment!</button>
    {this.state.comments.map(comment => <div>
      <SingleComment vote={this.vote} comment={comment} />
      </div>)}
    
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
  vote = async query => {
    const {data} = await axios.put(`http://northcoders-news-api.herokuapp.com/api/comments/${this.props.id}?vote=${query}`)
    return data;
  }
}

export default Comments;