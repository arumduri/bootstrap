---
layout: docs
title: 간격
description: Bootstrap에는 요소의 모양을 수정하기 위한 광범위한 반응형 gap, padding 및 margin 유틸리티 클래스가 포함되어 있습니다.
group: utilities
toc: true
---

## 마진과 패딩

약칭 클래스를 사용하여 요소 또는 측면의 자식 집합에 반응형 `margin` 또는 `padding` 값을 할당합니다. 개별 속성, 모든 속성, 수직 및 수평 속성에 대한 지원이 포함됩니다. 클래스는 `.25rem`에서 `3rem` 범위의 기본 Sass 맵에서 빌드됩니다.

{{< callout >}}
**CSS 그리드 시스템 모듈을 사용하십니까?** 대신에 [갭 유틸리티](#갭)를 사용해보세요.
{{< /callout >}}

### 표기

`xs`에서 `xxl`까지 모든 중단점에 적용되는 간격 유틸리티에는 별도의 중단점 약어가 없습니다. 이는 이러한 클래스가 `min-width : 0` 이상에서 적용되므로 미디어 쿼리에 의해 바인딩되지 않기 때문입니다. 그러나 나머지 중단점에는 중단점 약어가 포함됩니다.

클래스는 `xs`의 경우 `{property} {sides}-{size}` 형식을 사용하고 `sm`, `md`, `lg`, `xl`의 경우 `{property} {sides}-{breakpoint}-{size}` 형식을 사용하여 이름이 지정됩니다.

*속성* - property:

- `m` - `margin` 클래스 설정
- `p` - `padding` 클래스 설정

*방향* - sides:

- `t` - `margin-top` 또는 `padding-top` 클래스 설정
- `b` - `margin-bottom` 또는 `padding-bottom` 클래스 설정
- `s` - (start) LTR에서는 `margin-left` 또는 `padding-left` 클래스, RTL에서는 `margin-right` 또는 `padding-right` 클래스 설정
- `e` - (end) for classes that set `margin-right` 또는 `padding-right` 클래스, RTL에서는 `margin-left` 또는 `padding-left` 클래스 설정
- `x` - `*-left`와 `*-right` 모두 클래스 설정
- `y` - `*-top`과 `*-bottom` 모두 클래스 설정
- 값 없음 - 요소의 4면 모두에 `margin` 또는 `padding`을 설정하는 클래스의 경우

*크기* - size:

- `0` - `margin` 또는 `padding`을 `0`으로 설정하여 제거
- `1` - (기본적으로) `margin` 또는 `padding`을 `$spacer * .25`로 설정
- `2` - (기본적으로) `margin` 또는 `padding`을 `$spacer * .5`로 설정
- `3` - (기본적으로) `margin` 또는 `padding`을 `$spacer`로 설정
- `4` - (기본적으로) `margin` 또는 `padding`을 `$spacer * 1.5`로 설정
- `5` - (기본적으로) `margin` 또는 `padding`을 `$spacer * 3`로 설정
- `auto` - `margin`을 자동으로 설정한 클래스의 경우

(`$ spacers` Sass 맵 변수에 항목을 추가하면 더 많은 크기를 추가할 수 있습니다)

### Examples

다음은 이러한 클래스의 몇 가지 대표적인 예입니다.

```scss
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
```

### 세로 중앙

또한 Bootstrap에는 가로 여백을 `auto`로 설정하여 고정 너비 블록 수준 콘텐츠, 즉 `display: block`과 `width`이 설정된 콘텐츠를 가로 중앙에 배치하는 `.mx-auto` 클래스도 포함되어 있습니다.

<div class="bd-example">
  <div class="mx-auto p-2" style="width: 200px; background-color: rgba(var(--bd-violet-rgb),.15); border: rgba(var(--bd-violet-rgb),.3) solid 1px;">
    Centered element
  </div>
</div>

```html
<div class="mx-auto p-2" style="width: 200px;">
  Centered element
</div>
```

## Negative margin

CSS에서 `margin` 속성은 음수 값을 사용할 수 있습니다 (`padding`은 사용할 수 없음). 이러한 음수 여백은 **기본적으로 사용 중지** 되지만 `$ enable-negative-margins : true`를 설정하여 Sass에서 사용하도록 설정할 수 있습니다.

구문은 기본 양수 margin 유틸리티와 거의 동일하지만 요청 된 크기 앞에 `n`이 추가됩니다. 다음은 `.mt-1`과 반대되는 예시 클래스입니다:

```scss
.mt-n1 {
  margin-top: -0.25rem !important;
}
```

## Gap

`display: grid` 또는 `display: flex`를 사용할 때 부모 그리드 컨테이너에서 `gap` 유틸리티를 사용할 수 있습니다. 이렇게 하면 개별 그리드 또는 flex 항목에 여백 유틸리티를 추가할 필요가 없습니다. 간격 유틸리티는 기본적으로 반응형이며 `$spacers` Sass 맵을 기반으로 유틸리티 API를 통해 생성됩니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid gap-3">
  <div class="p-2 g-col-6">Grid item 1</div>
  <div class="p-2 g-col-6">Grid item 2</div>
  <div class="p-2 g-col-6">Grid item 3</div>
  <div class="p-2 g-col-6">Grid item 4</div>
</div>
{{< /example >}}

지원에는 Bootstrap의 모든 그리드 중단점에 대한 반응형 옵션과 `$ spacers` 맵 (`0` – `5`)의 6 가지 크기가 포함됩니다. `.gap-auto` 유틸리티 클래스는 사실상`.gap-0`과 동일하므로 별도로 없습니다.

### row-gap

`row-gap`은 지정된 컨테이너의 하위 항목 사이의 세로 간격을 설정합니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid gap-0 row-gap-3">
  <div class="p-2 g-col-6">Grid item 1</div>
  <div class="p-2 g-col-6">Grid item 2</div>
  <div class="p-2 g-col-6">Grid item 3</div>
  <div class="p-2 g-col-6">Grid item 4</div>
</div>
{{< /example >}}

### column-gap

`column-gap`은 지정된 컨테이너의 하위 항목 사이의 가로 간격을 설정합니다.

{{< example class="bd-example-cssgrid" >}}
<div class="grid gap-0 column-gap-3">
  <div class="p-2 g-col-6">Grid item 1</div>
  <div class="p-2 g-col-6">Grid item 2</div>
  <div class="p-2 g-col-6">Grid item 3</div>
  <div class="p-2 g-col-6">Grid item 4</div>
</div>
{{< /example >}}

## CSS

### Sass 맵

간격 유틸리티는 Sass 맵을 통해 선언된 다음 유틸리티 API로 생성됩니다.

{{< scss-docs name="spacer-variables-maps" file="scss/_variables.scss" >}}

### Sass 유틸리티 API

간격 유틸리티는 `scss/_utilities.scss`의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법에 대해 알아보세요.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-spacing" file="scss/_utilities.scss" >}}
