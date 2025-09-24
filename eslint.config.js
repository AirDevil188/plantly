const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const eslintPluginReactNative = require("eslint-plugin-react-native");

// Import the FlatCompat class
const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

// Create a compat object with the current directory as the base
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      "react-native": eslintPluginReactNative,
    },
    rules: {
      "react-native/no-unused-styles": "error",
    },
  },
  // Use the compat object to convert the old-style import config
  ...compat.config({
    plugins: ["import"],
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./"]],
          extensions: [".js", ".jsx"],
        },
      },
    },
    rules: {
      "import/no-unresolved": "error",
    },
  }),
]);
