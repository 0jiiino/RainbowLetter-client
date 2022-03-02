module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "react/jsx-boolean-value": "off",
    "import/no-unresolved": "off",
    "no-return-await": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off",
  },
  globals: {
    fetch: false,
  },
};
