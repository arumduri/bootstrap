---
layout: docs
title: Tooltips(툴팁)
description: CSS3 를 사용한 애니메이션이나 data-bs-attributes 를 사용한 CSS 와 JavaScript 로 커스텀 Bootstrap 의 툴팁을 추가하기 위한 문서와 예시입니다.
group: components
toc: true
---

## Overview

툴팁 플러그인을 사용할 때 알아두어야 할 점:

- 툴팁의 배치는 [Popper](https://popper.js.org/)  에 의존하고 있습니다. bootstrap.js 앞에 [popper.min.js]({{< param "cdn.popper" >}}) 을 쓰거나, 툴팁을 동작시키기 위해 팝오버를 포함한 `bootstrap.bundle.min.js` / `bootstrap.bundle.js` 를 사용해야 합니다.
- 툴팁은 퍼포먼스를 위해 opt-in 되어 있기 때문에 **스스로 초기화를 해야 합니다.**
- 길이가 0 의 타이틀을 가진 툴팁은 표시되지 않습니다.
- 더 복잡한 컴포넌트(input group, button groups 등)의 랜더링 문제를 피하기 위해 `container: 'body'` 를 지정해 주십시오.
- 숨겨진 요소에서 툴팁을 트리거해도 제 기능을 하지 않습니다.
- `.disabled` 나 `disabled` 요소의 툴팁은 그 위(바깥) 요소에서 트리거해야 합니다.
- 여러 라인에 걸쳐 있는 하이퍼링크에서 트리거된 툴팁은 중앙에 배치됩니다. 이 동작을 피하기 위해서는 `<a>` 에 `white-space: nowrap;` 을 사용해 주십시오.
- 툴팁은 대응 요소가 DOM 에서 삭제되기 전에 숨겨야 합니다.
- 툴팁은 shadow DOM 내의 요소 덕분에 트리거할 수 있습니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

몇 가지 예를 들어보겠습니다.

## Example: Enable tooltips everywhere

페이지 상의 모든 툴팁을 초기화 하는 방법 중 하나는 `data-bs-toggle` 속성으로 선택하는 것입니다:

```js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
```

## Examples

아래 링크에 커서를 맞추면 툴팁이 나타납니다:

<div class="bd-example tooltip-demo">
  <p class="muted">Tight pants next level keffiyeh <a href="#" data-bs-toggle="tooltip" title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#" data-bs-toggle="tooltip" title="Another tooltip">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#" data-bs-toggle="tooltip" title="Another one here too">whatever keytar</a>, scenester farm-to-table banksy Austin <a href="#" data-bs-toggle="tooltip" title="The last tip!">twitter handle</a> freegan cred raw denim single-origin coffee viral.
  </p>
</div>

아래 버튼에 커서를 맞추면 top, right, bottom, left의 4개 툴팁이 나타납니다: RTL 에서 Bootstrap 를 사용하는 경우 방향은 반대가 됩니다.

<div class="bd-example tooltip-demo">
  <div class="bd-example-tooltips">
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Tooltip on top</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">Tooltip on right</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">Tooltip on left</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
  </div>
</div>

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
```

그리고 커스텀 HTML 을 추가할 수 있습니다:

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
```

SVG 와 함께:

<div class="bd-example tooltip-demo">
  <a href="#" data-bs-toggle="tooltip" title="Default tooltip">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
      <rect width="100%" height="100%" fill="#563d7c"/>
      <circle cx="50" cy="50" r="30" fill="#007bff"/>
    </svg>
  </a>
</div>

## Usage

툴팁 플러그인은 필요에 따라 컨텐츠와 마크업을 생성하고 기본 값으로는 트리거 요소 뒤에 툴팁을 배치합니다.

JavaScript 를 사용해 툴팁을 트리거 합니다:

```js
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, options)
```

{{< callout warning >}}
##### Overflow `auto` and `scroll`

툴팁의 위치는 부모 컨테이너에 `.table-responsive` 처럼 `overflow: auto` 나 `overflow: scroll` 이 있는 경우 자동으로 변경되지만, 원래 배치 위치는 유지됩니다. 이를 해결하려면 `boundary` 옵션을 기본 값 `'scrollParent'` 이외의 값, 예를 들어 `'window'` 같은 것을 설정합니다:

```js
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: 'window'
})
```
{{< /callout >}}

### Markup

툴팁에 필요한 마크업은 툴팁을 작성하고자 하는 HTML 요소의 `data` 속성과 `title` 뿐입니다. 툴팁 마크업은 단순하지만 위치를 지정해야 합니다 (플러그인에 의해 기본 `top` 이 설정되어 있습니다).

{{< callout warning >}}
##### Making tooltips work for keyboard and assistive technology users

툴팁을 추가해야 하는 것은 키보드 포커스가 가능하고 인터랙티브한 HTML 요소(링크나 폼 컨트롤 등)뿐 입니다. 임의의 HTML 요소(`<span>` 등)는 `tabindex="0"` 속성을 추가하여 포커스 가능하게 할 수 있지만 이는 키보드 사용자에게는 비인터랙티브적인 요소의 탭 멈춤이 추가되어 버리기 때문에 키보드 사용자를 곤란하게 하거나 혼란스럽게 할 수 있으며 현재 대부분의 스크린 리더는 이러한 상황에서 툴팁을 제공하지 않습니다. 게다가 툴팁의 트리거로서 `hover` 에만 의지해서는 안됩니다. 이것은 키보드 사용자가 툴팁을 트리거 할 수 없게 되기 때문입니다.
{{< /callout >}}

```html
<!-- HTML to write -->
<a href="#" data-bs-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-top" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
```

### Disabled elements

`disabled` 속성을 갖는 요소는 인터랙티브하지 않습니다. 즉, 사용자가 포커스를 맞추거나 호버하거나 클릭하여 툴팁(혹은 팝오버)을 구동할 수 없습니다. 해결책으로는 `<div>` 나 `<span>` 으로 툴팁을 트리거하여, 이상적으로 `tabindex="0"` 으로 키보드 포커스 가능하게 하고, disabled 요소인 `pointer-events` 를 오버라이드 오버라이드 해야 합니다.

<div class="tooltip-demo">
{{< example >}}
<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>
{{< /example >}}
</div>

### Options

옵션은 data 속성 또는 JavaScript 로 줄 수 있습니다. data 속성의 경우는 `data-bs-animation=""` 처럼 `data-bs-` 에 옵션명을 추가합니다.

{{< callout warning >}}
보안상의 이유로, `sanitize`, `sanitizeFn`, `allowList` 옵션을 data 속성으로 지정할 수 없다는 것에 주의해 주세요.
{{< /callout >}}

<table class="table">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 100px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>animation</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>툴팁에 CSS fade 트렌지션을 적용합니다.</td>
    </tr>
    <tr>
      <td><code>container</code></td>
      <td>string | element | false</td>
      <td><code>false</code></td>
      <td>
        <p>특정 요소에 툴팁을 추가합니다. 예를 들어: <code>container: 'body'</code>. 이 옵션은 문서 흐름 안에서 툴팁을 트리거 요소 근처에 배치할 수 있어 특히 편리합니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>number | object</td>
      <td><code>0</code></td>
      <td>
        <p>툴팁 표시/숨김 지연시간(ms) - 수동 트리거 타입에는 적용되지 않습니다.</p>
        <p>수치를 지정한 경우는 숨김/표시 모두 지연이 적용됩니다.</p>
        <p>Object 구조는: <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td><code>html</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>
        <p>툴팁내의 HTML 을 허용합니다.</p>
        <p>true 의 경우, 툴팁의 <code>title</code> 에 있는 HTML 태그가 툴팁에 나타납니다. false 의 경우는, <code>innerText</code> 속성이 DOM 에 컨텐츠를 삽입하기 위해 사용됩니다.</p>
        <p>XSS 공격이 걱정된다면 텍스트를 사용하세요.</p>
      </td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>string | function</td>
      <td><code>'top'</code></td>
      <td>
        <p>툴팁 배치 방법 - auto | top | bottom | left | right.<br><code>auto</code> 를 지정하면 동적으로 툴팁의 방향을 바꿉니다.</p>
        <p>배치를 결정하기 위해 함수를 사용할 경우 툴팁 DOM 노드를 제 1인수로, 트리거 요소 DOM 노드를 제2인수로 하여 호출됩니다. <code>this</code> 콘텍스트에는 툴팁의 인스턴스가 설정됩니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>selector</code></td>
      <td>string | false</td>
      <td><code>false</code></td>
      <td>셀렉터가 제공되는 경우 툴팁 오브젝트는 지정된 타겟으로 이양됩니다. 실제로는 동적으로 추가된 DOM 요소에 툴팁을 적용하기 위해서도 사용됩니다.(<code>jQuery.on</code> 지원). <a href="{{< param repo >}}/issues/4215">this</a> 와 <a href="https://codepen.io/team/bootstrap/pen/zYBXGwX?editors=1010">an informative example</a> 을 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>template</code></td>
      <td>string</td>
      <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="tooltip-arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>툴팁을 작성할때 사용하는 기본.</p>
        <p>툴팁의 <code>title</code> 은 <code>.tooltip-inner</code> 로 주입됩니다.</p>
        <p><code>.tooltip-arrow</code> 가 툴팁의 화살표가 됩니다.</p>
        <p>가장 바깥쪽 요소는 <code>.tooltip</code> 과 <code>role="tooltip"</code> 를 가지고 있어야 합니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>string | element | function</td>
      <td><code>''</code></td>
      <td>
        <p><code>title</code> 속성이 존재하지 않는 경우 기본 타이틀 값.</p>
        <p>함수가 주어졌을 경우 그 <code>this</code> 참조가 툴팁이 첨부되어 있는 요소로 설정된 상태로 호출됩니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>trigger</code></td>
      <td>string</td>
      <td><code>'hover focus'</code></td>
      <td>
        <p>툴팁의 트리거 방법 - click | hover | focus | manual. 여러 트리거를 전달할 수 있습니다.</p>
        <p><code>'manual'</code> 은 <code>.tooltip('show')</code>, <code>.tooltip('hide')</code> 그리고 <code>.tooltip('toggle')</code> 메소드를 통해 프로그램으로 트리거 되는 것을 나타냅니다. 이 값은 다른 트리거와 조합할 수 없습니다.</p>
        <p><code>'hover'</code> 를 단독으로 사용하면, 키보드를 통해 트리거 할 수 없는 툴팁이 되며, 키보드 사용자에게 동일한 정보를 전달하기 위한 대체수단이 존재할 경우에만 사용해야 합니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>fallbackPlacement</code></td>
      <td>null | array</td>
      <td><code>null</code></td>
      <td>fallback 시 팝오버가 어떤 위치를 사용하는지 지정할 수 있습니다. 자체한 것은 팝오버의 <a href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements">behavior docs</a> 를 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>boundary</code></td>
      <td>string | element</td>
      <td><code>'clippingParents'</code></td>
      <td>툴팁의 Overflow 제약경계. 기본 값은 <code>'clippingParents'</code> 로 HTMLElement 참조를 받을 수 있습니다.(JavaScript only). 자세한 것은 팝오버의 <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">preventOverflow docs</a> 를 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>customClass</code></td>
      <td>string | function</td>
      <td><code>''</code></td>
      <td>
        <p>툴팁이 표시될 때 클래스를 추가합니다. 이 클래스는 템플릿에서 지정뙨 클래스에 추가되어 추가되므로 주의해 주십시오. 여러 개의 클래스를 추가하려면 공백으로 구분해 주세요: <code>'class-1 class-2'</code></p>
        <p>추가 클래스 이름을 포함한 단일 문자열을 반환하는 함수를 줄 수도 있습니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>sanitize</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>sanitization 을 유효화 하거나 무효화합니다. 유효로 했을 경우 <code>'template'</code> 와  <code>'title'</code> 옵션은 sanitize 됩니다.</td>
    </tr>
    <tr>
      <td><code>allowList</code></td>
      <td>object</td>
      <td><a href="{{< docsref "/getting-started/javascript#sanitizer" >}}">Default value</a></td>
      <td>허용된 속성과 태그를 포함하는 Object</td>
    </tr>
    <tr>
      <td><code>sanitizeFn</code></td>
      <td>null | function</td>
      <td><code>null</code></td>
      <td>여기세어는 독자적인 sanitize 함수를 지정할 수 있습니다. 이것은 sanitize 를 실행하기 위해 전용 라이브러리를 사용하고 싶은 경우에 편리합니다.</td>
    </tr>
    <tr>
      <td><code>popperConfig</code></td>
      <td>null | object</td>
      <td><code>null</code></td>
      <td>Bootstrap 기본 팝오버의 설정을 변경하려면 <a href="https://popper.js.org/docs/v1/#Popper.Defaults">Popper's configuration</a> 를 참조해 주세요.</td>
    </tr>
  </tbody>
</table>

{{< callout info >}}
#### Data attributes for individual tooltips

Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.
{{< /callout >}}

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### show

Reveals an element's tooltip. **Returns to the caller before the tooltip has actually been shown** (i.e. before the `shown.bs.tooltip` event occurs). This is considered a "manual" triggering of the tooltip. Tooltips with zero-length titles are never displayed.

```js
tooltip.show()
```

#### hide

Hides an element's tooltip. **Returns to the caller before the tooltip has actually been hidden** (i.e. before the `hidden.bs.tooltip` event occurs). This is considered a "manual" triggering of the tooltip.

```js
tooltip.hide()
```

#### toggle

Toggles an element's tooltip. **Returns to the caller before the tooltip has actually been shown or hidden** (i.e. before the `shown.bs.tooltip` or `hidden.bs.tooltip` event occurs). This is considered a "manual" triggering of the tooltip.

```js
tooltip.toggle()
```

#### dispose

Hides and destroys an element's tooltip (Removes stored data on the DOM element). Tooltips that use delegation (which are created using [the `selector` option](#options)) cannot be individually destroyed on descendant trigger elements.

```js
tooltip.dispose()
```

#### enable

Gives an element's tooltip the ability to be shown. **Tooltips are enabled by default.**

```js
tooltip.enable()
```

#### disable

Removes the ability for an element's tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled.

```js
tooltip.disable()
```

#### toggleEnabled

Toggles the ability for an element's tooltip to be shown or hidden.

```js
tooltip.toggleEnabled()
```

#### update

Updates the position of an element's tooltip.

```js
tooltip.update()
```

#### getInstance

*Static* method which allows you to get the tooltip instance associated with a DOM element

```js
var exampleTriggerEl = document.getElementById('example')
var tooltip = bootstrap.Tooltip.getInstance(exampleTriggerEl) // Returns a Bootstrap tooltip instance
```

### Events

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Event type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.tooltip</code></td>
      <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
      <td><code>shown.bs.tooltip</code></td>
      <td>This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
      <td><code>hide.bs.tooltip</code></td>
      <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.tooltip</code></td>
      <td>This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
      <td><code>inserted.bs.tooltip</code></td>
      <td>This event is fired after the <code>show.bs.tooltip</code> event when the tooltip template has been added to the DOM.</td>
    </tr>
  </tbody>
</table>

```js
var myTooltipEl = document.getElementById('myTooltip')
var tooltip = new bootstrap.Tooltip(myTooltipEl)

myTooltipEl.addEventListener('hidden.bs.tooltip', function () {
  // do something...
})

tooltip.hide()
```
