module.exports = {
  transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', // 使用 identity-obj-proxy 处理样式文件
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};