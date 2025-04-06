---
layout: docs
title: Z-index
description: 저수준의 `z-index` 유틸리티를 사용하여 요소 또는 컴포넌트의 스택 레벨을 빠르게 변경할 수 있습니다.
group: utilities
toc: true
added:
  version: "5.3"
---

## 예제

`z-index` 유틸리티를 사용하여 요소를 서로 겹치게 쌓을 수 있습니다. 사용자 지정 스타일을 사용하거나 [위치 유틸리티]({{< docsref "/utilities/position/" >}})를 사용하여 `static` 이외의 `position` 값을 설정해야 합니다.

{{< callout >}}
이러한 "저수준" `z-index` 유틸리티는 기본값이 `-1`부터 `3`까지이며, 겹쳐진 구성 요소의 레이아웃에 사용합니다. 고수준 `z-index` 값은 모달 및 툴팁과 같은 오버레이 구성 요소에 사용됩니다.
{{< /callout >}}

{{< example class="bd-example-zindex-levels position-relative" >}}
<div class="z-3 position-absolute p-5 rounded-3"><span>z-3</span></div>
<div class="z-2 position-absolute p-5 rounded-3"><span>z-2</span></div>
<div class="z-1 position-absolute p-5 rounded-3"><span>z-1</span></div>
<div class="z-0 position-absolute p-5 rounded-3"><span>z-0</span></div>
<div class="z-n1 position-absolute p-5 rounded-3"><span>z-n1</span></div>
{{< /example >}}

## 오버레이

Bootstrap 오버레이 구성 요소인 드롭다운, 모달, 오프캔버스, 팝오버, 토스트 및 툴팁은 각각 고유한 `z-index` 값을 가지고 있어 인터페이스의 경쟁하는 "레이어"에서 사용 가능한 경험을 보장합니다.

[`z-index` 레이아웃 페이지]({{< docsref "/layout/z-index" >}})에서 자세히 읽어보세요.

## 컴포넌트 접근 방식

일부 컴포넌트에서는 저수준의 `z-index` 값을 사용하여 버튼 그룹의 버튼이나 목록 그룹의 항목과 같이 서로 겹치는 반복 요소를 관리합니다.

`z-index` 접근 방식에 대해 [자세히 알아보세요]({{< docsref "/extend/approach#z-index-scales" >}}).

## CSS

### Sass 맵

이 Sass 맵을 사용하여 사용 가능한 값 및 생성된 유틸리티를 변경할 수 있습니다.

{{< scss-docs name="zindex-levels-map" file="scss/_variables.scss" >}}

### Sass 유틸리티 API

위치 유틸리티는 `scss/_utilities.scss`의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법을 알아보세요.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-zindex" file="scss/_utilities.scss" >}}
