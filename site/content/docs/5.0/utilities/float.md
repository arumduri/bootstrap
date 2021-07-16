---
layout: docs
title: 플로트
title_en: Float
description: 반응형 float 유틸리티를 사용하여 모든 중단 점에서 모든 요소에서 float을 전환합니다.
group: utilities
toc: true
---

## 개요

이러한 유틸리티 클래스는 [CSS `float` 속성](https://developer.mozilla.org/en-US/docs/Web/CSS/float)을 사용하여 현재 뷰포트 크기에 따라 요소를 왼쪽 또는 오른쪽으로 플로팅하거나 플로팅을 비활성화합니다. 특이점 문제를 피하기 위해 `! important`가 포함됩니다. 그리드 시스템과 동일한 뷰포트 중단 점을 사용합니다. float 유틸리티는 flex 항목에 영향을 미치지 않습니다.

{{< example >}}
<div class="float-start">Float start on all viewport sizes</div><br>
<div class="float-end">Float end on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>
{{< /example >}}

## Responsive

또한 각 `float` 값에 대해 반응형 변형이 존재합니다.

{{< example >}}
<div class="float-sm-start">Float start on viewports sized SM (small) or wider</div><br>
<div class="float-md-start">Float start on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-start">Float start on viewports sized LG (large) or wider</div><br>
<div class="float-xl-start">Float start on viewports sized XL (extra-large) or wider</div><br>
{{< /example >}}

지원하는 클래스는 다음과 같습니다.

{{< markdown >}}
{{< float.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.float{{ .abbr }}-start`
- `.float{{ .abbr }}-end`
- `.float{{ .abbr }}-none`
{{- end -}}
{{< /float.inline >}}
{{< /markdown >}}

## Sass

### Utilities API

Float 유틸리티는 `scss/_utilities.scss`의 유틸리티 API에 선언되어 있습니다. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-float" file="scss/_utilities.scss" >}}
