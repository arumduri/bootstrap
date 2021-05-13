---
layout: docs
title: Forms
description: 다양한 폼 사용을 위한 폼 컨트롤 스타일, 레이아웃 옵션, 사용자 정의 컴포넌트의 예제와 사용 가이드입니다.
group: forms
toc: true
aliases: "/docs/5.0/forms/"
sections:
  - title: Form control
    description: 다양한 상태를 지원하는 문자 입력과 텍스트 영역의 스타일을 설정할 수 있습니다.
  - title: Select
    description: 브라우저의 기본 셀렉트 요소의 초기 표시를 커스텀마이징 할 수 있게 개선하였습니다.
  - title: Checks & radios
    description: 우리가 개선한 라디오 버튼과 체크 박스를 폼으로 사용하여, 입력 옵션을 선택할 수 있습니다.
  - title: Range
    description: 브라우저의 기본 범위 선택 폼을 우리가 개선한 버전으로 사용할 수 있습니다.
  - title: Input group
    description: 입력 폼에 라벨과 버튼을 함께 사용하여 시멘틱한 마크업을 할 수 있습니다.
  - title: Floating labels
    description: 입력 필드 위로 떠오르는 동적인 폼 라벨을 간단하게 만들 수 있습니다.
  - title: Layout
    description: 인라인, 수평 또는 복잡한 그리드 레이아웃을 폼으로 만들 수 있습니다.
  - title: Validation
    description: 사용자 정의 또는 브라우저 기본 동작과 스타일을 폼으로 검증 할 수 있습니다.
---

## Overview

Bootstrap의 폼 컨트롤은 [재정의 된 폼 스타일]({{< docsref "/content/reboot#forms" >}}) 과 함께 사용합니다. 이 클래스를 사용해 브라우저나 디바이스간에 보다 일관된 렌더링을 적용시켜 커스터마이징화 된 표시를 선택할 수 있습니다.

메일 인증이나 숫자 선택 등의 새로운 입력 컨트롤을 사용하기 위해 모든 입력에 적절한 `type` 속성을 사용해 주세요. (예를 들어, 메일 주소에는 `email`, 숫자 정보에는 `number`)

여기서는 Bootstrap의 폼 스타일의 간단한 예시를 소개합니다. 필수 클래스, 폼 레이아웃 등의 문서에 대해서는 계속해서 읽어 주세요.

{{< example >}}
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{{< /example >}}

## Form text

블록 라벨(block-level) 또는 인라인 라벨(inline-level)의 폼 텍스트는 `.form-text`를 사용합니다.

{{< callout warning >}}
##### Associating form text with form controls

폼 텍스트는 `aria-describedby` 속성을 사용해 관련된 폼 컨트롤과 명시적으로 관련지어야 합니다. 그러면 사용자가 컨트롤에 포커스를 주거나 입력할 때 스크린 리더 등의 지원 기술이 이 폼 텍스트를 정확하게 읽을 수 있습니다.
{{< /callout >}}

입력 폼 아래에 있는 폼 텍스트는 `.form-text`로 스타일링 할 수 있습니다. 블록 라벨의 요소가 사용되는 경우에는 위의 입력 폼과의 간격을 위해 상단의 여백이 함께 포함되어 있습니다.

{{< example >}}
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
{{< /example >}}

인라인 텍스트는 전형적인 인라인 HTML 요소(`<span>`, `<small>` 등)로 `.form-text` 클래스 이외에는 사용하지 않습니다.

{{< example >}}
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>
{{< /example >}}

## Disabled forms

입력 폼에 `disabled` 불리언 속성을 추가하여 사용자의 조작을 막고 표시를 흐리게 할 수 있습니다.

```html
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
```

`<fieldset>` 에 `disabled` 속성을 추가하면 그 안의 모든 컨트롤이 비활성화 됩니다. 브라우저는 `<fieldset disabled>` 내의 모든 네이티브 폼 컨트롤(`<input>`, `<select>`, 그리고 `<button>` 요소)을 비활성화 시키고 게다가 키보드와 마우스의 양쪽 조작을 막습니다.

그러나, 만약에 폼에 `<a class="btn btn-*">...</a>`과 같은 사용자 정의 버튼과 같은 요소가 포함되어 있다면, 이 경우 버튼 요소에는 `pointer-events: none` 스타일 밖에 적용되지 않습니다. 즉 포커스가 가고 키보드 사용도 가능합니다. 이 경우 이들 컨트롤을 수동으로 수정하고 포커스를 받지 않게 하기 위해 `tabindex="-1"`를 추가하여 지원 기술에 그 상태를 알리기 위해 `aria-disabled="disabled"` 를 추가해야 합니다.

{{< example >}}
<form>
  <fieldset disabled>
    <legend>Disabled fieldset example</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{{< /example >}}

## Accessibility

지원 기술 사용자에게 목적을 전달할 수 있도록 모든 폼 컨트롤에는 접근 가능한 적절한 이름이 필요합니다. 이것을 가능하게 하는 가장 간단한 방법은 `<label>` 요소를 사용하거나 버튼의 경우에는 `<button>...</button>`과 같이 컨텐츠의 일부로서 충분한 설명적인 텍스트를 포함시키는 것입니다.

이같이 `<label>` 사용이나 적절한 텍스트를 컨텐츠로 포함시킬 수 없을 경우에는 다음과 같은 접근 가능한 이름을 제공하는 대체 방법이 있습니다:

- `.visually-hidden` 클래스를 사용해 숨긴 `<label>` 요소
- `aria-labelledby`를 사용하여 라벨로써 기능 할 만한 기존 요소를 지정
- `title` 속성을 제공
- `aria-label`을 사용하여 요소에 액세스 가능한 이름을 명시적으로 설정

이들 모두가 존재하지 않을 경우 지원 기술은 `<input>` 및 `<textarea>` 요소의 접근 가능한 `placeholder` 속성을 사용할 수 있습니다. 이곳의 예제에서는 몇 가지 제안된 케이스 고유의 접근 방식을 제공하고 있습니다.

시각적으로 숨긴 컨텐츠(`.visually-hidden`, `aria-label`, 그리고 더 나아가 폼 필드에 컨텐츠가 입력되면 사라지는 `placeholder` 컨텐츠)를 사용하는 것은 지원 기술 사용자에게 유익할 수 있지만, 가시화된 라벨 텍스트가 없는 것은 다른 특정 사용자에게는 여전히 문제가 될 수 있습니다. 따라서 접근성과 사용성 양쪽의 관점에서 봐도 어떠한 형식으로든 가시화된 라벨을 제공 하는것이 최적의 접근 방식입니다.

