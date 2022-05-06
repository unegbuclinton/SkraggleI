module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/no-unstable-nested -components': 'off',
    'react/no-array-index-key': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true
      }
    }
  ]
};
