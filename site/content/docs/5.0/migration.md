---
layout: docs
title: Migrating to v5
description: Bootstrap 의 소스 파일, 문서 및 컴포넌트의 변경 내용을 확인 리뷰함으로써 v4에서 v5로의 변경을 지원합니다.
group: migration
aliases: "/migration/"
toc: true
---

## v5.0.0-beta1

### RTL

**RTL 기능은 여전히 실험적이며 사용자 피드백에 따라 진화할 것입니다.** 무언가를 발견했거나 개선 할 점이 있다면 [이슈]({{< param repo >}}/issues/new)에 등록해 주세요.

#### Sass

수평 방항의 변수명, 유틸리티와 믹스인 이름이 보다 논리적인 이름으로 변경 되었습니다. — `left` 와 `right` 을 `start` 와 `end` 로.

##### Components

- `.dropleft` 와 `.dropright` 를 `.dropstart` 와 `dropend` 로 변경.
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

따라서 브레이크 포인트 변형의 이름도 변경 되었습니다. (eg. `.text-md-left`가 `.text-md-start` 로 변경).

##### Mixins

- `border-left-radius()` 와 `border-right-radius()` 이 `border-start-radius()` 와 `border-end-radius()` 으로 변경 — 과 함께 그들의 모서리 변형들도 (eg. `.border-bottom-left-radius` 이 `.border-bottom-start-radius` 으로 변경 되었습니다).
- `caret-left()` 과 `caret-right()` 이 `caret-start()` 과 `caret-end()` 으로 변경 — 그 후, `caret()` 의 믹스인은 `left` 과 `right` 대신 `start` 과 `end` 을 인수로 받게 되었습니다.

##### Variables

- RTL 로 다른 breadcrumb(브레드크럼)의 분리기호가 필요한 경우를 위해, 새로운 `$breadcrumb-divider-flipped` 을 추가했습니다.
- `$navbar-brand-margin-right` 가 `$navbar-brand-margin-end` 으로 변경.
- `$pagination-margin-left` 가 `$pagination-margin-start` 으로 변경.
- `$form-check-padding-left` 가 `$form-check-padding-start` 으로 변경.
- `$form-switch-padding-left` 가 `$form-switch-padding-start` 으로 변경.
- `$form-check-inline-margin-right` 가 `$form-check-inline-margin-end` 으로 변경.
- `$form-select-feedback-icon-padding-right` 가 `$form-select-feedback-icon-padding-end` 으로 변경.


### JavaScript

- 모든 JavaScript 플러그인의 data 속성은 자체 코드와 Bootstrap 기능이 구분되도록 기존의 `data-toggle`의 이름이 `data-bs-toggle` 로 변경 되었습니다.
- 업데이트 Popper v2.x:
  - Tooltip/Popover 과 Dropdown 플러그인에서 `offset` 옵션을 삭제했습니다.
  - `fallbackPlacement` 옵션명이 `fallbackPlacements` 으로 변경 되었습니다.

### Sass

- Sass 의 독자적인 스케일링 함수와 충돌을 피하기 위해 `scale-color()` 함수명이  `shift-color()` 으로 변경 되었습니다.

### Utilities

- absolute/fixed 위치에 있는 요소를 수평 또는 수직의 가운데 배치 시키기 위해 `.translate-middle-x` 과 `.translate-middle-y` 의 새로운 유틸리티가 추가 되었습니다.

### Components

#### Breadcrumbs

- 기본적으로 가지고 있던 `padding`, `background-color`, `border-radius` 의 스타일을 삭제해 보다 심플해 졌습니다.
- CSS 를 컴파일하지 않고 쉽게 사용자가 지정할 수 있도록 `--bs-breadcrumb-divider` 가 추가 되었습니다.

#### Toasts

- [Positioning utilities]({{< docsref "/utilities/position" >}}) 를 이용해 토스트를  `.toast-container` 에 배치 시킬수 있게 되었습니다.

## v5.0.0-alpha3

### Browser support

