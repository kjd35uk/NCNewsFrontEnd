import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleHeader from '../Article/ArticleHeader';


class Topic extends React.Component {
  state = {
    articles: []
  }
  render() {
  return(
    <div>
      <h1>{`Here are all the ${this.props.match.params.topic} articles`}</h1>
      {this.state.articles.map(article =>  <Link to={`/articles/${article._id}`}><ArticleHeader article={article}/></Link>)}
    </div>
  )
}
componentDidMount = async () => {
  const {articles} = await this.fetchArticlesbyTopic()
  this.setState({ articles })
}
componentDidUpdate = async(prevProps) => {
  if(prevProps !== this.props) {
  const {articles} = await this.fetchArticlesbyTopic()
  this.setState({ articles })
  }
}

fetchArticlesbyTopic = async query => {
  const {data} = await axios.get(`https://northcoders-news-kirstiecodes.herokuapp.com/api/topics/${this.props.match.params.topic}/articles`)
  return data;
}


}

export default Topic;