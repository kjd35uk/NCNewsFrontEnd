import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Article from './Article/Article';
import Topic from './Topic/Topic';
import './App.css'
import Error404 from './Error404';
import Error500 from './Error500';


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
  <Switch>
  <Route exact path="/articles/404" component={Error404} />
  <Route exact path="/articles/500" component={Error500} />
  <Route path="/articles/:article_id" component={Article} />
  </Switch>
  <Switch>
  <Route exact path="/topics/404" component={Error404} />
  <Route exact path="/topics/500" component={Error500} />
  <Route path="/topics/:topic" component={Topic} />
  </Switch>

  </div>
  )
}

}

export default App;
