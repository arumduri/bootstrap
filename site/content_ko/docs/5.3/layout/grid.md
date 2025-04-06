---
layout: docs
title: Grid system
description: 강력한 모바일 우선 flexbox 그리드를 사용하여 12개의 열 시스템, 6개의 기본 반응형 계층, Sass 변수 및 믹스인, 수십 개의 사전 정의된 클래스 덕분에 모든 모양과 크기의 레이아웃을 빌드할 수 있습니다.
group: layout
toc: true
---

## 예시

Bootstrap의 그리드 시스템은 일련의 컨테이너, 행, 열을 사용하여 콘텐츠를 레이아웃하고 정렬합니다. [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)로 빌드되었으며 완전한 반응형입니다. 다음은 그리드 시스템이 함께 제공되는 방법에 대한 예와 자세한 설명입니다.

{{< callout info >}}
**flexbox를 처음 사용하거나 익숙하지 않나요?** [CSS Tricks flexbox 가이드에서](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) 배경, 철학, 가이드라인, 코드 스니펫에 대해 읽어보세요.
{{< /callout >}}

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
{{< /example >}}

위의 예에서는 사전 정의된 그리드 클래스를 사용하여 모든 기기와 뷰포트에 동일한 너비의 열 3개를 만듭니다. 이러한 열은 부모 `.container`가 있는 페이지 중앙에 있습니다.

## How it works

이를 세분화하면 그리드 시스템이 함께 제공되는 방법은 다음과 같습니다:

- **우리 그리드는 [여섯 개의 반응형 중단점]({{< docsref "/layout/breakpoints" >}}).**  중단점은 `min-width` 미디어 쿼리를 기반으로 합니다. 즉, 중단점과 그 위에 있는 모든 중단점에 영향을 미칩니다 (예: `.col-sm-4`는 `sm`, `md`, `lg`, `xl`, `xxl`에 적용됨). 즉, 각 중단점별로 컨테이너 및 열 크기 및 동작을 제어할 수 있습니다.

- **컨테이너는 콘텐츠를 중앙에 놓고 가로로 채웁니다.** 반응형 픽셀 너비에는 `.container`를, 모든 뷰포트 및 디바이스에서 `width: 100%`에는 `.container-fluid`를, 유동 및 픽셀 폭의 조합에는 반응형 컨테이너 (예: `.container-md`)를 사용합니다.

