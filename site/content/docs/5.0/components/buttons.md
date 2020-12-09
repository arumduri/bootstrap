---
layout: docs
title: Buttons(버튼)
description: 다양한 사이즈와 상태를 지원하고 폼, 다이얼로그 등의 액션으로 Bootstrap의 사용자 버튼 스타일을 사용합니다.
group: components
toc: true
---

## Examples

Bootstrap에서는 미리 정의된 버튼 스타일이 포함되어 있으며, 각각은 고유의 의미적인 목적을 위해 사용되며, 보다 많은 컨트롤을 위해 몇 개의 여분의 것들이 던져지고 있습니다.

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

버튼의 텍스트를 감싸고 싶지 않다면 `.text-nowrap` 클래스를 버튼에 추가할 수 있습니다. Sass에서 `$btn-white-space: nowrap` 을 설정하여 각 버튼에 대해 텍스트를 감싸지 않도록 할 수 있습니다.

## Button tags

`.btn` 클래스는 `<button>` 요소로 사용되도록 설계되어 있습니다. 그러나 이런 클래스를 `<a>` 나 `<input>` 요소로 사용할 수도 있습니다 (브라우저에 따라 약간 다른 랜더링이 적용되는 경우가 있습니다).

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
Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}}

## Sizes

버튼의 사이즈를`.btn-lg` 나 `.btn-sm` 을 적용해 변경할 수 있습니다.

{{< example >}}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{{< /example >}}

## Disabled state

버튼을 비활성화 시키기 위해 `<button>` 요소에 `disabled` 속성을 추가합니다. 비활성화 된 버튼은 `pointer-events: none`을 가집니다. 아무것도 적용되지 않고 호버나 활성화된 상태로 눌려지는것을 방지합니다.

{{< example >}}
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
{{< /example >}}

`<a>` 요소에 대해서 버튼을 비활성화 하는 경우는 조금 다릅니다.

- `<a>`는 `disabled` 속성을 지원하지 않으므로 시각적으로 비활성화처럼 보이게 하기 위해 `.disabled` 클래스를 추가해야 합니다.
- 앵커 버튼의 모든 `pointer-events`를 비활성화 시키기 위해 장래적으로 사용하기 쉬운 스타일이 포함되어 있습니다.
- 비활성화 버튼은 보조기술에 대한 요소의 상태를 나타내는 `aria-disabled="true"` 속성이 포함되어야 합니다.

{{< example >}}
<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{{< /example >}}

{{< callout warning >}}
##### Link functionality caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.
{{< /callout >}}

## Block buttons

display와 gap 유틸리티를 조합해, Bootstrap 4와 같은 전체 너비에 걸친 "블럭 버튼"을 만듭니다. 버튼 고유의 클래스 대신 유틸리티를 사용하여, 간격, 정렬, 또는 반응적인 동작을 훨씬 크게 제어할 수 있습니다.

{{< example >}}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

여기서는 `.d-md-block`가 `.d-grid` 클래스로 대체되어 `gap-2` 유틸리티를 무효화 할 때까지, 버튼을 수직으로 쌓은 상태로 시작한 반응형 변형를 만들고 있습니다. 브라우저 크기를 조절해 가며 차이를 확인 해 보세요.

{{< example >}}
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

블럭 버튼의 가로 폭은, 그리드의 컬럼 가로 폭 클래스로 조정할 수 있습니다. 예를 들어, 50%의 가로 폭의 "블럭 버튼"에는 `.col-6` 을 사용합니다. 수평으로 중앙에 배치하고 싶을 때는 `.mx-auto`을 사용합니다.

{{< example >}}
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

추가의 유틸리티를 사용하여, 수평방향 버튼의 배치를 조정할 수 있습니다. 여기서는, 이전 반응형의 예시를 참고해 버튼에 flex 유틸리티와 margin 유틸리티를 추가해 버튼이 더이상 쌓아지지 않을 때 버튼들은 오른쪽 정렬을 하고 있습니다.

{{< example >}}
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

## Button plugin

버튼의 플러그인에서는, 간단한 on/off 토글 버튼을 생성할 수 있습니다.

{{< callout info >}}
Visually, these toggle buttons are identical to the [checkbox toggle buttons]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

### Toggle states

버튼의 `active` 상태를 토글하기 위해, `data-bs-toggle="button"`을 추가합니다. 버튼을 미리 토글하고 있는 경우, 지원 기술에 적절하게 전달될수 있도록 `.active`클래스와 `aria-pressed="true"`을 수동으로 버튼에 추가해야 합니다.

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

버튼 인스턴스는, 예를 들어 버튼의 생성자를 사용해 작성할수 있습니다.

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
        버튼 요소를 파기합니다. (DOM 요소에 저장되어 있는 데이타를 삭제합니다)
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
