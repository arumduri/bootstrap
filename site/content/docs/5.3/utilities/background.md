---
layout: docs
title: 배경색
title_en: Background
description: "`background-color`를 통해 의미를 전달하고 그라디언트로 꾸밈을 추가 합니다."
group: utilities
toc: true
untranslated: true
---

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## 배경색

상황별 텍스트 색상 클래스와 비슷하게 요소의 배경을 상황별 클래스로 설정합니다. background 유틸리티는 ** `color` 는 세팅하지 않습니다 **. 따라서 경우에 따라 `.text- *` [색상 유틸리티]({{< docsref "/utilities/colors" >}})를 사용하는 것이 좋습니다.

{{< callout info >}}
Background utilities like `.bg-*` that generated from our original `$theme-colors` Sass map don't yet respond to color modes, however, any `.bg-*-subtle` utility will. This will be resolved in v6.
{{< /callout >}}

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }}{{ if .contrast_color }} text-{{ .contrast_color }}{{ else }} text-white{{ end }}">.bg-{{ .name }}</div>
<div class="p-3 mb-2 bg-{{ .name }}-subtle text-{{ .name }}-emphasis">.bg-{{ .name }}-subtle</div>
{{- end -}}
{{< /colors.inline >}}
<div class="p-3 mb-2 bg-body-secondary">.bg-body-secondary</div>
<div class="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</div>
<div class="p-3 mb-2 bg-body text-body">.bg-body</div>
<div class="p-3 mb-2 bg-black text-white">.bg-black</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>
{{< /example >}}

## 배경 그라데이션

`.bg-gradient` 클래스를 추가하면 선형 그라데이션이 배경 이미지로 추가됩니다. 이 그라데이션은 아래쪽으로 희미 해지는 반투명 흰색으로 시작됩니다.

사용자 정의 CSS에 그라데이션이 필요하신가요? `background-image : var (-bs-gradient);`만 추가하면 됩니다.

{{< markdown >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }} bg-gradient{{ with .contrast_color }} text-{{ . }}{{ else }} text-white{{ end }}">.bg-{{ .name }}.bg-gradient</div>
{{- end -}}
{{< /colors.inline >}}
<div class="p-3 mb-2 bg-black bg-gradient text-white">.bg-black.bg-gradient</div>
{{< /markdown >}}

## 불투명도

{{< added-in "5.1.0" >}}

As of v5.1.0, `background-color` utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### 작동 방식

Consider our default `.bg-success` utility.

```css
.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
```

We use an RGB version of our `--bs-success` (with the value of `25, 135, 84`) CSS variable and attached a second CSS variable, `--bs-bg-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.bg-success` now, your computed `color` value is `rgba(25, 135, 84, 1)`. The local CSS variable inside each `.bg-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

### 예시

To change that opacity, override `--bs-bg-opacity` via custom styles or inline styles.

{{< example >}}
<div class="bg-success p-2 text-white">This is default success background</div>
<div class="bg-success p-2" style="--bs-bg-opacity: .5;">This is 50% opacity success background</div>
{{< /example >}}

Or, choose from any of the `.bg-opacity` utilities:

{{< example >}}
<div class="bg-success p-2 text-white">This is default success background</div>
<div class="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
{{< /example >}}

## CSS

다음 Sass 기능 외에도 색상 등이 포함 된 [CSS 사용자 정의 속성]({{< docsref "/customize/css-variables" >}}) (일명 CSS 변수)에 대해 읽어보십시오.

### Sass 변수

대부분의 `background-color` 유틸리티는 테마 색상에 의해 생성되며 일반 색상 팔레트 변수에서 재 지정됩니다.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="variable-gradient" file="scss/_variables.scss" >}}

Grayscale colors are also available, but only a subset are used to generate any utilities.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

Variables for setting `background-color` in `.bg-*-subtle` utilities in light and dark mode:

{{< scss-docs name="theme-bg-subtle-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-bg-subtle-dark-variables" file="scss/_variables-dark.scss" >}}

### Sass 맵

그런 다음 테마 색상은 Sass 맵에 배치되어 유틸리티, 컴포넌트 수정자 등을 생성하기 위해 반복할 수 있습니다.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

회색조 색상은 Sass 맵으로도 사용할 수 있습니다. **이 맵은 유틸리티를 생성하는 데에 사용되지 않습니다.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

RGB 색상은 별도의 Sass 맵에서 생성됩니다:

{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}

그리고 배경색 불투명도는 유틸리티 API에서 사용하는 자체 맵을 기반으로 합니다:

{{< scss-docs name="utilities-bg-colors" file="scss/_maps.scss" >}}

색상 모드의 배경색은 Sass 맵에서도 사용 가능합니다:

{{< scss-docs name="theme-bg-subtle-map" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-bg-subtle-dark-map" file="scss/_maps.scss" >}}

### Sass 믹스인

** 배경 유틸리티를 생성하는 데 믹스인이 사용되지는 않지만 **, 자신만의 그라데이션을 만들고 싶은 다른 상황을 위한 몇가지 추가 믹스인이 있습니다.

{{< scss-docs name="gradient-bg-mixin" file="scss/mixins/_gradients.scss" >}}

{{< scss-docs name="gradient-mixins" file="scss/mixins/_gradients.scss" >}}

### Sass 유틸리티 API

백그라운드 유틸리티는 `scss / _utilities.scss`의 유틸리티 API에 선언되어 있습니다. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-bg-color" file="scss/_utilities.scss" >}}