- **행은 열의 래퍼입니다.** 각 열에는 열 사이의 공간을 제어하기 위한 수평 `padding` (거터라고 함)이 있습니다. 그런 다음 이 `padding`은 여백이 마이너스인 행에서 상쇄되어 열의 콘텐츠가 좌측 하단으로 시각적으로 정렬되도록 합니다. 또한 행은 [열 크기를 균일하게 적용하고](#행열) [거터 클래스]({{< docsref "/layout/gutters" >}})를 통해 콘텐츠의 간격을 변경하는 수정자 클래스를 지원합니다.

- **열은 매우 유연합니다.** 행 당 12개의 템플릿 열을 사용할 수 있으므로 여러 열에 걸쳐 있는 다양한 요소 조합을 만들 수 있습니다. 열 클래스는 확장할 템플릿 열의 수를 나타냅니다 (예: `col-4`는 4개 확장). `width`는 백분율로 설정되므로 항상 상대적인 크기가 동일합니다.

- **또한 거터는 반응형이고 사용자 정의가 가능합니다.** [거터 클래스]({{< docsref "/layout/gutters" >}})는 모든 중단점에서 사용할 수 있고, [마진 및 패딩 간격]({{< docsref "/utilities/spacing" >}})과 같은 크기입니다. 수평 거터는 `.gx-*` 클래스로, 수직 거터는 `.gy-*`로, 모든 거터는 `g-*` 클래스로 변경하세요. `.g-0`은 거터를 제거하는 데에 사용할 수도 있습니다.

- **Sass 변수, 맵, 믹스인은 그리드를 구동합니다.** Bootstrap에서 미리 정의된 그리드 클래스를 사용하지 않으려면 [그리드의 Sass 소스](#sass-변수)를 사용하여 추가적인 시멘틱 마크업으로 직접 생성할 수 있습니다. 또한 더 큰 유연성을 위해 이러한 Sass 변수를 사용하는 일부 CSS 사용자 정의 속성도 포함합니다.

제한 사항 및 [flexbox 관련 버그](https://github.com/philipwalton/flexbugs), [일부 HTML 요소를 플렉스 컨테이너로 사용할 수 없음](https://github.com/philipwalton/flexbugs#flexbug-9)에 주의하세요.

## 그리드 옵션

Bootstrap의 그리드 시스템은 6개의 기본 중단점과 사용자 정의한 모든 중단점에 걸쳐 적응할 수 있습니다. 6개의 기본 그리드 계층은 다음과 같습니다:

- Extra small (xs)
- Small (sm)
- Medium (md)
- Large (lg)
- Extra large (xl)
- Extra extra large (xxl)

위에서 언급했듯이 이러한 각 중단점에는 고유한 컨테이너, 고유한 클래스 접두어, 수정자가 있습니다. 다음은 이러한 중단점에서 그리드가 변경되는 방식입니다:

<div class="table-responsive">
  <table class="table mb-4">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">
          xs<br>
          <span class="fw-normal">&lt;576px</span>
        </th>
        <th scope="col">
          sm<br>
          <span class="fw-normal">&ge;576px</span>
        </th>
        <th scope="col">
          md<br>
          <span class="fw-normal">&ge;768px</span>
        </th>
        <th scope="col">
          lg<br>
          <span class="fw-normal">&ge;992px</span>
        </th>
        <th scope="col">
          xl<br>
          <span class="fw-normal">&ge;1200px</span>
        </th>
        <th scope="col">
          xxl<br>
          <span class="fw-normal">&ge;1400px</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">컨테이너 <code class="fw-normal">max-width</code></th>
        <td>None (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1140px</td>
        <td>1320px</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">클래스 접두사</th>
        <td><code>.col-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
        <td><code>.col-xl-</code></td>
        <td><code>.col-xxl-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">열 개수</th>
        <td colspan="6">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">거터 너비</th>
        <td colspan="6">1.5rem (좌우 각각 .75rem)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">사용자 지정 거터</th>
        <td colspan="6"><a href="{{< docsref ">}}">Yes</a></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="6"><a href="#nesting">Yes</a></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="6"><a href="{{< docsref ">}}">Yes</a></td>
      </tr>
    </tbody>
  </table>
</div>

## 열 자동 레이아웃

`.col-sm-6`과 같이 명시적인 번호가 매겨진 클래스 없이 간편한 열 크기 조정을 위해 중단점별 열 클래스를 활용합니다.

### 동일 너비

예를 들어서 `xs`에서 `xxl`까지 모든 기기와 뷰포트에 적용되는 두 가지 그리드 레이아웃이 있습니다. 필요한 각 중단점에 대해 단위 없는 클래스를 원하는 수만큼 추가하면 모든 열의 너비가 동일합니다.

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

### 한 열의 너비 설정

flexbox 그리드 열에 대한 자동 레이아웃은 또한 한 열의 너비를 설정하고 형제 열이 주위에서 자동으로 크기를 조정하도록 할 수 있음을 의미합니다. 미리 정의된 그리드 클래스 (아래에 표시되어 있음), 그리드 믹스인 또는 인라인 너비를 사용할 수 있습니다. 다른 열은 중앙 열의 너비에 관계없이 크기가 조정됩니다.

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

### Variable width content

`col-{breakpoint}-auto` 클래스를 사용하여 콘텐츠의 자연스러운 너비에 따라 열의 크기를 조정합니다.

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

## 반응형 클래스

Bootstrap의 그리드에는 복잡한 반응형 레이아웃을 빌드하기 위한 6개 계층의 사전 정의된 클래스가 포함되어 있습니다. small, small, medium, large, extra large 기기에서 열의 크기를 원하는 대로 사용자 정의하세요.

### 모든 중단점

가장 작은 기기에서 가장 큰 기기까지 동일한 그리드의 경우 `.col` 및 `.col-*` 클래스를 사용합니다. 특정 크기의 열이 필요한 경우 번호가 지정된 클래스를 지정하세요. 그렇지 않으면 `.col`을 계속 사용하시면 됩니다.

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>
{{< /example >}}

### 수평 중첩

단일 세트의 `.col-sm-*` 클래스를 사용하여 스택에서 시작하여 작은 중단점(`sm`)에서 수평이 되는 기본 그리드 시스템을 만들 수 있습니다.

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row">
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-4">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
{{< /example >}}

### Mix and match

열이 일부 그리드 계층에 쌓이는 것을 원하지 않으시나요? 필요에 따라 각 계층에 대해 서로 다른 클래스를 조합하여 사용하세요. 모든 작동 방식에 대한 더 나은 아이디어는 아래 예를 참조하세요.

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
{{< /example >}}

### 행열

반응형 `.row-cols-*` 클래스를 사용하여 콘텐츠와 레이아웃을 가장 잘 렌더링하는 열 수를 빠르게 설정하세요. 일반 `.col-*` 클래스는 개별 열 (예: `.col-md-4`)에 적용되지만 행 열 클래스는 단축으로 부모 `.row`에 설정됩니다. `.row-cols-auto`를 사용하면 열에 자연스러운 너비를 지정할 수 있습니다.

이러한 행 열 클래스를 사용하여 기본 그리드 레이아웃을 빠르게 생성하거나 카드 레이아웃을 제어할 수 있습니다.

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row row-cols-2">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row row-cols-3">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row row-cols-auto">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col-6">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{{< /example >}}

함께 제공되는 Sass 믹스인 `row-cols()`를 사용할 수도 있습니다:

```scss
.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
```

## Nesting

기본 그리드로 콘텐츠를 중첩하려면 기존 `.col-sm-*` 열 내에 새로운 `.row`와 `.col-sm-*` 열 세트를 추가하세요. 중첩된 행에는 최대 12개 이하의 열을 추가하는 열 집합이 포함되어야 합니다 (사용 가능한 열 12개를 모두 사용할 필요는 없음).

{{< example class="bd-example-row" >}}
<div class="container text-center">
  <div class="row">
    <div class="col-sm-3">
      Level 1: .col-sm-3
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

Bootstrap의 Sass 파일 소스를 사용할 때 Sass 변수와 믹스인을 사용하여 사용자 정의, 의미 체계 및 반응형 페이지 레이아웃을 생성할 수 있는 옵션이 있습니다. 사전 정의된 그리드 클래스는 이러한 동일한 변수와 믹스인을 사용하여 빠른 반응형 레이아웃을 위해 즉시 사용할 수 있는 전체 클래스 모음을 제공합니다.

### Sass 변수

변수와 맵은 열 수, 여백 너비 및 부동 열을 시작할 미디어 쿼리 지점을 결정합니다. 우리는 이것을 사용하여 위에 설명된 미리 정의된 그리드 클래스와 아래에 나열된 사용자 지정 믹스인을 생성합니다.

```scss
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
$grid-row-columns:  6;
```

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

{{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}}

### Sass 믹스인

믹스인은 개별 그리드 열에 대한 시멘틱 CSS를 생성하기 위해 그리드 변수와 함께 사용됩니다.

```scss
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();

// Without optional size values, the mixin will create equal columns (similar to using .col)
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Offset with margins
@include make-col-offset($size, $columns: $grid-columns);
```

### 사용 예시

변수를 사용자 정의 값으로 수정하거나 기본값과 함께 믹스인을 사용할 수 있습니다. 다음은 기본 설정을 사용하여 간격이 있는 2열 레이아웃을 만드는 예입니다.

```scss
.example-container {
  @include make-container();
  // Make sure to define this width after the mixin to override
  // `width: 100%` generated by `make-container()`
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
```

{{< example >}}
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>
{{< /example >}}

## 그리드 사용자 정의

내장된 그리드 Sass 변수와 맵을 사용하여 사전 정의된 그리드 클래스를 완전히 사용자 정의할 수 있습니다. 계층 수, 미디어 쿼리 크기 및 컨테이너 너비를 변경한 다음 다시 컴파일하면 됩니다.

### 열과 거터

그리드 열의 수는 Sass 변수를 통해 수정할 수 있습니다. `$grid-columns`는 각 개별 열의 너비 (백분율)를 생성하는 데에 사용되는 반면 `$grid-gutter-width`는 열 거터의 너비를 설정합니다. `.row-cols-*`의 최대 열 수를 설정하는 데 `$grid-row-columns`가 사용되며, 이 제한을 초과하는 숫자는 무시됩니다.

```scss
$grid-columns: 12 !default;
$grid-gutter-width: 1.5rem !default;
$grid-row-columns: 6 !default;
```

### Grid tiers

열 자체를 넘어 그리드 계층의 수를 사용자 정의할 수도 있습니다. 4개의 그리드 계층만 필요하다면 `$grid-breakpoints` 및 `$container-max-widths`를 다음과 같이 업데이트하면 됩니다:

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
```

Sass 변수 또는 맵을 변경할 때 변경 사항을 저장하고 다시 컴파일해야 합니다. 그렇게 하면 열 너비, 오프셋 및 순서에 대한 사전 정의된 그리드 클래스의 새로운 세트가 출력됩니다. 반응형 가시성 유틸리티도 사용자 지정 중단점을 사용하도록 업데이트됩니다. 그리드 값이 `px`로 설정되어 있는지 확인해주세요 (`rem`, `em`, `%`는 사용할 수 없음).
