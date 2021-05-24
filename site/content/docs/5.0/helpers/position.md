---
layout: docs
title: Position (위치)
description: 요소들의 위치를 신속하게 구성하기 위해 이 도우미를 사용해 보세요.
group: helpers
toc: true
---

## Fixed top

뷰포트 상단에 가장자리부터 가장자리까지 요소를 배치합니다. 사용자는 프로젝트에서 fixed position의 영향을 이해하고 있는지 확인해야 합니다. CSS를 별도로 추가해야 할 수 있습니다.

```html
<div class="fixed-top">...</div>
```

## Fixed bottom

뷰포트 하단에 가장자리부터 가장자리까지 요소를 배치합니다. 사용자는 프로젝트에서 fixed position의 영향을 이해하고 있는지 확인해야 합니다. CSS를 별도로 추가해야 할 수 있습니다.

```html
<div class="fixed-bottom">...</div>
```

## Sticky top

요소가 스크롤링에 의해 뷰포트 최상단에 위치하게 된 후에도 스크롤링에 의해 지나가지 않고 가장자리부터 가장자리까지 상단에 고정됩니다. `.sticky-top` 유틸리는 CSS의 `position: sticky`를 사용하기 때문에 어떠한 브라우저에서는 완벽하게 작동하지 않을 수 있습니다.


```html
<div class="sticky-top">...</div>
```

## Responsive sticky top

`.sticky-top` 유틸리티는 반응형에 대한 변형도 존재합니다.

```html
<div class="sticky-sm-top">Stick to the top on viewports sized SM (small) or wider</div>
<div class="sticky-md-top">Stick to the top on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-top">Stick to the top on viewports sized LG (large) or wider</div>
<div class="sticky-xl-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
```
