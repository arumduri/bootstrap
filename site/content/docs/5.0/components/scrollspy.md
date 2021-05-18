---
layout: docs
title: Scrollspy(스크롤 스파이)
description: 스크롤 위치에 따라 Bootstrap 내비게이션 또는 목록 그룹 컴포넌트를 자동으로 갱신하여 뷰포트 내에서 현재 어떤 링크가 활성화 된지를 나타냅니다.
group: components
toc: true
---

## How it works

스크롤 스파이가 제대로 동작하기 위해서는 몇 가지 조건이 있습니다:

- Bootstrap [nav component]({{< docsref "/components/navs-tabs" >}}) 혹은 [list group]({{< docsref "/components/list-group" >}})에서 사용해야 합니다.
- 스크롤 스파이는 감시 대상의 요소, 보통은 `<body>`의 `position: relative;`를 필요로 합니다.
- 앵커 (`<a>`)가 필요하고, 그 요소를 가르키는 `id`가 필요합니다.

정상적으로 구현되면 내비게이션이나 목록 그룹은 그에 따라 갱신되며, `.active` 클래스는 관련 타겟에 따라 한 개의 아이템에서 다음 아이템으로 이동합니다.

{{< callout >}}
### Scrollable containers and keyboard access
스크롤 가능한 컨테이너(`<body>` 이외의 )를 작성할 경우에는 반드시 `height`를 설정하고 키보드로 부터의 접근을 확실히 하기 위해서 `tabindex="0"` 와 함께 `overflow-y: scroll;`을 적용하십시오.
{{< /callout >}}

## Example in navbar

내비게이션 바 아래 영역을 스크롤하여 활성화된 클래스의 변화를 살펴보세요. 드롭다운 아이템도 같이 강조 표시됩니다.

<div class="bd-example">
  <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading1">First</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading2">Second</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
          <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  </div>
</div>

```html
<nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>
```

## Example with nested nav

스크롤 스파이는 중첩된 `.nav` 에서도 동작합니다. 중첩 된 `.nav`가 `.active`인 경우, 그 부모도 `.active`가 됩니다. 내비게이션 바 옆 영역을 스크롤해서 활성화 된 클래스의 변화를 살펴보세요.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
        <a class="navbar-brand" href="#">Navbar</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#item-1">Item 1</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
            <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
          </nav>
          <a class="nav-link" href="#item-2">Item 2</a>
          <a class="nav-link" href="#item-3">Item 3</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
            <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
          </nav>
        </nav>
      </nav>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" class="scrollspy-example-2" tabindex="0">
        <h4 id="item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-1-1">Item 1-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-1-2">Item 1-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-3-1">Item 3-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-3-2">Item 3-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
    </div>
  </div>
</div>

```html
<nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <nav class="nav nav-pills flex-column">
    <a class="nav-link" href="#item-1">Item 1</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
      <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav>
    <a class="nav-link" href="#item-2">Item 2</a>
    <a class="nav-link" href="#item-3">Item 3</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
      <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav>
  </nav>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
  <h4 id="item-1">Item 1</h4>
  <p>...</p>
  <h5 id="item-1-1">Item 1-1</h5>
  <p>...</p>
  <h5 id="item-1-2">Item 1-2</h5>
  <p>...</p>
  <h4 id="item-2">Item 2</h4>
  <p>...</p>
  <h4 id="item-3">Item 3</h4>
  <p>...</p>
  <h5 id="item-3-1">Item 3-1</h5>
  <p>...</p>
  <h5 id="item-3-2">Item 3-2</h5>
  <p>...</p>
</div>
```

## Example with list-group

스크롤 스파이는 `.list-group`에서도 동작합니다. 목록 그룹 옆의 영역을 스크롤해서 활성화 된 클래스가 변화하는 것을 보겠습니다.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <h4 id="list-item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="list-item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="list-item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="list-item-4">Item 4</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
    </div>
  </div>
</div>

```html
<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
</div>
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="list-item-1">Item 1</h4>
  <p>...</p>
  <h4 id="list-item-2">Item 2</h4>
  <p>...</p>
  <h4 id="list-item-3">Item 3</h4>
  <p>...</p>
  <h4 id="list-item-4">Item 4</h4>
  <p>...</p>
</div>
```

## Usage

### Via data attributes

topbar 내비게이션에 스크롤 스파이 동작을 간단하게 추가하려면, 스크롤 스파이 하고 싶은 요소에 `data-bs-spy="scroll"`를 추가합니다(가장 전형적으로는 `<body>`입니다). 그 다음에 `data-bs-target` 속성에 임의의 Bootstrap `.nav` 컴포넌트의 부모 요소의 ID 또는 클래스를 추가합니다.

```css
body {
  position: relative;
}
```

```html
<body data-bs-spy="scroll" data-bs-target="#navbar-example">
  ...
  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
      ...
    </ul>
  </div>
  ...
</body>
```

### Via JavaScript

CSS에 `position: relative;`를 추가한 뒤, JavaScript로 스크롤 스파이를 호출합니다:

```js
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})
```

{{< callout danger >}}
#### Resolvable ID targets required

Navbar 링크는 해결 가능한 id 타겟을 가져야 합니다. 예를 들면, `<a href="#home">home</a>`은 `<div id="home"></div>`와 같은 DOM 내의 무엇인가에 있지 않으면 안됩니다.
{{< /callout >}}

{{< callout info >}}
#### Non-visible target elements ignored

표시되지 않는 타겟 요소는 무시되며 대응 nav 아이템은 강조 표시되지 않습니다.
{{< /callout >}}

### Methods

#### refresh

DOM에서 요소의 추가나 삭제와 동시에 스크롤 스파이를 사용할 경우 다음과 같이 refresh 메소드를 호출해야 합니다:

```js
var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})
```

#### dispose

요소의 스크롤 스파이를 없앱니다.(DOM 요소에 저장되어 있는 데이타를 삭제)

#### getInstance

DOM 요소와 관련된 스크롤 스파이 인스턴스를 취득할 수 있도록 하는 *Static* 메소드.

```js
var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance
```

### Options

옵션은 data 속성 또는 JavaScript로 줄 수 있습니다. data 속성인 경우는 `data-bs-offset=""` 처럼 `data-bs-`에 옵션명을 추가합니다.

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
      <td><code>offset</code></td>
      <td>number</td>
      <td><code>10</code></td>
      <td>스크롤 위치 계산 시 위에서 offset 하는 픽셀.</td>
    </tr>
    <tr>
      <td><code>method</code></td>
      <td>string</td>
      <td><code>auto</code></td>
      <td>검출된 요소가 어느 섹션에 있는지를 찾습니다. <code>auto</code> 는 스크롤 좌표를 취득하기 위한 가장 좋은 방법입니다. <code>offset</code> 는 스크롤 좌표를 취득하기 위해서 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect"><code>Element.getBoundingClientRect()</code></a> 메소드를 사용합니다. <code>position</code> 은 <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop"><code>HTMLElement.offsetTop</code></a> 과 <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft"><code>HTMLElement.offsetLeft</code></a> 속성을 사용해 스크롤 좌표를 취득합니다.</td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>string | jQuery object | DOM element</td>
      <td></td>
      <td>스크롤 스파이 플러그인을 적용할 요소를 지정합니다.</td>
    </tr>
  </tbody>
</table>

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
      <td><code>activate.bs.scrollspy</code></td>
      <td>이 이벤트는 새로운 아이템이 스크롤 스파이에 의해 활성화 될 때마다 스크롤 요소에서 발생합니다.</td>
    </tr>
  </tbody>
</table>

```js
var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
  // do something...
})
```
