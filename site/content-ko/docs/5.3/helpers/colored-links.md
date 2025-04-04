---
layout: docs
title: 컬러 링크
title_en: Colored links
description: 호버상태가 있는 컬러 링크
group: helpers
toc: false
---

## 링크 색상

`.link-*` 클래스를 사용하여 링크를 색상을 입힐 수 있습니다. [`.text-*` 클래스]({{< docsref "/utilities/colors" >}})와는 다르게, 이 클래스들에는 `:hover`와 `:focus` 상태가 있습니다. 일부 링크 스타일은 비교적 밝은 전경색을 사용하므로 충분한 대비를 위해 어두운 배경에만 사용해야 합니다.

{{< callout info >}}
**주의!** `.link-body-emphasis`는 현재 색상 모드에 맞게 조정되는 유일한 색상 링크입니다. v6가 출시되어 컬러 모드에 맞게 테마 색상을 보다 철저하게 재구성할 수 있을 때까지는 특수한 경우로 취급됩니다. 그때까지는 사용자 정의 `:hover` 및 `:focus` 스타일이 적용된 고유한 고대비 링크 색상이 적용됩니다. 하지만 새로운 링크 유틸리티에는 여전히 반응합니다.
{{< /callout >}}

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-{{ .name }}">{{ .name | title }} link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body-emphasis">Emphasis link</a></p>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## 링크 유틸리티

{{< added-in "5.3.0" >}}

링크 색상은 [링크 유틸리티]({{< docsref "/utilities/link/" >}})로도 수정할 수 있습니다.

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-{{ .name }} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{{ .name | title }} link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>
{{< /example >}}
