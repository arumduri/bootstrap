---
layout: docs
title: 불투명도
title_en: Opacity
description: 요소의 불투명도를 제어할 수 있습니다.
group: utilities
added: "5.1"
---

`opacity` 속성은 요소의 불투명도 수준을 설정합니다. `1`은 불투명, `.5`는 반투명, `0` 투명을 의미합니다.

`.opacity-{value}` 유틸리티를 사용하여 요소의 `opacity`를 설정합니다.

<div class="bd-example d-sm-flex">
  <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div>
  <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div>
  <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div>
  <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div>
  <div class="opacity-0 p-3 m-2 bg-primary text-light fw-bold rounded">0%</div>
</div>

```html
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
<div class="opacity-0">...</div>
```

## CSS

### Sass 유틸리티 API

불투명도 유틸리티는 유틸리티 API의 `scss/_utilities.scss`에 선언되어 있습니다. [유틸리티 API 사용 방법에 대해 알아보세요.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-opacity" file="scss/_utilities.scss" >}}
