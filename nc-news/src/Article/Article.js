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
  const {article} = await this.fetchArticlebyId()
  this.setState({ article })
}

componentDidUpdate = async(prevProps) => {
  if(prevProps.article_id !== this.props.article_id) {
  const {article} = await this.fetchArticlebyId()
  this.setState({ article })
  }
}

fetchArticlebyId = async () => {
  const {data} = await axios.get(`https://northcoders-news-kirstiecodes.herokuapp.com/api/articles/${this.props.match.params.article_id}`)
  return data;
}

vote = async query => {
  const {data:{article}} = await axios.put(`https://northcoders-news-kirstiecodes.herokuapp.com/api/articles/${this.state.article._id}?vote=${query}`)
  console.log(article, 'ARTICLE HERE')
  this.setState({
    article
  })

}
}

export default Article;