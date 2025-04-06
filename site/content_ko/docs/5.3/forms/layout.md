---
layout: docs
title: 레이아웃
title_en: Layout
description: 인라인, 수평, 사용자 그리드 등의 구현 방법까지 폼에 구조를 갖게 하는 폼 레이아웃 옵션을 준비하고 있습니다.
group: forms
toc: true
---

## 폼

폼 필드의 모든 그룹은 `<form>` 요소 안에 존재해야 합니다. Bootstrap은 `<form>` 요소에 기본 스타일링은 제공하지 않지만 기본 제공되는 몇 가지 강력한 브라우저 기능이 있습니다.

- 브라우저 폼은 처음이신가요? 사용 가능한 속성의 개요 및 전체 목록에 대해서는 [the MDN form docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)를 참조해 주세요.
- `<form>` 내 `<button>`의 기본은 `type="submit"` 이므로, 구체적으로 항상 `type`을 사용해 주세요.

Bootstrap은 거의 모든 폼 컨트롤에 `display: block`과 `width: 100%`를 적용하여 기본적으로 수직으로 쌓고 있습니다. 추가 클래스를 사용하여 폼 별로 이 레이아웃을 바꿀 수 있습니다.

## 유틸리티

[마진 유틸리티]({{< docsref "/utilities/spacing" >}})는 폼에 구조를 추가하는 가장 간단한 방법입니다. 이들은 라벨, 컨트롤, 옵션 폼 텍스트, 폼 검증 문구의 기본적인 그룹화를 제공합니다. 우리는 일관성을 유지하기 위해 `margin-bottom`유틸리티를 사용해 폼 전체에 하나의 방향성을 사용할 것을 권장합니다.

`<fieldset>`나 `<div>` 등의 거의 모든 요소를 사용하여 자유롭게 폼을 작성해 주세요.

{{< example >}}
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Example label</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Another label</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
</div>
{{< /example >}}

## 폼 그리드

보다 복잡한 폼은 그리드 클래스를 사용하여 만들 수 있습니다. 그리드 클래스를 사용해 여러 개의 컬럼, 다양한 너비, 추가 배치 옵션이 필요한 폼 레이아웃 표현이 가능합니다.

**Sass 변수 `$enable-grid-classes`가 활성화 되어 있어야 합니다** (기본이 활성화 상태임).

{{< example >}}
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>
{{< /example >}}

## 거터

[거터 제어자 클래스]({{< docsref "/layout/gutters" >}})를 추가하는 것으로, 인라인이나 블록 방향으로 거터의 너비를 조정할 수 있습니다. **이또한 Sass 변수 `$enable-grid-classes`가 활성화 되어 있어야 합니다.** (기본값이 활성화 상태임).

{{< example >}}
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>
{{< /example >}}

그리드 시스템을 사용하여 보다 복잡한 레이아웃을 만들 수도 있습니다.

{{< example >}}
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
{{< /example >}}

## 수평 폼

폼 그룹에 `.row` 클래스를 추가하고 `.col-*-*` 클래스를 사용해 라벨이나 컨트롤의 폭을 지정하는 것으로, 그리드를 사용한 수평 방향의 폼을 작성할 수 있습니다. `<label>`에는 반드시 `.col-form-label`을 추가하여 관련 폼 컨트롤과 함께 수직 방향의 중앙에 배치하도록 합니다.

때에 따라서는 완벽한 배치를 위해 여백(마진이나 패딩) 유틸리티를 사용할 필요가 있을지도 모릅니다. 예를 들어 아래의 예시와 같이 오른쪽의 싸인 라디오 버튼의 라벨과의 정렬을 맞추기 위해 `padding-top`을 삭제하는 유틸리티를 추가합니다.

{{< example >}}
<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">
          First radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
          Second radio
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
        <label class="form-check-label" for="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{{< /example >}}

### 수평 폼 라벨 크기 조절

`.form-control-lg`와 `.form-control-sm`의 사용에 따라 `<label>`이나 `<legend>`에 `.col-form-label-sm` 이나 `.col-form-label-lg`를 사용해 주세요.

{{< example >}}
<div class="row mb-3">
  <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
  </div>
</div>
<div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
  </div>
</div>
<div class="row">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
  </div>
</div>
{{< /example >}}

## 열 크기 조절

지금까지의 예시에서 봐왔듯 그리드 시스템에는 `.row` 안에 `.col`을 몇 개라도 배치할 수 있습니다. 이 열들은 이용 가능한 너비를 균등하게 분할합니다. 또한 `.col-sm-7`와 같은 특정 컬럼 클래스를 사용하여 컬럼 서브셋을 선택하여 공간을 늘리거나 줄이거나 나머지 `.col`들을 균등 분할할 수도 있습니다.

{{< example >}}
<div class="row g-3">
  <div class="col-sm-7">
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="State" aria-label="State">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Zip" aria-label="Zip">
  </div>
</div>
{{< /example >}}

## 자동 크기 조절

아래 예시에서는 플렉스박스 유틸리티를 사용하여 콘텐츠를 수직 방향으로 중앙에 오게 하고 `.col`을 `.col-auto`로 변경함으로써 필요한 만큼 컬럼이 공간을 차지하도록 하고 있습니다. 콘텐츠에 따라 컬럼의 크기가 다르게 설정됩니다.

{{< example >}}
<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">
    </div>
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
    <select class="form-select" id="autoSizingSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck">
      <label class="form-check-label" for="autoSizingCheck">
        Remember me
      </label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
{{< /example >}}

그리고 그것을 크기별 컬럼 클래스에서 다시 한번 조합할 수 있습니다.

{{< example >}}
<form class="row gx-3 gy-2 align-items-center">
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputName">Name</label>
    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">
    </div>
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
    <select class="form-select" id="specificSizeSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
      <label class="form-check-label" for="autoSizingCheck2">
        Remember me
      </label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
{{< /example >}}

## 인라인 폼

`.row-cols-*` 클래스를 사용해, 수평 방향의 레이아웃을 만듭니다. [거터 제어자 클래스]({{< docsref "/layout/gutters" >}})를 추가함으로써 수평 방향과 수직 방향에 거터를 적절하게 줄 수 있습니다. 좁은 모바일 뷰포트에서 `.col-12`는 폼 컨트롤 등을 쌓을 수 있도록 도와줍니다. `.align-items-center`를 사용해 폼 요소를 중앙에 오게 해 `.form-check`의 위치가 예쁘게 적용되었습니다.

{{< example >}}
<form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck">
      <label class="form-check-label" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
{{< /example >}}
