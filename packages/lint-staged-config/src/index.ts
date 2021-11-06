module.exports = {
  "*.css": ["npx stylelint --fix"],
  "*.{js,jsx,ts,tsx}": "npx eslint --fix",
  "package.json": ["npx sort-package-json"],
};
