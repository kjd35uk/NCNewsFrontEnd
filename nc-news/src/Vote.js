import React from 'react';


class Vote extends React.Component {
render() {

return(
  <div>
    <button onClick={() => this.props.vote('up')}>Upvote here</button>
    <button onClick={() => this.props.vote('down')}>Downvote here</button>

    </div>
)
}

}

export default Vote;