// https://eslint.org/docs/user-guide/configuring

module.exports = {
    'root': true,
    'env': {
        'browser': true
    },
    'extends': [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential',
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
    ],
      // required to lint *.vue files
    'plugins': [
      'vue'
    ],
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['off'],
      'comma-dangle': ['error', 'never'],
      'generator-star-spacing': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'space-in-parens': ['error', 'never'],
      'no-underscore-dangle': 'off',
      'no-param-reassign': 'off',
      'vars-on-top': 'off',
      'object-shorthand': 'off',
      'no-useless-escape': 'off',
      'no-new-func': 'off',
      'no-lonely-if': 'off',
      'import/prefer-default-export': 'off',
      'consistent-return': 'off',
      'no-restricted-syntax': 'off',
      'no-inner-declarations': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'no-unused-vars': ['warn', {'vars': 'all'}],
      'eqeqeq': ['error', 'always'],
      'max-len': 'off',
      'prefer-arrow-callback': 'off',
      'no-shadow': 'off',
      'prefer-template': 'off',
      'global-require': 'off',
      'no-nested-ternary': 'off',
      'no-multi-assign': 'off',
      'array-callback-return': 'off',
      'guard-for-in': 'off',
      'no-useless-return': 'off',
      'radix': ['error', 'as-needed'],
      'default-case': 'off',
      'no-bitwise': 'off',
      'no-else-return': 'off',
      'arrow-body-style': 'off',
      'no-unused-expressions': 'off'
    }
};
