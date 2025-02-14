module.exports = {
  rules: {
    // ensure emoji are accessible
    // disabled; rule is deprecated
    'jsx-a11y/accessible-emoji': 'off',

    // Enforce that all elements that require alternative text have meaningful information
    'jsx-a11y/alt-text': ['warn', {
      area: [],
      elements: ['img', 'object', 'area', 'input[type="image"]'],
      img: [],
      'input[type="image"]': [],
      object: []
    }],

    // Ensures anchor text is not ambiguous
    // TODO: semver-major, enable
    'jsx-a11y/anchor-ambiguous-text': 'off',

    // Enforce that anchors have content
    'jsx-a11y/anchor-has-content': ['warn', { components: [] }],

    // ensure <a> tags are valid
    'jsx-a11y/anchor-is-valid': ['warn', {
      aspects: ['noHref', 'invalidHref', 'preferButton'],
      components: ['Link'],
      specialLink: ['to']
    }],

    // elements with aria-activedescendant must be tabbable
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',

    // Enforce all aria-* props are valid.
    'jsx-a11y/aria-props': 'warn',

    // Enforce ARIA state and property values are valid.
    'jsx-a11y/aria-proptypes': 'warn',

    // Require ARIA roles to be valid and non-abstract
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: false }],

    // Enforce that elements that do not support ARIA roles, states, and
    // properties do not have those attributes.
    'jsx-a11y/aria-unsupported-elements': 'warn',

    // Ensure the autocomplete attribute is correct and suitable for the form field it is used with
    'jsx-a11y/autocomplete-valid': ['off', {
      inputComponents: []
    }],

    // require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
    'jsx-a11y/click-events-have-key-events': 'warn',

    // Enforce that a control (an interactive element) has a text label.
    'jsx-a11y/control-has-associated-label': ['warn', {
      controlComponents: [],
      depth: 5,
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video'
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid'
      ],
      labelAttributes: ['label']
    }],

    // ensure <hX> tags have content and are not aria-hidden
    'jsx-a11y/heading-has-content': ['warn', { components: [''] }],

    // require HTML elements to have a "lang" prop
    'jsx-a11y/html-has-lang': 'warn',

    // ensure iframe elements have a unique title
    'jsx-a11y/iframe-has-title': 'warn',

    // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
    'jsx-a11y/img-redundant-alt': 'warn',

    // Elements with an interactive role and interaction handlers must be focusable
    'jsx-a11y/interactive-supports-focus': 'warn',

    // Enforce that a label tag has a text label and an associated control.
    'jsx-a11y/label-has-associated-control': ['warn', {
      assert: 'both',
      controlComponents: [],
      depth: 25,
      labelAttributes: [],
      labelComponents: []
    }],

    // require HTML element's lang prop to be valid
    'jsx-a11y/lang': 'warn',

    // media elements must have captions
    'jsx-a11y/media-has-caption': ['warn', {
      audio: [],
      track: [],
      video: []
    }],

    // require that mouseover/out come with focus/blur, for keyboard-only users
    'jsx-a11y/mouse-events-have-key-events': 'warn',

    // Prevent use of `accessKey`
    'jsx-a11y/no-access-key': 'warn',

    // Enforce that aria-hidden="true" is not set on focusable elements.
    // TODO: semver-major, enable
    'jsx-a11y/no-aria-hidden-on-focusable': 'off',

    // prohibit autoFocus prop
    'jsx-a11y/no-autofocus': ['warn', { ignoreNonDOM: true }],

    // prevent distracting elements, like <marquee> and <blink>
    'jsx-a11y/no-distracting-elements': ['warn', {
      elements: ['marquee', 'blink']
    }],

    // WAI-ARIA roles should not be used to convert an interactive element to non-interactive
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['warn', {
      tr: ['none', 'presentation']
    }],

    // A non-interactive element does not support event handlers (mouse and key handlers)
    'jsx-a11y/no-noninteractive-element-interactions': ['warn', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp'
      ]
    }],

    // WAI-ARIA roles should not be used to convert a non-interactive element to interactive
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['warn', {
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      table: ['grid'],
      td: ['gridcell'],
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid']
    }],

    // Tab key navigation should be limited to elements on the page that can be interacted with.
    'jsx-a11y/no-noninteractive-tabindex': ['warn', {
      allowExpressionValues: true,
      roles: ['tabpanel'],
      tags: []
    }],

    // require onBlur instead of onChange
    'jsx-a11y/no-onchange': 'off',

    // ensure HTML elements do not specify redundant ARIA roles
    'jsx-a11y/no-redundant-roles': ['warn', {
      nav: ['navigation']
    }],

    // Enforce that DOM elements without semantic behavior not have interaction handlers
    'jsx-a11y/no-static-element-interactions': ['warn', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp'
      ]
    }],

    // Enforces using semantic DOM elements over the ARIA role property.
    // TODO: semver-major, enable
    'jsx-a11y/prefer-tag-over-role': 'off',

    // Enforce that elements with ARIA roles must have all required attributes
    // for that role.
    'jsx-a11y/role-has-required-aria-props': 'warn',

    // Enforce that elements with explicit or implicit roles defined contain
    // only aria-* properties supported by that role.
    'jsx-a11y/role-supports-aria-props': 'warn',

    // only allow <th> to have the "scope" attr
    'jsx-a11y/scope': 'warn',

    // Enforce tabIndex value is not greater than zero.
    'jsx-a11y/tabindex-no-positive': 'warn'
  }
};
