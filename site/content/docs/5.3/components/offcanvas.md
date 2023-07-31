---
layout: docs
title: 오프캔버스
title_en: Offcanvas
description: 몇 가지의 클래스와 JavaScript 플러그인을 사용해 네비게이션이나 쇼핑카트 등에 유용한 숨겨진 사이드바를 사용할 수 있습니다.
group: components
toc: true
---

## 작동 원리

Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, top, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and `data` attributes are used to invoke our JavaScript.

- 오프캔버스는 모달과 같이 JavaScript 코드를 일부 공유하고 있습니다. 개념적으로는 아주 비슷하지만 이들은 다른 플러그인입니다.
- 마찬가지로, 오프캔버승의 스타일과 치수를 위한 [Sass 소스](#sass-변수) 변수의 일부는 모달 변수로부터 상속받고 있습니다.
- 오프캔버스를 표시하면 기본적으로 배경이 포함되어져 있어 그것을 클릭하면 오프캔버스가 사라집니다.
- 모달과 마찬가지로 오프캔버스는 한번에 1개밖에 표시할 수 없습니다.

**주의!** CSS에 의한 애니메이션 사용을 고려한다면 `.offcanvas` 요소의 `margin`이나 `translate`를 사용할 수 없습니다. 대신, 이 클래스를 독립된 포장 요소 감싸서 사용해 주세요.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## 예시

### 오프캔버스 컴포넌트

다음은 기본적으로 표시되는(`.offcanvas`의 `.show`에 의해) 오프캔버스의 예시입니다. 오프캔버스에는 닫기 버튼이 있는 헤더와 초기 `padding`을 위한 옵션의 body클래스가 지원됩니다. 가능한 오프캔버스의 헤더에 닫기 액션을 포함시키거나 명시적인 닫기 액션을 제공할 것을 권장합니다.

{{< example class="bd-example-offcanvas p-0 bg-body-tertiary overflow-hidden" >}}
<div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div>
{{< /example >}}

### 라이브 데모

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
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

### Body scrolling

Scrolling the `<body>` element is disabled when an offcanvas and its backdrop are visible. Use the `data-bs-scroll` attribute to enable `<body>` scrolling.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
{{< /example >}}

### Body scrolling and backdrop

You can also enable `<body>` scrolling with a visible backdrop.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
{{< /example >}}

### Static backdrop

When backdrop is set to static, the offcanvas will not close when clicking outside of it.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>
{{< /example >}}

## Dark offcanvas

{{< deprecated-in "5.3.0" >}} {{< added-in "5.2.0" >}}

Change the appearance of offcanvases with utilities to better match them to different contexts like dark navbars. Here we add `.text-bg-dark` to the `.offcanvas` and `.btn-close-white` to `.btn-close` for proper styling with a dark offcanvas. If you have dropdowns within, consider also adding `.dropdown-menu-dark` to `.dropdown-menu`.

{{< callout warning >}}
Heads up! Dark variants for components were deprecated in v5.3.0 with the introduction of color modes. Instead of manually adding classes mentioned above, set `data-bs-theme="dark"` on the root element, a parent wrapper, or the component itself.
{{< /callout >}}

{{< example class="bd-example-offcanvas p-0 bg-body-secondary overflow-hidden" >}}
<div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Place offcanvas content here.</p>
  </div>
</div>
{{< /example >}}

## Responsive

{{< added-in "5.2.0" >}}

Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above that breakpoint, the contents within will behave as usual. For example, `.offcanvas-lg` hides content in an offcanvas below the `lg` breakpoint, but shows the content above the `lg` breakpoint.

{{< example >}}
<button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

<div class="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
  </div>
</div>
{{< /example >}}

Responsive offcanvas classes are available across for each breakpoint.

- `.offcanvas`
- `.offcanvas-sm`
- `.offcanvas-md`
- `.offcanvas-lg`
- `.offcanvas-xl`
- `.offcanvas-xxl`

## 배치

오프캔버스 컴포넌트의 기본 배치는 없으므로 아래 제어자 클래스 중 하나를 추가해야 합니다:

- `.offcanvas-start`는 오프캔버스를 뷰포트의 왼쪽에 배치합니다 (위의 예시로 확인)
- `.offcanvas-end`는 오프캔버스를 뷰포트의 오른쪽에 배치합니다.
- `.offcanvas-top`은 뷰포트의 맨 위에 오프캔버스를 배치합니다.
- `.offcanvas-bottom`은 뷰포트의 맨 아래에 오프캔버스를 배치합니다.

위, 오른쪽, 아래에서 나오는 오프캔버스를 아래의 예시에서 확인해 보세요.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>
{{< /example >}}

## 접근성

개념적으로 오프캔버스 패널은 모달 dialog여서, 반드시 `.offcanvas`에 `aria-labelledby="..."`라는 오프캔버스의 타이틀을 참조하는 기술을 추가해 주세요. 덧붙여 `role="dialog"`는 이미 JavaScript로 추가되고 있기 때문에 따로 추가할 필요는 없습니다.

## CSS

### 변수

{{< added-in "5.2.0" >}}

As part of Bootstrap's evolving CSS variables approach, offcanvas now uses local CSS variables on `.offcanvas` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="offcanvas-css-vars" file="scss/_offcanvas.scss" >}}

### Sass 변수

{{< scss-docs name="offcanvas-variables" file="scss/_variables.scss" >}}

## 사용 방법

오프캔버스 플러그인에서는 몇 가지 클래스와 속성을 이용하여 힘든 처리를 합니다:

- `.offcanvas`는 콘텐츠를 숨깁니다.
- `.offcanvas.show`는 콘텐츠를 표시합니다.
- `.offcanvas-start`는 왼쪽의 오프캔버스를 숨깁니다.
- `.offcanvas-end`는 오른쪽의 오프캔버스를 숨깁니다.
- `.offcanvas-top`는 위쪽의 오프캔버스를 숨깁니다.
- `.offcanvas-bottom`은 아래쪽의 오프캔버스를 숨깁니다.

닫기 버튼에 `data-bs-dismiss="offcanvas"` 속성을 추가해 JavaScript 기능으로 감춥니다.

### 데이터 속성 사용하기

#### 토글

요소에 `data-bs-toggle="offcanvas"`와 `data-bs-target` 또는 `href`를 추가하면 하나의 offcanvas 요소에 대한 제어가 자동으로 할당됩니다. `data-bs-target` 속성은 오프캔버스를 적용할 CSS 선택자를 허용합니다. offcanvas 요소에 `offcanvas` 클래스를 추가해야 합니다. 기본적으로 열리게 하려면 `show` 클래스를 추가하세요.

#### 해제

{{% js-dismiss "offcanvas" %}}

{{< callout warning >}}
모달을 해제하는 두 가지 방법을 모두 지원하지만 모달 외부에서 해제하는 것은 [ARIA Authoring Practices Guide dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)과 일치하지 않습니다. 문제가 생길 수도 있다는 점에 주의하세요.
{{< /callout >}}

### JavaScript 사용하기

이처럼 수동으로 활성화 합니다:

```js
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
```

### 옵션

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| 이름 | 유형 | 기본값 | 설명 |
| --- | --- | --- | --- |
| `backdrop` | boolean 또는 string `static` | `true` | 오프캔버스가 열려 있는 동안, body에 배경을 적용합니다. Alternatively, specify `static` for a backdrop which doesn't close the offcanvas when clicked. |
| `keyboard` | boolean | `true` | escape키가 눌려지면 오프캔버스를 닫습니다. |
| `scroll` | boolean | `false` | 오프캔버스를 여는 동안 body 스크롤링을 허용합니다. |
{{< /bs-table >}}

### 메소드

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

콘텐츠를 오프캔버스 요소로 액티브하게 합니다. 옵션의 `object`를 받습니다.

아래의 예시처럼 생성자를 사용해 오프캔버스의 인스턴스를 만들 수 있습니다:

```js
const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas')
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `getInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element, or create a new one in case it wasn't initialized. |
| `hide` | Hides an offcanvas element. **Returns to the caller before the offcanvas element has actually been hidden** (i.e. before the `hidden.bs.offcanvas` event occurs). |
| `show` | Shows an offcanvas element. **Returns to the caller before the offcanvas element has actually been shown** (i.e. before the `shown.bs.offcanvas` event occurs). |
| `toggle` | Toggles an offcanvas element to shown or hidden. **Returns to the caller before the offcanvas element has actually been shown or hidden** (i.e. before the `shown.bs.offcanvas` or `hidden.bs.offcanvas` event occurs). |
{{< /bs-table >}}

### 이벤트

Bootstrap의 오프캔버스 클래스는 오프캔버스 기능에 연결하기 위한 몇 가지 이벤트를 공개하고 있습니다.

{{< bs-table "table" >}}
| Event type | Description |
| --- | --- |
| `hide.bs.offcanvas` | This event is fired immediately when the `hide` method has been called. |
| `hidden.bs.offcanvas` | This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete). |
| `hidePrevented.bs.offcanvas` | This event is fired when the offcanvas is shown, its backdrop is `static` and a click outside of the offcanvas is performed. The event is also fired when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.bs.offcanvas` | This event fires immediately when the `show` instance method is called. |
| `shown.bs.offcanvas` | This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete). |
{{< /bs-table >}}

```js
const myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
  // do something...
})
```
