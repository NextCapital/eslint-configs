module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    'for-direction': 'error',

    // Enforces that a return statement is present in property getters
    'getter-return': ['error', { allowImplicit: true }],

    // disallow using an async function as a Promise executor
    'no-async-promise-executor': 'error',

    // Disallow await inside of loops
    'no-await-in-loop': 'error',

    // Disallow comparisons to negative zero
    'no-compare-neg-zero': 'error',

    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // disallow use of console
    'no-console': 'error',

    // Disallows expressions where the operation doesn't affect the value
    // TODO: semver-major, enable
    'no-constant-binary-expression': 'off',

    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // disallow use of debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // Disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 'error',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // disallow empty statements
    'no-empty': 'error',

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    '@stylistic/no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false
    }],

    // disallow unnecessary semicolons
    '@stylistic/no-extra-semi': 'error',

    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    'no-import-assign': 'error',

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // Disallow Number Literals That Lose Precision
    'no-loss-of-precision': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'error',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // Disallow new operators with global non-constructor functions
    // TODO: semver-major, enable
    'no-new-native-nonconstructor': 'off',

    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': 'error',

    // disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'error',

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // Disallow returning values from setters
    'no-setter-return': 'error',

    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': ['error', {
      ignore: [] // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    }],

    // disallow return/throw/break/continue inside finally blocks
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // disallow use of optional chaining in contexts where the undefined value is not allowed
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

    // Disallow Unused Private Class Members
    // TODO: enable once eslint 7 is dropped (which is semver-major)
    'no-unused-private-class-members': 'off',

    // Disallow useless backreferences in regular expressions
    'no-useless-backreference': 'error',

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // note: not enabled because it is very buggy
    'require-atomic-updates': 'off',

    // disallow comparisons with the value NaN
    'use-isnan': 'error',

    // ensure JSDoc comments are valid
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': ['error', { requireStringLiterals: true }]
  }
};
