---
layout: docs
title: 컨테이너
title_en: Containers
description: 컨테이너는 지정된 기기 또는 뷰포트 내에서 콘텐츠를 포함하고 채우고 정렬하는 Bootstrap의 기본 구성 요소입니다.
group: layout
toc: true
---

## How they work

컨테이너는 Bootstrap에서 가장 기본적인 레이아웃 요소이며 **기본 그리드 시스템을 사용할 때 필요합니다**. 컨테이너는 내용을 포함하고 채우고 (때로는) 내용을 중앙 정렬하는 데에 사용됩니다. 컨테이너는 &*중첩될 수 있지만* 대부분의 레이아웃에는 중첩된 컨테이너가 필요하지 않습니다.

Bootstrap에는 세 가지 다른 컨테이너가 있습니다:

- 각 반응형 중단점에 `max-width`를 설정하는 `.container`
- 모든 중단점에 `width: 100%`를 설정하는 `.container-fluid`
- 정의된 중단점까지 `width: 100%`를 설정하는 `.container-{breakpoint}`

아래 표는 각 중단점에서 각 컨테이너의 `max-width`가 원래 `.container`와 '.container-fluid'가 어떻게 비교되는지 보여줍니다.

[그리드 예제]({{< docsref "/examples/grid#containers" >}})에서 실제로 보고 비교헤보세요.

<table class="table">
  <thead>
    <tr>
      <td class="border-dark"></td>
      <th scope="col">
        Extra small<br>
        <span class="fw-normal">&lt;576px</span>
      </th>
      <th scope="col">
        Small<br>
        <span class="fw-normal">&ge;576px</span>
      </th>
      <th scope="col">
        Medium<br>
        <span class="fw-normal">&ge;768px</span>
      </th>
      <th scope="col">
        Large<br>
        <span class="fw-normal">&ge;992px</span>
      </th>
      <th scope="col">
        X-Large<br>
        <span class="fw-normal">&ge;1200px</span>
      </th>
      <th scope="col">
        XX-Large<br>
        <span class="fw-normal">&ge;1400px</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="fw-normal"><code>.container</code></th>
      <td class="text-muted">100%</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-sm</code></th>
      <td class="text-muted">100%</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-md</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-lg</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-xl</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-xxl</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-fluid</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
    </tr>
  </tbody>
</table>

## Default container

기본 `.container` 클래스는 반응형 고정 너비 컨테이너입니다. 즉, `max-width`가 각 중단점에서 변경됩니다.

```html
<div class="container">
  <!-- Content here -->
</div>
```

## Responsive containers

반응형 컨테이너를 사용하면 지정된 중단점에 도달할 때까지 너비가 100%인 클래스를 지정할 수 있으며, 그 이후에는 더 높은 각 중단점에 대해 `max-width`를 적용합니다. 예를 들어, `.container-sm`은 `md`, `lg`, `xl` 및 `xxl`로 확장되는 `sm` 중단점에 도달할 때까지 시작하는 너비가 100%입니다.

```html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

## Fluid containers

뷰포트의 전체 너비에 걸쳐 있는 전체 너비 컨테이너에 `.container-fluid`를 사용합니다.

```html
<div class="container-fluid">
  ...
</div>
```

## Sass

위에 나와있는 것처럼 Bootstrap은 원하는 레이아웃을 빌드하는 데 도움이 되는 일련의 미리 정의된 컨테이너 클래스를 생성합니다. 다음과 같이 미리 정의된 컨테이너 클래스를 강화하는 Sass 맵(`_variables.scss`에 있음)을 수정하여 커스터마이징할 수 있습니다:

{{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}}

Sass를 커스터마이징하는 것 외에도 Sass 믹스인을 사용하여 고유한 컨테이너를 만들 수도 있습니다.

```scss
// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
  width: 100%;
  padding-right: $padding-x;
  padding-left: $padding-x;
  margin-right: auto;
  margin-left: auto;
}

// Usage
.custom-container {
  @include make-container();
}
```

Sass 맵 및 변수를 수정하는 방법에 대한 자세한 내용과 예제는 [그리드 문서의 Sass 부분]({{< docsref "/layout/grid#sass" >}})을 참조하세요.
