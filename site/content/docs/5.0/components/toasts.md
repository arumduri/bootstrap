---
layout: docs
title: Toasts(토스트)
description: 가볍고 쉽게 재정의할 수 있는 알림메시로 푸시 알림을 보냅니다.
group: components
toc: true
---

토스트는 모바일 및 데스크톱 운영 체제에서 보급된 푸시 알림을 모방하여 설계된 가벼운 알림창 입니다. Flexbox로 만들어져 있어 위치 조정 및 배치가 간단합니다.

## Overview

토스트 플러그인을 사용할 때 알아두어야 할 사항:

- 토스트는 퍼포먼스상의 이유로 opt-in 방식으로 되어 있기 때문에 **스스로 초기화**해야 합니다.
- 토스트는 `autohide: false`를 지정하지 않으면 자동으로 숨겨집니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Examples

### Basic

토스트의 확장성과 예측 가능성을 높이기 위해 header와 body 사용을 권장합나디. 토스트의 header는 `display: flex` 를 사용하고 있으며, margin 과 flexbox 유틸리티를 통해 콘텐츠를 쉽게 정렬시킬 수 있습니다.

토스트는 필요에 따라 유연하게 대응할 수 있으며 필요한 마크업은 거의 없습니다. 토스트 콘텐츠를 포함하는 요소가 최소 하나는 있어야 하고 닫기 버튼은 강력히 권장합니다.

