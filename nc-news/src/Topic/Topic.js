import React from 'react';
import { Link } from 'react-router-dom';
import ArticleHeader from '../Article/ArticleHeader';
import * as api from '../api';


class Topic extends React.Component {
  state = {
    articles: []
  }
  render() {
  return(
    <div>
      <h1>{`Here are all the ${this.props.match.params.topic} articles`}</h1>
      {this.state.articles.map(article =>  <div key={article._id}><Link to={`/articles/${article._id}`}><ArticleHeader article={article}/></Link></div>)}
    </div>
  )
}
componentDidMount = async () => {
  const {articles} = await api.fetchArticlesbyTopic(this.props.match.params.topic)
  this.setState({ articles })
}
componentDidUpdate = async(prevProps) => {
  if(prevProps !== this.props) {
  const {articles} = await api.fetchArticlesbyTopic(this.props.match.params.topic)
  this.setState({ articles })
  }
}

}

export default Topic;