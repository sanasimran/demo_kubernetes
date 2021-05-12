require('dotenv').config();

const config = {
  baseUrl: process.env.REACT_APP_BACKEND_URL,
  searchUrl: process.env.REACT_APP_SEARCH_URL,
};

// const config = {
//   baseUrl: "http://backend",
//   searchUrl: "http://search:5000",
// };

export default config;
