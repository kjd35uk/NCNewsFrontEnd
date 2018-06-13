import React from 'react';
import Heading from '../Heading';
import ArticleDisplay from './ArticleDisplay';
import Comments from '../Comments/Comments';
import ArticleHeader from './ArticleHeader';
import axios from 'axios';


class Article extends React.Component {
  state = {
  article:  {}
  }

  render() {
  return (
    <div>
      This is the individual article page from Article.js

      <Heading />
      <ArticleHeader article={this.state.article}/>
      <ArticleDisplay/>
      <Comments/>
    </div>
  )
}
componentDidMount = async () => {
  const {article} = await this.fetchArticlebyId()
  this.setState({ article })
}

componentDidUpdate = async(prevProps) => {
  if(prevProps !== this.props) {
  const {article} = await this.fetchArticlebyId()
  this.setState({ article })
  }
}

fetchArticlebyId = async query => {
  const {data} = await axios.get(`https://northcoders-news-kirstiecodes.herokuapp.com/api/articles/${this.props.match.params.article_id}`)
  return data;
}
}

export default Article;