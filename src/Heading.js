import React from 'react';


const Heading = () => {
  return(
    <header className="App-header">
          <span><img className='logo' src={require('./logo.png')}/><h1 className="App-title">NC News</h1></span>
        </header>
  )
}

export default Heading;