---
layout: docs
title: CSS 그리드
title_en: CSS Grid
description: 예제와 코드 스니펫을 사용하여 CSS 그리드에 구축된 대체 레이아웃 시스템을 활성화, 사용 및 사용자 지정하는 방법을 알아보세요.
group: layout
toc: true
---

Bootstrap의 기본 그리드 시스템은 수백만 명의 사람들이 시도하고 테스트한 10년 이상의 CSS 레이아웃 기술의 정점을 나타냅니다. 그러나 그것은 또한 우리가 새로운 브라우저에서 볼 수 있는 CSS 그리드와 같은 많은 최신 CSS 기능과 기술 없이 만들어졌습니다.

{{< callout warning >}}
**주의—CSS 그리드 시스템은 실험적이며 v5.1.0에서 사용하기 위해 별도의 옵트인이 필요합니다!** CSS 그리드를 보여주기 위해 문서의 CSS에는 포함되어있지만 기본적으로 비활성화되어 있습니다. 프로젝트에서 활성화하는 방법을 배우려면 계속 읽어보세요.
{{< /callout >}}

## 작동 원리

Bootstrap 5에서는 CSS 그리드를 기반으로 하지만 Bootstrap에 맞게 변경된 별도의 그리드 시스템을 활성화하는 옵션을 추가했습니다. 반응형 레이아웃을 구축하기 위해 마음대로 적용할 수 있는 클래스를 여전히 얻을 수 있지만 내부적으로는 다른 접근 방식을 사용합니다.

- **CSS 그리드를 사용하려면 별도의 옵트인이 필요합니다.** `$enable-grid-classes: false`를 설정하여 기본 그리드 시스템을 비활성화하고 `$enable-cssgrid: true`를 설정하여 CSS 그리드를 활성화합니다. 그런 다음에 Sass를 다시 컴파일하세요.

- **`.row`의 인스턴스를 `.grid`로 바꾸세요.** `.grid` 클래스는 `display: grid`를 설정하고 HTML로 빌드할 `grid-template`을 생성합니다.

- **`.col-*` 클래스를 `.g-col-*` 클래스로 바꾸세요.** 이는 CSS 그리드 열이 `width` 대신에 `grid-column` 속성을 사용하기 때문입니다.

- **열과 거터 크기는 CSS 변수를 통해 설정됩니다.** 부모 `.grid`에 설정하고 `--bs-columns` 및 `--bs-gap`을 사용하여 인라인 또는 스타일시트에서 원하는 대로 사용자 정의합니다.

앞으로 `gap` 속성이 flexbox에 대한 거의 완전한 브라우저 지원을 달성함에 따라 Bootstrap은 하이브리드 솔루션으로 전환될 것입니다.

## 주요 차이점

기본 그리드 시스템과 비교했을 때의 차이점은 다음과 같습니다:

- Flex 유틸리티는 같은 방식으로 CSS 그리드 열에 영향을 주지 않습니다.

- 간격이 거터를 대체합니다. `gap` 속성은 기본 그리드 시스템의 수평 `padding`을 대체하며 `margin`과 같은 기능을 합니다.

