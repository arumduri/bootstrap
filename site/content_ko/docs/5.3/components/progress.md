---
layout: docs
title: 프로그레스
description: 스택형 막대, 애니메이션 배경 및 텍스트 레이블을 지원하는 Bootstrap 사용자 정의의 프로그레스 바를 위한 문서 및 예시입니다.
group: components
toc: true
---

{{< callout info >}}
**v5.3.0의 새로운 마크업 -** 진행률 표시줄에 대한 이전 HTML 구조를 더 이상 사용하지 않고 더 접근하기 쉬운 구조로 대체했습니다. 이전 구조는 v6까지 계속 작동합니다. [마이그레이션 가이드에서 변경된 내용을 확인하세요.]({{< docsref "/migration#improved-markup-for-progress-bars" >}})
{{< /callout >}}

## 작동 원리

프로그레스 컴포넌트는 두 개의 HTML 요소와 너비를 설정하는 몇 가지 CSS, 몇 가지 속성으로 만들어집니다. [HTML5 `<progress>` 요소](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)를 사용하지 않으므로 진행률 표시줄을 쌓고, 애니메이션을 적용하고, 그 위에 텍스트 레이블을 배치할 수 있습니다.

- 진행률 표시줄의 최대 값을 나타내기 위해 `.progress`를 래퍼로 사용합니다.
- `.progress` 래퍼에는 접근 가능한 이름(`aria-label`, `aria-labelledby` 등 사용)을 포함하여 `role="progressbar"` 및 `aria` 속성이 필요합니다.
- 내부의 `.progress-bar`는 시각적 표시줄과 레이블에만 사용합니다.
- `.progress-bar`의 너비를 설정하려면 인라인 스타일, 유틸리티 클래스 또는 사용자 정의 CSS가 필요합니다.
- 여러 개의 누적 진행률 표시줄을 만들 수 있는 특별한 `.progress-stacked` 클래스를 제공합니다.

이 모든 것을 합치면 다음과 같은 예제가 됩니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>
{{< /example >}}

## 표시줄 크기 조정

### 너비

Bootstrap은 몇 가지 [너비 설정을 위한 유틸리티]({{< docsref "/utilities/sizing" >}})를 제공합니다. 필요에 따라 `.progress-bar`의 너비를 빠르게 구성하는 데 도움이 될 수 있습니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-75"></div>
</div>
{{< /example >}}

### 높이

`.progress`에는 `height` 값만 설정되어 있기 때문에, 이 값을 변경하면 내부 `.progress-bar`는 그에 따라 자동으로 크기가 변경됩니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
  <div class="progress-bar" style="width: 25%"></div>
</div>
{{< /example >}}

## 라벨

`.progress-bar` 안에 텍스트를 배치하고 프로그레스 바에 라벨을 추가합니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>
{{< /example >}}

기본적으로 `.progress-bar` 내부의 콘텐츠는 `.overflow: hidden`으로 제어되므로 표시줄 밖으로 흘러나오지 않습니다. 진행률 표시줄이 레이블보다 짧으면 콘텐츠가 막혀서 읽을 수 없게 될 수 있습니다. 이 동작을 변경하려면 [오버플로 유틸리티]({{< docsref "/utilities/overflow" >}})에서 `.overflow-visible`을 사용할 수 있지만, 텍스트가 계속 읽을 수 있도록 명시적인 [텍스트 색상]({{< docsref "/utilities/colors#colors" >}})도 정의해야 합니다. 현재 이 접근 방식은 [색상 모드]({{< docsref "/customize/color-modes" >}})를 고려하지 않는다는 점에 유의하세요.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
</div>
{{< /example >}}

## 배경색

Background 유틸리티 클래스를 사용해 각각의 프로그레스 바의 외형을 변경합니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%"></div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

사용자 지정 배경색으로 진행률 표시줄에 레이블을 추가하는 경우에는 적절한 [텍스트 색상]({{< docsref "/utilities/colors#colors" >}})도 설정해야 레이블이 가독성을 유지하고 충분한 대비를 유지할 수 있습니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 25%">25%</div>
</div>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 50%">50%</div>
</div>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style="width: 75%">75%</div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%">100%</div>
</div>
{{< /example >}}

또는 새로운 결합형 [색상 및 배경]({{< docsref "/helpers/color-background" >}}) 도우미 클래스를 사용할 수도 있습니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
</div>
{{< /example >}}

## 다수

`.progress-stacked`가 있는 컨테이너 안에 여러 개의 진행률 컴포넌트를 포함시켜 하나의 누적된 진행률 표시줄을 만들 수 있습니다. 이 경우 진행률 표시줄의 시각적 너비를 설정하는 스타일링은 `.progress-bar`가 아닌 `.progress` 요소에 적용해야 합니다.

{{< example >}}
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
{{< /example >}}

## 스트라이프

임의의 `.progress-bar`에 `.progress-bar-striped`를 추가해 프로그레스 바의 배경색에 CSS 그라데이션으로 스트라이프를 적용합니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>
{{< /example >}}

## 애니메이션 스트라이프

스트라이프 형태의 그라데이션을 애니메이션화할 수도 있습니다. `.progress-bar`에 `.progress-bar-animated`를 추가하면 CSS3 애니메이션으로 줄무늬를 오른쪽에서 왼쪽으로 애니메이션 시킬 수 있습니다.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
</div>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.2.0" >}}

Bootstrap의 진화하는 CSS 변수 접근 방식의 일환으로 진행률 표시줄은 이제 `.progress`에서 로컬 CSS 변수를 사용하여 실시간 사용자 정의 기능을 향상시킵니다. CSS 변수의 값은 Sass를 통해 설정되므로 Sass 사용자 정의도 계속 지원됩니다.

{{< scss-docs name="progress-css-vars" file="scss/_progress.scss" >}}

### Sass 변수

{{< scss-docs name="progress-variables" file="scss/_variables.scss" >}}

### 키프레임

CSS 애니메이션화를 위해 `scss/_progress-bar.scss`에 포함되어 있는 `.progress-bar-animated`를 사용합니다.

{{< scss-docs name="progress-keyframes" file="scss/_progress.scss" >}}
