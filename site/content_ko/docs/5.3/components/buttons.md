---
layout: docs
title: 버튼
description: 다양한 크기, 상태 등을 지원하는 폼, 대화상자 등의 작업에 Bootstrap의 사용자 지정 버튼 스타일을 사용하세요.
group: components
toc: true
---

## 기본 클래스

Bootstrap에는 패딩 및 콘텐츠 정렬과 같은 기본 스타일을 설정하는 기본 `.btn` 클래스가 있습니다. 기본적으로 `.btn` 컨트롤에는 투명한 테두리와 배경색이 있으며, 명시적인 포커스 및 호버 스타일이 없습니다.

{{< example >}}
<button type="button" class="btn">Base class</button>
{{< /example >}}

`.btn` 클래스는 버튼 변형과 함께 사용하거나 사용자 정의 스타일의 기초로 사용하기 위한 것입니다.

{{< callout warning >}}
`.btn` 클래스를 단독으로 사용하는 경우 최소한 명시적인 `:focus` 및/또는 `:focus-visible` 스타일을 정의하는 것을 잊지 마세요.
{{< /callout >}}

## 변수

Bootstrap에는 각각 고유한 의미적 목적을 가진 여러 가지 버튼 변형이 포함되어 있으며, 더 많은 제어를 위해 몇 가지 추가 기능이 추가되었습니다.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-link">Link</button>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## 텍스트 줄바꿈 비활성화

버튼의 텍스트를 감싸고 싶지 않다면 `.text-nowrap` 클래스를 버튼에 추가할 수 있습니다. Sass로 `$btn-white-space: nowrap`를 설정하여 버튼별로 텍스트를 감싸지 않도록 할 수 있습니다.

## 버튼 태그

`.btn` 클래스는 `<button>` 요소로 사용되도록 설계되어 있습니다. 그러나 이런 클래스를 `<a>` 혹은 `<input>` 요소로 사용할 수도 있습니다.(브라우저에 따라 약간 다른 렌더링이 적용되는 때도 있습니다)

현재 페이지 내의 새로운 페이지나 섹션에 대한 링크가 아닌, 페이지 내 기능(콘텐츠 접기 등)의 트리거로 사용하는 `<a>` 요소에 버튼 클래스를 사용할 경우, 이런 링크에는 `role="button"` 이라는 역할을 주어, 스크린 리더 등의 지원 기술로 적합하게 전달해야 합니다.

{{< example >}}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input" />
<input class="btn btn-primary" type="submit" value="Submit" />
<input class="btn btn-primary" type="reset" value="Reset" />
{{< /example >}}

## 버튼 테두리

버튼은 필요한데 무거운 배경색이 필요하지 않으신가요? 기본 변경 클래스를 `.btn-outline-*`으로 변경해서 버튼에 있는 배경색을 지울 수 있습니다.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< callout info >}}
버튼 스타일 안에는 비교적 밝은 전경색 사용하고 있어 충분한 차이를 나타내기 위해서는 어두운 배경에서만 사용할 필요가 있습니다.
{{< /callout >}}

## 크기

Fancy larger or smaller buttons? 버튼의 크기를 `.btn-lg` 나 `.btn-sm`을 적용해 변경할 수 있습니다.

{{< example >}}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{{< /example >}}

You can even roll your own custom sizing with CSS variables:

{{< example >}}
<button type="button" class="btn btn-primary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
  Custom button
</button>
{{< /example >}}

## 비활성화 상태

버튼의 `active` 상태를 토글하기 위해, `data-bs-toggle="button"`을 추가합니다. 버튼을 미리 토글하고 있는 경우, 지원 기술에 적절하게 전달될 수 있도록 `.active` 클래스와 `aria-pressed="true"`를 수동으로 버튼에 추가해야 합니다.

{{< example >}}
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>
<button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
<button type="button" class="btn btn-outline-secondary" disabled>Button</button>
{{< /example >}}

`<a>` 요소에 대해서 버튼을 비활성화하는 경우는 조금 다릅니다.

