---
layout: docs
title: Select
description: 브라우저의 기본 `<select>`를 사용자 정의 CSS로 만들어 요소의 초기 표시를 변경할 수 있습니다.
group: forms
toc: true
---

## 기본값

사용자 정의의 `<select>`를 사용하기 위해 필요한 클래스는 `.form-select`입니다. 이 스타일은 브러우저 제한으로 `<select>`의 처음 외형만 변경할 수 있고 그 안에 있는 `<option>` 들의 스타일 변경은 불가능합니다.

{{< example >}}
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

## 크기 조절

같은 크기의 텍스트 입력에 맞춰 크고 작은 사용자 정의 셀렉트를 선택해 사용할 수 있습니다.

{{< example >}}
<select class="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select form-select-sm" aria-label="Small select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

그리고 `multiple` 속성도 지원됩니다:

{{< example >}}
<select class="form-select" multiple aria-label="Multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

또한 `size` 속성도 지원됩니다:

{{< example >}}
<select class="form-select" size="3" aria-label="Size 3 select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

## 비활성화

불리언 속성인 `disabled`를 셀렉트에 추가하면 비활성화된 외형으로 표시되며 포인터 이벤트가 삭제됩니다.

{{< example >}}
<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

## CSS

### Sass 변수

{{< scss-docs name="form-select-variables" file="scss/_variables.scss" >}}
