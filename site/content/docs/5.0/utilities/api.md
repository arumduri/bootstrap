---
layout: docs
title: 유틸리티 API
title_en: Utility API
description: 유틸리티 API는 유틸리티 클래스를 생성하기 위한 Sass 기반 도구입니다.
group: utilities
aliases: "/docs/5.0/utilities/"
toc: true
---

부트 스트랩 유틸리티는 유틸리티 API로 생성되며 Sass를 통해 기본 유틸리티 클래스 세트를 수정하거나 확장하는 데 사용할 수 있습니다. 저희 유틸리티 API는 다양한 옵션으로 클래스 패밀리를 생성하기 위한 일련의 Sass맵 및 함수를 기반으로 합니다. Sass맵에 익숙하지 않은 경우 [official Sass docs](https://sass-lang.com/documentation/values/maps) 를 읽고 시작해 보세요.


`$utilities` 맵에는 우리의 모든 유틸리티가 포함되어 나중에는 사용자정의 `$utilities` 와 통합(파일이 있을 경우)됩니다. 유틸리티 맵에는 다음 옵션을 허용할 수 있는 유틸리티 그룹의 키 목록이 포함되어 있습니다.:

{{< bs-table "table text-start" >}}
| 옵션 | 형식 | 설명 |
| --- | --- | --- |
| `property` | **Required** | Name of the property, this can be a string or an array of strings (e.g., horizontal paddings or margins). |
| `values` | **Required** | List of values, or a map if you don't want the class name to be the same as the value. If `null` is used as map key, it isn't compiled. |
| `class` | Optional | Variable for the class name if you don't want it to be the same as the property. In case you don't provide the `class` key and `property` key is an array of strings, the class name will be the first element of the `property` array. |
| `state` | Optional | List of pseudo-class variants like `:hover` or `:focus` to generate for the utility. No default value. |
| `responsive` | Optional | Boolean indicating if responsive classes need to be generated. `false` by default. |
| `rfs` | Optional | Boolean to enable fluid rescaling. Have a look at the [RFS]({{< docsref "/getting-started/rfs" >}}) page to find out how this works. `false` by default. |
| `print` | Optional | Boolean indicating if print classes need to be generated. `false` by default. |
| `rtl` | Optional | Boolean indicating if utility should be kept in RTL. `true` by default. |
{{< /bs-table >}}

## API explained

모든 유틸리티 변수는 `_utilities.scss` 스타일 시트의 `$utilities` 변수에 추가됩니다. 각 유틸리티 그룹은 다음과 같습니다.:

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

### Custom class prefix

컴파일 된 CSS에서 사용되는 클래스 접두사를 변경하려면 `class` 옵션을 사용하세요.:

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
.o-0 { opacity: 0; }
.o-25 { opacity: .25; }
.o-50 { opacity: .5; }
.o-75 { opacity: .75; }
.o-100 { opacity: 1; }
```

### States

가상 클래스의 변형을 생성하려면 `state` 옵션을 사용하십시오. 비슷한 클래스의 예시로는 `:hover` 및 `:focus` 입니다. 상태 목록이 제공되면 해당 가상 클래스에 대한 클래스 이름이 생성됩니다. 예를 들어, 호버시 불투명도를 변경하려면 `state: hover` 를 추가하면 컴파일 된 CSS에 `.opacity-hover:hover` 가 표시됩니다.

여러개의 가상 클래스가 필요하십니까? `state : hover focus` 와 같이 공백으로 구분 된 상태 목록을 사용하세요.
=======
가상 클래스의 변형을 생성하려면 `state` 옵션을 사용하십시오. 비슷한 클래스의 예시로는 `:hover` 및 `:focus`입니다. 상태 목록이 제공되면 해당 가상 클래스에 대한 클래스 이름이 생성됩니다. 예를 들어, 호버시 불투명도를 변경하려면 `state: hover`를 추가하면 컴파일 된 CSS에 `.opacity-hover:hover`가 표시됩니다.

여러 개의 가상 클래스가 필요하십니까? `state : hover focus`와 같이 공백으로 구분 된 상태 목록을 사용하세요.

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

### Responsive utilities

[all breakpoints]({{< docsref "/layout/breakpoints" >}})에서 반응 형 유틸리티 (예 : `.opacity-md-25` )를 생성하려면 `responsive` 불리언을 추가합니다.


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

### Changing utilities

동일한 키를 사용하여 기존 유틸리티를 대체하십시오. 예를 들어 추가 반응형 오버플로 유틸리티 클래스를 원할 경우 다음을 수행 할 수 있습니다.:

```scss
$utilities: (
  "overflow": (
    responsive: true,
    property: overflow,
    values: visible hidden scroll auto,
  ),
);
```

### Print utilities

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

## Importance

All utilities generated by the API include `!important` to ensure they override components and modifier classes as intended. You can toggle this setting globally with the `$enable-important-utilities` variable (defaults to `true`).

## Using the API

이제 유틸리티 API의 작동 방식에 익숙해 졌으므로 사용자 지정 클래스를 추가하고 기본 유틸리티를 수정하는 방법을 배워 봅시다.

### Add utilities

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

### Modify utilities

`map-get` 및 `map-merge` 함수를 사용하여 기본 `$utilities` 맵의 기존 유틸리티를 수정합니다. 아래는 `width` 유틸리티에 신규 값을 추가하는 예시입니다.
초기 `map-merge`로 시작한 다음 수정할 유틸리티를 지정하세요. 중첩 된 `"width"` 맵을 `map-get` 을 이용해 가져 온 뒤 유틸리티의 옵션 및 값에 접근하여 수정합니다.

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

#### Enable responsive

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

#### Rename utilities

이전 v4 유틸리티가 그립거나 다른 명명 규칙을 사용 하고 싶습니까? 유틸리티 API는 주어진 유틸리티의 결과 `class` 를 재정의 하는데 사용할 수 있습니다. 예를 들어 `.ms- *` 유틸리티의 이름을 오래된 `.ml- *` 로 바꿀 경우 다음과 같이 할 수 있습니다:

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

### Remove utilities

그룹 키를 `null` 로 설정하면 기본 유틸리티를 제거 할 수 있습니다. 예를 들어 모든 `width` 유틸리티를 제거하려면 `$utilities` `map-merge` 를 만들고 ` "width": null` 을 추가합니다.

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

#### Remove utility in RTL

아랍어 줄 바꿈과 같은 일부 예외적 인 경우는 [RTL styling difficult](https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl) 를 합니다(스타일 지정을 어렵게 만든다는 뜻). 따라서 `rtl` 옵션을 `false` 로 설정하여 RTL 출력에서 유틸리티를 삭제할 수 있습니다.

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