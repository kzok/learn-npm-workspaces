/** @type {import('jest').Config} */
module.exports = {
  cacheDirectory: `<rootDir>/tmp/jest`,
  testMatch: [`<rootDir>/**/__tests__/?(*.)test.[jt]s?(x)`],
  transform: {
    "\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.test.json" }],
  },
  testEnvironment: "jsdom",
};