- Microsoft Edge Legacy 지원을 하지 않습니다. 이전 브라우저 지원의 변경 내용을 확인하려면 [여기](#browser-support-1)를 참조 해 주십시오.

### Sass

- `color-level()` 과 `$theme-color-interval` 으로 작동하던 컬러 시스템은 삭제되고, 새로운 컬러 시스템이 적용 되었습니다. 코드의 기본인 `lighten()` 과 `darken()` 의 함수는 모두 `tint-color()` 과 `shade-color()` 으로 바뀝니다. 이들의 함수는, 색의 명도를 일정량만 변화시키는 것이 아니라, 흰색 또는 검은색 중 한쪽을 섞습니다. `scale-color()` (Beta 1에서는 `shift-color()` 로 변경)는,  그것의 중요한 파라미터 값이 양수인지 음수인지에 따라 색상을 바꿀지 색을 진하게 할지를 결정합니다. [#30622](https://github.com/twbs/bootstrap/pull/30622).
- 스피너는 이제 애니메이션을 느리게 함으로써 `prefers-reduced-motion: reduce` 를 받아들이게 되었습니다. [#31882](https://github.com/twbs/bootstrap/pull/31882).

### Reboot

- `$enable-smooth-scroll` 를 도입해, `prefers-reduced-motion` 미디어 쿼리를 사용해 움직임의 축소를 원하는 사용자를 제외하고는 `scroll-behavior: smooth` 가 전체적으로 적용되도록 하였습니다. [#31877](https://github.com/twbs/bootstrap/pull/31877)

### Buttons

- [`.btn-block` 클래스를 삭제하고, grid 유틸리티 클래스를 사용하도록 하였습니다.]({{< docsref "/components/buttons#block-buttons" >}}) 각 버튼에 `.btn-block` 을 적용하는 대신에, 버튼 그룹의 부모를 `.d-grid` 클래스로 감싸주고, 간격으로는 `.gap-*` 유틸리티틑 사용할 수 있게 되었습니다. 각각의 "block buttons" 에는 `.w-100` 을 추가해 주십시오.

### Forms

- 오래된 버그였던 [input group 과 함께 사용한 유효성 검사 input 의 반지름이 일부 표시되지 않았던](https://github.com/twbs/bootstrap/issues/25110) 이슈는  `.has-validation` 클래스를 추가하는 것으로 최종적으로 수정 되었습니다.
- Floating labels를 완전히 지원할 수 있도록 form component 에 추가시켰습니다. [페이지 확인하러 가기]({{< docsref "/forms/floating-labels" >}})
- File input 은 앞으로 `.form-control` 클래스를 사용하며, JavaScript, 추가 HTML, 또는 추가 클래스가 필요하지 않습니다. [#31955](https://github.com/twbs/bootstrap/pull/31955).
- Color input의 `.form-control-color` 클래스 안에 `cursor:pointer` 를 추가 했습니다.

### Utilities

- **Text 유틸리티:**
  - `font-size` 유틸리티 (RFS 활성화 한 상태)용으로 `.fs-*` 유틸리티를 추가 했습니다. 이들은 HTML 의 기본 타이틀과 같은 축척(h1-h6, large, small)을 사용하고 Sass map 을 통해 변경할 수 있습니다.
  - 기존 `.font-weight-*` 유틸리티의 이름이 `.fw-*` 으로 변경 되었습니다.
  - 기존 `.font-style-*` 유틸리티의 이름이 `.fst-*` 으로 변경 되었습니다.
- Display 유틸리티에 `.d-grid` 가 추가 되었습니다.
- Grid layout용으로 새로운 `gap` 유틸리티 (`.gap`) 가 추가 되었습니다.

## v5.0.0-alpha2

### Sass

- `border-radius` 에 기본 매개 변수가 추가 - [#31571](https://github.com/twbs/bootstrap/pull/31571).
- `xs` 브레이크 포인트만을 타겟으로 했을 경우, 다음의 브레이크 포인트가 업데이트 되도록. [#31500](https://github.com/twbs/bootstrap/pull/31500).
- `box-shadow` 믹스인에서 `null` 값을 허용하게 하여, 복수의 인수에서 `none` 을 삭제하지 않습니다. - [#30394](https://github.com/twbs/bootstrap/pull/30394).

### Docs

- "Navs" 메뉴가 "Navs & Tabs" 으로 변경 되었습니다.
- "Screen readers" 메뉴가 helper 페이지로 이동되어 "Visually hidden" 으로 변경 되었으며, 파일이름과 클래스 이름도 함께  `visually-hidden` 으로 변경 되었습니다.
- "Checks" 페이지가 "Checks & radios" 으로 변경되면서 파일 이름도 `checks-radios`으로 변경 되었습니다.
- Check/radio 문서가 업데이트 되었습니다. (Checks 에 있던 버튼관련 내용은 button groups 로 이동)
- Skip links 의 문서가 개선되었습니다.
- 모바일에서 더 큰 탭 대상을 위해 docs navigation 의 재설계 및 간소화 된 subnav.
- [#31114](https://github.com/twbs/bootstrap/pull/31114): 접근성과 관련된 양식 문서가 개선 되었습니다.

### Layout

- Container 의 수평 패딩이 `.row` 의 gutter 크기에 맞게 업데이트 되었습니다.
- [#31439](https://github.com/twbs/bootstrap/pull/31439): grid 동작의 퇴보로 인해 행에서 `flex: 1 0 100%` 가 삭제 되었습니다.

### Reboot

- `font-weight` 의 기본 값 `null` 을 사용하여 명시적으로 설정하는게 아니라 `text-align` 을 이어 받도록 `th` 업데이트.

### Colors

- 색 대비 비율을 3:1 에서 4.5:1 로 변경 했습니다.
- 색 대비에서 사용하던 `$gray-900` 을 `$black` 으로 바꿨습니다.
- `$green` (혹은 테마명으로는 `$success`) 색을 개선해, 색 대비가 적어지도록 했습니다. (`#28a745` 에서 `#198754` 으로 변경).
- `$cyan` (혹은 테마명으로는 `$info`) 색을 보다 선명한 색으로 개선 했습니다. (`#17a2b8` 에서 `#0dcaf0` 으로 변경).

### Forms

- [#31383](https://github.com/twbs/bootstrap/pull/31383): 체크 버튼과 라디오 버튼의 크기를 `1.25em` 에서 `1em` 으로 변경하고, `$font-size-base` 을 사용해 확장성을 높히게 하였습니다.

### Components

#### Badges

- [#31132](https://github.com/twbs/bootstrap/pull/31132): Badge(배지)의 기본 패딩을 `.25em`/`.5em` 에서 `.35em`/`.65em` 으로 변경 하였습니다.

#### Buttons

- [#30639](https://github.com/twbs/bootstrap/pull/30639): 버튼의 비활성화(Disabled) 상태는 `button-variant()` 믹스인의 인수를 추가함으로써 사용자 지정이 쉬워졌습니다.
- [#30989](https://github.com/twbs/bootstrap/pull/30989): 버튼을 업데이트 해, 호버와 활성화 된 생태의 색 대비를 향상 시켰습니다.

#### Carousel

- Carousel(캐러셀)에 사용하는 chevron 아이콘을 [Bootstrap Icons]({{< param "icons" >}}) 의 새로운 SVG 로 업데이트 했습니다.
- 어두운 텍스트, 컨트롤, 표시 위한 새로운 [`.carousel-dark`]({{< docsref "/components/carousel#dark-variant" >}}) 을 추가하였습니다. (밝은 배경에 최적).

#### Close button

- `.close` 가 `.btn-close` 로 바꿔 보다 일반적인 이름이 되었습니다.
- 닫기 버튼은 HTML 안에서 기존의 `&times;` 대신 `background-image` (내장 SVG)를 사용하게 되어, 마크업을 수정없이 쉽게 커스터마이즈 할 수 있게 되었습니다.
- `.btn-close-white` 를 새롭게 추가하여 `filter: invert(1)` 을 사용해, 어두운 배경에서도 보다 높은 대비로 아이콘을 없앨수 있게 되었습니다.

#### Collapse

- [#31346](https://github.com/twbs/bootstrap/pull/31346): 아코디언(accordion)의 스크롤 앵커링(scroll anchoring)을 삭제 했습니다.

#### Dropdowns

- 다크모드에 사용할 수 있는 새로운`.dropdown-menu-dark` 를 추가 하였습니다.
- `$dropdown-padding-x` 를 새롭게 추가 하였습니다.
- 색 대비 개선을 하기 위해, 드롭다운의 구분선을 어둡게 했습니다.

#### Navs

- [#31035](https://github.com/twbs/bootstrap/pull/31035): `.nav-link` 클래스에 `font-size`, `font-weight`, `color`, `:hover` `color` 의 새로운 변수 `null` 을 추가 하였습니다.

#### Pagination

- Pagination 링크에 `transition` 을 추가 하였습니다. [#31396](https://github.com/twbs/bootstrap/pull/31396).

#### Popovers

- `whiteList` 의 옵션명을 `allowList` 으로 변경 하였습니다.

#### Toasts

- [#31109](https://github.com/twbs/bootstrap/pull/31109): 토스트의 기본 시간을 5 초로.
- [#31155](https://github.com/twbs/bootstrap/pull/31155): 토스트를 표시하기 전에 `timeout` 을 지운다.
- [#31381](https://github.com/twbs/bootstrap/pull/31381): 토스트에서 `overflow: hidden` 을 삭제하고 적절한 `border-radius` 를 `calc()` 함수로 대채하도록 하였습니다.
- 토스트 사용자 정의 및 테마 지정 방법을 위한 추가 예제를 포함하도록 문서를 업데이트.

#### Tooltips

- `whiteList` 의 옵션명을 `allowList` 으로 변경 하였습니다.

### Helpers

- Responsive embed 이름이 [ratio]({{< docsref "/helpers/ratio" >}}) 로 변경되어, 새로운 클래스명과 동작으로 개선 되었습니다.
  - 가로세로 비율의 의미로 클래스명에 함께 사용된 `by` 가 `x` 로 변경 되었습니다. 예를 들어, `.ratio-16by9` 는`.ratio-16x9` 으로.
  - `.embed-responsive-item` 과 요소의 그룹 셀렉터를 삭제하고, 보다 심플한 `.ratio > *` 의 셀렉터로 변경 되었습니다. 이 이상의 클래스는 필요 없으며, ratio helper 는 어떤 HTML 요소에서도 동작하도록 되었습니다.
  - `$embed-responsive-aspect-ratios` 가 `$aspect-ratios` 로 이름이 변경되어, 그 값이 단순화되고, 클래스명과 백분율이 `key: value` 의 짝으로 포함 되었습니다.
  - CSS 변수가 생성되어, Sass map 의 각 값에 포함되게 되었습니다. `.ratio` 의 변수 `--aspect-ratio` 을 변경하여, 임의의 [custom aspect ratio]({{< docsref "/helpers/ratio#custom-ratios" >}}) 을 작성할 수 있게 하였습니다.
- "Screen reader" 클래스를 ["visually hidden"]({{< docsref "/helpers/visually-hidden" >}})  클래스로 변경 하였습니다.
  - Sass 파일을 `scss/helpers/_screenreaders.scss` 에서 `scss/helpers/_visually-hidden.scss` 으로 변경.
  - `.sr-only` 와 `.sr-only-focusable` 의 이름을 `.visually-hidden` 과 `.visually-hidden-focusable` 으로 변경.
  - `sr-only()` 와 `sr-only-focusable()` 의 믹스인 이름에서 `visually-hidden()` 과 `visually-hidden-focusable()` 으로 변경.

### Utilities

- [#31280](https://github.com/twbs/bootstrap/pull/31280) : [Position utilities]({{< docsref "/utilities/position#arrange-elements" >}}) 의 새로운 유틸리티 `top`, `right`, `bottom`, `left` 가 추가 되었습니다. 각각의 속성으로는 `0`, `50%`, `100%` 가 있습니다.
  - 또한 요소가 배치되어 있을때 센터링을 주기 위한 `translate` 유틸리티가 새롭게 추가 되었습니다.
  - 이를 보여주기 위해 몇 가지의 예시가 문서에 추가 되었습니다.
- [#31484](https://github.com/twbs/bootstrap/pull/31484): 새로운 [`border-width`]({{< docsref "/utilities/borders#border-width" >}}) 유틸리티 추가 .
- [#31473](https://github.com/twbs/bootstrap/pull/31473): `.d-none` 유틸리티의 순서가 CSS 내에서 변경 되었습니다.
- `.text-monospace` 클래스명이 `.font-monospace` 으로 변경 되었습니다.
- `.text-hide` 클래스명이 삭제 되었습니다. 이것은 더이상 사용하지 않는 텍스트를 숨기기 위해 사용되었던 오래전 방법입니다.
- 새로운 `line-height` 유틸리티 : `.lh-1`, `.lh-sm`, `.lh-base`, `.lh-lg`. [자세히 보기]({{< docsref "/utilities/text#line-height" >}}).

---

## v5.0.0-alpha1

### Browser support

현재 Bootstrap 5 에서 지원하는 브라우저의 상세 내용은 브라우저와 디바이스 페이지를 참조해 주십시오. V4 이후, 브라우저 지원에 대한 변경은 아래와 같습니다:

- Internet Explorer 10 과 11 의 지원을 하지 않습니다.
- Microsoft Edge < 16 의 지원을 삭제.
- Firefox < 60 의 지원을 삭제.
- Safari < 10 의 지원을 삭제.
- iOS Safari < 10 의 지원을 삭제.
- Chrome < 60 의 지원을 삭제.
- Android < 6 의 지원을 삭제.

### Sass

Sass 파일과 컴파일된 CSS 를 변경 하였습니다.

- `hover`, `hover-focus`, `plain-hover-focus`, `hover-focus-active` 믹스인을 삭제했습니다. 앞으로는 일반 CSS 구문을 사용하시기 바랍니다. [#28267](https://github.com/twbs/bootstrap/pull/28267).
- 이전에 비권장했던 믹스인 삭제
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (또한, 관련 유틸리티 `.text-hide` 클래스도 삭제했습니다)
  - `visibility()`
  - `form-control-focus()`
- Forms 소스 파일을 `scss/forms/` 아래로 재배치. [자세한 내용은 폼 섹션을 참조해 주십시오.](#forms)
- 인쇄 스타일과 `$enable-print-styles` 변수를 삭제. 그러나 인쇄 표시 클래스는 그대로 남아있습니다. [#28339](https://github.com/twbs/bootstrap/pull/28339).
- `color()`, `theme-color()`, `gray()` 함수를 변수로 변경. [#29083](https://github.com/twbs/bootstrap/pull/29083)
- `theme-color-level()` 함수 이름이 `color-level()` 로 변경되며, `$theme-color` 의 색만이 아니라 임의의 색을 받게 되었습니다. [#29083](https://github.com/twbs/bootstrap/pull/29083) **주의:** `color-level()` 은 `v5.0.0-alpha3` 이후에 삭제되었습니다.
- `$enable-grid-classes` 는 컨테이너 클래스 생성을 해제하지 않습니다. [#29146](https://github.com/twbs/bootstrap/pull/29146)
- 간결하게 하기 위해 `$enable-prefers-reduced-motion-media-query` 와 `$enable-pointer-cursor-for-buttons` 의 이름을 `$enable-reduced-motion` 와 `$enable-button-pointers` 으로 변경.
- 코드 베이스를 심플하게 하기 위해서, 몇 가지의 컴포넌트에서 행의 높이를 삭제 했습니다. `button-size()` 나 `pagination-size()` 는 line-height 의 파라미터를 받지 않게 되었습니다. [#29271](https://github.com/twbs/bootstrap/pull/29271)
- 믹스인 `button-variant()` 는 버튼 상태마다 `color-contrast()` 에서 제공되는 색상을 오버라이드 하기 위한 3가지 옵션의 색상 파라미터를 받게 되었습니다. 자연스럽게 이들 파라미터는 `color-contrast()` 으로 버튼 배경색에 대해 어느 색상이 보다 색대비가 좋은지를 찾아냅니다.
- 믹스인 `button-outline-variant()` 는, 버튼의 액티브한 상태의 텍스트 컬러를 설정하기 위해 추가의 인수 `$active-color` 를 받습니다. 자연스럽게 이 파라미터는 `color-contrast()` 으로 버튼의 액티브한 배경색에 대해 어느 색상이 보다 색대비가 좋은지를 찾아냅니다.
- Sass map Merge 를 없애, 장황한 값을 간단히 삭제할 수 있게 되었습니다. 단, `$theme-colors` 와 같이 Sass map 에서 모든 값을 정의해야 하는 것에 주의해 주십시오. [Sass maps]({{< docsref "/customize/sass#maps-and-loops" >}}) 의 취급 방법에 대해서는 여기를 참조해 주세요.
- `color-yiq()` 함수와 관련된 변수는 YIQ 색공간과는 관계가 없어져 `color-contrast()` 로 이름을 변경 하였습니다. [#30168.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold` 가 `$min-contrast-ratio` 으로 명칭이 변경 되었습니다.
  - `$yiq-text-dark` 과 `$yiq-text-light` 는 각각 `$color-contrast-dark` 과 `$color-contrast-light` 으로 변경 되었습니다.
- 그라데이션 사용을 한다면, 선형 그라데이션은 간략화 되었기 때문에, `gradient-bg()` 에서는 옵션의 `$color` 파라미터만 받습니다.
- `.bg-gradient-*` 클래스 대신, `.bg-gradient` 클래스를 사용하여 요소에 그라데이션을 추가할 수 있게 되었으므로 `bg-gradient-variant()` 믹스인은 삭제 되었습니다.
-  `media-breakpoint-down()` 는 다음의 브레이크 포인트 대신에 그 브레이크 포인트 자체를 사용합니다. 브레이크 포인트 `lg` 보다 작은 뷰포트를 타겟으로 하려면, `media-breakpoint-down(md)` 대신에 `media-breakpoint-down(lg)` 를 사용하십시오.
- 또한 `media-breakpoint-between()` 믹스인의 두번째 파라미터는 다음의 브레이크 포인트 대신 브레이크 포인트 자체를 사용합니다. 브레이크 포인트 `sm` 과 `lg` 사이의 뷰포트를 대상으로 하려면 `media-breakpoint-between(sm, md)` 대신에 `media-between(sm, lg)` 를 사용하십시오.
- `box-shadow()` 믹스인은 `none` 과 `null` 를 복수의 인수로 지원하게 되었습니다. 이로 인해, 복수의 인수에 어느쪽 값을 줘도 동일한 결과를 얻을 수 있습니다. [#30394](https://github.com/twbs/bootstrap/pull/30394).
- 각 `border-radius()` 믹스인에는 기본값이 설정되게 되었습니다.  Border radius 값을 지정하지 않고 믹스인을 사용하면 `$border-radius` 변수가 사용되어 집니다.[#31571](https://github.com/twbs/bootstrap/pull/31571)

### JavaScript

소스와 컴파일된 자바스크립트 파일의 변경.

- jQuery 를 중단하고 플러그인을 일반 JavaScript 로.
- `_getInstance()` → `getInstance()` 와 같이 public static method 에서 underscore 삭제.

### Color system

컬러 시스템을 업데이트하여 색대비를 향상시켜 보다 풍부한 컬러세트를 제공합니다.

- WCAG 2.1 AA 콘트라스트를 확보하기 위해 블루와 핑크의 베이스 컬러(`-500`) 를 업데이트 시켰습니다.
- 모든 색상에 새로운 색감과 쉐이드를 추가하여, 각 베이스 컬러에 9 가지 독립된 색상을 새로운 Sass 변수로 제공하였습니다.
- 컬러 시스템을 지원하기 위해 새로운 커스텀의 `tint-color()` 과 `shade-color()` 함수를 추가해 색을 적절히 섞었습니다.

### Grid and layout

레이아웃과 그리드 시스템의 변경.

- 유틸리티 클래스로 적절히 섞어 사용할 수 있기 때문에 `.media` 컴포넌트를 업앴습니다.[#28265](https://github.com/twbs/bootstrap/pull/28265).
- 그리드 컬럼에서 `position: relative` 를 삭제했습니다.
- 수평 패딩은 열 자체가 아닌 행 안의 자식 요소들에게 직접 주게 됩니다.
  - 이로써 코드는 심플해 집니다.
  - 컬럼 클래스는 단독으로 사용할 수 있게 됩니다. `.row` 밖에서 사용된 경우에는 항상 수평방향의 패딩이 추가되지 않습니다.
- 반응형 거터(gutter) 클래스는 수평, 수직 또는 양방향의 거터폭을 제어하는데 사용 가능합니다.
- 거터폭은 `rem` 으로 설정되어 `30px` 에서 `1.5rem` (24px) 으로 작아졌습니다.
- `bootstrap-grid.css` 는 글로벌 box-sizing 을 리셋하는 대신, `box-sizing: border-box` 를 컬럼에만 적용하게 되었습니다. 이를 통해 각 요소에 `box-sizing: border-box` 가 적용되지 않아도 그리드 시스템을 사용할 수 있습니다.

### Content, Reboot, etc

Reboot, 타이포그래피, 테이블 등과 같은 변경사항.

- 자동 글꼴 사이즈 변경을 위한 [RFS]({{< docsref "/getting-started/rfs" >}}) 가 활성화 되었습니다. [#29152](https://github.com/twbs/bootstrap/pull/29152)
- `<ul>` 과 `<ol>` 요소의 기본 `padding-left` 를, 브라우저의 기본값 `40px` 에서 `2rem` 으로 리셋.
- 테이블 스타일이 간소화 되고 셀 패딩이 강화 되었습니다. (홀수 탑보더 삭제)
- 중첩된 테이블은 스타일을 상속받지 않습니다.
- `.thead-light` 과 `.thead-dark` 는 없어지고 모든 테이블 요소 (`thead`, `tbody`, `tfoot`, `tr`, `th` 와 `td`)에 사용할 수 있습니다. `.table-*` 변형 클래스가 추가 되었습니다.
- `table-row-variant()` 믹스인은 `table-variant()` 로 이름이 바뀌며 2개의 파라미터 `$color`(컬러 이름) 과 `$value`(컬러 코드) 만 받습니다. 보더 컬러와 엑센트 컬러는 테이블 인자 변수에 따라 자동으로 계산됩니다.
- 테이블 셀 패딩 변수를 `-y` 와 `-x` 로 분할.
- `.pre-scrollable` 클래스 삭제. [#29135](https://github.com/twbs/bootstrap/pull/29135)
- `.text-*` 유틸리티는 링크에 hover 나 focus 의 상태를 추가하지 않습니다. 대신에 `.link-*` 헬퍼 클래스를 사용할 수 있습니다. [#29267](https://github.com/twbs/bootstrap/pull/29267)
- `.text-justify` 클래스를 삭제. [#29793](https://github.com/twbs/bootstrap/pull/29793)

### Typography

- 새 `$display-font-sizes` Sass map 을 위해 `$display-*` 변수를 삭제.
- 단일의 `$display-font-weight` 때문에 각각의 `$display-*-weight` 변수를 삭제.
- 두개의 새로운 `.display-*` 제목 스타일의 `.display-5` 과 `.display-6` 를 추가.
- 기존 디스플레이 타이틀의 사이즈를 변경하여 보다 일관성 있는 `font-size` 세트로.
- 링크는 특정 컴포넌트의 일부가 아닌 한, 기본값으로 밑줄이 그어집니다.(hover 뿐만이 아닙니다)

### Forms

- 폼 문서를 자체 최상위 섹션으로 재배치.
  - 오래된 폼 페이지를 여러 개의 서브 페이지로 분할.
  - Input group 의 문서를 새 폼 섹션 아래로 이동.
- Input group 스타일 이동을 포함하여 `scss/forms/` 아래로 Sass 파일을 재편성.
- 네이티브 및 커스텀 체크박스와 라디오를 단일 `.form-check` 클래스로 정리.
  - 새로운 체크는 `em`/`font-size` 나 명시적인 변경 수정 클래스에 의한 사이즈 조정을 지원.
  - 새로운 체크는 디폴트로 크게 표시되어 조작성이 향상.
  - `.custom-control` 과 그 관련 클래스가 삭제.
  - `$custom-control` 변수의 이름이 `$form-control` 변수로 변경.
- 네이티브 셀렉트와 커스텀 셀렉트를 `.form-select` 로 통합.
  - `.custom-select` 와 그 관련 클래스가 삭제.
  - `$custom-select` 변수의 이름이 `$form-select` 변수로 변경.
- File input 컴포넌트가 업데이트되어 전체적인 디자인은 동일하나 HTML 이 개선.
  - `.form-file` 마크업을 리팩터링을 하여 몇 가지 시각적 버그를 수정하였으며 번역이나 버튼의 텍스트를 CSS 가 아닌 HTML 로 변경할 수 있도록 하였습니다.
  - 네이티브의 `.form-control-file` 과 `.form-control-range` 컴포넌트를 완전히 삭제하였습니다.
  - `.custom-file` 이 `.form-file` (변수 포함)로 이름 변경. **주의점:** `.form-file` 은 `v5.0.0-alpha3` 이후 폐지되어, `.form-control` 을 사용할 수 있게 되었습니다.
  - `:focus` 와 `:disabled` 스타일 지원 추가.
- `.custom-range` 이 `.form-range` (변수 포함)으로 이름 변경.
- 마진 유틸리티를 위해 `.form-group` 를 삭제. (문서 예제에는 `.mb-3` 을 사용).
- 보다 유연한 그리드 거터를 위해 `.form-row` 삭제.
- 보다 유연한 그리드를 위해 `.form-inline` 삭제.
- `.input-group` 안에 사용했던 `.form-control-plaintext` 지원 삭제.
- `.input-group-append` 과 `.input-group-prepend` 삭제. 버튼이나 `.input-group-text` 를 입력 그룹에 바로 자식요소로 추가할 수 있게 되었습니다.
- Form label 에는 `.form-label` 클래스가 필요해졌습니다. Sass 변수를 사용하여 폼 라벨의 스타일을 설정할 수 있게 되었습니다. [#30476](https://github.com/twbs/bootstrap/pull/30476)

### Components

- 경고창, 브래드크럼, 카드, 드롭다운, 목록 그룹, 모달, 팝오버, 툴팁의 `padding` 값을 `$spacer` 변수를 기반으로 통일했습니다. [#30564](https://github.com/twbs/bootstrap/pull/30564).

#### Disabled states

- 버튼, 닫기 버튼, 페이지 네이션 링크, 폼 레인지의 비활성화 상태에는 `pointer-events: none` 이 추가 되었습니다. 이로써 코드 베이스가 간소화되었고, CSS 에서 액티브한 상태를 쉽게 오버라이드 할 수 있게 되었습니다. [#29296](https://github.com/twbs/bootstrap/pull/29296).

#### Alerts

- `.alert-*` 클래스 변수내의 `<hr>` 요소의 자동 암시화를 삭제했습니다. `<hr>` 은 `rgba()` 를 사용하고 있기 때문에, 이들은 자연스럽게 조화를 이룰 것입니다.

#### Badges

배지는 버튼과의 차별화를 통해 유틸리티 클래스를 보다 효율적으로 활용하기 위해 전면적으로 개선되었습니다.

- `.badge` 수정 클래스를 삭제하고 배경 유틸리티 클래스로 대체했습니다. (예 : `.bg-primary` 대신에 `.badge-primary` 를 사용)
- `.badge-pill` 를 삭제하고 `.rounded-pill` 유틸리티 클래스로 변경했습니다.
- `a.badge` 와 `button.badge` 의 배지의 hover/focus 스타일을 삭제했습니다.

#### Buttons

- 체크박스/라디오의 토글은 버튼 플러그인에서 삭제되어 CSS 로만 해결 되었습니다. 이에 대해서는 [form checks/radios]({{< docsref "/forms/checks-radios#toggle-buttons" >}}) 문서에 기재되어 있습니다. `.btn-check` 클래스는 입력에 추가할 수 있으며 `.btn` 과 수정 클래스를 가진 임의의 클래스는 라벨의 테마로써 사용할 수 있습니다. [#30650](https://github.com/twbs/bootstrap/pull/30650).

#### Cards

- 카드 컬럼을 삭제하고 Masonry 그리드로 변경 [#28922](https://github.com/twbs/bootstrap/pull/28922).
- 카드 데크를 삭제해, 그리드를 추가하는 것으로 반응형 동작의 유연성을 높혔습니다.

#### Jumbotron

- Jumbotron 컴포넌트는 삭제되고 배경색을 위한 `.bg-light` 나 패딩을 제어하기 위한 `.p-*` 같은 유틸리티 클래스가 추가 되었습니다.

#### Navbars

- 모든 내비바는 내부에 컨테이너가 필요해 졌습니다. 이에 따라 spacing 요건이 대폭 간소화 되었으며 v4 에서 반응형 컨테이너를 위해 추가한 대규모 CSS 오버라이드가 불필요해 졌습니다.

#### Pagination

- 페이지네이션 링크는 원하는 `margin-left` 를 가지게 되어 서로 떨어져 있을 때는 모든 모서리가 동적으로 둥글어 지게 되었습니다.

#### Popovers

- `.arrow` 이 `.popover-arrow` 로 이름 변경.

#### Tooltips

- `.arrow` 이 `.tooltip-arrow` 로 이름 변경.

### Accessibility

- 기존의 `.sr-only-focusable` 과는 다르게, `.sr-only` 과 함께 조합해서만 사용 가능 했었지만, `.sr-only-focusable` 은 `.sr-only` 없이 단독 클래스로 사용할 수 있습니다. [#28720](https://github.com/twbs/bootstrap/pull/28720).

### Utilities

### Grid

- 브레이크 포인트마다 반응하는  order 유틸리티의 수를 줄였습니다. 숫자를 가지는 최고 마지막의 유틸리티는 `.order-12` 가 아니고 `.order-5` 가 되었습니다. [#28874](https://github.com/twbs/bootstrap/pull/28874).

### Misc

- `<body>` 의 배경을 빠르게 설정하기 위한 `.bg-body` 를 추가했습니다.
- 마이너스 마진 유틸리티는 비활성화가 기본입니다. `$enable-negative-margins: true` 로 설정하여 사용할 수 있는데, 이로 인해 파일 사이즈가 상당히 커진다는 사실을 기억하시기 바랍니다.

### Docs

- "브라우저 버그의 벽" 페이지가 삭제
- Jekyll 에서 Hugo 로 변경

### Build tools

- 모든 devDependencies 를 업데이트
- 본 글을 쓴 시점에서는 최신 Node.js LTS releases(10 과 12) 만을 지원합니다.
