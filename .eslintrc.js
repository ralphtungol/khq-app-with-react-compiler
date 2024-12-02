module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  globals: {
    window: true,
    document: true,
    parent: true,
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
      rules: {
        "jest/no-mocks-import": 0,
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "react/function-component-definition": 0,
    "import/prefer-default-export": 0, // revisit this

    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "react/jsx-filename-extension": 0,
    "react/no-array-index-key": 0,
    "react/jsx-uses-vars": "error",
    "react/prop-types": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "import/no-named-as-default": 0,
    "no-template-curly-in-string": 1,
    "implicit-arrow-linebreak": 0,
    "react/jsx-one-expression-per-line": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "max-len": ["error", { code: 200 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
