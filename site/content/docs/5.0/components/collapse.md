---
layout: docs
title: Collapse(콜랩스)
description: 몇 가지 클래스와 JavaScript 플러그인을 사용해, 프로젝트 전체 컨텐츠의 표시 방식을 전환합니다.
group: components
toc: true
---

## How it works

Collapse(콜랩스) JavaScript 플러그인은, 컨텐츠의 표시와 숨김에 사용됩니다. 버튼 및 앵커는, 토글 하는 특정 요소에 매핑된 트리거로 사용됩니다. 요소를 접으면 `height` 가 기존 값에서 `0` 으로 애니메이션화 됩니다. CSS 가 애니메이션화를 어떻게 다룰지 감안하면, `.collapse` 요소에 `padding` 을 사용할 수 없습니다. 대신, 이 클래스를 독립된 래핑 요소로 사용합니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Example

아래의 버튼을 클릭하면, 클래스 변경에 따라 다른 요소의 표시 및 숨김을 전환할 수 있습니다.

- `.collapse` 컨텐츠를 숨깁니다.
- `.collapsing` 전환 중에 적용됩니다.
- `.collapse.show` 컨텐츠를 표시합니다.

일반적으로 우리는 버튼을 `data-bs-target` 속성과 함께 사용하기를 권장합니다. 의미론적으로는 권장하지 않지만 `href` 속성을 갖는 링크(및 `role="button"`)를 사용할 수도 있습니다. 양쪽 모두 `data-bs-toggle="collapse"`가 필요합니다.

{{< example >}}
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
{{< /example >}}

## Multiple targets

`<button>` 이나 `<a>` 는, 그 `href` 나 `data-bs-target` 속성의 셀렉터로 여러 요소를 참조 하는 것으로, 여러 개의 요소를 표시하거나 숨길 수 있습니다.
여러 개의 `<button>` 이나 `<a>` 는, 각각의 `href` 나 `data-bs-target` 속성으로 요소를 참조하고 있는 경우, 어느 요소를 표시하거나 숨길 수 있습니다.

{{< example >}}
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Accessibility

컨트롤 요소에 `aria-expanded`를 반드시 추가해 주세요. 이 속성은 컨트롤에 연결된 접을 수 있는 요소의 현재 상태를 스크린 리더나 동일한 지원 기술에 명시적으로 전달합니다. 접을 수 있는 요소가 기본적으로 닫혀있는 경우, 컨트롤 요소의 속성 값은 `aria-expanded="false"` 이어야 합니다. `show` 클래스를 사용해 접을 수 있는 요소를 기본으로 열도록 설정한 경우에는, 대신 컨트롤에 `aria-expanded="true"` 로 설정해 주십시오. 플러그인은 접을 수 있는 요소가 열려 있는지 닫혀 있는 지에 따라(JavaScript 를 통해 사용자가 접을 수 있는 요소와 관련된 별도의 요소를 트리거했기 때문에) 컨트롤 상에서 이 속성을 자동으로 바꿉니다. 컨트롤 요소의 HTML 요소가 버튼이 아닌 경우(예를 들어 `<a>` 나 `<div>` 등) 요소에 `role="button"` 속성을 추가해야 합니다.

컨트롤 요소가 하나의 접을 수 있는 요소를 타겟으로 하고 있는 경우, 즉 `data-bs-target` 속성이 `id` 셀렉터를 바라보는 경우, 접을 수 있는 요소의 `id` 를 한 `aria-controls` 속성을 컨트롤 요소에 추가하지 않으면 안됩니다. 최근 스크린 리더 및 지원 기술에서는 이 속성을 이용하여 접을 수 있는 요소 자체로 직접 이동하기 위한 단축키를 사용자에게 제공하고 있습니다.

Bootstrap의 현재 구현은, [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion)에 설명되어 있는 여러가지 *optional* 키보드 인터랙션을 커버하고 있지 않음을 주의해 주십시오. - 사용자 정의 JavaScript로 이것들을 직접 포함시켜야 합니다.

## Sass

### Variables

{{< scss-docs name="collapse-transition" file="scss/_variables.scss" >}}

### Classes

콜랩스 트랜지션 클래스는 다른 컴포넌트와 함께 사용되고 있기 때문에 `scss/_transitions.scss`에 들어있습니다. (콜랩스와 아코디언).

{{< scss-docs name="collapse-classes" file="scss/_transitions.scss" >}}

## Usage

콜랩스 플러그인은, 여러 클래스를 이용하여 중요한 작업을 처리합니다.

- `.collapse` 컨텐츠를 숨김
- `.collapse.show` 컨텐츠를 표시
- `.collapsing`은 트랜지션 시작시 추가되어, 종료시 삭제 됨

