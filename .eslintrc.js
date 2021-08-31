const fs = require("fs")

const prettierOptions = JSON.parse(
  fs.readFileSync("./.prettierrc", "utf8"),
)

module.exports = {
  "plugins": ["prettier", "@typescript-eslint"],
  "extends": ["airbnb-typescript", "react-app", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./app/tsconfig.json"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      },
      "alias": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "map": [["~", "./app/src"]]
      },
      "node": {
        "moduleDirectory": ["node_modules", "app"],
        "extensions": [".js", ".json", ".web.js", ".android.js", ".ios.js", ".ts", ".web.js", ".android.ts", ".ios.ts"]
      }
    }
  },
  "globals": {
    "__CLIENT__": true,
    "__SERVER__": true,
    "__DEV__": true,
    "fetch": true,
    "window": true,
    "any": "readonly"
  },
  "rules": {
    "default-case": 0,
    "no-sequences": 0,
    "jest/no-disabled-tests": 0,
    "jest/no-focused-tests": 0,
    "jest/no-identical-title": 0,
    "arrow-body-style": "off",
    "object-curly-spacing": ["warn", "always"],
    "brace-style": ["error", "1tbs"],
    "func-names": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "@typescript-eslint/semi": [
      "off"
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        "ignoreRestArgs": true
      }
    ],
    "max-len": [
      "warn",
      {
        "code": 80,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreComments": true
      }
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-key": "error",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": ["error", prettierOptions],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/no-anonymous-default-export": "off",
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off",
    "react-hooks/rules-of-hooks": "error",
  }
}