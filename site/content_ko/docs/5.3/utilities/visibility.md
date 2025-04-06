---
layout: docs
title: 가시성
description: 가시성 유틸리티를 사용하여 표시를 수정하지 않고 요소의 가시성을 제어합니다.
group: utilities
---

가시성 유틸리티를 사용하여 요소의 `visibility`를 설정합니다. 이러한 유틸리티 클래스는 `display` 값을 전혀 수정하지 않으며 레이아웃에 영향을 미치지 않습니다. `.invisible` 요소는 여전히 페이지의 공간을 차지합니다.

{{< callout warning >}}
`.invisible` 클래스가 있는 요소는 시각적으로 그리고 보조 기술/스크린 리더 사용자를 위해 *모두* 숨겨집니다.
{{< /callout >}}

필요에 따라 `.visible` 또는 `.invisible`을 적용할 수 있습니다.

```html
<div class="visible">...</div>
<div class="invisible">...</div>
```

```scss
// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
```

## CSS

### Sass 유틸리티 API

가시성 유틸리티는 유틸리티 API의 `scss/_utilities.scss`에 선언되어 있습니다. [유틸리티 API 사용 방법에 대해 알아보세요.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-visibility" file="scss/_utilities.scss" >}}
