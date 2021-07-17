---
layout: docs
title: JavaScript
description: 선택적 JavaScript 플러그인으로 Bootstrap에 생명을 불어넣으세요. 각 플러그인, 데이터 및 프로그래밍 방식 API 옵션 등에 대해 알아보세요.
group: getting-started
toc: true
---

## 개별 또는 컴파일

(Bootstrap의 독립된 `js/dist/*.js`를 이용해서) 플러그인을 별도로 포함시키거나, `bootstrap.js` 또는 경량화된 `bootstrap.min.js` (둘 다 포함하면 안됨)을 이용해서 한 번에 포함하세요.

번들러 (webpack, Rollup...)를 사용한다면 UMD를 위해서 준비된 `/js/dist/*.js`을 사용할 수도 있습니다.

## Bootstrap을 모듈로 사용하기

[타게팅하려는 브라우저가 지원하는 경우](https://caniuse.com/es6-module) 브라우저에서 Bootstrap를 모듈로 사용할 수 있도록 `ESM` (`bootstrap.esm.js` 및 `bootstrap.esm.min.js`)으로 빌드된 버전을 제공합니다.

```html
<script type="module">
  import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

{{< callout warning >}}
## 호환되지 않는 플러그인

브라우저 제한으로 인해 드롭다운, 툴팁 및 팝오버 플러그인과 같은 일부 플러그인은 Popper에 의존하기 때문에 `module` 유형이 있는 `<script>` 태그에서 사용할 수 없습니다. 이 문제에 대해 자세히 알아보려면 [여기](https://v8.dev/features/modules#specifiers)를 참고해주세요.
{{< /callout >}}

## 의존성

일부 플러그인 및 CSS 컴포넌트는 다른 플러그인에 의존합니다. 플러그인을 개별적으로 포함하려면 문서에서 이러한 종속성을 확인해주세요

드롭다운, 팝오버, 툴팁도 [Popper](https://popper.js.org/)에 의존하고 있습니다.

## jQuery를 계속 사용하고 싶으신가요? 가능합니다!

Bootstrap 5는 jQuery 없이도 사용할 수 있게 설계되었지만 여전히 jQuery와 함께 컴포넌트를 사용할 수 있습니다. **Bootstrap이 `window` 객체에서 `jQuery`를 감지하면** jQuery의 플러그인 시스템에 모든 컴포넌트를 추가합니다. 즉, 툴팁을 활성화하기 위해서 `$('[data-bs-toggle="tooltip"]').tooltip()`를 사용할 수 있게 됩니다. 이는 다른 컴포넌트에도 적용됩니다.

## 데이터 속성

거의 모든 Bootstrap 플러그인은 데이터 속성 (JavaScript 기능을 사용하는 권장 방법)과 함께 HTML을 통해서만 활성화 및 구성할 수 있습니다. **단일 요소의 한 세트의 데이터 속성만 사용해야 합니다.** (예: 동일한 버튼으로 툴팁과 모달을 트리거할 수 없음)

{{< callout warning >}}
## 선택자

현재 성능상의 이유로 쿼리 DOM 요소에 네이티브 메소드인 `querySelector` 및 `querySelectorAll`를 사용하기 때문에 [유효한 선택자](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier)를 사용해야 합니다.
`collapse:Example`와 같은 특수 선택자를 사용하는 경우 이스케이프를 해주셔야 합니다.
{{< /callout >}}

## 이벤트

Bootstrap은 대부분의 플러그인 고유 작업에 대한 사용자 지정 이벤트를 제공합니다. 일반적으로 이것들은 부정사 (infinitive) 및 과거분사 (past participle)의 형태로 제공됩니다. 부정사 (예: `show`)는 이벤트가 시작될 때 트리거되고 과거분사 (예: `shown`)는 동작이 완료될 때 트리거됩니다.

모든 부정사 이벤트는 [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) 기능을 제공합니다. 이것은 시작하기 전에 작업 실행을 중지하는 기능을 제공합니다. 이벤트 핸들러에서 false를 반환하면 자동으로 `preventDefault()`를 호출합니다.

```js
var myModal = document.getElementById('myModal')

myModal.addEventListener('show.bs.modal', function (event) {
  if (!data) {
    return event.preventDefault() // stops modal from being shown
  }
})
```

{{< callout warning >}}
## jQuery 이벤트

Bootstrap은 `jQuery`가 `window` 객체에 있고 `<body>`에 설정된 `data-bs-no-jquery` 속성이 없는 경우 jQuery를 감지합니다. jQuery가 감지되면 Bootstrap은 jQuery의 이벤트 시스템을 통해서 이벤트를 발생시킵니다. 따라서 Bootstrap의 이벤트를 수신하려면 `addEventListener` 대신에 jQuery 메서드 (`.on`, `.one`)를 사용해야 합니다.

```js
$('#myTab a').on('shown.bs.tab', function () {
  // do something...
})
```
{{< /callout >}}

## 프로그래매틱 API

모든 생성자는 선택적 옵션 객체를 허용하거나 (기본 동작으로 플러그인을 시작한다면) 아무것도 허용하지 않습니다:

```js
var myModalEl = document.getElementById('myModal')

var modal = new bootstrap.Modal(myModalEl) // initialized with defaults
var modal = new bootstrap.Modal(myModalEl, { keyboard: false }) // initialized with no keyboard
```

특정 플러그인 인스턴스를 가져오려면 각 플러그인이 `getInstance` 메서드를 노출합니다. 요소에서 직접 가져오려면 `bootstrap.Popover.getInstance(myPopoverEl)`를 사용해주세요.

### 생성자에서의 CSS 선택자

플러그인을 초기화하기 위해 DOM 요소 대신 CSS 선택자를 첫 번째 인수로 사용할 수도 있습니다. 현재 플러그인의 요소는 단일 요소만 지원하므로 `querySelector` 메소드에 의해 발견됩니다.

```js
var modal = new bootstrap.Modal('#myModal')
var dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
```

### 비동기 기능 및 트랜지션

모든 프로그래밍 가능한 API 메서드는 **비동기적**이며 트랜지션이 시작되고 **종료되기 전에** 호출자에게 반환됩니다.

트랜지션이 완료된 후 작업을 실행하기 위해 해당 이베트를 수신할 수 있습니다.

```js
var myCollapseEl = document.getElementById('myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', function (event) {
  // Action to execute once the collapsible area is expanded
})
```

또한 **트랜지션 컴포넌트**에 대한 메서드 호출은 **무시됩니다**.

```js
var myCarouselEl = document.getElementById('myCarousel')
var carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', function (event) {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
```

### 기본 설정값

플러그인의 `Contsructor.Default` 객체를 수정하여 플러그인의 기본 설정을 변경할 수 있습니다:

```js
// changes default for the modal plugin's `keyboard` option to false
bootstrap.Modal.Default.keyboard = false
```

## 충돌 방지 (jQuery를 사용하는 경우에만)

가끔 다른 UI 프레임워크와 함께 Bootstrap을 사용해야 할 수도 있습니다. 이런 경우 네임스페이스 충돌이 발생할 수도 있습니다. 이러한 문제가 발생할 경우 값을 되돌리려는 플러그인에 `.noConflict` 값을 호출할 수 있습니다.

```js
var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality
```

## 버전 번호
Bootstrap 플러그인의 각 버전은 `VERSION` 속성
각 Bootstrap 플러그인 버전은 플러그인 생성자의 `VERSION` 속성을 통해 접근할 수 있습니다. 툴팁 플러그인을 예로 들자면 다음과 같습니다:

```js
bootstrap.Tooltip.VERSION // => "{{< param current_version >}}"
```

## JavaScript가 비활성화된 경우 특별한 폴백 없음

Bootstrap의 플러그인은 JavaScript가 비활성화되어있을 때 특히 멋있게 폴백되지 않습니다. 이 경우 사용자 경험에 관심이 있다면 [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)를 사용해서 상황 (및 JavaScript를 다시 활성화하는 방법)을 사용자에게 설명하거나 직접 만든 폴백을 추가하세요.

{{< callout warning >}}
##### 서드 파티 라이브러리
Bootstrap은 Prototype 또는 jQuery UI 같은 **서드 파티 라이브러리를 공식적으로 지원하지 않습니다.**  `.noConflict` 및 네임스페이스 이벤트가 있긴 하지만 직접 수정해야하는 호환성 문제가 있을 수도 있습니다.
{{< /callout >}}

## Sanitizer

툴팁 및 팝오버는 내장된 보안 모듈 (sanitizer)을 사용하여 HTML을 허용하는 옵션을 보안 처리 (sanitize)합니다.

기본값 `allowList` 값은 다음과 같습니다:

```js
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i
var DefaultAllowlist = {
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
var myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = ['data-bs-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
var myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```
[DOMPurify](https://www.npmjs.com/package/dompurify)와 같은 전용 라이브러리를 사용해서 보안 모듈을 우회하려면 다음과 같이 작성해야 합니다:

```js
var yourTooltipEl = document.getElementById('yourTooltip')
var tooltip = new bootstrap.Tooltip(yourTooltipEl, {
  sanitizeFn: function (content) {
    return DOMPurify.sanitize(content)
  }
})
```
