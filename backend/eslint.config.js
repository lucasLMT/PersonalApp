// export default {
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:prettier/recommended',
//     'airbnb-base',
//     'airbnb-typescript/base',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     project: './tsconfig.json'
//   },
//   plugins: ['@typescript-eslint', 'prettier'],
//   rules: {
//     '@typescript-eslint/no-unused-vars': ['error'],
//     'semi': [2, 'never'],
//     'space-in-parens': 'never'
//   }
// }
import tseslint from '@typescript-eslint/eslint-plugin'
import { FlatCompat } from "@eslint/eslintrc";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import parserTypescript from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  ...compat.extends("airbnb-base"),
  ...compat.config({
    extends: [
      'airbnb-typescript/base'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
  }),
  //...tseslint.configs.stylisticTypeChecked,
  {
    files: ['src/**/*.ts'],
    rules: {
      'semi': ["error", "never"],
      '@typescript-eslint/semi': ["error", "never"],
      'space-in-parens': 'error',
    }
  }
];

//##########################################################################################

// import stylistic from '@stylistic/eslint-plugin';
// import { FlatCompat } from "@eslint/eslintrc";
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import parserTypescript from '@typescript-eslint/parser'
// import tseslint from 'typescript-eslint';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname
// });

// export default [
//   ...compat.extends("airbnb-base"),
//   //...tseslint.configs.recommendedTypeChecked,
//   //...compat.extends("airbnb-typescript/base"),
//   ...compat.config({
//     extends: [
//       'airbnb-typescript/base'
//     ],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//       project: true,
//       tsconfigRootDir: __dirname,
//     }
//   }),
//   ...compat.config({
//     extends: [
//       'plugin:@typescript-eslint/recommended-type-checked'
//     ],
//     plugins: ['@typescript-eslint'],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//       project: true,
//       tsconfigRootDir: __dirname,
//     }
//   }),
//   {
//     files: ['src/**/*.ts'],
//     plugins: {
//       '@stylistic': stylistic
//     },
//     languageOptions: {
//       parser: parserTypescript,
//       // parserOptions: {
//       //   project: true,
//       //   tsconfigRootDir: __dirname,
//       // },
//     },
//     rules: {
//       '@stylistic/block-spacing': ['error', 'always'],
//       '@stylistic/brace-style': ['error', '1tbs'],
//       '@stylistic/comma-dangle': ['error', 'never'],
//       '@stylistic/comma-spacing': ['error', { before: false, after: true }],
//       '@stylistic/comma-style': ['error', 'last'],
//       '@stylistic/computed-property-spacing': ['error', 'never'],
//       '@stylistic/function-call-spacing': ['error', 'never'],
//       '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
//       '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
//       '@stylistic/no-mixed-spaces-and-tabs': 'error',
//       '@stylistic/no-multi-spaces': 'error',
//       '@stylistic/new-parens': ['error', 'always'],
//       '@stylistic/no-extra-semi': 'error',
//       '@stylistic/no-whitespace-before-property': 'error',
//       '@stylistic/semi': ['error', 'never'],
//       '@stylistic/space-before-blocks': ['error', 'always'],
//       '@stylistic/space-before-function-paren': ['error', {
//         anonymous: "always",
//         named: "never",
//         asyncArrow: "ignore"
//       }],
//       '@stylistic/space-in-parens': ['error', 'never'],
//       '@stylistic/space-infix-ops': 'error',
//       '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false}],
//       '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }]
//     }
//   }
// ];
