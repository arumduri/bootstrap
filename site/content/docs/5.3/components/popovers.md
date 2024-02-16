---
layout: docs
title: 팝오버
title_en: Popovers
description: iOS에서 볼수 있는 Bootstrap 팝오버를 사이트 임의의 요소에 추가하기 위한 문서와 예시입니다.
group: components
toc: true
---

## 개요

팝오버 플러그인을 사용할 때 알아두어야 할 점:

- 팝오버는 서드파티 라이브러리인 [Popper](https://popper.js.org/)에 의존하고 있습니다. `bootstrap.js` 앞에 [popper.min.js]({{< param "cdn.popper" >}})를 사용하거나, Popper가 포함되어 있는 `bootstrap.bundle.min.js`를 사용해야 합니다.
- 팝오버는, 의존관계로 [popover 플러그인]({{< docsref "/components/popovers" >}})이 필요합니다.
- 팝오버는 퍼포먼스를 위해 opt-in 되어 있기 때문에, **스스로 초기화를 해야 합니다.**
- 길이가 0인 `title` 과 `content` 값은 팝오버를 표시하지 않습니다.
- 더 복잡한 컴포넌트(input group, button groups 등)의 렌더링 문제를 피하기 위해 `container: 'body'`를 지정해 주십시오.
- 숨겨진 요소에서 팝오버를 트리거 해도 작동하지 않습니다.
- `.disabled` 또는 `disabled` 요소의 팝오버는 그 위(바깥) 요소에서 트리거 해야 합니다.
- 여러 라인에 걸쳐 있는 앵커로부터 트리거 된 경우, 팝오버는 앵커의 전체 폭을 중심으로 표시됩니다. 이 동작을 피하기 위해서는 `<a>`에 `.text-nowrap`을 사용해 주십시오.
- 팝오버는 대응 요소가 DOM에서 삭제되기 전에 숨겨야 합니다.
- 팝오버는 shadow DOM 내의 요소 덕분에 트리거 할 수 있습니다.

{{< callout info >}}
{{< partial "callouts/info-sanitizer.md" >}}
{{< /callout >}}

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

팝오버가 어떤 기능을 하는지 몇 가지 예를 들어 보겠습니다.

## 예시

### 팝오버 활성화

위에서 설명했듯이 팝오버를 사용하려면 사용하기 전에 팝오버를 초기화해주어야 합니다. 
페이지 상의 모든 팝오버를 초기화하는 방법 중 하나는 아래처럼 `data-bs-toggle` 속성으로 선택하는 것입니다:

```js
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
```

### Live demo

We use JavaScript similar to the snippet above to render the following live popover. Titles are set via `data-bs-title` and body content is set via `data-bs-content`.

{{< callout warning >}}
{{< partial "callouts/warning-data-bs-title-vs-title.md" >}}
{{< /callout >}}

{{< example stackblitz_add_js="true" >}}
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
{{< /example >}}

### 사방위

4가지 옵션이 있습니다: top, right, bottom, left. RTL에서 Bootstrap을 사용하는 경우 방향은 반대가 됩니다. `data-bs-placement` 로 방향을 변경할 수 있습니다.

{{< example stackblitz_add_js="true" >}}
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
  Popover on right
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
  Popover on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
  Popover on left
</button>
{{< /example >}}

### Custom `container`

When you have some styles on a parent element that interfere with a popover, you'll want to specify a custom `container` so that the popover's HTML appears within that element instead. This is common in responsive tables, input groups, and the like.

```js
const popover = new bootstrap.Popover('.example-popover', {
  container: 'body'
})
```

Another situation where you'll want to set an explicit custom `container` are popovers inside a [modal dialog]({{< docsref "/components/modal" >}}), to make sure that the popover itself is appended to the modal. This is particularly important for popovers that contain interactive elements – modal dialogs will trap focus, so unless the popover is a child element of the modal, users won't be able to focus or activate these interactive elements.

```js
const popover = new bootstrap.Popover('.example-popover', {
  container: '.modal-body'
})
```

### Custom popovers

{{< added-in "5.2.0" >}}

You can customize the appearance of popovers using [CSS variables](#variables). We set a custom class with `data-bs-custom-class="custom-popover"` to scope our custom appearance and use it to override some of the local CSS variables.

{{< scss-docs name="custom-popovers" file="site/assets/scss/_component-examples.scss" >}}

{{< example class="custom-popover-demo" stackblitz_add_js="true" >}}
<button type="button" class="btn btn-secondary"
        data-bs-toggle="popover" data-bs-placement="right"
        data-bs-custom-class="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables.">
  Custom popover
</button>
{{< /example >}}

### 다음 클릭으로 닫기

사용자가 다음 토글 요소 이외의 요소를 클릭했을 때 팝오버를 닫으려면 `focus` 트리거를 사용합니다.

{{< callout danger >}}
**브라우저나 플랫폼에 관계없이 제대로 다음 클릭으로 닫기를 사용하기 위해서는 특정 HTML이 필요합니다.** `<button>` 태그가 _아닌_ `<a>` 태그만 사용할 수 있으며, 반드시 [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) 속성을 포함해야 합니다.
{{< /callout >}}

{{< example stackblitz_add_js="true" >}}
<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
{{< /example >}}

```js
const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
})
```

### 비활성화 요소

`disabled` 속성을 갖는 요소는 인터랙티브하지 않습니다. 즉, 사용자가 팝오버(또는 툴팁)를 일으키기 위해서 호버하거나 클릭할 수 없습니다. 차선책으로 감싼 `<div>` 및 `<span>`에서 팝오버를 트리거 되길 원하지만, `tabindex="0"`을 사용해 키보드 포커스가 가능하도록 이상적으로 만듭니다.

무효화된 팝오버를 트리거 하기 위해서는 `data-bs-trigger="hover focus"`라고 하면 사용자는 무효가 된 요소를 _click_ 할 것을 기대하지 않기 때문에 팝오버가 바로 시각적으로 표시되게 됩니다.


{{< example stackblitz_add_js="true" >}}
<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.2.0" >}}

As part of Bootstrap’s evolving CSS variables approach, popovers now use local CSS variables on `.popover` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="popover-css-vars" file="scss/_popover.scss" >}}

