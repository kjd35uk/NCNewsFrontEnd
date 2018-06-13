import React from 'react';

const ArticleHeader = ({article}) => {
  console.log(article)
  return(
    <div>
 <h4>{article.title}</h4>
 <p>created by: {article.created_by}</p>
 <p>votes: {article.votes}</p><p></p>


    </div>
  )
}

export default ArticleHeader;