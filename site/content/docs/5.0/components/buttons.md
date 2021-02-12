---
layout: docs
title: Buttons(버튼)
description: 다양한 크기와 상태를 지원하고 폼, 다이얼로그 등의 액션으로 Bootstrap 의 사용자 버튼 스타일을 사용합니다.
group: components
toc: true
---

## Examples

Bootstrap 에서는 미리 정의된 버튼 스타일이 포함되어 있으며, 각각은 고유의 의미적인 목적을 위해 사용되며, 보다 많은 컨트롤을 위해 몇 개의 여분의 것들이 더 제공되고 있습니다.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-link">Link</button>
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Disable text wrapping

버튼의 텍스트를 감싸고 싶지 않다면 `.text-nowrap` 클래스를 버튼에 추가할 수 있습니다. Sass 로 `$btn-white-space: nowrap` 을 설정하여 버튼별로 텍스트를 감싸지 않도록 할 수 있습니다.

## Button tags

`.btn` 클래스는 `<button>` 요소로 사용되도록 설계되어 있습니다. 그러나 이런 클래스를 `<a>` 혹은 `<input>` 요소로 사용할 수도 있습니다 (브라우저에 따라 약간 다른 랜더링이 적용되는 경우가 있습니다).

현재 페이지 내의 새로운 페이지나 섹션에 대한 링크가 아닌, 페이지 내 기능(컨텐츠 접기 등)의 트리커로 사용되는 `<a>` 요소에 버튼 클래스를 사용할 경우, 이런 링크에는 `role="button"` 이라는 역활을 주어, 스크린 리더 등의 지원 기술에 그 목적을 적절히 전달해야 합니다.

{{< example >}}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{{< /example >}}

## Outline buttons

버튼은 필요한데 무거운 배경색이 필요하지 않은가요? 기본 변경 클래스를 `.btn-outline-*` 으로 변경해서 버튼에 있는 배경색을 지울수 있습니다.

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

## Sizes

버튼의 크기를 `.btn-lg` 나 `.btn-sm` 을 적용해 변경할 수 있습니다.

{{< example >}}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{{< /example >}}

## Disabled state

버튼을 비활성화 시키기 위해 `<button>` 요소에 `disabled` 속성을 추가합니다. 비활성화 된 버튼은 `pointer-events: none` 을 가집니다. 아무것도 적용되지 않고 호버나 활성화된 상태로 눌려지는것을 막습니다.

{{< example >}}
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
{{< /example >}}

`<a>` 요소에 대해서 버튼을 비활성화 하는 경우는 조금 다릅니다.

- `<a>` 는 `disabled` 속성을 지원하지 않으므로 시각적으로 비활성화처럼 보이게 하기 위해 `.disabled` 클래스를 추가해야 합니다.
- 앵커 버튼의 모든 `pointer-events` 를 비활성화 시키기 위해 장래적으로 사용하기 쉬운 스타일이 포함되어 있습니다.
- 비활성화 버튼은 보조 기술에 대한 요소의 상태를 나타내는 `aria-disabled="true"` 속성이 포함되어야 합니다.

{{< example >}}
<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{{< /example >}}

{{< callout warning >}}
##### Link functionality caveat

`.disabled` 클래스는 `<a>` 의 링크 기능을 무효화하기 위해서 `pointer-events: none` 을 사용합니다만, 이 CSS 속성은 아직 표준화되어 있지 않습니다. 게다가 `pointer-events: none` 를 지원하고 있는 브라우저에서도 키보드 내비게이션은 영향을 받지 않습니다. 그렇기 때문에 안전을 위해 `aria-disabled="true"` 에 더해 `tabindex="-1"` 속성을 링크로 설정하고 키보드 포커스를 받지 않도록 하며, 커스텀 JavaScript 를 사용하여 기능을 완전히 무효화 하도록 합니다.
{{< /callout >}}

## Block buttons

