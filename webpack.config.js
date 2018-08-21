const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new CleanWebPackPlugin(["./dist"]),
        new HtmlWebPackPlugin({
            template: "./src/index.tempalte.html",
            title: "Title from plugin."
        })
    ]
};
