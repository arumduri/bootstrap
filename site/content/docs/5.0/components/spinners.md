---
layout: docs
title: Spinners(스피너)
description: HTML, CSS, JavaScript 를 사용하지 않고 완전히 구축된 Bootstrap 스피너를 사용하여 컴포넌트나 페이지의 로딩 상태를 표시합니다.
group: components
toc: true
---

## About

Bootstrap "스피너"는 프로젝트의 로딩 상태를 표시하기 위해 사용할 수 있습니다. 이것은 HTML 과 CSS 로 만들어져 있기 때문에 JavaScript 를 필요로 하지 않습니다. 그러나 가시성을 바꾸기 위해 몇 가지의 커스텀 JavaScript 가 필요합니다. 이러한 외관, 배치, 크기는 유틸리티 클래스를 통해 간단하게 커스터마이즈 할 수 있습니다.

접근성을 위해, 여기에서의 각 loader 는 `role="status"` 과 `<span class="visually-hidden">Loading...</span>` 을 포함하고 있습니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Border spinner

border 스피너를 사용해 가벼운 로딩 인디게이터를 실현합니다.

{{< example >}}
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

### Colors

border 스피너는 `border-color` 에 `currentColor` 을 사용합니다. 표준 스피너에서는 [text color utilities][color] 를 사용할 수 있습니다.

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
**왜 `border-color` 유틸리티를 사용하지 않나요?** 각 border 스피너는 적어도 한 쪽의 보더를 `transparent` 로 지정하므로, `.border-{color}` 유틸리티는 그것을 덮어씁니다.
{{< /callout >}}

## Growing spinner

border 스피너를 싫어하는 분은, grow 스피너를 사용하십시오. 기술적으로는 회전하지 않지만 grow 를 반복시키고 있습니다.

{{< example >}}
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

다시 한번 말씀드리지만, 이 스피너는 `currentColor` 로 만들어졌기 때문에 [text color utilities][color] 로 쉽게 외형을 바꿀 수 있습니다.

{{< example >}}
{{< spinner.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="spinner-grow text-{{ .name }}" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{- end -}}
{{< /spinner.inline >}}
{{< /example >}}

## Alignment

Bootstrap 스피너는, `rem`, `currentColor`, `display: inline-flex` 로 구축되어 있습니다. 이것은 크기, 색, 배치를 빠르게 변경 할 수 있다는 것을 의미합니다.

### Margin

`.m-5` 와 같이 [margin utilities][margin] 을 사용하면 간단하게 간격을 둘 수 있습니다.

{{< example >}}
<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

### Placement

[flexbox utilities][flex], [float utilities][float], 혹은 [text alignment][text] 유틸리티를 사용하여 어떤 상황에서도 스피너를 원하는 위치에 정확히 배치시킬 수 있습니다.

#### Flex

{{< example >}}
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
{{< /example >}}

#### Floats

{{< example >}}
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

#### Text align

{{< example >}}
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

## Size

`.spinner-border-sm` 과 `.spinner-grow-sm` 을 추가해서 다른 컴포넌트 안에서 바로 사용할 수 있는 작은 스피너를 만들 수 있습니다.

{{< example >}}
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

혹은, 커스텀 CSS 나 인라인 스타일을 사용하여 필요에 따라서 치수를 변경할 수 있습니다.

{{< example >}}
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

## Buttons

버튼 중 스피너를 사용하여 액션이 현재 처리 중이거나 실행 중임을 나타냅니다. 또한 스피너 밖에 있는 텍스트를 교체하여 필요에 따라 버튼 텍스트를 이용할 수도 있습니다.

{{< example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
{{< /example >}}


[color]:   {{< docsref "/utilities/colors" >}}
[display]: {{< docsref "/utilities/display" >}}
[flex]:    {{< docsref "/utilities/flex" >}}
[float]:   {{< docsref "/utilities/float" >}}
[margin]:  {{< docsref "/utilities/spacing" >}}
[sizing]:  {{< docsref "/utilities/sizing" >}}
[text]:    {{< docsref "/content/typography" >}}
