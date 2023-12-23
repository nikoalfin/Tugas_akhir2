import webpackConfig from "./webpack.config.js";
import {merge} from "webpack-merge";

export default merge(webpackConfig, {
    mode: 'development'
  })