---
layout: docs
title: 버튼 그룹
title_en: Button group
description: 여러 개의 버튼을 묶어 그룹화하거나, 세로로 겹쳐 놓을 수 있습니다.
group: components
toc: true
---

## 기본 예시

`.btn-group`으로 `.btn` 요소를 포장합니다.

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
{{< /example >}}

{{< callout warning >}}
##### 올바른 `role` 확인 및 레이블 제공하기

스크린 리더에게 일련의 버튼이 그룹화되어 있음을 전달하기 위해서는 적절한 `role`을 지정해야 합니다. 버튼 그룹의 경우, `role="group"`이 되고, 툴바의 경우는 `role="toolbar"`가 됩니다.

또한, 그룹이나 툴바에는 명시적인 라벨을 붙일 필요가 있습니다. 그 말은, 올바른 롤 속성이 있어도 대부분의 스크린 리더는 그것을 안내하지 않기 때문입니다. 여기에서는 `aria-label`을 사용하고 있지만, `aria-labelledby` 같은 대체제를 사용하는 것도 가능합니다.
{{< /callout >}}

이 클래스는 [`.nav` 내비게이션 컴포넌트]({{< docsref "/components/navs-tabs" >}})를 대체하여 링크 그룹에 추가할 수도 있습니다.

{{< example >}}
<div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-primary">Link</a>
  <a href="#" class="btn btn-primary">Link</a>
</div>
{{< /example >}}

## 혼합 스타일

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
{{< /example >}}

## 테두리 스타일

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
{{< /example >}}

## 체크박스와 라디오버튼 그룹

버튼과 같은 체크 박스와 라디오 [toggle buttons]({{< docsref "/forms/checks-radios" >}})을 조합하여 아주 매끄러운 외형의 버튼 그룹을 만듭니다.

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
{{< /example >}}

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>
{{< /example >}}

## 버튼 툴바

버튼 그룹의 세트를 버튼 툴바와 결합해, 더욱 복잡한 컴포넌트를 만들 수 있습니다. 필요에 따라서 유틸리티 클래스를 사용해 그룹과 버튼 등에 여백을 줄 수 있습니다.

{{< example >}}
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>
{{< /example >}}

입력그룹과 버튼 그룹을 자유롭게 조합해 주세요. 위의 예시와 같이, 적절한 여백을 갖기 위해서는 몇 개의 유틸리티가 필요합니다.

{{< example >}}
<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon2">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>
{{< /example >}}

## 크기 조절

그룹 내의 모든 버튼에 버튼 크기 클래스를 적용하는 대신에, 각각의 버튼을 포함한 `.btn-group`에 `.btn-group-*`을 추가하면 됩니다.

{{< example >}}
<div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
  <button type="button" class="btn btn-outline-dark">Left</button>
  <button type="button" class="btn btn-outline-dark">Middle</button>
  <button type="button" class="btn btn-outline-dark">Right</button>
</div>
<br>
<div class="btn-group" role="group" aria-label="Default button group">
  <button type="button" class="btn btn-outline-dark">Left</button>
  <button type="button" class="btn btn-outline-dark">Middle</button>
  <button type="button" class="btn btn-outline-dark">Right</button>
</div>
<br>
<div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-dark">Left</button>
  <button type="button" class="btn btn-outline-dark">Middle</button>
  <button type="button" class="btn btn-outline-dark">Right</button>
</div>
{{< /example >}}

## 중첩

드롭다운과 버튼 그룹을 조합하는 경우는 다른 `.btn-group` 안에 `.btn-group`을 배치합니다.

{{< example >}}
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

## 수직 변수

버튼 세트를 수평 방향이 아닌 수직 방향으로 표시합니다. **Split button dropdown은 여기에서는 지원되지 않습니다.**

{{< example >}}
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-dark">Button</button>
  <button type="button" class="btn btn-dark">Button</button>
  <button type="button" class="btn btn-dark">Button</button>
  <button type="button" class="btn btn-dark">Button</button>
  <button type="button" class="btn btn-dark">Button</button>
  <button type="button" class="btn btn-dark">Button</button>
</div>
{{< /example >}}

{{< example >}}
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
  <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
  <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
  <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
</div>
{{< /example >}}
