---
layout: docs
title: 프로그레스
title_en: Progress
description: 스택형 막대, 애니메이션 배경 및 텍스트 레이블을 지원하는 Bootstrap 사용자 정의의 프로그레스 바를 위한 문서 및 예시입니다.
group: components
toc: true
---

## 작동 원리

프로그레스 컴포넌트는 2개의 HTML 요소와 너비를 설정하기 위한 몇 가지 CSS와 속성들로 구축됩니다. [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)는 사용하지 않음으로, 프로그레스 바를 쌓아 올리거나 애니메이션화 하거나 텍스트 라벨을 배치할 수 있습니다.

- 프로그레스 바의 최대 너비를 나타내기 위해 `.progress`를 사용합니다.
- 진행상황을 나타내기 위해 안쪽에 `.progress-bar`를 사용합니다.
- `.progress-bar`는 폭을 설정하기 위해 인라인 스타일, 유틸리티 클래스 또는 사용자 정의 CSS를 필요로 합니다.
- `.progress-bar`는 액세스 할 수 있도록 몇개의 `role`과 `aria` 속성을 필요로 합니다.

이를 정리하면 다음과 같습니다.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

Bootstrap [utilities for setting width]({{< docsref "/utilities/sizing" >}})을 사용하면, 필요에 따라서 진척 상황을 신속하게 설정하는데 도움이 될지도 모릅니다.

{{< example >}}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## 라벨

`.progress-bar` 안에 텍스트를 배치하고 프로그레스 바에 라벨을 추가합니다.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{{< /example >}}

## 높이

`.progress`에는 `height` 값만 설정되어 있기 때문에, 이 값을 변경하면 내부 `.progress-bar`는 그에 따라 자동으로 크기가 변경됩니다.

{{< example >}}
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## 배경색

Background 유틸리티 클래스를 사용해 각각의 프로그레스 바의 외형을 변경합니다.

{{< example >}}
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## 다수

필요에 따라 프로그레스 컴포넌트에 여러 개의 프로그레스 바를 포함할 수 있습니다.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## 스트라이프

임의의 `.progress-bar`에 `.progress-bar-striped`를 추가해 프로그레스 바의 배경색에 CSS 그라데이션으로 스트라이프를 적용합니다.

{{< example >}}
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## 애니메이션 스트라이프

스트라이프 형태의 그라데이션을 애니메이션화할 수도 있습니다. `.progress-bar`에 `.progress-bar-animated`를 추가하면 CSS3 애니메이션으로 줄무늬를 오른쪽에서 왼쪽으로 애니메이션 시킬 수 있습니다.

<div class="bd-example">
  <div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
  </div>
  <button type="button" class="btn btn-secondary mt-3" data-bs-toggle="button" id="btnToggleAnimatedProgress" aria-pressed="false" autocomplete="off">
    Toggle animation
  </button>
</div>

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
```

## Sass

### 변수

{{< scss-docs name="progress-variables" file="scss/_variables.scss" >}}

### 키프레임

CSS 애니메이션화를 위해 `scss/_progress-bar.scss`에 포함되어 있는 `.progress-bar-animated`를 사용합니다.

{{< scss-docs name="progress-keyframes" file="scss/_progress.scss" >}}
