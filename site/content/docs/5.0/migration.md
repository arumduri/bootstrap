---
layout: docs
title: v5으로 마이그레이션
title_en: Migrating to v5
description: Bootstrap의 소스 파일, 문서 및 컴포넌트의 변경 내용을 확인 리뷰함으로써 v4에서 v5로의 변경을 지원합니다.
group: migration
aliases: "/migration/"
toc: true
---

## 의존성

- 더 이상 jQuery를 사용하지 않음.
- Popper v1.x에서 Popper v2.x로 업그레이드.
- Libsass가 권장되지 않아 Dart Sass로 Sass 컴파일러 변경.
- 문서 작성을 위해 Jekyll에서 Hugo로 이동.

## 브라우저 지원

- Internet Explorer 10 및 11 지원 종료
- Microsoft Edge 16 미만 (Legacy Edge) 지원 종료
- Firefox 60 미만 지원 종료
- Safari 12 미만 지원 종료
- iOS Safari 12 미만 지원 종료
- Chrome 60 미만 지원 종료

<hr class="my-5">

## 문서 변경사항

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

- <span class="badge bg-danger">Breaking</span> Media query mixins parameters have changed for a more logical approach.
  - `media-breakpoint-down()` uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-down(lg)` instead of `media-breakpoint-down(md)` targets viewports smaller than `lg`).
  - Similarly, the second parameter in `media-breakpoint-between()` also uses the breakpoint itself instead of the next breakpoint (e.g., `media-between(sm, lg)` instead of `media-breakpoint-between(sm, md)` targets viewports between `sm` and `lg`).

- <span class="badge bg-danger">Breaking</span> 인쇄 클래스와 `$enable-print-styles` 변수를 삭제하였습니다. 인쇄 표시 클래스는 아직 남아 있습니다. [#28339](https://github.com/twbs/bootstrap/pull/28339).

- <span class="badge bg-danger">Breaking</span> `color()`, `theme-color()`, 그리고 `gray()`의 함수를 폐지하고 변수를 사용하도록 하였습니다.[#29083](https://github.com/twbs/bootstrap/pull/29083).

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

## 색상 시스템

- `color-level()`과 `$theme-color-interval`로 동작하던 컬러 시스템이 삭제되고 새로운 컬러 시스템이 채택 되었습니다. 기본적으로 모든 코드에 사용된 `lighten()`과 `darken()` 함수는 `tint-color()`와 `shade-color()`로 대체 되었습니다. 이 함수는 색의 명도를 일정량 변경하는 대신, 그 색에 흰색이나 검은색을 혼합 합니다. `shift-color()`는 양수 혹은 음수의 weight 매개 변수에 따라 색상을 바꾸거나 음영을 주기도 합니다. [#30622](https://github.com/twbs/bootstrap/pull/30622).

- 새로운 Sass 변수로서, 모든 색상에 새로운 색조와 음영을 추가해 각 기본 색상에 9개의 별도 색상을 제공합니다.

- 색상 대비(color contrast)를 개선하였습니다. 색상 대비 비율을 3:1에서 4.5:1로 변경하고 WCAG 2.1 AA contrast를 확보하기 위해 blue, green, cyan, pink 색상을 수정하였습니다. 그리고 색상 대비에서 사용하는 어두운 색($color-contrast-dark)을 `$gray-900`에서 `$black`으로 변경하였습니다.

- 색상을 적절하게 혼합한 새로운 사용자 정의 `tint-color()`와 `shade-color()` 함수를 사용해 컬러 시스템을 지원합니다.

## 그리드 업데이트

- **새로운 중단점!** `1400px` 이상의 경우, 새로운 `xxl` 중단점를 추가. 다른 중단점는 변경 없이 그대로.

- **개선된 거터.** 거터는 rem 단위로 설정되어, v4 보다 좁아졌습니다 (`1.5rem`, 혹은 약 `24px`, `30px`에서 감소). 이로 그리드 시스템의 거터가 여백 유틸리티와 일치 되었습니다.
  - 수평/수직 거터, 수평 거터, 그리고 수직 거터를 제어하는 새로운 [gutter class](https://getbootstrap.com/docs/5.0/layout/gutters/)(`.g-*`, `.gx-*`, 그리고 `.gy-*`)가 추가 되었습니다.
  - <span class="badge bg-danger">Breaking</span> 새로운 거터 클래스에 맞춰 기존의 `.no-gutters` 클래스 이름이 `.g-0`으로 변경 되었습니다.

- 컬럼은 더 이상 `position: relative`가 적용되지 않기 때문에 필요에 따라 해당 동작을 위해 요소에 `.position-relative` 클래스를 추가해 사용할 필요가 있습니다.

- <span class="badge bg-danger">Breaking</span> 자주 사용되지 않는 몇몇 `.order-*` 클래스를 삭제하였습니다. 현재는 `.order-1` 부터 `.order-5`까지의 클래스만 제공하고 있습니다.

- <span class="badge bg-danger">Breaking</span> 유틸리티로 쉽게 복제 할 수 있는 `.media` 클래스를 삭제 하였습니다. [#28265](https://github.com/twbs/bootstrap/pull/28265)와 [flex utilities page for an example]({{< docsref "/utilities/flex#media-object" >}})을 참조해 주세요.

- <span class="badge bg-danger">Breaking</span> 이제 `bootstrap-grid.css`에서는 global box-sizing을 리셋하는 대신, `box-sizing: border-box`만 적용합니다. 그렇게 함으로써 그리드 스타일을 더 많은 곳에서 간섭 없이 사용할 수 있습니다.

- `$enable-grid-classes`에서는 컨테이너 클래스의 생성을 비활성화 시키지 않습니다. [#29146.](https://github.com/twbs/bootstrap/pull/29146)

- 크기를 지정하지 않아도 기본적으로 균등한 열이 되도록 `make-col` 믹스인을 업데이드 하였습니다.

## 콘텐츠, Reboot 등

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

- **새로운 플로팅 폼 추가!** 플로팅 라벨의 예시를 완전히 지원되는 폼 컴포넌트로 승격시켰습니다. [새로운 플로팅 라벨 페이지 확인하러 가기]({{< docsref "/forms/floating-labels" >}})

- <span class="badge bg-danger">Breaking</span> **네비티브와 사용자 정의 폼 요소의 통합.** 체크박스, 라디오 버튼, 셀렉트등 v4에서 네이티브와 사용자 정의 클래스를 가지고 있던 입력 요소들이 통합되었습니다. 이를 통해 모든 폼 요소가 완전히 커스텀화 되었고, 그 대부분이 사용자 정의 HTML을 필요로 하지 않게 되었습니다.
  - `.custom-check`는 `.form-check`로 변경.
  - `.custom-check.custom-switch`는 `.form-check.form-switch`로 변경.
  - `.custom-select`는 `.form-select`로 변경.
  - `.custom-file`과 `.form-file`은 `.form-control` 위에 사용자 정의 스타일로 변경.
  - `.custom-range`는 `.form-range`로 변경.
  - 네이티브 `.form-control-file`과 `.form-control-range`는 삭제.

- <span class="badge bg-danger">Breaking</span> `.input-group-append`와 `.input-group-prepend`는 삭제. 입력 그룹의 직접 자식 요소로서 버튼과 `.input-group-text`를 추가할 수 있게 되었습니다.

- 오랫동안 지속 되었던 [유효성 검사를 사용할때 입력 그룹에서 반원 경계선이 누락되는 버그](https://github.com/twbs/bootstrap/issues/25110)는 유효성 검사 폼에 포함된 입력 그룹에 `.has-validation` 클래스를 추가하는 것으로 겨우 수정 되었습니다.

- <span class="badge bg-danger">Breaking</span> **그리드 시스템을 위한 폼 고유의 레이아웃 클래스 삭제.** `.form-group`, `.form-row`, `.form-inline` 대신 그리드와 유틸리티를 사용해 주세요.

- <span class="badge bg-danger">Breaking</span> 폼 레벨에는 `.form-label`이 필요합니다.

- <span class="badge bg-danger">Breaking</span> `.form-text`는 삭제되어 `display` 되지 않으므로, HTML 요소를 변경하는 것으로 인라인 혹은 블록 도움말 텍스트를 자유롭게 만들 수 있습니다.

- 유효성 검증 아이콘은 더 이상 `multiple<select>`에 적용되지 않습니다.

- 입력 그룹 스타일을 포함하여, `scss/forms/` 아래의 Sass 파일을 재배치 하였습니다.

<hr class="my-5">

## 컴포넌트

- 경고창, 브레드크럼, 카드, 드롭다운, 목록 그룹, 모달, 팝오버 그리고 툴팁의 `padding` 값을 `$spacer` 변수를 기반으로 통일. [#30564](https://github.com/twbs/bootstrap/pull/30564).

### 아코디언

- [새로운 아코디언 컴포넌트]({{< docsref "/components/accordion" >}}) 추가.

### 경고창

- 경고창에 [아이콘 사용한 예시]({{< docsref "/components/alerts#icons" >}})를 추가.

- 각 경고창에서 `currentColor`를 사용하게 되어 `<hr>` 사용자 정의 스타일은 삭제.

### 배지

- <span class="badge bg-danger">Breaking</span> 배경 유틸리티의 모든 `.badge-*` 색상 클래스 삭제 (예를 들어, `.badge-primary` 대신 `.bg-primary` 사용).

- <span class="badge bg-danger">Breaking</span> `.badge-pill` 삭제 — 대신`.rounded-pill` 유틸리티를 사용해 주세요.

- <span class="badge bg-danger">Breaking</span> `<a>`와 `<button>` 요소에 호버와 포커스 스타일 삭제.

- 배지의 기본 패딩을`.25em`/`.5em`에서 `.35em`/`.65em`으로 변경.

### 브레드크럼

- `padding`, `background-color`, 그리고 `border-radius`를 제거하여 브레드크럼의 기본 모양을 단순화했습니다.

- CSS를 다시 컴파일할 필요 없이 쉽게 재정의 할 수 있도록 새로운 CSS 사용자 정의 속성인 `--bs-breadcrumb-divider`를 추가했습니다.

### 버튼

- <span class="badge bg-danger">Breaking</span> **체크 박스나 라디오 버튼에 있는 [토글 버튼](https://getbootstrap.com/docs/5.0/forms/checks-radios/#toggle-buttons)은, JavaScript가 필요없는 새로운 마크업을 채용하고 있습니다.** 더 이상 감싸는 요소는 필요하지 않고, 바로 `<input>`에 `.btn-check`를 추가해 `.btn` 클래스의 `<label>`과 조합 합니다. [#30650](https://github.com/twbs/bootstrap/pull/30650). _이 건에 관한 문서는 버튼 페이지에서 폼 섹션으로 이동하였습니다._

- <span class="badge bg-danger">Breaking</span> **유틸리티용 `.btn-block`를 삭제.** `.btn`에 `.btn-block`을 사용하는 대신에, 버튼을 `.d-grid`와 `.gap-*` 유틸리티로 감싸고 필요에 따라 여백을 위한 클래스를 사용합니다. 보다 강력한 컨트롤을 위해 반응형 클래스로 전환 합니다. [몇 가지 예시에 대해서는 문서를 참조해 주세요](https://getbootstrap.com/docs/5.0/components/buttons/#block-buttons)

- 추가 매개 변수를 지원하기 위해 `button-variant()`와 `button-outline-variant()` 믹스인을 업데이트 했습니다.

- 호버와 액티브한 상태의 대비가 증가하도록 버튼을 업데이트 했습니다.

- 비활성화 버튼은 `pointer-events: none;` 되었습니다.

### 카드

- <span class="badge bg-danger">Breaking</span> 그리드에 유리하게 `.card-deck`을 삭제. card decks 재현을 위해 부모에 `.row-cols-*` 컨테이너를 추가하고 카드를 column 클래스로 감쌉니다. (반응형 정렬을 보다 효과적으로 제어할 수 있습니다).

- <span class="badge bg-danger">Breaking</span> 조적식(Masonry) 레이아웃에 유리하도록 `.card-columns` 삭제. [#28922](https://github.com/twbs/bootstrap/pull/28922).

- <span class="badge bg-danger">Breaking</span> `.card` 기반의 아코디언을 [새로운 아코디언 컴포넌트]({{< docsref "/components/accordion" >}})로 교체히였습니다.

### 캐러셀

- 진한 텍스트, 컨트롤과 기호(밝은 배경에 최적) 표시를 위해 [`.carousel-dark`]({{< docsref "/components/carousel#dark-variant" >}})가 추가되었습니다.

- 캐러셀의 chevron 아이콘을 [Bootstrap Icons]({{< param "icons" >}})의 새로운 SVG로 대체하였습니다.

### 닫기 버튼

- <span class="badge bg-danger">Breaking</span> `.close`에서 보다 일반적인 이름인 `.btn-close`으로 변경되었습니다.

- 닫기 버튼은 HTML 내의 `&times;` 대신에 `background-image`(embedded SVG)를 사용하게 되어 마크업 변경없이 손쉽게 재정의 할 수 있게 되었습니다.

- 어두운 배경에서 고대비 닫기 아이콘을 활성화하려고 `filter: invert(1)`를 사용한 새로운 `.btn-close-white` 변형 클래스가 추가되었습니다.

### 콜랩스

- 아코디언에 스크롤 고정 장치가 삭제 되었습니다.

### 드롭다운

- 어두운 드롭다운을 위해 새로운 `.dropdown-menu-dark` 변형 클래스와 관련된 변수를 추가하였습니다.

- 새로운 `$dropdown-padding-x` 변수를 추가하였습니다.

- 드롭다운의 구분자를 진하게 해 색상 대비를 개선하였습니다.

- <span class="badge bg-danger">Breaking</span> 드롭다운의 모든 이벤트는 드롭다운 토글 버튼으로 트리거 되어 이후 부모 요소에 버블링 됩니다.

- 드롭다운 메뉴에는 위치가 정적일때 `data-bs-popper="static"` 속성이 설정되며, 드롭다운이 내비게이션 바에 있을 때에는 `data-bs-popper="none"`으로 설정됩니다. 이것은 JavaScript를 통해 추가되며 Popper의 배치에 간섭하지 않고 사용자 정의 위치 스타일을 사용하는데 도움이 됩니다.

- <span class="badge bg-danger">Breaking</span> 드롭다운 플러그인에 대한 `flip` 옵션을 삭제하고 Popper의 네이티브 설정으로 변경되었습니다. [flip](https://popper.js.org/docs/v2/modifiers/flip/) 제어자의 [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)의 빈 배열을 통해서 플립 동작을 비활성화 할 수 있습니다.

- 드롭다운 메뉴는 새로운 `autoClose` 옵션을 추가해 [자동 닫기 동작]({{< docsref "/components/dropdowns#auto-close-behavior" >}})을 처리하게 되었습니다. 이 옵션을 사용하면 드롭다운 메뉴의 안쪽 또는 바깥쪽에서 클릭을 받아 상호적인 메뉴를 만들 수 있습니다.

- 드롭다운이 이제 `<li>`에 싸여진 `.dropdown-item`를 지원합니다.

### 점보트론

- <span class="badge bg-danger">Breaking</span> 유틸리티로 만들수 있기 때문에 점보트론 컴포넌트는 삭제되었습니다. [데모로 새로운 점보트론의 사용을 확인해 주세요.](https://getbootstrap.com/docs/5.0/examples/jumbotron/)

### 목록 그룹

- 목록 그룹에 새로운 [`.list-group-numbered` 제어자 클래스]({{< docsref "/components/list-group#numbered" >}})가 추가되었습니다.

### 내비게이션과 탭

- `.nav-link` 클래스에 `font-size`, `font-weight`, `color`, `:hover` `color`에 대한 새로운 변수 `null`을 추가했습니다.

### 내비게이션 바

- <span class="badge bg-danger">Breaking</span> 내비게이션 바는 컨테이너가 필요하게 되어 간격 요건이나 필요한 CSS가 대폭 간소화되었습니다.

### 오프캔버스

- 새로운 [오프캔버스 컴포넌트]({{< docsref "/components/offcanvas" >}})가 추가되었습니다.

### 페이지네이션

- 페이지네이션 링크의 `margin-left`를 재정의할 수 있게 되어, 떨어져 있을 때 모든 모서리가 다이내믹하게 둥글어지게 되었습니다.

- 페이지네이션 링크에 `트랜지션`을 추가하였습니다.

### 팝오버

- <span class="badge bg-danger">Breaking</span> 기본 팝오버 템플릿의 `.arrow` 이름을 `.popover-arrow`로 변경하였습니다.

- `whiteList` 옵션명을 `allowList`로 변경하였습니다.

### 스피너

- 스피너의 애니메이션의 속도를 줄임으로써 `prefers-reduced-motion: reduce`를 존중하게 되었습니다. [#31882](https://github.com/twbs/bootstrap/pull/31882).

- 스피너의 수직 방향 배치를 개선하였습니다.

### 토스트

- [위치 지정 유틸리티]({{< docsref "/utilities/position" >}})를 사용하여 `.toast-container` 안의 토스트를 [배치]({{< docsref "/components/toasts#placement" >}})시킬 수 있게 되었습니다.

- 기본 토스트의 지속 시간을 5초로 변경하였습니다.

- 토스트에서 `overflow: hidden`을 삭제하고 `calc()` 함수로 적절한 `border-radius`를 대체하였습니다.

### 툴팁

- <span class="badge bg-danger">Breaking</span> 기본 툴팁 템플렛에서 `.arrow` 이름을 `.tooltip-arrow`으로 변경하였습니다.

- <span class="badge bg-danger">Breaking</span> `fallbackPlacements`의 기본 값이 `['top', 'right', 'bottom', 'left']`으로 popper 요소의 배치가 개선되었습니다.

- <span class="badge bg-danger">Breaking</span> `whiteList` 옵션명이 `allowList`로 변경되었습니다.

## 유틸리티

- <span class="badge bg-danger">Breaking</span> RTL 지원이 추가됨에 따라 방향적인 이름 대신 논리적인 속성명으로 여러 유틸리티의 이름이 변경되었습니다:
  - `.left-*`와 `.right-*`에서 `.start-*`와 `.end-*`로 변경.
  - `.float-left`와 `.float-right`에서 `.float-start`와 `.float-end`로 변경.
  - `.border-left`와 `.border-right`에서 `.border-start`와 `.border-end`로 변경.
  - `.rounded-left`와 `.rounded-right`에서 `.rounded-start`와 `.rounded-end`로 변경.
  -`.ml-*`과 `.mr-*`에서 `.ms-*`와 `.me-*`로 변경.
  - `.pl-*`과 `.pr-*`에서 `.ps-*`와 `.pe-*`로 변경.
  - `.text-left`와 `.text-right`에서 `.text-start`와 `.text-end`로 변경.

- <span class="badge bg-danger">Breaking</span> 기본적으로 음수 마진을 비활성화.

- `<body>`의 배경을 추가적인 요소로 빠르게 설정하기 위해 새롭게 `.bg-body` 클래스를 추가하였습니다.

- `top`, `right`, `bottom`, `left` 표시를 위해 새로운 [위치 유틸리티]({{< docsref "/utilities/position#arrange-elements" >}})를 추가하였습니다. 값으로는 `0`, `50%`, `100%`가 있습니다.

- 새로운 `.translate-middle-x`와 `.translate-middle-y` 유틸리티를 추가하였습니다. 이 유틸리티는 absolute/fixed에 배치된 요소들을 수평 혹은 수직 방향에서 중앙에 오게 합니다.

- 새로운 [`border-width` 유틸리티]({{< docsref "/utilities/borders#border-width" >}})를 추가하였습니다.

- <span class="badge bg-danger">Breaking</span> `.text-monospace` 클래스명이 `.font-monospace`으로 변경되었습니다.

- <span class="badge bg-danger">Breaking</span> 텍스트를 숨기기 위한 시대 착오적인 방법으로 더 이상 사용되서는 안되는 `.text-hide`를 삭제하였습니다.

- `font-size` 유틸리티를 위한 `.fs-*` 유틸리티를 추가하였습니다. (RFS 사용). 이들은 HTML의 기본 제목과 동일한 크기(1-6, large ~ small)를 사용하고 있으며 Sass 맵에서 변경할 수 있습니다.

- <span class="badge bg-danger">Breaking</span> `.font-weight-*` 유틸리티를 간결함과 일관성을 위해 `.fw-*`로 변경하였습니다.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-style-*` 유틸리티를 간결함과 일관성을 위해 `.fst-*`로 변경하였습니다.

