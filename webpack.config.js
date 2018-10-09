const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
    {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
    },
    {
    test: /\.css$/,
    use: [
        {
        loader: "style-loader"
        },
        {
        loader: "css-loader",
        options: {
            modules: true,
            importLoaders: 1,
            localIdentName: "[name]_[local]_[hash:base64]",
            sourceMap: true,
            minimize: true
        }
        }
    ]
    } ,
    { 
        test: /\.png$/,
        loader: "url-loader?limit=100000&mimetype=image/png" },
    ]
  },
  plugins: [htmlWebpackPlugin]
};