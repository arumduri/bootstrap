---
layout: docs
title: Close button(닫기 버튼)
description: 모달이나 경고창 등의 컨텐츠를 닫기 위한 범용적인 닫기 버튼입니다.
group: components
toc: true
---

## Example

`.btn-close` 을 사용해 컨포넌트를 닫는 옵션을 제공합니다. 기본 스타일은 제한되어 있지만, 커스터마이즈 가능합니다. Sass 변수를 변경해, 기본 `background-image` 를 바꿉니다. **`aria-label` 과 같은 스크린 리더용의 텍스트를 꼭 넣어 주십시오.**


{{< example >}}
<button type="button" class="btn-close" aria-label="Close"></button>
{{< /example >}}

## Disabled state

비활성화 된 닫기 버튼은, `opacity` 를 변경합니다. 그리고 `pointer-events: none` 과 `user-select: none` 를 적용해, hover 상태와 active 상태가 트리거 되지 않도록 하였습니다.

{{< example >}}
<button type="button" class="btn-close" disabled aria-label="Close"></button>
{{< /example >}}

## White variant

기본 `.btn-close` 를 `.btn-close-white` 클래스를 사용해 흰색으로 변경합니다. 이 클래스는, `filter` 속성을 사용해 `background-image` 를 반전시킵니다.

{{< example class="bg-dark" >}}
<button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>
{{< /example >}}
