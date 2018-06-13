import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Article from './Article/Article';
import Topic from './Topic/Topic';


class App extends React.Component {
render() {
  return (
    <nav>
    <Link to="/">
    <button>Home</button>
  </Link>        
  <Link to="/topics/cooking">
    <button>Cooking</button>
  </Link> 
  <Link to="/topics/football">
    <button>Football</button>
  </Link> 
  <Link to="/topics/coding">
    <button>Coding</button>
  </Link> 
  
  <Route exact path="/" component={Home}/>
  <Route path="/articles/:article_id" component={Article} />
  <Route path="/topics/:topic" component={Topic} />
 

  </nav>
  )
}

}

export default App;
