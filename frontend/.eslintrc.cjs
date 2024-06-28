module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': [2, 'never'], // Adjust semicolon style as needed
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary': 'off',
    'no-restricted-syntax': 'off', // Review documentation for this rule
    'no-use-before-define': 'off', // Consider enabling for better clarity
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-len': [
        'error',
        {
            'code': 120,
            'tabWidth': 4
        }
    ],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'import/no-unresolved': 'off',
    'consistent-return': 'off', // Consider enabling for better code clarity
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-props-no-spreading': 'off', // Consider for better prop management
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-prototype-builtins': 'off',
    'no-nested-ternary': 'on',
    'prettier/prettier': [2, { 'endOfLine': 'auto' }]
  },
}
