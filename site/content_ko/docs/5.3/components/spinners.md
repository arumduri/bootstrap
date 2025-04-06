---
layout: docs
title: 스피너
description: HTML, CSS, JavaScript를 사용하지 않고 완전히 빌드된 Bootstrap 스피너를 사용하여 컴포넌트나 페이지의 로딩 상태를 표시합니다.
group: components
toc: true
---

## 소개

Bootstrap "스피너"는 프로젝트의 로딩 상태를 표시하기 위해 사용할 수 있습니다. 이것은 HTML과 CSS로 만들어져 있기 때문에 JavaScript를 필요로 하지 않습니다. 그러나 가시성을 바꾸기 위해 몇 가지의 사용자 정의 JavaScript가 필요합니다. 이러한 외형, 배치, 크기는 유틸리티 클래스를 통해 간단하게 재정의할 수 있습니다.

접근성을 위해, 여기에서의 각 loader 는 `role="status"`과 `<span class="visually-hidden">Loading...</span>`을 포함하고 있습니다.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Border 스피너

Border 스피너를 사용해 가벼운 로딩 인디게이터를 실현합니다.

{{< example >}}
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

### 색상

Border 스피너는 `border-color`에 `currentColor`을 사용합니다. 표준 스피너에서는 [text color utilities][color] 를 사용할 수 있습니다.

{{< example >}}
{{< spinner.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="spinner-border text-{{ .name }}" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{- end -}}
{{< /spinner.inline >}}
{{< /example >}}

{{< callout info >}}
**`border-color` 유틸리티를 사용하면 안되나요?** 각 border스피너는 적어도 한 쪽의 보더를 `transparent`로 지정해야 하는데, `.border-{color}` 유틸리티는 그것을 덮어쓰기 때문입니다.
{{< /callout >}}

## Grow 스피너

Border 스피너를 싫어하는 분은, grow 스피너를 사용하세요. 기술적으로는 회전하지 않지만 grow를 반복시키고 있습니다.

{{< example >}}
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

다시 한번 말씀드리지만, 이 스피너는 `currentColor`로 만들어졌기 때문에 [text color utilities][color]로 외형을 쉽게 바꿀 수 있습니다.

{{< example >}}
{{< spinner.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="spinner-grow text-{{ .name }}" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{- end -}}
{{< /spinner.inline >}}
{{< /example >}}

## 정렬

Bootstrap 스피너는, `rem`, `currentColor`, `display: inline-flex`로 빌드되어 있습니다. 이것은 크기, 색, 배치를 빠르게 변경 할 수 있다는 것을 의미합니다.

### 마진

`.m-5`와 같이 [margin utilities][margin] 을 사용하면 간단하게 간격을 둘 수 있습니다.

{{< example >}}
<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

### 배치

[Flexbox utilities][flex], [float utilities][float], 혹은 [text alignment][text] 유틸리티를 사용하여 어떤 상황에서도 스피너를 원하는 위치에 정확히 배치시킬 수 있습니다.

#### 유동

{{< example >}}
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
{{< /example >}}

#### 플로트

{{< example >}}
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

#### 텍스트 정렬

{{< example >}}
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

## 크기

`.spinner-border-sm`과 `.spinner-grow-sm`을 추가해서 다른 컴포넌트 안에서 바로 사용할 수 있는 작은 스피너를 만들 수 있습니다.

{{< example >}}
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

혹은, 사용자 정의 CSS나 인라인 스타일을 사용하여 필요에 따라서 치수를 변경할 수 있습니다.

{{< example >}}
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

## 버튼

버튼 중 스피너를 사용하여 액션이 현재 처리 중이거나 실행 중임을 나타냅니다. 또한 스피너 밖에 있는 텍스트를 교체하여 필요에 따라 버튼 텍스트를 이용할 수 있습니다.

{{< example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.2.0" >}}

Bootstrap의 진화하는 CSS 변수 접근 방식의 일환으로, 이제 스피너는 `.spinner-border`와 `.spinner-grow`의 로컬 CSS 변수를 사용하여 실시간 사용자 정의 기능을 강화합니다. CSS 변수의 값은 Sass를 통해 설정되므로 Sass 사용자 정의도 계속 지원됩니다.

테두리 스피너 변수:

{{< scss-docs name="spinner-border-css-vars" file="scss/_spinners.scss" >}}

증가하는 스피너 변수:

{{< scss-docs name="spinner-grow-css-vars" file="scss/_spinners.scss" >}}

두 스피너 모두 작은 스피너 수정자 클래스를 사용하여 필요에 따라 이러한 CSS 변수의 값을 업데이트합니다. 예를 들어 `.spinner-border-sm` 클래스는 다음을 수행합니다:

{{< scss-docs name="spinner-border-sm-css-vars" file="scss/_spinners.scss" >}}

### Sass 변수

{{< scss-docs name="spinner-variables" file="scss/_variables.scss" >}}

### 키프레임

스피너의 CSS 애니메이션 작성에 사용합니다. `scss/_spinners.scss`에 포함되어 있습니다.

{{< scss-docs name="spinner-border-keyframes" file="scss/_spinners.scss" >}}

{{< scss-docs name="spinner-grow-keyframes" file="scss/_spinners.scss" >}}


[color]:   {{< docsref "/utilities/colors" >}}
[flex]:    {{< docsref "/utilities/flex" >}}
[float]:   {{< docsref "/utilities/float" >}}
[margin]:  {{< docsref "/utilities/spacing" >}}
[text]:    {{< docsref "/utilities/text" >}}
