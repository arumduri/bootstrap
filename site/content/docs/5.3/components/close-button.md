---
layout: docs
title: 닫기 버튼
title_en: Close button
description: 모달이나 경고창 등의 콘텐츠를 닫기 위한 범용적인 닫기 버튼입니다.
group: components
toc: true
untranslated: true
---

## 예시

`.btn-close`를 사용해 컴포넌트를 닫는 옵션을 제공합니다. 기본 스타일은 제한되어 있지만, 재정의가 가능합니다. Sass 변수를 변경해, 기본 `background-image`를 바꿉니다. **`aria-label`과 같은 스크린 리더용의 텍스트를 꼭 넣어 주십시오.**

{{< example >}}
<button type="button" class="btn-close" aria-label="Close"></button>
{{< /example >}}

## 비활성화 상태

비활성화된 닫기 버튼은, `opacity`를 변경합니다. 그리고 `pointer-events: none` 과 `user-select: none`을 적용해, hover 상태와 active 상태가 트리거 되지 않도록 하였습니다.

{{< example >}}
<button type="button" class="btn-close" disabled aria-label="Close"></button>
{{< /example >}}

## Dark variant

{{< deprecated-in "5.3.0" >}}

{{< callout warning >}}
**Heads up!** As of v5.3.0, the `.btn-close-white` class is deprecated. Instead, use `data-bs-theme="dark"` to change the color mode of the close button.
{{< /callout >}}

Add `data-bs-theme="dark"` to the `.btn-close`, or to its parent element, to invert the close button. This uses the `filter` property to invert the `background-image` without overriding its value.

{{< example class="bg-dark" >}}
<div data-bs-theme="dark">
  <button type="button" class="btn-close" aria-label="Close"></button>
  <button type="button" class="btn-close" disabled aria-label="Close"></button>
</div>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.3.0" >}}

As part of Bootstrap's evolving CSS variables approach, close button now uses local CSS variables on `.btn-close` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="close-css-vars" file="scss/_close.scss" >}}

### Sass 변수

{{< scss-docs name="close-variables" file="scss/_variables.scss" >}}