### Sass 변수

{{< scss-docs name="popover-variables" file="scss/_variables.scss" >}}

## 사용 방법

JavaScript로 팝오버를 유효화 합니다:

```js
const exampleEl = document.getElementById('example')
const popover = new bootstrap.Popover(exampleEl, options)
```

{{< callout warning >}}
**키보드 및 보조 기술 사용자가 팝오버에 액세스할 수 있도록 유지**하려면 키보드 포커스가 가능하며 상호작용이 가능한 HTML 요소(링크나 폼 컨트톨 등)에 팝오버를 추가하세요.

 임의의 HTML 요소(`<span>` 등)는 `tabindex="0"` 속성을 추가함으로써 포커스가 가능한데, 이는 키보드 사용자에게는 상호작용할 수 없는 요소에 탭 멈춤이 추가되어 혼란을 초래할 수 있습니다. 게다가 키보드 사용자가 팝오버를 트리거 할 수 없게 되므로 팝오버의 트리거를 `hover`에만 의지해서는 안됩니다.

`html` 옵션에서 리치로 구조화된 HTML을 팝오버에 넣을 수 있지만 과도한 양의 콘텐츠를 추가하는 것은 피하는 것이 좋습니다. 팝오버가 현재 기능을 하는 방법은 한 번 표시되면 해당 콘텐츠는 `aria-describedby` 속성을 갖는 트리거 요소에 연결됩니다. 그 결과 팝오버 콘텐츠 전체가 스크린 리더 사용자에게 길고 끊기지 않는 스트림으로 알릴 것입니다.

또한, 인터랙티브한 컨트롤(폼 요소나 링크 등)들을 팝오버에 포함할 수도 있지만 (허락된 속성이나 태그의 `allowList`에 이러한 요소를 추가하여), 현재 팝오버는 키보드 포커스 순서를 관리하지 않는다는 점에 유의하십시오. 키보드 사용자가 팝오버를 열면 포커스는 트리거가 되는 요소에 머무르고, 팝오버는 보통 문서 구조의 트리거를 쉽게 따라가지 않기 때문에 <kbd>TAB</kbd> 을 앞으로 이동/눌러도 키보드 사용자가 팝오버 자체로 이동하라는 보장은 없습니다. 요컨대 단순히 팝오버에 상호작용할 수 있는 컨트롤을 추가하는 것만으로도 키보드 사용자나 스크린 리더 사용자들이 이들 컨트롤에 접근할 수 없거나 적어도 전체적으로 비논리적인 포커스 순서가 될 수 있습니다. 이러한 경우는, modal(모달) 사용을 검토해 주십시오.
{{< /callout >}}

