---
layout: docs
title: List group(목록 그룹)
description: 목록 그룹은 일련의 콘텐츠를 보여주기 위한 유연하고 강력한 컴포넌트입니다. 그룹을 변경하거나 확장하여 모든 콘텐츠를 지원합니다.
group: components
toc: true
---

## Basic example

가장 기본적인 목록 그룹은 목록 아이템과 적절한 클래스를 가진 순서없는 목록입니다. 이하의 옵션을 사용해, 혹은 필요에 따라서 독자적인 CSS 를 사용해 만듭니다.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{< /example >}}

## Active items

현재 활성화 된 선택 범위를 나타내기 위해 `.list-group-item` 에 `.active`를 추가합니다.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{< /example >}}

## Disabled items

`.list-group-item` 에 `.disabled`를 추가하면, 비활성화되어 있는 것처럼 보입니다. `.disabled`를 가진 요소 중에는 클릭 이벤트(링크 등)를 완전히 비활성화하기 위해 사용자 정의 JavaScript를 사용해야 합니다.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{< /example >}}

## Links and buttons

_actionable_ 한 목록 그룹 아이템을 작성하려면 `<a>` 나 `<button>` 을 사용하고, `.list-group-item-action` 을 추가합니다. 비인터랙티브한 요소(`<li>` 혹은 `<div>`와 같은)로 만들어진 목록 그룹이 클릭이나 탭 어포던스를 제공하지 않도록, 이러한 가상 클래스를 분리하고 있습니다.

여기에서는 **표준의 `.btn` 클래스를 사용하지 않도록 주의해 주세요**.

{{< example >}}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
</div>
{{< /example >}}

`<button>` 에서는 `.disabled` 클래스 대신에 `disabled` 속성을 사용할 수도 있습니다. 유감스럽게도, `<a>` 는 disabled 속성을 지원하지 않습니다.

{{< example >}}
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action">A second item</button>
  <button type="button" class="list-group-item list-group-item-action">A third button item</button>
  <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
</div>
{{< /example >}}

## Flush

`.list-group-flush`를 추가하고, 부모 컨테이너(카드 등) 내의 목록 그룹의 아이템을 끝에서 끝까지 표시하기 위해 몇개의 라인과 둥근 모서리를 제거하도록 합니다.

{{< example >}}
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{< /example >}}

## Numbered

`.list-group-numbered`라는 수식어 클래스(와 옵션에서 `<ol>`요소를 사용하여)를 추가하여 숫자 목록 리스트 그룹을 만들 수 있습니다. 숫자는(`<ol>`의 브라우저 기본 스타일링이 아닌) CSS에 의해 추가되므로 목록 그룹 아이템 내에서 배치가 간단하고 재정의하기도 쉬워집니다.

숫자는 `<ol>`의 `counter-increment`에 의해 생성되며 `counter-increment`와 콘텐츠를 가진 `<li>`의 `::before` 가상 요소를 사용하여 스타일링되고 배치됩니다.

