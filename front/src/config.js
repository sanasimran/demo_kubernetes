require('dotenv').config();

const config = {
  baseUrl: process.env.REACT_APP_BACKEND_URL,
  searchUrl: process.env.REACT_APP_SEARCH_URL,
};

export default config;
