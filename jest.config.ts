import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  testEnvironment: 'node', 
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-native/js-polyfills)/)', 
  ],
  globals: {
    'ts-jest': {
      babelConfig: true, 
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}', 
  ],
};

export default config;