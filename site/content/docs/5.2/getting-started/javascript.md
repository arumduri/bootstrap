---
layout: docs
title: JavaScript
description: 선택적 JavaScript 플러그인으로 Bootstrap에 생명을 불어넣으세요. 각 플러그인, 데이터 및 프로그래밍 방식 API 옵션 등에 대해 알아보세요.
group: getting-started
toc: true
---

## 개별 또는 컴파일

(Bootstrap의 독립된 `js/dist/*.js`를 이용해서) 플러그인을 별도로 포함시키거나, `bootstrap.js` 또는 경량화된 `bootstrap.min.js` (둘 다 포함하면 안됨)을 이용해서 한 번에 포함하세요.

번들러 (webpack, Parcel, Vite...)를 사용한다면 UMD를 위해서 준비된 `/js/dist/*.js`을 사용할 수도 있습니다.

## Usage with JavaScript frameworks

While the Bootstrap CSS can be used with any framework, **the Bootstrap JavaScript is not fully compatible with JavaScript frameworks like React, Vue, and Angular** which assume full knowledge of the DOM. Both Bootstrap and the framework may attempt to mutate the same DOM element, resulting in bugs like dropdowns that are stuck in the "open" position.

A better alternative for those using this type of frameworks is to use a framework-specific package **instead of** the Bootstrap JavaScript. Here are some of the most popular options:

