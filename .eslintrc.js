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
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // enforces zero spaces inside of parentheses, example of correct code: foo('bar');
      'space-in-parens': ['error', 'never'],
      // disallows spaces inside array brackets, example of correct code: var arr = ['foo', 'bar', 'baz'];
      'array-bracket-spacing': ['error', 'never'],
      // disallows spacing inside of braces, example of correct code: var obj = {'foo': 'bar'};
      'object-curly-spacing': ['error', 'never'],
      // require one or more spaces, example of correct code: function foo() { return true; } or if (foo) { bar = 0; }
      'block-spacing': ['error', 'always'],
      // to be notified about unused variables or function arguments
      'no-unused-vars': ['warn', {'vars': 'all'}],
      // allow using == (!=) and === (!==)
      'eqeqeq': 'off',
      // don't warning about dangling underscores in identifiers
      'no-underscore-dangle': 'off',
      // don't notify about prefer default export
      'import/prefer-default-export': 'off',
      // don't expect to return value at the end of method
      'consistent-return': 'off',
      // don’t restrict from using JavaScript features or syntax
      'no-restricted-syntax': 'off',
      // allow inner function declaration
      'no-inner-declarations': 'off',
      // don't check max line length
      'max-len': 'off',
      // disallows providing the 10 radix
      'radix': ['error', 'as-needed'],
      // don't require default case for switch
      'default-case': 'off',
      // allow ^ using, example: if (am ^ bm) { return bm - am; }
      'no-bitwise': 'off',
      // allow else if return is present in if statement
      'no-else-return': 'off',
      // allow to reassign params of functions
      'no-param-reassign': 'off',
      // allow variable declaration not only at the top
      'vars-on-top': 'off',
      // don't expects that the shorthand will be used whenever possible
      'object-shorthand': 'off',
      // don't check escapes (regExp for example)
      'no-useless-escape': 'off',
      // allow function created by constructor
      'no-new-func': 'off',
      // allow single if
      'no-lonely-if': 'off',
      // allow using non arrow callbacks
      'prefer-arrow-callback': 'off',
      // allow using the same param name in inner functions
      'no-shadow': 'off',
      // allow string concatenation
      'prefer-template': 'off',
      // allow require() not only on the top-level module scope
      'global-require': 'off',
      // allow nesting ternary expressions
      'no-nested-ternary': 'off',
      // allow use of chained assignment expressions
      'no-multi-assign': 'off',
      // don't check return statement in callbacks
      'array-callback-return': 'off',
      // don't require hasOwnProperty check
      'guard-for-in': 'off',
      // allow return without data;
      'no-useless-return': 'off',
      // don't check enforces braces around the function body
      'arrow-body-style': 'off',
      // check unused expressions
      'no-unused-expressions': 'off'

    }
};
