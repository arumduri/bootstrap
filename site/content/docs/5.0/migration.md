---
layout: docs
title: Migrating to v5
description: Bootstrap의 소스 파일, 문서 및 컴포넌트의 변경 내용을 확인 리뷰함으로써 v4에서 v5로의 변경을 지원합니다.
group: migration
aliases: "/migration/"
toc: true
---

## Dependencies

- jQuery 폐지.
- Popper v1.x에서 Popper v2.x로 업그레이드.
- Libsass가 권장되지 않아 Dart Sass로 Sass 컴파일러 변경.
- 문서 작성을 위해 Jekyll에서 Hugo로 이동.

## Browser support

- Internet Explorer 10와 11 폐지
- Microsoft Edge < 16 (Legacy Edge) 삭제
- 비대상 Firefox < 60
- 비대상 Safari < 12
- 비대상 iOS Safari < 12
- 비대상 Chrome < 60

<hr class="my-5">

## Documentation changes

- 첫페이지, 문서 레이아웃과 하단의 디자인 변경.
- [new Parcel guide](https://getbootstrap.com/docs/5.0/getting-started/parcel/) 추가.
- [new Customize section](https://getbootstrap.com/docs/5.0/customize/overview/) 추가하고, [v4's Theming page](https://getbootstrap.com/docs/4.6/getting-started/theming/) 대체하여, Sass, 글로벌 설정 옵션, 색상 조합, CSS 변수 등의 세부사항 추가.
- 모든 폼 문서를 [new Forms section](https://getbootstrap.com/docs/5.0/forms/overview/)으로 재편성하여 콘텐츠를 좀 더 집중적인 페이지로 재편성.
- 마찬가지로, 그리드 콘텐츠를 더욱 명확하게 정리하여 [the Layout section](https://getbootstrap.com/docs/5.0/layout/breakpoints/) 업데이트.
- "Navs" 컴포넌트 페이지가 "Navs & Tabs"로 변경.
- "Checks" 페이지가 "Checks & radios"로 변경.
- 사이트와 문서 버전의 이동을 손쉽게 하기 위해 navbar의 디자인을 변경하고 새로운 subnav를 추가.
- 검색에 새로운 키보드 단축키를 추가: <kbd>Ctrl + /</kbd>.

## Sass

- 중복된 값을 쉽게 삭제할 수 있도록 기본 Sass 맵의 병합을 폐지하였습니다. 앞으로는 `$theme-colors`과 같은 모든 값을 Sass 맵에서 정의해야 합니다. 자세한 내용은 [Sass maps]({{< docsref "/customize/sass#maps-and-loops" >}})를 참조해 주세요.

- <span class="badge bg-danger">Breaking</span> YIQ 색공간과 관련 없어졌기 때문에 `color-yiq()` 함수와 그에 관련된 변수들을 `color-contrast()`로 변경하였습니다. [자세히 보기 #30168.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold`는 `$min-contrast-ratio`로 변경.
  - `$yiq-text-dark`와 `$yiq-text-light`는 각각 `$color-contrast-dark`와 `$color-contrast-light`로 변경.

- <span class="badge bg-danger">Breaking</span> 인쇄 클래스와 `$enable-print-styles` 변수를 삭제하였습니다. 인쇄 표시 클래스는 아직 남아 있습니다.[자세히 보기 #28339](https://github.com/twbs/bootstrap/pull/28339).

- <span class="badge bg-danger">Breaking</span> `color()`, `theme-color()`, 그리고 `gray()` 의 함수를 폐지하고 변수를 사용하도록 하였습니다.[자세히 보기 #29083](https://github.com/twbs/bootstrap/pull/29083).

- <span class="badge bg-danger">Breaking</span> `theme-color-level()` 함수를 `color-level()`로 변경하고, `$theme-color`의 색상뿐만 아니라 임의의 색을 받을수 있게 변경하였습니다. [자세히 보기 #29083](https://github.com/twbs/bootstrap/pull/29083) **주의:** `v5.0.0-alpha3` 이후 `color-level()`은 삭제되었습니다.

- <span class="badge bg-danger">Breaking</span> 간결하게 하기 위해서 `$enable-prefers-reduced-motion-media-query`와 `$enable-pointer-cursor-for-buttons`의 이름을 `$enable-reduced-motion`과 `$enable-button-pointers`로 변경하였습니다.

- <span class="badge bg-danger">Breaking</span> 믹스인 `bg-gradient-variant()`를 삭제 하였습니다. 요소에 그라데이션을 추가하기 위해 사용한 `.bg-gradient-*` 클래스 대신에 `.bg-gradient` 클래스를 사용해 주세요.

- <span class="badge bg-danger">Breaking</span> **더 이상 사용되지 않는 믹스인 삭제:**
  - `hover`, `hover-focus`, `plain-hover-focus`, 그리고 `hover-focus-active`
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (관련 유틸리티 클래스인`.text-hide`도 함께 삭제)
  - `visibility()`
  - `form-control-focus()`

- <span class="badge bg-danger">Breaking</span> Sass 자신의 컬러 스케일링 기능과 충돌을 피해기 위해 `scale-color()` 함수명을 `shift-color()`로 변경하였습니다.

- `box-shadow` 믹스인에서 `null` 값을 허용하고 많은 인수에서 `none`을 삭제 하였습니다. [자세히 보기 #30394](https://github.com/twbs/bootstrap/pull/30394).

- `border-radius()` 믹스인에 기본 값이 설정 되었습니다.

## Color system

- `color-level()`과 `$theme-color-interval`로 동작하던 컬러 시스템이 삭제되고 새로운 컬러 시스템이 채택 되었습니다. 기본적으로 모든 코드에 사용된 `lighten()`과 `darken()` 함수는 `tint-color()`와 `shade-color()`로 대체 되었습니다. 이 함수는 색의 명도를 일정량 변경하는 대신, 그 색에 흰색이나 검은색을 혼합 합니다. `shift-color()`는 양수 혹은 음수의 weight 매개 변수에 따라 색상을 바꾸거나 음영을 주기도 합니다. [자세히 보기 #30622](https://github.com/twbs/bootstrap/pull/30622).

- 새로운 Sass 변수로서, 모든 색상에 새로운 색조와 음영을 추가해 각 기본 색상에 9개의 별도 색상을 제공합니다.

- 색 대비(color contrast)를 개선하였습니다. 색 대비 비율을 3:1에서 4.5:1로 변경하고 WCAG 2.1 AA contrast를 확보하기 위해 blue, green, cyan, pink 색상을 수정하였습니다. 그리고 색 대비에서 사용하는 어두운 색($color-contrast-dark)을 `$gray-900`에서 `$black`으로 변경하였습니다.

- 색상을 적절하게 혼합한 새로운 사용자 정의 `tint-color()`와 `shade-color()` 함수를 사용해 컬러 시스템을 지원합니다.

## Grid updates

- **New breakpoint!** Added new `xxl` breakpoint for `1400px` and up. No changes to all other breakpoints.

- **Improved gutters.** Gutters are now set in rems, and are narrower than v4 (`1.5rem`, or about `24px`, down from `30px`). This aligns our grid system's gutters with our spacing utilities.
  - Added new [gutter class](https://getbootstrap.com/docs/5.0/layout/gutters/) (`.g-*`, `.gx-*`, and `.gy-*`) to control horizontal/vertical gutters, horizontal gutters, and vertical gutters.
  - <span class="badge bg-danger">Breaking</span> Renamed `.no-gutters` to `.g-0` to match new gutter utilities.

- Columns no longer have `position: relative` applied, so you may have to add `.position-relative` to some elements to restore that behavior.

- <span class="badge bg-danger">Breaking</span> Dropped several `.order-*` classes that often went unused. We now only provide `.order-1` to `.order-5` out of the box.

- <span class="badge bg-danger">Breaking</span> Dropped the `.media` component as it can be easily replicated with utilities. [See #28265](https://github.com/twbs/bootstrap/pull/28265) and the [flex utilities page for an example]({{< docsref "/utilities/flex#media-object" >}}).

- <span class="badge bg-danger">Breaking</span> `bootstrap-grid.css` now only applies `box-sizing: border-box` to the column instead of resetting the global box-sizing. This way, our grid styles can be used in more places without interference.

- `$enable-grid-classes` no longer disables the generation of container classes anymore. [See #29146.](https://github.com/twbs/bootstrap/pull/29146)

- Updated the `make-col` mixin to default to equal columns without a specified size.

## Content, Reboot, etc

- **[RFS]({{< docsref "/getting-started/rfs" >}}) is now enabled by default.** Headings using the `font-size()` mixin will automatically adjust their `font-size` to scale with the viewport. _This feature was previously opt-in with v4._

- <span class="badge bg-danger">Breaking</span> Overhauled our display typography to replace our `$display-*` variables and with a `$display-font-sizes` Sass map. Also removed the individual `$display-*-weight` variables for a single `$display-font-weight` and adjusted `font-size`s.

- Added two new `.display-*` heading sizes, `.display-5` and `.display-6`.

- **Links are underlined by default** (not just on hover), unless they're part of specific components.

- **Redesigned tables** to refresh their styles and rebuild them with CSS variables for more control over styling.

- <span class="badge bg-danger">Breaking</span> Nested tables do not inherit styles anymore.

- <span class="badge bg-danger">Breaking</span> `.thead-light` and `.thead-dark` are dropped in favor of the `.table-*` variant classes which can be used for all table elements (`thead`, `tbody`, `tfoot`, `tr`, `th` and `td`).

- <span class="badge bg-danger">Breaking</span> The `table-row-variant()` mixin is renamed to `table-variant()` and accepts only 2 parameters: `$color` (colon name) and `$value` (color code). The border color and accent colors are automatically calculated based on the table factor variables.

- Split table cell padding variables into `-y` and `-x`.

- <span class="badge bg-danger">Breaking</span> Dropped `.pre-scrollable` class. [See #29135](https://github.com/twbs/bootstrap/pull/29135)

- <span class="badge bg-danger">Breaking</span> `.text-*` utilities do not add hover and focus states to links anymore. `.link-*` helper classes can be used instead. [See #29267](https://github.com/twbs/bootstrap/pull/29267)

- <span class="badge bg-danger">Breaking</span> Dropped `.text-justify` class. [See #29793](https://github.com/twbs/bootstrap/pull/29793)

- Reset default horizontal `padding-left` on `<ul>` and `<ol>` elements from browser default `40px` to `2rem`.

- Added `$enable-smooth-scroll`, which applies `scroll-behavior: smooth` globally—except for users asking for reduced motion through `prefers-reduced-motion` media query. [See #31877](https://github.com/twbs/bootstrap/pull/31877)

## RTL

- Horizontal direction specific variables, utilities, and mixins have all been renamed to use logical properties like those found in flexbox layouts—e.g., `start` and `end` in lieu of `left` and `right`.

## Forms

- **Added new floating forms!** We've promoted the Floating labels example to fully supported form components. [See the new Floating labels page.]({{< docsref "/forms/floating-labels" >}})

- <span class="badge bg-danger">Breaking</span> **Consolidated native and custom form elements.** Checkboxes, radios, selects, and other inputs that had native and custom classes in v4 have been consolidated. Now nearly all our form elements are entirely custom, most without the need for custom HTML.
  - `.custom-check` is now `.form-check`.
  - `.custom-check.custom-switch` is now `.form-check.form-switch`.
  - `.custom-select` is now `.form-select`.
  - `.custom-file` and `.form-file` have been replaced by custom styles on top of `.form-control`.
  - `.custom-range` is now `.form-range`.
  - Dropped native `.form-control-file` and `.form-control-range`.

- <span class="badge bg-danger">Breaking</span> Dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups.

- The longstanding [Missing border radius on input group with validation feedback bug](https://github.com/twbs/bootstrap/issues/25110) is finally fixed by adding an additional `.has-validation` class to input groups with validation.

- <span class="badge bg-danger">Breaking</span> **Dropped form-specific layout classes for our grid system.** Use our grid and utilities instead of `.form-group`, `.form-row`, or `.form-inline`.

- <span class="badge bg-danger">Breaking</span> Form labels now require `.form-label`.

- <span class="badge bg-danger">Breaking</span> `.form-text` no longer sets `display`, allowing you to create inline or block help text as you wish just by changing the HTML element.

- Validation icons are no longer applied to `<select>`s with `multiple`.

- Rearranged source Sass files under `scss/forms/`, including input group styles.

<hr class="my-5">

## Components

- Unified `padding` values for alerts, breadcrumbs, cards, dropdowns, list groups, modals, popovers, and tooltips to be based on our `$spacer` variable. [See #30564](https://github.com/twbs/bootstrap/pull/30564).

### Accordion

- Added [new accordion component]({{< docsref "/components/accordion" >}}).

### Alerts

- Alerts now have [examples with icons]({{< docsref "/components/alerts#icons" >}}).

- Removed custom styles for `<hr>`s in each alert since they already use `currentColor`.

### Badges

- <span class="badge bg-danger">Breaking</span> Dropped all `.badge-*` color classes for background utilities (e.g., use `.bg-primary` instead of `.badge-primary`).

- <span class="badge bg-danger">Breaking</span> Dropped `.badge-pill`—use the `.rounded-pill` utility instead.

- <span class="badge bg-danger">Breaking</span> Removed hover and focus styles for `<a>` and `<button>` elements.

- Increased default padding for badges from `.25em`/`.5em` to `.35em`/`.65em`.

### Breadcrumbs

- Simplified the default appearance of breadcrumbs by removing `padding`, `background-color`, and `border-radius`.

- Added new CSS custom property `--bs-breadcrumb-divider` for easy customization without needing to recompile CSS.

### Buttons

- <span class="badge bg-danger">Breaking</span> **[Toggle buttons](http://getbootstrap.com/docs/5.0/forms/checks-radios/#toggle-buttons), with checkboxes or radios, no longer require JavaScript and have new markup.** We no longer require a wrapping element, add `.btn-check` to the `<input>`, and pair it with any `.btn` classes on the `<label>`. [See #30650](https://github.com/twbs/bootstrap/pull/30650). _The docs for this has moved from our Buttons page to the new Forms section._

- <span class="badge bg-danger">Breaking</span> **Dropped `.btn-block` for utilities.** Instead of using `.btn-block` on the `.btn`, wrap your buttons with `.d-grid` and a `.gap-*` utility to space them as needed. Switch to responsive classes for even more control over them. [Read the docs for some examples.](http://getbootstrap.com/docs/5.0/components/buttons/#block-buttons)

- Updated our `button-variant()` and `button-outline-variant()` mixins to support additional parameters.

- Updated buttons to ensure increased contrast on hover and active states.

- Disabled buttons now have `pointer-events: none;`.

### Card

- <span class="badge bg-danger">Breaking</span> Dropped `.card-deck` in favor of our grid. Wrap your cards in column classes and add a parent `.row-cols-*` container to recreate card decks (but with more control over responsive alignment).

- <span class="badge bg-danger">Breaking</span> Dropped `.card-columns` in favor of Masonry. [See #28922](https://github.com/twbs/bootstrap/pull/28922).

- <span class="badge bg-danger">Breaking</span> Replaced the `.card` based accordion with a [new Accordion component]({{< docsref "/components/accordion" >}}).

### Carousel

- Added new [`.carousel-dark` variant]({{< docsref "/components/carousel#dark-variant" >}}) for dark text, controls, and indicators (great for lighter backgrounds).

- Replaced chevron icons for carousel controls with new SVGs from [Bootstrap Icons]({{< param "icons" >}}).

### Close button

- <span class="badge bg-danger">Breaking</span> Renamed `.close` to `.btn-close` for a less generic name.

- Close buttons now use a `background-image` (embedded SVG) instead of a `&times;` in the HTML, allowing for easier customization without the need to touch your markup.

- Added new `.btn-close-white` variant that uses `filter: invert(1)` to enable higher contrast dismiss icons against darker backgrounds.

### Collapse

- Removed scroll anchoring for accordions.

### Dropdowns

- Added new `.dropdown-menu-dark` variant and associated variables for on-demand dark dropdowns.

- Added new variable for `$dropdown-padding-x`.

- Darkened the dropdown divider for improved contrast.

- <span class="badge bg-danger">Breaking</span> All the events for the dropdown are now triggered on the dropdown toggle button and then bubbled up to the parent element.

- Dropdown menus now have a `data-bs-popper="static"` attribute set when the positioning of the dropdown is static and `data-bs-popper="none"` when dropdown is in the navbar. This is added by our JavaScript and helps us use custom position styles without interfering with Popper's positioning.

- <span class="badge bg-danger">Breaking</span> Dropped `flip` option for dropdown plugin in favor of native Popper configuration. You can now disable the flipping behavior by passing an empty array for [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) option in [flip](https://popper.js.org/docs/v2/modifiers/flip/) modifier.

- Dropdown menus can now be clickable with a new `autoClose` option to handle the [auto close behavior]({{< docsref "/components/dropdowns#auto-close-behavior" >}}). You can use this option to accept the click inside or outside the dropdown menu to make it interactive.

- Dropdowns now support `.dropdown-item`s wrapped in `<li>`s.

### Jumbotron

- <span class="badge bg-danger">Breaking</span> Dropped the jumbotron component as it can be replicated with utilities. [See our new Jumbotron example for a demo.](https://getbootstrap.com/docs/5.0/examples/jumbotron/)

### List group

- Added new [`.list-group-numbered` modifier]({{< docsref "/components/list-group#numbered" >}}) to list groups.

### Navs and tabs

- Added new `null` variables for `font-size`, `font-weight`, `color`, and `:hover` `color` to the `.nav-link` class.

### Navbars

- <span class="badge bg-danger">Breaking</span> Navbars now require a container within (to drastically simplify spacing requirements and CSS required).

### Offcanvas

- Added the new [offcanvas component]({{< docsref "/components/offcanvas" >}}).

### Pagination

- Pagination links now have customizable `margin-left` that are dynamically rounded on all corners when separated from one another.

- Added `transition`s to pagination links.

### Popovers

- <span class="badge bg-danger">Breaking</span> Renamed `.arrow` to `.popover-arrow` in our default popover template.

- Renamed `whiteList` option to `allowList`.

### Spinners

- Spinners now honor `prefers-reduced-motion: reduce` by slowing down animations. [See #31882](https://github.com/twbs/bootstrap/pull/31882).

- Improved spinner vertical alignment.

### Toasts

- Toasts can now be [positioned]({{< docsref "/components/toasts#placement" >}}) in a `.toast-container` with the help of [positioning utilities]({{< docsref "/utilities/position" >}}).

- Changed default toast duration to 5 seconds.

- Removed `overflow: hidden` from toasts and replaced with proper `border-radius`s with `calc()` functions.

### Tooltips

- <span class="badge bg-danger">Breaking</span> Renamed `.arrow` to `.tooltip-arrow` in our default tooltip template.

- <span class="badge bg-danger">Breaking</span> The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of popper elements.

- <span class="badge bg-danger">Breaking</span> Renamed `whiteList` option to `allowList`.

## Utilities

- <span class="badge bg-danger">Breaking</span> Renamed several utilities to use logical property names instead of directional names with the addition of RTL support:
  - Renamed `.left-*` and `.right-*` to `.start-*` and `.end-*`.
  - Renamed `.float-left` and `.float-right` to `.float-start` and `.float-end`.
  - Renamed `.border-left` and `.border-right` to `.border-start` and `.border-end`.
  - Renamed `.rounded-left` and `.rounded-right` to `.rounded-start` and `.rounded-end`.
  - Renamed `.ml-*` and `.mr-*` to `.ms-*` and `.me-*`.
  - Renamed `.pl-*` and `.pr-*` to `.ps-*` and `.pe-*`.
  - Renamed `.text-left` and `.text-right` to `.text-start` and `.text-end`.

- <span class="badge bg-danger">Breaking</span> Disabled negative margins by default.

- Added new `.bg-body` class for quickly setting the `<body>`'s background to additional elements.

- Added new [position utilities]({{< docsref "/utilities/position#arrange-elements" >}}) for `top`, `right`, `bottom`, and `left`. Values include `0`, `50%`, and `100%` for each property.

- Added new `.translate-middle-x` & `.translate-middle-y` utilities to horizontally or vertically center absolute/fixed positioned elements.

- Added new [`border-width` utilities]({{< docsref "/utilities/borders#border-width" >}}).

- <span class="badge bg-danger">Breaking</span> Renamed `.text-monospace` to `.font-monospace`.

- <span class="badge bg-danger">Breaking</span> Removed `.text-hide` as it's an antiquated method for hiding text that shouldn't be used anymore.

- Added `.fs-*` utilities for `font-size` utilities (with RFS enabled). These use the same scale as HTML's default headings (1-6, large to small), and can be modified via Sass map.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-weight-*` utilities as `.fw-*` for brevity and consistency.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-style-*` utilities as `.fst-*` for brevity and consistency.

- Added `.d-grid` to display utilities and new `gap` utilities (`.gap`) for CSS Grid and flexbox layouts.

- <span class="badge bg-danger">Breaking</span> Removed `.rounded-sm` and `rounded-lg`, and introduced a new scale of classes, `.rounded-0` to `.rounded-3`. [See #31687](https://github.com/twbs/bootstrap/pull/31687).

- Added new `line-height` utilities: `.lh-1`, `.lh-sm`, `.lh-base` and `.lh-lg`. See [here]({{< docsref "/utilities/text#line-height" >}}).

- Moved the `.d-none` utility in our CSS to give it more weight over other display utilities.

- Extended the `.visually-hidden-focusable` helper to also work on containers, using `:focus-within`.

## Helpers

- <span class="badge bg-danger">Breaking</span> **Responsive embed helpers have been renamed to [ratio helpers]({{< docsref "/helpers/ratio" >}})** with new class names and improved behaviors, as well as a helpful CSS variable.
  - Classes have been renamed to change `by` to `x` in the aspect ratio. For example, `.ratio-16by9` is now `.ratio-16x9`.
  - We've dropped the `.embed-responsive-item` and element group selector in favor of a simpler `.ratio > *` selector. No more class is needed, and the ratio helper now works with any HTML element.
  - The `$embed-responsive-aspect-ratios` Sass map has been renamed to `$aspect-ratios` and its values have been simplified to include the class name and the percentage as the `key: value` pair.
  - CSS variables are now generated and included for each value in the Sass map. Modify the `--bs-aspect-ratio` variable on the `.ratio` to create any [custom aspect ratio]({{< docsref "/helpers/ratio#custom-ratios" >}}).

- <span class="badge bg-danger">Breaking</span> **"Screen reader" classes are now ["visually hidden" classes]({{< docsref "/helpers/visually-hidden" >}}).**
  - Changed the Sass file from `scss/helpers/_screenreaders.scss` to `scss/helpers/_visually-hidden.scss`
  - Renamed `.sr-only` and `.sr-only-focusable` to `.visually-hidden` and `.visually-hidden-focusable`
  - Renamed `sr-only()` and `sr-only-focusable()` mixins to `visually-hidden()` and `visually-hidden-focusable()`.

- `bootstrap-utilities.css` now also includes our helpers. Helpers don't need to be imported in custom builds anymore.

## JavaScript

- **Dropped jQuery dependency** and rewrote plugins to be in regular JavaScript.

- <span class="badge bg-danger">Breaking</span> Data attributes for all JavaScript plugins are now namespaced to help distinguish Bootstrap functionality from third parties and your own code. For example, we use `data-bs-toggle` instead of `data-toggle`.

- **All plugins can now accept a CSS selector as the first argument.** You can either pass a DOM element or any valid CSS selector to create a new instance of the plugin:

  ```js
  var modal = new bootstrap.Modal('#myModal')
  var dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
  ```

- `popperConfig` can be passed as a function that accepts the Bootstrap's default Popper config as an argument, so that you can merge this default configuration in your way. **Applies to dropdowns, popovers, and tooltips.**

- The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of Popper elements. **Applies to dropdowns, popovers, and tooltips.**

- Removed underscore from public static methods like `_getInstance()` → `getInstance()`.
