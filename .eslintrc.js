module.exports = {
    env: {
        es6: true,
        es2017: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: ".",
    },
    plugins: ["@typescript-eslint"],
    ignorePatterns: ["Gulpfile.ts", "src", "NFT-SS2-6.3.0", "__tests__", "*.d.ts"],
    rules: {
        quotes: ["error", "single"],
        semi: ["error", "always"],

        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],
        "@typescript-eslint/no-unused-vars": "error",

        "for-direction": "off",
        "no-constant-condition": "off",
    },
};
