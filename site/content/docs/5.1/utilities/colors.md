---
layout: docs
title: 색상
title_en: Colors
description: 색상 유틸리티 클래스를 사용하여 `color` (색상)을 통해 의미를 전달합니다. 호버 상태의 링크 스타일링에 대한 지원도 포함합니다.
group: utilities
toc: true
---

## 색상

색상 유틸리티를 사용하여 텍스트를 색상화 합니다. 링크에 색을 입히려면 `: hover` 및 `: focus` 상태가 있는 [`.link-*` helper classes]({{< docsref "/helpers/colored-links" >}})를 사용할 수 있습니다.

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

{{< callout warning >}}
**Deprecation:** With the addition of `.text-opacity-*` utilities and CSS variables for text utilities, `.text-black-50` and `.text-white-50` are deprecated as of v5.1.0. They'll be removed in v6.0.0.
{{< /callout >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Opacity

<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Added in v5.1.0</small>

As of v5.1.0, text color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.text-primary` utility.

```css
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
```

We use an RGB version of our `--bs-primary` (with the value of `13, 110, 253`) CSS variable and attached a second CSS variable, `--bs-text-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.text-primary` now, your computed `color` value is `rgba(13, 110, 253, 1)`. The local CSS variable inside each `.text-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

### Example

To change that opacity, override `--bs-text-opacity` via custom styles or inline styles.

{{< example >}}
<div class="text-primary">This is default primary text</div>
<div class="text-primary" style="--bs-text-opacity: .5;">This is 50% opacity primary text</div>
{{< /example >}}

Or, choose from any of the `.text-opacity` utilities:

{{< example >}}
<div class="text-primary">This is default primary text</div>
<div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
<div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
<div class="text-primary text-opacity-25">This is 25% opacity primary text</div>
{{< /example >}}

## 상황별

다른 선택자의 특수성으로 인해 상황별 클래스를 적용 할 수 없는 경우가 있습니다. 해결 방법은 요소의 컨텐츠를  `<div>` 또는 원하는 클래스의 의미 요소로 감싸는 것입니다.

## Sass

다음 Sass 기능 외에도 색상 등에 대해 포함 된 [CSS 사용자 정의 속성]({{< docsref "/customize/css-variables" >}}) (일명 CSS 변수)에 대해 읽어보십시오.

### 변수


대부분의 `color` 유틸리티는 일반 색상 팔레트 변수에서 재할당 된 테마 색상에 의해 생성됩니다.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

그레이 스케일 색상도 사용할 수 있지만 유틸리티를 생성하는 데 자식 집합 만 사용됩니다.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

### 맵

테마 색상은 Sass 맵에 배치되어 유틸리티, 구성 요소 수정자 등을 생성하기 위해 반복 할 수 있습니다.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

그레이 스케일 색상은 Sass 맵으로도 사용할 수 있습니다. **이 지도는 유틸리티를 생성하는 데 사용되지 않습니다.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

RGB colors are generated from a separate Sass map:

{{< scss-docs name="theme-colors-rgb" file="scss/_variables.scss" >}}

And color opacities build on that with their own map that's consumed by the utilities API:

{{< scss-docs name="utilities-text-colors" file="scss/_variables.scss" >}}

### 유틸리티 API

색상 유틸리티는`scss / _utilities.scss`의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법 알아보기]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-color" file="scss/_utilities.scss" >}}
