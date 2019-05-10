const withTypescript = require("@zeit/next-typescript");
const path = require("path");

module.exports = withTypescript({
    pageExtensions: ["tsx", "jsx", "js", "ts"],
    webpack(config) {
        config.resolve.alias["components"] = path.join(__dirname, "components");
        config.resolve.alias["lang"] = path.join(__dirname, "lang");
        config.resolve.alias["fixtures"] = path.join(__dirname, "fixtures");
        config.resolve.alias["style"] = path.join(__dirname, "style");
        config.resolve.alias["store"] = path.join(__dirname, "store");
        config.resolve.alias["types"] = path.join(__dirname, "types");
        config.resolve.alias["layouts"] = path.join(__dirname, "layouts");

        return config;
    }
});
