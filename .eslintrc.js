module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-console": "error",
  },
  overrides: [
    /** for TypeScript */
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: [
          "./tsconfig.eslint.json",
          "./packages/*/tsconfig.json",
          "./apps/*/tsconfig.json",
        ],
        ecmaFeatures: { jsx: true },
      },
      rules: {},
    },
  ],
};
