---
layout: docs
title: Offcanvas(오프캔버스)
description: 몇 가지의 클래스와 JavaScript 플러그인을 사용해 네비게이션이나 쇼핑카트 등에 유용한 숨겨진 사이드바를 사용할 수 있습니다.
group: components
toc: true
---

## How it works

오프캔버스는 JavaScript로 뷰포트의 왼쪽, 오른쪽, 혹은 아래쪽에서 표시되는 사이드바 컴포넌트입니다. 버튼이나 앵커는 토글하는 특정 요소에 붙여지는 트리거로 사용되며 `data` 속성은 JavaScript를 호출하기 위해 사용됩니다.

- 오프캔버스는 모달과 같이 JavaScript 코드를 일부 공유하고 있습니다. 개념적으로는 아주 비슷하지만 이들은 다른 플러그인입니다.
- 마찬가지로, 오프캔버승의 스타일과 치수를 위한 [source Sass](#sass) 변수의 일부는 모달 변수로부터 상속받고 있습니다.
- 오프캔버스를 표시하면 기본적으로 배경이 포함되어져 있어 그것을 클릭하면 오프캔버스가 사라집니다.
- 모달과 마찬가지로 오프캔버스는 한번에 1개밖에 표시할 수 없습니다.

**주의!** CSS에 의한 애니메이션 사용을 고려한다면 `.offcanvas` 요소의 `margin`이나 `translate`를 사용할 수 없습니다. 대신, 이 클래스를 독립된 포장 요소 감싸서 사용해 주세요.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Examples

### Offcanvas components

다음은 기본적으로 표시되는(`.offcanvas`의 `.show`에 의해) 오프캔버스의 예시입니다. 오프캔버스에는 닫기 버튼이 있는 헤더와 초기 `padding`을 위한 옵션의 body클래스가 지원됩니다. 가능한 오프캔버스의 헤더에 닫기 액션을 포함시키거나 명시적인 닫기 액션을 제공할 것을 권장합니다.

{{< example class="bd-example-offcanvas p-0 bg-light overflow-hidden" >}}
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div>
{{< /example >}}

### Live demo

아래의 버튼을 클릭하면 `.offcanvas` 클래스를 갖고 있는 요소의 `.show` 클래스를 토글하는 JavaScript로 오프캔버스를 표시/숨김하는 것을 확인할 수 있습니다.

- `.offcanvas` 콘텐츠를 숨김 (기본)
- `.offcanvas.show` 콘텐츠를 표시

`href` 속성으로 링크를, `data-bs-target` 속성으로 버튼을 사용할 수 있습니다. 어느 경우든 `data-bs-toggle="offcanvas"`가 필요합니다.

{{< example >}}
<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## Placement

오프캔버스 컴포넌트의 기본 배치는 없으므로 아래 제어자 클래스 중 하나를 추가해야 합니다:

- `.offcanvas-start`는 오프캔버스를 뷰포트의 왼쪽에 배치합니다(위의 예시로 확인)
- `.offcanvas-end`는 오프캔버스를 뷰포트의 오른쪽에 배치합니다.
- `.offcanvas-top`은 뷰포트의 맨 위에 오프캔버스를 배치합니다.
- `.offcanvas-bottom`은 뷰포트의 맨 아래에 오프캔버스를 배치합니다.

위, 오른쪽, 아래에서 나오는 오프캔버스를 아래의 예시에서 확인해 보세요.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>
{{< /example >}}

## Backdrop

오프캔버스와 그 배경이 표시될 때에는 `<body>` 요소의 스크롤은 비활성화됩니다. `<body>` 스크롤을 바꾸고 싶으면 `data-bs-scroll` 속성을, 배경의 스크롤을 바꾸고 싶으면 `data-bs-backdrop` 속성을 사용해 주세요.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Enable backdrop (default)</button>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>.....</p>
  </div>
</div>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
{{< /example >}}

## Accessibility

개념적으로 오프캔버스 패널은 모달 dialog여서, 반드시 `.offcanvas`에 `aria-labelledby="..."`라는 오프캔버스의 타이틀을 참조하는 기술을 추가해 주세요. 덧붙여 `role="dialog"`는 이미 JavaScript로 추가되고 있기 때문에 따로 추가할 필요는 없습니다.

## Sass

### Variables

{{< scss-docs name="offcanvas-variables" file="scss/_variables.scss" >}}

## Usage

오프캔버스 플러그인에서는 몇 가지 클래스와 속성을 이용하여 힘든 처리를 합니다.:

- `.offcanvas`는 콘텐츠를 숨깁니다.
- `.offcanvas.show`는 콘텐츠를 표시합니다.
- `.offcanvas-start`는 왼쪽의 오프캔버스를 숨깁니다.
- `.offcanvas-end`는 오른쪽의 오프캔버스를 숨깁니다.
- `.offcanvas-bottom`은 아래쪽의 오프캔버스를 숨깁니다.

닫기 버튼에 `data-bs-dismiss="offcanvas"` 속성을 추가해 JavaScript 기능으로 감춥니다.

### Via data attributes

요소에 `data-bs-toggle="offcanvas"`와 `data-bs-target`이나 `href`를 추가하면 1개의 오프캔버스 요소의 제어를 자동으로 할 수 있습니다. `data-bs-target` 속성에는 오프캔버스를 적용하기 위한 CSS 셀렉타를 지정합니다. 오프캔버스 속성에는 반드시 `offcanvas` 클래스를 추가해야 합니다. 기본 열린 상태로 하고 싶다면 `show` 클래스를 추가하세요.

### Via JavaScript

이처럼 수동으로 활성화 합니다:

```js
var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})
```

### Options

data 속성 및 JavaScript로 옵션을 전달할 수 있습니다. data 속성의 경우, `data-bs-backdrop=""`처럼 ` data-bs-`에 옵션 명을 추가해 사용합니다.

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean | `true` | 오프캔버스가 열려 있는 동안, body에 배경을 적용합니다. |
| `keyboard` | boolean | `true` | escape키가 눌려지면 오프캔버스를 닫습니다. |
| `scroll` | boolean | `false` | 오프캔버스를 여는 동안 body 스크롤링을 허용합니다. |
{{< /bs-table >}}

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

콘텐츠를 오프캔버스 요소로 액티브하게 합니다. 옵션의 `object`를 받습니다.

아래의 예시처럼 생성자를 사용해 오프캔버스의 인스턴스를 만들 수 있습니다.:

```js
var myOffcanvas = document.getElementById('myOffcanvas')
var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `toggle` | 오프캔버스 요소의 표시 및 숨김을 바꿉니다. **실제로 표시 또는 숨김 되기 전의 오프캔버스 요소로 돌아갑니다** (즉, `shown.bs.offcanvas` 또는 `hidden.bs.offcanvas` 이벤트가 발생하기 전) |
| `show` | 오프캔버스 요소를 표시합니다. **실제로 표시되기 전의 오프캔버스 요소로 돌아갑니다** (즉, `shown.bs.offcanvas` 이벤트가 발생하기 전).|
| `hide` | 오프캔버스 요소를 숨깁니다. **실제로 숨겨지기전의 오픈캔버스 요소로 돌아갑니다.** (즉, `hidden.bs.offcanvas` 이벤트가 발생하기 전).|
| `getInstance` | DOM 요소와 연관된 오프캔버스 인스턴스를 얻기 위한 *Static* 메서드입니다. |
| `getOrCreateInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element, or create a new one in case it wasn't initialised |
{{< /bs-table >}}

### Events

Bootstrap의 오프캔버스 클래스는 오프캔버스 기능에 연결하기 위한 몇 가지 이벤트를 공개하고 있습니다.

{{< bs-table "table" >}}
| Event type | Description |
| --- | --- |
| `show.bs.offcanvas` | 이 이벤트는 `show` 인스턴스 메서드가 호출되면 즉시 발생합니다. |
| `shown.bs.offcanvas` | 이 이벤트는 오프캔버스 요소가 사용자에게 보일 때 발생합니다(CSS 트랜지션이 완료될 때까지 기다립니다). |
| `hide.bs.offcanvas` | 이 이벤트는 `hide` 메서드가 호출되면 즉시 발생합니다. |
| `hidden.bs.offcanvas` | 이 이벤트는 오프캔버스 요소가 사용자로부터 없어졌을때 발생합니다(CSS 트랜지션이 완료되기를 기다립니다). |
{{< /bs-table >}}

```js
var myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
  // do something...
})
```
