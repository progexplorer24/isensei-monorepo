module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:jsx-a11y/recommended"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "react/prop-types": 0,
    "no-unused-vars": 0,
    "no-constant-condition": ["error", { checkLoops: false }],
  },
  parserOptions: {
    sourceType: "module",
  },
};
