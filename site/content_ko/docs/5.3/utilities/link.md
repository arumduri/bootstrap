---
layout: docs
title: Link
description: 링크 유틸리티는 앵커의 색상, 불투명도, 밑줄 오프셋, 밑줄 색상 등을 조정하여 앵커의 스타일을 지정하는 데 사용됩니다.
group: utilities
toc: true
added: 5.3
---

## 링크 불투명도

유틸리티를 사용하여 링크 `rgba()` 색상 값의 알파 불투명도를 변경합니다. 색상의 불투명도를 변경하면 링크의 [대비율이 *부족*해질 수 있다]({{< docsref "getting-started/accessibility#color-contrast" >}})는 점에 유의하세요.

{{< example >}}
<p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
<p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
<p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
<p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
<p><a class="link-opacity-100" href="#">Link opacity 100</a></p>
{{< /example >}}

마우스오버 시 불투명도 레벨을 변경할 수도 있습니다.

{{< example >}}
<p><a class="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
<p><a class="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
<p><a class="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
<p><a class="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
<p><a class="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>
{{< /example >}}

## 링크 밑줄

### 밑줄 색상

링크 텍스트 색상과 관계없이 밑줄의 색상을 변경합니다.

{{< example >}}
{{< link-underline-colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-underline-{{ .name }}">{{ .name | title }} underline</a></p>
{{- end -}}
{{< /link-underline-colors.inline >}}
{{< /example >}}

### Underline offset

텍스트에서 밑줄의 여백 수준을 변경합니다. 오프셋은 요소의 현재 `font-size`에 따라 자동으로 크기가 조정되도록 `em` 단위로 설정됩니다.

{{< example >}}
<p><a href="#">Default link</a></p>
<p><a class="link-offset-1" href="#">Offset 1 link</a></p>
<p><a class="link-offset-2" href="#">Offset 2 link</a></p>
<p><a class="link-offset-3" href="#">Offset 3 link</a></p>
{{< /example >}}

### Underline opacity

밑줄의 불투명도를 변경합니다. `.link-underline`을 추가하여 먼저 알파 불투명도를 수정하는 데 사용하는 `rgba()` 색상을 설정해야 합니다.

{{< example >}}
<p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>
{{< /example >}}

### 호버 변형

`.link-opacity-*-hover` 유틸리티와 마찬가지로 `.link-offset` 및 `.link-underline-opacity` 유틸리티에는 기본적으로 `:hover` 변형이 포함되어 있습니다. 조합해서 고유한 링크 스타일을 만들 수 있습니다.

{{< example >}}
<a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
  Underline opacity 0
</a>
{{< /example >}}

## 컬러 링크

[컬러 링크 도우미]({{< docsref "/helpers/colored-links/" >}})가 링크 유틸리티와 짝을 이루도록 업데이트되었습니다. 새로운 유틸리티를 사용하여 링크 불투명도, 밑줄 불투명도, 밑줄 오프셋을 수정할 수 있습니다.

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-{{ .name }} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{{ .name | title }} link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## CSS

다음 Sass 기능 외에도 색상 등을 위해 포함된 [CSS 사용자 정의 속성]({{< docsref "/customize/css-variables" >}})(CSS 변수)에 대해 읽어보세요.

### Sass 유틸리티 API

링크 유틸리티는 유틸리티 API의 `scss/_utilities.scss`에 선언되어 있습니다. [유틸리티 API 사용 방법에 대해 알아보세요.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-links" file="scss/_utilities.scss" >}}
