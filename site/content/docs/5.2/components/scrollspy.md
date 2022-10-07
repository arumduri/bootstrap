---
layout: docs
title: 스크롤스파이
title_en: Scrollspy
description: 스크롤 위치에 따라 Bootstrap 내비게이션 또는 목록 그룹 컴포넌트를 자동으로 갱신하여 뷰포트 내에서 현재 어떤 링크가 활성화 된지를 나타냅니다.
group: components
toc: true
---

## 작동 원리

Scrollspy toggles the `.active` class on anchor (`<a>`) elements when the element with the `id` referenced by the anchor's `href` is scrolled into view. Scrollspy is best used in conjunction with a Bootstrap [nav component]({{< docsref "/components/navs-tabs" >}}) or [list group]({{< docsref "/components/list-group" >}}), but it will also work with any anchor elements in the current page. Here's how it works.

- To start, scrollspy requires two things: a navigation, list group, or a simple set of links, plus a scrollable container. The scrollable container can be the `<body>` or a custom element with a set `height` and `overflow-y: scroll`.

- On the scrollable container, add `data-bs-spy="scroll"` and `data-bs-target="#navId"` where `navId` is the unique `id` of the associated navigation. Be sure to also include a `tabindex="0"` to ensure keyboard access.

- As you scroll the "spied" container, an `.active` class is added and removed from anchor links within the associated navigation. Links must have resolvable `id` targets, otherwise they're ignored. For example, a `<a href="#home">home</a>` must correspond to something in the DOM like `<div id="home"></div>`

- Target elements that are not visible will be ignored. See the [Non-visible elements](#non-visible-elements) section below.

## 예시

### Navbar

내비게이션 바 아래 영역을 스크롤하여 활성화된 클래스의 변화를 살펴보세요. 드롭다운 메뉴를 열면 드롭다운 아이템도 같이 강조 표시됩니다.

<div class="bd-example">
  <nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
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
  <div class="scrollspy-example bg-light p-3 rounded-2" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
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
<nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
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
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
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

### Nested nav

스크롤 스파이는 중첩된 `.nav`에서도 동작합니다. 중첩 된 `.nav`가 `.active`인 경우, 그 부모도 `.active`가 됩니다. 내비게이션 바 옆 영역을 스크롤해서 활성화 된 클래스의 변화를 살펴보세요.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
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
      <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
        <div id="item-1">
          <h4>Item 1</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
        </div>
        <div id="item-1-1">
          <h5>Item 1-1</h5>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
        </div>
        <div id="item-1-2">
          <h5>Item 1-2</h5>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
        </div>
        <div id="item-2">
          <h4>Item 2</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
        </div>
        <div id="item-3">
          <h4>Item 3</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
        </div>
        <div id="item-3-1">
          <h5>Item 3-1</h5>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
        </div>
        <div id="item-3-2">
          <h5>Item 3-2</h5>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-4">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
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
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>Item 1</h4>
        <p>...</p>
      </div>
      <div id="item-1-1">
        <h5>Item 1-1</h5>
        <p>...</p>
      </div>
      <div id="item-1-2">
        <h5>Item 1-2</h5>
        <p>...</p>
      </div>
      <div id="item-2">
        <h4>Item 2</h4>
        <p>...</p>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
        <p>...</p>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
        <p>...</p>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
        <p>...</p>
      </div>
    </div>
  </div>
</div>
```

### List group

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
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
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
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Item 1</h4>
      <p>...</p>
      <h4 id="list-item-2">Item 2</h4>
      <p>...</p>
      <h4 id="list-item-3">Item 3</h4>
      <p>...</p>
      <h4 id="list-item-4">Item 4</h4>
      <p>...</p>
    </div>
  </div>
</div>
```

### Simple anchors

Scrollspy is not limited to nav components and list groups, so it will work on any `<a>` anchor elements in the current document. Scroll the area and watch the `.active` class change.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
        <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
        <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
        <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
        <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
        <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
        <h4 id="simple-list-item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="simple-list-item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="simple-list-item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="simple-list-item-4">Item 4</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="simple-list-item-5">Item 5</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-4">
    <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
      <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
      <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
      <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
      <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
      <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="simple-list-item-1">Item 1</h4>
      <p>...</p>
      <h4 id="simple-list-item-2">Item 2</h4>
      <p>...</p>
      <h4 id="simple-list-item-3">Item 3</h4>
      <p>...</p>
      <h4 id="simple-list-item-4">Item 4</h4>
      <p>...</p>
      <h4 id="simple-list-item-5">Item 5</h4>
      <p>...</p>
    </div>
  </div>
</div>
```

## Non-visible elements

Target elements that aren’t visible will be ignored and their corresponding nav items won't receive an `.active` class. Scrollspy instances initialized in a non-visible wrapper will ignore all target elements. Use the `refresh` method to check for observable elements once the wrapper becomes visible.

```js
document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
  el.addEventListener('shown.bs.tab', () => {
    const target = el.getAttribute('data-bs-target')
    const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
  })
})
```

## 사용 방법

### 데이터 속성 사용하기

topbar 내비게이션에 스크롤 스파이 동작을 간단하게 추가하려면, 스크롤 스파이 하고 싶은 요소에 `data-bs-spy="scroll"`를 추가합니다 (가장 전형적으로는 `<body>`입니다). 그 다음에 `data-bs-target` 속성에 임의의 Bootstrap `.nav` 컴포넌트의 부모 요소의 `id` 또는 클래스를 추가합니다.

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

### JavaScript 사용하기

```js
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})
```

### 옵션

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `rootMargin` | string | `0px 0px -25%` | Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) valid units, when calculating scroll position. |
| `smoothScroll` | boolean | `false` | Enables smooth scrolling when a user clicks on a link that refers to ScrollSpy observables. |
| `target` | string, DOM element | `null` | Specifies element to apply Scrollspy plugin. |
| `threshold` | array | `[0.1, 0.5, 1]` | `IntersectionObserver` [threshold](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold) valid input, when calculating scroll position. |

{{< /bs-table >}}

{{< callout warning >}}
**지원 중단**

Up until v5.1.3 we were using `offset` & `method` options, which are now deprecated and replaced by `rootMargin`.
To keep backwards compatibility, we will continue to parse a given `offset` to `rootMargin`, but this feature will be removed in **v6**.
{{< /callout >}}

### 메소드

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's scrollspy. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method to get the scrollspy instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method to get the scrollspy instance associated with a DOM element, or to create a new one in case it wasn't initialized. |
| `refresh` | When adding or removing elements in the DOM, you'll need to call the refresh method. |
{{< /bs-table >}}

Here's an example using the refresh method:

```js
const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
dataSpyList.forEach(dataSpyEl => {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})
```

### 이벤트

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `activate.bs.scrollspy` | This event fires on the scroll element whenever an anchor is activated by the scrollspy. |
{{< /bs-table >}}

```js
const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
  // do something...
})
```
