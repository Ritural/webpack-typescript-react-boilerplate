module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "jest", "jsx-a11y", "react"],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/state-in-constructor": [0],
    "react/jsx-props-no-spreading": [0],
    "import/no-extraneous-dependencies": [0],
    "import/prefer-default-export": [0],
    "quote-props": [2, "consistent-as-needed"],
    "react/boolean-prop-naming": [
      "error",
      { "rule": "^(is|has|should|allow|can)[A-Z]([A-Za-z0-9]?)+" }
    ],
    "no-underscore-dangle": ["error", { "enforceInMethodNames": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "react/no-access-state-in-setstate": "warn",
    "react/no-deprecated": "error",
    "react/jsx-one-expression-per-line": [0],
    "camelcase": "warn",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "jsx-a11y/label-has-for": [0],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "never",
      "functions": "always-multiline"
    }],
    "@typescript-eslint/no-unused-vars": "error",
    'import/no-unresolved': [0],
  },
  settings: {
    'import/extensions': [".ts", ".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx"],
        "paths": ['src'],
      }
    }
  },
};
