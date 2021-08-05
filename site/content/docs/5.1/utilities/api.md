---
layout: docs
title: 유틸리티 API
title_en: Utility API
description: 유틸리티 API는 유틸리티 클래스를 생성하기 위한 Sass 기반 도구입니다.
group: utilities
aliases: "/docs/5.1/utilities/"
toc: true
---

Bootstrap 유틸리티는 유틸리티 API로 생성되며 Sass를 통해 기본 유틸리티 클래스 세트를 수정하거나 확장하는 데 사용할 수 있습니다. 저희 유틸리티 API는 다양한 옵션으로 클래스 패밀리를 생성하기 위한 일련의 Sass맵 및 함수를 기반으로 합니다. Sass맵에 익숙하지 않은 경우 [official Sass docs](https://sass-lang.com/documentation/values/maps)를 읽고 시작해 보세요.


`$utilities` 맵에는 우리의 모든 유틸리티가 포함되어 나중에는 사용자정의 `$utilities` 와 통합(파일이 있을 경우)됩니다. 유틸리티 맵에는 다음 옵션을 허용할 수 있는 유틸리티 그룹의 키 목록이 포함되어 있습니다:

{{< bs-table "table text-start" >}}
| 옵션 | 형식 | 기본값 | 설명 |
| --- | --- | --- | --- |
| [`property`](#property) | **필수** | – | Name of the property, this can be a string or an array of strings (e.g., horizontal paddings or margins). |
| [`values`](#values) | **필수** | – | List of values, or a map if you don't want the class name to be the same as the value. If `null` is used as map key, it isn't compiled. |
| [`class`](#class) | 선택 | null | Name of the generated class. If not provided and `property` is an array of strings, `class` will default to the first element of the `property` array. |
| [`css-var`](#css-variable-utilities) | 선택 | `false` | Boolean to generate CSS variables instead of CSS rules. |
| [`local-vars`](#local-css-variables) | 선택 | null | Map of local CSS variables to generate in addition to the CSS rules. |
| [`state`](#states) | 선택 | null | List of pseudo-class variants (e.g., `:hover` or `:focus`) to generate. |
| [`responsive`](#responsive) | 선택 | `false` | Boolean indicating if responsive classes should be generated. |
| `rfs` | 선택 | `false` | Boolean to enable [fluid rescaling with RFS]({{< docsref "/getting-started/rfs" >}}). |
| [`print`](#print) | 선택 | `false` | Boolean indicating if print classes need to be generated. |
| `rtl` | 선택 | `true` | Boolean indicating if utility should be kept in RTL. |
{{< /bs-table >}}

## API 설명

모든 유틸리티 변수는 `_utilities.scss` 스타일 시트의 `$utilities` 변수에 추가됩니다. 각 유틸리티 그룹은 다음과 같습니다:

```scss
$utilities: (
  "opacity": (
    property: opacity,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

다음과 같이 출력됩니다:

```css
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }
```

### Property

The required `property` key must be set for any utility, and it must contain a valid CSS property. This property is used in the generated utility's ruleset. When the `class` key is omitted, it also serves as the default class name. Consider the `text-decoration` utility:

```scss
$utilities: (
  "text-decoration": (
    property: text-decoration,
    values: none underline line-through
  )
);
```

Output:

```css
.text-decoration-none { text-decoration: none !important; }
.text-decoration-underline { text-decoration: underline !important; }
.text-decoration-line-through { text-decoration: line-through !important; }
```

### Values

Use the `values` key to specify which values for the specified `property` should be used in the generated class names and rules. Can be a list or map (set in the utilities or in a Sass variable).

As a list, like with [`text-decoration` utilities]({{< docsref "/utilities/text#text-decoration" >}}):

```scss
values: none underline line-through
```

As a map, like with [`opacity` utilities]({{< docsref "/utilities/opacity" >}}):

```scss
values: (
  0: 0,
  25: .25,
  50: .5,
  75: .75,
  100: 1,
)
```

As a Sass variable that sets the list or map, as in our [`position` utilities]({{< docsref "/utilities/position" >}}):

```scss
values: $position-values
```

### Class

Use the `class` option to change the class prefix used in the compiled CSS. For example, to change from `.opacity-*` to `.o-*`:

```scss
$utilities: (
  "opacity": (
    property: opacity,
    class: o,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Output:

```css
.o-0 { opacity: 0 !important; }
.o-25 { opacity: .25 !important; }
.o-50 { opacity: .5 !important; }
.o-75 { opacity: .75 !important; }
.o-100 { opacity: 1 !important; }
```

### CSS variable utilities

Set the `css-var` boolean option to `true` and the API will generate local CSS variables for the given selector instead of the usual `property: value` rules. Consider our `.text-opacity-*` utilities:

```scss
$utilities: (
  "text-opacity": (
    css-var: true,
    class: text-opacity,
    values: (
      25: .25,
      50: .5,
      75: .75,
      100: 1
    )
  ),
);
```

Output:

```css
.text-opacity-25 { --bs-text-opacity: .25; }
.text-opacity-50 { --bs-text-opacity: .5; }
.text-opacity-75 { --bs-text-opacity: .75; }
.text-opacity-100 { --bs-text-opacity: 1; }
```

### Local CSS variables

Use the `local-vars` option to specify a Sass map that will generate local CSS variables within the utility class's ruleset. Please note that it may require additional work to consume those local CSS variables in the generated CSS rules. For example, consider our `.bg-*` utilities:

```scss
$utilities: (
  "background-color": (
    property: background-color,
    class: bg,
    local-vars: (
      "bg-opacity": 1
    ),
    values: map-merge(
      $utilities-bg-colors,
      (
        "transparent": transparent
      )
    )
  )
);
```

출력 결과:

```css
.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}
```

### 상태

가상 클래스의 변형을 생성하려면 `state` 옵션을 사용하세요. 비슷한 클래스의 예시로는 `:hover` 및 `:focus`가 있습니다. 상태 목록이 제공되면 해당 가상 클래스에 대한 클래스 이름이 생성됩니다. 예를 들어, 호버시 불투명도를 변경하려면 `state: hover`를 추가하면 컴파일된 CSS에 `.opacity-hover:hover`가 표시됩니다.

여러 개의 가상 클래스가 필요하신가요? `state : hover focus`와 같이 공백으로 구분 된 상태 목록을 사용하세요.

```scss
$utilities: (
  "opacity": (
    property: opacity,
    class: opacity,
    state: hover,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

출력 결과:

```css
.opacity-0-hover:hover { opacity: 0 !important; }
.opacity-25-hover:hover { opacity: .25 !important; }
.opacity-50-hover:hover { opacity: .5 !important; }
.opacity-75-hover:hover { opacity: .75 !important; }
.opacity-100-hover:hover { opacity: 1 !important; }
```

### 반응형 유틸리티


```scss
$utilities: (
  "opacity": (
    property: opacity,
    responsive: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

출력 결과:

```css
.opacity-0 { opacity: 0 !important; }
.opacity-25 { opacity: .25 !important; }
.opacity-50 { opacity: .5 !important; }
.opacity-75 { opacity: .75 !important; }
.opacity-100 { opacity: 1 !important; }

@media (min-width: 576px) {
  .opacity-sm-0 { opacity: 0 !important; }
  .opacity-sm-25 { opacity: .25 !important; }
  .opacity-sm-50 { opacity: .5 !important; }
  .opacity-sm-75 { opacity: .75 !important; }
  .opacity-sm-100 { opacity: 1 !important; }
}

@media (min-width: 768px) {
  .opacity-md-0 { opacity: 0 !important; }
  .opacity-md-25 { opacity: .25 !important; }
  .opacity-md-50 { opacity: .5 !important; }
  .opacity-md-75 { opacity: .75 !important; }
  .opacity-md-100 { opacity: 1 !important; }
}

@media (min-width: 992px) {
  .opacity-lg-0 { opacity: 0 !important; }
  .opacity-lg-25 { opacity: .25 !important; }
  .opacity-lg-50 { opacity: .5 !important; }
  .opacity-lg-75 { opacity: .75 !important; }
  .opacity-lg-100 { opacity: 1 !important; }
}

@media (min-width: 1200px) {
  .opacity-xl-0 { opacity: 0 !important; }
  .opacity-xl-25 { opacity: .25 !important; }
  .opacity-xl-50 { opacity: .5 !important; }
  .opacity-xl-75 { opacity: .75 !important; }
  .opacity-xl-100 { opacity: 1 !important; }
}

@media (min-width: 1400px) {
  .opacity-xxl-0 { opacity: 0 !important; }
  .opacity-xxl-25 { opacity: .25 !important; }
  .opacity-xxl-50 { opacity: .5 !important; }
  .opacity-xxl-75 { opacity: .75 !important; }
  .opacity-xxl-100 { opacity: 1 !important; }
}
```

### 인쇄

`print` 옵션을 활성화하면 ** 또한 ** 인쇄용 유틸리티 클래스가 생성되며, 이는 `@media print {...}` 미디어 쿼리 내에서만 적용됩니다.

```scss
$utilities: (
  "opacity": (
    property: opacity,
    print: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

출력 결과물:

```css
.opacity-0 { opacity: 0 !important; }
.opacity-25 { opacity: .25 !important; }
.opacity-50 { opacity: .5 !important; }
.opacity-75 { opacity: .75 !important; }
.opacity-100 { opacity: 1 !important; }

@media print {
  .opacity-print-0 { opacity: 0 !important; }
  .opacity-print-25 { opacity: .25 !important; }
  .opacity-print-50 { opacity: .5 !important; }
  .opacity-print-75 { opacity: .75 !important; }
  .opacity-print-100 { opacity: 1 !important; }
}
```

## Important

API에 의해 생성된 모든 유틸리티에는 의도한 대로 컴포넌트 및 수정자 클래스를 재정의할 수 있도록 `!important`가 포함됩니다. `$enable-important-utilities` 변수 (기본값은 `true`)를 사용하여 이 설정을 전역적으로 토글할 수 있습니다.

## API 사용하기

이제 유틸리티 API의 작동 방식에 익숙해졌으므로 사용자 지정 클래스를 추가하고 기본 유틸리티를 수정하는 방법을 배워봅시다.

### Override utilities

Override existing utilities by using the same key. For example, if you want additional responsive overflow utility classes, you can do this:

```scss
$utilities: (
  "overflow": (
    responsive: true,
    property: overflow,
    values: visible hidden scroll auto,
  ),
);
```

### 유틸리티 추가

`map-merge`를 사용하면 새로운 유틸리티를 기본 `$utilities` 맵에 추가할 수 있습니다. 먼저 `_utilities.scss`를 가져왔는지 확인한 다음 `map-merge`를 이용하여 새로운 유틸리티를 추가하십시오. 다음 예시는 세 개의 값이 있는 반응형 `cursor` 유틸리티를 추가하는 방법입니다.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
); 
```

### 유틸리티 수정

`map-get` 및 `map-merge` 함수를 사용하여 기본 `$utilities` 맵의 기존 유틸리티를 수정합니다. 아래는 `width` 유틸리티에 신규 값을 추가하는 예시입니다.
초기 `map-merge`로 시작한 다음 수정할 유틸리티를 지정하세요. 중첩 된 `"width"` 맵을 `map-get`을 이용해 가져 온 뒤 유틸리티의 옵션 및 값에 접근하여 수정합니다.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "width": map-merge(
      map-get($utilities, "width"),
      (
        values: map-merge(
          map-get(map-get($utilities, "width"), "values"),
          (10: 10%),
        ),
      ),
    ),
  )
);
```

#### 반응형 활성화

You can enable responsive classes for an existing set of utilities that are not currently responsive by default. For example, to make the `border` classes responsive:

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities, (
    "border": map-merge(
      map-get($utilities, "border"),
      ( responsive: true ),
    ),
  )
);
```

This will now generate responsive variations of `.border` and `.border-0` for each breakpoint. Your generated CSS will look like this:

```css
.border { ... }
.border-0 { ... }

@media (min-width: 576px) {
  .border-sm { ... }
  .border-sm-0 { ... }
}

@media (min-width: 768px) {
  .border-md { ... }
  .border-md-0 { ... }
}

@media (min-width: 992px) {
  .border-lg { ... }
  .border-lg-0 { ... }
}

@media (min-width: 1200px) {
  .border-xl { ... }
  .border-xl-0 { ... }
}

@media (min-width: 1400px) {
  .border-xxl { ... }
  .border-xxl-0 { ... }
}
```

#### 유틸리티 이름 변경

이전 v4 유틸리티가 그립거나 다른 명명 규칙을 사용 하고 싶습니까? 유틸리티 API는 주어진 유틸리티의 결과 `class`를 재정의 하는데 사용할 수 있습니다. 예를 들어 `.ms- *` 유틸리티의 이름을 오래된 `.ml- *`로 바꿀 경우 다음과 같이 할 수 있습니다:

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities, (
    "margin-start": map-merge(
      map-get($utilities, "margin-start"),
      ( class: ml ),
    ),
  )
);
```

### 유틸리티 제거

그룹 키를 `null`로 설정하면 기본 유틸리티를 제거 할 수 있습니다. 예를 들어 모든 `width` 유틸리티를 제거하려면 `$utilities` `map-merge`를 만들고 ` "width": null`을 추가합니다.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "width": null
  )
);
```

#### RTL에서 유틸리티 제거

아랍어 줄 바꿈과 같은 일부 예외적 인 경우는 [RTL styling difficult](https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl)를 합니다 (스타일 지정을 어렵게 만든다는 뜻). 따라서 `rtl` 옵션을 `false`로 설정하여 RTL 출력에서 유틸리티를 삭제할 수 있습니다.

```scss
$utilities: (
  "word-wrap": (
    property: word-wrap word-break,
    class: text,
    values: (break: break-word),
    rtl: false
  ),
);
```

결과물:

```css
/* rtl:begin:remove */   
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}
/* rtl:end:remove */
```

[RTLCSS `remove` 제어 지시문](https://rtlcss.com/learn/usage-guide/control-directives/#remove) 덕분에 RTL에는 아무 것도 출력되지 않습니다.