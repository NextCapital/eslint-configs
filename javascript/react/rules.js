module.exports = {
  rules: {
    // Ensures inline tags are not rendered without spaces between them
    '@stylistic/jsx-child-element-spacing': 'off',

    // Validate closing bracket location in JSX
    '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],

    '@stylistic/jsx-closing-tag-location': 'error',

    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
    '@stylistic/jsx-curly-brace-presence': ['error', {
      children: 'never',
      props: 'never'
    }],

    // Enforce linebreaks in curly braces in JSX attributes and expressions.
    '@stylistic/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent'
    }],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    '@stylistic/jsx-curly-spacing': ['error', { when: 'always' }],

    // Enforce spacing around jsx equals signs
    '@stylistic/jsx-equals-spacing': ['error', 'never'],

    // Require that the first prop in a JSX element be on a new line when the element is multiline
    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    '@stylistic/jsx-function-call-newline': ['error', 'multiline'],

    // Validate props indentation in JSX
    '@stylistic/jsx-indent-props': ['error', 2],

    // Limit maximum of props on a single line in JSX
    '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // Enforce a new line after jsx elements and expressions
    '@stylistic/jsx-newline': 'off',

    // One JSX Element Per Line
    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

    // Enforce PascalCase for user-defined JSX components
    '@stylistic/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: []
    }],

    // Disallow multiple spaces between inline JSX props
    '@stylistic/jsx-props-no-multi-spaces': 'error',

    '@stylistic/jsx-quotes': 'error',

    // Enforce props alphabetical sorting
    '@stylistic/jsx-sort-props': ['off', {
      callbacksLast: false,
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: true,
      shorthandFirst: false,
      shorthandLast: false
    }],

    // Validate whitespace in and around the JSX opening and closing brackets
    '@stylistic/jsx-tag-spacing': ['error', {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never'
    }],

    // Prevent missing parentheses around multilines JSX
    '@stylistic/jsx-wrap-multilines': ['error', {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line'
    }],

    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate'
      ]
    }],

    // Enforces consistent naming for boolean props
    'react/boolean-prop-naming': ['off', {
      message: '',
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'
    }],

    // Prevent usage of button elements without an explicit type attribute
    'react/button-has-type': ['error', {
      button: true,
      reset: false,
      submit: true
    }],

    // This rule enforces onChange or readonly attribute for checked property of input elements.
    'react/checked-requires-onchange-or-readonly': ['off', {
      ignoreExclusiveCheckedAttribute: false,
      ignoreMissingProperties: false
    }],

    // Enforce all defaultProps have a corresponding non-required PropType
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': 'off',

    // Prevent missing displayName in a React component definition
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // Forbid certain props on Components
    'react/forbid-component-props': ['off', { forbid: [] }],

    // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': ['off', { forbid: [] }],

    // Forbid certain elements
    'react/forbid-elements': ['off', { forbid: [] }],

    // Forbids using non-exported propTypes
    // this is intentionally set to "warn". it would be "error",
    // but it's only critical if you're stripping propTypes in production.
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

    // Forbid certain propTypes (any, array, object)
    'react/forbid-prop-types': ['error', {
      checkChildContextTypes: true,
      checkContextTypes: true,
      forbid: ['any', 'array', 'object']
    }],

    // TODO: semver-major, enable
    'react/forward-ref-uses-ref': 'off',

    // Enforce a specific function type for function components
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],

    // Ensure destructuring and symmetric naming of useState hook value and setter variables
    // TODO: semver-major, enable
    'react/hook-use-state': 'off',

    // Enforce sandbox attribute on iframe elements
    // TODO: semver-major, enable
    'react/iframe-missing-sandbox': 'off',

    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // only .jsx files may have JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

    // Enforce shorthand or standard form for React fragments
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],

    // Validate JSX has key prop when in array or iterator
    // Turned off because it has too many false positives
    'react/jsx-key': 'off',

    // Validate JSX maximum depth
    'react/jsx-max-depth': 'off',

    // Prevent usage of .bind() in JSX props
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
      allowBind: false,
      allowFunctions: false,
      ignoreDOMComponents: true,
      ignoreRefs: true
    }],

    // prevent accidental JS comments from being injected into JSX as text
    'react/jsx-no-comment-textnodes': 'error',

    // Prevent react contexts from taking non-stable values
    'react/jsx-no-constructed-context-values': 'error',

    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Prevent problematic leaked values from being rendered
    // TODO: semver-major, enable
    'react/jsx-no-leaked-render': 'off',

    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': ['off', { noStrings: true }],

    // Prevent usage of `javascript:` URLs
    'react/jsx-no-script-url': ['error', [
      {
        name: 'Link',
        props: ['to']
      }
    ]],

    // Disallow target="_blank" on links
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // Disallow unnecessary fragments
    'react/jsx-no-useless-fragment': 'error',

    // TODO: semver-major, enable
    'react/jsx-props-no-spread-multi': 'off',

    // Disallow JSX props spreading
    'react/jsx-props-no-spreading': ['error', {
      custom: 'enforce',
      exceptions: [],
      explicitSpread: 'ignore',
      html: 'enforce'
    }],

    // Deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-prop-types': 'off',

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': ['error'],

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',

    // Prevent using this.state within a this.setState
    'react/no-access-state-in-setstate': 'error',

    // Prevent adjacent inline elements not separated by whitespace
    // TODO: enable? semver-major
    'react/no-adjacent-inline-elements': 'off',

    // Prevent usage of Array index in keys
    'react/no-array-index-key': 'error',

    // Lifecycle methods should be methods on the prototype, not class fields
    'react/no-arrow-function-lifecycle': 'error',

    // Prevent passing of children as props
    'react/no-children-prop': 'error',

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'warn',

    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',

    // Prevent usage of deprecated methods
    'react/no-deprecated': ['error'],

    // Prevent usage of setState in componentDidMount
    // this is necessary for server-rendering
    'react/no-did-mount-set-state': 'off',

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'error',

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'off',

    // warn against using findDOMNode()
    'react/no-find-dom-node': 'error',

    // Prevent usage of invalid attributes
    'react/no-invalid-html-attribute': 'error',

    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    'react/no-multi-comp': 'off',

    // Enforce that namespaces are not used in React elements
    'react/no-namespace': 'error',

    // TODO: semver-major, enable
    'react/no-object-type-as-default-prop': 'off',

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 'error',

    // disallow using React.render/ReactDOM.render's return value
    'react/no-render-return-value': 'error',

    // Prevent usage of setState
    'react/no-set-state': 'off',

    // Prevent using string references
    'react/no-string-refs': 'error',

    // Prevent this from being used in stateless functional components
    'react/no-this-in-sfc': 'error',

    // Prevents common casing typos
    'react/no-typos': 'error',

    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',

    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'error',

    // Prevent usage of UNSAFE_ methods
    'react/no-unsafe': 'off',

    // Prevent creating unstable components inside components
    'react/no-unstable-nested-components': 'error',

    // Prevent declaring unused methods of component class
    'react/no-unused-class-component-methods': 'error',

    // Prevent unused propType definitions
    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      skipShapeProps: true
    }],

    // Prevent unused state values
    'react/no-unused-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'error',

    // Require ES6 class declarations over React.createClass
    'react/prefer-es6-class': ['error', 'always'],

    // Prefer exact proptype definitions
    'react/prefer-exact-props': 'error',

    // Enforce that props are read-only
    'react/prefer-read-only-props': 'off',

    // Require stateless functions when not using lifecycle methods, setState or ref
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // Prevent missing props validation in a React component definition
    'react/prop-types': ['error', {
      customValidators: [],
      ignore: [],
      skipUndeclared: false
    }],

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'off',

    // require a shouldComponentUpdate method, or PureRenderMixin
    'react/require-optimization': ['off', { allowDecorators: [] }],

    // Require render() methods to return something
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'error',

    // Enforce component methods order
    'react/sort-comp': ['error', {
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount'
        ],
        rendering: [
          '/^render.+$/',
          'render'
        ]
      },
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^handle.+$/',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering'
      ]
    }],

    // TODO: semver-major, enable?
    'react/sort-default-props': ['off', {
      ignoreCase: false
    }],

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['off', {
      callbacksLast: false,
      ignoreCase: true,
      requiredFirst: false,
      sortShapeProp: true
    }],

    // Enforce state initialization style
    // TODO: set to "never" once babel-preset-airbnb supports public class fields
    'react/state-in-constructor': ['error', 'always'],

    // Enforces where React component static properties should be positioned
    // TODO: set to "static public field" once babel-preset-airbnb supports public class fields
    'react/static-property-placement': ['error', 'property assignment'],

    // Require style prop value be an object or var
    'react/style-prop-object': 'error',

    // Prevent void DOM elements from receiving children
    'react/void-dom-elements-no-children': 'error'
  }
};
