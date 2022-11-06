/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      cacheDirectory: `<rootDir>/tmp/jest/packages`,
      testMatch: [`<rootDir>/packages/**/__tests__/?(*.)test.[jt]s?(x)`],
      transform: {
        "\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.base.json" }],
      },
    },
  ],
};
