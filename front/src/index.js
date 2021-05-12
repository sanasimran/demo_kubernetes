
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Routes from "./Routes";
import config from "./config.js";
require('dotenv').config();
const dotenv = require("dotenv");
dotenv.config({ path: '/.env' });

// const dotenv = require("dotenv");
// dotenv.config({ path: '/.env' });
console.log("Rendered endpoints \n baseUrl:" + config.baseUrl + "\n searchURL:" + config.searchUrl);
// console.log("Rendered endpoints \n baseUrl:" + process.env.REACT_APP_BACKEND_URL + "\n searchURL:" + process.env.REACT_APP_SEARCH_URL);

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
