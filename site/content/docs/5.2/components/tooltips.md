---
layout: docs
title: 툴팁
title_en: Tooltips
description: CSS3를 사용한 애니메이션이나 data-bs-attributes를 사용한 CSS와 JavaScript로 사용자 정의 Bootstrap의 툴팁을 추가하기 위한 문서와 예시입니다.
group: components
toc: true
---

## 개요

툴팁 플러그인을 사용할 때 알아두어야 할 점:

- 툴팁의 배치는 서드파티 라이브러리인 [Popper](https://popper.js.org/)에 의존하고 있습니다. `bootstrap.js` 앞에 [popper.min.js]({{< param "cdn.popper" >}})를 사용하거나, 팝오버가 포함되어 있는 `bootstrap.bundle.min.js`를 사용해야 합니다.
- 툴팁은 퍼포먼스를 위해 opt-in 되어 있기 때문에 **스스로 초기화를 해야 합니다.**
- 길이가 0의 타이틀을 가진 툴팁은 표시되지 않습니다.
- 더 복잡한 컴포넌트(input group, button groups 등)의 렌더링 문제를 피하기 위해 `container: 'body'`를 지정해 주십시오.
- 숨겨진 요소에서 툴팁을 트리거 해도 제 기능을 하지 않습니다.
- `.disabled`나 `disabled` 요소의 툴팁은 그 위(바깥) 요소에서 트리거 해야 합니다.
- 여러 라인에 걸쳐 있는 하이퍼링크에서 트리거된 툴팁은 중앙에 배치됩니다. 이 동작을 피하기 위해서는 `<a>`에 `white-space: nowrap;`을 사용해 주십시오.
- 툴팁은 대응 요소가 DOM에서 삭제되기 전에 숨겨야 합니다.
- 툴팁은 shadow DOM 내의 요소 덕분에 트리거할 수 있습니다.

몇 가지 예를 들어보겠습니다.

{{< callout info >}}
{{< partial "callout-info-sanitizer.md" >}}
{{< /callout >}}

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## 예시

### 툴팁 활성화

위에서 설명했듯이 팝오버를 사용하려면 사용하기 전에 팝오버를 초기화해주어야 합니다.페이지 상의 모든 툴팁을 초기화 하는 방법 중 하나는 아래처럼 `data-bs-toggle` 속성으로 선택하는 것입니다:

```js
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
```

### 링크의 툴팁

아래 링크에 커서를 맞추면 툴팁이 나타납니다:

{{< example class="tooltip-demo" stackblitz_add_js="true" >}}
<p class="muted">Placeholder text to demonstrate some <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.
</p>
{{< /example >}}

{{< callout warning >}}
{{< partial "callout-warning-data-bs-title-vs-title.md" >}}
{{< /callout >}}

### Custom tooltips

{{< added-in "5.2.0" >}}

You can customize the appearance of tooltips using [CSS variables](#variables). We set a custom class with `data-bs-custom-class="custom-tooltip"` to scope our custom appearance and use it to override a local CSS variable.

{{< scss-docs name="custom-tooltip" file="site/assets/scss/_component-examples.scss" >}}


{{< example class="tooltip-demo" stackblitz_add_js="true" >}}
<button type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  Custom tooltip
</button>
{{< /example >}}

아래 버튼에 커서를 맞추면 top, right, bottom, left의 4개 툴팁이 나타납니다: RTL에서 Bootstrap을 사용하는 경우 방향은 반대가 됩니다.

<div class="bd-example tooltip-demo">
  <div class="bd-example-tooltips">
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">Tooltip on top</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">Tooltip on right</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">Tooltip on bottom</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">Tooltip on left</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
  </div>
</div>

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
  Tooltip on left
</button>
```

그리고 사용자 정의 HTML을 추가할 수 있습니다:

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
```

SVG와 함께:

<div class="bd-example tooltip-demo">
  <a href="#" class="d-inline-block" data-bs-toggle="tooltip" data-bs-title="Default tooltip">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
      <rect width="100%" height="100%" fill="#563d7c"/>
      <circle cx="50" cy="50" r="30" fill="#007bff"/>
    </svg>
  </a>
</div>

## CSS

### 변수

{{< added-in "5.2.0" >}}

As part of Bootstrap’s evolving CSS variables approach, tooltips now use local CSS variables on `.tooltip` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="tooltip-css-vars" file="scss/_tooltip.scss" >}}

