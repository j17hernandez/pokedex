module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    "^@fs/(.*)$": "<rootDir>/src/$1",
    '^vue$': 'vue/dist/vue.common.js'
  },
  setupFiles: ["<rootDir>/tests/unit/index.js"],
}
