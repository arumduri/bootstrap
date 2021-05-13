---
layout: docs
title: Form controls(폼 컨트롤)
description: 텍스트 형식의 폼 컨트롤에 스타일, 사이즈, 포커스 상태등을 업그레이드 조정합니다.
group: forms
toc: true
---

## Example

{{< example >}}
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
{{< /example >}}

## Sizing

`.form-control-lg` 과 `.form-control-sm` 클래스를 사용해서 크기를 다르게 설정할 수 있습니다.

{{< example >}}
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
{{< /example >}}

## Disabled

`disabled` 불리언 속성을 추가하면 비활성화 외형이 되어 포인터 이벤트가 삭제됩니다.

{{< example >}}
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
<input class="form-control" type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" disabled readonly>
{{< /example >}}

## Readonly

`readonly` 불리언 속성을 추가함으로써 입력 값의 변경을 막을 수 있습니다. 읽기전용 입력은 비활성화 입력과 동일한 외형으로 표시되지만 표준 커서는 유지됩니다.

{{< example >}}
<input class="form-control" type="text" placeholder="Readonly input here..." aria-label="readonly input example" readonly>
{{< /example >}}

## Readonly plain text

폼 내의 `<input readonly>` 요소를 일반 텍스트로 표시하고 싶은 경우, `.form-control-plaintext` 클래스를 사용합니다. 기본 폼 필드의 스타일을 삭제하고 그에 맞는 마진과 패딩을 유지한 일반 텍스트로 보여집니다.

{{< example >}}
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
{{< /example >}}

{{< example >}}
<form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
{{< /example >}}

## File input

{{< example >}}
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
<div class="mb-3">
  <label for="formFileDisabled" class="form-label">Disabled file input example</label>
  <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file">
</div>
<div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>
{{< /example >}}

## Color

{{< example >}}
<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
{{< /example >}}

## Datalists

데이터 목록을 사용하면 `<input>` 안에서 액세스(및 자동 보완) 할 수 있는 `<option>` 그룹을 작성할 수 있습니다. 이들은 `<select>` 요소와 비슷하지만 메뉴 표시에는 많은 제한과 차이가 있습니다. 대부분의 브라우저나 운영 체계는 `<datalist>` 요소를 어느 정도 지원하고 있지만, 그 표시에는 일관성이 없습니다.

자세한 내용은 [datalist 요소의 서포트](https://caniuse.com/datalist)를 참고해 주세요.

{{< example >}}
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
{{< /example >}}
