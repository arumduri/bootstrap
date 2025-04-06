---
layout: docs
title: 위치
description: 요소들의 위치를 신속하게 구성하기 위해 이 도우미를 사용해 보세요.
group: helpers
toc: true
---

## 최상단 고정

뷰포트 상단에 가장자리부터 가장자리까지 요소를 배치합니다. 사용자는 프로젝트에서 fixed position의 영향을 이해하고 있는지 확인해야 합니다. CSS를 별도로 추가해야 할 수 있습니다.

```html
<div class="fixed-top">...</div>
```

## 최하단 고정

뷰포트 하단에 가장자리부터 가장자리까지 요소를 배치합니다. 사용자는 프로젝트에서 fixed position의 영향을 이해하고 있는지 확인해야 합니다. CSS를 별도로 추가해야 할 수 있습니다.

```html
<div class="fixed-bottom">...</div>
```

## 상단 고정

요소가 스크롤링에 의해 뷰포트 최상단에 위치하게 된 후에도 스크롤링에 의해 지나가지 않고 가장자리부터 가장자리까지 상단에 고정됩니다.

```html
<div class="sticky-top">...</div>
```

## 반응형 상단 고정

`.sticky-top` 유틸리티는 반응형에 대한 변형도 존재합니다.

```html
<div class="sticky-sm-top">Stick to the top on viewports sized SM (small) or wider</div>
<div class="sticky-md-top">Stick to the top on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-top">Stick to the top on viewports sized LG (large) or wider</div>
<div class="sticky-xl-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
<div class="sticky-xxl-top">Stick to the top on viewports sized XXL (extra-extra-large) or wider</div>
```

## 하단 고정

요소를 viewport 하단에 위치시키며, 꽉 차서 (edge to edge) 표시되지만 스크롤된 이후부터 적용됩니다.

```html
<div class="sticky-bottom">...</div>
```

## 반응형 하단 고정

`.sticky-bottom` 유틸리티의 반응형 변형도 있습니다.

```html
<div class="sticky-sm-bottom">Stick to the bottom on viewports sized SM (small) or wider</div>
<div class="sticky-md-bottom">Stick to the bottom on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-bottom">Stick to the bottom on viewports sized LG (large) or wider</div>
<div class="sticky-xl-bottom">Stick to the bottom on viewports sized XL (extra-large) or wider</div>
<div class="sticky-xxl-bottom">Stick to the bottom on viewports sized XXL (extra-extra-large) or wider</div>
```
