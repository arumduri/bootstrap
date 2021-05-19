---
layout: docs
title: Checks and radios(체크박스와 라디오 버튼)
description: 완전히 새로워 진 체크 컴포넌트를 사용해 크로스 브라우저와 크로스 디바이스로 일관된 체크박스와 라디오 버튼을 만들 수 있습니다.
group: forms
aliases: "/docs/5.0/forms/checks/"
toc: true
---

## Approach

브라우저의 기본 체크박스와 라디오 버튼은 `.form-check`의 도움을 받아 대체할 수 있습니다. 이는 두 입력 유형을 위한 클래스로, HTML 요소의 레이아웃과 동작을 개선하여 보다 높은 맞춤성과 크로스 브라우저의 일관성을 제공합니다. 체크박스는 목록 중 하나 또는 여러 개를 선택하고, 라디오 버튼은 여러 목록 중 하나를 선택하는 것입니다.

구조적으로 `<input>`과 `<label>`은 형제 요소이며, `<label>` 안에 `<input>`이 들어 있는 것과는 다릅니다. 이것은 `<input>` 이라고 `<label>`을 연관짓기 위해 `id` 와 `for`속성을 지정해야 하기 때문에 약간 장황해 집니다. 또한 `:checked` 나 `:disabled` 등, 모든 `<input>` 상태에는 형제 셀렉터(`~`)를 사용합니다. `.form-check-label` 클래스와 함께 사용함으로써 `<input>` 상태에 따라 각 항목의 문자를 쉽게 표시할 수 있습니다.

체크박스에서는 Bootstrap 사용자 정의 아이콘을 사용하여 선택되었거나 선택전 상태를 표시하고 있습니다.

## Checks

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
{{< /example >}}

### Indeterminate

JavaScript를 수동으로 설정해 `:indeterminate` 가상 클래스를 사용할 수 있습니다(이것을 지정하기 위해 이용 가능한 HTML 속성은 없습니다 ).

{{< example class="bd-example-indeterminate">}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
  <label class="form-check-label" for="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>
{{< /example >}}

### Disabled

`disabled` 속성을 추가하면 `<label>`과 함께 관련된 입력 폼이 흐릿한 비활성화 상태로 표시됩니다.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
  <label class="form-check-label" for="flexCheckDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexCheckCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
{{< /example >}}

## Radios

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
{{< /example >}}

### Disabled

`disabled` 속성을 추가하면 `<label>`과 함께 관련된 입력 폼이 흐릿한 비활성화 상태로 표시됩니다.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  <label class="form-check-label" for="flexRadioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
{{< /example >}}

## Switches

사용자 정의 체크박스의 마크업을 가지고 있는 스위치는 토글 스위치를 렌더링하기 위해 `.form-switch` 클래스를 사용합니다. `disabled` 속성도 지원하고 있습니다.

{{< example >}}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled>
  <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
{{< /example >}}

## Default (stacked)

기본적으로 직계 형제인 체크박스나 라디오 버튼은 `.form-check`로 수직으로 쌓여져 적절한 간격으로 배치됩니다.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
{{< /example >}}

## Inline

`.form-check`에 `.form-check-inline` 클래스를 추가해 체크박스나 라디오 버튼을 같은 수평방향에 놓아 그룹화 할 수 있습니다.

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
{{< /example >}}

## Without labels

라벨 문자가 없는 체크박스나 라디오 버튼을 사용하고 싶을 때에는 `.form-check`를 생략합니다. 지원 기술을 위해 어떤 형태로든 접근성에 맞는 이름을 제공해야 하는 것을 잊지 마세요.(예를 들어, `aria-label`을 사용 한다든지 등). 자세한 내용은 [forms overview accessibility]({{< docsref "/forms/overview#accessibility" >}})을 참조해 주세요.

{{< example >}}
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>
{{< /example >}}

## Toggle buttons

버튼과 같은 체크박스나 라디오 버튼을 작성하기 위해서는 `<label>` 요소에 `.form-check-label`이 아닌 `.btn` 스타일을 사용합니다. 이러한 토글 버튼은 필요에 따라 다시 [button group]({{< docsref "/components/button-group" >}})으로 그룹화 할 수 있습니다.

### Checkbox toggle buttons

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-primary" for="btn-check">Single toggle</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
<label class="btn btn-primary" for="btn-check-2">Checked</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
<label class="btn btn-primary" for="btn-check-3">Disabled</label>
{{< /example >}}

{{< callout info >}}
시각적으로 이러한 체크박스 토글버튼은 [button plugin toggle buttons]({{< docsref "/components/buttons#button-plugin" >}})과 같습니다. 체크박스의 토글 버튼은 스크린 리더에서는 "checked"/"not checked"로 표시되는데(외형은 체크박스이기 때문에), 버튼의 토글 버튼은 "button"/"button pressed"로 표시됩니다. 이러한 두 가지 접근법 중 어느 쪽을 선택할지는 만들고자 하는 토글 유형과 그 토글이 체크박스일 때와 실제 버튼일때 중, 어느 쪽이 사용자에게 더 의미가 있는지에 따라 달라집니다.
{{< /callout >}}

### Radio toggle buttons

{{< example >}}
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
<label class="btn btn-secondary" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
<label class="btn btn-secondary" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
<label class="btn btn-secondary" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
<label class="btn btn-secondary" for="option4">Radio</label>
{{< /example >}}

### Outlined styles

다양한 종류의 `.btn`이 지원되고 있습니다.

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br>

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
<label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br>

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
<label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="form-check-variables" file="scss/_variables.scss" >}}
