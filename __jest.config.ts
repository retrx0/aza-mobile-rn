/* eslint-disable no-undef */

module.exports = {
  preset: "jest-expo",
  collectCoverage: true,
  // setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: "v8",
  collectCoverageFrom: [
    "!**/*.d.ts",
    "**/*.{js,jsx,ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  transformIgnorePatterns: [
    "./node_modules/@twotalltotems/react-native-otp-input/dist/index.js",
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@twotalltotems/.*)",
  ],
};

// "jest": {
//   "preset": "jest-expo",
//   "setupFilesAfterEnv": [
//     "@testing-library/jest-native/extend-expect"
//   ],
//   "transformIgnorePatterns": [
//     "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
//   ],
//   "collectCoverage": true,
//   "collectCoverageFrom": [
//     "**/*.{js,jsx}",
//     "!**/coverage/**",
//     "!**/node_modules/**",
//     "!**/babel.config.js",
//     "!**/jest.setup.js"
//   ]
// }
