---
layout: docs
title: 유틸리티 API
title_en: Utility API
description: 유틸리티 API는 유틸리티 클래스를 생성하기 위한 Sass 기반 도구입니다.
group: utilities
aliases: "/docs/5.3/utilities/"
toc: true
---

Bootstrap 유틸리티는 유틸리티 API로 생성되며 Sass를 통해 기본 유틸리티 클래스 세트를 수정하거나 확장하는 데 사용할 수 있습니다. 저희 유틸리티 API는 다양한 옵션으로 클래스 패밀리를 생성하기 위한 일련의 Sass맵 및 함수를 기반으로 합니다. Sass맵에 익숙하지 않은 경우 [official Sass docs](https://sass-lang.com/documentation/values/maps)를 읽고 시작해 보세요.


`$utilities` 맵에는 우리의 모든 유틸리티가 포함되어 나중에는 사용자정의 `$utilities` 와 통합(파일이 있을 경우)됩니다. 유틸리티 맵에는 다음 옵션을 허용할 수 있는 유틸리티 그룹의 키 목록이 포함되어 있습니다:

{{< bs-table "table table-utilities" >}}
| Option | Type | Default&nbsp;value | Description |
| --- | --- | --- | --- |
| [`property`](#property) | **필수** | – | 속성의 이름입니다. 문자열 또는 문자열 배열 (예: 수평 패딩 또는 여백)이 될 수 있습니다. |
| [`values`](#values) | **Required** | – | 값 목록입니다. 클래스 이름이 값과 동일하지 않게 하려는 경우에는 맵입니다. `null`이 맵 키로 사용되면 `class`가 클래스명 앞에 붙지 않습니다. |
| [`class`](#class) | Optional | null | 생성된 클래스의 이름입니다. 제공하지 않고 `property`가 문자열 배열인 경우 `class`는 기본적으로 `property` 배열의 첫 번째 요소로 설정됩니다. If not provided and `property` is a string, the `values` keys are used for the `class` names. |
| [`css-var`](#css-variable-utilities) | 선택 | `false` | CSS 규칙 대신 CSS 변수를 생성하는 불대수입니다. |
| [`css-variable-name`](#css-variable-utilities) | Optional | null | Custom un-prefixed name for the CSS variable inside the ruleset. |
| [`local-vars`](#local-css-variables) | 선택 | null | CSS 규칙 외에 생성할 로컬 CSS 변수의 맵입니다. |
| [`state`](#states) | 선택 | null | 생성할 의사 클래스 변형 목록 (예: `:hover` 또는 `:focus`)입니다. |
| [`responsive`](#responsive) | 선택 | `false` | 반응형 클래스를 생성해야 하는지 여부를 나타내는 불대수입니다. |
| `rfs` | 선택 | `false` | [RFS를 사용한 플루이드 리스케일링]({{< docsref "/getting-started/rfs" >}})을 활성화하는 불대수입니다. |
| [`print`](#print) | 선택 | `false` | 인쇄 클래스를 생성해야 하는지 여부를 나타내는 불대수입니다. |
| `rtl` | 선택 | `true` | 유틸리티를 RTL로 유지해야 하는지 여부를 나타내는 불대수입니다. |
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

### 속성

모든 유틸리티에 대해 필수적으로 `property` 키를 설정해야 하며 유효한 CSS 속성을 포함해야 합니다. 이 속성은 생성된 유틸리티의 규칙 집합에서 사용됩니다. `class` 키가 생략되면 기본 클래스 이름으로도 사용됩니다. `text-decoration` 유틸리티를 사용하는 것을 고려해보세요:

The required `property` key must be set for any utility, and it must contain a valid CSS property. This property is used in the generated utility's ruleset. When the `class` key is omitted, it also serves as the default class name. Consider the `text-decoration` utility:

```scss
$utilities: (
  "text-decoration": (
    property: text-decoration,
    values: none underline line-through
  )
);
```

출력 결과:

```css
.text-decoration-none { text-decoration: none !important; }
.text-decoration-underline { text-decoration: underline !important; }
.text-decoration-line-through { text-decoration: line-through !important; }
```

### 값

`values` 키를 사용하여 생성된 클래스 이름 및 규칙에서 지정된 `property`에 사용할 값을 지정하세요. 목록 또는 맵이 될 수 있습니다 (유틸리티 또는 Sass 변수에서 설정 가능).

[`text-decoration` 유틸리티]({{< docsref "/utilities/text#text-decoration" >}})와 같은 목록으로:

```scss
values: none underline line-through
```

[`opacity` 유틸리티]({{< docsref "/utilities/opacity" >}})와 같은 맵은 다음과 같습니다:

```scss
values: (
  0: 0,
  25: .25,
  50: .5,
  75: .75,
  100: 1,
)
```

[`position` 유틸리티]({{< docsref "/utilities/position" >}})처럼 목록 또는 맵을 설정하는 Sass 변수는 다음과 같습니다:
```scss
values: $position-values
```

### 클래스

컴파일된 CSS에서 사용되는 클래스 접두사를 변경하려면 `class` 옵션을 사용하세요. 예를 들어 `.opacity-*`에서 `.o-*`로 변경하려면 다음과 같이 할 수 있습니다:

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

출력 결과:

```css
.o-0 { opacity: 0 !important; }
.o-25 { opacity: .25 !important; }
.o-50 { opacity: .5 !important; }
.o-75 { opacity: .75 !important; }
.o-100 { opacity: 1 !important; }
```

If `class: null`, generates classes for each of the `values` keys:

```scss
$utilities: (
  "visibility": (
    property: visibility,
    class: null,
    values: (
      visible: visible,
      invisible: hidden,
    )
  )
);
```

Output:

```css
.visible { visibility: visible !important; }
.invisible { visibility: hidden !important; }
```

### CSS 변수 유틸리티

`css-var` 불대수 옵션을 `true`로 설정하면 API가 일반적인 `property: value` 규칙 대신 지정된 선택기에 대한 로컬 CSS 변수를 생성합니다. Add an optional `css-variable-name` to set a different CSS variable name than the class name.

Consider our `.text-opacity-*` utilities. If we add the `css-variable-name` option, we'll get a custom output.

```scss
$utilities: (
  "text-opacity": (
    css-var: true,
    css-variable-name: text-alpha,
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

출력 결과:

```css
.text-opacity-25 { --bs-text-alpha: .25; }
.text-opacity-50 { --bs-text-alpha: .5; }
.text-opacity-75 { --bs-text-alpha: .75; }
.text-opacity-100 { --bs-text-alpha: 1; }
```

### 로컬 CSS 변수

유틸리티 클래스의 규칙 세트 내에서 로컬 CSS 변수를 생성할 Sass 맵을 지정하려면 `local-vars` 옵션을 사용하세요. 생성된 CSS 규칙에서 해당 로컬 CSS 변수를 사용하려면 추가 작업이 필요할 수 있습니다. 예를 들어 다음 예시처럼 `.bg-*` 유틸리티를 고려해보세요:

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

### 유틸리티 오버라이드

동일한 키를 사용하여 기존 유틸리티를 재정의하세요. 예를 들어 추가적인 반응형 오버플로우 유틸리티 클래스가 필요한 경우 다음처럼 할 수 있습니다:

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
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
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

@import "bootstrap/scss/utilities/api";
```

### 유틸리티 수정

`map-get` 및 `map-merge` 함수를 사용하여 기본 `$utilities` 맵의 기존 유틸리티를 수정합니다. 아래는 `width` 유틸리티에 신규 값을 추가하는 예시입니다.
초기 `map-merge`로 시작한 다음 수정할 유틸리티를 지정하세요. 중첩 된 `"width"` 맵을 `map-get`을 이용해 가져 온 뒤 유틸리티의 옵션 및 값에 접근하여 수정합니다.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
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

@import "bootstrap/scss/utilities/api";
```

#### 반응형 활성화

현재 응답하지 않는 기존 유틸리티 세트에 대해 응답 클래스를 기본적으로 활성화할 수 있습니다. 예를 들어, `border` 클래스를 반응형으로 만들려면:

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities, (
    "border": map-merge(
      map-get($utilities, "border"),
      ( responsive: true ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
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
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities, (
    "margin-start": map-merge(
      map-get($utilities, "margin-start"),
      ( class: ml ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
```

### 유틸리티 제거

Remove any of the default utilities with the [`map-remove()` Sass function](https://sass-lang.com/documentation/modules/map#remove).

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

// Remove multiple utilities with a comma-separated list
$utilities: map-remove($utilities, "width", "float");

@import "bootstrap/scss/utilities/api";
```

You can also use the [`map-merge()` Sass function](https://sass-lang.com/documentation/modules/map#merge) and set the group key to `null` to remove the utility.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "width": null
  )
);

@import "bootstrap/scss/utilities/api";
```

### 추가, 제거, 수정


[`map-merge()` Sass 함수](https://sass-lang.com/documentation/modules/map#merge)를 사용해서 한 번에 다수의 유틸리티들을 추가, 제거, 수정할 수 있습니다. 다음은 하나의 큰 맵 안에 위에 있는 예제들을 포함하는 예시입니다.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    // Remove the `width` utility
    "width": null,

    // Make an existing utility responsive
    "border": map-merge(
      map-get($utilities, "border"),
      ( responsive: true ),
    ),

    // Add new utilities
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
);

@import "bootstrap/scss/utilities/api";
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