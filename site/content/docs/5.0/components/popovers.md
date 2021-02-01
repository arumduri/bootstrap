---
layout: docs
title: Popovers(팝오버)
description: Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.
group: components
toc: true
---

## Overview

팝오버 플러그인을 사용할 때 알아두면 좋은 점:

- 팝오버는 서드파티의 라이브러리 [Popper](https://popper.js.org/) 에 의존하고 있습니다. 팝오버를 동작시키기 위해서는 bootstrap.js 앞에 [popper.min.js]({{< param "cdn.popper" >}}) 를 쓰거나 Popper 를 포함한 `bootstrap.bundle.min.js` / `bootstrap.bundle.js` 를 사용해야 합니다.
- 팝오버는, 의존관계로 [tooltip plugin]({{< docsref "/components/tooltips" >}}) 이 필요합니다.
- 팝오버는 퍼포먼스상 이유로 opt-in 되어야 하기 때문에, **스스로 초기화 할 필요가 있습니다.**.
- 길이가 제로인 `title` 과 `content` 값은 팝오버를 표시하지 않습니다.
- 더 복잡한 컴포넌트(입력 그룹이나 버튼 그룹등)의 렌더링 문제를 피하기 위해서 `container: 'body'` 를 지정해 주세요.
- 숨겨진 요소에서 팝오버를 트리거하면 동작하지 않습니다.
- `.disabled` 나 `disabled` 요소의 팝오버는 wrapper 요소에서 트리거해야 합니다.
- 여러 라인에 걸쳐 있는 앵커로부터 트리거 된 경우, 팝오버는 앵커의 전체 폭을 중심으로 표시됩니다. 이 동작을 피하기 위해서는 `<a>` 에 `.text-nowrap` 를 사용해 주세요.
- 팝오버는 대응 요소가 DOM 에서 삭제되기 전에 숨겨야 합니다.
- 팝오버는 shadow DOM 내부에 있는 요소 덕분에 트리거 할 수 있습니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

팝오버가 어떤 기능을 하는지 몇 가지 예를 보면서 읽어 주세요.

## Example: Enable popovers everywhere

페이지 상의 모든 팝오버를 초기화하는 방법 중 하나는 `data-bs-toggle` 속성으로 선택하는 것입니다:

```js
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
```

## Example: Using the `container` option

부모 요소에 팝오버를 방해하는 몇 가지 스타일이 있다면, 대신 커스텀 `container` 를 지정하여 팝오버의 HTML 이 해당 요소 내에 표시되도록 합니다.

```js
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})
```

## Example

{{< example >}}
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
{{< /example >}}

### Four directions

4가지 옵션이 있습니다: top, right, bottom, left. RTL 에서 Bootstrap 를 사용하는 경우 방향성은 반대가 됩니다.

<div class="bd-example popover-demo">
  <div class="bd-example-popovers">
    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button>
    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on right
    </button>
    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on bottom
    </button>
    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on left
    </button>
  </div>
</div>

```html
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>
```

### Dismiss on next click

사용자가 다음 토글 요소 이외의 요소를 클릭했을 때 팝오버를 닫으려면 `focus` 트리거를 사용합니다.

{{< callout danger >}}
#### Specific markup required for dismiss-on-next-click

브라우저나 플랫폼 관계없이 제대로 동작하기 위해서는 `<button>` 태그가 _아닌_ `<a>` 태그를 사용해야 하며 [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) 속성을 포함해야 합니다.
{{< /callout >}}

{{< example >}}
<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
{{< /example >}}

```js
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})
```

### Disabled elements

`disabled` 속성을 갖는 요소는 인터랙티브하지 않습니다. 즉, 사용자가 팝오버(또는 툴팁)를 트리거하기 위해 커서를 호버하거나 클릭할 수 없음을 의미합니다. 해결책으로는 `<div>` 나 `<span>` 에서 팝오버를 트리거하여 비활성화된 요소의 `pointer-events` 를 오버라이드 해야 합니다.

팝오버를 무효화하려면 `data-bs-trigger="hover"` 를 사용하면 좋습니다. 이를 통해 사용자는 비활성화된 요소를 _click_ 되기를 기대하지 않기 때문에 팝오버가 바로 시각적 피드백으로 사용자에게 표시됩니다.

{{< example >}}
<span class="d-inline-block" data-bs-toggle="popover" data-bs-content="Disabled popover">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>
{{< /example >}}

## Usage

JavaScript 로 팝오버를 유효화 합니다:

```js
var exampleEl = document.getElementById('example')
var popover = new bootstrap.Popover(exampleEl, options)
```

{{< callout warning >}}
### Making popovers work for keyboard and assistive technology users

키보드 사용자가 팝오버를 활성화 하려면, 키보드 포커스가 가능하며 인터랙티브한 HTML 요소(링크나 폼 컨트톨 등)에만 추가해야 합니다. 임의의 HTML 요소(`<span>` 등)는 `tabindex="0"` 속성을 추가함으로써 포커스가 가능한데, 이는 키보드 사용자에게는 비인터랙티브적인 요소의 탭 멈춤이 추가되어 혼란을 초래할 수 있습니다. 게다가 키보드 사용자가 팝오버를 트리거 할수 없게 되므로 팝오버의 트리거를 `hover` 에만 의지해서는 안됩니다.

`html` 옵션에서 리치로 구조화된 HTML 을 팝오버에 넣을 수 있지만 과도한 양의 컨텐츠를 추가하는 것은 피하는 것이 좋습니다. 팝오버가 현재 기능을 하는 방법은 한 번 표시되면 해당 컨텐츠는 `aria-describedby` 속성을 갖는 트리거 요소에 연결됩니다. 그 결과 팝오버 컨텐츠 전체가 스크린 리더 사용자에게 길고 끊기지 않는 스트림으로 알릴 것입니다.

또한, 인터랙티브한 컨트롤(폼 요소나 링크 등)들을 팝오버에 포함시킬 수도 있지만 (허락된 속성이나 태그의 `allowList` 에 이러한 요소를 추가하여), 현재 팝오버는 키보드 포커스 순서를 관리하지 않는다는 점에 유의하십시오. 키보드 사용자가 팝오버를 열면 포커스는 트리거가 되는 요소에 머무르고, 팝오버는 보통 문서 구조의 트리거를 쉽게 따라가지 않기 때문에 <kbd>TAB</kbd> 를 앞으로 이동/눌러도 키보드 사용자가 팝오버 자체로 이동하리라는 보장은 없습니다. 요컨대 단순히 팝오버에 인터랙티브한 컨트롤을 추가하는 것만으로도 키보드 사용자나 스크린 리더 사용자들이 이들 컨트롤에 접근할 수 없거나 적어도 전체적으로 비논리적인 포커스 순서가 될 수 있습니다. 이러한 경우는, 대신에 modal(모달) 사용을 검토해 주십시오.
{{< /callout >}}

### Options

옵션은 data 속성이나 JavaScript 로 줄 수 있습니다. data 속성의 경우는 `data-bs-animation=""` 처럼 `data-bs-` 에 옵션명을 추가합니다.

{{< callout warning >}}
보안상의 이유로 `sanitize`, `sanitizeFn`, `allowList` 옵션은 data 속성을 이용해 지정할 수 없다는 것에 주의해 주십시오.
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
      <td>팝오버에 CSS fade 트랜지션을 적용합니다.</td>
    </tr>
    <tr>
      <td><code>container</code></td>
      <td>string | element | false</td>
      <td><code>false</code></td>
      <td>
        <p>팝오버를 특정 요소에 추가합니다. 예를 들어, <code>container: 'body'</code>. 이 옵션은 문서 흐름 중에서 팝오버를 트리거 요소 근처에 배치할 수 있어 특히 편리합니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>content</code></td>
      <td>string | element | function</td>
      <td><code>''</code></td>
      <td>
        <p><code>data-bs-content</code> 속성이 존재하지 않는 경우의 기본 컨텐츠 값.</p>
        <p>함수가 주어졌을 경우, 그 <code>this</code> 참조가 팝오버가 어태치 되어 있는 요소로 설정된 상태로 호출됩니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>number | object</td>
      <td><code>0</code></td>
      <td>
        <p>팝오버 표시 및 숨김 지연(ms) - 수동 트리커 타입에는 적용되지 않습니다.</p>
        <p>수치가 부여된 경우 숨김/표시의 양쪽에 지연이 적용됩니다.</p>
        <p>오브젝트 구조: <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td><code>html</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>팝오버에 HTML 을 삽입합니다. false 의 경우 <code>innerText</code> 속성을 사용하여 DOM 에 컨텐츠를 삽입합니다. XSS 공격이 걱정될 경우 텍스트를 사용합니다.</td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>string | function</td>
      <td><code>'right'</code></td>
      <td>
        <p>팝오버의 배치 방법 - auto | top | bottom | left | right.<br><code>auto</code> 를 지정하면 동적으로 팝오버 배치를 변경합니다.</p>
        <p>배치를 변경하기 위해 함수를 사용하는 경우, 팝오버 DOM 노드를 첫번째 인수로, triggering element DOM 노드를 두번째 인수로 호출됩니다.<code>this</code> 컨텍스트는 팝오버의 인스턴스로 설정되어 있습니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>selector</code></td>
      <td>string | false</td>
      <td><code>false</code></td>
      <td>셀렉터가 제공되는 경우 팝오버 객체는 지정된 타겟으로 이양됩니다. 실제로 이는 동적인 HTML 컨텐츠에 팝오버를 추가할 수 있도록 하기 위해 사용됩니다. 자세한 내용은 <a href="{{< param repo >}}/issues/4215">this</a> 과 <a href="https://codepen.io/team/bootstrap/pen/zYBXGwX?editors=1010">an informative example</a> 을 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>template</code></td>
      <td>string</td>
      <td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="popover-arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-header"&gt;&lt;/h3&gt;&lt;div class="popover-body"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>팝오버를 작성할때 사용하는 기본 HTML.</p>
        <p>팝오버의 <code>title</code> 은 <code>.popover-header</code> 에 주입됩니다.</p>
        <p>팝오버의 <code>content</code> 는 <code>.popover-body</code> 에 주입됩니다.</p>
        <p><code>.popover-arrow</code> 가 팝오버의 화살표가 됩니다.</p>
        <p>가장 밖에 있는 wrapper 요소는 <code>.popover</code> 클래스를 가지고 있어야 합니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>string | element | function</td>
      <td><code>''</code></td>
      <td>
        <p><code>title</code> 속성이 존재하지 않는 경우의 기본 타이틀 값.</p>
        <p>함수가 주어졌을 경우, 그 <code>this</code> 참조가 팝오버가 어태치 되어 있는 요소로 설정뙨 상태로 호출됩니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>trigger</code></td>
      <td>string</td>
      <td><code>'click'</code></td>
      <td>팝오버 트리거 방법 - click | hover | focus | manual. 복수의 트리거를 건내줄 수 있습니다; <code>manual</code> 은 다른 트리거와 조합할수 없습니다.</td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>number | string</td>
      <td><code>0</code></td>
      <td>팝오버 타겟에 대한 오프셋. 자세한 내용은 팝오버의 <a href="https://popper.js.org/docs/v1/#modifiers..offset.offset">offset docs</a> 을 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>fallbackPlacement</code></td>
      <td>string | array</td>
      <td><code>'flip'</code></td>
      <td>fallback 시 팝오버가 어떤 위치를 사용하는지 지정할 수 있습니다. 자세한 내용은 팝오버의 <a href="https://popper.js.org/docs/v1/#modifiers..flip.behavior">behavior docs</a> 를 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>boundary</code></td>
      <td>string | element</td>
      <td><code>'scrollParent'</code></td>
      <td>팝오버 Overflow 제약의 경계. <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, 혹은 HTML 요소 참조(JavaScript only)의 값만 받습니다. 자세한 내용은 팝오버의 <a href="https://popper.js.org/docs/v1/#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a> 를 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>customClass</code></td>
      <td>string | function</td>
      <td><code>''</code></td>
      <td>
        <p>팝오버가 표시되었을 때 클래스를 추가합니다. 이 클래스는 탬플릿에서 지정된 클래스에 추가되어 추가되므로 주의해 주십시오. 여러 개의 클래스를 추가하려면 공백으로 구분하세요: <code>'class-1 class-2'</code></p>
        <p>또한 추가 클래스 이름을 포함한 단일 문자열을 반환하는 함수를 줄 수도 있습니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>sanitize</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>sanitization 을 유효화 하거나 무효화합니다. 사용 가능으로 했을 경우 <code>'template'</code>, <code>'content'</code> 그리고 <code>'title'</code> 옵션은 투명해 집니다.</td>
    </tr>
    <tr>
      <td><code>allowList</code></td>
      <td>object</td>
      <td><a href="{{< docsref "/getting-started/javascript#sanitizer" >}}">Default value</a></td>
      <td>허용된 속성과 태그를 포함하는 오브젝트</td>
    </tr>
    <tr>
      <td><code>sanitizeFn</code></td>
      <td>null | function</td>
      <td><code>null</code></td>
      <td>여기에서는 독자적인 sanitize 함수를 지정할 수 있습니다. 이것은 sanitization 를 실행하기 위해 전용 라이브러리를 사용하고 싶은 경우에 편리합니다.</td>
    </tr>
    <tr>
      <td><code>popperConfig</code></td>
      <td>null | object</td>
      <td><code>null</code></td>
      <td>Bootstrap 의 기본 팝오버 설정을 변경하려면, <a href="https://popper.js.org/docs/v1/#Popper.Defaults">Popper's configuration</a> 을 참조해 주세요.</td>
    </tr>
  </tbody>
</table>

{{< callout info >}}
#### Data attributes for individual popovers

각각의 팝오버 data 옵션은, 위에서 설명했듯이 data 속성을 사용하여 지정할 수도 있습니다.
{{< /callout >}}

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}


