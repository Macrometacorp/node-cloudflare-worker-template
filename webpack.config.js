require("dotenv/config");
const path = require('path');
const webpack = require("webpack");

module.exports = {
  target: "webworker",
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "worker.js"
  },
  resolve: {
    alias: {
      request$: "xhr"
    },
    fallback: { 
      // "child_process": true,
      // "http": true,
      // "https": true,
      // Browser/worker polyfills required to replace Node libraries used by the jsC8 SDK
      "url": require.resolve("url"),
      "path": require.resolve("path-browserify")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      MACROMETA_API_KEY: JSON.stringify(process.env.MACROMETA_API_KEY),
      MACROMETA_COLLECTION_NAME: JSON.stringify(process.env.MACROMETA_COLLECTION_NAME)
    }),
  ]
};
