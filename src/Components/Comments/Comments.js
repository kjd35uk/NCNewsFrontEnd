import React from "react";
import SingleComment from "./SingleComment";
import * as api from "../../api";
import CommentBox from "./CommentBox";

class Comments extends React.Component {
  state = {
    comments: []
  };

  render() {
    return (
      <div className="comments-container">
      <div className='comment-add'>
        <h1 className='comment-heading'> Comments</h1>
        <CommentBox postComment={this.postComment} />
        </div>
        {this.state.comments.map(comment => (
          <div key={comment._id}>
            <SingleComment
              deleteComment={this.deleteComment.bind(null, comment)}
              comment={comment}
            />
          </div>
        ))}
      </div>
    );
  }

  componentDidMount = async () => {
    try {
      const { comments } = await api.fetchCommentsbyArticleId(
        this.props.match.params.article_id
      );
      comments.sort((a, b) => b.created_at - a.created_at);
      this.setState({ comments });
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
      else this.props.history.push("500");
    }
  };

  componentDidUpdate = async prevProps => {
    if (
      prevProps.match.params.article_id !== this.props.match.params.article_id
    ) {
      try {
        const { comments } = await api.fetchCommentsbyArticleId(
          this.props.match.params.article_id
        );
        this.setState({ comments });
      } catch (err) {
        if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
        else this.props.history.push("500");
      }
    }
  };

  postComment = async text => {
    if (text) {
      try {
        const data = await api.postComment(
          text,
          this.props.match.params.article_id
        );
        this.setState({ comments: [data.comment, ...this.state.comments] });
      } catch (err) {
        if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
        else this.props.history.push("500");
      }
    }
  };

  deleteComment = async comment => {
    if (comment.created_by.username === "tickle122") {
      try {
        await api.deleteComment(comment._id);
        const newComments = [...this.state.comments];
        const index = newComments.findIndex(
          queryComment => queryComment._id === comment._id
        );
        newComments.splice(index, 1);
        this.setState({
          comments: newComments
        });
      } catch (err) {
        if (err.response.status === 404 || err.response.status === 400) this.props.history.push("404");
        else this.props.history.push("500");
      }
    }
  };
}

export default Comments;