이들의 클래스는 `_transitions.scss`에 있습니다.

### Via data attributes

요소에 `data-bs-toggle="collapse"`와 `data-bs-target`만 추가하면 접을 수 있는 요소의 제어를 자동으로 할당할 수 있습니다. `data-bs-target` 속성은 접을 수 있는 CSS 셀렉터를 지정합니다. 접을 수 있는 요소에는 반드시 `collapse` 클래스를 추가해야 합니다. 기본적으로 열린 상태로 만드려면 `show` 클래스를 추가해야 합니다.

접을 수 있는 영역에 accordion(아코디언) 같은 그룹 관리를 추가하려면, 데이터 속성 `data-bs-parent="#selector"` 를 추가합니다. 데모를 참조해 주세요.

### Via JavaScript

수동으로 유효하게 하는 경우:

```js
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})
```

### Options

옵션은 JavaScript나 데이터 속성으로 줄 수 있습니다. 데이터 속성의 경우는 `data-bs-parent=""` 처럼 `data-bs-` 에 옵션 명을 추가합니다.

<table class="table">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>parent</code></td>
      <td>selector | jQuery object | DOM element </td>
      <td><code>false</code></td>
      <td>parent 가 지정된 경우, 이 접을 수 있는 아이템이 표시될때 지정된 부모 아래에 있는 접을 수 있는 모든 요소가 닫힙니다(기존 accordion(아코디언) 동작과 비슷합니다. - 이것은 <code>card</code> 클래스에 의존합니다). 속성은 접을 수 있는 타겟 영역으로 설정해야 합니다.</td>
    </tr>
    <tr>
      <td><code>toggle</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>호출 시에 접을 수 있는 요소를 토글합니다.</td>
    </tr>
  </tbody>
</table>

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

접을 수 있는 요소로서 컨텐츠를 활성화합니다. 옵션의 `object`를 받습니다.

생성자를 사용해, 콜랩스 인스턴스를 작성할 수 있습니다:

```js
var myCollapse = document.getElementById('myCollapse')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
```

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>toggle</code></td>
      <td>접을 수 있는 요소의 표시/숨김을 바꿉니다. <strong>접을 수 있는 요소가 실제로 표시 혹은 숨겨지기 전에 호출되어 원래대로 돌아갑니다.</strong> (즉, <code>shown.bs.collapse</code> 혹은 <code>hidden.bs.collapse</code> 이벤트가 발생하기 전).</td>
    </tr>
    <tr>
      <td><code>show</code></td>
      <td>접을 수 있는 요소를 표시합니다. <strong>접을 수 있는 요소가 나타나기 전에 호출하여 원래대로 돌아갑니다</strong> (예를들어, <code>shown.bs.collapse</code> 이벤트가 발생하기 전으로). </td>
    </tr>
    <tr>
      <td><code>hide</code></td>
      <td>접을 수 있는 요소를 숨깁니다. <strong>접을 수 있는 요소가 실제로 숨겨지기 전에 호출하여 원래 위치로 돌아갑니다</strong> (예를들어, <code>hidden.bs.collapse</code> 이벤트가 발생하기 전으로).</td>
    </tr>
    <tr>
      <td><code>dispose</code></td>
      <td>요소의 콜랩스를 처리합니다. (DOM 요소에 저장되어 있는 데이터를 삭제합니다)</td>
    </tr>
    <tr>
      <td><code>getInstance</code></td>
      <td>DOM 요소와 관련된 콜랩스 인스턴스를 가져오는 Static 메소드입니다.</td>
    </tr>
  </tbody>
</table>

### Events

Bootstrap의 콜랩스 클래스는, 콜랩스 기능을 후킹하기 위한 몇 가지 이벤트를 공개하고 있습니다.

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Event type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.collapse</code></td>
      <td>이 이벤트는 <code>show</code> 인스턴스 메소드가 호출될 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td><code>shown.bs.collapse</code></td>
      <td>이 이벤트는 collapse 요소가 사용자에게 보여질 때 발생합니다(CSS 트랜지션이 완료되는 것을 기다립니다).</td>
    </tr>
    <tr>
      <td><code>hide.bs.collapse</code></td>
      <td>이 이벤트는 <code>hide</code> 메소드가 호출될 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.collapse</code></td>
      <td>이 이벤트는 collapse 요소가 사용자에게 숨겨졌을 때 발생합니다(CSS 트랜지션이 완료될 때까지 기다립니다).</td>
    </tr>
  </tbody>
</table>

```js
var myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
  // do something...
})
```
