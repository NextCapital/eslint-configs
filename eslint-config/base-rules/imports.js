module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx'
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ]
  },

  rules: {
    // Static analysis:

    // ensure imports point to files/modules that can be resolved
    'import/no-unresolved': 'off',

    // ensure named imports coupled with named exports
    'import/named': 'error',

    // ensure default import coupled with default export
    'import/default': 'off',

    'import/namespace': 'off',

    // Helpful warnings:

    // disallow invalid exports, e.g. multiple defaults
    'import/export': 'error',

    // do not allow a default import name to match a named export
    'import/no-named-as-default': 'error',

    // warn on accessing default export property names that are also named exports
    'import/no-named-as-default-member': 'error',

    // disallow use of jsdoc-marked-deprecated imports
    'import/no-deprecated': 'off',

    // Forbid the use of extraneous packages
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': ['warn', {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // jest config
        '**/jest.setup.js', // jest setup
        '**/vue.config.js', // vue-cli config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/gulpfile.js', // gulp config
        '**/gulpfile.*.js', // gulp config
        '**/Gruntfile{,.js}', // grunt config
        '**/protractor.conf.js', // protractor config
        '**/protractor.conf.*.js', // protractor config
        '**/karma.conf.js', // karma config
        '**/.eslintrc.js' // eslint config
      ],
      optionalDependencies: false
    }],

    // Forbid mutable exports
    'import/no-mutable-exports': 'error',

    // Module systems:

    // disallow require()
    'import/no-commonjs': 'off',

    // disallow AMD require/define
    'import/no-amd': 'error',

    // No Node.js builtin modules
    // TODO: enable?
    'import/no-nodejs-modules': 'off',

    // Style guide:

    // disallow non-import statements appearing before import statements
    'import/first': 'error',

    // disallow non-import statements appearing before import statements
    // deprecated: use `import/first`
    'import/imports-first': 'off',

    // disallow duplicate imports
    'import/no-duplicates': 'error',

    // disallow namespace imports
    // TODO: enable?
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    'import/extensions': ['error', 'never'],

    // ensure absolute imports are above relative imports and that unassigned imports are ignored
    // TODO: enforce a stricter convention in module import order?
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

    // Require a newline after the last import/require in a group
    'import/newline-after-import': 'error',

    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'error',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // Forbid modules to have too many dependencies
    'import/max-dependencies': ['off', { max: 10 }],

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'error',

    // prevent importing the submodules of other modules
    'import/no-internal-modules': ['off', {
      allow: []
    }],

    // Warn if a module could be mistakenly parsed as a script by a consumer
    // leveraging Unambiguous JavaScript Grammar
    // this should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it's not a thing.
    'import/unambiguous': 'off',

    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // Prevent unassigned imports
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': 'off',

    // Prevent importing the default as if it were named
    'import/no-named-default': 'error',

    // Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': ['off', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false
    }],

    // This rule enforces that all exports are declared at the bottom of the file.
    // TODO: enable?
    'import/exports-last': 'off',

    // Reports when named exports are not grouped together in a single export declaration
    // or when multiple assignments to CommonJS module.exports or exports object are present
    // in a single file.
    'import/group-exports': 'off',

    // forbid default exports. this is a terrible rule, do not use it.
    'import/no-default-export': 'off',

    // Prohibit named exports. this is a terrible rule, do not use it.
    'import/no-named-export': 'off',

    // Forbid a module from importing itself
    'import/no-self-import': 'error',

    // Forbid cyclical dependencies between modules
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Ensures that there are no useless path segments
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // dynamic imports require a leading comment with a webpackChunkName
    'import/dynamic-import-chunkname': ['off', {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
    }],

    // Use this rule to prevent imports to folders in relative parent paths.
    'import/no-relative-parent-imports': 'off',

    // Reports modules without any exports, or with unused exports
    // TODO: enable once it supports CJS
    'import/no-unused-modules': ['off', {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true
    }],

    // Reports the use of import declarations with CommonJS exports in any module except for the
    // main module.
    'import/no-import-module-exports': ['error', {
      exceptions: []
    }],

    // Use this rule to prevent importing packages through relative paths.
    'import/no-relative-packages': 'error',

    // enforce a consistent style for type specifiers (inline or top-level)
    // TODO, semver-major: enable (just in case)
    'import/consistent-type-specifier-style': ['off', 'prefer-inline'],

    // Reports the use of empty named import blocks.
    // TODO, semver-minor: enable
    'import/no-empty-named-blocks': 'off'
  }
};
