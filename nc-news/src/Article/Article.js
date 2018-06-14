import React from 'react';
import Heading from '../Heading';
import ArticleDisplay from './ArticleDisplay';
import Comments from '../Comments/Comments';
import ArticleHeader from './ArticleHeader';
import axios from 'axios';
import Vote from '../Vote';
import * as api from '../api';



class Article extends React.Component {
  state = {
  article:  {}
  }

  render() {
  return (
    <div>
      <Heading />
      <ArticleHeader article={this.state.article}/>
      <Vote {...this.props} vote={this.vote} id={this.state.article._id}/>
      <ArticleDisplay article={this.state.article}/>
      <Comments {...this.props} article={this.state.article}/>
    </div>
  )
}
componentDidMount = async () => {
  const {article} = await api.fetchArticlebyId(this.props.match.params.article_id)
  this.setState({ article })
}


componentDidUpdate = async(prevProps) => {
  if(prevProps.article_id !== this.props.article_id) {
    const {article} = await api.fetchArticlebyId(this.props.match.params.article_id)
    this.setState({ article })
  }
}

vote = async query => {
  const {article} = this.state;
  api.vote(article._id, query ? 'up' : 'down')
  this.setState({
    article: {
      ...article, 
      votes: query === 'up' ? article.votes + 1 : article.votes - 1
    }
  })
  
}
}

export default Article;