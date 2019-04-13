const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
require("dotenv").config();
const baseConfig = require("./webpack.base");
const PROJECT_ROOT = require("./root");

const { NODE_ENV } = process.env;

module.exports = merge(baseConfig, {
    mode: NODE_ENV,
    devtool: "source-map",
    output: {
        path: path.resolve(PROJECT_ROOT, "dist", "dev")
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            paths: [path.join(PROJECT_ROOT, "src")]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(PROJECT_ROOT, "src", "assets"),
        hot: true,
        publicPath: "/",
        historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