- 따라서 `.row`와 달리 `.grid`에는 마이너스 여백이 없으며 여백 유틸리티를 사용하여 그리드 거터를 변경할 수 없습니다. 그리드 간격은 기본적으로 가로 및 세로로 적용됩니다. 자세한 내용은 [사용자 지정 문단](#사용자-지정)을 참조하세요.

- 인라인 및 사용자 정의 스타일은 수정자 클래스를 대체하는 것으로 간주되어야 합니다 (예: `style="--bs-columns: 3;"` 대 `class="row-cols-3"`).

- 중첩도 유사하게 작동하지만 중첩된 `.grid`의 각 인스턴스에서 열 수를 재설정해야 할 수 있습니다. 자세한 내용은 [중첩 문단](#중첩)을 참조하세요.

## 예제

### 열 3개

`.g-col-4` 클래스를 사용하여 모든 뷰포트 및 기기에 동일한 너비의 열 3개를 만들 수 있습니다. [반응형 클래스](#responsive)를 추가하여 뷰포트 크기별로 레이아웃을 변경할 수 있습니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>
{{< /example >}}

### 반응형

반응형 클래스를 사용하여 뷰포트에서 레이아웃을 조정하세요. 이 예제는 가장 좁은 뷰포트에서 2개의 열로 시작한 다음 중간 뷰포트 이상에서 3개의 열로 확장됩니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
</div>
{{< /example >}}

모든 뷰포트에서 이 열 2개 레이아웃과 비교해보세요.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
{{< /example >}}

## 줄바꿈

가로로 더 이상 공간이 없으면 그리드 항목이 자동으로 다음 줄로 줄바꿈됩니다. `gap`은 그리드 항목 사이의 수평 및 수직 간격에 적용됩니다

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
{{< /example >}}

## 시작

시작 클래스는 기본 그리드의 오프셋 클래스를 대체하는 것을 목표로 하지만 완전히 동일하지는 않습니다. CSS 그리드는 브라우저에 "이 열에서 시작" 및 "이 열에서 끝"이라고 알려주는 스타일을 통해 그리드 템플릿을 만듭니다. 이러한 속성은 `grid-column-start` 및 `grid-column-end`입니다. 시작 클래스는 전자의 줄임말입니다. 필요에 따라 열의 크기를 조정하고 정렬하기 위해 열 클래스와 쌍을 이룹니다. 시작 클래스는 `0`이 이러한 속성에 대해 잘못된 값이므로 `1`에서 시작합니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
  <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>
{{< /example >}}

## 자동 열

그리드 항목 (`.grid`의 직계 자식)에 클래스가 없으면 각 그리드 항목은 자동으로 하나의 열로 크기가 조정됩니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
{{< /example >}}

이 동작은 그리드 열 클래스와 혼합될 수 있습니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-6">.g-col-6</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
{{< /example >}}

## 중첩

기본 그리드 시스템과 유사하게 CSS 그리드를 사용하면 `.grid`를 쉽게 중첩할 수 있습니다. 그러나 기본값과 달리 이 그리드는 행, 열 및 간격의 변경 사항을 상속합니다. 아래의 예를 확인해보세요.

- 기본 열 수를 로컬 CSS 변수인 `--bs-columns: 3`으로 재정의합니다.
- 첫 번째 자동 열에서 열 개수는 상속되며 각 열은 사용 가능한 너비의 1/3입니다.
- 두 번째 자동 열에서 중첩된 `.grid`의 열 개수를 12 (기본값)로 재설정했습니다.
- 세 번째 자동 열에는 중첩된 내용이 없습니다.

실제로 이것은 기본 그리드 시스템과 비교할 때 더 복잡하고 사용자 정의가 가능한 레이아웃을 가능하게 해줍니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 3;">
  <div>
    First auto-column
    <div class="grid">
      <div>Auto-column</div>
      <div>Auto-column</div>
    </div>
  </div>
  <div>
    Second auto-column
    <div class="grid" style="--bs-columns: 12;">
      <div class="g-col-6">6 of 12</div>
      <div class="g-col-4">4 of 12</div>
      <div class="g-col-2">2 of 12</div>
    </div>
  </div>
  <div>Third auto-column</div>
</div>
{{< /example >}}

## 사용자 지정

로컬 CSS 변수를 사용하여 열 수, 행 수 및 간격 너비를 사용자 정의할 수 있습니다.

{{< bs-table "table" >}}
| 변수 | 폴백 값 | 설명 |
| --- | --- | --- |
| `--bs-rows` | `1` | 그리드 템플릿의 행 수 |
| `--bs-columns` | `12` | 그리드 템플릿의 열 수 |
| `--bs-gap` | `1.5rem` | 열 사이의 간격 크기 (가로 및 세로) |
{{< /bs-table >}}

이러한 CSS 변수에는 기본값이 없습니다. 대신 로컬 인스턴스가 제공될 _때까지_ 사용되는 대체 값을 적용합니다. 예를 들어, 우리는 CSS 그리드 행에 `var(--bs-rows, 1)`를 사용합니다. 이는 `--bs-rows`가 아직 설정되지 않았기 때문에 무시됩니다. 그렇게 되면 `.grid` 인스턴스는 `1`의 대체 값 대신 해당 값을 사용합니다.

### 그리드 클래스 없음

`.grid`의 직계 자식 요소는 그리드 항목이므로 `.g-col` 클래스를 명시적으로 추가하지 않고도 크기가 조정됩니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 3;">
  <div>Auto-column</div>
  <div>Auto-column</div>
  <div>Auto-column</div>
</div>
{{< /example >}}

### 열과 간격

열 수와 간격을 조정할 수 있습니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 4; --bs-gap: 5rem;">
  <div class="g-col-2">.g-col-2</div>
  <div class="g-col-2">.g-col-2</div>
</div>
{{< /example >}}

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 10; --bs-gap: 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-4">.g-col-4</div>
</div>
{{< /example >}}

### Adding rows

행 추가 및 열 배치를 조정할 수 있습니다:

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-rows: 3; --bs-columns: 3;">
  <div>Auto-column</div>
  <div class="g-start-2" style="grid-row: 2">Auto-column</div>
  <div class="g-start-3" style="grid-row: 3">Auto-column</div>
</div>
{{< /example >}}

### 간격

`row-gap`을 수정하여 수직 간격만 변경합니다. 우리는 `.grid`에 `gap`을 사용하지만 필요에 따라 `row-gap` 및 `column-gap`을 수정할 수 있습니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="row-gap: 0;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
{{< /example >}}

그 때문에 단일 값 (모든 방향) 또는 한 쌍의 값 (가로 및 세로)을 취할 수 있는 다른 수직 및 수평 `gap`을 가질 수 있습니다. 이것은 `gap`에 대한 인라인 스타일이나 `--bs-gap` CSS 변수로 적용할 수 있습니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-gap: .25rem 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
{{< /example >}}

## Sass

CSS 그리드의 한 가지 제한 사항은 기본 클래스가 여전히 두 개의 Sass 변수 `$grid-columns` 및 `$grid-gutter-width`에 의해 생성된다는 것입니다. 이것은 컴파일된 CSS에서 생성된 클래스의 수를 효과적으로 미리 결정합니다. 여기에는 두 가지 옵션이 있습니다.

- 기본 Sass 변수를 수정하고 CSS를 다시 컴파일하세요.
- 인라인 또는 사용자 정의 스타일을 사용하여 제공된 클래스를 보충하세요.

예를 들어 열 수를 늘리고 간격 크기를 변경한 다음 인라인 스타일과 미리 정의된 CSS 그리드 열 클래스 (예: `.g-col-4`)를 혼합하여 "열"의 크기를 조정할 수 있습니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 18; --bs-gap: .5rem;">
  <div style="grid-column: span 14;">14 columns</div>
  <div class="g-col-4">.g-col-4</div>
</div>
{{< /example >}}
