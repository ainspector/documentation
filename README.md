# Notes on site settings and structure

## <code>templates/settings.html</code>

Use this file to update variables shared across the site, such as:

1. version numbers for AInspector, Bootstrap, jQuery, et al.
1. canonical list of User Guides and their URLs for sidebar and dropdown menu

## <code>templates/base.html</code>

The top-level Nunjucks template used for all HTML output.

## <code>templates/macros.html</code>

Currently contains macros for formatting keyboard shortcuts.

## <code>sass/main.scss</code>

The top-level Sass file where shared variables are set. It includes Sass partials <code>_base</code> and <code>_layout</code>.

The output of <code>main.scss</code> forms the contents of <code>build/css/main.css</code>.

## Adding Keyboard Shortcuts in the documentation

There are two macros in <code>macros.html</code>: <code>shortcut</code> and <code>winMacShortcut</code>.

The conventions and expected inputs for calling these macros:

1. Use lowercase for all values, including key names (e.g. 'ctrl' and 'cmd').
2. When the string 'cmd' is used, both macros automatically add <code>aria-label="command"</code>.
3. The 'kbd' CSS class is defined in <code>sass/_base.html</code>.

## To Do

1. Learn more about CSS media queries to determine whether width settings are optimal.
1. Replace Bootstrap with a simpler CSS framework, possible Pure.css.
1. Try using <code>postcss</code> with <code>autoprefixer</code> and <code>cssnext</code> in place of Sass.
