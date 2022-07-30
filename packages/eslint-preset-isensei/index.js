module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  settings: {
    next: {
      rootDir: ["./apps/*/"],
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      rules: {
        "no-undef": 0,
      },
    },
  ],
  rules: {
    "prettier/prettier": "error",
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
    "no-unused-vars": 1,
  },
};
