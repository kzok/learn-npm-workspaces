/** @type {import('jest').Config} */
module.exports = {
  cacheDirectory: "./tmp/jest",
  testMatch: ["**/__tests__/?(*.)test.[jt]s?(x)"],
  transform: {
    "\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/../../tsconfig.base.json" }],
  },
};
