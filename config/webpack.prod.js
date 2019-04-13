const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = require("./webpack.base");
const PROJECT_ROOT = require("./root");

const { NODE_ENV } = process.env;

module.exports = merge(baseConfig, {
    mode: NODE_ENV,
    output: {
        path: path.resolve(PROJECT_ROOT, "dist", "prod"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,

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
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()]
    }
});
