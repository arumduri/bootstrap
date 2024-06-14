---
layout: docs
title: 아이콘 링크
title_en: Icon link
description: 부트스트랩 아이콘 또는 기타 아이콘을 사용하여 양식화된 하이퍼링크를 빠르게 만들 수 있습니다.
group: helpers
toc: true
added: 5.3
---

아이콘 링크 도우미 컴포넌트는 기본 링크 스타일을 수정하여 모양을 개선하고 아이콘과 텍스트의 페어링을 빠르게 정렬합니다. 정렬은 인라인 플렉스박스 스타일과 기본 `gap` 값을 통해 설정됩니다. 밑줄은 사용자 지정 오프셋과 색상으로 스타일을 지정합니다. 아이콘의 크기는 관련 텍스트의 `font-size`에 가장 잘 맞도록 자동으로 `1em`으로 조정됩니다.

아이콘 링크는 [Bootstrap Icons](https://icons.getbootstrap.kr)을 사용한다고 가정하지만 원하는 아이콘이나 이미지를 사용할 수 있습니다.

{{< callout >}}
아이콘이 순전히 장식용인 경우 예제에서와 같이 `aria-hidden="true"`를 사용하여 보조 기술에서 아이콘을 숨겨야 합니다. 의미를 전달하는 아이콘의 경우, `role="img"`와 적절한 `aria-label="..."`를 SVG에 추가하여 적절한 텍스트 대안을 제공하세요.
{{< /callout >}}

## 예제

일반 `<a>` 요소를 가져와 `.icon-link`를 추가하고 링크 텍스트의 왼쪽 또는 오른쪽에 아이콘을 삽입합니다. 아이콘의 크기, 위치 및 색상이 자동으로 지정됩니다.

{{< example >}}
<a class="icon-link" href="#">
  <svg class="bi" aria-hidden="true"><use xlink:href="#box-seam"></use></svg>
  Icon link
</a>
{{< /example >}}

{{< example >}}
<a class="icon-link" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}

## hover 스타일

`.icon-link-hover`를 추가하여 마우스오버 시에 아이콘을 오른쪽으로 이동시킬 수 있습니다.

{{< example >}}
<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}

## 사용자 지정

링크 CSS 변수, Sass 변수, 유틸리티 또는 사용자 정의 스타일을 사용하여 아이콘 링크의 스타일을 수정합니다.

### CSS 변수

필요에 따라 `--bs-link-*` 및 `--bs-icon-link-*` CSS 변수를 수정하여 기본 모양을 변경합니다.

`--bs-icon-link-transform` CSS 변수를 재정의하여 호버 `transform`을 사용자 정의합니다:

{{< example >}}
<a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
  <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"></use></svg>
  Icon link
</a>
{{< /example >}}

`--bs-link-*` CSS 변수를 재정의하여 색상을 사용자 지정합니다:

{{< example >}}
<a class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}

### Sass 변수

아이콘 링크 Sass 변수를 사용자 정의하여 Bootstrap 기반 프로젝트의 모든 아이콘 링크 스타일을 수정하세요.

{{< scss-docs name="icon-link-variables" file="scss/_variables.scss" >}}

### Sass 유틸리티 API

[링크 유틸리티]({{< docsref "/utilities/link/" >}})로 아이콘 링크를 수정하여 밑줄 색상과 오프셋을 수정하세요.

{{< example >}}
<a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}