### 옵션

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< callout warning >}}
보안상의 이유로 `sanitize`, `sanitizeFn`, `allowList` 옵션을 data 속성으로 지정할 수 없다는 것에 주의해 주세요.
{{< /callout >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value]({{< docsref "/getting-started/javascript#sanitizer" >}}) | Object which contains allowed attributes and tags. |
| `animation` | boolean | `true` | Apply a CSS fade transition to the popover. |
| `boundary` | string, element | `'clippingParents'` | Overflow constraint boundary of the popover (applies only to Popper's preventOverflow modifier). By default, it's `'clippingParents'` and can accept an HTMLElement reference (via JavaScript only). For more information refer to Popper's [detectOverflow docs](https://popper.js.org/docs/v2/utils/detect-overflow/#boundary). |
| `container` | string, element, false | `false` | Appends the popover to a specific element. Example: `container: 'body'`. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize. |
| `content` | string, element, function | `''` | The popover's text content. If a function is given, it will be called with its `this` reference set to the element that the popover is attached to. |
| `customClass` | string, function | `''` | Add classes to the popover when it is shown. Note that these classes will be added in addition to any classes specified in the template. To add multiple classes, separate them with spaces: `'class-1 class-2'`. You can also pass a function that should return a single string containing additional class names. |
| `delay` | number, object | `0` | Delay showing and hiding the popover (ms)—doesn't apply to manual trigger type. If a number is supplied, delay is applied to both hide/show. Object structure is: `delay: { "show": 500, "hide": 100 }`. |
| `fallbackPlacements` | string, array | `['top', 'right', 'bottom', 'left']` | Define fallback placements by providing a list of placements in array (in order of preference). For more information refer to Popper's [behavior docs](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements). |
| `html` | boolean | `false` | Allow HTML in the popover. If true, HTML tags in the popover's `title` will be rendered in the popover. If false, `innerText` property will be used to insert content into the DOM. Use text if you're worried about XSS attacks. |
| `offset` | number, string, function | `[0, 0]` | Offset of the popover relative to its target. You can pass a string in data attributes with comma separated values like: `data-bs-offset="10,20"`. When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: [skidding](https://popper.js.org/docs/v2/modifiers/offset/#skidding-1), [distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1). For more information refer to Popper's [offset docs](https://popper.js.org/docs/v2/modifiers/offset/#options). |
| `placement` | string, function | `'top'` | How to position the popover: auto, top, bottom, left, right. When `auto` is specified, it will dynamically reorient the popover. When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The `this` context is set to the popover instance. |
| `popperConfig` | null, object, function | `null` | To change Bootstrap's default Popper config, see [Popper's configuration](https://popper.js.org/docs/v2/constructors/#options). When a function is used to create the Popper configuration, it's called with an object that contains the Bootstrap's default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper. |
| `sanitize` | boolean | `true` | Enable or disable the sanitization. If activated `'template'`, `'content'` and `'title'` options will be sanitized. |
| `sanitizeFn` | null, function | `null` | Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |
| `selector` | string, false | `false` | If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to also apply popovers to dynamically added DOM elements (`jQuery.on` support). See [this issue]({{< param repo >}}/issues/4215) and [an informative example](https://codepen.io/Johann-S/pen/djJYPb). **Note**: `title` attribute must not be used as a selector. |
| `template` | string | `'<div class="popover" role="tooltip"><div class="popover-arrow"></div><div class="popover-inner"></div></div>'` | Base HTML to use when creating the popover. The popover's `title` will be injected into the `.popover-inner`. `.popover-arrow` will become the popover's arrow. The outermost wrapper element should have the `.popover` class and `role="tooltip"`. |
| `title` | string, element, function | `''` | The popover title. If a function is given, it will be called with its `this` reference set to the element that the popover is attached to. |
| `trigger` | string | `'hover focus'` | How popover is triggered: click, hover, focus, manual. You may pass multiple triggers; separate them with a space. `'manual'` indicates that the popover will be triggered programmatically via the `.popover('show')`, `.popover('hide')` and `.popover('toggle')` methods; this value cannot be combined with any other trigger. `'hover'` on its own will result in popovers that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present. |
{{< /bs-table >}}

{{< callout info >}}
#### 독립 팝오버를 위한 데이터 속성

위에서 설명했듯이 각각의 팝오버 data 옵션은 data 속성을 사용하여 지정할 수도 있습니다.
{{< /callout >}}

#### `popperConfig`으로 기능 사용하기

```js
const popover = new bootstrap.Popover(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
```

### 메소드

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}


{{< bs-table "table" >}}
| 메소드 | 설명 |
| --- | --- |
| `disable` | 요소의 팝오버를 표시하는 기능을 삭제합니다. 팝오버는 다시 활성화된 경우에만 표시됩니다. |
| `dispose` | 요소의 팝오버를 숨기고 없앱니다 (DOM 요소에 저장된 데이터를 삭제합니다). 위임을 사용하는 팝오버 ([`selector` 옵션](#옵션)을 사용하여 작성된 것)는 자식의 트리거 요소로 인해 개벌적으로 없앨 수 없습니다. |
| `enable` | 요소의 팝오버를 표시하는 기능을 부여합니다. **팝오버는 기본으로 활성화되어 있습니다.** |
| `getInstance` | DOM 요소와 연관된 팝오버 인스턴스를 가져올 수 있게 하는 _Static_ 메소드입니다. |
| `getOrCreateInstance` | _Static_ method which allows you to get the popover instance associated with a DOM element, or create a new one in case it wasn't initialized. |
| `hide` | 요소의 팝오버를 숨깁니다. **팝오버가 실제로 숨겨지기 전에 호출한 곳으로 돌아갑니다** (즉, `hidden.bs.popover` 이벤트 발생 전). 이것은 팝오버의 “manual” 트리거로 간주합니다. |
| `setContent` | Gives a way to change the popover's content after its initialization. |
| `show` | 요소의 팝오버를 표시합니다. **팝오버가 실제로 나타나기 전에 호출된 곳으로 돌아갑니다** (즉, `shown.bs.popover` 이벤트가 발생하기 전). 이것은 팝오버의 “manual” 트리거로 간주합니다. 타이틀과 콘텐츠의 양쪽 모두의 길이가 0인 팝오버는 결코 표시되지 않습니다. |
| `toggle` | 요소의 팝오버를 토글합니다. **팝오버가 실제로 표시 또는 숨기기 전에 호출된 곳으로 돌아갑니다** (즉, `shown.bs.popover` 혹은 `hidden.bs.popover` 이벤트가 발생하기 전). 이것은 팝오버의 “manual” 트리거로 간주합니다. |
| `toggleEnabled` | 요소의 팝오버 표시/숨김 여부를 바꿉니다. |
| `update` | 요소의 팝오버 위치를 새로고칩니다. |
{{< /bs-table >}}


```js
// getOrCreateInstance example
const popover = bootstrap.Popover.getOrCreateInstance('#example') // Returns a Bootstrap popover instance

// setContent example
myPopover.setContent({
  '.popover-header': 'another title',
  '.popover-body': 'another content'
})

```

{{< callout info >}}
The `setContent` method accepts an `object` argument, where each property-key is a valid `string` selector within the popover template, and each related property-value can be `string` | `element` | `function` | `null`
{{< /callout >}}

### Events

{{< bs-table >}}
| 이벤트 | 설명 |
| --- | --- |
| `hide.bs.popover` | 이 이벤트는 `hide` 인스턴스 메소드가 호출되었을 때 바로 발생합니다. |
| `hidden.bs.popover` | 이 이벤트는 팝오버의 숨김이 완료될 때 발생합니다 (CSS 트랜지션이 완료되기를 기다립니다). |
| `inserted.bs.popover` | 이 이벤트는 `show.bs.popover` 이벤트 후에, 팝오버의 템플렛이 DOM 에 추가될 때 발생합니다. |
| `show.bs.popover` | 이 이벤트는 `show` 인스턴스 메소드가 호출되었을 때 바로 발생합니다. |
| `shown.bs.popover` | 이 이벤트는 팝오버가 사용자에게 보여질 때 바로 발생합니다 (CSS 트랜지션이 완료되기를 기다립니다). |
{{< /bs-table >}}

```js
const myPopoverTrigger = document.getElementById('myPopover')
myPopoverTrigger.addEventListener('hidden.bs.popover', () => {
  // do something...
})
```
