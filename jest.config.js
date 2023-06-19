module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['node_modules', './lib'],
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
};
