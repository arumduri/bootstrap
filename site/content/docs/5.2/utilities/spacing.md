---
layout: docs
title: 간격
title_en: Spacing
description: Bootstrap에는 요소의 모양을 수정하기 위한 광범위한 반응형 gap, padding 및 margin 유틸리티 클래스가 포함되어 있습니다.
group: utilities
toc: true
---

## 마진과 패딩

약칭 클래스를 사용하여 요소 또는 측면의 자식 집합에 반응형 `margin` 또는 `padding` 값을 할당합니다. 개별 속성, 모든 속성, 수직 및 수평 속성에 대한 지원이 포함됩니다. 클래스는 `.25rem`에서 `3rem` 범위의 기본 Sass 맵에서 빌드됩니다.

{{< callout >}}
**CSS 그리드 시스템 모듈을 사용하십니까?** 대신에 [gap utility](#gap)를 사용해보세요.
{{< /callout >}}

### 표기

`xs`에서`xxl`까지 모든 중단점에 적용되는 간격 유틸리티에는 별도의 중단점 약어가 없습니다. 이는 이러한 클래스가 `min-width : 0` 이상에서 적용되므로 미디어 쿼리에 의해 바인딩되지 않기 때문입니다. 그러나 나머지 중단점에는 중단점 약어가 포함됩니다.

클래스는 `xs`의 경우 `{property} {sides}-{size}` 형식을 사용하고 `sm` , `md` , `lg` , `xl`의 경우  `{property} {sides}-{breakpoint}-{size}` 형식을 사용하여 이름이 지정됩니다.

Where *property* is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

Where *sides* is one of:

- `t` - for classes that set `margin-top` or `padding-top`
- `b` - for classes that set `margin-bottom` or `padding-bottom`
- `s` - (start) for classes that set `margin-left` or `padding-left` in LTR, `margin-right` or `padding-right` in RTL
- `e` - (end) for classes that set `margin-right` or `padding-right` in LTR, `margin-left` or `padding-left` in RTL
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

- `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
- `1` - (by default) for classes that set the `margin` or `padding` to `$spacer * .25`
- `2` - (by default) for classes that set the `margin` or `padding` to `$spacer * .5`
- `3` - (by default) for classes that set the `margin` or `padding` to `$spacer`
- `4` - (by default) for classes that set the `margin` or `padding` to `$spacer * 1.5`
- `5` - (by default) for classes that set the `margin` or `padding` to `$spacer * 3`
- `auto` - for classes that set the `margin` to auto

(`$ spacers` Sass 맵 변수에 항목을 추가하면 더 많은 크기를 추가할 수 있습니다.)

### 예시

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

Additionally, Bootstrap also includes an `.mx-auto` class for horizontally centering fixed-width block level content—that is, content that has `display: block` and a `width` set—by setting the horizontal margins to `auto`.

<div class="bd-example">
  <div class="mx-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
    Centered element
  </div>
</div>

```html
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>
```

## 음수 마진

CSS에서 `margin` 속성은 음수 값을 사용할 수 있습니다 (`padding` 은 사용할 수 없음). 이러한 음수 여백은 **기본적으로 사용 중지** 되지만 `$ enable-negative-margins : true`를 설정하여 Sass에서 사용하도록 설정할 수 있습니다.

구문은 기본 양수 margin 유틸리티와 거의 동일하지만 요청 된 크기 앞에 `n`이 추가됩니다. 다음은 `.mt-1` 과 반대되는 예시 클래스입니다:

```scss
.mt-n1 {
  margin-top: -0.25rem !important;
}
```

## 갭

`display : grid`를 사용할 때 부모 그리드 컨테이너에서 `gap` 유틸리티를 사용할 수 있습니다. 이렇게하면 개별 그리드 항목 (`display : grid` 컨테이너의 자식 항목)에 여백 유틸리티를 추가할 필요가 없습니다. 간격 유틸리티는 기본적으로 반응형이며 `$ spacers` Sass 맵을 기반으로 유틸리티 API를 통해 생성됩니다.

{{< example html >}}
<div class="d-grid gap-3">
  <div class="p-2 bg-light border">Grid item 1</div>
  <div class="p-2 bg-light border">Grid item 2</div>
  <div class="p-2 bg-light border">Grid item 3</div>
</div>
{{< /example >}}

지원에는 Bootstrap의 모든 그리드 중단점에 대한 반응형 옵션과 `$ spacers` 맵 (`0` – `5`)의 6 가지 크기가 포함됩니다. `.gap-auto` 유틸리티 클래스는 사실상`.gap-0` 과 동일하므로 별도로 없습니다.

## Sass

### 맵

Spacing 유틸리티는 Sass 맵을 통해 선언된 다음 유틸리티 API로 생성됩니다.

{{< scss-docs name="spacer-variables-maps" file="scss/_variables.scss" >}}

### 유틸리티 API

Spacing 유틸리티는 `scss/_utilities.scss`의 유틸리티 API에 선언되어 있습니다. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-spacing" file="scss/_utilities.scss" >}}