{{< example class="bg-light" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{{< /example >}}

### Live

아래의 버튼을 클릭하면 `.hide`를 사용해 기본적으로 숨겨져 있던 (유틸리티를 사용해 오른쪽 아래에 배치한)토스트가 표시됩니다.

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
</div>

```html
<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
```

### Translucent

토스트는 아래의 콘텐츠와 어울려져 보이도록 약간 비치게 보여집니다.

{{< example class="bg-dark" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-muted">11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{{< /example >}}

### Stacking

토스트를 `toast container`로 감싸면 여러개 사용할 수 있습니다.

{{< example class="bg-light" >}}
<div class="toast-container">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-muted">just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      See? Just like this.
    </div>
  </div>

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-muted">2 seconds ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>
</div>
{{< /example >}}

### Custom content

서브 컴포넌트를 삭제하거나, [utilities]({{< docsref "/utilities/api" >}})로 조정하거나, 독자적인 마크업을 추가하여 토스트를 재정의 할 수 있습니다. 아래 예시에서는, 기본 제공하는 `.toast-header`를 삭제하고 [Bootstrap Icons]({{< param icons >}})을 사용하여 사용자 정의 숨김 아이콘을 추가하고 [flexbox utilities]({{< docsref "/utilities/flex" >}})로 레이아웃을 조정해 보다 간단한 토스트를 만들고 있습니다.

{{< example class="bg-light" >}}
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
    Hello, world! This is a toast message.
   </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
{{< /example >}}

또는 토스트에 추가적인 컨트롤이나 컴포넌트를 추가할 수도 있습니다.

{{< example class="bg-light" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Take action</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
    </div>
  </div>
</div>
{{< /example >}}

### Color schemes

위의 예시를 바탕으로 [color]({{< docsref "/utilities/colors" >}})와 [background]({{< docsref "/utilities/background" >}}) 유틸리티를 사용해 다른 토스트의 색상 배합을 만들 수 있습니다. 여기에서는 `.toast`에 `.bg-primary`와 `.text-white`를 추가하고, 닫기 버튼에는 `.btn-close-white`를 추가하고 있습니다. 선명한 모서리를 보여주기 위해 `.border-0`을 추가해 기본으로 제공한 모서리를 삭제하고 있습니다.

{{< example class="bg-light" >}}
<div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
{{< /example >}}

## Placement

필요에 따라 사용자 지정 CSS로 토스트를 배치시킵니다. 우측 상단은 알림용으로 사용되는 경우가 많으며, 상단 중앙도 마찬가지입니다. 한번에 하나의 토스트 밖에 표시하지 않는다면, 배치 스타일을 `.toast`의 오른쪽에 넣어주세요.

{{< example >}}
<form>
  <div class="mb-3">
    <label for="selectToastPlacement">Toast placement</label>
    <select class="form-select mt-2" id="selectToastPlacement">
      <option value="" selected>Select a position...</option>
      <option value="top-0 start-0">Top left</option>
      <option value="top-0 start-50 translate-middle-x">Top center</option>
      <option value="top-0 end-0">Top right</option>
      <option value="top-50 start-0 translate-middle-y">Middle left</option>
      <option value="top-50 start-50 translate-middle">Middle center</option>
      <option value="top-50 end-0 translate-middle-y">Middle right</option>
      <option value="bottom-0 start-0">Bottom left</option>
      <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
      <option value="bottom-0 end-0">Bottom right</option>
    </select>
  </div>
</form>
<div aria-live="polite" aria-atomic="true" class="bg-dark position-relative bd-example-toasts">
  <div class="toast-container position-absolute p-3" id="toastPlacement">
    <div class="toast">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>
{{< /example >}}

더 많은 알림을 만드는 시스템에서는 쉽게 쌓이게 하도록 wrapping 요소의 사용을 검토해 주세요.

{{< example class="bg-dark bd-example-toasts p-0" >}}
<div aria-live="polite" aria-atomic="true" class="position-relative">
  <!-- Position it: -->
  <!-- - `.toast-container` for spacing between toasts -->
  <!-- - `.position-absolute`, `top-0` & `end-0` to position the toasts in the upper right corner -->
  <!-- - `.p-3` to prevent the toasts from sticking to the edge of the container  -->
  <div class="toast-container position-absolute top-0 end-0 p-3">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>
{{< /example >}}

또한 flexbox 유틸리티를 사용해서 토스트를 수평방향이나 수직방향으로 정렬시킬 수도 있습니다.

{{< example class="bg-dark bd-example-toasts d-flex" >}}
<!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  <!-- Then put toasts within -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
{{< /example >}}

## Accessibility

토스트는 방문자가 사용자에게 방해가 되지 않도록 하기 위해 스크린 리더나 동일한 지원 기술을 사용하는 사람을 돕기 위해 토스트를 [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)로 감싸줘야 합니다. 라이브 리젼으로의 변경(토스트 컴포넌트 주입/갱신 등)은 사용자의 포커스를 이동시키거나 사용자를 중단시키지 않고 스크린 리더에 의해 자동으로 안내됩니다. 게다가 `aria-atomic="true"`를 포함함으로써 변경된 내용만 안내되는것이 아니라 토스트 전체가 항상 하나의(atomic) 유닛으로서 안내되게 됩니다.(토스트의 콘텐츠 일부만을 갱신한 경우나 같은 토스트의 콘텐츠를 나중의 시점에서 표시한 경우 등 문제가 생길수 있습니다) 필요한 정보가 프로세스에 중요한 경우, 예를 들어 폼 오류 목록 등의 경우는 토스트 대신 [alert component]({{< docsref "/components/alerts" >}})를 사용해 주세요.

토스트가 생성되거나 업데이트 되기 *전*에 라이브리전이 마크업에 존재해야 한다는 점에 주의하십시오. 두가지를 동시에 동적으로 생성하여 페이지에 주입하면 일반적으로 지원기술을 통해 공지되지 않습니다.

그리고, 내용에 따라 `role` 과 `aria-live` 의 레벨을 조정할 필요가 있습니다. 만약 오류와 같은 중요한 메세지라면 `role="alert" aria-live="assertive"` 속성을 사용하고, 그렇지 않으면 `role="status" aria-live="polite"` 속성을 사용합니다.

보여지는 콘텐츠가 바뀌면 사용자가 토스트를 읽기에 충분한 시간이 필요하므로 [`delay` timeout](#options)을 반드시 업데이트 해 주세요.

```html
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-bs-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```

`autohide: false`를 사용할 때에는, 사용자가 토스트를 해제할 수 있도록 닫기 버튼을 추가해야 합니다.

{{< example class="bg-light" >}}
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-bs-autohide="false">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{{< /example >}}

기술적으로 토스트 안에 포커스나 액션이 가능한 컨트롤(추가 버튼이나 링크 등)을 추가할 수는 있지만 자동 숨김 토스트에서는 이 사용을 피해 주세요. 토스트에게 긴 [`delay` timeout](#options)를 주었다고 하더라도 키보드나 지원 기술 사용자가 알수 있게 토스트까지(토스트는 표시된 시점에는 포커스를 받지 않기 때문에) 가기는 어려울 수 있습니다. 컨트롤이 필요한 경우에는 토스트에 반드시 `autohide: false`를 사용하는 것을 권장합니다.

## Sass

### Variables

{{< scss-docs name="toast-variables" file="scss/_variables.scss" >}}

## Usage

JavaScript 를 통해 초기화:

```js
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})
```

### Options

옵션은 data 속성 또는 JavaScript로 줄 수 있습니다. data 속성의 경우 `data-bs-animation=""` 처럼 `data-bs-` 에 옵션 명을 추가합니다.

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
      <td>토스트에 CSS fade 트랜지션을 적용합니다.</td>
    </tr>
    <tr>
      <td><code>autohide</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>토스트를 자동으로 숨깁니다.</td>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>number</td>
      <td>
        <code>5000</code>
      </td>
      <td>토스트를 숨길 시간을 지정합니다.(ms)</td>
    </tr>
  </tbody>
</table>

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### show

요소의 토스트를 표시합니다. **토스트가 실제로 표시되기 전에 호출한 곳으로 돌아갑니다** (즉, `shown.bs.toast` 이벤트가 발생하기 전).
이 메소드를 수동으로 호출해야 합니다.

```js
toast.show()
```

#### hide

요소인 토스트를 숨깁니다. **토스트가 실제로 숨겨지기 전에 호출한 곳으로 돌아갑니다** (즉, `hidden.bs.toast` 이벤트가 발생하기 전). `autohide`를 `false`로 했을 경우, 이 메소드를 수동으로 호출 할 필요가 있습니다.

```js
toast.hide()
```

#### dispose

요소의 토스트를 숨깁니다. 토스트는 DOM 상에 남지만, 표시되지 않게 됩니다.

```js
toast.dispose()
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
      <td><code>show.bs.toast</code></td>
      <td>이 이벤트는 <code>show</code> 인스턴스 메소드가 호출되었을 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td><code>shown.bs.toast</code></td>
      <td>이 이벤트는 토스트가 사용자에게 표시되었을 때 발생합니다.</td>
    </tr>
    <tr>
      <td><code>hide.bs.toast</code></td>
      <td>이 이벤트는 <code>hide</code> 인스턴스 메소드가 호출되었을 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.toast</code></td>
      <td>이 이벤트는 토스트 숨김이 종료되었을 때 발생합니다.</td>
    </tr>
  </tbody>
</table>

```js
var myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.bs.toast', function () {
  // do something...
})
```
