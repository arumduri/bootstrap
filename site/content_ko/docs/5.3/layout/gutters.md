---
layout: docs
title: 거터
description: 거터는 열 사이의 패딩으로, Bootstrap 그리드 시스템에서 콘텐츠의 간격을 맞추고 정렬하는 데에 사용됩니다.
group: layout
toc: true
---

## 작동 원리

- **거터는 가로 `padding`에 의해 생성되는 열 콘텐츠 사이의 간격입니다.** 각 열에 `padding-right` 및 `padding-left`를 설정하고 음수 `margin`을 사용하여 각 행의 시작과 끝에서 이를 오프셋하여 콘텐츠를 정렬합니다.

- **거터의 너비는 `1.5rem` (`24px`)에서 시작합니다.** 이를 통해 그리드를 [패딩 및 마진 스페이서 스케일]({{< docsref "/utilities/spacing" >}})과 일치시킬 수 있습니다.

- **거터는 반응형으로 조정될 수 있습니다.** 중단점별 (breakpoint-specific) 거터 클래스를 사용하여 세로 거터, 가로 거터 및 모든 거터를 수정할 수 있습니다.

## 수평 거터

`.gx-*` 클래스를 사용하여 수평 거터 너비를 제어할 수 있습니다. `.container`  또는 `.container-fluid` 부모는 일치하는 패딩 유틸리티를 사용하여 원하지 않는 오버플로를 방지하기 위해 더 큰 거터를 사용하는 경우 조정해야할 수 있습니다. 예를 들어, 다음 예시에서는 `.px-4`로 패딩을 늘렸습니다:

{{< example class="bd-example-cols" >}}
<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

대안은 `.overflow-hidden` 클래스로 `.row` 주위에 래퍼를 추가하는 것입니다.

{{< example class="bd-example-cols" >}}
<div class="container overflow-hidden text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## 수직 거터

`.gy-*` 클래스는 열이 새 줄로 줄 바꿈될 때 행 내의 세로 거터 너비를 제어하는 ​​데에 사용할 수 있습니다. 가로 거터와 마찬가지로 세로 거터는 페이지 끝의 `.row` 아래에 약간의 오버플로를 유발할 수 있습니다. 이 경우 `.overflow-hidden` 클래스로`.row` 주위에 래퍼를 추가합니다.

{{< example class="bd-example-cols" >}}
<div class="container overflow-hidden text-center">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## 수평 & 수직 거터

`.g-*` 클래스를 사용하여 거터 너비를 제어할 수 있습니다. 다음 예시에서는 더 작은 거터 너비를 사용하므로 `.overflow-hidden` 래퍼 클래스를 추가할 필요가 없습니다.

{{< example class="bd-example-cols" >}}
<div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## 행열 거터

행 열에 거터 클래스를 추가할 수도 있습니다. 다음 예시에서는 반응형 행열과 반응형 거터 클래스를 사용합니다.

{{< example class="bd-example-cols" >}}
<div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
  </div>
</div>
{{< /example >}}

## 거터 제거

사전 정의된 그리드 클래스의 열 사이의 거터는 `.g-0`으로 제거할 수 있습니다. 이렇게 하면 `.row`에서 음수 `margin`이 제거되고 모든 직계 자식 열에서 가로 `padding`이 제거됩니다.

**edge-to-edge 디자인이 필요하신가요?** 부모 `.container` 또는 `.container-fluid`를 삭제하고 `.row`에 `.mx-0`을 추가해서 오버플로우를 방지하세요.

실제로는 다음과 같이 보입니다. 다른 모든 사전 정의된 그리드 클래스 (열 너비, 반응형 계층, 재정렬 등)와 함께 계속해서 사용할 수 있습니다.

{{< example class="bd-example-row" >}}
<div class="row g-0 text-center">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{{< /example >}}

## 거터 수정

클래스는 `$spacers` Sass 맵에서 상속된 `$gutters` Sass 맵에서 빌드됩니다.

```scss
$grid-gutter-width: 1.5rem;
$gutters: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);
```
