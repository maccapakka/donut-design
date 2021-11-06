module.exports = {
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "prettier",
    "prettier/prettier",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "sonarjs",
    "jest",
    "jest-formatting",
    "jest-dom",
    "testing-library",
  ],
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "unicorn/filename-case": "off",
      },
    },
    {
      files: ["*.js", "./**/index.ts"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
