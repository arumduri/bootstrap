---
layout: docs
title: 컬러 링크
title_en: Colored links
description: 호버상태가 있는 컬러 링크
group: helpers
toc: false
---

## 링크 색상

`.link-*` 클래스를 사용하여 링크를 색상을 입힐 수 있습니다. [`.text-*` 클래스]({{< docsref "/utilities/colors" >}})와는 다르게, 이 클래스들에는 `:hover`와 `:focus` 상태가 있습니다. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.

{{< callout info >}}
**Heads up!** `.link-body-emphasis` is currently the only colored link that adapts to color modes. It's treated as a special case until v6 arrives and we can more thoroughly rebuild our theme colors for color modes. Until then, it's a unique, high-contrast link color with custom `:hover` and `:focus` styles. However, it still responds to the new link utilities.
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

Colored links can also be modified by our [link utilities]({{< docsref "/utilities/link/" >}}).

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-{{ .name }} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{{ .name | title }} link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>
{{< /example >}}
