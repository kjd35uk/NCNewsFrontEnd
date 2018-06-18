import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Article from './Article/Article';
import Topic from './Topic/Topic';
import TopicHolder from './Topic/TopicHolder';
import CreateArticle from './Topic/CreateArticle';
import './App.css';
import Error404 from './Error404';
import Error500 from './Error500';


class App extends React.Component {
render() {
  return (
    <div>
    <nav className = 'nav'>
    <div className='home-button-container'>
    <Link to="/">
    <button className='nav' id='home-button'>Home</button>
  </Link>  
  </div>      
  <div className='topic-button-container'>
  <Link to="/topics/cooking">
    <button className='nav' id='nav-button'>Cooking</button>
  </Link> 
  <Link to="/topics/football">
    <button className='nav' id='nav-button'>Football</button>
  </Link> 
  <Link to="/topics/coding">
    <button className='nav' id='nav-button'>Coding</button>
  </Link> 
  </div>
  </nav>
  
  <Route exact path="/" component={Home}/>
  <Route exact path="/500" component={Error500}/>


  <Switch>
  <Route exact path="/articles/404" component={Error404} />
  <Route exact path="/articles/500" component={Error500} />
  <Route exact path="/articles" component={Home} />
  <Route exact path="/articles/:article_id" component={Article} />
  </Switch>
  <Switch> 
  <Route exact path="/topics/:topic/404" component={Error404} />
  <Route exact path="/topics/:topic/create_article" component={CreateArticle} />
  <Route exact path="/topics/404" component={Error404}/>


  <Route exact path="/topics/:topic/500" component={Error500} />
  <Route exact path="/topics/:topic" component={Topic} />
  <Route exact path="/topics" component={TopicHolder} />
  </Switch>

  </div>
  )
}

}

export default App;
