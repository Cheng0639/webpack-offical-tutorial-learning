const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        open: "Google Chrome"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    plugins: [
        new CleanWebPackPlugin(["./dist"]),
        new HtmlWebPackPlugin({
            template: "./src/index.tempalte.html",
            title: "Title from plugin."
        })
    ]
};
