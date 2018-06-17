import axios from 'axios';

const url = "https://northcoders-news-kirstiecodes.herokuapp.com/api";


export const fetchArticlebyId = async (id) => {
  const {data} = await axios.get(`${url}/articles/${id}`)
  return data;
}

export const fetchArticles = async query => {
  const {data} = await axios.get(`${url}/articles`)
  return data;
}

export const vote = async (id, query) => {
  const{data} = await axios.put(`${url}/articles/${id}?vote=${query}`)
  return data;
}

export const fetchCommentsbyArticleId = async id => {
  const { data } = await axios.get(
    `${url}/articles/${id}/comments`
  );
  return data;
}

 export const postComment = async (text, id) => {
  if(text) {
  const { data } = await axios.post(`${url}/articles/${id}/comments`, ({comment: text}));
  return data;
  }
}

export const deleteComment = async (id) => {
  const { data } = await axios.delete(`${url}/comments/${id}/`);
  return data;

}

export const fetchArticlesbyTopic = async topic => {
  const {data} = await axios.get(`${url}/topics/${topic}/articles`)
  return data;
}

export const postArticle = async (title, body, topic) => {
  if(title && body) {
  const { data } = await axios.post(`${url}/topics/${topic}/articles`, ({'title': title, 'body': body}))
  return data;
  }
}
