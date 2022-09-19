---
layout: docs
title: 컬러 링크
title_en: Colored links
description: 호버상태가 있는 컬러 링크
group: helpers
toc: false
---

`.link-*` 클래스를 사용하여 링크를 색상을 입힐 수 있습니다. [`.text-*` 클래스]({{< docsref "/utilities/colors" >}})와는 다르게, 이 클래스들에는 `:hover`와 `:focus` 상태가 있습니다.

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<a href="#" class="link-{{ .name }}">{{ .name | title }} link</a>
{{- end -}}
{{< /colored-links.inline >}}
{{< /example >}}

{{< callout info >}}
일부 링크 스타일은 상대적으로 밝은 색상을 사용하기 때문에 충분한 대비를 얻으려면 어두운 배경에서 사용해야 합니다.
{{< /callout >}}
