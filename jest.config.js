/** @type {import('jest').Config} */
const config = {
  displayName: 'node',
  testEnvironment: 'node',
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
};

module.exports = config;
