import React from "react";
import moment from 'moment';


const ArticleHeader = ({article}) => {
  if(article.created_by) {
  return (
    <div className='article-header' key={article._id}>
      <h2>{article.title}</h2>
      <ul>
      <li>created by: {article.created_by.username}</li>
      <br/>
      <li>submitted: {moment(article.created_at).fromNow()}</li>
      <li>votes: {article.votes}</li>

      </ul>
      </div>
  )
      } 
      return (
      <p>Loading</p>
  );
};

export default ArticleHeader;
