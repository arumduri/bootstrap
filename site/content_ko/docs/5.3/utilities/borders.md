---
layout: docs
title: 테두리
description: 테두리 유틸리티를 사용하여 요소의 테두리 및 테두리 반경 스타일을 빠르게 지정합니다. 이미지, 버튼 또는 기타 요소에 적합합니다.
group: utilities
toc: true
---

## 테두리

테두리 유틸리티를 사용하여 요소에 테두리를 추가하거나 제거합니다. 모든 테두리를 선택하거나 한 번에 하나씩 선택 하세요.

### Additive

커스텀 요소에 테두리를 추가하세요:

{{< example class="bd-example-border-utils" >}}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
{{< /example >}}

### Subtractive

또는 테두리를 제거하세요:

{{< example class="bd-example-border-utils" >}}
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
{{< /example >}}

## 색상

{{< callout info >}}
원래 `$theme-colors` Sass 맵에서 생성된 `.border-*`와 같은 테두리 유틸리티는 아직 색상 모드에 반응하지 않지만, `.border-*-subtle` 유틸리티는 반응합니다. 이 문제는 v6에서 해결될 예정입니다.
{{< /callout >}}

테마 색상에 사전정의된 유틸리티를 사용하여 테두리 색상을 변경하십시오.

{{< example class="bd-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="border border-{{ .name }}"></span>
<span class="border border-{{ .name }}-subtle"></span>
{{- end -}}
{{< /border.inline >}}
<span class="border border-black"></span>
<span class="border border-white"></span>
{{< /example >}}

또는 컴포넌트의 기본 `border-color`를 수정합니다:

{{< example >}}
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
  Dangerous heading
</div>

<div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
  Changing border color and width
</div>
{{< /example >}}

## 불투명도

{{< added-in "5.2.0" >}}

Bootstrap `border-{color}` 유틸리티는 CSS 변수를 사용하여 Sass로 생성됩니다. 이를 통해 컴파일 없이 실시간으로 색상을 변경하고 동적 알파 투명도를 변경할 수 있습니다.

### 작동 방식

기본 `.border-success` 유틸리티를 살펴보겠습니다.

```css
.border-success {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}
```

여기서는 `--bs-success`(`25, 135, 84` 값) CSS 변수의 RGB 버전을 사용하고 알파 투명도를 위해 두 번째 CSS 변수인 `--bs-border-opacity`를 첨부했습니다(로컬 CSS 변수 덕분에 기본값은 `1`입니다). 즉, 이제 `.border-success`를 사용할 때마다 계산된 `color` 값은 `rgba(25, 135, 84, 1)`가 됩니다. 각 `.border-*` 클래스 내부의 로컬 CSS 변수는 상속 문제를 방지하므로 유틸리티의 중첩된 인스턴스는 자동으로 알파 투명도가 수정되지 않습니다.

### 예시

이 불투명도를 변경하려면 사용자 정의 스타일 또는 인라인 스타일을 통해 `--bs-border-opacity`를 재정의하면 됩니다.

{{< example >}}
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2" style="--bs-border-opacity: .5;">This is 50% opacity success border</div>
{{< /example >}}

또는 `.border-opacity` 유틸리티 중 하나를 선택해도 됩니다:

{{< example >}}
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
<div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
{{< /example >}}

## Width

{{< example class="bd-example-border-utils" >}}
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>
{{< /example >}}

## Radius

요소에 클래스를 추가하여 모서리를 쉽게 둥근형태로 만듭니다.

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded" title="Example rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-top" title="Example top rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-end" title="Example right rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-bottom" title="Example bottom rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-start" title="Example left rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-circle" title="Completely round image" >}}
{{< placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" >}}
{{< /example >}}

### 크기

스케일링 클래스를 사용해 더 둥글거나 덜 둥근 모서리로 지정합니다. `0`에서 `5`까지 지정할 수 있으며 유틸리티 API를 수정하여 구성 할 수 있습니다.

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-0" title="Example non-rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-1" title="Example small rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-2" title="Example default rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-3" title="Example large rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-4" title="Example larger rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-5" title="Example extra large rounded image" >}}
{{< /example >}}

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-bottom-1" title="Example small rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-start-2" title="Example default left rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-end-circle" title="Example right completely round image" >}}
{{< placeholder width="75" height="75" class="rounded-start-pill" title="Example left rounded pill image" >}}
{{< placeholder width="75" height="75" class="rounded-5 rounded-top-0" title="Example extra large bottom rounded image" >}}
{{< /example >}}

## CSS

### 변수

{{< added-in "5.2.0" >}}

{{< scss-docs name="root-border-var" file="scss/_root.scss" >}}

### Sass 변수

{{< scss-docs name="border-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="border-radius-variables" file="scss/_variables.scss" >}}

`.border-*-subtle` 유틸리티에서 `border-color`를 밝고 다크 모드로 설정하기 위한 변수입니다:

{{< scss-docs name="theme-border-subtle-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-border-subtle-dark-variables" file="scss/_variables-dark.scss" >}}

### Sass 맵

컬러 모드 적응형 테두리 색상은 Sass 맵으로도 사용할 수 있습니다:

{{< scss-docs name="theme-border-subtle-map" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-border-subtle-dark-map" file="scss/_maps.scss" >}}

### Sass 믹스인

{{< scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### Sass 유틸리티 API

테두리 유틸리티는 `scss / _utilities.scss`의 유틸리티 API에 선언되어 있습니다. \[유틸리티 API 사용 방법에 대해 알아보세요.\] ({{< docsref "/utilities/api # using-the-api" >}})

{{< scss-docs name="utils-borders" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius" file="scss/_utilities.scss" >}}
