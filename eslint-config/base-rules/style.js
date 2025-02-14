module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // TODO: enable? semver-major
    '@stylistic/array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // enforce spacing inside array brackets
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    // enforce line breaks between array elements
    // TODO: enable? semver-major
    '@stylistic/array-element-newline': ['off', {
      minItems: 3,
      multiline: true
    }],

    // enforce spacing inside single-line blocks
    '@stylistic/block-spacing': ['error', 'always'],

    // enforce one true brace style
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // forbid trailing commas in multiline object literals
    '@stylistic/comma-dangle': ['error', 'never'],

    // enforce spacing before and after comma
    '@stylistic/comma-spacing': ['error', {
      after: true,
      before: false
    }],

    // enforce one true comma style
    '@stylistic/comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        NewExpression: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false
      }
    }],

    // disallow padding inside computed properties
    '@stylistic/computed-property-spacing': ['error', 'never'],

    // enforce newline at the end of file, with no multiple empty lines
    '@stylistic/eol-last': ['error', 'always'],

    '@stylistic/function-call-argument-newline': ['error', 'consistent'],

    // enforce spacing between functions and their invocations
    '@stylistic/function-call-spacing': ['error', 'never'],

    // Enforce the location of arrow function bodies with implicit returns
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    // this option sets a specific tab width for your code
    '@stylistic/indent': ['error', 2, {
      ArrayExpression: 1,
      CallExpression: {
        arguments: 1
      },
      flatTernaryExpressions: false,
      FunctionDeclaration: {
        body: 1,
        parameters: 1
      },
      FunctionExpression: {
        body: 1,
        parameters: 1
      },
      ignoreComments: false,
      ignoredNodes: [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild'
      ],
      ImportDeclaration: 1,
      // MemberExpression: null,
      ObjectExpression: 1,
      outerIIFEBody: 1,
      SwitchCase: 1,
      VariableDeclarator: 1
    }],

    // specify whether double or single quotes should be used in JSX attributes
    '@stylistic/jsx-quotes': ['off', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    '@stylistic/key-spacing': ['error', {
      afterColon: true,
      beforeColon: false
    }],

    // require a space before & after certain keywords
    '@stylistic/keyword-spacing': ['error', {
      after: true,
      before: true,
      overrides: {
        case: { after: true },
        return: { after: true },
        throw: { after: true }
      }
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    '@stylistic/linebreak-style': ['error', 'unix'],

    // enforces empty lines around comments
    '@stylistic/lines-around-comment': 'off',

    // require or disallow an empty line between class members
    '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // specify the maximum length of a line in your program
    '@stylistic/max-len': ['error', 100, 2, {
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true
    }],

    // restrict the number of statements per line
    '@stylistic/max-statements-per-line': ['off', { max: 1 }],

    // enforce a particular style for multiline comments
    '@stylistic/multiline-comment-style': ['off', 'starred-block'],

    // require multiline ternary
    // TODO: enable?
    '@stylistic/multiline-ternary': ['off', 'never'],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    '@stylistic/new-parens': 'error',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow un-paren'd mixes of different operators
    '@stylistic/no-mixed-operators': ['error', {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      allowSamePrecedence: false,
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||']
      ]
    }],

    // disallow mixed spaces and tabs for indentation
    '@stylistic/no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    '@stylistic/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }],

    // disallow tab characters entirely
    '@stylistic/no-tabs': 'error',

    // disallow trailing whitespace at the end of lines
    '@stylistic/no-trailing-spaces': ['error', {
      ignoreComments: false,
      skipBlankLines: false
    }],

    // disallow whitespace before properties
    '@stylistic/no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    '@stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // enforce line breaks between braces
    '@stylistic/object-curly-newline': ['error', {
      ExportDeclaration: {
        consistent: true,
        minProperties: 4,
        multiline: true
      },
      ImportDeclaration: {
        consistent: true,
        minProperties: 4,
        multiline: true
      },
      ObjectExpression: {
        consistent: true,
        minProperties: 4,
        multiline: true
      },
      ObjectPattern: {
        consistent: true,
        minProperties: 4,
        multiline: true
      }
    }],

    // require padding inside curly braces
    '@stylistic/object-curly-spacing': ['error', 'always'],

    // enforce "same line" or "multiple line" on object properties.
    '@stylistic/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true
    }],

    // require a newline around variable declaration
    '@stylistic/one-var-declaration-per-line': 'off',

    // Requires operator at the beginning of the line in multiline statements
    '@stylistic/operator-linebreak': ['error', 'after'],

    // disallow padding within blocks
    '@stylistic/padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    }, {
      allowSingleLineBlocks: true
    }],

    // Require or disallow padding lines between statements
    '@stylistic/padding-line-between-statements': ['error', {
      blankLine: 'always',
      next: '*',
      prev: 'directive'
    }, {
      blankLine: 'any',
      next: 'directive',
      prev: 'directive'
    }],

    // require quotes around object literal property names
    '@stylistic/quote-props': ['error', 'as-needed', {
      keywords: false,
      numbers: false,
      unnecessary: true
    }],

    // specify whether double or single quotes should be used
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

    // require or disallow use of semicolons instead of ASI
    '@stylistic/semi': ['error', 'always'],

    // enforce spacing before and after semicolons
    '@stylistic/semi-spacing': ['error', {
      after: true,
      before: false
    }],

    // Enforce location of semicolons
    '@stylistic/semi-style': ['error', 'last'],

    // require or disallow space before blocks
    '@stylistic/space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    '@stylistic/space-before-function-paren': ['error', {
      anonymous: 'never',
      asyncArrow: 'always',
      named: 'never'
    }],

    // require or disallow spaces inside parentheses
    '@stylistic/space-in-parens': ['error', 'never'],

    // require spaces around operators
    '@stylistic/space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    '@stylistic/space-unary-ops': ['error', {
      nonwords: false,
      overrides: {},
      words: true
    }],

    // require or disallow a space immediately following the // or /* in a comment
    '@stylistic/spaced-comment': ['error', 'always', {
      block: {
        balanced: true,
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'] // space here to support sprockets directives and flow comment types
      },
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'] // space here to support sprockets directives, slash for TS /// comments
      }
    }],

    // Enforce spacing around colons of switch statements
    '@stylistic/switch-colon-spacing': ['error', {
      after: true,
      before: false
    }],

    // Require or disallow spacing between template tags and their literals
    '@stylistic/template-tag-spacing': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    '@stylistic/wrap-regex': 'off',

    // require camel case names
    camelcase: ['error', {
      ignoreDestructuring: false,
      properties: 'never'
    }],

    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': ['off', 'never', {
      block: {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: true,
        ignorePattern: '.*'
      },
      line: {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: true,
        ignorePattern: '.*'
      }
    }],

    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // requires function names to match the name of the variable or property to which they are
    // assigned
    'func-name-matching': ['off', 'always', {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false
    }],

    // require function expressions to have a name
    'func-names': 'warn',

    // enforces use of function declarations or expressions
    // TODO: enable
    'func-style': ['off', 'expression'],

    // disallow specified identifiers
    'id-denylist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    'id-match': 'off',

    // enforce position of line comments
    // TODO: enable?
    'line-comment-position': ['off', {
      applyDefaultPatterns: true,
      ignorePattern: '',
      position: 'above'
    }],

    // Require or disallow logical assignment logical operator shorthand
    // TODO, semver-major: enable
    'logical-assignment-operators': ['off', 'always', {
      enforceForIfStatements: true
    }],

    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // specify the max number of lines in a file
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // enforce a maximum function length
    'max-lines-per-function': ['off', {
      IIFEs: true,
      max: 50,
      skipBlankLines: true,
      skipComments: true
    }],

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    // require a capital letter for constructors
    'new-cap': ['error', {
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      newIsCap: true,
      newIsCapExceptions: []
    }],

    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',

    'newline-before-return': 'off',

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    'no-bitwise': 'error',

    // disallow use of the continue statement
    'no-continue': 'off',

    // disallow comments inline after code
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // disallow use of chained assignment expressions
    'no-multi-assign': ['error'],

    // disallow negated conditions
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow use of unary operators, ++ and --
    'no-plusplus': 'error',

    // disallow certain syntax forms
    'no-restricted-syntax': [
      'error',
      {
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement'
      },
      {
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        selector: 'ForOfStatement'
      },
      {
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement'
      },
      {
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement'
      }
    ],

    // disallow space between function identifier and application
    // deprecated in favor of func-call-spacing
    'no-spaced-func': 'off',

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off', // TODO: Turn back on lol

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // allow just one var statement per function
    'one-var': 'off',

    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'always'],

    // Disallow the use of Math.pow in favor of the ** operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    'prefer-object-spread': 'error',

    // do not require jsdoc
    'require-jsdoc': 'off',

    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', {
      caseSensitive: false,
      natural: true
    }],

    // sort variables within the same declaration block
    'sort-vars': 'off',

    // require or disallow the Unicode Byte Order Mark
    'unicode-bom': ['error', 'never']
  }
};