### Sass 변수

{{< scss-docs name="tooltip-variables" file="scss/_variables.scss" >}}

## 사용 방법

툴팁 플러그인은 필요에 따라 콘텐츠와 마크업을 생성하고 기본 값으로는 트리거 요소 뒤에 툴팁을 배치합니다.

JavaScript를 사용해 툴팁을 트리거 합니다:

```js
const exampleEl = document.getElementById('example')
const tooltip = new bootstrap.Tooltip(exampleEl, options)
```

{{< callout warning >}}
##### Overflow `auto` and `scroll`

**부모 컨테이너**가 `.table-responsive`처럼 `overflow: auto` 혹은 `overflow: scroll`로 되어 있으면 툴팁의 위치가 자동으로 변경되려고는 하지만, 위치는 원래대로 유지되고 있습니다. 그것을 해결하기 위해서는, [`boundary` option](https://popper.js.org/docs/v2/modifiers/flip/#boundary) (`popperConfig` 옵션을 사용한 flip 제어자의 경우)을 기본값으로 가지고 있는 `'clippingParents'`를 임의의 HTML 요소, 예를 들어 `document.body`등으로 오버라이드하여 설정하면 됩니다:

```js
const tooltip = new bootstrap.Tooltip('#example', {
  boundary: document.body // or document.querySelector('#boundary')
})
```
{{< /callout >}}

### 마크업

툴팁에 필요한 마크업은 툴팁을 작성하고자 하는 HTML 요소의 `data` 속성과 `title` 뿐입니다. 툴팁 마크업은 단순하지만 위치를 지정해야 합니다 (플러그인에 의해 기본 `top`이설정되어 있습니다).

{{< callout warning >}}
##### 키보드 및 보조 기술 사용자를 위한 툴팁 만들기

툴팁을 추가해야 하는 부분은 키보드로 포커스가 가능하고 상호작용이 가능한 HTML 요소(링크나 폼 컨트롤 등)뿐 입니다. 임의의 HTML 요소(`<span>` 등)는 `tabindex="0"` 속성을 추가하여 포커스가 가능하게 할 수 있지만 이는 키보드 사용자에게 상호작용할 수 없는 요소에 탭 멈춤이 추가되어 키보드 사용자를 곤란하게 하거나 혼란스럽게 할 수 있으며 현재 대부분의 스크린 리더는 이러한 상황에서 툴팁을 제공하지 않습니다. 게다가 툴팁의 트리거로서 `hover`에만 의지해서는 안됩니다. 이것은 키보드 사용자가 툴팁을 트리거 할 수 없게 되기 때문입니다.
{{< /callout >}}

```html
<!-- HTML to write -->
<a href="#" data-bs-toggle="tooltip" data-bs-title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-top" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
```

### 비활성화 요소

`disabled` 속성을 갖는 요소는 상호작용할 수 없습니다. 즉, 사용자가 포커스를 맞추거나 호버하거나 클릭하여 툴팁 (혹은 팝오버)을 구동할 수 없습니다. 해결책으로는 `<div>` 나 `<span>`으로 툴팁을 트리거하여, 이상적으로 `tabindex="0"`을 사용해서 키보드로 포커스가 가능하도록 해야합니다.

<div class="tooltip-demo">
{{< example >}}
<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-title="Disabled tooltip">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
{{< /example >}}
</div>

### 옵션

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< callout warning >}}
보안상의 이유로, `sanitize`, `sanitizeFn`, `allowList` 옵션을 data 속성으로 지정할 수 없다는 것에 주의해 주세요.
{{< /callout >}}


