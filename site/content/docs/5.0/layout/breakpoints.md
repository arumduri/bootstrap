---
layout: docs
title: Breakpoints

description: Breakpoints는 부트스트랩의 반응형 레이아웃이 뷰포트 크기 또는 기기에서 어떻게 작동 할지 결정하는 사용자가 정의 가능한 넓이입니다.
group: layout
aliases: "/docs/5.0/layout/"
toc: true
---

## Core concepts

- **Breakpoints는 반응형 디자인의 구성 요소입니다.** Breakpoints를 사용하여 레이아웃을 특정 뷰포트 크기 또는 기기에서 조정할 수 있는 시기를 제어합니다.

- **미디어 쿼리를 사용하여 Breakpoints로 CSS를 설계하세요.** 미디어 쿼리는 브라우저 및 운영체제의 매개 변수 세트를 기반으로 조건부로 스타일을 적용 할 수있는 CSS의 기능입니다. 미디어 쿼리에서는 일반적으로 `min-width` 를 사용합니다.

- **반응형 디자인과 모바일 우선이 목표입니다.** 부트스트랩의 CSS는 최소한의 스타일을 적용하여 가장 작은 Breakpoints에서 레이아웃이 작동하도록 설정 한 후 스타일에 계층을 적용하여 더 큰 기기에 맞게 해당 디자인이 조정 되도록 하는 것을 목표로 합니다. 이를 통해 CSS를 최적화하고 렌더링 시간을 개선하며 방문자에게 훌륭한 경험을 제공합니다.

## Available breakpoints

부트스트랩에는 반응형 제작을 위해 _grid tiers_ 라고 하는 6개의 Breakpoints가 포함되어 있습니다. 이러한 breakpoints는 Sass 소스 파일을 사용할 경우 사용자가 지정할 수 있습니다.

<table class="table">
  <thead>
    <tr>
      <th>Breakpoint</th>
      <th>Class infix</th>
      <th>Dimensions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X-Small</td>
      <td><em>None</em></td>
      <td>&lt;576px</td>
    </tr>
    <tr>
      <td>Small</td>
      <td><code>sm</code></td>
      <td>&ge;576px</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td><code>md</code></td>
      <td>&ge;768px</td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>lg</code></td>
      <td>&ge;992px</td>
    </tr>
    <tr>
      <td>Extra large</td>
      <td><code>xl</code></td>
      <td>&ge;1200px</td>
    </tr>
    <tr>
      <td>Extra extra large</td>
      <td><code>xxl</code></td>
      <td>&ge;1400px</td>
    </tr>
  </tbody>
</table>

각각의 정의된 breakpoint는 넓이가 12의 배수인 containers를 문제없이 유지하기 위해 선택 되었습니다. breakpoint는 또한 공통 기기의 크기 및 뷰포트 수치의 하위 집합을 대표하며 모든 사용 사례 또는 장치를 특별히 대상하지 않습니다. 대신, 이 사전정의된 범위들은 거의 모든 기기에서 사용할 수 있는 강력하고 일관된 기반을 제공합니다.

Breakpoints는 Sass를 통해 사용자 정의 할 수 있습니다. `_variables.scss` 스타일 시트의 Sass 맵에서 찾을 수 있습니다.

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

Sass 맵과 변수를 수정하는 방법에 대한 자세한 정보와 예시는 [the Sass section of the Grid documentation]({{< docsref "/layout/grid#sass" >}}) 를 참고하세요.

## Media queries

부트스트랩은 모바일 우선으로 개발 되었으므로 몇 가지 [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) 를 이용하여 레이아웃에 적합한 breakpoints를 만듭니다. 이러한 breakpoints는 대부분 최소 뷰포트 넓이를 기반으로하며 뷰포트를 변경함에 따라 요소를 확장 할 수 있습니다.

### Min-width

부트스트랩은 주로 레이아웃, 그리드 시스템 및 구성 요소가 있는 Sass 소스 파일에서 다음과 같은 미디어쿼리 범위 또는 breakpoints를 사용합니다.

```scss
// Source mixins

// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```
이러한 Sass 믹스인은 Sass 변수에 선언 된 값을 사용한 뒤 컴파일되어 CSS로 번역됩니다. 예를 들면:

```scss
// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
```

### Max-width

때때로 다른 방향 (주어진 화면 크기 *또는 더 작은*)으로 이동하는 미디어 쿼리를 사용합니다:

```scss
// No media query necessary for xs breakpoint as it's effectively `@media (max-width: 0) { ... }`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```
이러한 믹스인은 선언 된 breakpoints를 갖고 와서 `.02px` 를 뺀 뒤 `max-width` 값으로 사용합니다. 예를 들면:

```scss
// X-Small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// X-Large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { ... }

// XX-Large devices (larger desktops)
// No media query since the xxl breakpoint has no upper bound on its width
```

{{< callout warning >}}
{{< partial "callout-info-mediaqueries-breakpoints.md" >}}
{{< /callout >}}

### Single breakpoint

최소 및 최대 breakpoint 넓이를 사용하여 화면 크기의 단일 세그먼트를 대상으로하는 미디어 쿼리 및 믹스 인도 있습니다.

```scss
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(xxl) { ... }
```

예를들어 `@include media-breakpoint-only(md) { ... }` 결과는 다음과 같습니다:

```scss
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```

### Between breakpoints

마찬가지로 미디어쿼리는 여러 breakpoint 넓이에 걸쳐있을 수 있습니다.

```scss
@include media-breakpoint-between(md, xl) { ... }
```

결과:

```scss
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```
