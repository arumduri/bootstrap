---
layout: docs
title: 닫기 버튼
title_en: Close button
description: 모달이나 경고창 등의 콘텐츠를 닫기 위한 범용적인 닫기 버튼입니다.
group: components
toc: true
---

## 예시

`.btn-close`를 사용해 컴포넌트를 닫는 옵션을 제공합니다. 기본 스타일은 제한되어 있지만, 재정의가 가능합니다. Sass 변수를 변경해, 기본 `background-image`를 바꿉니다. **`aria-label`과 같은 스크린 리더용의 텍스트를 꼭 넣어 주십시오.**

{{< example >}}
<button type="button" class="btn-close" aria-label="Close"></button>
{{< /example >}}

## 비활성화 상태

비활성화된 닫기 버튼은 `opacity`를 변경합니다. 그리고 `pointer-events: none` 과 `user-select: none`을 적용해, hover 상태와 active 상태가 트리거 되지 않도록 하였습니다.

{{< example >}}
<button type="button" class="btn-close" disabled aria-label="Close"></button>
{{< /example >}}

## Dark variant

{{< deprecated-in "5.3.0" >}}

{{< callout warning >}}
**주의!** v5.3.0부터 `.btn-close-white` 클래스는 더 이상 사용되지 않습니다. 대신 `data-bs-theme="dark"`를 사용하여 닫기 버튼의 색상 모드를 변경하세요.
{{< /callout >}}

`.btn-close` 또는 그 상위 요소에 `data-bs-theme="dark"`를 추가하여 닫기 버튼을 반전시킬 수 있습니다. 이렇게 하면 `filter` 속성을 사용하여 값을 재정의하지 않고 `background-image`를 반전시킵니다.

{{< example class="bg-dark" >}}
<div data-bs-theme="dark">
  <button type="button" class="btn-close" aria-label="Close"></button>
  <button type="button" class="btn-close" disabled aria-label="Close"></button>
</div>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.3.0" >}}

Bootstrap의 진화하는 CSS 변수 접근 방식의 일환으로, 이제 닫기 버튼은 `.btn-close`의 로컬 CSS 변수를 사용하여 실시간 사용자 정의 기능을 강화합니다. CSS 변수의 값은 Sass를 통해 설정되므로 Sass 사용자 정의도 계속 지원됩니다.

{{< scss-docs name="close-css-vars" file="scss/_close.scss" >}}

### Sass 변수

{{< scss-docs name="close-variables" file="scss/_variables.scss" >}}
