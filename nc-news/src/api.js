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

