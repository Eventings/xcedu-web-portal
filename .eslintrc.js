module.exports = {
  extends: [
    'standard'
  ],
  root: true,
  env: {
    node: true
  },
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'no-console': ['warn'],
    'no-empty': 2,
    'no-eq-null': 2,
    'no-new': 0,
    'no-fallthrough': 0,
    'no-unreachable': 0,
    'no-unneeded-ternary': 0
  },
  globals: {
    singleSpa: 'readonly',
    System: 'readonly',
  }
}
