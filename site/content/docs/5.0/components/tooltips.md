---
layout: docs
title: Tooltips(툴팁)
description: CSS3를 사용한 애니메이션이나 data-bs-attributes를 사용한 CSS와 JavaScript로 사용자 정의 Bootstrap의 툴팁을 추가하기 위한 문서와 예시입니다.
group: components
toc: true
---

## Overview

툴팁 플러그인을 사용할 때 알아두어야 할 점:

- 툴팁의 배치는 [Popper](https://popper.js.org/)에 의존하고 있습니다. bootstrap.js 앞에 [popper.min.js]({{< param "cdn.popper" >}}) 를 사용하거나, 툴팁을 동작시키기 위해 팝오버를 포함한 `bootstrap.bundle.min.js` / `bootstrap.bundle.js` 를 사용해야 합니다.
- 툴팁은 퍼포먼스를 위해 opt-in 되어 있기 때문에 **스스로 초기화를 해야 합니다.**
- 길이가 0의 타이틀을 가진 툴팁은 표시되지 않습니다.
- 더 복잡한 컴포넌트(input group, button groups 등)의 랜더링 문제를 피하기 위해 `container: 'body'`를 지정해 주십시오.
- 숨겨진 요소에서 툴팁을 트리거해도 제 기능을 하지 않습니다.
- `.disabled`나 `disabled` 요소의 툴팁은 그 위(바깥) 요소에서 트리거해야 합니다.
- 여러 라인에 걸쳐 있는 하이퍼링크에서 트리거된 툴팁은 중앙에 배치됩니다. 이 동작을 피하기 위해서는 `<a>`에 `white-space: nowrap;` 을 사용해 주십시오.
- 툴팁은 대응 요소가 DOM에서 삭제되기 전에 숨겨야 합니다.
- 툴팁은 shadow DOM 내의 요소 덕분에 트리거할 수 있습니다.

{{< callout info >}}
{{< partial "callout-info-sanitizer.md" >}}
{{< /callout >}}

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
  <p class="muted">Placeholder text to demonstrate some <a href="#" data-bs-toggle="tooltip" title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" data-bs-toggle="tooltip" title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" data-bs-toggle="tooltip" title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" data-bs-toggle="tooltip" title="The last tip!">your own</a> site or project.
  </p>
</div>

아래 버튼에 커서를 맞추면 top, right, bottom, left의 4개 툴팁이 나타납니다: RTL에서 Bootstrap을 사용하는 경우 방향은 반대가 됩니다.

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

그리고 사용자 정의 HTML을 추가할 수 있습니다:

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
```

SVG 와 함께:

<div class="bd-example tooltip-demo">
  <a href="#" class="d-inline-block" data-bs-toggle="tooltip" title="Default tooltip">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
      <rect width="100%" height="100%" fill="#563d7c"/>
      <circle cx="50" cy="50" r="30" fill="#007bff"/>
    </svg>
  </a>
</div>

## Sass

### Variables

{{< scss-docs name="tooltip-variables" file="scss/_variables.scss" >}}

## Usage

툴팁 플러그인은 필요에 따라 컨텐츠와 마크업을 생성하고 기본 값으로는 트리거 요소 뒤에 툴팁을 배치합니다.

JavaScript를 사용해 툴팁을 트리거 합니다:

```js
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, options)
```

{{< callout warning >}}
##### Overflow `auto` and `scroll`

**부모 컨테이너**가 `.table-responsive`처럼 `overflow: auto` 혹은 `overflow: scroll`로 되어 있으면 툴팁의 위치가 자동으로 변경되려고는 하지만, 위치는 원래대로 유지되고 있습니다. 그것을 해결하기 위해서는, [`boundary` option](https://popper.js.org/docs/v2/modifiers/flip/#boundary) (`popperConfig` 옵션을 사용한 flip modifier의 경우)을 기본값으로 가지고 있는 `'clippingParents'`를 임의의 HTML 요소, 예를 들어 `document.body`등으로 오버라이드하여 설정하면 됩니다:

```js
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body // or document.querySelector('#boundary')
})
```
{{< /callout >}}

### Markup

툴팁에 필요한 마크업은 툴팁을 작성하고자 하는 HTML 요소의 `data` 속성과 `title` 뿐입니다. 툴팁 마크업은 단순하지만 위치를 지정해야 합니다 (플러그인에 의해 기본 `top` 이 설정되어 있습니다).

{{< callout warning >}}
##### Making tooltips work for keyboard and assistive technology users

툴팁을 추가해야 하는 부분은 키보드로 포커스가 가능하고 상호작용이 가능한 HTML 요소(링크나 폼 컨트롤 등)뿐 입니다. 임의의 HTML 요소(`<span>` 등)는 `tabindex="0"` 속성을 추가하여 포커스가 가능하게 할 수 있지만 이는 키보드 사용자에게 상호작용할 수 없는 요소에 탭 멈춤이 추가되어 키보드 사용자를 곤란하게 하거나 혼란스럽게 할 수 있으며 현재 대부분의 스크린 리더는 이러한 상황에서 툴팁을 제공하지 않습니다. 게다가 툴팁의 트리거로서 `hover` 에만 의지해서는 안됩니다. 이것은 키보드 사용자가 툴팁을 트리거 할 수 없게 되기 때문입니다.
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

`disabled` 속성을 갖는 요소는 상호작용할 수 없습니다. 즉, 사용자가 포커스를 맞추거나 호버하거나 클릭하여 툴팁 (혹은 팝오버)을 구동할 수 없습니다. 해결책으로는 `<div>` 나 `<span>` 으로 툴팁을 트리거하여, 이상적으로 `tabindex="0"`을 사용해서 키보드로 포커스가 가능하도록 해야합니다.

<div class="tooltip-demo">
{{< example >}}
<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
{{< /example >}}
</div>

### Options

옵션은 data 속성이나 JavaScript로 전달할 수 있습니다. data 속성의 경우는, `data-bs-animation=""`과 같이 `data-bs-`에 옵션 명을 추가합니다. data 속성으로 옵션을 전달하려면 옵션 명의 대문자와 소문자를 캐멀케이스(camelCase)에서 케밥케이스(kebab-case)로 변경해 주세요. 예를 들어 `data-bs-customClass="beautifier"`가 아니라 `data-bs-custom-class="beautifier"`로 해야 합니다.


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
        <p>툴팁내의 HTML을 허용합니다.</p>
        <p>true의 경우, 툴팁의 <code>title</code>에 있는 HTML 태그가 툴팁에 나타납니다. false 의 경우는, <code>innerText</code> 속성이 DOM에 컨텐츠를 삽입하기 위해 사용됩니다.</p>
        <p>XSS 공격이 걱정된다면 문자를 사용하세요.</p>
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
      <td>셀렉터가 제공되는 경우 툴팁 객체는 지정된 타겟으로 이양됩니다. 실제로는 동적으로 추가된 DOM 요소에 툴팁을 적용하기 위해서도 사용됩니다.(<code>jQuery.on</code> 지원). <a href="{{< param repo >}}/issues/4215">this</a> 와 <a href="https://codepen.io/team/bootstrap/pen/zYBXGwX?editors=1010">an informative example</a> 을 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>template</code></td>
      <td>string</td>
      <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="tooltip-arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>툴팁을 작성할때 사용하는 기본.</p>
        <p>툴팁의 <code>title</code>은 <code>.tooltip-inner</code>로 주입됩니다.</p>
        <p><code>.tooltip-arrow</code>가 툴팁의 화살표가 됩니다.</p>
        <p>가장 바깥쪽 요소는 <code>.tooltip</code>과 <code>role="tooltip"</code>를 가지고 있어야 합니다.</p>
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
        <p><code>'manual'</code>은 <code>.tooltip('show')</code>, <code>.tooltip('hide')</code> 그리고 <code>.tooltip('toggle')</code> 메소드를 통해 프로그램으로 트리거 되는 것을 나타냅니다. 이 값은 다른 트리거와 조합할 수 없습니다.</p>
        <p><code>'hover'</code>를 단독으로 사용하면, 키보드를 통해 트리거 할 수 없는 툴팁이 되며, 키보드 사용자에게 동일한 정보를 전달하기 위한 대체수단이 존재할 경우에만 사용해야 합니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>fallbackPlacements</code></td>
      <td>array</td>
      <td><code>['top', 'right', 'bottom', 'left']</code></td>
      <td>폴백 배치를 정의하려면 배치 목록을 배열로 지정합니다(우선순위 순서). 자세한 내용은 팝오버의 <a href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements">behavior docs</a>를 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>boundary</code></td>
      <td>string | element</td>
      <td><code>'clippingParents'</code></td>
      <td>툴팁의 오버플로 제약 경계(Popper의 preventOverflow modifier에만 적용). 기본적으로 <code>'clippingParents'</code>로 HTMLElement의 참조를 받을 수 있습니다.(JavaScript만). 자세한 정보는 Popper의 <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow docs</a>를 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>customClass</code></td>
      <td>string | function</td>
      <td><code>''</code></td>
      <td>
        <p>툴팁이 표시될 때 클래스를 추가합니다. 이 클래스는 템플릿에서 지정된 클래스에 추가되어 추가되므로 주의해 주십시오. 여러 개의 클래스를 추가하려면 공백으로 구분해 주세요: <code>'class-1 class-2'</code></p>
        <p>추가 클래스 이름을 포함한 단일 문자열을 반환하는 함수를 줄 수도 있습니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>sanitize</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>sanitize를 유효 혹은 무효화 합니다. 유효화 하면 <code>'template'</code>, <code>'content'</code>와 <code>'title'</code>의 각 옵션이 sanitize 됩니다. 자세한 정보는 <a href="{{< docsref "/getting-started/javascript#sanitizer" >}}">sanitizer section in our JavaScript documentation</a>을 참조해 주세요.</td>
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
      <td><code>offset</code></td>
      <td>array | string | function</td>
      <td><code>[0, 0]</code></td>
      <td>
        <p>타겟에 대한 툴팁의 상대적인 오프셋. data 속성에는 <code>data-bs-offset="10,20"</code>와 같이 콤마 구분으로 문자열을 건내줄 수 있습니다.</p>
        <p>오프셋을 결정하기 위해 함수가 사용되는 경우는 Popper의 배치, 참조, Popper의 직사각형을 포함한 객체를 첫번째 인수로 호출합니다. 트리거 되는 요소의 DOM 노드가 두번째 인수로 전달됩니다. 이 함수는 두 값을 갖는 배열 <code>[<a href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>, <a href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>]</code>을 반환해야 합니다.</p>
        <p>보다 자세한 정보는 Popper의 <a href="https://popper.js.org/docs/v2/modifiers/offset/#options">offset docs</a>를 참조해 주세요.</p>
      </td>
    </tr>
    <tr>
      <td><code>popperConfig</code></td>
      <td>null | object | function</td>
      <td><code>null</code></td>
      <td>
        <p>Bootstrap의 기본 Popper 설정을 변경하려면 <a href="https://popper.js.org/docs/v2/constructors/#options">Popper's configuration</a>을 참조해 주세요.</p>
        <p>Popper 구성을 만들기 위해 함수가 사용될 때 Bootstrap 기본 Popper 구성을 포함한 객체로 호출됩니다. 그것은 당신이 기본을 사용하고, 당신의 구성과 통합하는것을 도와줍니다. 함수는 Popper의 구성 객체를 반환해야 합니다.</p>
      </td>
    </tr>
  </tbody>
</table>

{{< callout info >}}
#### Data attributes for individual tooltips

개별 툴팁 옵션은 위에서 설명한 것처럼 data 속성을 사용해 지정할 수도 있습니다.
{{< /callout >}}

#### Using function with `popperConfig`

```js
var tooltip = new bootstrap.Tooltip(element, {
  popperConfig: function (defaultBsPopperConfig) {
    // var newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
```

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### show

요소의 툴팁을 표시합니다. **툴팁이 실제로 나타나기 전에 호출한 곳으로 돌아갑니다** (즉, `shown.bs.tooltip` 이벤트가 발생하기 전). 이것은 툴팁의 "수동" 트리거로 간주합니다. 길이가 0 을 가진 타이틀은 절대 표시되지 않습니다.

```js
tooltip.show()
```

#### hide

요소의 툴팁을 숨깁니다. **툴팁이 실제로 숨겨지기 전에 호출한 곳으로 돌아갑니다** (즉, `hidden.bs.tooltip` 이벤트가 발생하기 전). 이것은 툴팁의 "수동" 트리거로 간주됩니다.

```js
tooltip.hide()
```

#### toggle

요소의 툴팁을 토글합니다. **툴팁이 실제로 표시되거나 숨겨지기 전에 호출한 곳으로 돌아갑니다** (즉, `shown.bs.tooltip` 혹은 `hidden.bs.tooltip` 이벤트가 발생하기 전). 이것은 툴팁의 "수동" 트리거로 간주됩니다.

```js
tooltip.toggle()
```

#### dispose

요소의 툴팁을 숨기고 업앱니다(DOM 요소에 보존되어 있는 데이타를 삭제). 위임을 사용하는 툴팁([the `selector` option](#options) 을 사용하여 작성된 것)은 후손의 트리거 요소상에서 개별적으로 없앨수 없습니다.

```js
tooltip.dispose()
```

#### enable

요소의 툴팁을 표시하는 기능을 부여합니다. **툴팁은 기본적으로 활성화되어 있습니다.**

```js
tooltip.enable()
```

#### disable

요소의 툴팁을 표시하는 기능을 삭제합니다. 툴팁은 재활성화 된 경우에만 표시합니다.

```js
tooltip.disable()
```

#### toggleEnabled

요소의 툴팁 표시 및 숨김을 변경합니다.

```js
tooltip.toggleEnabled()
```

#### update

요소의 툴팁 위치를 갱신합니다.

```js
tooltip.update()
```

#### getInstance

DOM 요소와 연관된 툴팁의 인스턴스를 취득하는 *Static* 메소드

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
      <td>이 이벤트는 <code>show</code> 인스턴스 메소드가 호출되었을 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td><code>shown.bs.tooltip</code></td>
      <td>이 이벤트는 툴팁이 사용자에게 보일 때 발생합니다(CSS 트렌지션이 완료되기를 기다립니다).</td>
    </tr>
    <tr>
      <td><code>hide.bs.tooltip</code></td>
      <td>이 이벤트는 <code>hide</code> 인스턴스 메소드가 호출되었을 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.tooltip</code></td>
      <td>이 이벤트는 툴팁이 사용자로부터 숨김 상태가 되었을 때 발생합니다.(CSS 트렌지션이 완료되기를 기다립니다).</td>
    </tr>
    <tr>
      <td><code>inserted.bs.tooltip</code></td>
      <td>이 이벤트는 <code>show.bs.tooltip</code> 이벤트 후 툴팁 템플릿이 DOM에 추가되었을 때 발생합니다.</td>
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
