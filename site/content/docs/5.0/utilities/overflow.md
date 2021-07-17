---
layout: docs
title: 오버플로우
title_en: Overflow
description: 콘텐츠가 요소를 오버플로우 하는 방식을 빠르게 구현 하려면 이러한 단축 유틸리티를 사용하세요.
group: utilities
---

네 가지 기본값과 클래스를 사용하여 즉시 `overflow` 속성을 조절합니다. 이러한 클래스는 기본적으로 반응형이 아닙니다.

<div class="bd-example d-md-flex">
  <div class="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
  </div>
  <div class="overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.
  </div>
  <div class="overflow-scroll p-3 bg-light" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.
  </div>
</div>

```html
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>
```

Sass 변수를 사용하여 `_variables.scss`에서 `$overflows` 변수를 변경하여 overflow 유틸리티를 사용자 정의할 수 있습니다.

## Sass

### 유틸리티 API

Overflow 유틸리티는 `scss/_utilities.scss`의 유틸리티 API에 선언되어 있습니다. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-overflow" file="scss/_utilities.scss" >}}
