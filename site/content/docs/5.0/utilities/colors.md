---
layout: docs
title: Colors(색상)
description: 색상 유틸리티 클래스를 사용하여 색상을 통해 의미를 전달합니다. 호버 상태의 링크 스타일링에 대한 지원도 포함 합니다.
group: utilities
toc: true
---

{{< callout info >}}
##### Dealing with specificity

다른 선택자의 특수성으로 인해 클래스를 적용 할 수 없는 경우도 있습니다. 이럴경우 충분한 해결 방법은 클래스와 함께`<div>`에 요소의 콘텐츠를 래핑하는 것입니다.
{{< /callout >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Color

색상 유틸리티를 사용하여 텍스트를 색상화 합니다. 링크에 색을 입히려면`: hover` 및`: focus` 상태가 있는 [`.link-*` helper classes]({{< docsref "/helpers/colored-links" >}})를 사용할 수 있습니다.

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

## Background color

상황별 텍스트 색상 클래스와 유사하게 요소의 배경을 상황별 클래스로 쉽게 설정합니다. 백그라운드 유틸리티는 **`color`을 설정하지 않습니다 **. 따라서 경우에 따라`.text- *`유틸리티를 사용하는 것이 좋습니다.

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }}{{ if .contrast_color }} text-{{ .contrast_color }}{{ else }} text-white{{ end }}">.bg-{{ .name }}</div>
{{- end -}}
{{< /colors.inline >}}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
{{< /example >}}

## Background gradient

`.bg-gradient` 클래스를 추가하면 선형 그래디언트가 배경 이미지로 추가됩니다. 이 그라데이션은 아래쪽으로 희미 해지는 반투명 흰색으로 시작됩니다.

Do you need a gradient in your custom CSS? Just add `background-image: var(--bs-gradient);`.

{{< markdown >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }} bg-gradient{{ with .contrast_color }} text-{{ . }}{{ else }} text-white{{ end }}">.bg-{{ .name }}.bg-gradient</div>
{{- end -}}
{{< /colors.inline >}}
{{< /markdown >}}
