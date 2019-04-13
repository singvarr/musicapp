const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

require("dotenv").config();
const PROJECT_ROOT = require("./root");

const { NODE_ENV } = process.env;

module.exports = {
    entry: path.resolve(PROJECT_ROOT, "src", "index.js"),
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
            assets: path.join(PROJECT_ROOT, "src", "assets"),
            vendor: path.join(PROJECT_ROOT, "src", "vendor"),
            fixtures: path.join(PROJECT_ROOT, "src", "fixtures"),
            store: path.join(PROJECT_ROOT, "src", "store"),
            actions: path.join(PROJECT_ROOT, "src", "store", "actions"),
            constants: path.join(
                PROJECT_ROOT,
                "src",
                "store",
                "constants"
            ),
            reducers: path.join(PROJECT_ROOT, "src", "store", "reducers"),
            selectors: path.join(
                PROJECT_ROOT,
                "src",
                "store",
                "selectors"
            ),
            components: path.join(PROJECT_ROOT, "src", "components"),
            less: path.join(PROJECT_ROOT, "src", "less")
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                include: path.resolve(PROJECT_ROOT, "src"),
                use: "awesome-typescript-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(PROJECT_ROOT, "src"),
                use: "babel-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: "file-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_ROOT, "src", "index.html")
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        namedModules: true
    }
};