{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value]({{< docsref "/getting-started/javascript#sanitizer" >}}) | Object which contains allowed attributes and tags. |
| `animation` | boolean | `true` | Apply a CSS fade transition to the tooltip. |
| `boundary` | string, element | `'clippingParents'` | Overflow constraint boundary of the tooltip (applies only to Popper's preventOverflow modifier). By default, it's `'clippingParents'` and can accept an HTMLElement reference (via JavaScript only). For more information refer to Popper's [detectOverflow docs](https://popper.js.org/docs/v2/utils/detect-overflow/#boundary). |
| `container` | string, element, false | `false` | Appends the tooltip to a specific element. Example: `container: 'body'`. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize. |
| `customClass` | string, function | `''` | Add classes to the tooltip when it is shown. Note that these classes will be added in addition to any classes specified in the template. To add multiple classes, separate them with spaces: `'class-1 class-2'`. You can also pass a function that should return a single string containing additional class names. |
| `delay` | number, object | `0` | Delay showing and hiding the tooltip (ms)—doesn't apply to manual trigger type. If a number is supplied, delay is applied to both hide/show. Object structure is: `delay: { "show": 500, "hide": 100 }`. |
| `fallbackPlacements` | array | `['top', 'right', 'bottom', 'left']` | Define fallback placements by providing a list of placements in array (in order of preference). For more information refer to Popper's [behavior docs](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements). |
| `html` | boolean | `false` | Allow HTML in the tooltip. If true, HTML tags in the tooltip's `title` will be rendered in the tooltip. If false, `innerText` property will be used to insert content into the DOM. Use text if you're worried about XSS attacks. |
| `offset` | array, string, function | `[0, 0]` | Offset of the tooltip relative to its target. You can pass a string in data attributes with comma separated values like: `data-bs-offset="10,20"`. When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: [skidding](https://popper.js.org/docs/v2/modifiers/offset/#skidding-1), [distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1). For more information refer to Popper's [offset docs](https://popper.js.org/docs/v2/modifiers/offset/#options). |
| `placement` | string, function | `'top'` | How to position the tooltip: auto, top, bottom, left, right. When `auto` is specified, it will dynamically reorient the tooltip. When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The `this` context is set to the tooltip instance. |
| `popperConfig` | null, object, function | `null` | To change Bootstrap's default Popper config, see [Popper's configuration](https://popper.js.org/docs/v2/constructors/#options). When a function is used to create the Popper configuration, it's called with an object that contains the Bootstrap's default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper. |
| `sanitize` | boolean | `true` | Enable or disable the sanitization. If activated `'template'`, `'content'` and `'title'` options will be sanitized. |
| `sanitizeFn` | null, function | `null` | Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |
| `selector` | string, false | `false` | If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to also apply tooltips to dynamically added DOM elements (`jQuery.on` support). See [this issue]({{< param repo >}}/issues/4215) and [an informative example](https://codepen.io/Johann-S/pen/djJYPb). **Note**: `title` attribute must not be used as a selector. |
| `template` | string | `'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'` | Base HTML to use when creating the tooltip. The tooltip's `title` will be injected into the `.tooltip-inner`. `.tooltip-arrow` will become the tooltip's arrow. The outermost wrapper element should have the `.tooltip` class and `role="tooltip"`. |
| `title` | string, element, function | `''` | Default title value if `title` attribute isn't present. If a function is given, it will be called with its `this` reference set to the element that the popover is attached to. |
| `trigger` | string | `'hover focus'` | How tooltip is triggered: click, hover, focus, manual. You may pass multiple triggers; separate them with a space. `'manual'` indicates that the tooltip will be triggered programmatically via the `.tooltip('show')`, `.tooltip('hide')` and `.tooltip('toggle')` methods; this value cannot be combined with any other trigger. `'hover'` on its own will result in tooltips that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present. |
{{< /bs-table >}}

{{< callout info >}}
#### Data attributes for individual tooltips

개별 툴팁 옵션은 위에서 설명한 것처럼 data 속성을 사용해 지정할 수도 있습니다.
{{< /callout >}}

#### `popperConfig`으로 기능 사용하기

```js
const tooltip = new bootstrap.Tooltip(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
```

### 메소드

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

{{< bs-table "table" >}}
| 메소드 | 설명 |
| --- | --- |
| `disable` | 요소의 툴팁을 표시하는 기능을 삭제합니다. 툴팁은 재활성화 된 경우에만 표시합니다. |
| `dispose` | 요소의 툴팁을 숨기고 없앱니다 (DOM 요소에 보존되어 있는 데이터를 삭제). 위임을 사용하는 툴팁([`selector` 옵션](#옵션)을 사용하여 작성된 것)은 후손의 트리거 요소상에서 개별적으로 없앨수 없습니다. |
| `enable` | 요소의 툴팁을 표시하는 기능을 부여합니다. **툴팁은 기본적으로 활성화되어 있습니다.** |
| `getInstance` | DOM 요소와 연관된 툴팁의 인스턴스를 취득하는 Static 메소드입니다. |
| `getOrCreateInstance` | *Static* method which allows you to get the tooltip instance associated with a DOM element, or create a new one in case it wasn't initialized. |
| `hide` | 요소의 툴팁을 숨깁니다. **툴팁이 실제로 숨겨지기 전에 호출한 곳으로 돌아갑니다** (즉, `hidden.bs.tooltip` 이벤트가 발생하기 전). 이것은 툴팁의 “수동” 트리거로 간주됩니다. |
| `setContent` | Gives a way to change the tooltip's content after its initialization. |
| `show` | 요소의 툴팁을 표시합니다. **툴팁이 실제로 나타나기 전에 호출한 곳으로 돌아갑니다** (즉, `shown.bs.tooltip` 이벤트가 발생하기 전). 이것은 툴팁의 “수동” 트리거로 간주합니다. 길이가 0 을 가진 타이틀은 절대 표시되지 않습니다. |
| `toggle` | 요소의 툴팁을 토글합니다. **툴팁이 실제로 표시되거나 숨겨지기 전에 호출한 곳으로 돌아갑니다** (즉, `shown.bs.tooltip` 혹은 `hidden.bs.tooltip` 이벤트가 발생하기 전). 이것은 툴팁의 “수동” 트리거로 간주됩니다. |
| `toggleEnabled` | 요소의 툴팁 표시 및 숨김을 변경합니다. |
| `update` | 요소의 툴팁 위치를 갱신합니다. |
{{< /bs-table >}}

```js
const tooltip = bootstrap.Tooltip.getInstance('#example') // Returns a Bootstrap tooltip instance

// setContent example
tooltip.setContent({ '.tooltip-inner': 'another title' })

```

{{< callout info >}}
The `setContent` method accepts an `object` argument, where each property-key is a valid `string` selector within the popover template, and each related property-value can be `string` | `element` | `function` | `null`
{{< /callout >}}

### 이벤트

{{< bs-table >}}
| 이벤트 | 설명 |
| --- | --- |
| `hide.bs.tooltip` | 이 이벤트는 `hide` 인스턴스 메소드가 호출되었을 때 바로 발생합니다. |
| `hidden.bs.tooltip` | 이 이벤트는 툴팁이 사용자로부터 숨김 상태가 되었을 때 발생합니다 (CSS 트렌지션이 완료되기를 기다립니다). |
| `inserted.bs.tooltip` | 이 이벤트는 `show.bs.tooltip` 이벤트 후 툴팁 템플릿이 DOM에 추가되었을 때 발생합니다. |
| `show.bs.tooltip` | 이 이벤트는 `show` 인스턴스 메소드가 호출되었을 때 바로 발생합니다. |
| `shown.bs.tooltip` | 이 이벤트는 툴팁이 사용자에게 보일 때 발생합니다 (CSS 트렌지션이 완료되기를 기다립니다). |
{{< /bs-table >}}

```js
const myTooltipEl = document.getElementById('myTooltip')
const tooltip = bootstrap.Tooltip.getOrCreateInstance(myTooltipEl)

myTooltipEl.addEventListener('hidden.bs.tooltip', () => {
  // do something...
})

tooltip.hide()
```
