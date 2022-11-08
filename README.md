# Webpack Starter Template - Quote Generator

Webpack Starter Template which generates random quote.
Dist folder of website is deployed [here](https://romabulani.github.io/webpack-starter)

## Features

- Please check [webpack.config.js](https://github.com/romabulani/webpack-starter/blob/master/webpack.config.js) for webpack configuration.
- Babel to support old browsers - <ES6
- Loaders : CSS and Style loaders
- Image Asset
- HtmlWebpackPlugin - Helps in creation of HTML File
- Caching and Code Splitting

## How is Caching working

Http caching is useful in increasing performance. It generates the new vendor bundle in dist folder, only when something is changed. We can keep track by hash of vendor bundle. This helps in reducing repetitive downloads as hash comparison is done. In other words, `Don't ship whats not changed`

## For Dev Server

- Run `npm run dev` to start Webpack dev server.

## For Production Server

- Run `npm run build` to build the project, dist folder will be generated.