- `<a>`는 `disabled` 속성을 지원하지 않음으로 시각적으로 비활성화처럼 보이게 하기 위해 `.disabled` 클래스를 추가해야 합니다.
- 앵커 버튼의 모든 `pointer-events`를 비활성화시키기 위해 장래적으로 사용하기 쉬운 스타일이 포함되어 있습니다.
- `<a>`를 사용하는 비활성화 버튼은 보조 기술에 대한 요소의 상태를 나타내는 `aria-disabled="true"` 속성이 포함되어야 합니다.
- `<a>`를 사용하는 비활성화 버튼은 `href` 속성을 포함하면 *안됩니다*.

{{< example >}}
<a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
<a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
{{< /example >}}

### 링크 기능 주의사항

비활성화된 링크에서 `href` 속성을 유지해야 하는 경우를 다루기 위해 `.disabled` 클래스는 `pointer-events: none`을 사용하여 `<a>`의 링크 기능을 비활성화하려고 시도합니다. 이 CSS 속성은 아직 HTML에서 표준화되지 않았지만 모든 최신 브라우저에서 지원합니다. 또한 `pointer-events: none`을 지원하는 브라우저에서도 키보드 탐색은 영향을 받지 않습니다. 따라서 확실하게 하려면 `aria-disabled="true"` 외에도 이러한 링크에 `tabindex="-1"` 속성을 포함하여 키보드 포커스를 받지 않도록 하고 사용자 지정 JavaScript를 사용하여 해당 기능을 완전히 비활성화해야 합니다.

{{< example >}}
<a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{{< /example >}}

## 버튼 블록

Display와 gap 유틸리티를 조합해, Bootstrap 4와 같은 전체 너비에 걸친 반응형 "블록 버튼"을 만듭니다. 버튼 고유의 클래스 대신 유틸리티를 사용하여, 간격, 정렬, 또는 반응형 동작을 훨씬 크게 제어할 수 있습니다.

{{< example >}}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

여기서는 `.d-md-block`이 `.d-grid` 클래스로 대체되어 `gap-2` 유틸리티를 무효화 할 때까지, 버튼을 수직으로 쌓은 상태로 시작하는 반응형 변형을 만들고 있습니다. 브라우저 크기를 조절해 가며 차이를 확인해 보세요.

{{< example >}}
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

블록 버튼의 가로 폭은, 그리드의 컬럼 가로 폭 클래스로 조정할 수 있습니다. 예를 들어, 50%의 가로 폭의 "블록 버튼"에는 `.col-6`을 사용합니다. 수평으로 중앙에 배치하고 싶을 때는 `.mx-auto`를 사용합니다.

{{< example >}}
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

추가적인 유틸리티를 사용하여, 수평 방향 버튼의 배치를 조정할 수 있습니다. 여기서는, 이전 반응형의 예시를 참고해 버튼이 더 이상 쌓이지 않을 때, 버튼의 오른쪽 정렬을 위해 flex 유틸리티와 margin 유틸리티를 추가했습니다.

{{< example >}}
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

## 버튼 플러그인

버튼 플러그인에서는, 간단한 on/off 토글 버튼을 생성할 수 있습니다.

{{< callout info >}}
시각적으로, 이 토글 버튼은 [체크박스 토글 버트]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}})과 같습니다. 하지만, 이런 것들은 지원 기술에 따라 다르게 전달됩니다. 체크 박스는 스크린 리더에 의해, "checked"/"not checked"로 안내되며(보이는 것과 상관없이 기본적으로는 체크 박스이기 때문에), 토글 버튼은 "button"/"button pressed"로 안내됩니다. 이 두 가지 접근방식 중 어느 쪽을 선택할지는 작성하는 토글의 타입과 체크 박스 또는 실제 버튼으로 안내 되었을 때 토글이 사용자에게 의미가 있는지 여부에 따라 다릅니다.
{{< /callout >}}

### 상태 토글

버튼을 비활성화시키기 위해 `<button>` 요소에 `disabled` 속성을 추가합니다. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to ensure that it is conveyed appropriately to assistive technologies.

