const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("examples"));
  },
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 8080
  },
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  }
};
