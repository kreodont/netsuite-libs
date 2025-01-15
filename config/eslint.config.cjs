const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
    {
        ignores: [
            "delivery_functions.ts"
        ],
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            "@typescript-eslint": tsPlugin
        },
        rules: {
            "quotes": ["error", "backtick"],
            semi: [`warn`, `always`],

            'no-empty': `warn`,
            'no-cond-assign': [`error`, `always`],
            '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
            '@typescript-eslint/restrict-template-expressions': `off`,

            'for-direction': `off`,
            'no-constant-condition': `off`,
            "@typescript-eslint/no-explicit-any": "error"
        }
    }
];
