---
layout: docs
title: 색상 및 배경
title_en: Color and background
description: 전경색과 대비되는 배경색을 설정합니다.
group: helpers
toc: true
added: "5.2"
---

## 개요

색상 및 배경 헬퍼는 [`.text-*` 유틸리티]({{< docsref "/utilities/colors" >}})와 [`.bg-*` 유틸리티]({{< docsref "/utilities/background" >}})의 기능을 하나의 클래스에 결합한 것입니다. Sass `color-contrast()` 함수를 사용하여 특정 `background-color`에 대해 대비되는 `color`를 자동으로 결정합니다.

{{< callout warning >}}
**주의!** 현재 CSS 네이티브 `color-contrast` 함수가 지원되지 않기 때문에 Sass를 통해 자체적으로 사용하고 있습니다. 즉, CSS 변수를 통해 테마 색상을 사용자 정의하면 이러한 유틸리티에서 색상 대비 문제가 발생할 수 있습니다.
{{< /callout >}}

{{< example >}}
{{< text-bg.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="text-bg-{{ .name }} p-3">{{ .name | title }} with contrasting color</div>
{{- end -}}
{{< /text-bg.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## 구성요소 포함

[배지]({{< docsref "/components/badge#background-colors" >}})에서처럼 `.text-*`와 `.bg-*`를 결합한 클래스 대신에 사용합니다:

{{< example >}}
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-info">Info</span>
{{< /example >}}

또는 [카드]({{< docsref "/components/card#background-and-color" >}})에서도 가능합니다:

{{< example >}}
<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{{< /example >}}
