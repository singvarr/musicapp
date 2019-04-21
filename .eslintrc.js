module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
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
        indent: ["error", 4, { SwitchCase: 1 }],
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
        "no-useless-computed-key": "error",
        "@typescript-eslint/no-var-requires": "off"
    },
    env: {
        es6: true,
        node: true,
        browser: true
    }
};
