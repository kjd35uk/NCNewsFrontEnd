import React from "react";
import moment from "moment";

const ArticleHeader = ({ article }) => {
  if (article.created_by) {
    return (
      <div className="article-header" key={article._id}>
        <h1>{article.title}</h1>
        <ul>
          <li>created by {article.created_by.username}</li>
          <li>{moment(article.created_at).fromNow()}</li>
          <li>{article.votes} likes</li>
        </ul>
      </div>
    );
  }
  return <p>Loading</p>;
};

export default ArticleHeader;
