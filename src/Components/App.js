import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./Home";
import Article from "./Article/Article";
import Topic from "./Topic/Topic";
import TopicHolder from "./Topic/TopicHolder";
import CreateArticle from "./Topic/CreateArticle";
import "../App.css";
import Error404 from "./Error404";
import Error500 from "./Error500";
import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />

        <Route exact path="/" component={Home} />
        <Route exact path="/500" component={Error500} />

        <Switch>
          <Route exact path="/articles/404" component={Error404} />
          <Route exact path="/articles/500" component={Error500} />
          <Route exact path="/articles" component={Home} />
          <Route exact path="/articles/:article_id" component={Article} />
        </Switch>
        <Switch>
          <Route exact path="/topics/:topic/404" component={Error404} />
          <Route
            exact
            path="/topics/:topic/create_article"
            component={CreateArticle}
          />
          <Route exact path="/topics/404" component={Error404} />

          <Route exact path="/topics/:topic/500" component={Error500} />
          <Route exact path="/topics/:topic" component={Topic} />
          <Route exact path="/topics" component={TopicHolder} />
        </Switch>
      </div>
    );
  }
}

export default App;
