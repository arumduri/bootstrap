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
**지원 중단:** `.text-opacity-*` 유틸리티 및 텍스트 유틸리티용 CSS 변수가 추가되면서 `.text-black-50` 및 `.text-white-50`은 v5.1.0부터 더 이상 사용되지 않으며 v6.0.0에서 제거될 예정입니다.
{{< /callout >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## 불투명도

{{< added-in "5.1.0" >}}

v5.1.0부터 텍스트 색상 유틸리티는 CSS 변수를 사용하여 Sass로 생성됩니다. 이를 통해 컴파일 및 동적 알파 투명도 변경 없이 실시간 색상 변경이 가능합니다.

### 작동 원리

기본 `.text-primary` 유틸리티를 고려해보세요.

```css
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
```
우리는 `--bs-primary` (값 `13, 110, 253`) CSS 변수의 RGB 버전을 사용하고 알파 투명도를 위해 두 번째 CSS 변수 `--bs-text-opacity`를 첨부했습니다. (로컬 CSS 변수 덕분에 기본값 '1' 사용). 즉, 지금 `.text-primary`를 사용할 때마다 계산된 `color` 값은 `rgba(13, 110, 253, 1)`입니다. 각 `.text-*` 클래스 내부의 로컬 CSS 변수는 상속 문제를 방지하므로 유틸리티의 중첩 인스턴스는 자동으로 수정된 알파 투명도를 갖지 않습니다.

### 예제

불투명도를 변경하려면 맞춤 스타일 또는 인라인 스타일을 통해 `--bs-text-opacity`를 재정의하세요.

{{< example >}}
<div class="text-primary">This is default primary text</div>
<div class="text-primary" style="--bs-text-opacity: .5;">This is 50% opacity primary text</div>
{{< /example >}}

또는 `.text-opacity` 유틸리티 중 하나를 선택할 수 있습니다:

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

테마 색상은 Sass 맵에 배치되어 유틸리티, 컴포넌트 수정자 등을 생성하기 위해 반복할 수 있습니다.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

그레이 스케일 색상은 Sass 맵으로도 사용할 수 있습니다. **이 맵은 유틸리티를 생성하는 데에 사용되지 않습니다.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

RGB 색상은 별도의 Sass 맵에서 생성됩니다:

{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}

그리고 색상 불투명도는 유틸리티 API에서 사용하는 자체 맵을 기반으로 빌드됩니다:

{{< scss-docs name="utilities-text-colors" file="scss/_maps.scss" >}}

### 유틸리티 API

색상 유틸리티는`scss / _utilities.scss`의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법 알아보기]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-color" file="scss/_utilities.scss" >}}