Display 와 gap 유틸리티를 조합해, Bootstrap 4 와 같은 전체 너비에 걸친 "블럭 버튼"을 만듭니다. 버튼 고유의 클래스 대신 유틸리티를 사용하여, 간격, 정렬, 또는 반응형 동작을 훨씬 크게 제어할 수 있습니다.

{{< example >}}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

여기서는 `.d-md-block` 가 `.d-grid` 클래스로 대체되어 `gap-2` 유틸리티를 무효화 할 때까지, 버튼을 수직으로 쌓은 상태로 시작한 반응형 변형를 만들고 있습니다. 브라우저 크기를 조절해 가며 차이를 확인 해 보세요.

{{< example >}}
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

블럭 버튼의 가로 폭은, 그리드의 컬럼 가로 폭 클래스로 조정할 수 있습니다. 예를 들어, 50%의 가로 폭의 "블럭 버튼"에는 `.col-6` 을 사용합니다. 수평으로 중앙에 배치하고 싶을 때는 `.mx-auto` 을 사용합니다.

{{< example >}}
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

추가의 유틸리티를 사용하여, 수평방향 버튼의 배치를 조정할 수 있습니다. 여기서는, 이전 반응형의 예시를 참고해 버튼이 더 이상 쌓이지 않을때, 버튼의 오른쪽 정렬을 위해 flex 유틸리티와 margin 유틸리티를 추가했습니다.

{{< example >}}
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

## Button plugin

버튼 plugin에서는, 간단한 on/off 토글 버튼을 생성할 수 있습니다.

{{< callout info >}}
시각적으로, 이 토글 버튼은 [checkbox toggle buttons]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}) 과 같습니다. 하지만, 이런 것들은 지원 기술에 따라 다르게 전달됩니다. 체크박스는 스크린 리더에 의해, "checked"/"not checked" 로 안내되며(보이는 것과 상관없이 기본적으로는 체크박스이기 때문에), 토글 버튼은 "button"/"button pressed" 로 안내됩니다. 이 두가지 접근방식 중 어느 쪽을 선택할지는 작성하는 토글의 타입과 체크박스 또는 실제 버튼으로 안내 되었을때 토글이 사용자에게 의미가 있느지 여부에 따라 다릅니다.
{{< /callout >}}

### Toggle states

버튼의 `active` 상태를 토글하기 위해, `data-bs-toggle="button"` 을 추가합니다. 버튼을 미리 토글하고 있는 경우, 지원 기술에 적절하게 전달될수 있도록 `.active` 클래스와 `aria-pressed="true"` 을 수동으로 버튼에 추가해야 합니다.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Toggle button</button>
<button type="button" class="btn btn-primary active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Active toggle button</button>
<button type="button" class="btn btn-primary" disabled data-bs-toggle="button" autocomplete="off">Disabled toggle button</button>
{{< /example >}}

{{< example >}}
<a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a>
<a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
<a href="#" class="btn btn-primary disabled" tabindex="-1" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
{{< /example >}}

### Methods

버튼 인스턴스는, 예를 들어 버튼의 생성자를 사용해 작성할 수 있습니다.

```js
var button = document.getElementById('myButton')
var bsButton = new bootstrap.Button(button)
```

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>toggle</code>
      </td>
      <td>
        누른 상태를 바꿔줍니다. 버튼이 활성화 된 것처럼 보이게 합니다.
      </td>
    </tr>
    <tr>
      <td>
        <code>dispose</code>
      </td>
      <td>
        버튼 요소를 없앱니다. (DOM 요소에 저장되어 있는 데이타를 삭제)
      </td>
    </tr>
  </tbody>
</table>

예를 들어, 모든 버튼을 토글하려면:

```js
var buttons = document.querySelectorAll('.btn')
buttons.forEach(function (button) {
  var button = new bootstrap.Button(button)
  button.toggle()
})
```
