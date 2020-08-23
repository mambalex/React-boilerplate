import axios from 'axios';

const fetchSinglePost = (id: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

const fetchAllPosts = () =>
  axios.get('https://jsonplaceholder.typicode.com/posts');

export { fetchAllPosts, fetchSinglePost };
