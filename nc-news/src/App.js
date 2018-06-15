import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Article from './Article/Article';
import Topic from './Topic/Topic';
import './App.css'


class App extends React.Component {
render() {
  return (
    <div>
    <nav className = 'nav'>
    <Link to="/">
    <button className='nav'>Home</button>
  </Link>        
  <Link to="/topics/cooking">
    <button className='nav'>Cooking</button>
  </Link> 
  <Link to="/topics/football">
    <button className='nav'>Football</button>
  </Link> 
  <Link to="/topics/coding">
    <button className='nav'>Coding</button>
  </Link> 
  </nav>
  <Route exact path="/" component={Home}/>
  <Route path="/articles/:article_id" component={Article} />
  <Route path="/topics/:topic" component={Topic} />

  </div>
  )
}

}

export default App;
