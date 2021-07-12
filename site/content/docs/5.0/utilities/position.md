---
layout: docs
title: 위치
title_en: Position
description: 요소의 위치를 빠르게 구성하려면 이러한 단축 유틸리티를 사용하십시오.
group: utilities
toc: true
---

## Position values

빠른 위치 지정 클래스를 사용할 수 있지만 반응형은 없습니다.

```html
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

## Arrange elements

edge positioning 유틸리티를 사용하여 요소를 쉽게 정렬합니다. 형식은 `{property}-{position}` 입니다.

here *property* is one of:

- `top` - for the vertical `top` position
- `start` - for the horizontal `left` position (in LTR)
- `bottom` - for the vertical `bottom` position
- `end` - for the horizontal `right` position (in LTR)

Where *position* is one of:

- `0` - for `0` edge position
- `50` - for `50%` edge position
- `100` - for `100%` edge position

(`$ position-values` Sass 맵 변수에 항목을 추가하면 더 많은 위치 값을 추가 할 수 있습니다.)

{{< example class="bd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
{{< /example >}}

## Center elements

또한 변환 유틸리티 클래스 `.translate-middle` 을 사용하여 요소를 중앙에 배치 할 수도 있습니다.

이 클래스는 요소에 `translateX (-50 %)` 및 `translateY (-50 %)` 변환을 요소에 적용하여 edge positioning 유틸리티와 함께 요소를 absolute center 로 지정 할 수 있습니다.

{{< example class="bd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle"></div>
  <div class="position-absolute top-0 start-50 translate-middle"></div>
  <div class="position-absolute top-0 start-100 translate-middle"></div>
  <div class="position-absolute top-50 start-0 translate-middle"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 start-100 translate-middle"></div>
  <div class="position-absolute top-100 start-0 translate-middle"></div>
  <div class="position-absolute top-100 start-50 translate-middle"></div>
  <div class="position-absolute top-100 start-100 translate-middle"></div>
</div>
{{< /example >}}

`.translate-middle-x` 또는 `.translate-middle-y` 클래스를 추가하면 요소를 가로 또는 세로 방향으로만 배치 할 수 있습니다.

{{< example class="bd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 start-50 translate-middle-x"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-0 translate-middle-y"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 end-0 translate-middle-y"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
{{< /example >}}

## Examples

다음은 해당 클래스의 실제 예시입니다.

{{< example class="bd-example-position-examples d-flex justify-content-around" >}}
<button type="button" class="btn btn-primary position-relative">
  Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<button type="button" class="btn btn-dark position-relative">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</button>

<button type="button" class="btn btn-primary position-relative">
  Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>
{{< /example >}}

해당 클래스를 기존 구성 요소와 함께 사용하여 새 구성 요소를 만들 수 있습니다. `$ position-values` 변수에 항목을 추가하여 기능을 확장 할 수 있습니다.

{{< example class="bd-example-position-examples" >}}
<div class="position-relative m-4">
  <div class="progress" style="height: 1px;">
    <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
  <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
  <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>
{{< /example >}}

## Sass

### Maps

기본 Position 유틸리티 값은 Sass 맵에 선언 된 다음 유틸리티를 생성하는 데 사용됩니다.

{{< scss-docs name="position-map" file="scss/_variables.scss" >}}

### Utilities API

Position 유틸리티는 `scss/_utilities.scss` 의 유틸리티 API에 선언되어 있습니다. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-position" file="scss/_utilities.scss" >}}
