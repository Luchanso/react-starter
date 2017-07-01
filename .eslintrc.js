module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true,
  },
  "settings": {
    "import/resolver": "webpack",
  },
  "parserOptions": {
    "ecmaVersion": 8,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "jest",
  ],
  "rules": {
    "no-plusplus": 0,
    "no-use-before-define": 0,
  }
};
