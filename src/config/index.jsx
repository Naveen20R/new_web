import axios from 'axios';

const BASE_URL = 'https://www.readersmenu.com';
// const BASE_URL = 'http://localhost:3000';

const IMAGE_BASE_URL = 'https://tnreaders.in/images/';
// const IMAGE_BASE_URL = "http://localhost:8000/images/";

const AXIOS_URL = 'https://tnreaders.in/';
// const AXIOS_URL = 'http://localhost:8000/';

const DEFAULT_POST = 'default_post.png';
const DEFAULT_CATEGORY = 'default_category.jpeg';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://tnreaders.in/', // Default URL
  // baseURL: 'http://localhost:8000', // Default URL
});

export default axiosInstance;

export { IMAGE_BASE_URL, DEFAULT_POST, DEFAULT_CATEGORY, BASE_URL, AXIOS_URL };
