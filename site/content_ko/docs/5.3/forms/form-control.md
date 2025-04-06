---
layout: docs
title: 폼 컨트롤
description: 텍스트 형식의 `<input>`이나 `<textarea>`과 같은 폼 컨트롤에 사용자 정의 스타일, 크기 조정, 포커스 상태등의 업그레이드를 실시할 수 있습니다.
group: forms
toc: true
---

## 예시

양식 컨트롤은 Sass 및 CSS 변수를 혼합하여 스타일을 지정하므로 색상 모드에 적응하고 모든 사용자 정의 방법을 지원할 수 있습니다.

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

## 크기 조절

`.form-control-lg`와 `.form-control-sm` 클래스를 사용해서 크기를 다르게 설정할 수 있습니다.

{{< example >}}
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
{{< /example >}}

## 폼 텍스트

block-level 또는 inline-level의 폼 텍스트는 `.form-text`를 사용해서 생성할 수 있습니다.

{{< callout warning >}}
양식 텍스트는 `aria-describedby` 속성을 사용하여 관련 양식 컨트롤과 명시적으로 연결해야 합니다. 이렇게 하면 화면 리더와 같은 보조 기술이 사용자가 컨트롤에 초점을 맞추거나 입력할 때 이 양식 텍스트를 알릴 수 있습니다.
{{< /callout >}}

입력 아래 양식 텍스트는 `.form-text`로 스타일을 지정할 수 있습니다. 블록 수준 요소를 사용하는 경우 위 입력과 간격을 쉽게 맞출 수 있도록 상단 여백이 추가됩니다.

{{< example >}}
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
{{< /example >}}

인라인 텍스트는 `.form-text` 클래스만 있으면 일반적인 인라인 HTML 요소(`<span>`, `<small>` 등)를 모두 사용할 수 있습니다.

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

## 비활성화

`disabled` 불리언 속성을 추가하면 비활성화 외형이 되며, 포인터 이벤트가 삭제되면서 포커싱되지 않습니다.

{{< example >}}
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled />
<input class="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readonly />
{{< /example >}}

## 읽기 전용

`readonly` 불리언 속성을 추가함으로써 입력 값의 변경을 막을 수 있습니다. `disabled`와 달리 `readonly` 입려값은 계속 포커싱 및 선택이 가능합니다.

{{< example >}}
<input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly />
{{< /example >}}

## 읽기 전용 일반 텍스트

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

## 색상

Set the `type="color"` and add `.form-control-color` to the `<input>`. We use the modifier class to set fixed `height`s and override some inconsistencies between browsers.

{{< example >}}
<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" />
{{< /example >}}

## 데이터 목록

데이터 목록을 사용하면 `<input>` 안에서 엑세스(및 자동 보완) 할 수 있는 `<option>` 그룹을 작성할 수 있습니다. 이들은 `<select>` 요소와 비슷하지만 목록 표시에는 많은 제한과 차이가 있습니다. 대부분의 브라우저나 운영 체계는 `<datalist>` 요소를 어느 정도 지원하고 있지만, 그 표시에는 일관성이 없습니다.

자세한 내용은 [support for datalist elements](https://caniuse.com/datalist)를 참고해 주세요.

{{< example >}}
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
{{< /example >}}

## CSS

### Sass 변수

`$input-*`는 (버튼빼고)대부분의 폼 컨트롤로 공유되고 있습니다.

{{< scss-docs name="form-input-variables" file="scss/_variables.scss" >}}

`$form-label-*`과 `$form-text-*`는 `<label>`과 `.form-text` 컴포넌트용입니다.

{{< scss-docs name="form-label-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="form-text-variables" file="scss/_variables.scss" >}}

`$form-file-*`은 파일 선택용입니다.

{{< scss-docs name="form-file-variables" file="scss/_variables.scss" >}}