#### show

요소의 팝오버를 표시합니다. **팝오버가 실제로 나타나기 전에 호출된 곳으로 돌아갑니다.** (즉, `shown.bs.popover` 이벤트가 발생하기 전). 이것은 팝오버의 "manual" 트리거로 간주됩니다. 타이틀과 컨텐츠의 양쪽 모두의 길이가 0 인 팝오버는 결코 표시되지 않습니다.

```js
myPopover.show()
```

#### hide

요소의 팝오버를 숨깁니다. **팝오버가 실제로 숨겨지기 전에 호출한 곳으로 돌아갑니다** (즉, `hidden.bs.popover` 이벤트 발생 전). 이것은 팝오버의 "manual" 트리거로 간주됩니다.

```js
myPopover.hide()
```

#### toggle

요소의 팝오버를 토글합니다. **팝오버가 실제로 표시 또는 숨기기 전에 호출된 곳으로 돌아갑니다** (즉, `shown.bs.popover` 혹은 `hidden.bs.popover` 이벤트가 발생하기 전). 이것은 팝오버의 "manual" 트리거로 간주됩니다.

```js
myPopover.toggle()
```

#### dispose

요소의 팝오버를 숨기고 업앱니다(DOM 요소에 저장된 데이터를 삭제합니다). 위임을 사용하는 팝오버([the `selector` option](#options) 를 사용하여 작성된 것) 는 자식의 트리거 요소로 인해 개벌젹으로 없앨수 없습니다.

```js
myPopover.dispose()
```

#### enable

요소의 팝오버를 표시하는 기능을 부여합니다. **팝오버는 기본으로 활성화되어 있습니다.**

```js
myPopover.enable()
```

#### disable

요소의 팝오버를 표시하는 기능을 삭제합니다. 팝오버는 다시 활성화 된 경우에만 표시됩니다.

```js
myPopover.disable()
```

#### toggleEnabled

요소의 팝오버를 표시/숨김을 바꿉니다.

```js
myPopover.toggleEnabled()
```

#### update

요소의 팝오버 위치를 새로고칩니다.

```js
myPopover.update()
```

#### getInstance

DOM 요소와 연관된 팝오버 인스턴스를 가져올 수 있게 하는 *Static* 메소드

```js
var exampleTriggerEl = document.getElementById('example')
var popover = bootstrap.Popover.getInstance(exampleTriggerEl) // Returns a Bootstrap popover instance
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
      <td>show.bs.popover</td>
      <td>이 이벤트는 <code>show</code> 인스턴스 메소드가 호출되었을 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td>shown.bs.popover</td>
      <td>이 이벤트는 팝오버가 사용자에게 보여질 때 바로 발생합니다(CSS 트랜지션이 완료되기를 기다립니다).</td>
    </tr>
    <tr>
      <td>hide.bs.popover</td>
      <td>이 이벤트는 <code>hide</code> 인스턴스 메소드가 호출되었을 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td>hidden.bs.popover</td>
      <td>이 이벤트는 팝오버의 숨김이 완료될 때 발생합니다(CSS 트랜지션이 완료되기를 기다립니다).</td>
    </tr>
    <tr>
      <td>inserted.bs.popover</td>
      <td>이 이벤트는 <code>show.bs.popover</code> 이벤트 후에, 팝오버의 템플렛이 DOM 에 추가될 때 발생합니다.</td>
    </tr>
  </tbody>
</table>

```js
var myPopoverTrigger = document.getElementById('myPopover')
myPopoverTrigger.addEventListener('hidden.bs.popover', function () {
  // do something...
})
```
