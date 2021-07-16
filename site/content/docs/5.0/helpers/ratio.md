---
layout: docs
title: 비율
title_en: Ratios
description: 생성된 가상 요소를 사용하여 요소가 선택한 가로세로 비율을 유지하도록 합니다. 부모의 너비에 따라 비디오 또는 슬라이드 쇼 내용물을 반응형으로 처리하는 데에 적합합니다.
group: helpers
toc: true
---

## 소개

비율 도우미를 사용하여 `<iframe>`, `<embed>`, `<video>`, 그리고 `<object>`와 같은 외부 콘텐츠의 가로세로 비율을 관리할 수 있습니다. 이 도우미는 모든 표준 HTML 자식 요소에도 사용 할 수 있습니다 (예를 들어, `<div>` 또는 `<img>`). 스타일은 부모 `.ratio` 클래스에서 자식 요소로 직접 적용 됩니다.

가로세로 비율은 Sass 맵에서 선언되고 CSS 변수를 통해 각 클래스에 적용되므로 [사용자 정의 가로세로 비율](#custom-ratios) 도 사용 할 수 있습니다.

{{< callout info >}}
**꿀팁!** [Reboot]({{< docsref "/content/reboot" >}})에서 자동으로 재정의하기 때문에 `<iframe>`에서 `frameborder="0"` 은 사용하지 않아도 됩니다.
{{< /callout >}}

## 예시
부모요소에 `.ratio`와 가로세로 비율 클래스를 사용해 `<iframe>` 같은 요소를 감싸보세요. 범용 선택기 `.ratio > *` 덕분에 직계 자식 요소는 크기가 자동으로 조정 됩니다.
  
{{< example >}}
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
{{< /example >}}

## Aspect ratios

가로세로 비율은 수정자 클래스로 사용자가 직접 정의 할 수 있습니다. 기본적으로 제공되는 비율 클래스는 다음과 같습니다.

{{< example class="bd-example-ratios" >}}
<div class="ratio ratio-1x1">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9">
  <div>21x9</div>
</div>
{{< /example >}}

## Custom ratios

각 `.ratio-*` 클래스는 선택기에 CSS 사용자 정의 속성 (또는 CSS 변수)이 내장되어 있습니다. 이 CSS 변수를 재정의하여 사용자전용 가로세로 비율을 즉석에서 만들 수 있습니다. 

예를 들어 2x1 가로세로 비율을 만들려면 `.ratio`에서 `--bs-aspect-ratio: 50%`를 설정합니다.

{{< example class="bd-example-ratios" >}}
<div class="ratio" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>
{{< /example >}}

이 CSS 변수를 사용하면 중단 점에서 가로세로 비율을 쉽게 변경 할 수 있습니다. 다음은 기본 4x3비율이지만 md중단점에서 사용자가 지정한 2x1 비율로 변경됩니다.

```scss
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}
```

{{< example class="bd-example-ratios bd-example-ratios-breakpoint" >}}
<div class="ratio ratio-4x3">
  <div>4x3, then 2x1</div>
</div>
{{< /example >}}


## Sass map

`_variables.scss`에서 사용하고자 하는 가로세로 비율을 변경 할 수 있습니다. 다음은 기본 `$ratio-aspect-ratios` 맵 코드 입니다. 원하시는대로 맵 코드를 수정하시고 Sass를 사용하기 위해 다시 컴파일 하세요.

{{< scss-docs name="aspect-ratios" file="scss/_variables.scss" >}}
