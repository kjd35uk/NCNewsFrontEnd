import React from 'react';
import Heading from '../Heading'
import ArticleDisplay from './ArticleDisplay'
import Comments from '../Comments/Comments'
import ArticleHeader from './ArticleHeader'

class Article extends React.Component {
  state = {
  article:  {
    "_id": "5b07ca743a2df4ecac106cb6",
    "votes": 0,
    "title": "Designing Better JavaScript APIs",
    "created_by": "5b07ca743a2df4ecac106ca6",
    "body": "At some point or another, you will find yourself writing JavaScript code that exceeds the couple of lines from a jQuery plugin. Your code will do a whole lot of things; it will (ideally) be used by many people who will approach your code differently. They have different needs, knowledge and expectations.",
    "belongs_to": "coding",
    "__v": 0,
    "comments": 5
  }
}
  render() {
  return (
    <div>
      This is the individual article page from Article.js
            {/* write logic here to display correct group of articles dep on props.match.params.article_id */}

      <Heading />
      <ArticleHeader article={this.state.article}/>
      <ArticleDisplay/>
      <Comments/>
    </div>
  )
}
}

export default Article;