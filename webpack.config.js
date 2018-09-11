const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const serverConfig = {
    resolve: {
        modules: [path.join(__dirname), "node_modules"],
        extensions: [".js", ".jsx", ".json"],
        mainFiles: ["index"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "server.js",
        publicPath: "/",
    },
    target: "node",
    externals: [nodeExternals()],
    entry: path.join(__dirname, "server", "index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["eslint-loader", "babel-loader"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    emit: false,
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    emit: false,
                },
            },
        ],
    },
};

const browserConfig = {
    entry: path.join(__dirname, "client", "index.js"),
    output: {
        path: path.join(__dirname, "dist", "client"),
        filename: "bundle.js",
        publicPath: "/",
    },
    resolve: {
        modules: [path.join(__dirname), "node_modules"],
        extensions: [".js", ".jsx", ".json"],
        mainFiles: ["index"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["eslint-loader", "babel-loader"],
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"],
                }),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    emitFile: true,
                    name: '[path][name].[ext]',
                    outputPath: "dist/client",
                    publicPath: "/"
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "url-loader",
            },
        ],
    },
    plugins: [new ExtractTextPlugin("style.css")],
};

module.exports = [browserConfig, serverConfig];
