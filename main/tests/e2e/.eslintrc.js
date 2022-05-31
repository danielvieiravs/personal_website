module.exports = {
  plugins: [
    'cypress'
  ],
  env: {
    mocha: true,
    'cypress/globals': true,
    'vue/setup-compiler-macros': true
  },
  rules: {
    strict: 'off'
  }
}
