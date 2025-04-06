---
layout: docs
title: 클리어픽스
description: clearfix 유틸리티를 추가하여 컨테이너 내에서 floating 된 콘텐츠를 빠르고 쉽게 정렬합니다.
group: helpers
aliases: "/docs/5.3/helpers/"
---

부모 요소에 `.clearfix`를 추가하여 `floats`를 쉽게 정렬합니다. 믹스인으로도 사용할 수 있습니다.

HTML에서 사용시:

```html
<div class="clearfix">...</div>
```

믹스인 소스코드:

{{< scss-docs name="clearfix" file="scss/mixins/_clearfix.scss" >}}

SCSS에서 믹스인 사용시:

```scss
.element {
  @include clearfix;
}
```

다음 예시는 클리어픽스 사용 방법을 보여줍니다. clearfix가 없으면 div가 버튼요소를 감싸지 않아 레이아웃이 깨질 수 있습니다.

{{< example >}}
<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
</div>
{{< /example >}}
