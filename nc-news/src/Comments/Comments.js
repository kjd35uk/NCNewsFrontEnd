import React from "react";
import SingleComment from "./SingleComment";
import * as api from '../api';
import CommentBox from './CommentBox'


class Comments extends React.Component {
  state = {
    comments: [],
  };

  render() {
    return (
      <div>
        <h3> Comments</h3>
        <CommentBox postComment={this.postComment}/>
        {this.state.comments.map(comment => (
          <div key={comment._id}>
            <SingleComment deleteComment={this.deleteComment.bind(null, comment)}
              comment={comment}
            />
          </div>
        ))}
      </div>
    );
  }

  componentDidMount = async () => {
    const {comments} = await api.fetchCommentsbyArticleId(this.props.match.params.article_id)
    comments.sort((a, b) => b.created_at - a.created_at)
    this.setState({ comments })
  }

  componentDidUpdate = async prevProps => {
    if (prevProps.match.params.article_id !== this.props.match.params.article_id) {
      const { comments } = await api.fetchCommentsbyArticleId(this.props.match.params.article_id);
      this.setState({ comments });
    }
  };

  postComment = async (text) => {
    const data = await api.postComment(text, this.props.match.params.article_id)
    this.setState({ comments:[data.comment, ...this.state.comments] });

  };
  deleteComment = async (comment) => {
    if(comment.created_by.username === 'tickle122') {
    await api.deleteComment(comment._id)
    const newComments = [...this.state.comments]
    const index = newComments.findIndex(queryComment => queryComment._id === comment._id)
    newComments.splice(index, 1)
    this.setState({
comments: newComments
  })
  }
  }
  
  }



export default Comments;
