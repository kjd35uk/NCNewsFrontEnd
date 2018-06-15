import React from "react";
import moment from 'moment';


const ArticleHeader = ({article}) => {
  if(article.created_by) {
  return (
    <div className='article-header' key={article._id}>
      <h2>{article.title}</h2>
      <p>created by: {article.created_by.username}</p>
      <p>votes: {article.votes}</p>
      <p>submitted: {moment(article.created_at).fromNow()}</p>
      </div>
  )
      } 
      return (
      <p>Loading</p>
  );
};

export default ArticleHeader;
