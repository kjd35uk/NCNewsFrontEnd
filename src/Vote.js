import React from 'react';


class Vote extends React.Component {
render() {

return(
  <div className='vote-button-container'>
    <button className='button' onClick={() => this.props.vote('up')}><img className='button-image' src={require('./plus.png')}/></button>
    <button className='button' onClick={() => this.props.vote('down')}><img className='button-image' src={require('./minus.png')}/></button>

    </div>
)
}

}

export default Vote;