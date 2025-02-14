module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        generators: false,
        objectLiteralDuplicateProperties: false
      },
      ecmaVersion: 2016,
      sourceType: 'module'
    }
  },

  rules: {
    // require parens in arrow function arguments
    '@stylistic/arrow-parens': ['error', 'always'],

    // require space before/after arrow function's arrow
    '@stylistic/arrow-spacing': ['error', {
      after: true,
      before: true
    }],

    // enforce the spacing around the * in generator functions
    '@stylistic/generator-star-spacing': ['error', {
      after: true,
      before: false
    }],

    // disallow arrow functions where they could be confused with comparisons
    '@stylistic/no-confusing-arrow': ['error', {
      allowParens: true
    }],

    // enforce spacing between object rest-spread
    '@stylistic/rest-spread-spacing': ['error', 'never'],

    // enforce usage of spacing in template strings
    '@stylistic/template-curly-spacing': 'error',

    // enforce spacing around the * in yield* expressions
    '@stylistic/yield-star-spacing': ['error', 'after'],

    // enforces no braces where they can be omitted
    // TODO: enable requireReturnForObjectLiteral?
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false
    }],

    // verify super() callings in constructors
    'constructor-super': 'error',

    // disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // disallow duplicate class members
    'no-dupe-class-members': 'error',

    // disallow importing from the same path more than once
    'no-duplicate-imports': 'off',

    // disallow symbol constructor
    'no-new-native-nonconstructor': 'error',

    // Disallow specified names in exports
    'no-restricted-exports': ['error', {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export
        'then' // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ]
    }],

    // disallow specific imports
    'no-restricted-imports': ['off', {
      paths: [],
      patterns: []
    }],

    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'error',

    // disallow useless computed property keys
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false
    }],

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always', {
      avoidQuotes: true,
      ignoreConstructors: false
    }],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],

    // Prefer destructuring from arrays and objects
    'prefer-destructuring': 'off',

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // suggest using Reflect methods where applicable
    'prefer-reflect': 'off',

    // use rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // suggest using the spread syntax instead of .apply()
    'prefer-spread': 'error',

    // suggest using template literals instead of string concatenation
    'prefer-template': 'error',

    // disallow generator functions that do not have yield
    'require-yield': 'error',

    // import sorting
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],

    // require a Symbol description
    'symbol-description': 'error'
  }
};