- CSS 그리드와 flexbox 레이아웃용 표시를 위한 `.d-grid` 유틸리티와 새로운 `gap` 유틸리티(`.gap`)를 추가하였습니다.

- <span class="badge bg-danger">Breaking</span> `.rounded-sm`과 `rounded-lg`를 삭제하고, 스케일로서 새로운 클래스 `.rounded-0`부터 `.rounded-3`을 도입하였습니다. [#31687](https://github.com/twbs/bootstrap/pull/31687).

- 새로운 `line-height` 유틸리티를 추가하였습니다: `.lh-1`, `.lh-sm`, `.lh-base`와 `.lh-lg`. [자세히 보기]({{< docsref "/utilities/text#line-height" >}}).

- 다른 표시 유틸리티보다 더 비중을 두기 위해 CSS에 있는 `.d-none` 유틸리티를 이동 시켰습니다.

- 컨테이너 작업에도 사용할 수 있도록 `.visually-hidden-focusable` 도우미를 `:focus-within`로 확장하였습니다.


## 도우미

- <span class="badge bg-danger">Breaking</span> 더욱 편리한 CSS 변수 추가로 동작이 개선된 **Responsive embed가 [ratio 도우미]({{< docsref "/helpers/ratio" >}})** 로 이름이 변경되었습니다.
  - 비율을 나타내는 클래스가 `by`에서 `x`로 이름이 변경되었습니다. 예를 들어, `.ratio-16by9`는 `.ratio-16x9`가 되었습니다.
  - `.embed-responsive-item`과 요소 그룹 셀렉터를 삭제하여 더욱 단순한 `.ratio > *` 셀렉터로 변경되었습니다. 이로써 클래스는 불필요해 졌고, 비율 도우미는 어떠한 HTML 요소로도 사용 가능해졌습니다.
  - `$embed-responsive-aspect-ratios`의 Sass 맵은 `$aspect-ratios`로 이름이 변경되었고, 그 값은 클래스 이름과 퍼센티지를 `key: value` 값으로 포함하도록 간소화되었습니다.
  - Sass 맵의 각 값에 CSS 변수가 생성되어 포함되었습니다. `.ratio`의 `--bs-aspect-ratio` 변수를 수정하여 임의의 [사용자 정의 비율]({{< docsref "/helpers/ratio#custom-ratios" >}})을 만듭니다.

- <span class="badge bg-danger">Breaking</span> **"Screen reader" 클래스는 ["visually hidden"]({{< docsref "/helpers/visually-hidden" >}})이 되었습니다.**
  - `scss/helpers/_screenreaders.scss`에서 `scss/helpers/_visually-hidden.scss`로 Sass 파일이 변경되었습니다.
  - `.sr-only`와 `.sr-only-focusable`에서 `.visually-hidden`과 `.visually-hidden-focusable`로 변경되었습니다.
  - `sr-only()`와 `sr-only-focusable()`믹스인은 `visually-hidden()`과 `visually-hidden-focusable()`로 변경되었습니다.

- `bootstrap-utilities.css` 안에 도우미가 포함되어 있습니다. 도우미는 더 이상 사용자 정의 빌드로 따로 포함할 필요가 없습니다.

## JavaScript

- **jQuery에 대한 의존을 중단**하고 플러그인을 통상적인 JavaScript로 다시 썼습니다.

- <span class="badge bg-danger">Breaking</span> 모든 JavaScript 플러그인의 데이터 속성은 제삼자의 코드와 자체 코드에서 Bootstrap의 기능을 구별하는 데 도움이 되도록 이름을 붙이고 있습니다. 예를 들어 `data-toggle` 대신 `data-bs-toggle`을 사용합니다.

- **모든 클러그인은 첫번째 인수로서 CSS 셀렉터를 받아들일 수 있게 되었습니다.** 플러그인의 새로운 인스턴스를 작성하기 위해 DOM 요소 또는 임의의 CSS 셀렉터를 전달할 수 있습니다. :

  ```js
  var modal = new bootstrap.Modal('#myModal')
  var dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
  ```

- `popperConfig`는 Bootstrap 기본 Popper 설정을 인수로 하는 함수로 전달할 수 있으며, 이 기본 설정을 내 방식대로 병합할 수 있습니다. **드롭다운, 팝오버, 툴팁에 적용됩니다.**

- 팝오버 요소의 보다 나은 배치를 위해 `fallbackPlacements` 기본값이 `['top', 'right', 'bottom', 'left']`로 변경되었습니다. **드롭다운, 팝오버, 툴팁에 적용됩니다.**

- `_getInstance()` → `getInstance()`와 같이 공공의 정적 메소드에서 밑줄표시 삭제하였습니다.
