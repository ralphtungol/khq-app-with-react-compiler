// Some npm modules are published as untranspiled code and
// all files inside node_modules are not transformed by default when
// running Jest.
// If you get a syntax error when running your tests, add the module
// having syntax issues here to allow it to be transpiled.
const esModules = ["uuid"].join("|");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/api-mocks/*",
    "!src/config/*",
    "!src/index.ts",
    "!src/generated/*.ts",
  ],
  coveragePathIgnorePatterns: ["src/generated/*"],
  coverageDirectory: "coverage",
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src", "test"],
  modulePaths: ["src"],
  setupFiles: ["<rootDir>/test/config/setupJest.js"],
  setupFilesAfterEnv: ["<rootDir>/test/config/setupAfterEnv.tsx"],
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/fileMock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/test/styleMock.js",
  },
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  resolver: `${__dirname}/test/config/msw-jest-resolver.ts`,
};
