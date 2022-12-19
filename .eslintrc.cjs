module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
  plugins: ["import"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        name: "@mui/material/styles",
        message: "Please prefer @mui/material instead.",
      },
      {
        name: "styled-components",
        message: "Please use styled from @mui/material instead.",
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          "./tsconfig.eslint.json",
          "./*/tsconfig.json",
          "./*/tsconfig.node.json",
        ],
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        "@typescript-eslint/strict-boolean-expressions": "error",
      },
    },
  ],
};
