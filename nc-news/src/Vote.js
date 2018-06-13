import React from 'react';
import axios from 'axios';


class Vote extends React.Component {
render() {
  console.log(this.props, 'PROPS')

return(
  <div>
    <button onClick={() => this.vote('up')}>Upvote here</button>
    <button onClick={() => this.vote('down')}>Downvote here</button>

    </div>
)
}



vote = async query => {
  const {data} = await axios.put(`http://northcoders-news-api.herokuapp.com/api/comments/${this.props.id}?vote=${query}`)
  return data;
}


}

export default Vote;