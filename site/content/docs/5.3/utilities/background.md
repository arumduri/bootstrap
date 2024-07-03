---
layout: docs
title: 배경색
title_en: Background
description: "`background-color`를 통해 의미를 전달하고 그라디언트로 꾸밈을 추가 합니다."
group: utilities
toc: true
---

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## 배경색

상황별 텍스트 색상 클래스와 비슷하게 요소의 배경을 상황별 클래스로 설정합니다. background 유틸리티는 ** `color`는 세팅하지 않습니다 **. 따라서 경우에 따라 `.text- *` [색상 유틸리티]({{< docsref "/utilities/colors" >}})를 사용하는 것이 좋습니다.

{{< callout info >}}
원래 `$theme-colors` Sass 맵에서 생성된 `.bg-*`와 같은 배경 유틸리티는 아직 색상 모드에 반응하지 않지만, `.bg-*-subtle` 유틸리티는 반응합니다. 이 문제는 v6에서 해결될 예정입니다.
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

v5.1.0부터 `background-color` 유틸리티는 CSS 변수를 사용하여 Sass에서 생성됩니다. 이를 통해 컴파일 없이 실시간으로 색상을 변경하고 동적 알파 투명도를 변경할 수 있습니다.

### 작동 방식

기본 `.bg-success` 유틸리티를 살펴보세요.

```css
.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
```

여기서는 `--bs-success`(`25, 135, 84`) CSS 변수의 RGB 버전을 사용하고 알파 투명도를 위해 두 번째 CSS 변수인 `--bs-bg-opacity`를 첨부했습니다(로컬 CSS 변수 덕분에 기본값은 `1`입니다). 즉, 이제 `.bg-success`를 사용할 때마다 계산된 `color` 값은 `rgba(25, 135, 84, 1)`가 됩니다. 각 `.bg-*` 클래스 내부의 로컬 CSS 변수는 상속 문제를 방지하므로 유틸리티의 중첩된 인스턴스는 자동으로 알파 투명도가 수정되지 않습니다.

### 예시

이 불투명도를 변경하려면 사용자 정의 스타일 또는 인라인 스타일을 통해 `--bs-bg-opacity`를 재정의합니다.

{{< example >}}
<div class="bg-success p-2 text-white">This is default success background</div>
<div class="bg-success p-2" style="--bs-bg-opacity: .5;">This is 50% opacity success background</div>
{{< /example >}}

또는 `.bg-opacity` 유틸리티 중 하나를 선택하세요:

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

배경색 유틸리티는 `scss / _utilities.scss`의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법에 대해 알아보세요.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-bg-color" file="scss/_utilities.scss" >}}
