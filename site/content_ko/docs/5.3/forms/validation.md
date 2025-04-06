---
layout: docs
title: 유효성 검사
description: HTML5 폼 유효성 검사에서는 브라우저의 기본 동작이나 사용자 정의 스타일과 JavaScript를 이용해 사용자에게 가치있고 실용적인 전달을 제공합니다.
group: forms
toc: true
extra_js:
  - 
    src: "/docs/5.3/assets/js/validate-forms.js"
    async: true
---

{{< callout warning >}}
현재 클라이언트 측의 재정의하는 유효성 검사 스타일과 툴팁은 지원 기술에 공개되지 않아 접근할 수 없다는 것을 알고 있습니다. 해결책을 검토하는 동안 서버사이드 옵션을 사용하거나 브라우저의 기본 유효성 검사 방법을 사용하는 것을 권장합니다.
{{< /callout >}}

## How it works

Bootstrap에서 사용하고 있는 폼 유효성 검사 구조를 소개합니다:

- HTML의 폼 유효성 검사는 CSS의 두개의 가상 클래스 `:invalid`와 `:valid`를 사용해 `<input>`, `<select>`, `<textarea>` 요소에 적용됩니다. It applies to `<input>`, `<select>`, and `<textarea>` elements.
- Bootstrap는 `:invalid`과 `:valid` 스타일을 부모 클래스 `.was-validated`에 범위를 지정하고 일반적으로 `<form>`에 적용합니다. 그렇지 않으면 값이 없는 필수 필드는 페이지 로드 시 잘못된 상태로 표시됩니다. 이와 같이 해서 그것들을 유효하게 하는 시기를 선택할 수 있습니다.(보통은 폼의 송신이 시도된 후)
- 폼의 외형을 새로 적용하려면(예를 들어, AJAX를 사용한 동적인 폼 송신의 경우), 송신 후에 `.was-validated` 클래스를 `<form>`으로부터 다시 삭제합니다.
- 폴백으로서 [서버 측 검사](#서버에서-검사하기)의 가상 클래스 대신 `.is-invalid`와 `.is-valid` 클래스를 사용할 수 있습니다. 이 클래스들은 부모 클래스인 `.was-validated`를 필요로 하지 않습니다.
- (현시점에서는)CSS 동작에 제약이 있기 때문에 사용자 정의 JavaScript의 도움을 받지 않고 DOM 내에서 폼 컨트롤의 앞에 있는 `<label>`에 스타일을 적용할 수 없습니다.
- 모든 모던 브라우저는 폼 컨트롤을 유효성 검사하기 위한 일련의 JavaScript 메소드인 [constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api)를 지원합니다.
- 전달 문구는 [browser defaults](#브라우저-기본값) (브라우저별로 다르기 때문에 CSS에서 스타일 변경은 할 수 없습니다)나 HTML과 CSS를 추가한 사용자 정의 전달 스타일을 이용할 수도 있습니다.
- JavaScript의 `setCustomValidity`를 사용해 사용자 정의의 유효성 문구를 제공할 수도 있습니다.

이 점들을 고려하여 사용자 정의 폼 유효성 검사 스타일, 선택적인 서버 사이드 클래스 및 브라우저 기본값에 대해, 아래의 데모를 확인 부탁드립니다.

## 사용자 지정 스타일

Bootstrap 폼 유효성 검사 문구를 사용자 정의 하려면, `<form>`에 `novalidate`라고 하는 불리언 속성을 추가할 필요가 있습니다. 이는 브라우저의 기본 전달 툴팁을 비활성화시켜 JavaScript에서 폼 검증 API에 대한 접근을 제공합니다. 아래 예시의 전송 버튼을 눌러 보세요. JavaScript가 전송 버튼을 가로채고 전달합니다. 전송 버튼을 누르면, 폼 컨트롤에 `:invalid`과 `:valid`의 스타일이 적용되고 있는 것을 알 수 있습니다.

색상, 모서리, 포커스 스타일 및 배경 아이콘을 이용해 더 나은 사용자 정의 전달 스타일을 적용하고 있습니다. `<select>`의 배경 아이콘은 `.form-select`에서만 사용 가능하며 `.form-control`에서는 사용할 수 없습니다.

{{< example >}}
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
{{< /example >}}

{{< example lang="js" show_preview="false" >}}
{{< js.inline >}}
{{- readFile (path.Join "site/static/docs" .Site.Params.docs_version "assets/js/validate-forms.js") -}}
{{< /js.inline >}}
{{< /example >}}

## 브라우저 기본값

유효성 검사의 전달 문구를 사용자 정의하거나 폼의 동작을 변경하기 위한 JavaScript에 관심이 없으신가요? 브라우저 기본값을 사용하면 됩니다. 아래의 전송 버튼을 눌러보세요. 사용하고 있는 브라우저와 OS에 따라 약간 다르게 표시되고 있습니다.

이런 전달 스타일은 CSS로 변경할 수는 없지만, JavaScript로 전달 문구를 재정의할 수 있습니다.

{{< example >}}
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
{{< /example >}}

## Server-side

클라이언트 측의 유효성 검사를 권장하지만, 서버 측의 유효성 검사가 필요한 경우에는 `.is-invalid`와 `.is-valid`를 사용해 잘못된 폼 필드와 잘된 폼 필드를 각각 표현할 수 있습니다. 이러한 클래스에서는 `.invalid-feedback`도 지원되고 있다는 점을 주의해 주세요.

잘못된 필드의 경우, 잘못된 전달/오류 문구가 `aria-describedby`(이 속성은 이미 추가의 폼 문구를 가리키는 경우, 여러 `id`를 허용한다는 점에 유의해 주세요)를 사용해 적절한 폼 필드와 연관되어 있다는 점을 확인해 주세요.

입력 그룹과 함께 사용할 때 생기는 [issues with border radius](https://github.com/twbs/bootstrap/issues/25110)를 해결하기 위해 입력 그룹에 `.has-validation` 클래스를 추가하게 되었습니다.

{{< example >}}
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label">Zip</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
{{< /example >}}

## 지원 요소

유효성 검사 스타일은 아래의 폼 컨트롤과 컴포넌트에서 사용할 수 있습니다:

- `.form-control`을 사용하고 있는 `<input>`과 `<textarea>` (입력 그룹에 최대 한 개의 `.form-control`을 포함)
- `.form-select`를 사용하는 `<select>`
- .form-check

{{< example >}}
<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required>
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
</form>
{{< /example >}}

## Tooltips

폼의 레이아웃이 허락된다면, 유효성 검사 전달을 `.{valid|invalid}-feedback` 클래스와 교체하여 스타일 있는 툴팁으로 표시할 수 있습니다. 툴팁의 위치를 정하기 위해서 반드시 부모 요소에 `position: relative`를 지정해야 합니다. 아래 예시에서는 컬럼 클래스에 이 설정을 추가했지만, 프로젝트에 따라 다른 설정이 필요할 수도 있습니다.

{{< example >}}
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
      <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03" required>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-tooltip">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05" required>
    <div class="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.3.0" >}}

Bootstrap의 진화하는 CSS 변수 접근 방식의 일부로, 이제 양식은 향상된 실시간 사용자 지정을 위해 유효성 검사를 위해 로컬 CSS 변수를 사용합니다. CSS 변수의 값은 Sass를 통해 설정되므로 Sass 사용자 정의도 계속 지원됩니다.

{{< scss-docs name="root-form-validation-variables" file="scss/_root.scss" >}}

이러한 변수는 색상 모드 적응형이므로 다크 모드에서는 색상이 변경됩니다.

### Sass variables

{{< scss-docs name="form-feedback-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="form-validation-colors" file="scss/_variables.scss" >}}

{{< scss-docs name="form-validation-colors-dark" file="scss/_variables-dark.scss" >}}

### Sass 믹스인

두 개의 믹스인을 [loop](#루프)로 조합하고, 유효성 검사의 전달 스타일을 만들고 있습니다.

{{< scss-docs name="form-validation-mixins" file="scss/mixins/_forms.scss" >}}

### Sass 맵

이것은 `_variables.scss`의 유효성 검사용 Sass맵 입니다. 이것을 덮어쓰거나 확장해 서로 다른 상태나 추가 상태를 만들 수 있습니다.

{{< scss-docs name="form-validation-states" file="scss/_variables.scss" >}}

`$form-validation-states` 맵에는 툴팁이나 포커스 스타일을 덮어쓸수 있는 세 가지 옵션의 파라미터를 포함할 수 있습니다.

### Sass 루프

유효성 검사 스타일을 만들기 위해`$form-validation-states` 맵의 값을 반복 처리하기 위해 사용합니다. 위의 Sass맵에 변경이 있을 경우 이 반복문을 통해 컴파일되어 CSS에 반영됩니다.

{{< scss-docs name="form-validation-states-loop" file="scss/forms/_validation.scss" >}}

### 사용자 지정

유효성 검사 상태는 Sass의 `$form-validation-states` 맵을 사용하여 재정의할 수 있습니다. 이 Sass맵은 `_variables.scss` 파일에 있으며 기본 `valid`/`invalid` 상태를 만듭니다. 이 맵에는 각 상태의 색상, 아이콘, 툴팁의 색상, 포커스 섀도를 재정의 하기 위한 중첩된 맵이 포함되어 있습니다. 브라우저에서는 다른 상태가 지원되고 있지 않지만 사용자 정의 스타일을 사용하여 더 복잡한 폼 전달을 쉽게 추가할 수 있습니다.
