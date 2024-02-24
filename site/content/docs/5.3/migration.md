---
layout: docs
title: v5으로 마이그레이션
title_en: Migrating to v5
description: Bootstrap의 소스 파일, 문서 및 컴포넌트의 변경 내용을 확인 리뷰함으로써 v4에서 v5로의 변경을 지원합니다.
group: migration
aliases: "/migration/"
toc: true
untranslated: true
---

## v5.3.0

If you're migrating from our previous alpha releases of v5.3.0, please review their changes in addition to this section.

### Helpers

- [Colored links]({{< docsref "/helpers/colored-links" >}}) once again have `!important` so they work better with our newly added link utilities.

### Utilities

- Added new `.d-inline-grid` [display utility]({{< docsref "/utilities/display" >}}).

## v5.3.0-alpha2

If you're migrating from our previous alpha release of v5.3.0, please review the changes listed below.

### CSS variables

- Removed several duplicate and unused root CSS variables.

### Color modes

- Dark mode colors are now derived from our theme colors (e.g., `$primary`) in Sass, rather than color specific tints or shades (e.g., `$blue-300`). This allows for a more automated dark mode when customizing the default theme colors.

- Added Sass maps for generating theme colors for dark mode text, subtle background, and subtle border.

- [Snippet examples]({{< docsref "/examples#snippets" >}}) are now ready for dark mode with updated markup and reduced custom styles.

- Added `color-scheme: dark` to dark mode CSS to change OS level controls like scrollbars

- Form validation `border-color` and text `color` states now respond to dark mode, thanks to new Sass and CSS variables.

- Dropped recently added form control background CSS variables and reassigned the Sass variables to use CSS variables instead. This simplifies the styling across color modes and avoids an issue where form controls in dark mode wouldn't update properly.

- Our `box-shadow`s will once again always stay dark instead of inverting to white when in dark mode.

- Improved HTML and JavaScript for our color mode toggle script. The selector for changing the active SVG has been improved, and the markup made more accessible with ARIA attributes.

- Improved docs code syntax colors and more across light and dark modes.

### Typography

- We no longer set a color for `$headings-color-dark` or `--bs-heading-color` for dark mode. To avoid several problems of headings within components appearing the wrong color, we've set the Sass variable to `null` and added a `null` check like we use on the default light mode.

### Components

- Cards now have a `color` set on them to improve rendering across color modes.

- Added new `.nav-underline` variant for our navigation with a simpler bottom border under the active nav link. [See the docs for an example.]({{< docsref "/components/navs-tabs#underline" >}})

- Navs now have new `:focus-visible` styles that better match our custom button focus styles.

### Helpers

- Added new `.icon-link` helper to quickly place and align Bootstrap Icons alongside a textual link. Icon links support our new link utilities, too.

- Added new focus ring helper for removing the default `outline` and setting a custom `box-shadow` focus ring.

### Utilities

- Renamed Sass and CSS variables `${color}-text` to `${color}-text-emphasis` to match their associated utilities.

- Added new `.link-body-emphasis` helper alongside our [colored links]({{< docsref "/helpers/colored-links" >}}). This creates a colored link using our color mode responsive emphasis color.

- Added new link utilities for link color opacity, underline offset, underline color, and underline opacity. [Explore the new links utilities.]({{< docsref "/utilities/link" >}})

- CSS variable based `border-width` utilities have been reverted to set their property directly (as was done prior to v5.2.0). This avoids inheritance issues across nested elements, including tables.

- Added new `.border-black` utility to match our `.text-black` and `.bg-black` utilities.

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> Deprecated the `.text-muted` utility and `$text-muted` Sass variable. It's been replaced by `.text-body-secondary` and `$body-secondary-color`.

### Docs

- Examples are now displayed with the appropriate light or dark color mode as dictated by the setting in our docs. Each example has an individual color mode picker.

- Improved included JavaScript for live Toast demo.

- Added `twbs/examples` repo contents to the top of the Examples page.

### Tooling

- Added SCSS testing via True to help test our utilities API and other customizations.

