/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleNameMapper: {
    // This mapping is required so that Jest does not choke on syntax like
    // `import "./foo.css";`
    "\\.(css)$": "identity-obj-proxy",
  },
  preset: "ts-jest",
  testEnvironment: "node",
};
