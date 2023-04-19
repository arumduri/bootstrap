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

## JavaScript 프레임워크에서 사용

Bootstrap의 CSS는 모든 프레임워크와 함께 사용할 수 있지만 **Bootstrap의 JavaScript는 React, Vue 및 Angular와 같은** DOM에 대한 전반적인 이해를 기반으로 하는 **JavaScript 프레임워크**와는 완전히 호환되지 않습니다. 부트스트랩과 프레임워크 둘다 동일한 DOM 요소를 변경하려고 시도할 수 있으므로 드롭다운이 "열린" 상태에서 고정되어 버리는 버그등이 발생할 수 있습니다.

이러한 종류의 프레임워크를 사용하는 사람들을 위한 더 나은 대안은 **Bootstrap JavaScript 대신** 별도의 프레임워크 패키지를 사용하는 것입니다. 일반적으로 다음과 같은 선택옵션이 있습니다:

- React: [React Bootstrap](https://react-bootstrap.github.io/)
- Vue: [BootstrapVue](https://bootstrap-vue.org/) (현재 Vue 2 와 Bootstrap 4만 지원)
- Angular: [ng-bootstrap](https://ng-bootstrap.github.io/)

## Bootstrap을 모듈로 사용하기

{{< callout >}}
**직접 사용해 보세요!** Bootstrap를 ES 모듈로 사용하기 위한 소스코드와 데모를 [twbs/examples 저장소](https://github.com/twbs/examples/tree/main/sass-js-esm)에서 다운로드 받으세요. [StackBlitz에서의 예제](https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html)를 열어도 좋습니다.
{{< /callout >}}

[타게팅하려는 브라우저가 지원하는 경우](https://caniuse.com/es6-module) 브라우저에서 Bootstrap를 모듈로 사용할 수 있도록 `ESM` (`bootstrap.esm.js` 및 `bootstrap.esm.min.js`)으로 빌드된 버전을 제공합니다.

```html
<script type="module">
  import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

JS 번들러와 비교하여 브라우저에서 ESM을 사용하려면 모듈 이름 대신 전체 경로와 파일 이름을 사용해야 합니다. [브라우저의 JS 모듈에 대해 자세히 알아보기](https://v8.dev/features/modules#specifiers) 그렇기 때문의 위처럼 `'bootstrap'` 대신에 `'bootstrap.esm.min.js'` 를 사용합니다. 그러나 이것은 Popper의 종속성으로 인해 더욱 복잡해져 있기에 아래와 같이 Popper를 JavaScript로 인포트하고 있습니다:

<!-- eslint-skip -->
```js
import * as Popper from "@popperjs/core"
```

그대로 시도하면 콘솔에 다음과 같은 오류가 표시됩니다:

```text
Uncaught TypeError: Failed to resolve module specifier "@popperjs/core". Relative references must start with either "/", "./", or "../".
```

이 문제를 해결하기 위해서는 `importmap`을 사용해 임의의 모듈 이름을 완전한 경로로 확인할 수 있습니다. [대상 브라우저](https://caniuse.com/?search=importmap)에서 `importmap`을 지원하지 않는 경우 [es-module-shims](https://github.com/guybedford/es-module-shims) 프로젝트를 사용해야 합니다. Bootstrap과 Popper에서의 작동하는 방식은 다음과 같습니다:

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

특정 플러그인 인스턴스를 가져오려면 각 플러그인이 `getInstance` 메소드를 노출합니다. 인스턴스에서 직접 가져오려면 다음과 같이 해주어야 합니다:

```js
bootstrap.Popover.getInstance(myPopoverEl)
```

요청된 요소에 대해 인스턴스가 시작되지 않으면 이 메소드는 `null`을 반환합니다.

또는 `getOrCreateInstance`를 사용하여 DOM 요소와 연결된 인스턴스를 가져오거나 초기화되지 않은 경우 새 인스턴스를 생성할 수 있습니다.

```js
bootstrap.Popover.getOrCreateInstance(myPopoverEl, configObject)
```

인스턴스가 초기화되지 않은 경우 두 번째 인수로 선택적 설정 객체를 받아 사용할 수 있습니다.

### 생성자에서의 CSS 선택자

모든 플러그인 생성자 메소드는 `getInstance` 및 `getOrCreateInstance` 메소드 외에도 첫 번째 인수로 DOM 요소 또는 유효한 [CSS 선택자](#selectors)를 받을 수 있습니다. 플러그인은 단일 요소만 지원하므로 `querySelector` 메소드로 플러그인 요소를 찾을 수 있습니다.

```js
const modal = new bootstrap.Modal('#myModal')
const dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
const offcanvas = bootstrap.Offcanvas.getInstance('#myOffcanvas')
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
```

### 비동기 기능 및 트랜지션

모든 프로그래밍 가능한 API 메소드는 **비동기적**이며 트랜지션이 시작되고 **종료되기 전에** 호출자에게 반환됩니다. 트랜지션이 완료된 후 작업을 실행하기 위해 해당 이베트를 수신할 수 있습니다.

```js
const myCollapseEl = document.querySelector('#myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
  // Action to execute once the collapsible area is expanded
})
```

또한 **트랜지션 컴포넌트**에 대한 메소드 호출은 **무시됩니다**.

```js
const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', event => {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
```

#### `dispose` 메소드

`hide()`바로 뒤에 `dispose` 메소드를 사용하는 것이 옳은 것처럼 보일 수 있지만 잘못된 결과를 초래할 수 있습니다. 다음은 문제가 되는 사용 예시입니다:

```js
const myModal = document.querySelector('#myModal')
myModal.hide() // it is asynchronous

myModal.addEventListener('shown.bs.hidden', event => {
  myModal.dispose()
})
```

### 기본 설정값

플러그인의 `Constructor.Default` 객체를 수정하여 플러그인의 기본 설정을 변경할 수 있습니다:

```js
// changes default for the modal plugin's `keyboard` option to false
bootstrap.Modal.Default.keyboard = false
```

## 메소드와 속성

모든 부트스트랩 플러그인은 다음과 같은 메소드와 정적 속성을 공개합니다.

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | 요소의 모달을 파괴합니다. (DOM 요소에 저장된 데이터를 제거합니다.) |
| `getInstance` | *정적* 메소드를 사용하여 DOM 요소와 연관된 모달 인스턴스를 가져올 수 있습니다. |
| `getOrCreateInstance` | *정적* 메소드를 사용하여 DOM 요소와 연결된 모달 인스턴스를 가져오거나 초기화되지 않은 경우 새 인스턴스를 생성할 수 있습니다. |
{{< /bs-table >}}

{{< bs-table "table" >}}
| Static property | Description |
| --- | --- |
| `NAME` | 플러그인 이름을 반환합니다. (예: `bootstrap.Tooltip.NAME`) |
| `VERSION` | 부트스트랩의 각 플러그인 버전은 플러그인 생성자의 `VERSION` 속성을 통해 액세스할 수 있습니다. (예: `bootstrap.Tooltip.VERSION`) |
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

**부트스트랩 5에서는 jQuery가 필요하지 않지**만, jQuery와 함께 컴포넌트를 사용할 수 있습니다. 부트스트랩이 `window` 객체에서 `jQuery`를 감지하면 jQuery의 플러그인 시스템에 있는 모든 컴포넌트를 추가합니다. 이를 통해 다음과 같은 작업을 수행할 수 있습니다:
```js
$('[data-bs-toggle="tooltip"]').tooltip() // to enable tooltips, with default configuration

$('[data-bs-toggle="tooltip"]').tooltip({ boundary: 'clippingParents', customClass: 'myClass' }) // to initialize tooltips with given configuration

$('#myTooltip').tooltip('show') // to trigger `show` method
```

다른 컴포넌트도 마찬가지입니다.

### 충돌 방지

가끔 다른 UI 프레임워크와 함께 Bootstrap을 사용해야 할 수도 있습니다. 이런 경우 네임스페이스 충돌이 발생할 수도 있습니다. 이러한 문제가 발생할 경우 값을 되돌리려는 플러그인에 `.noConflict` 값을 호출할 수 있습니다.

```js
const bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality
```

부트스트랩은 프로토타입이나 jQuery UI와 같은 타사 JavaScript 라이브러리를 공식적으로 지원하지 않습니다. `.noConflict` 및 네임스페이스 이벤트에도 불구하고 직접 해결해야 하는 호환성 문제가 있을 수 있습니다.

### jQuery 이벤트

부트스트랩은 `jQuery`가 `window` 객체에 존재하고 `<body>`에 `data-bs-no-jquery` 속성이 설정되어 있지 않은 경우 jQuery를 감지합니다. jQuery가 발견되면 부트스트랩은 jQuery의 이벤트 시스템 덕분에 이벤트를 발생시킵니다. 따라서 부트스트랩의 이벤트를 수신하려면 `addEventListener` 대신 jQuery 메소드(`.on`, `.one`) 를 사용해야 합니다.

```js
$('#myTab a').on('shown.bs.tab', () => {
  // do something...
})
```

## 자바스크립트 비활성화

부트스트랩의 플러그인에는 자바스크립트가 비활성화되었을 때를 대비한 특별한 대안이 없습니다. 이 경우 사용자 환경이 걱정된다면 [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)를 사용하여 사용자에게 상황(및 JavaScript를 다시 활성화하는 방법)을 설명하거나 사용자 정의 대체 기능을 추가하세요.