- Replaced instances of our bootstrap-npm-starter project with the newer and more complete [twbs/examples repo](https://github.com/twbs/examples).

<hr class="mb-4">

For a complete list of changes, [see the v5.3.0-alpha2 project on GitHub](https://github.com/orgs/twbs/projects/13).

## v5.3.0-alpha1

<hr class="mb-4">

### Color modes!

Learn more by reading the new [color modes documentation]({{< docsref "/customize/color-modes" >}}).

- **Global support for light (default) and dark color modes.** Set color mode globally on the `:root` element, on groups of elements and components with a wrapper class, or directly on components, with `data-bs-theme="light|dark"`. Also included is a new `color-mode()` mixin that can output a ruleset with the `data-bs-theme` selector or a media query, depending on your preference.

  <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> Color modes replace dark variants for components, so  `.btn-close-white`, `.carousel-dark`, `.dropdown-menu-dark`, and `.navbar-dark` are deprecated.

- **New extended color system.** We've added new theme colors (but not in `$theme-colors`) for a more nuanced, system-wide color palette with new secondary, tertiary, and emphasis colors for `color` and `background-color`. These new colors are available as Sass variables, CSS variables, and utilities.

- We've also expanded our theme color Sass variables, CSS variables, and utilities to include text emphasis, subtle background colors, and subtle border colors. These are available as Sass variables, CSS variables, and utilities.

- Adds new `_variables-dark.scss` stylesheet to house dark-mode specific overrides. This stylesheet should be imported immediately after the existing `_variables.scss` file in your import stack.

  ```diff
  diff --git a/scss/bootstrap.scss b/scss/bootstrap.scss
  index 8f8296def..449d70487 100644
  --- a/scss/bootstrap.scss
  +++ b/scss/bootstrap.scss
  @@ -6,6 +6,7 @@
   // Configuration
   @import "functions";
   @import "variables";
  +@import "variables-dark";
   @import "maps";
   @import "mixins";
   @import "utilities";
  ```

### CSS variables

- Restores CSS variables for breakpoints, though we don't use them in our media queries as they're not supported. However, these can be useful in JS-specific contexts.

- Per the color modes update, we've added new utilities for new Sass CSS variables `secondary` and `tertiary` text and background colors, plus `{color}-bg-subtle`, `{color}-border-subtle`, and `{color}-text-emphasis` for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps) with the express goal of making it easier to customize across multiple colors modes like light and dark.

- Adds additional variables for alerts, `.btn-close`, and `.offcanvas`.

- The `--bs-heading-color` variable is back with an update and dark mode support. First, we now check for a `null` value on the associated Sass variable, `$headings-color`, before trying to output the CSS variable, so by default it's not present in our compiled CSS. Second, we use the CSS variable with a fallback value, `inherit`, allowing the original behavior to persist, but also allowing for overrides.

- Converts links to use CSS variables for styling `color`, but not `text-decoration`. Colors are now set with `--bs-link-color-rgb` and `--bs-link-opacity` as `rgba()` color, allowing you to customize the translucency with ease. The `a:hover` pseudo-class now overrides `--bs-link-color-rgb` instead of explicitly setting the `color` property.

- `--bs-border-width` is now being used in more components for greater control over default global styling.

- Adds new root CSS variables for our `box-shadow`s, including `--bs-box-shadow`, `--bs-box-shadow-sm`, `--bs-box-shadow-lg`, and `--bs-box-shadow-inset`.

### Components

#### Alert

- Alert variants are now styled via CSS variables.

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `alert-variant()` mixin is now deprecated. We now [use a Sass loop]({{< docsref "/components/alerts#sass-loops" >}}) directly to modify the component's default CSS variables for each variant.

#### List group

- List group item variants are now styled via CSS variables.

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `list-group-item-variant()` mixin is now deprecated. We now [use a Sass loop]({{< docsref "/components/list-group#sass-loops" >}}) directly to modify the component's default CSS variables for each variant.

#### Dropdowns

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `.dropdown-menu-dark` class has been deprecated and replaced with `data-bs-theme="dark"` on the dropdown or any parent element. [See the docs for an example.]({{< docsref "/components/dropdowns#dark-dropdowns" >}})

#### Close button

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `.btn-close-white` class has been deprecated and replaced with `data-bs-theme="dark"` on the close button or any parent element. [See the docs for an example.]({{< docsref "/components/close-button#dark-variant" >}})

#### Navbar

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `.navbar-dark` class has been deprecated and replaced with `data-bs-theme="dark"` on the navbar or any parent element. [See the docs for updated examples.]({{< docsref "/components/navbar#color-schemes" >}})

### Progress bars

The markup for [progress bars]({{< docsref "/components/progress" >}}) has been updated in v5.3.0. Due to the placement of `role` and various `aria-` attributes on the inner `.progress-bar` element, **some screen readers were not announcing zero value progress bars**. Now, `role="progressbar"` and the relevant `aria-*` attributes are on the outer `.progress` element, leaving the `.progress-bar` purely for the visual presentation of the bar and optional label.

While we recommend adopting the new markup for improved compatibility with all screen readers, note that the legacy progress bar structure will continue to work as before.

```html
<!-- Previous markup -->
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- New markup -->
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
```

We've also introduced a new `.progress-stacked` class to more logically wrap [multiple progress bars]({{< docsref "/components/progress#multiple-bars" >}}) into a single stacked progress bar.

```html
<!-- Previous markup -->
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Segment one" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- New markup -->
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
```

### Forms

- `.form-control` is now styled with CSS variables to support color modes. This includes the addition of two new root CSS variables for the default and disabled form control backgrounds.

- `.form-check` and `.form-switch` components are now built with CSS variables for setting the `background-image`. The usage here differs from other components in that the various focus, active, etc states for each component aren't set on the base class. Instead, the states override one variable (e.g., `--bs-form-switch-bg`).

- Floating form labels now have a `background-color` to fix support for `<textarea>` elements. Additional changes have been made to also support disabled states and more.

- Fixed display of date and time inputs in WebKit based browsers.

### Utilities

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> `.text-muted` will be replaced by `.text-body-secondary` in v6.

  With the addition of the expanded theme colors and variables, the `.text-muted` variables and utility have been deprecated with v5.3.0. Its default value has also been reassigned to the new `--bs-secondary-color` CSS variable to better support color modes. It will be removed in v6.0.0.

- Adds new `.overflow-x`, `.overflow-y`, and several `.object-fit-*` utilities. _The object-fit property is used to specify how an `<img>` or `<video>` should be resized to fit its container, giving us a responsive alternative to using `background-image` for a resizable fill/fit image._

- Adds new `.fw-medium` utility.

- Added new [`.z-*` utilities]({{< docsref "/utilities/z-index" >}}) for `z-index`.

- [Box shadow utilities]({{< docsref "/utilities/shadows" >}}) (and Sass variables) have been updated for dark mode. They now use `--bs-body-color-rgb` to generate the `rgba()` color values, allowing them to easily adapt to color modes based on the specified foreground color.

For a complete list of changes, [see the v5.3.0 project on GitHub](https://github.com/twbs/bootstrap/projects/).

## v5.2.0

<hr class="mb-4">

### Refreshed design

Bootstrap v5.2.0 features a subtle design update for a handful of components and properties across the project, **most notably through refined `border-radius` values on buttons and form controls**. Our documentation also has been updated with a new homepage, simpler docs layout that no longer collapses sections of the sidebar, and more prominent examples of [Bootstrap Icons](https://icons.getbootstrap.com).

### More CSS variables

**We've updated all our components to use CSS variables.** While Sass still underpins everything, each component has been updated to include CSS variables on the component base classes (e.g., `.btn`), allowing for more real-time customization of Bootstrap. In subsequent releases, we'll continue to expand our use of CSS variables into our layout, forms, helpers, and utilities. Read more about CSS variables in each component on their respective documentation pages.

Our CSS variable usage will be somewhat incomplete until Bootstrap 6. While we'd love to fully implement these across the board, they do run the risk of causing breaking changes. For example, setting `$alert-border-width: var(--bs-border-width)` in our source code breaks potential Sass in your own code if you were doing `$alert-border-width * 2` for some reason.

As such, wherever possible, we will continue to push towards more CSS variables, but please recognize our implementation may be slightly limited in v5.

### New `_maps.scss`

**Bootstrap v5.2.0 introduced a new Sass file with `_maps.scss`.** It pulls out several Sass maps from `_variables.scss` to fix an issue where updates to an original map were not applied to secondary maps that extend them. For example, updates to `$theme-colors` were not being applied to other theme maps that relied on `$theme-colors`, breaking key customization workflows. In short, Sass has a limitation where once a default variable or map has been _used_, it cannot be updated. _There's a similar shortcoming with CSS variables when they're used to compose other CSS variables._

This is why variable customizations in Bootstrap have to come after `@import "functions"`, but before `@import "variables"` and the rest of our import stack. The same applies to Sass maps—you must override the defaults before they get used. The following maps have been moved to the new `_maps.scss`:

- `$theme-colors-rgb`
- `$utilities-colors`
- `$utilities-text`
- `$utilities-text-colors`
- `$utilities-bg`
- `$utilities-bg-colors`
- `$negative-spacers`
- `$gutters`

Your custom Bootstrap CSS builds should now look something like this with a separate maps import.

```diff
  // Functions come first
  @import "functions";

  // Optional variable overrides here
+ $custom-color: #df711b;
+ $custom-theme-colors: (
+   "custom": $custom-color
+ );

  // Variables come next
  @import "variables";

+ // Optional Sass map overrides here
+ $theme-colors: map-merge($theme-colors, $custom-theme-colors);
+
+ // Followed by our default maps
+ @import "maps";
+
  // Rest of our imports
  @import "mixins";
  @import "utilities";
  @import "root";
  @import "reboot";
  // etc
```

### New utilities

- Expanded [`font-weight` utilities]({{< docsref "/utilities/text#font-weight-and-italics" >}}) to include `.fw-semibold` for semibold fonts.
- Expanded [`border-radius` utilities]({{< docsref "/utilities/borders#sizes" >}}) to include two new sizes, `.rounded-4` and `.rounded-5`, for more options.

### Additional changes

- **Introduced new `$enable-container-classes` option. —** Now when opting into the experimental CSS Grid layout, `.container-*` classes will still be compiled, unless this option is set to `false`. Containers also now keep their gutter values.

- **Offcanvas component now has [responsive variations]({{< docsref "/components/offcanvas#responsive" >}}).** The original `.offcanvas` class remains unchanged—it hides content across all viewports. To make it responsive, change that `.offcanvas` class to any `.offcanvas-{sm|md|lg|xl|xxl}` class.

- **Thicker table dividers are now opt-in. —** We've removed the thicker and more difficult to override border between table groups and moved it to an optional class you can apply, `.table-group-divider`. [See the table docs for an example.]({{< docsref "/content/tables#table-group-dividers" >}})

- **[Scrollspy has been rewritten](https://github.com/twbs/bootstrap/pull/33421) to use the Intersection Observer API**, which means you no longer need relative parent wrappers, deprecates `offset` config, and more. Look for your Scrollspy implementations to be more accurate and consistent in their nav highlighting.

- **Popovers and tooltips now use CSS variables.** Some CSS variables have been updated from their Sass counterparts to reduce the number of variables. As a result, three variables have been deprecated in this release: `$popover-arrow-color`, `$popover-arrow-outer-color`, and `$tooltip-arrow-color`.

- **Added new `.text-bg-{color}` helpers.** Instead of setting individual `.text-*` and `.bg-*` utilities, you can now use [the `.text-bg-*` helpers]({{< docsref "helpers/color-background" >}}) to set a `background-color` with contrasting foreground `color`.

- Added `.form-check-reverse` modifier to flip the order of labels and associated checkboxes/radios.

- Added [striped columns]({{< docsref "/content/tables#striped-columns" >}}) support to tables via the new `.table-striped-columns` class.

For a complete list of changes, [see the v5.2.0 project on GitHub](https://github.com/twbs/bootstrap/projects/32).

## v5.1.0

<hr class="mb-4">

- **Added experimental support for [CSS Grid layout]({{< docsref "/layout/css-grid" >}}). —** This is a work in progress, and is not yet ready for production use, but you can opt into the new feature via Sass. To enable it, disable the default grid, by setting `$enable-grid-classes: false` and enable the CSS Grid by setting `$enable-cssgrid: true`.

- **Updated navbars to support offcanvas. —** Add [offcanvas drawers in any navbar]({{< docsref "/components/navbar#offcanvas" >}}) with the responsive `.navbar-expand-*` classes and some offcanvas markup.

- **Added new [placeholder component]({{< docsref "/components/placeholders/" >}}). —** Our newest component, a way to provide temporary blocks in lieu of real content to help indicate that something is still loading in your site or app.

- **Collapse plugin now supports [horizontal collapsing]({{< docsref "/components/collapse#horizontal" >}}). —** Add `.collapse-horizontal` to your `.collapse` to collapse the `width` instead of the `height`. Avoid browser repainting by setting a `min-height` or `height`.

- **Added new stack and vertical rule helpers. —** Quickly apply multiple flexbox properties to quickly create custom layouts with [stacks]({{< docsref "/helpers/stacks/" >}}). Choose from horizontal (`.hstack`) and vertical (`.vstack`) stacks. Add vertical dividers similar to `<hr>` elements with the [new `.vr` helpers]({{< docsref "/helpers/vertical-rule/" >}}).

- **Added new global `:root` CSS variables. —** Added several new CSS variables to the `:root` level for controlling `<body>` styles. More are in the works, including across our utilities and components, but for now read up [CSS variables in the Customize section]({{< docsref "/customize/css-variables/" >}}).

- **Overhauled color and background utilities to use CSS variables, and added new [text opacity]({{< docsref "/utilities/text#opacity" >}}) and [background opacity]({{< docsref "/utilities/background#opacity" >}}) utilities. —** `.text-*` and `.bg-*` utilities are now built with CSS variables and `rgba()` color values, allowing you to easily customize any utility with new opacity utilities.

- **Added new snippet examples based to show how to customize our components. —** Pull ready to use customized components and other common design patterns with our new [Snippets examples]({{< docsref "/examples#snippets" >}}). Includes [footers]({{< docsref "/examples/footers/" >}}), [dropdowns]({{< docsref "/examples/dropdowns/" >}}), [list groups]({{< docsref "/examples/list-groups/" >}}), and [modals]({{< docsref "/examples/modals/" >}}).

- **Removed unused positioning styles from popovers and tooltips** as these are handled solely by Popper. `$tooltip-margin` has been deprecated and set to `null` in the process.

Want more information? [Read the v5.1.0 blog post.](https://blog.getbootstrap.com/2021/08/04/bootstrap-5-1-0/)

## v5.0.0

<hr class="mb-4">

{{< callout info >}}
**Hey there!** Changes to our first major release of Bootstrap 5, v5.0.0, are documented below. They don't reflect the additional changes shown above.
{{< /callout >}}

### 의존성

- 더 이상 jQuery를 사용하지 않음.
- Popper v1.x에서 Popper v2.x로 업그레이드.
- Libsass가 권장되지 않아 Dart Sass로 Sass 컴파일러 변경.
- 문서 작성을 위해 Jekyll에서 Hugo로 이동.

### 브라우저 지원

- Internet Explorer 10 및 11 지원 종료
- Microsoft Edge 16 미만 (Legacy Edge) 지원 종료
- Firefox 60 미만 지원 종료
- Safari 12 미만 지원 종료
- iOS Safari 12 미만 지원 종료
- Chrome 60 미만 지원 종료

<hr class="my-5">

### 문서 변경사항

- 첫페이지, 문서 레이아웃과 하단의 디자인 변경.
- [new Parcel guide]({{< docsref "/customize/overview" >}}) 추가.
- [new Customize section]({{< docsref "/customize/overview" >}}) 추가하고, [v4's Theming page](https://getbootstrap.com/docs/4.6/getting-started/theming/) 대체하여, Sass, 글로벌 설정 옵션, 색상 조합, CSS 변수 등의 세부사항 추가.
- 모든 폼 문서를 [new Forms section]({{< docsref "/forms/overview" >}})으로 재편성하여 콘텐츠를 좀 더 집중적인 페이지로 재편성.
- 마찬가지로, 그리드 콘텐츠를 더욱 명확하게 정리하여 [the Layout section]({{< docsref "/layout/breakpoints" >}}) 업데이트.
- "Navs" 컴포넌트 페이지가 "Navs & Tabs"로 변경.
- "Checks" 페이지가 "Checks & radios"로 변경.
- 사이트와 문서 버전의 이동을 손쉽게 하기 위해 navbar의 디자인을 변경하고 새로운 subnav를 추가.
- 검색에 새로운 키보드 단축키를 추가: <kbd>Ctrl + /</kbd>.

### Sass

- 중복된 값을 쉽게 삭제할 수 있도록 기본 Sass 맵의 병합을 폐지하였습니다. 앞으로는 `$theme-colors`과 같은 모든 값을 Sass 맵에서 정의해야 합니다. 자세한 내용은 [Sass 맵]({{< docsref "/customize/sass#maps-and-loops" >}})를 참조해 주세요.

- <span class="badge text-bg-danger">Breaking</span> YIQ 색공간과 관련 없어졌기 때문에 `color-yiq()` 함수와 그에 관련된 변수들을 `color-contrast()`로 변경하였습니다. [#30168을 확인해주세요.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold`는 `$min-contrast-ratio`로 변경.
  - `$yiq-text-dark`와 `$yiq-text-light`는 각각 `$color-contrast-dark`와 `$color-contrast-light`로 변경.

- <span class="badge text-bg-danger">Breaking</span> Media query mixins parameters have changed for a more logical approach.
  - `media-breakpoint-down()` uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-down(lg)` instead of `media-breakpoint-down(md)` targets viewports smaller than `lg`).
  - Similarly, the second parameter in `media-breakpoint-between()` also uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-between(sm, lg)` instead of `media-breakpoint-between(sm, md)` targets viewports between `sm` and `lg`).

- <span class="badge text-bg-danger">Breaking</span> 인쇄 클래스와 `$enable-print-styles` 변수를 삭제하였습니다. 인쇄 표시 클래스는 아직 남아 있습니다. [#28339](https://github.com/twbs/bootstrap/pull/28339).

- <span class="badge text-bg-danger">Breaking</span> `color()`, `theme-color()`, 그리고 `gray()`의 함수를 폐지하고 변수를 사용하도록 하였습니다.[#29083](https://github.com/twbs/bootstrap/pull/29083).

- <span class="badge text-bg-danger">Breaking</span> `theme-color-level()` 함수를 `color-level()`로 변경하고, `$theme-color`의 색상뿐만 아니라 임의의 색을 받을수 있게 변경하였습니다. [#29083](https://github.com/twbs/bootstrap/pull/29083) **주의:** `v5.0.0-alpha3` 이후 `color-level()`은 삭제되었습니다.

- <span class="badge text-bg-danger">Breaking</span> 간결하게 하기 위해서 `$enable-prefers-reduced-motion-media-query`와 `$enable-pointer-cursor-for-buttons`의 이름을 `$enable-reduced-motion`과 `$enable-button-pointers`로 변경하였습니다.

- <span class="badge text-bg-danger">Breaking</span> 믹스인 `bg-gradient-variant()`를 삭제 하였습니다. 요소에 그라데이션을 추가하기 위해 사용한 `.bg-gradient-*` 클래스 대신에 `.bg-gradient` 클래스를 사용해 주세요.

- <span class="badge text-bg-danger">Breaking</span> **더 이상 사용되지 않는 믹스인 삭제:**
  - `hover`, `hover-focus`, `plain-hover-focus`, 그리고 `hover-focus-active`
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (관련 유틸리티 클래스인`.text-hide`도 함께 삭제)
  - `visibility()`
  - `form-control-focus()`

- <span class="badge text-bg-danger">Breaking</span> Sass 자신의 컬러 스케일링 기능과 충돌을 피해기 위해 `scale-color()` 함수명을 `shift-color()`로 변경하였습니다.

- `box-shadow` 믹스인에서 `null` 값을 허용하고 많은 인수에서 `none`을 삭제 하였습니다. [#30394](https://github.com/twbs/bootstrap/pull/30394).

- `border-radius()` 믹스인에 기본 값이 설정 되었습니다.

### 색상 시스템

- `color-level()`과 `$theme-color-interval`로 동작하던 컬러 시스템이 삭제되고 새로운 컬러 시스템이 채택 되었습니다. 기본적으로 모든 코드에 사용된 `lighten()`과 `darken()` 함수는 `tint-color()`와 `shade-color()`로 대체 되었습니다. 이 함수는 색의 명도를 일정량 변경하는 대신, 그 색에 흰색이나 검은색을 혼합 합니다. `shift-color()`는 양수 혹은 음수의 weight 매개 변수에 따라 색상을 바꾸거나 음영을 주기도 합니다. [#30622](https://github.com/twbs/bootstrap/pull/30622).

- 새로운 Sass 변수로서, 모든 색상에 새로운 색조와 음영을 추가해 각 기본 색상에 9개의 별도 색상을 제공합니다.

- 색상 대비(color contrast)를 개선하였습니다. 색상 대비 비율을 3:1에서 4.5:1로 변경하고 WCAG 2.1 AA contrast를 확보하기 위해 blue, green, cyan, pink 색상을 수정하였습니다. 그리고 색상 대비에서 사용하는 어두운 색($color-contrast-dark)을 `$gray-900`에서 `$black`으로 변경하였습니다.

- 색상을 적절하게 혼합한 새로운 사용자 정의 `tint-color()`와 `shade-color()` 함수를 사용해 컬러 시스템을 지원합니다.

### 그리드 업데이트

- **새로운 중단점!** `1400px` 이상의 경우, 새로운 `xxl` 중단점를 추가. 다른 중단점는 변경 없이 그대로.

- **개선된 거터.** 거터는 rem 단위로 설정되어, v4 보다 좁아졌습니다 (`1.5rem`, 혹은 약 `24px`, `30px`에서 감소). 이로 그리드 시스템의 거터가 여백 유틸리티와 일치 되었습니다.
  - 수평/수직 거터, 수평 거터, 그리고 수직 거터를 제어하는 새로운 [gutter class]({{< docsref "/layout/gutters" >}})(`.g-*`, `.gx-*`, 그리고 `.gy-*`)가 추가 되었습니다.
  - <span class="badge text-bg-danger">Breaking</span> 새로운 거터 클래스에 맞춰 기존의 `.no-gutters` 클래스 이름이 `.g-0`으로 변경 되었습니다.

- 컬럼은 더 이상 `position: relative`가 적용되지 않기 때문에 필요에 따라 해당 동작을 위해 요소에 `.position-relative` 클래스를 추가해 사용할 필요가 있습니다.

- <span class="badge text-bg-danger">Breaking</span> 자주 사용되지 않는 몇몇 `.order-*` 클래스를 삭제하였습니다. 현재는 `.order-1` 부터 `.order-5`까지의 클래스만 제공하고 있습니다.

- <span class="badge text-bg-danger">Breaking</span> 유틸리티로 쉽게 복제 할 수 있는 `.media` 클래스를 삭제 하였습니다. [#28265](https://github.com/twbs/bootstrap/pull/28265)와 [flex utilities page for an example]({{< docsref "/utilities/flex#media-object" >}})을 참조해 주세요.

- <span class="badge text-bg-danger">Breaking</span> 이제 `bootstrap-grid.css`에서는 global box-sizing을 리셋하는 대신, `box-sizing: border-box`만 적용합니다. 그렇게 함으로써 그리드 스타일을 더 많은 곳에서 간섭 없이 사용할 수 있습니다.

- `$enable-grid-classes`에서는 컨테이너 클래스의 생성을 비활성화 시키지 않습니다. [#29146.](https://github.com/twbs/bootstrap/pull/29146)

- 크기를 지정하지 않아도 기본적으로 균등한 열이 되도록 `make-col` 믹스인을 업데이드 하였습니다.

### 콘텐츠, Reboot 등

- **[RFS]({{< docsref "/getting-started/rfs" >}})가 기본으로 활성화 되었습니다.** Headings using the `font-size()` 믹스인을 사용한 제목은 뷰포트에 맞추어 자동적으로 `font-size`를 조정합니다. _이 기능은 이전에 v4에서 opt-in 이었습니다._

- <span class="badge text-bg-danger">Breaking</span> `$display-*` 변수를 바꾸기 위해 디스플레이 타이포그래피를 정비하고 `$display-font-sizes` Sass 맵을 사용합니다. 또한 `$display-*-weight` 변수를 삭제하고 단일 `$display-font-weight`로 변경하여 글꼴의 크기를 조정했습니다.

- 새로운 `.display-*` 크기로, `.display-5`와 `.display-6`를 추가했습니다.

- 특정 컴포넌트의 일부가 아닌 한 (호버 뿐만 아니라)**기본 링크에 밑줄 추가**

- 스타일을 새롭게 고치기 위해 **테이블 디자인이 변경**되고 CSS 변수를 사용하여 스타일을 보다 효과적으로 제어 할 수 있도록 재구성되었습니다.

- <span class="badge text-bg-danger">Breaking</span> 중첩된 테이블이 스타일을 상속받지 않게 되었습니다.

- <span class="badge text-bg-danger">Breaking</span> `.thead-light`과 `.thead-dark`은 삭제되고, 모든 테이블 요소(`thead`, `tbody`, `tfoot`, `tr`, `th`, `td`)에 사용할 수 있는 `.table-*` 변형 클래스로 변경되었습니다.

- <span class="badge text-bg-danger">Breaking</span> `table-row-variant()` 믹스인은 `table-variant()`으로 이름이 변경되며 2개의 매개 변수 `$color` (colon name)와 `$value` (color code)만 받습니다. 보더 컬러와 엑센트 컬러는 테이블 인자 변수에 따라 자동으로 계산됩니다.

- 테이블 셀의 패딩 변수를 `-y`와 `-x`로 분할 했습니다.

- <span class="badge text-bg-danger">Breaking</span> `.pre-scrollable` 클래스 삭제. [#29135](https://github.com/twbs/bootstrap/pull/29135)

- <span class="badge text-bg-danger">Breaking</span> `.text-*` 유틸리티는 링크에 호버와 포커스 상태를 추가하지 않습니다. 대신 `.link-*` 도우미 클래스를 사용할 수 있습니다.[#29267](https://github.com/twbs/bootstrap/pull/29267)

- <span class="badge text-bg-danger">Breaking</span> `.text-justify` 클래스 삭제. [#29793](https://github.com/twbs/bootstrap/pull/29793)

- <span class="badge text-bg-danger">Breaking</span> ~~`<hr>` elements now use `height` instead of `border` to better support the `size` attribute. This also enables use of padding utilities to create thicker dividers (e.g., `<hr class="py-1">`).~~

- `<ul>`과 `<ol>` 요소의 수평 방항에 설정된 `padding-left`를 브라우저의 기본 `40px`에서 `2rem`으로 변경.

- `prefers-reduced-motion` 미디어 쿼리를 통해 움직임을 억제하는 사용자를 제외하고 글로벌하게 `scroll-behavior: smooth`를 적용하는 `$enable-smooth-scroll`를 추가. [#31877](https://github.com/twbs/bootstrap/pull/31877)

### RTL

- 수평 방항으로 특화된 변수, 유틸리티 그리고 믹스인의 이름이 플레스 박스의 레이아웃에서 볼수 있는 - 예를 들어, `left` 와 `right` 대신에 `start`와 `end`과 같이 - 논리적인 속성으로 변경되었습니다.

### 폼

- **새로운 플로팅 폼 추가!** 플로팅 라벨의 예시를 완전히 지원되는 폼 컴포넌트로 승격시켰습니다. [새로운 플로팅 라벨 페이지 확인하러 가기]({{< docsref "/forms/floating-labels" >}})

- <span class="badge text-bg-danger">Breaking</span> **네비티브와 사용자 정의 폼 요소의 통합.** 체크박스, 라디오 버튼, 셀렉트등 v4에서 네이티브와 사용자 정의 클래스를 가지고 있던 입력 요소들이 통합되었습니다. 이를 통해 모든 폼 요소가 완전히 커스텀화 되었고, 그 대부분이 사용자 정의 HTML을 필요로 하지 않게 되었습니다.
  - `.custom-control.custom-checkbox`는 `.form-check`로 변경.
  - `.custom-control.custom-custom-radio`는 `.form-check`로 변경.
  - `.custom-control.custom-switch`는 `.form-check.form-switch`로 변경.
  - `.custom-select`는 `.form-select`로 변경.
  - `.custom-file`과 `.form-file`은 `.form-control` 위에 사용자 정의 스타일로 변경.
  - `.custom-range`는 `.form-range`로 변경.
  - 네이티브 `.form-control-file`과 `.form-control-range`는 삭제.

- <span class="badge text-bg-danger">Breaking</span> `.input-group-append`와 `.input-group-prepend`는 삭제. 입력 그룹의 직접 자식 요소로서 버튼과 `.input-group-text`를 추가할 수 있게 되었습니다.

- 오랫동안 지속 되었던 [유효성 검사를 사용할때 입력 그룹에서 반원 경계선이 누락되는 버그](https://github.com/twbs/bootstrap/issues/25110)는 유효성 검사 폼에 포함된 입력 그룹에 `.has-validation` 클래스를 추가하는 것으로 겨우 수정 되었습니다.

- <span class="badge text-bg-danger">Breaking</span> **그리드 시스템을 위한 폼 고유의 레이아웃 클래스 삭제.** `.form-group`, `.form-row`, `.form-inline` 대신 그리드와 유틸리티를 사용해 주세요.

- <span class="badge text-bg-danger">Breaking</span> 폼 레벨에는 `.form-label`이 필요합니다.

- <span class="badge text-bg-danger">Breaking</span> `.form-text`는 삭제되어 `display` 되지 않으므로, HTML 요소를 변경하는 것으로 인라인 혹은 블록 도움말 텍스트를 자유롭게 만들 수 있습니다.

- Form controls no longer used fixed `height` when possible, instead deferring to `min-height` to improve customization and compatibility with other components.

- 유효성 검증 아이콘은 더 이상 `multiple<select>`에 적용되지 않습니다.

- 입력 그룹 스타일을 포함하여, `scss/forms/` 아래의 Sass 파일을 재배치 하였습니다.

<hr class="my-5">

### 컴포넌트

- 경고창, 브레드크럼, 카드, 드롭다운, 목록 그룹, 모달, 팝오버 그리고 툴팁의 `padding` 값을 `$spacer` 변수를 기반으로 통일. [#30564](https://github.com/twbs/bootstrap/pull/30564).

#### 아코디언

- [새로운 아코디언 컴포넌트]({{< docsref "/components/accordion" >}}) 추가.

#### 경고창

- 경고창에 [아이콘 사용한 예시]({{< docsref "/components/alerts#icons" >}})를 추가.

- 각 경고창에서 `currentColor`를 사용하게 되어 `<hr>` 사용자 정의 스타일은 삭제.

#### 배지

- <span class="badge text-bg-danger">Breaking</span> 배경 유틸리티의 모든 `.badge-*` 색상 클래스 삭제 (예를 들어, `.badge-primary` 대신 `.bg-primary` 사용).

- <span class="badge text-bg-danger">Breaking</span> `.badge-pill` 삭제 — 대신`.rounded-pill` 유틸리티를 사용해 주세요.

- <span class="badge text-bg-danger">Breaking</span> `<a>`와 `<button>` 요소에 호버와 포커스 스타일 삭제.

- 배지의 기본 패딩을`.25em`/`.5em`에서 `.35em`/`.65em`으로 변경.

#### 브레드크럼

- `padding`, `background-color`, 그리고 `border-radius`를 제거하여 브레드크럼의 기본 모양을 단순화했습니다.

- CSS를 다시 컴파일할 필요 없이 쉽게 재정의 할 수 있도록 새로운 CSS 사용자 정의 속성인 `--bs-breadcrumb-divider`를 추가했습니다.

#### 버튼

- <span class="badge text-bg-danger">Breaking</span> **체크 박스나 라디오 버튼에 있는 [토글 버튼]({{< docsref "/forms/checks-radios#toggle-buttons" >}})은, JavaScript가 필요없는 새로운 마크업을 채용하고 있습니다.** 더 이상 감싸는 요소는 필요하지 않고, 바로 `<input>`에 `.btn-check`를 추가해 `.btn` 클래스의 `<label>`과 조합 합니다. [#30650](https://github.com/twbs/bootstrap/pull/30650). _이 건에 관한 문서는 버튼 페이지에서 폼 섹션으로 이동하였습니다._

- <span class="badge text-bg-danger">Breaking</span> **유틸리티용 `.btn-block`를 삭제.** `.btn`에 `.btn-block`을 사용하는 대신에, 버튼을 `.d-grid`와 `.gap-*` 유틸리티로 감싸고 필요에 따라 여백을 위한 클래스를 사용합니다. 보다 강력한 컨트롤을 위해 반응형 클래스로 전환 합니다. [몇 가지 예시에 대해서는 문서를 참조해 주세요]({{< docsref "/components/buttons#block-buttons" >}})

- 추가 매개 변수를 지원하기 위해 `button-variant()`와 `button-outline-variant()` 믹스인을 업데이트 했습니다.

- 호버와 액티브한 상태의 대비가 증가하도록 버튼을 업데이트 했습니다.

- 비활성화 버튼은 `pointer-events: none;` 되었습니다.

#### 카드

- <span class="badge text-bg-danger">Breaking</span> 그리드에 유리하게 `.card-deck`을 삭제. card decks 재현을 위해 부모에 `.row-cols-*` 컨테이너를 추가하고 카드를 column 클래스로 감쌉니다. (반응형 정렬을 보다 효과적으로 제어할 수 있습니다).

- <span class="badge text-bg-danger">Breaking</span> 조적식(Masonry) 레이아웃에 유리하도록 `.card-columns` 삭제. [#28922](https://github.com/twbs/bootstrap/pull/28922).

- <span class="badge text-bg-danger">Breaking</span> `.card` 기반의 아코디언을 [새로운 아코디언 컴포넌트]({{< docsref "/components/accordion" >}})로 교체히였습니다.

#### 캐러셀

- 진한 텍스트, 컨트롤과 기호(밝은 배경에 최적) 표시를 위해 [`.carousel-dark`]({{< docsref "/components/carousel#dark-variant" >}})가 추가되었습니다.

- 캐러셀의 chevron 아이콘을 [Bootstrap Icons]({{< param "icons" >}})의 새로운 SVG로 대체하였습니다.

#### 닫기 버튼

- <span class="badge text-bg-danger">Breaking</span> `.close`에서 보다 일반적인 이름인 `.btn-close`으로 변경되었습니다.

- 닫기 버튼은 HTML 내의 `&times;` 대신에 `background-image`(embedded SVG)를 사용하게 되어 마크업 변경없이 손쉽게 재정의 할 수 있게 되었습니다.

- 어두운 배경에서 고대비 닫기 아이콘을 활성화하려고 `filter: invert(1)`를 사용한 새로운 `.btn-close-white` 변형 클래스가 추가되었습니다.

#### 콜랩스

- 아코디언에 스크롤 고정 장치가 삭제 되었습니다.

#### 드롭다운

- 어두운 드롭다운을 위해 새로운 `.dropdown-menu-dark` 변형 클래스와 관련된 변수를 추가하였습니다.

- 새로운 `$dropdown-padding-x` 변수를 추가하였습니다.

- 드롭다운의 구분자를 진하게 해 색상 대비를 개선하였습니다.

- <span class="badge text-bg-danger">Breaking</span> 드롭다운의 모든 이벤트는 드롭다운 토글 버튼으로 트리거 되어 이후 부모 요소에 버블링 됩니다.

- 드롭다운 메뉴에는 위치가 정적일때 또는 내비게이션 바에 있을 때에는 `data-bs-popper="static"` 속성이 설정됩니다. 이것은 JavaScript를 통해 추가되며 Popper의 배치에 간섭하지 않고 사용자 정의 위치 스타일을 사용하는데 도움이 됩니다.

- <span class="badge text-bg-danger">Breaking</span> 드롭다운 플러그인에 대한 `flip` 옵션을 삭제하고 Popper의 네이티브 설정으로 변경되었습니다. [flip](https://popper.js.org/docs/v2/modifiers/flip/) 제어자의 [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)의 빈 배열을 통해서 플립 동작을 비활성화 할 수 있습니다.

- 드롭다운 메뉴는 새로운 `autoClose` 옵션을 추가해 [자동 닫기 동작]({{< docsref "/components/dropdowns#auto-close-behavior" >}})을 처리하게 되었습니다. 이 옵션을 사용하면 드롭다운 메뉴의 안쪽 또는 바깥쪽에서 클릭을 받아 상호적인 메뉴를 만들 수 있습니다.

- 드롭다운이 이제 `<li>`에 싸여진 `.dropdown-item`를 지원합니다.

#### 점보트론

- <span class="badge text-bg-danger">Breaking</span> 유틸리티로 만들수 있기 때문에 점보트론 컴포넌트는 삭제되었습니다. [데모로 새로운 점보트론의 사용을 확인해 주세요.]({{< docsref "/examples/jumbotron" >}})

#### 목록 그룹

- 목록 그룹에 새로운 [`.list-group-numbered` 제어자 클래스]({{< docsref "/components/list-group#numbered" >}})가 추가되었습니다.

#### 내비게이션과 탭

- `.nav-link` 클래스에 `font-size`, `font-weight`, `color`, `:hover` `color`에 대한 새로운 변수 `null`을 추가했습니다.

#### 내비게이션 바

- <span class="badge text-bg-danger">Breaking</span> Navbars now require a container within (to drastically simplify spacing requirements and CSS required).
- <span class="badge text-bg-danger">Breaking</span> 내비게이션 바는 컨테이너가 필요하게 되어 간격 요건이나 필요한 CSS가 대폭 간소화되었습니다.

#### 오프캔버스

- 새로운 [오프캔버스 컴포넌트]({{< docsref "/components/offcanvas" >}})가 추가되었습니다.

#### 페이지네이션

- 페이지네이션 링크의 `margin-left`를 재정의할 수 있게 되어, 떨어져 있을 때 모든 모서리가 다이내믹하게 둥글어지게 되었습니다.

- 페이지네이션 링크에 `트랜지션`을 추가하였습니다.

#### 팝오버

- <span class="badge text-bg-danger">Breaking</span> 기본 팝오버 템플릿의 `.arrow` 이름을 `.popover-arrow`로 변경하였습니다.

- `whiteList` 옵션명을 `allowList`로 변경하였습니다.

#### 스피너

- 스피너의 애니메이션의 속도를 줄임으로써 `prefers-reduced-motion: reduce`를 존중하게 되었습니다. [#31882](https://github.com/twbs/bootstrap/pull/31882).

- 스피너의 수직 방향 배치를 개선하였습니다.

#### 토스트

- [위치 지정 유틸리티]({{< docsref "/utilities/position" >}})를 사용하여 `.toast-container` 안의 토스트를 [배치]({{< docsref "/components/toasts#placement" >}})시킬 수 있게 되었습니다.

- 기본 토스트의 지속 시간을 5초로 변경하였습니다.

- 토스트에서 `overflow: hidden`을 삭제하고 `calc()` 함수로 적절한 `border-radius`를 대체하였습니다.

#### 툴팁

- <span class="badge text-bg-danger">Breaking</span> 기본 툴팁 템플렛에서 `.arrow` 이름을 `.tooltip-arrow`으로 변경하였습니다.

- <span class="badge text-bg-danger">Breaking</span> `fallbackPlacements`의 기본 값이 `['top', 'right', 'bottom', 'left']`으로 popper 요소의 배치가 개선되었습니다.

- <span class="badge text-bg-danger">Breaking</span> `whiteList` 옵션명이 `allowList`로 변경되었습니다.

### 유틸리티

- <span class="badge text-bg-danger">Breaking</span> RTL 지원이 추가됨에 따라 방향적인 이름 대신 논리적인 속성명으로 여러 유틸리티의 이름이 변경되었습니다:
  - `.left-*`와 `.right-*`에서 `.start-*`와 `.end-*`로 변경.
  - `.float-left`와 `.float-right`에서 `.float-start`와 `.float-end`로 변경.
  - `.border-left`와 `.border-right`에서 `.border-start`와 `.border-end`로 변경.
  - `.rounded-left`와 `.rounded-right`에서 `.rounded-start`와 `.rounded-end`로 변경.
  -`.ml-*`과 `.mr-*`에서 `.ms-*`와 `.me-*`로 변경.
  - `.pl-*`과 `.pr-*`에서 `.ps-*`와 `.pe-*`로 변경.
  - `.text-left`와 `.text-right`에서 `.text-start`와 `.text-end`로 변경.

- <span class="badge text-bg-danger">Breaking</span> 기본적으로 음수 마진을 비활성화.

- `<body>`의 배경을 추가적인 요소로 빠르게 설정하기 위해 새롭게 `.bg-body` 클래스를 추가하였습니다.

- `top`, `right`, `bottom`, `left` 표시를 위해 새로운 [위치 유틸리티]({{< docsref "/utilities/position#arrange-elements" >}})를 추가하였습니다. 값으로는 `0`, `50%`, `100%`가 있습니다.

- 새로운 `.translate-middle-x`와 `.translate-middle-y` 유틸리티를 추가하였습니다. 이 유틸리티는 absolute/fixed에 배치된 요소들을 수평 혹은 수직 방향에서 중앙에 오게 합니다.

- 새로운 [`border-width` 유틸리티]({{< docsref "/utilities/borders#border-width" >}})를 추가하였습니다.

- <span class="badge text-bg-danger">Breaking</span> `.text-monospace` 클래스명이 `.font-monospace`으로 변경되었습니다.

- <span class="badge text-bg-danger">Breaking</span> 텍스트를 숨기기 위한 시대 착오적인 방법으로 더 이상 사용되서는 안되는 `.text-hide`를 삭제하였습니다.

- `font-size` 유틸리티를 위한 `.fs-*` 유틸리티를 추가하였습니다. (RFS 사용). 이들은 HTML의 기본 제목과 동일한 크기(1-6, large ~ small)를 사용하고 있으며 Sass 맵에서 변경할 수 있습니다.

- <span class="badge text-bg-danger">Breaking</span> `.font-weight-*` 유틸리티를 간결함과 일관성을 위해 `.fw-*`로 변경하였습니다.

- <span class="badge text-bg-danger">Breaking</span> Renamed `.font-italic` utility to `.fst-italic` for brevity and consistency with new `.fst-normal` utility.

- CSS 그리드와 flexbox 레이아웃용 표시를 위한 `.d-grid` 유틸리티와 새로운 `gap` 유틸리티(`.gap`)를 추가하였습니다.

- <span class="badge text-bg-danger">Breaking</span> `.rounded-sm`과 `rounded-lg`를 삭제하고, 스케일로서 새로운 클래스 `.rounded-0`부터 `.rounded-3`을 도입하였습니다. [#31687](https://github.com/twbs/bootstrap/pull/31687).

- 새로운 `line-height` 유틸리티를 추가하였습니다: `.lh-1`, `.lh-sm`, `.lh-base`와 `.lh-lg`. [자세히 보기]({{< docsref "/utilities/text#line-height" >}}).

- 다른 표시 유틸리티보다 더 비중을 두기 위해 CSS에 있는 `.d-none` 유틸리티를 이동 시켰습니다.

- 컨테이너 작업에도 사용할 수 있도록 `.visually-hidden-focusable` 도우미를 `:focus-within`로 확장하였습니다.

## 도우미

- <span class="badge text-bg-danger">Breaking</span> 더욱 편리한 CSS 변수 추가로 동작이 개선된 **Responsive embed가 [ratio 도우미]({{< docsref "/helpers/ratio" >}})** 로 이름이 변경되었습니다.
  - 비율을 나타내는 클래스가 `by`에서 `x`로 이름이 변경되었습니다. 예를 들어, `.ratio-16by9`는 `.ratio-16x9`가 되었습니다.
  - `.embed-responsive-item`과 요소 그룹 셀렉터를 삭제하여 더욱 단순한 `.ratio > *` 셀렉터로 변경되었습니다. 이로써 클래스는 불필요해 졌고, 비율 도우미는 어떠한 HTML 요소로도 사용 가능해졌습니다.
  - `$embed-responsive-aspect-ratios`의 Sass 맵은 `$aspect-ratios`로 이름이 변경되었고, 그 값은 클래스 이름과 퍼센티지를 `key: value` 값으로 포함하도록 간소화되었습니다.
  - Sass 맵의 각 값에 CSS 변수가 생성되어 포함되었습니다. `.ratio`의 `--bs-aspect-ratio` 변수를 수정하여 임의의 [사용자 정의 비율]({{< docsref "/helpers/ratio#custom-ratios" >}})을 만듭니다.

- <span class="badge text-bg-danger">Breaking</span> **"Screen reader" 클래스는 ["visually hidden"]({{< docsref "/helpers/visually-hidden" >}})이 되었습니다.**
  - `scss/helpers/_screenreaders.scss`에서 `scss/helpers/_visually-hidden.scss`로 Sass 파일이 변경되었습니다.
  - `.sr-only`와 `.sr-only-focusable`에서 `.visually-hidden`과 `.visually-hidden-focusable`로 변경되었습니다.
  - `sr-only()`와 `sr-only-focusable()`믹스인은 `visually-hidden()`과 `visually-hidden-focusable()`로 변경되었습니다.

- `bootstrap-utilities.css` 안에 도우미가 포함되어 있습니다. 도우미는 더 이상 사용자 정의 빌드로 따로 포함할 필요가 없습니다.

### JavaScript

- **jQuery에 대한 의존을 중단**하고 플러그인을 통상적인 JavaScript로 다시 썼습니다.

- <span class="badge text-bg-danger">Breaking</span> 모든 JavaScript 플러그인의 데이터 속성은 제삼자의 코드와 자체 코드에서 Bootstrap의 기능을 구별하는 데 도움이 되도록 이름을 붙이고 있습니다. 예를 들어 `data-toggle` 대신 `data-bs-toggle`을 사용합니다.

- **모든 클러그인은 첫번째 인수로서 CSS 셀렉터를 받아들일 수 있게 되었습니다.** 플러그인의 새로운 인스턴스를 작성하기 위해 DOM 요소 또는 임의의 CSS 셀렉터를 전달할 수 있습니다. :

  ```js
  const modal = new bootstrap.Modal('#myModal')
  const dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
  ```

- `popperConfig`는 Bootstrap 기본 Popper 설정을 인수로 하는 함수로 전달할 수 있으며, 이 기본 설정을 내 방식대로 병합할 수 있습니다. **드롭다운, 팝오버, 툴팁에 적용됩니다.**

- 팝오버 요소의 보다 나은 배치를 위해 `fallbackPlacements` 기본값이 `['top', 'right', 'bottom', 'left']`로 변경되었습니다. **드롭다운, 팝오버, 툴팁에 적용됩니다.**

- `_getInstance()` → `getInstance()`와 같이 공공의 정적 메소드에서 밑줄표시 삭제하였습니다.