{{< example >}}
<p class="d-inline-flex gap-1">
  <button type="button" class="btn" data-bs-toggle="button">Toggle button</button>
  <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn" disabled data-bs-toggle="button">Disabled toggle button</button>
</p>
<p class="d-inline-flex gap-1">
  <button type="button" class="btn btn-primary" data-bs-toggle="button">Toggle button</button>
  <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
</p>
{{< /example >}}

{{< example >}}
<p class="d-inline-flex gap-1">
  <a href="#" class="btn" role="button" data-bs-toggle="button">Toggle link</a>
  <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
  <a class="btn disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
</p>
<p class="d-inline-flex gap-1">
  <a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a>
  <a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
  <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
</p>
{{< /example >}}

### 메소드

버튼 인스턴스는, 예를 들어 버튼의 생성자를 사용해 작성할 수 있습니다.

```js
const bsButton = new bootstrap.Button('#myButton')
```

{{< bs-table "table" >}}
| 메소드                   | 설명                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `dispose`             | 요소의 버튼을 삭제합니다. (DOM 요소에 저장된 데이터를 제거합니다.)                                                                                           |
| `getInstance`         | 정적 메소드를 사용하면 DOM 요소와 연결된 버튼 인스턴스를 가져올 수 있으며, 다음과 같이 사용할 수 있습니다: `bootstrap.Button.getInstance(element)`.                           |
| `getOrCreateInstance` | DOM 요소와 연관된 버튼 인스턴스를 반환하거나 초기화되지 않은 경우 새 인스턴스를 생성하는 정적 메소드입니다. 다음과 같이 사용할 수 있습니다: `bootstrap.Button.getOrCreateInstance(element)`. |
| `toggle`              | 푸시 상태를 전환합니다. 버튼이 활성화된 것처럼 보이도록 설정합니다.                                                                                             |
{{< /bs-table >}}

예를 들어, 모든 버튼을 토글하려면:

```js
document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
```

## CSS

### 변수

{{< added-in "5.2.0" >}}

Bootstrap의 진화하는 CSS 변수 접근 방식의 일환으로 이제 버튼은 향상된 실시간 사용자 지정을 위해 `.btn`에서 로컬 CSS 변수를 사용합니다. CSS 변수의 값은 Sass를 통해 설정되므로 Sass 사용자 정의도 계속 지원됩니다.

{{< scss-docs name="btn-css-vars" file="scss/_buttons.scss" >}}

각 `.btn-*` 수정자 클래스는 `button-variant()`, `button-variant()`, `button-outline-variant()`, `button-size()` 믹스인을 사용하여 추가 CSS 규칙을 최소화하기 위해 적절한 CSS 변수를 업데이트합니다.

다음은 문서에 고유한 버튼에서와 같이 자체 CSS 및 Sass 변수를 혼합하여 Bootstrap의 CSS 변수를 재할당하여 사용자 정의 `.btn-*` 수정자 클래스를 구축하는 예제입니다.

<div class="bd-example">
  <button type="button" class="btn btn-bd-primary">Custom button</button>
</div>

{{< scss-docs name="btn-css-vars-example" file="site/assets/scss/_buttons.scss" >}}

### Sass 변수

{{< scss-docs name="btn-variables" file="scss/_variables.scss" >}}

### Sass 믹스인

버튼에는 3개의 믹스인이 있습니다: 버튼과 버튼 아웃라인 변수 믹스인(양쪽 다 `$theme-colors`를 기반으로 사용), 그리고 버튼 크기 믹스인.

{{< scss-docs name="btn-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-outline-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-size-mixin" file="scss/mixins/_buttons.scss" >}}

### Sass 루프

버튼 종류(일반 버튼과 아웃라인 버튼)는 각각의 믹스인과 `$theme-colors`맵을 사용하여 `scss/_buttons.scss`에 제어자 클래스를 생성합니다.

{{< scss-docs name="btn-variant-loops" file="scss/_buttons.scss" >}}
