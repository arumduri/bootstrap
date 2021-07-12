---
layout: docs
title: 색상
title_en: Colors
description: 색상 유틸리티 클래스를 사용하여 `color` (색상)을 통해 의미를 전달합니다. 호버 상태의 링크 스타일링에 대한 지원도 포함합니다.
group: utilities
toc: true
---

## Colors

색상 유틸리티를 사용하여 문자를 색상화 합니다. 링크에 색을 입히려면 `: hover` 및 `: focus` 상태가 있는 [`.link-*` helper classes]({{< docsref "/helpers/colored-links" >}})를 사용할 수 있습니다.

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p class="text-{{ .name }}{{ with .contrast_color }} bg-{{ . }}{{ end }}">.text-{{ .name }}</p>
{{- end -}}
{{< /colors.inline >}}
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black-50">.text-black-50</p>
<p class="text-white-50 bg-dark">.text-white-50</p>
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Specificity

다른 선택자의 특수성으로 인해 상황별 클래스를 적용 할 수 없는 경우가 있습니다. 해결 방법은 요소의 컨텐츠를  `<div>` 또는 원하는 클래스의 의미 요소로 감싸는 것입니다.

## Sass

다음 Sass 기능 외에도 색상 등에 대해 포함 된 [CSS 사용자 정의 속성]({{< docsref "/customize/css-variables" >}}) (일명 CSS 변수)에 대해 읽어보십시오.

### Variables


대부분의 `color` 유틸리티는 일반 색상 팔레트 변수에서 재할당 된 테마 색상에 의해 생성됩니다.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

그레이 스케일 색상도 사용할 수 있지만 유틸리티를 생성하는 데 하위 집합 만 사용됩니다.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

### Map

테마 색상은 Sass 맵에 배치되어 유틸리티, 구성 요소 수정자 등을 생성하기 위해 반복 할 수 있습니다.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

그레이 스케일 색상은 Sass 맵으로도 사용할 수 있습니다. **이 지도는 유틸리티를 생성하는 데 사용되지 않습니다.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

### Utilities API

색상 유틸리티는`scss / _utilities.scss` 의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법 알아보기]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-color" file="scss/_utilities.scss" >}}
