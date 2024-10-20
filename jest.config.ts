/* istanbul ignore file */
import nextJest from 'next/jest';
import path from 'path';

const rootDir = path.resolve(__dirname); // Set the root directory to the current directory

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
  testPathIgnorePatterns: [
    path.join(rootDir, 'jest.config.ts'),
    path.join(rootDir, 'jest.setup.ts'),
  ],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./**/{.next,.storybook}/**',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!./src/**/*.stories.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: [
    // Add the path to the jest.config.ts file
    path.join(rootDir, 'jest.config.ts'),
  ],
};

module.exports = createJestConfig(customJestConfig);