{{< example >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Cras justo odio</li>
</ol>
{{< /example >}}

이들은 사용자 정의 콘텐츠와도 잘 어울립니다.

{{< example >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>
{{< /example >}}

## Horizontal

목록 그룹의 아이템 레이아웃을 모든 브레이크 포인트에서 수직에서 수평으로 변경하려면 `.list-group-horizontal` 을 추가합니다. 혹은 반응형 변수 `.list-group-horizontal-{sm|md|lg|xl|xxl}`를 선택하고 브레이크 포인트의 `min-width` 로 시작하는 목록 그룹을 수평으로 합니다. 현재 **수평 목록 그룹을 flush 목록 그룹과 조합할 수 없습니다.**

**꿀팁:** 목록 그룹의 아이템을 수평 방향의 동일한 너비로 하고 싶을 경우, 목록 그룹의 각 아이템에 `.flex-fill` 을 추가합니다.

{{< example >}}
{{< list-group.inline >}}
{{- range $.Site.Data.breakpoints }}
<ul class="list-group list-group-horizontal{{ .abbr }}">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
{{- end -}}
{{< /list-group.inline >}}
{{< /example >}}

## Contextual classes

상황별 클래스를 사용하여, 스테이트풀(stateful)한 배경색과 글자색으로 목록 아이템을 꾸밉니다.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
{{< list.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <li class="list-group-item list-group-item-{{ .name }}">A simple {{ .name }} list group item</li>
{{- end -}}
{{< /list.inline >}}
</ul>
{{< /example >}}

상황별 클래스는 `.list-group-item-action`에도 동작합니다. 이전 예시에서 볼 수 없었던 호버 스타일이 추가 되었음을 주의하세요. 또 `.active` 상태도 지원되고 있습니다. 이것을 적용해 상황별 목록 그룹 아이템에서 활성화 된 선택을 나타낼 수 있습니다.

{{< example >}}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
{{< list.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <a href="#" class="list-group-item list-group-item-action list-group-item-{{ .name }}">A simple {{ .name }} list group item</a>
{{- end -}}
{{< /list.inline >}}
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## With badges

[utilities]({{< docsref "/utilities/flex" >}})를 사용해, 아직 읽지 않은 수나 액티비티 등을 표시하기 위한 배지를 목록 그룹의 아이템에 추가합니다.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
{{< /example >}}

## Custom content

[flexbox utilities]({{< docsref "/utilities/flex" >}})의 도움을 받아 아래와 같은 링크된 목록 그룹에서도 거의 모든 HTML를 추가할 수 있습니다.

{{< example >}}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
</div>
{{< /example >}}

## Checkboxes and radios

목록 그룹 아이템 내에 Bootstrap 체크 박스와 라디오 버튼을 배치하고 필요에 따라 재정의 합니다. `<label>` 없이도 사용이 가능하지만 접근성을 위해 `aria-label` 속성과 값을 포함시켜 주세요.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    First checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Second checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Third checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fourth checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fifth checkbox
  </li>
</ul>
{{< /example >}}

그리고 넓은 선택 영역을 위해 `<label>`을 `.list-group-item`으로 사용하고 싶은 경우, 아래와 같이 사용 가능합니다.

{{< example >}}
<div class="list-group">
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    First checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Second checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Third checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Fourth checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Fifth checkbox
  </label>
</div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="list-group-variables" file="scss/_variables.scss" >}}

### Mixins

`.list-group-item`의 [contextual variant classes](#contextual-classes)를 생성하기 위해 `$theme-colors`와 조합하여 사용됩니다.

{{< scss-docs name="list-group-mixin" file="scss/mixins/_list-group.scss" >}}

### Loop

믹스인 `list-group-item-variant()`를 사용하여 수식어 클래스를 생성하는 반복문입니다.

{{< scss-docs name="list-group-modifiers" file="scss/_list-group.scss" >}}

## JavaScript behavior

탭 JavaScript 플러그인—개별적으로 혹은 컴파일된 `bootstrap.js`를 사용해 목록 그룹을 확장하고 로컬 콘텐츠의 탭 가능한 판넬을 작성합니다.

<div class="bd-example" role="tabpanel">
  <div class="row">
    <div class="col-4">
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="tab" href="#list-home" role="tab" aria-controls="list-home">Home</a>
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="tab" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="tab" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="tab" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <p>Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <p>Some placeholder content in a paragraph relating to "Profile". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <p>Some placeholder content in a paragraph relating to "Messages". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
          <p>Some placeholder content in a paragraph relating to "Settings". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
```

### Using data attributes

JavaScript를 쓰지 않아도, `data-bs-toggle="list"`를 지정하거나 요소로 지정만 해도 목록 그룹 내비게이션을 활성화 시킬 수 있습니다. 이들의 data 속성을 `.list-group-item`에 이용합니다.

```html
<div role="tabpanel">
  <!-- List group -->
  <div class="list-group" id="myList" role="tablist">
    <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">Home</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#profile" role="tab">Profile</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#messages" role="tab">Messages</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab">Settings</a>
  </div>

  <!-- Tab panes -->
  <div class="tab-content">
    <div class="tab-pane active" id="home" role="tabpanel">...</div>
    <div class="tab-pane" id="profile" role="tabpanel">...</div>
    <div class="tab-pane" id="messages" role="tabpanel">...</div>
    <div class="tab-pane" id="settings" role="tabpanel">...</div>
  </div>
</div>
```

### Via JavaScript

JavaScript로 탭 가능한 목록 아이템을 유효하게 합니다.(각 목록 아이템을 개별적으로 유효하게 할 필요가 있습니다):

```js
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

각각의 목록 아이템을 여러 가지 방법으로 활성화 할 수 있습니다:

```js
var triggerEl = document.querySelector('#myTab a[href="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

var triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
```

### Fade effect

탭 판넬을 페이드인 시키려면 `.tab-pane` 에 `.fade`를 추가합니다. 첫번째 탭 판넬에는 첫번째 콘텐츠를 표시하기 위해서 `.show`를 추가 할 필요가 있습니다.

```html
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel">...</div>
</div>
```

### Methods

#### constructor

목록 아이템 요소와 콘텐츠 컨테이너를 활성화 시킵니다. 탭에는 DOM 내의 컨테이너 노드를 타겟으로 하는 `data-bs-target` 또는 `href` 가 필요합니다.

```html
<div class="list-group" id="myList" role="tablist">
  <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">Home</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#profile" role="tab">Profile</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#messages" role="tab">Messages</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab">Settings</a>
</div>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">...</div>
  <div class="tab-pane" id="profile" role="tabpanel">...</div>
  <div class="tab-pane" id="messages" role="tabpanel">...</div>
  <div class="tab-pane" id="settings" role="tabpanel">...</div>
</div>

<script>
  var firstTabEl = document.querySelector('#myTab a:last-child')
  var firstTab = new bootstrap.Tab(firstTabEl)

  firstTab.show()
</script>
```

#### show

지정된 목록 아이템을 선택하고 관련 판넬을 표시합니다. 이전에 선택되었던 다른 목록 아이템은 선택되지 않은 상태로 돌아가고, 관련된 판넬은 숨김이 됩니다. 탭 판넬이 실제로 표시되기 전에 호출한 곳으로 돌아갑니다(예를 들어, `shown.bs.tab` 이벤트가 발생하기 전 등)

```js
  var someListItemEl = document.querySelector('#someListItem')
  var tab = new bootstrap.Tab(someListItemEl)

  tab.show()
```

#### dispose

요소의 탭을 없앱니다.

#### getInstance

DOM 요소와 연관된 탭의 인스턴스를 가져오는 *Static* 메소드입니다.

```js
var triggerEl = document.querySelector('#trigger')
var tab = bootstrap.Tab.getInstance(triggerEl) // Returns a Bootstrap tab instance
```

### Events

새로운 탭을 표시하면, 아래의 순서대로 이벤트가 발생합니다:

1. `hide.bs.tab` (현재 활성 탭)
2. `show.bs.tab` (표시되는 탭)
3. `hidden.bs.tab` (이전 활성화 탭에서 `hide.bs.tab` 이벤트 동일)
4. `shown.bs.tab` (새로 활성화 된 지 얼마 안 된 탭으로 `show.bs.tab` 이벤트와 동일)

이미 활성화 된 탭이 없는 경우, `hide.bs.tab`와 `hidden.bs.tab` 이벤트는 발생하지 않습니다.

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Event type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.tab</code></td>
      <td>이 이벤트는 탭 표시시 발생하는데, 새로운 탭이 표시되기 전에 발생합니다. <code>event.target</code> 과 <code>event.relatedTarget</code> 을 사용하여 각각 활성화된 탭과 이전의 활성화된 탭(이용 가능한 경우)을 타겟으로 합니다.</td>
    </tr>
    <tr>
      <td><code>shown.bs.tab</code></td>
      <td>이 이벤트는 탭이 표시된 이후 탭을 표시할 때 발생합니다. <code>event.target</code> 과 <code>event.relatedTarget</code> 을 사용하여 각각 활성화된 탭과 이전의 활성화된 탭(이용 가능한 경우)을 타겟으로 합니다.</td>
    </tr>
    <tr>
      <td><code>hide.bs.tab</code></td>
      <td>이 이벤트는 새로운 탭이 표시될(따라서 이전에 활성화 한 탭이 숨겨집니다) 때 발생합니다. <code>event.target</code> 과 <code>event.relatedTarget</code> 을 사용하여 각각 현재 활성화된 탭과 곧 활성화 될 새로운 탭을 타겟으로 합니다.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.tab</code></td>
      <td>이 이벤트는 새로운 탭이 표시된 후에 발생합니다(따라서 이전 활성화 탭은 숨겨집니다). <code>event.target</code> 과 <code>event.relatedTarget</code> 를 사용하여 각각 이전 활성화 탭과 새로운 활성화 탭을 타겟으로 합니다.</td>
    </tr>
  </tbody>
</table>

```js
var tabEl = document.querySelector('a[data-bs-toggle="list"]')
tabEl.addEventListener('shown.bs.tab', function (event) {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
})
```
