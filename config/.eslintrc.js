module.exports = {
    env: {
        es6: true,
        es2017: true,
    },
    extends: [
        `eslint:recommended`,
        `plugin:@typescript-eslint/eslint-recommended`,
        `plugin:@typescript-eslint/recommended`,
        `prettier`,
        `plugin:@typescript-eslint/recommended-requiring-type-checking`,
    ],
    parser: `@typescript-eslint/parser`,
    parserOptions: {
        project: `tsconfig.json`,
        tsconfigRootDir: `.`,
    },
    plugins: [`@typescript-eslint`, `import`],
    ignorePatterns: [`Gulpfile.ts`, `src`, `*.d.ts`, `__tests__`, `.eslintrc.js`, `deploy.ts`],
    rules: {
        quotes: [`error`, `backtick`],
        semi: [`warn`, `always`],

        'no-empty': `warn`,
        'no-cond-assign': [`error`, `always`],
        '@typescript-eslint/no-unused-vars': `error`,
        '@typescript-eslint/restrict-template-expressions': `off`,

        'for-direction': `off`,
        'no-constant-condition': `off`,
        'import/no-absolute-path': `error`,
    },
};
