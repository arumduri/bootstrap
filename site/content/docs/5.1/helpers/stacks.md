---
layout: docs
title: 스택
title_en: Stacks
description: 컴포넌트 레이아웃을 그 어느 때보다 빠르고 쉽게 만들기 위해 flexbox 유틸리티를 기반으로 하는 약칭 도우미입니다.
group: helpers
toc: true
---

{{< callout info >}}
{{< partial "callout-untranslated.md" >}}
{{< /callout >}}

스택은 Bootstrap에서 레이아웃을 빠르고 쉽게 생성하기 위해 여러 flexbox 속성을 적용하는 지름길을 제공합니다. 개념 및 구현에 대한 모든 크레딧은 오픈 소스 [Pylon Project](https://almonk.github.io/pylon/)에 있습니다.

## 세로

세로 레이아웃을 만들려면 `.vstack`을 사용하세요. 스택 항목은 기본적으로 full-width입니다. 항목 사이에 공간을 추가하려면 `.gap-*` 유틸리티를 사용하세요.

{{< example >}}
<div class="vstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{{< /example >}}

## 가로

가로 레이아웃에는 `.hstack`을 사용하세요. 쌓인 항목은 기본적으로 세로 중앙에 배치되며 필요한 너비만 차지합니다. 항목 사이에 공간을 추가하려면 `.gap-*` 유틸리티를 사용하세요.

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{{< /example >}}

간격을 벌리기 위해 `.ms-auto`와 같은 수평 여백 유틸리티를 사용할 수 있습니다:

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border ms-auto">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{{< /example >}}

[세로줄]({{< docsref "/helpers/vertical-rule" >}})도 추가할 수 있습니다:

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="bg-light border">Third item</div>
</div>
{{< /example >}}

## 예제

`.vstack` 버튼과 다른 요소를 중첩시킬 수 있습니다:

{{< example >}}
<div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-secondary">Save changes</button>
  <button type="button" class="btn btn-outline-secondary">Cancel</button>
</div>
{{< /example >}}

`.hstack`을 사용하여 인라인 폼을 만들 수 있습니다:

{{< example >}}
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here...">
  <button type="button" class="btn btn-secondary">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Reset</button>
</div>
{{< /example >}}

## Sass

{{< scss-docs name="stacks" file="scss/helpers/_stacks.scss" >}}