---
layout: docs
title: Background
description: `background-color` 을 통해 의미를 전달하고 그라디언트로 꾸밈을 추가 합니다.
group: utilities
toc: true
---

## Background color

상황별 텍스트 색상 클래스와 비슷하게 요소의 배경을 상황별 클래스로 설정합니다. background 유틸리티는 ** `color` 는 세팅하지 않습니다 **. 따라서 경우에 따라 `.text- *` [색상 유틸리티]({{<docsref "/ utilities / colors">}})를 사용하는 것이 좋습니다.

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }}{{ if .contrast_color }} text-{{ .contrast_color }}{{ else }} text-white{{ end }}">.bg-{{ .name }}</div>
{{- end -}}
{{< /colors.inline >}}
<div class="p-3 mb-2 bg-body text-dark">.bg-body</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
{{< /example >}}

## Background gradient

`.bg-gradient` 클래스를 추가하면 선형 그래디언트가 배경 이미지로 추가됩니다. 이 그라데이션은 아래쪽으로 희미 해지는 반투명 흰색으로 시작됩니다.

사용자 정의 CSS에 그라디언트가 필요합니까? `background-image : var (-bs-gradient);` 만 추가하면 됩니다.

{{< markdown >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }} bg-gradient{{ with .contrast_color }} text-{{ . }}{{ else }} text-white{{ end }}">.bg-{{ .name }}.bg-gradient</div>
{{- end -}}
{{< /colors.inline >}}
{{< /markdown >}}

## Sass

다음 Sass 기능 외에도 색상 등이 포함 된 [CSS 사용자 정의 속성]({{<docsref "/ customize / css-variables">}}) (일명 CSS 변수)에 대해 읽어보십시오.

### Variables

대부분의 `background-color` 유틸리티는 테마 색상에 의해 생성되며 일반 색상 팔레트 변수에서 재 지정됩니다.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="variable-gradient" file="scss/_variables.scss" >}}

Grayscale colors are also available, but only a subset are used to generate any utilities.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

### Map

그런 다음 테마 색상은 Sass 맵에 배치되어 유틸리티, 구성 요소 수정자 등을 생성하기 위해 반복 할 수 있습니다.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

Grayscale colors are also available as a Sass map. **This map is not used to generate any utilities.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

### Mixins

** 배경 유틸리티를 생성하는 데 믹스 인이 사용되지는 않지만 **, 자신만의 그라데이션을 만들고 싶은 다른 상황을 위한 몇가지 추가 믹스 인이 있습니다.

{{< scss-docs name="gradient-bg-mixin" file="scss/mixins/_gradients.scss" >}}

{{< scss-docs name="gradient-mixins" file="scss/mixins/_gradients.scss" >}}

### Utilities API

백그라운드 유틸리티는 `scss / _utilities.scss` 의 유틸리티 API에 선언되어 있습니다. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-bg-color" file="scss/_utilities.scss" >}}
