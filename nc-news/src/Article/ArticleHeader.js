import React from "react";

const ArticleHeader = ({article}) => {
  if(article.created_by) {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>created by: {article.created_by.username}</p>
      <p>votes: {article.votes}</p>
      <p />
      </div>
  )
      } 
      return (
      <p>Loading</p>
  );
};

export default ArticleHeader;
