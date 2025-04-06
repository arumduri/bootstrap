---
layout: docs
title: 시각적으로 숨기기
description: 이러한 도우미를 사용하여 요소를 시각적으로 숨기되 보조 기술이 접근할 수 있도록 유지해 보세요.
group: helpers
aliases: "/docs/5.3/helpers/screen-readers/"
---

`.visually-hidden`을 사용하여 요소가 스크린 리더와 같은 보조 기술에 노출되도록 하면서 시각적으로는 보이지 않게 숨길 수 있습니다. `.visually-hidden-focusable`을 사용하면 요소를 시각적으로 숨긴상태가 기본이지만 초점이 맞춰질 때는 표시 (예: 키보드 전용 사용자)됩니다. `.visually-hidden-focusable`은 컨테이너에도 적용 할 수 있습니다. `: focus-within` 덕분에 컨테이너의 자식 요소가 focus 될 때 컨테이너가 나타납니다.

{{< example >}}
<h2 class="visually-hidden">Title for screen readers</h2>
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
<div class="visually-hidden-focusable">A container with a <a href="#">focusable element</a>.</div>
{{< /example >}}

`visually-hidden`과 `visually-hidden-focusable` 모두 믹스인으로 사용 할 수 있습니다.

```scss
// Usage as a mixin

.visually-hidden-title {
  @include visually-hidden;
}

.skip-navigation {
  @include visually-hidden-focusable;
}
```
