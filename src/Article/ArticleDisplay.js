import React from "react";

const ArticleDisplay = ({ article }) => {
  return (
    <div>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleDisplay;
