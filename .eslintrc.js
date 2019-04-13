module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        camelcase: "error",
        "max-len": "error",
        indent: ["error"],
        quotes: "error",
        "object-curly-spacing": ["error", "always"],
        "eol-last": "error",
        "comma-dangle": "error",
        "no-trailing-spaces": "error",
        "default-case": "error",
        "no-var": "error",
        semi: "error",
        "react/boolean-prop-naming": "error",
        "react/button-has-type": "error",
        "react/no-array-index-key": "error",
        "react/jsx-sort-props": "error",
        "no-useless-computed-key": "error"
    },
    env: {
        es6: true,
        node: true,
        browser: true
    }
};
