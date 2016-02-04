# Notes on site settings and structure

## <code>templates/settings.html</code>

Use this file to update variables shared across the site, such as:

1. version numbers for AInspector, Bootstrap, jQuery, et al.
1. canonical list of User Guides and their URLs for sidebar and dropdown menu

## <code>templates/base.html</code>

The top-level Nunjucks template used for all HTML output.

## <code>sass/main.scss</code>

The top-level Sass file where shared variables are set. It includes Sass partials <code>_base</code> and <code>_layout</code>.

The output of <code>main.scss</code> forms the contents of <code>build/css/main.css</code>.

## To Do

1. Update the CSS/Sass files by removing what is not used or needed.
1. Gain a better understanding of CSS media queries to determine whether settings are optimal.
1. Integrate the logo image, possibly in the header.
1. Use browser-sync.
