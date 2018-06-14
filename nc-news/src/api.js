import axios from 'axios';

const url = "https://northcoders-news-kirstiecodes.herokuapp.com/api";

// export const fetchArticles = () => {
//   return axios.get(`${url}/articles`)
//   .then (res => res.data.articles);
// }

export const fetchArticlebyId = (id) => {
  return axios.get(`${url}/articles/${id}`)
  .then (res => {
    return res.data;
  })
}