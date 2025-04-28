const { FlatCompat } = require('@eslint/eslintrc');
const { configs: jsConfigs } = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: jsConfigs.recommended,
});

module.exports = [
  // 1) Игнорируем папки и артефакты
  {
    ignores: ['node_modules/**', 'build/**', 'dist/**', '.expo/**', '**/*.js.map'],
  },

  // 2) Регистрируем плагины
  {
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'react-native': require('eslint-plugin-react-native'),
      import: require('eslint-plugin-import'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
      tailwindcss: require('eslint-plugin-tailwindcss'),
      prettier: require('eslint-plugin-prettier'),
      'simple-import-sort': require('eslint-plugin-simple-import-sort'),
    },
  },

  // 3) Extends всех рекомендуемых конфигов
  ...compat.extends(
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended'
  ),

  // 4) Парсер для React Native + JSX
  {
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['module:metro-react-native-babel-preset'],
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
  },

  // 5) кастомные правила
  {
    rules: {
      'no-shadow': 'warn',
      'global-require': 'warn',
      'no-use-before-define': 'warn',
      'no-underscore-dangle': 'warn',
      'no-undef': 'warn',
      camelcase: 'warn',
      'react/jsx-no-constructed-context-values': 'warn',
      'react-native/no-color-literals': 'warn',
      'react/prop-types': 'warn',
      'react/no-unstable-nested-components': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react-native/no-inline-styles': 'warn',
      'tailwindcss/classnames-order': 'warn',
      'prettier/prettier': ['error', require('./.prettierrc.json')],
      'import/prefer-default-export': 'warn',
      'import/no-extraneous-dependencies': 'warn',

      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // 1) side-effect импорты (e.g. import 'foo.css')
            ['^\\u0000'],
            // 2) внешние пакеты React, Expo и остальные из node_modules
            ['^react', '^expo', '^@?\\w'],
            // 3) абсолютные алиасы вашего проекта (поправьте под свои)
            ['^components(/.*|$)', '^screens(/.*|$)', '^utils(/.*|$)'],
            // 4) родительские импорты
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // 5) сиблинги и index
            ['^\\.(?!/?$)', '^\\./?$'],
            // 6) стили (css/scss)
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    ignores: ['node_modules', 'dist', '.editorconfig', 'src/api/generated_api.js', 'eslint.config.cjs'],
  },
];
