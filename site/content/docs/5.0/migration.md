---
layout: docs
title: Migrating to v5
description: Bootstrap의 소스파일, 문서 및 컨포넌트의 변경 내용을 확인 리뷰함으로써 v4에서 v5로의 변경을 지원합니다.
group: migration
aliases: "/migration/"
toc: true
---

## v5.0.0-beta1

### RTL

**RTL 기능은 여전히 실험적이며 사용자 피드백에 따라 진화할 것입니다.** 무언가를 발견했거나 개선 할 점이 있다면 [이슈]({{< param repo >}}/issues/new)에 등록해 주세요.

#### Sass

수평 방항의 변수명, 유틸리티와 믹스인 이름이 보다 논리적인 이름으로 변경 되었습니다. — `left` 와 `right`을 `start` 와 `end` 로.

##### Components

- `.dropleft` 와 `.dropright` 를 `.dropstart` 와 `dropend`로 변경.
- `.dropdown-menu-*-left` 와 `.dropdown-menu-*-right` 를 `.dropdown-menu-*-start` 와 `.dropdown-menu-*-end` 로 변경.
- `.bs-popover-left` 와 `.bs-popover-right` 를 `.bs-popover-start` 와 `.bs-popover-end` 로 변경.
- `.bs-tooltip-left` 와 `.bs-tooltip-right` 를 `.bs-tooltip-start` 와 `.bs-tooltip-end` 로 변경.
- `.carousel-item-left` 와 `.carousel-item-right` 를 `.carousel-item-start` 와 `.carousel-item-end` 로 변경.

##### Utilities

- `.left-*` 와 `.right-*` 를 `.start-*` 와 `.end-*` 로 변경.
- `.float-left` 와 `.float-right` 를 `.float-start` 와 `.float-end` 로 변경.
- `.border-left` 와 `.border-right` 를 `.border-start` 와 `.border-end` 로 변경.
- `.rounded-left` 와 `.rounded-right` 를 `.rounded-start` 와 `.rounded-end` 로 변경.
- `.ml-*` 와 `.mr-*` 를 `.ms-*` 와 `.me-*` 로 변경.
- `.pl-*` 와 `.pr-*` 를 `.ps-*` 와 `.pe-*` 로 변경.
- `.text-left` 와 `.text-right` to `.text-start` 와 `.text-end` 로 변경.

따라서 Breakpoint variant의 이름도 변경 되었습니다. (eg. `.text-md-left`가 `.text-md-start` 로 변경).

##### Mixins

- `border-left-radius()` 와 `border-right-radius()` 이 `border-start-radius()` 와 `border-end-radius()` 으로 변경 — 과 함께 그들의 코너 variant들도 (eg. `.border-bottom-left-radius` 이 `.border-bottom-start-radius` 으로 변경 되었습니다).
- `caret-left()` 과 `caret-right()` 이 `caret-start()` 과 `caret-end()` 으로 변경 — 그 후, `caret()` 의 믹스인은 `left` 과 `right` 대신 `start` 과 `end` 을 인수로 받게 되었습니다.

##### Variables

- RTL로 다른 breadcrumb(브레드크럼)의 분리기호 필요한 경우를 위해, 새로운 `$breadcrumb-divider-flipped`을 추가했습니다.
- `$navbar-brand-margin-right` 가 `$navbar-brand-margin-end` 으로 변경.
- `$pagination-margin-left` 가 `$pagination-margin-start` 으로 변경.
- `$form-check-padding-left` 가 `$form-check-padding-start` 으로 변경.
- `$form-switch-padding-left` 가 `$form-switch-padding-start` 으로 변경.
- `$form-check-inline-margin-right` 가 `$form-check-inline-margin-end` 으로 변경.
- `$form-select-feedback-icon-padding-right` 가 `$form-select-feedback-icon-padding-end` 으로 변경.


### JavaScript

- 모든 JavaScript plugin의 데이터 속성은 자체 코드와 Bootstrap 기능을 구분 되도록 기존의 `data-toggle`의 이름이 `data-bs-toggle` 로 변경되었습니다.
- 업데이트 Popper v2.x:
  - Tooltip/Popover과 Dropdown plugin에서 `offset` 옵션을 삭제했습니다.
  - `fallbackPlacement` 옵션명이 `fallbackPlacements`이 되었습니다.

### Sass

