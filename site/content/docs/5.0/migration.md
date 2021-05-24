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

- <span class="badge bg-danger">Breaking</span> YIQ 색공간과 관련 없어졌기 때문에 `color-yiq()` 함수와 그에 관련된 변수들을 `color-contrast()`로 변경하였습니다. [#30168.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold`는 `$min-contrast-ratio`로 변경.
  - `$yiq-text-dark`와 `$yiq-text-light`는 각각 `$color-contrast-dark`와 `$color-contrast-light`로 변경.

- <span class="badge bg-danger">Breaking</span> 인쇄 클래스와 `$enable-print-styles` 변수를 삭제하였습니다. 인쇄 표시 클래스는 아직 남아 있습니다.[#28339](https://github.com/twbs/bootstrap/pull/28339).

- <span class="badge bg-danger">Breaking</span> `color()`, `theme-color()`, 그리고 `gray()` 의 함수를 폐지하고 변수를 사용하도록 하였습니다.[#29083](https://github.com/twbs/bootstrap/pull/29083).

- <span class="badge bg-danger">Breaking</span> `theme-color-level()` 함수를 `color-level()`로 변경하고, `$theme-color`의 색상뿐만 아니라 임의의 색을 받을수 있게 변경하였습니다. [#29083](https://github.com/twbs/bootstrap/pull/29083) **주의:** `v5.0.0-alpha3` 이후 `color-level()`은 삭제되었습니다.

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

- `box-shadow` 믹스인에서 `null` 값을 허용하고 많은 인수에서 `none`을 삭제 하였습니다. [#30394](https://github.com/twbs/bootstrap/pull/30394).

- `border-radius()` 믹스인에 기본 값이 설정 되었습니다.

## Color system

- `color-level()`과 `$theme-color-interval`로 동작하던 컬러 시스템이 삭제되고 새로운 컬러 시스템이 채택 되었습니다. 기본적으로 모든 코드에 사용된 `lighten()`과 `darken()` 함수는 `tint-color()`와 `shade-color()`로 대체 되었습니다. 이 함수는 색의 명도를 일정량 변경하는 대신, 그 색에 흰색이나 검은색을 혼합 합니다. `shift-color()`는 양수 혹은 음수의 weight 매개 변수에 따라 색상을 바꾸거나 음영을 주기도 합니다. [#30622](https://github.com/twbs/bootstrap/pull/30622).

- 새로운 Sass 변수로서, 모든 색상에 새로운 색조와 음영을 추가해 각 기본 색상에 9개의 별도 색상을 제공합니다.

- 색 대비(color contrast)를 개선하였습니다. 색 대비 비율을 3:1에서 4.5:1로 변경하고 WCAG 2.1 AA contrast를 확보하기 위해 blue, green, cyan, pink 색상을 수정하였습니다. 그리고 색 대비에서 사용하는 어두운 색($color-contrast-dark)을 `$gray-900`에서 `$black`으로 변경하였습니다.

- 색상을 적절하게 혼합한 새로운 사용자 정의 `tint-color()`와 `shade-color()` 함수를 사용해 컬러 시스템을 지원합니다.

## Grid updates

- **새로운 브레이크 포인트!** `1400px` 이상의 경우, 새로운 `xxl` 브레이크 포인트를 추가. 다른 브레이크 포인트는 변경 없이 그대로.

- **개선된 거터.** 거터는 rem 단위로 설정되어, v4 보다 좁아졌습니다 (`1.5rem`, 혹은 약 `24px`, `30px`에서 감소). 이로 그리드 시스템의 거터가 여백 유틸리티와 일치 되었습니다.
  - 수평/수직 거터, 수평 거터, 그리고 수직 거터를 제어하는 새로운 [gutter class](https://getbootstrap.com/docs/5.0/layout/gutters/)(`.g-*`, `.gx-*`, 그리고 `.gy-*`)가 추가 되었습니다.
  - <span class="badge bg-danger">Breaking</span> 새로운 거터 클래스에 맞춰 기존의 `.no-gutters` 클래스 이름이 `.g-0`으로 변경 되었습니다.

- 컬럼은 더 이상 `position: relative`가 적용되지 않기 때문에 필요에 따라 해당 동작을 위해 요소에 `.position-relative` 클래스를 추가해 사용할 필요가 있습니다.

- <span class="badge bg-danger">Breaking</span> 자주 사용되지 않는 몇몇 `.order-*` 클래스를 삭제하였습니다. 현재는 `.order-1` 부터 `.order-5`까지의 클래스만 제공하고 있습니다.

- <span class="badge bg-danger">Breaking</span> 유틸리티로 쉽게 복제 할 수 있는 `.media` 클래스를 삭제 하였습니다. [#28265](https://github.com/twbs/bootstrap/pull/28265)와 [flex utilities page for an example]({{< docsref "/utilities/flex#media-object" >}})을 참조해 주세요.

- <span class="badge bg-danger">Breaking</span> 이제 `bootstrap-grid.css`에서는 global box-sizing을 리셋하는 대신, `box-sizing: border-box`만 적용합니다. 그렇게 함으로써 그리드 스타일을 더 많은 곳에서 간섭 없이 사용할 수 있습니다.

- `$enable-grid-classes`에서는 컨테이너 클래스의 생성을 비활성화 시키지 않습니다. [#29146.](https://github.com/twbs/bootstrap/pull/29146)

- 사이즈를 지정하지 않아도 기본적으로 균등한 열이 되도록 `make-col` 믹스인을 업데이드 하였습니다.

## Content, Reboot, etc

- **[RFS]({{< docsref "/getting-started/rfs" >}})가 기본으로 활성화 되었습니다.** Headings using the `font-size()` 믹스인을 사용한 제목은 뷰포트에 맞추어 자동적으로 `font-size`를 조정합니다. _이 기능은 이전에 v4에서 옵트인 이었습니다._

- <span class="badge bg-danger">Breaking</span> `$display-*` 변수를 바꾸기 위해 디스플레이 타이포그래피를 정비하고 `$display-font-sizes` Sass 맵을 사용합니다. 또한 `$display-*-weight` 변수를 삭제하고 단일 `$display-font-weight`로 변경하여 글꼴의 크기를 조정했습니다.

- 새로운 `.display-*` 크기로, `.display-5`와 `.display-6`를 추가했습니다.

- 특정 컴포넌트의 일부가 아닌 한 (호버 뿐만 아니라)**기본 링크에 밑줄 추가**

- 스타일을 새롭게 고치기 위해 **테이블 디자인이 변경**되고 CSS 변수를 사용하여 스타일을 보다 효과적으로 제어 할 수 있도록 재구성되었습니다.

- <span class="badge bg-danger">Breaking</span> 중첩된 테이블이 스타일을 상속받지 않게 되었습니다.

- <span class="badge bg-danger">Breaking</span> `.thead-light`과 `.thead-dark`은 삭제되고, 모든 테이블 요소(`thead`, `tbody`, `tfoot`, `tr`, `th`, `td`)에 사용할 수 있는 `.table-*` 변형 클래스로 변경되었습니다.

- <span class="badge bg-danger">Breaking</span> `table-row-variant()` 믹스인은 `table-variant()`으로 이름이 변경되며 2개의 매개 변수 `$color` (colon name)와 `$value` (color code)만 받습니다. 보더 컬러와 엑센트 컬러는 테이블 인자 변수에 따라 자동으로 계산됩니다.

- 테이블 셀의 패딩 변수를 `-y`와 `-x`로 분할 했습니다.

- <span class="badge bg-danger">Breaking</span> `.pre-scrollable` 클래스 삭제. [#29135](https://github.com/twbs/bootstrap/pull/29135)

- <span class="badge bg-danger">Breaking</span> `.text-*` 유틸리티는 링크에 호버와 포커스 상태를 추가하지 않습니다. 대신 `.link-*` 도우미 클래스를 사용할 수 있습니다.[#29267](https://github.com/twbs/bootstrap/pull/29267)

- <span class="badge bg-danger">Breaking</span> `.text-justify` 클래스 삭제. [#29793](https://github.com/twbs/bootstrap/pull/29793)

- `<ul>`과 `<ol>` 요소의 수평 방항에 설정된 `padding-left`를 브라우저의 기본 `40px`에서 `2rem`으로 변경.

- `prefers-reduced-motion` 미디어 쿼리를 통해 움직임을 억제하는 사용자를 제외하고 글로벌하게 `scroll-behavior: smooth`를 적용하는 `$enable-smooth-scroll`를 추가. [#31877](https://github.com/twbs/bootstrap/pull/31877)

## RTL

- 수평 방항으로 특화된 변수, 유틸리티 그리고 믹스인의 이름이 플레스 박스의 레이아웃에서 볼수 있는 - 예를 들어, `left` 와 `right` 대신에 `start`와 `end`과 같이 - 논리적인 속성으로 변경되었습니다.

## Forms

- **새로운 플로팅 폼 추가!** 플로팅 라벨의 예시를 완전히 지원되는 폼 컴포넌트로 승격시켰습니다.[See the new Floating labels page.]({{< docsref "/forms/floating-labels" >}})

- <span class="badge bg-danger">Breaking</span> **네비티브와 사용자 정의 폼 요소의 통합.** 체크박스, 라디오 버튼, 셀렉트등 v4에서 네이티브와 사용자 정의 클래스를 가지고 있던 입력 요소들이 통합되었습니다. 이를 통해 모든 폼 요소가 완전히 커스텀화 되었고, 그 대부분이 사용자 정의 HTML을 필요로 하지 않게 되었습니다.
  - `.custom-check`는 `.form-check`로 변경.
  - `.custom-check.custom-switch`는 `.form-check.form-switch`로 변경.
  - `.custom-select`는 `.form-select`로 변경.
  - `.custom-file`과 `.form-file`은 `.form-control` 위에 사용자 정의 스타일로 변경.
  - `.custom-range`는 `.form-range`로 변경.
  - 네이티브 `.form-control-file`과 `.form-control-range`는 삭제.

- <span class="badge bg-danger">Breaking</span> `.input-group-append`와 `.input-group-prepend`는 삭제. 입력 그룹의 직접 하위 요소로서 버튼과 `.input-group-text`를 추가 할 수 있게 되었습니다.

- 오랫동안 지속 되었던 [Missing border radius on input group with validation feedback bug](https://github.com/twbs/bootstrap/issues/25110)는 유효성 검사 폼에 포함된 입력 그룹에 `.has-validation` 클래스를 추가하는 것으로 겨우 수정 되었습니다.

- <span class="badge bg-danger">Breaking</span> **그리드 시스템을 위한 폼 고유의 레이아웃 클래스 삭제.** `.form-group`, `.form-row`, `.form-inline` 대신 그리드와 유틸리티를 사용해 주세요.

- <span class="badge bg-danger">Breaking</span> 폼 레벨에는 `.form-label`이 필요합니다.

- <span class="badge bg-danger">Breaking</span> `.form-text`는 삭제되어 `display` 되지 않으므로, HTML 요소를 변경하는 것으로 인라인 혹은 블록 도움말 문자를 자유롭게 만들 수 있습니다.

- 유효성 검증 아이콘은 더 이상 `multiple<select>`에 적용되지 않습니다.

- 입력 그룹 스타일을 포함하여, `scss/forms/` 아래의 Sass 파일을 재배치 하였습니다.

<hr class="my-5">

## Components

- 경고창, 브레드크럼, 카드, 드롭다운, 목록 그룹, 모달, 팝오버 그리고 툴팁의 `padding` 값을 `$spacer` 변수를 기반으로 통일. [#30564](https://github.com/twbs/bootstrap/pull/30564).

### Accordion

- [새로운 아코디언 컴포넌트]({{< docsref "/components/accordion" >}}) 추가.

### Alerts

- 경고창에 [아이콘 사용한 예시]({{< docsref "/components/alerts#icons" >}})를 추가.

- 각 경고창에서 `currentColor`를 사용하게 되어 `<hr>` 사용자 정의 스타일은 삭제.

### Badges

- <span class="badge bg-danger">Breaking</span> 배경 유틸리티의 모든 `.badge-*` 색상 클래스 삭제 (예를 들어, `.badge-primary` 대신 `.bg-primary` 사용).

- <span class="badge bg-danger">Breaking</span> `.badge-pill` 삭제 — 대신`.rounded-pill` 유틸리티를 사용해 주세요.

- <span class="badge bg-danger">Breaking</span> `<a>`와 `<button>` 요소에 호버와 포커스 스타일 삭제.

- 배지의 기본 패딩을`.25em`/`.5em` 에서 `.35em`/`.65em`으로 변경.

### Breadcrumbs

- `padding`, `background-color`, 그리고 `border-radius`를 제거하여 브레드크럼의 기본 모양을 단순화 했습니다.

- CSS를 다시 컴파일할 필요 없이 쉽게 재정의 할 수 있도록 새로운 CSS 사용자 정의 속성인 `--bs-breadcrumb-divider`를 추가했습니다.

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
