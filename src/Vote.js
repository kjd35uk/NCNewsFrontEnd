import React from 'react';


class Vote extends React.Component {
render() {

return(
  <div className='vote-button-container'>
    <button className='button' id='vote-button' onClick={() => this.props.vote('up')}><img className='button-image' alt='' src={require('./images/plus.png')}/></button>
    <button className='button' id='vote-button' onClick={() => this.props.vote('down')}><img className='button-image' alt='' src={require('./images/minus.png')}/></button>

    </div>
)
}

}

export default Vote;