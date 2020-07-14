module.exports = {
  extends: ["eslint-config-airbnb", "react-app"],
  rules: {
    "linebreak-style": "off",
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
    quotes: ["error", "double", { avoidEscape: true }],
    "no-underscore-dangle": "off",
    "implicit-arrow-linebreak": "off",
    "object-curly-newline": "off",
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    "no-param-reassign": ["error", { props: false }],
    "arrow-body-style": ["warn"],
    "lines-between-class-members": "off",
    indent: "off",
    "no-shadow": ["off", { allow: ["dispatch"] }],
    "no-redeclare": "error",
    "no-case-declarations": "off",
    "function-paren-newline": "off",
    "space-before-function-paren": ["error", "never"],
    "no-confusing-arrow": "off",
    "space-before-function-paren": "off",

    "react/require-default-props": "off",
    "react/button-has-type": "off",
    "react/state-in-constructor": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "react/prop-types": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",

    "import/order": "off",
    // "import/no-cycle": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
