module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  testEnvironment: 'jsdom',
};