- React: [React Bootstrap](https://react-bootstrap.github.io/)
- Vue: [BootstrapVue](https://bootstrap-vue.org/) (currently only supports Vue 2 and Bootstrap 4)
- Angular: [ng-bootstrap](https://ng-bootstrap.github.io/)

## Bootstrap을 모듈로 사용하기

{{< callout >}}
**Try it yourself!** Download the source code and working demo for using Bootstrap as an ES module from the [twbs/examples repository](https://github.com/twbs/examples/tree/main/sass-js-esm). You can also [open the example in StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html).
{{< /callout >}}

[타게팅하려는 브라우저가 지원하는 경우](https://caniuse.com/es6-module) 브라우저에서 Bootstrap를 모듈로 사용할 수 있도록 `ESM` (`bootstrap.esm.js` 및 `bootstrap.esm.min.js`)으로 빌드된 버전을 제공합니다.

```html
<script type="module">
  import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

Compared to JS bundlers, using ESM in the browser requires you to use the full path and filename instead of the module name. [Read more about JS modules in the browser.](https://v8.dev/features/modules#specifiers) That's why we use `'bootstrap.esm.min.js'` instead of `'bootstrap'` above. However, this is further complicated by our Popper dependency, which imports Popper into our JavaScript like so:

<!-- eslint-skip -->
```js
import * as Popper from "@popperjs/core"
```

If you try this as-is, you'll see an error in the console like the following:

```text
Uncaught TypeError: Failed to resolve module specifier "@popperjs/core". Relative references must start with either "/", "./", or "../".
```

To fix this, you can use an `importmap` to resolve the arbitrary module names to complete paths. If your [targeted browsers](https://caniuse.com/?search=importmap) do not support `importmap`, you'll need to use the [es-module-shims](https://github.com/guybedford/es-module-shims) project. Here's how it works for Bootstrap and Popper:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
    <title>Hello, modularity!</title>
  </head>
  <body>
    <h1>Hello, modularity!</h1>
    <button id="popoverButton" type="button" class="btn btn-primary btn-lg" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="ESM in Browser" data-bs-content="Bang!">Custom popover</button>

    <script async src="https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js" crossorigin="anonymous"></script>
    <script type="importmap">
    {
      "imports": {
        "@popperjs/core": "{{< param "cdn.popper" >}}",
        "bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@{{< param "current_version" >}}/dist/js/bootstrap.esm.min.js"
      }
    }
    </script>
    <script type="module">
      import * as bootstrap from 'bootstrap'

      new bootstrap.Popover(document.getElementById('popoverButton'))
    </script>
  </body>
</html>
```

## 의존성

일부 플러그인 및 CSS 컴포넌트는 다른 플러그인에 의존합니다. 플러그인을 개별적으로 포함하려면 문서에서 이러한 종속성을 확인해주세요

드롭다운, 팝오버, 툴팁도 [Popper](https://popper.js.org/)에 의존하고 있습니다.

## 데이터 속성

거의 모든 Bootstrap 플러그인은 데이터 속성 (JavaScript 기능을 사용하는 권장 방법)과 함께 HTML을 통해서만 활성화 및 구성할 수 있습니다. **단일 요소의 한 세트의 데이터 속성만 사용해야 합니다.** (예: 동일한 버튼으로 툴팁과 모달을 트리거할 수 없음)

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

## 선택자

성능상의 이유로 쿼리 DOM 요소에 네이티브 메소드인 `querySelector` 및 `querySelectorAll`를 사용하기 때문에 [유효한 선택자](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier)를 반드시 사용해야 합니다. `collapse:Example`와 같은 특수 선택자를 사용하는 경우 이스케이프를 해주셔야 합니다.

## 이벤트

Bootstrap은 대부분의 플러그인 고유 작업에 대한 사용자 지정 이벤트를 제공합니다. 일반적으로 이것들은 부정사 (infinitive) 및 과거분사 (past participle)의 형태로 제공됩니다. 부정사 (예: `show`)는 이벤트가 시작될 때 트리거되고 과거분사 (예: `shown`)는 동작이 완료될 때 트리거됩니다.

모든 부정사 이벤트는 [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) 기능을 제공합니다. 이것은 시작하기 전에 작업 실행을 중지하는 기능을 제공합니다. 이벤트 핸들러에서 false를 반환하면 자동으로 `preventDefault()`를 호출합니다.

```js
const myModal = document.querySelector('#myModal')

myModal.addEventListener('show.bs.modal', event => {
  if (!data) {
    return event.preventDefault() // stops modal from being shown
  }
})
```

## 프로그래매틱 API

모든 생성자는 선택적 옵션 객체를 허용하거나 (기본 동작으로 플러그인을 시작한다면) 아무것도 허용하지 않습니다:

```js
const myModalEl = document.querySelector('#myModal')

const modal = new bootstrap.Modal(myModalEl) // initialized with defaults

const configObject = { keyboard: false }
const modal1 = new bootstrap.Modal(myModalEl, configObject) // initialized with no keyboard
```

특정 플러그인 인스턴스를 가져오려면 각 플러그인이 `getInstance` 메서드를 노출합니다. 인스턴스에서 직접 가져오려면 다음과 같이 해주어야 합니다:

```js
bootstrap.Popover.getInstance(myPopoverEl)
```

This method will return `null` if an instance is not initiated over the requested element.

Alternatively, `getOrCreateInstance` can be used to get the instance associated with a DOM element, or create a new one in case it wasn't initialized.

```js
bootstrap.Popover.getOrCreateInstance(myPopoverEl, configObject)
```

In case an instance wasn't initialized, it may accept and use an optional configuration object as second argument.

### 생성자에서의 CSS 선택자

In addition to the `getInstance` and `getOrCreateInstance` methods, all plugin constructors can accept a DOM element or a valid [CSS selector](#selectors) as the first argument. Plugin elements are found with the `querySelector` method since our plugins only support a single element.

```js
const modal = new bootstrap.Modal('#myModal')
const dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
const offcanvas = bootstrap.Offcanvas.getInstance('#myOffcanvas')
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
```

### 비동기 기능 및 트랜지션

모든 프로그래밍 가능한 API 메서드는 **비동기적**이며 트랜지션이 시작되고 **종료되기 전에** 호출자에게 반환됩니다. 트랜지션이 완료된 후 작업을 실행하기 위해 해당 이베트를 수신할 수 있습니다.

```js
const myCollapseEl = document.querySelector('#myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
  // Action to execute once the collapsible area is expanded
})
```

또한 **트랜지션 컴포넌트**에 대한 메서드 호출은 **무시됩니다**.

```js
const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', event => {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
```

#### `dispose` method

While it may seem correct to use the `dispose` method immediately after `hide()`, it will lead to incorrect results. Here's an example of the problem use:

```js
const myModal = document.querySelector('#myModal')
myModal.hide() // it is asynchronous

myModal.addEventListener('shown.bs.hidden', event => {
  myModal.dispose()
})
```

### 기본 설정값

플러그인의 `Contsructor.Default` 객체를 수정하여 플러그인의 기본 설정을 변경할 수 있습니다:

```js
// changes default for the modal plugin's `keyboard` option to false
bootstrap.Modal.Default.keyboard = false
```

## Methods and properties

Every Bootstrap plugin exposes the following methods and static properties.

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's modal. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method which allows you to get the modal instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn't initialized. |
{{< /bs-table >}}

{{< bs-table "table" >}}
| Static property | Description |
| --- | --- |
| `NAME` | Returns the plugin name. (Example: `bootstrap.Tooltip.NAME`) |
| `VERSION` | The version of each of Bootstrap's plugins can be accessed via the `VERSION` property of the plugin's constructor (Example: `bootstrap.Tooltip.VERSION`) |
{{< /bs-table >}}

## Sanitizer

툴팁 및 팝오버는 내장된 보안 모듈 (sanitizer)을 사용하여 HTML을 허용하는 옵션을 보안 처리 (sanitize)합니다.

기본값 `allowList` 값은 다음과 같습니다:

```js
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i
const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}
```

기본 `allowList`에 새 값을 추가하려면 다음과 같이 작성해야 합니다:

```js
const myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = ['data-bs-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```
[DOMPurify](https://www.npmjs.com/package/dompurify)와 같은 전용 라이브러리를 사용해서 보안 모듈을 우회하려면 다음과 같이 작성해야 합니다:

```js
const yourTooltipEl = document.querySelector('#yourTooltip')
const tooltip = new bootstrap.Tooltip(yourTooltipEl, {
  sanitizeFn(content) {
    return DOMPurify.sanitize(content)
  }
})
```

## 선택적으로 jQuery 사용하기

**You don't need jQuery in Bootstrap 5**, but it's still possible to use our components with jQuery. If Bootstrap detects `jQuery` in the `window` object, it'll add all of our components in jQuery's plugin system. This allows you to do the following:

```js
$('[data-bs-toggle="tooltip"]').tooltip() // to enable tooltips, with default configuration

$('[data-bs-toggle="tooltip"]').tooltip({ boundary: 'clippingParents', customClass: 'myClass' }) // to initialize tooltips with given configuration

$('#myTooltip').tooltip('show') // to trigger `show` method
```

The same goes for our other components.

### 충돌 방지

가끔 다른 UI 프레임워크와 함께 Bootstrap을 사용해야 할 수도 있습니다. 이런 경우 네임스페이스 충돌이 발생할 수도 있습니다. 이러한 문제가 발생할 경우 값을 되돌리려는 플러그인에 `.noConflict` 값을 호출할 수 있습니다.

```js
const bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality
```

Bootstrap does not officially support third-party JavaScript libraries like Prototype or jQuery UI. Despite `.noConflict` and namespaced events, there may be compatibility problems that you need to fix on your own.

### jQuery events

Bootstrap will detect jQuery if `jQuery` is present in the `window` object and there is no `data-bs-no-jquery` attribute set on `<body>`. If jQuery is found, Bootstrap will emit events thanks to jQuery's event system. So if you want to listen to Bootstrap's events, you'll have to use the jQuery methods (`.on`, `.one`) instead of `addEventListener`.

```js
$('#myTab a').on('shown.bs.tab', () => {
  // do something...
})
```

## Disabled JavaScript

Bootstrap's plugins have no special fallback when JavaScript is disabled. If you care about the user experience in this case, use [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.
