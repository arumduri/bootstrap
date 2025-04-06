---
layout: docs
title: Vertical rule
description: 사용자 지정 세로줄 도우미를 사용하여 `<hr>` 요소와 같은 세로 구분선을 만드세요.
group: helpers
toc: true
added: "5.1"
---

## How it works

세로줄은 `<hr>` 요소에서 영감을 받았으며 공통 레이아웃에서 수직 구분선을 만들 수 있습니다. 세로줄은 `<hr>` 요소처럼 스타일이 지정되어 있습니다:

- `1px` 너비
- `1em`의 `min-height`
- `currentColor` 및 `opacity`로 색상 지정 가능

필요에 따라 추가 스타일로 사용자 정의하세요.

## 예제

{{< example >}}
<div class="vr"></div>
{{< /example >}}

수직 규칙은 flex 레이아웃에서 높이를 조정합니다:

{{< example >}}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>
{{< /example >}}

## 스택과 함께 사용하기

[스택]({{< docsref "/helpers/stacks" >}})에서 사용할 수도 있습니다:

{{< example class="bd-example-flex" >}}
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="p-2">Third item</div>
</div>
{{< /example >}}

## CSS

### Sass 변수

너비를 변경하려면 세로줄 Sass 변수를 사용자 정의하세요.

{{< scss-docs name="vr-variables" file="scss/_variables.scss" >}}
