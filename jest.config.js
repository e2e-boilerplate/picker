module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['json', 'text'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 50,
      lines: 50,
      statements: -10,
    },
  },
};
