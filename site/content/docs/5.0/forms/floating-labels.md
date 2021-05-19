---
layout: docs
title: Floating labels(플로팅 라벨)
description: 입력 필드 위로 떠오르는 예쁘고 간단한 폼 라벨을 작성할 수 있습니다.
group: forms
toc: true
---

## Example

`<input class="form-control">`과 `<label>` 요소를 함께 `.form-floating`으로 감싸면, Bootstrap의 문자 형식의 폼 필드에서 플로팅 라벨 사용이 가능합니다. CSS만으로 플로팅 라벨을 실현하는 방법은 `:placeholder-shown` 가상 요소를 사용하기 때문에 각 `<input>`에는 `placeholder`가 필요합니다. 또한 형제 셀렉타(예를 들어, `~`)를 사용하기 때문에 `<input>`이 처음에 와야 하는 순서에 주의해 주세요.

{{< example >}}
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
{{< /example >}}

`value`가 이미 정의되어 있는 경우에는 `<label>`이 자동으로 플로팅 되어져 있습니다.

{{< example >}}
<form class="form-floating">
  <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
  <label for="floatingInputValue">Input with value</label>
</form>
{{< /example >}}

또한, 폼 유효성 검사에서도 기대한대로 잘 동작합니다.

{{< example >}}
<form class="form-floating">
  <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
  <label for="floatingInputInvalid">Invalid input</label>
</form>
{{< /example >}}

## Textareas

기본적으로, `.form-control`을 사용하는 `<textarea>`는 `<input>`의 높이와 동일합니다.

{{< example >}}
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
{{< /example >}}

`<textarea>`의 높이를 변경하고 싶다면, `rows`속성 대신, 명시적인 `height`를 사용해 설정해 주세요(인라인 또는 사용자 CSS를 사용합니다).

{{< example >}}
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
{{< /example >}}

## Selects

`.form-control` 이외에서의 플로팅 라벨은 `.form-select` 에서만 사용할 수 있습니다. 이들은 똑같이 동작하지만, `<input>`과는 다르게 `<label>`이 항상 플로팅 된 상태로 표시됩니다. **`size`와 `multiple` 선택자는 지원되지 않습니다.**

{{< example >}}
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>
{{< /example >}}

## Layout

Bootstrap 그리드 시스템을 사용할 경우, 폼 요소는 반드시 컬럼 클래스 내에 배치해야 합니다.

{{< example >}}
<div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
      <label for="floatingInputGrid">Email address</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label for="floatingSelectGrid">Works with selects</label>
    </div>
  </div>
</div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="form-floating-variables" file="scss/_variables.scss" >}}
