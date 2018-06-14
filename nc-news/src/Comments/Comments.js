import React from "react";
import SingleComment from "./SingleComment";
import axios from "axios";
// import Vote from "../Vote";

class Comments extends React.Component {
  state = {
    comments: [],
    value: ""
  };

  render() {
    return (
      <div>
        <h3> Comments</h3>
        <input onChange={this.handleChange} type="text" value={this.state.value} />
        <button onClick={() => this.postComment(this.state.value)}>Post comment!</button>
        {this.state.comments.sort((a, b) => b.votes - a.votes).map(comment => (
          <div key={comment._id}>
            <SingleComment
              
              vote={this.vote}
              comment={comment}
            />
          </div>
        ))}
      </div>
    );
  }
  componentDidMount = async () => {
    const { comments } = await this.fetchCommentsbyArticleId();
    this.setState({ comments });
  };
  componentDidUpdate = async prevProps => {
    if (prevProps !== this.props) {
      const { comments } = await this.fetchCommentsbyArticleId();
      this.setState({ comments });
    }
  };

  fetchCommentsbyArticleId = async query => {
    const { data } = await axios.get(
      `https://northcoders-news-kirstiecodes.herokuapp.com/api/articles/${
        this.props.match.params.article_id
      }/comments`
    );
    return data;
  };

  postComment = async text => {
    if(text) {
    const { data } = await axios.post(
      `https://northcoders-news-kirstiecodes.herokuapp.com/api/articles/${this.props.match.params.article_id}/comments`
    , ({comment: text}));
    this.setState({ comments:[...this.state.comments, data.comment] });

    }
  };

  handleChange = ({target: {value}}) => {
    const newVal = value;
    this.setState ({
      value: newVal
    })
  }

  // vote = async query => {
  //   const {data} = await axios.put(`http://northcoders-news-api.herokuapp.com/api/comments/${this.props.id}?vote=${query}`)
  //   return data;
  // }
}

export default Comments;