- Sass의 독자적인 스케일링 함수와 충돌을 피하기 위해 `scale-color()` 함수명이  `shift-color()` 으로 변경 되었습니다.

### Utilities

- absolute/fixed 위치에 있는 요소를 수평 또는 수직의 가운데 배치 시키기 위해 `.translate-middle-x` 과 `.translate-middle-y` 의 새로운 유틸리티가 추가 되었습니다.

### Components

#### Breadcrumbs

- 기본적으로 가지고 있던 `padding`, `background-color`, `border-radius` 의 스타일을 삭제해 보다 심플해 졌습니다.
- CSS를 컴파일하지 않고 쉽게 사용자가 지정할 수 있도록 `--bs-breadcrumb-divider` 가 추가 되었습니다.

#### Toasts

- [positioning utilities]({{< docsref "/utilities/position" >}})를 이용해 Toasts를  `.toast-container` 에 배치 시킬수 있게 되었습니다.

## v5.0.0-alpha3

### Browser support

- Microsoft Edge Legacy 지원을 하지 않습니다. 이전 브라우저 지원의 변경 내용을 확인하려면 [여기](#browser-support-1) 를 참조해 주십시오.

### Sass

- `color-level()` 과 `$theme-color-interval`으로 작동하던 컬러 시스템은 삭제되고, 새로운 컬러 시스템이 적용되었습니다. 코드의 기본인 `lighten()` 과 `darken()` 의 함수는 모두 `tint-color()` 과 `shade-color()`으로 바뀝니다. 이들의 함수는, 색의 명도를 일정량만 변화시키는 것이 아니라, 흰색 또는 검은색 중 한쪽을 섞습니다. `scale-color()` (Beta 1에서는 `shift-color()` 로 변경)는,  그것의 중요한 파라미터 값이 양수인지 음수인지에 따라 색상을 바꿀지 색을 진하게 할지를 결정합니다. [자세히 보기 #30622](https://github.com/twbs/bootstrap/pull/30622).
- Spinner는 이제 애니메이션을 느리게 함으로써 `prefers-reduced-motion: reduce` 를 받아들이게 되었습니다. [자세히 보기 #31882](https://github.com/twbs/bootstrap/pull/31882).

### Reboot

- `$enable-smooth-scroll` 를 도입해, `prefers-reduced-motion` 미디어 쿼리를 사용해 움직임의 축소를 원하는 사용자를 제외하고는 `scroll-behavior: smooth` 를 전체적으로 적용하도록 하였습니다. [자세히 보기 #31877](https://github.com/twbs/bootstrap/pull/31877)

### Buttons

- [`.btn-block` 클래스를 삭제하고, grid 유틸리티 클래스를 사용하도록 하였습니다.]({{< docsref "/components/buttons#block-buttons" >}}) 각 버튼에 `.btn-block` 을 적용하는 대신에, 버튼 그룹의 부모를 `.d-grid` 클래스로 감싸주고, 간격으로는 `.gap-*` 유틸리티틑 사용할 수 있게 되었습니다. 각각의 "block buttons" 에는 `.w-100` 을 추가해 주십시오.

### Forms

- 오래된 버그였던 [input group과 함께 사용한 유효성 검사 input의 반지름이 사라진](https://github.com/twbs/bootstrap/issues/25110) 이슈는  `.has-validation` 클래스를 추가하는 것으로 최종적으로 수정되었습니다.
- Floating labels를 완전히 지원할 수 있도록 form component에 추가시켰습니다. [페이지 확인하러 가기]({{< docsref "/forms/floating-labels" >}})
- File input은 앞으로 `.form-control` 클래스를 사용하며, JavaScript, 추가 HTML, 또는 추가 클래스가 필요하지 않습니다. [자세히 보기 #31955](https://github.com/twbs/bootstrap/pull/31955).
- Color input의 `.form-control-color` 클래스 안에 `cursor:pointer` 를 추가 했습니다.

### Utilities

- **Text utilities:**
  - `font-size` 유틸리티 (RFS 활성화 한 상태)용으로 `.fs-*` 유틸리티를 추가했습니다. 이들은 HTML의 기본 타이틀과 같은 축척(h1-h6, large, small)을 사용하고 Sass map을 통해 변경할 수 있습니다.
  - 기존 `.font-weight-*` 유틸리티의 이름이 `.fw-*` 으로 변경 되었습니다.
  - 기존 `.font-style-*` 유틸리티의 이름이 `.fst-*` 으로 변경 되었습니다.
- display 유틸리티에 `.d-grid` 가 추가 되었습니다.
- Grid layout용으로 새로운 `gap` 유틸리티 (`.gap`) 가 추가 되었습니다.

## v5.0.0-alpha2

### Sass

- `border-radius` 에 기본 매개 변수가 추가 - [See #31571](https://github.com/twbs/bootstrap/pull/31571).
- `xs` breakpoint 만을 타겟으로 했을 경우, 다음의 브레이크 포인트가 업데이트 되도록. [자세히 보기 #31500](https://github.com/twbs/bootstrap/pull/31500).
- `box-shadow` 믹스인에서 `null` 값을 허용하게 하여, 복수의 인수에서 `none` 을 삭제하지 않습니다. - [자세히 보기 #30394](https://github.com/twbs/bootstrap/pull/30394).

### Docs

- "Navs" 메뉴가 "Navs & Tabs"으로 변경 되었습니다.
- "Screen readers" 메뉴가 helper 페이지로 이동되어 "Visually hidden" 으로 변경되었으며, 파일이름과 클래스 이름도 함께  `visually-hidden` 으로 변경 되었습니다.
- "Checks" 페이지가 "Checks & radios" 으로 변경되며 함께 파일 이름도 `checks-radios`으로 변경 되었습니다.
- check/radio 문서가 업데이트 되었습니다. (Checks에 있던 버튼관련 내용은 button groups로 이동)
- skip links의 문서가 개선되었습니다.
- 모바일에서 더 큰 탭 대상을 위해 docs navigation의 재설계 및 간소화 된 subnav.
- [#31114](https://github.com/twbs/bootstrap/pull/31114): 접근성과 관련된 양식 문서가 개선 되었습니다.

### Layout

- Container의 수평 패딩이 `.row`의 gutter 크기에 맞게 업데이트 되었습니다.
- [#31439](https://github.com/twbs/bootstrap/pull/31439): grid 동작의 퇴보로 인해 행에서 `flex: 1 0 100%` 가 삭제 되었습니다.

### Reboot

- `font-weight`의 기본 값 `null`을 사용하여 명시적으로 설정하는게 아니라 `text-align`을 이어 받도록 `th` 업데이트.

### Colors

- 색 대비 비율을 3:1 에서 4.5:1로 변경 했습니다.
- 색 대비에서 사용하던 `$gray-900`을 `$black`으로 바꿨습니다.
- `$green` (혹은 테마명으로는 `$success`) 색을 개선해, 색 대비가 적어지도록 했습니다. (`#28a745` 에서 `#198754`으로 변경).
- `$cyan` (혹은 테마명으로는 `$info`) 색을 보다 선명한 색으로 개선했습니다. (`#17a2b8` 에서 `#0dcaf0`으로 변경).

### Forms

- [#31383](https://github.com/twbs/bootstrap/pull/31383): 체크버튼과 라디오 버튼의 크기를 `1.25em`에서 `1em`으로 변경하고, `$font-size-base` 을 사용해 확장성을 높히게 하였습니다.

### Components

#### Badges

- [#31132](https://github.com/twbs/bootstrap/pull/31132): Badge(배지)의 기본 패딩을 `.25em`/`.5em` 에서 `.35em`/`.65em`.으로 변경 하였습니다.

#### Buttons

- [#30639](https://github.com/twbs/bootstrap/pull/30639): 버튼의 비활성화(Disabled) 상태는 `button-variant()` 믹스인의 인수를 추가함으로써 사용자 지정이 쉬워졌습니다.
- [#30989](https://github.com/twbs/bootstrap/pull/30989): 버튼을 업데이트해, 호버와 활성화 된 생태의 색 대비를 향상시켰습니다.

#### Carousel

- Carousel(캐러셀)에 사용하는 chevron 아이콘을 [Bootstrap Icons]({{< param "icons" >}})의 새로운 SVG로 업데이트 했습니다.
- 어두운 텍스트, 컨트롤, 표시 위한 새로운 [`.carousel-dark`]({{< docsref "/components/carousel#dark-variant" >}})을 추가하였습니다. (밝은 배경에 최적).

#### Close button

- `.close` 가 `.btn-close` 로 바뀌어 보다 일반적인 이름이 되었습니다.
- 닫기 버튼은 HTML안에서 기존의 `&times;` 대신 `background-image` (내장 SVG)를 사용하게 되어, 마크업을 수정없이 쉽게 커스터마이즈 할 수 있게 되었습니다.
- `.btn-close-white`를 새롭게 추가하여 `filter: invert(1)`을 사용해, 어두운 배경에서도 보다 높은 대비로 아이콘을 없앨수 있게 되었습니다.

#### Collapse

- [#31346](https://github.com/twbs/bootstrap/pull/31346): accordion(아코디언)의 scroll anchoring(스크롤 앵커링)을 삭제 했습니다.

#### Dropdowns

- 새로운`.dropdown-menu-dark` 를 추가하고 on-demand의 dark dropdown의 관련 변수를 추가하였습니다.
- `$dropdown-padding-x`를 새롭게 추가하였습니다.
- contrast 개선을 하기 위해, dropdown(드롭다운)의 divider(구분선)을 어둡게 했습니다.

#### Navs

- [#31035](https://github.com/twbs/bootstrap/pull/31035): `.nav-link` 클래스에 `font-size`, `font-weight`, `color`, `:hover` `color` 의 새로운 변수 `null`을 추가하였습니다.

#### Pagination

- pagination 링크에 `transition`을 추가했습니다. [자세히 보기 #31396](https://github.com/twbs/bootstrap/pull/31396).

#### Popovers

- `whiteList` 의 옵션명을 `allowList`으로 변경했습니다.

#### Toasts

- [#31109](https://github.com/twbs/bootstrap/pull/31109): Made default toast duration 5 seconds.
- [#31155](https://github.com/twbs/bootstrap/pull/31155): Clear `timeout` before showing toasts.
- [#31381](https://github.com/twbs/bootstrap/pull/31381): Removed `overflow: hidden` from toasts and replaced with proper `border-radius`s with `calc()` functions.
- Updated docs to include additional examples for how to customize and theme toasts.

#### Tooltips

- `whiteList` 의 옵션명을 `allowList`으로 변경했습니다.

### Helpers

- Responsive embed 이름이 [ratio]({{< docsref "/helpers/ratio" >}}) 로 변경되어, 새로운 클래스명과 동작으로 개선되었습니다.
  - 가로세로의 비의 의미로 클래스명에 함께 사용된 `by` 가 `x` 로 변경되었습니다. 예를 들어, `.ratio-16by9` 는`.ratio-16x9`으로.
  - `.embed-responsive-item` 과 요소의 그룹 셀렉터를 삭제하고, 보다 심플한 `.ratio > *` 의 셀렉터로 변경되었습니다. 이 이상의 클래스는 필요 없으며, ratio helper는 어떤 HTML 요소에서도 동작하도록 되었습니다.
  - `$embed-responsive-aspect-ratios` 가 `$aspect-ratios` 로 이름이 변경되어, 그 값이 단순화되고, 클래스명과 백분율이 `key: value`의 짝으로 포함되었습니다.
  - CSS 변수가 생성되어, Sass map의 각 값에 포함되게 되었습니다. `.ratio`의 변수 `--aspect-ratio`을 변경하여, 임의의 [custom aspect ratio]({{< docsref "/helpers/ratio#custom-ratios" >}})을 작성할 수 있게 하였습니다.
- "Screen reader" 클래스를 ["visually hidden" 클래스로]({{< docsref "/helpers/visually-hidden" >}}) 변경하였습니다.
  - Sass 파일을 `scss/helpers/_screenreaders.scss` 에서 `scss/helpers/_visually-hidden.scss`으로 변경.
  - `.sr-only`와 `.sr-only-focusable` 의 이름을 `.visually-hidden` 과 `.visually-hidden-focusable`으로 변경.
  - `sr-only()`와 `sr-only-focusable()`의 믹스인 이름에서 `visually-hidden()` 과 `visually-hidden-focusable()`으로 변경.

### Utilities

- [#31280](https://github.com/twbs/bootstrap/pull/31280): [position utilities]({{< docsref "/utilities/position#arrange-elements" >}}) 의 새로운 유틸리티 `top`, `right`, `bottom`, `left` 가 추가 되었습니다. 각각의 속성으로는 `0`, `50%`, `100%` 가 있습니다.
  - 또한 요소가 배치되어 있을때 센터링을 주기 위한 `translate` 유틸리티가 새롭게 추가 되었습니다.
  - 이를 보여주기 위해 몇가자의 예시가 문서에 추가 되었습니다.
- [#31484](https://github.com/twbs/bootstrap/pull/31484): 새로운 [`border-width` utility]({{< docsref "/utilities/borders#border-width" >}}) 유틸리티 추가 .
- [#31473](https://github.com/twbs/bootstrap/pull/31473): `.d-none` 유틸리티의 순서가 CSS 내에서 변경 되었습니다.
- `.text-monospace` 클래스명이 `.font-monospace`으로 변경 되었습니다.
- `.text-hide` 클래스명이 삭제 되었습니다. 이것은 더이상  사용하지 않는 텍스트를 숨기기 위해 사용되었던 오래전 방법입니다.
- 새로운 `line-height` 유틸리티: `.lh-1`, `.lh-sm`, `.lh-base`, `.lh-lg`. 자세히 보기 [here]({{< docsref "/utilities/text#line-height" >}}).

---

## v5.0.0-alpha1

### Browser support

See the browser and devices page for details on what is currently supported in Bootstrap 5. Since v4, here's what's changed to our browser support:

- Dropped support for Internet Explorer 10 and 11
- Dropped support for Microsoft Edge < 16
- Dropped support for Firefox < 60
- Dropped support for Safari < 10
- Dropped support for iOS Safari < 10
- Dropped support for Chrome < 60
- Dropped support for Android < 6

### Sass

Changes to our source Sass files and compiled CSS.

- Removed `hover`, `hover-focus`, `plain-hover-focus`, and `hover-focus-active` mixins. Use regular CSS syntax for these moving forward. [See #28267](https://github.com/twbs/bootstrap/pull/28267).
- Remove previously deprecated mixins
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (also dropped the associated utility class, `.text-hide`)
  - `visibility()`
  - `form-control-focus()`
- Rearranged forms source files under `scss/forms/`. [See Forms section for more details.](#forms)
- Removed print styles and `$enable-print-styles` variable. Print display classes, however, have remained intact. [See #28339](https://github.com/twbs/bootstrap/pull/28339).
- Dropped `color()`, `theme-color()` & `gray()` functions in favor of variables. [See #29083](https://github.com/twbs/bootstrap/pull/29083)
- The `theme-color-level()` function is renamed to `color-level()` and now accepts any color you want instead of only `$theme-color` colors. [See #29083](https://github.com/twbs/bootstrap/pull/29083) **Watch out:** `color-level()` was later on dropped in `v5.0.0-alpha3`.
- `$enable-grid-classes` doesn't disable the generation of container classes anymore [See #29146](https://github.com/twbs/bootstrap/pull/29146)
- Renamed `$enable-prefers-reduced-motion-media-query` and `$enable-pointer-cursor-for-buttons` to `$enable-reduced-motion` and `$enable-button-pointers` for brevity.
- Line heights are dropped from several components to simplify our codebase. The `button-size()` and `pagination-size()` do not accept line height parameters anymore. [See #29271](https://github.com/twbs/bootstrap/pull/29271)
- The `button-variant()` mixin now accepts 3 optional color parameters, for each button state, to override the color provided by `color-contrast()`. By default, these parameters will find which color provides more contrast against the button state's background color with `color-contrast()`.
- The `button-outline-variant()` mixin now accepts an additional argument, `$active-color`, for setting the button's active state text color. By default, this parameter will find which color provides more contrast against the button's active background color with `color-contrast()`.
- Ditch the Sass map merges, which makes it easier to remove redundant values. Keep in mind you now have to define all values in the Sass maps like `$theme-colors`. Check out how to deal with [Sass maps]({{< docsref "/customize/sass#maps-and-loops" >}}).
- `color-yiq()` function and related variables are renamed to `color-contrast()` since it's not related to YIQ colorspace anymore. [See #30168.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold` is renamed to `$min-contrast-ratio`.
  - `$yiq-text-dark` and `$yiq-text-light` are respectively renamed to `$color-contrast-dark` and `$color-contrast-light`.
- Linear gradients are simplified when gradients are enabled and therefore, `gradient-bg()` now only accepts an optional `$color` parameter.
- The `bg-gradient-variant()` mixin is removed since the `.bg-gradient` class can now be used to add gradients to elements instead of the `.bg-gradient-*` classes.
- The `media-breakpoint-down()` uses the breakpoint itself instead of the next breakpoint. Use `media-breakpoint-down(lg)` instead of `media-breakpoint-down(md)` to target viewports smaller than the `lg` breakpoint.
- The `media-breakpoint-between()` mixin's second parameter also uses the breakpoint itself instead of the next breakpoint. Use `media-between(sm, lg)` instead of `media-breakpoint-between(sm, md)` to target viewports between the `sm` and `lg` breakpoints.
- The `box-shadow()` mixin now better supports `none` and `null` with multiple arguments. Now you can pass multiple arguments with either value and get the expected output. [See #30394](https://github.com/twbs/bootstrap/pull/30394).
- Each `border-radius()` mixin now has a default value. You can now call these mixins without specifying a border radius value and the `$border-radius` variable will be used. [See #31571](https://github.com/twbs/bootstrap/pull/31571)

### JavaScript

Changes to our source and compiled JavaScript files.

- Dropped jQuery dependency and rewrote plugins to be in regular JavaScript.
- Removed underscore from public static methods like `_getInstance()` → `getInstance()`.

### Color system

We've updated the color system that powers Bootstrap to improve color contrast and provide a much more extensive set of colors.

- Updated blue and pink base colors (`-500`) to ensure WCAG 2.1 AA contrast.
- Added new tints and shades for every color, providing nine separate colors for each base color, as new Sass variables.
- To support our color system, we've added new custom `tint-color()` and `shade-color()` functions to mix our colors appropriately.

### Grid and layout

Changes to any layout tools and our grid system.

- Dropped the `.media` component as it can be built with utility classes. [See #28265](https://github.com/twbs/bootstrap/pull/28265).
- Remove `position: relative` from grid columns.
- The horizontal padding is added to the direct children in a row instead of the columns themselves.
  - This simplifies our codebase.
  - The column classes can now be used stand-alone. Whenever they are used outside a `.row`, horizontal padding won't be added.
- The responsive gutter classes can be used to control the gutter width in horizontal, vertical or both directions.
- The gutter width is now set in `rem` and decreased from `30px` to `1.5rem` (24px).
- `bootstrap-grid.css` now only applies `box-sizing: border-box` to the column instead of resetting the global box-sizing. This way the grid system can be used, even if `box-sizing: border-box` is not applied to each element.

### Content, Reboot, etc

Changes to Reboot, typography, tables, and more.

- [RFS]({{< docsref "/getting-started/rfs" >}}) enabled for automated font size rescaling. [See #29152](https://github.com/twbs/bootstrap/pull/29152)
- Reset default horizontal `padding-left` on `<ul>` and `<ol>` elements from browser default `40px` to `2rem`.
- Simplified table styles (no more odd top border) and tightened cell padding.
- Nested tables do not inherit styles anymore.
- `.thead-light` and `.thead-dark` are dropped in favor of the `.table-*` variant classes which can be used for all table elements (`thead`, `tbody`, `tfoot`, `tr`, `th` and `td`).
- The `table-row-variant()` mixin is renamed to `table-variant()` and accepts only 2 parameters: `$color` (colon name) and `$value` (color code). The border color and accent colors are automatically calculated based on the table factor variables.
- Split table cell padding variables into `-y` and `-x`.
- Dropped `.pre-scrollable` class. [See #29135](https://github.com/twbs/bootstrap/pull/29135)
- `.text-*` utilities do not add hover and focus states to links anymore. `.link-*` helper classes can be used instead. [See #29267](https://github.com/twbs/bootstrap/pull/29267)
- Drop `.text-justify` class. [See #29793](https://github.com/twbs/bootstrap/pull/29793)

### Typography

- Removed `$display-*` variables for a new `$display-font-sizes` Sass map.
- Removed individual `$display-*-weight` variables for a single `$display-font-weight`.
- Added two new `.display-*` heading styles, `.display-5` and `.display-6`.
- Resized existing display headings for a slightly more consistent set of `font-size`s.
- Links are underlined by default (not just on hover), unless they're part of specific components.

### Forms

- Rearranged form documentation under its own top-level section.
  - Split out old Forms page into several subpages
  - Moved input groups docs under the new Forms section
- Rearranged source Sass files under `scss/forms/`, including moving over input group styles.
- Combined native and custom checkboxes and radios into a single `.form-check` class.
  - New checks support sizing via `em`/`font-size` or explicit modifier classes now.
  - New checks now appear larger by default for improved usability.
  - Dropped `.custom-control` and associated classes.
  - Renamed most `$custom-control` variables to `$form-control` ones.
- Combined native and custom selects into `.form-select`.
  - Dropped `.custom-select` and associated classes.
  - Renamed most `$custom-select` variables to `$form-select` ones.
- Updated file input component with the same overall design, but improved HTML.
  - Refactored `.form-file` markup to resolve some visual bugs while allowing translation and button text changes via HTML instead of CSS.
  - Dropped native `.form-control-file` and `.form-control-range` components entirely.
  - Renamed `.custom-file` to `.form-file` (including variables). **Watch out:** `.form-file` was later on dropped in `v5.0.0-alpha3`, now you can use `.form-control`.
  - Added support for `:focus` and `:disabled` styles.
- Renamed `.custom-range` to `.form-range` (including variables).
- Dropped `.form-group` for margin utilities (we've replaced our docs examples with `.mb-3`).
- Dropped `.form-row` for the more flexible grid gutters.
- Dropped `.form-inline` for the more flexible grid.
- Dropped support for `.form-control-plaintext` inside `.input-group`s.
- Dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups.
- Form labels now require the `.form-label` class. Sass variables are now available to style form labels to your needs. [See #30476](https://github.com/twbs/bootstrap/pull/30476)

### Components

- Unified `padding` values for alerts, breadcrumbs, cards, dropdowns, list groups, modals, popovers, and tooltips to be based on our `$spacer` variable. [See #30564](https://github.com/twbs/bootstrap/pull/30564).

#### Disabled states

- Disabled states of the buttons, close button, pagination link & form range now have `pointer-events: none` added. This simplifies our codebase and makes it easier to override active states in CSS. [#29296](https://github.com/twbs/bootstrap/pull/29296).

#### Alerts

- Removed auto-darkening of `<hr>` elements in `.alert-*` class variants. `<hr>`s use `rgba()` for their color, so these should naturally blend anyway.

#### Badges

Badges were overhauled to better differentiate themselves from buttons and to better utilize utility classes.

- Removed and replaced `.badge` modifier classes with background utility classes (e.g., use `.bg-primary` instead of `.badge-primary`)
- Removed `.badge-pill` for the `.rounded-pill` utility class
- Removed badge's hover and focus styles for `a.badge` and `button.badge`.

#### Buttons

- The checkbox/radio toggle is removed from the button plugin in favor of a CSS only solution, which is documented in the [form checks and radios]({{< docsref "/forms/checks-radios#toggle-buttons" >}}) docs. The `.btn-check` class can be added to inputs, any label with `.btn` and modifier class can be used to theme the labels. [See #30650](https://github.com/twbs/bootstrap/pull/30650).

#### Cards

- Removed the card columns in favor of a Masonry grid [See #28922](https://github.com/twbs/bootstrap/pull/28922).
- Removed card decks in favor of the grid which adds more flexibility over responsive behavior.

#### Jumbotron

- The jumbotron component is removed in favor of utility classes like `.bg-light` for the background color and `.p-*` classes to control padding.

#### Navbars

- All navbars now require a container within. This drastically simplifies spacing requirements and removes the need for extensive CSS overrides we added for responsive containers in v4.

#### Pagination

- Pagination links now have customizable `margin-left` that are dynamically rounded on all corners when separated from one another.

#### Popovers

- Renamed `.arrow` to `.popover-arrow`

#### Tooltips

- Renamed `.arrow` to `.tooltip-arrow`

### Accessibility

- Unlike the old `.sr-only-focusable`, which only worked in combination with `.sr-only`, `.sr-only-focusable` can be used as a standalone class without `.sr-only`. [See #28720](https://github.com/twbs/bootstrap/pull/28720).

### Utilities

### Grid

- Decreased the number of responsive order utilities per breakpoint. The highest order utility with a number now is `.order-5` instead of `.order-12`. [See #28874](https://github.com/twbs/bootstrap/pull/28874).

### Misc

- Added `.bg-body` for quickly setting the `<body>`'s background to additional elements.
- Negative margin utilities are disabled by default. You can re-enable them by setting `$enable-negative-margins: true`, but keep in mind this can increase the file size quite a lot.

### Docs

- Removed "Wall of browser bugs" page because it has become obsolete
- Switched from Jekyll to Hugo

### Build tools

- Updated all devDependencies
- We support only the latest Node.js LTS releases which are 10 and 12 at the time of writing
