---
layout: docs
title: Sizing (사이징)
description: 너비 및 높이 유틸리티를 사용하여 요소의 폭 또는 높이를 쉽게 조정 할 수 있습니다.
group: utilities
toc: true
---

## Relative to the parent

너비 및 높이 유틸리티는 `_utilities.scss` 의 유틸리티 API에서 생성됩니다. 기본적으로 `25 %` , `50 %` , `75 %` , `100 %` 및 `auto` 에 대한 지원을 포함합니다. 여기에서 다른 유틸리티를 생성 해야하므로 해당 값을 수정하십시오.

{{< example >}}
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
{{< /example >}}

{{< example >}}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
  <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
  <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
</div>
{{< /example >}}

필요에 따라 `max-width : 100 %;` 및 `max-height : 100 %;` 유틸리티를 사용할 수도 있습니다.

{{< example >}}
{{< placeholder width="100%" height="100" class="mw-100" text="Max-width 100%" >}}
{{< /example >}}

{{< example >}}
<div style="height: 100px; background-color: rgba(255,0,0,.1);">
  <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,.1);">Max-height 100%</div>
</div>
{{< /example >}}

## Relative to the viewport

유틸리티를 사용하여 뷰포트에 상대적인 너비와 높이를 설정 할 수 있습니다.

```html
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```
