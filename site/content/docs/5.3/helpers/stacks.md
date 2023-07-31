---
layout: docs
title: 스택
title_en: Stacks
description: 컴포넌트 레이아웃을 그 어느 때보다 빠르고 쉽게 만들기 위해 flexbox 유틸리티를 기반으로 하는 약칭 도우미입니다.
group: helpers
toc: true
added: "5.1"
---

스택은 Bootstrap에서 레이아웃을 빠르고 쉽게 생성하기 위해 여러 flexbox 속성을 적용하는 지름길을 제공합니다. 개념 및 구현에 대한 모든 크레딧은 오픈 소스 [Pylon Project](https://almonk.github.io/pylon/)에 있습니다.

{{< callout warning >}}
주의! 최근 Safari에 flexbox가 있는 갭 유틸리티에 대한 지원이 추가되었으므로 원하는 브라우저 지원을 확인하는 것이 좋습니다. 그리드 레이아웃에는 문제가 없어야 합니다. [자세히 알아보세요](https://caniuse.com/flexbox-gap).
{{< /callout >}}

## 세로

세로 레이아웃을 만들려면 `.vstack`을 사용하세요. 스택 항목은 기본적으로 full-width입니다. 항목 사이에 공간을 추가하려면 `.gap-*` 유틸리티를 사용하세요.

{{< example class="bd-example-flex" >}}
<div class="vstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2">Second item</div>
  <div class="p-2">Third item</div>
</div>
{{< /example >}}

## 가로

수평 레이아웃에는 `.hstack`을 사용하세요. 중첩된 항목은 기본적으로 수직 중심으로 배치되며 필요한 너비만 차지합니다. 항목 사이에 공간을 추가하려면 `.gap-*` 유틸리티를 사용하세요.

{{< example class="bd-example-flex" >}}
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2">Second item</div>
  <div class="p-2">Third item</div>
</div>
{{< /example >}}

간격을 벌리기 위해 `.ms-auto`와 같은 수평 여백 유틸리티를 사용할 수 있습니다:

{{< example class="bd-example-flex" >}}
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="p-2">Third item</div>
</div>
{{< /example >}}

[세로줄]({{< docsref "/helpers/vertical-rule" >}})도 추가할 수 있습니다:

{{< example class="bd-example-flex" >}}
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="p-2">Third item</div>
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
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-secondary">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Reset</button>
</div>
{{< /example >}}

## CSS

{{< scss-docs name="stacks" file="scss/helpers/_stacks.scss" >}}
