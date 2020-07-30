module.exports = {
  preset: "jest-preset-typescript-react-native",
  setupFiles: ["<rootDir>/jest-setup.js"],
  verbose: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageThreshold: {
    global: {
      branches: 50, // TODO: Increase this when we have more code.
      functions: 75,
      lines: 75,
      statements: -10,
    },
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!native-base|react-(native|universal|navigation)-(.*)||@react-navigation/(.*)/@expo/(.*))/",
  ],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx",
    "node",
    "android.js",
    "ios.js",
  ],
  globals: {
    __DEV__: true,
  },
};
