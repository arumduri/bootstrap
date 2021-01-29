---
layout: docs
title: Toasts(토스트)
description: 가볍고 쉽게 커스터마이즈할 수 있는 경고창을 푸시 공지합니다.
group: components
toc: true
---

Toasts는 모바일 및 데스크톱 운영 체제에서 보급된 푸시 알림을 모방하여 설계된 가벼운 알림입니다. flexbox로 만들어져 있어 위치 조정 및 배치가 간단합니다.

## Overview

Toast plugin을 사용할 때 알아두어야 할 사항:

- Toasts는 퍼포먼스상의 이유로 opt-in 방식으로 되어 있기 때문에 **스스로 초기화**해야 합니다.
- Toasts는 `autohide: false`를 지정하지 않으면 자동으로 숨겨집니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Examples

### Basic

Toasts의 확장성과 예측 가능성을 높이기 위해 header와 body 사용을 권장합나디. Toasts header는 `display: flex`를 사용하고 있으며, margin 과 flexbox 유틸리티를 통해 컨텐츠를 쉽게 정렬시킬 수 있습니다.

Toasts는 필요에 따라 유연하게 대응할 수 있으며 필요한 마크업은 거의 없습니다. Toasts 컨텐츠를 포함하는 요소가 최소 하나는 있어야 하고 닫기 버튼은 강력히 권장합니다.

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

### Translucent

Toasts는 약간 반투명해서 상단에 표시되는 것은 무엇이든 녹여져 보여집니다.  CSS 속성 `backdrop-filter`를 지원하는 브라우저에서는 Toasts 하단에 있는 요소를 흐려 보이게 하겠습니다.

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

Toasts를 `toast container`로 감싸면 여러개 사용할 수 있습니다.

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

Toasts 안의 일부 요소를 삭제, [utilities]({{< docsref "/utilities/api" >}})를 통한 미세한 수정, 마크업을 추가 수정해서 Toasts를 새롭게 만들수 있습니다. 여기에서는, `.toast-header`를 삭제하고, [Bootstrap Icons]({{< param icons >}})에 있는 닫기 아이콘을 추가하고, 레이아웃을 조정하기 위해 [flexbox utilities]({{< docsref "/utilities/flex" >}})을 몇가지 사용해서 보다 간단한 Toasts를 만들어 보았습니다.

{{< example class="bg-light" >}}
<div class="toast d-flex align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
  <button type="button" class="btn-close ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
{{< /example >}}

또는 Toasts에 추가적인 컨트롤이나 컨포넌트를 추가할 수도 있습니다.

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

위의 예시를 바탕으로, [color utilities]({{< docsref "/utilities/colors" >}})를 사용해 다른 컬러의 Toasts를 만들수 있습니다. 여기에서는, Toasts에 `.bg-primary` 와 `.text-white` 를 추가하고, 닫기 버튼에 `.text-white`를 추가했습니다. 모서리를 선명하게 하기 위해 기본 border를 `.border-0`.으로 삭제했습니다.

{{< example class="bg-light" >}}
<div class="toast d-flex align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
  <button type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
{{< /example >}}

## Placement

필요에 따라 사용자 지정 CSS로 Toasts를 배치합니다. 우측 상단은 알림용으로 사용되는 경우가 많으며, 상단 중앙도 마찬가지입니다. 한번에 하나의 Toasts 밖에 표시하지 않는다면, 배치 스타일을 `.toast`의 오른쪽에 넣어주세요.

{{< example >}}
<form>
  <div class="form-group mb-3">
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

더 많은 알림을 만드는 시스템에서는 쉽게 쌓이게 하도록 wrapping 요소의 사용을 검토하십시오.

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

또한 flexbox 유틸리티를 사용해서 Toasts를 수평방향이나 수직방향으로 정렬시킬 수도 있습니다.

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

Toasts는 방문자나 사용자에게 작은 중단을 의도하므로 스크린 리더나 비슷한 지원 기술을 가진 사용자를 지원하기 위해 Toasts를 [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)으로 감싸야 합니다. 라이브 리전으로의 업데이트(Toasts 컨포넌트 주입/업데이트 등)는 사용자의 포커스를 이동시키거나 사용자를 중단시키지 않고 스크린 리더가 자동으로 안내합니다. 그리고 변경된 내용을 안내하지 말고 Toasts 전체가 항상 싱글(원자적인) 단위로 안내하도록 `aria-atomic="true"`를 포함시켜 주십시오(만약 Toasts의 컨텐츠 중 일부만 업데이트 한다면 문제가 발생할 가능성이 있습니다). 필요한 정보가 예를 들어 폼의 오류 리스트 같이 프로세스에 중요한 경우, Toasts 대신 [alert component]({{< docsref "/components/alerts" >}})를 사용하십시오.

Toasts가 생성되거나 업데이트 되기 *전*에 라이브리전이 마크업에 존재해야 한다는 점에 주의하십시오. 두가지를 동시에 동적으로 생성하여 페이지에 주입하면 일반적으로 지원기술을 통해 공지되지 않습니다.

그리고, 내용에 따라 `role` 과 `aria-live` 레벨을 적응시킬 필요가 있습니다. 만약 오류와 같은 중요한 메세지라면 `role="alert" aria-live="assertive"` 속성을 사용하고, 그렇지 않으면 `role="status" aria-live="polite"` 속성을 사용합니다.

표시하는 내용이 변경될 경우, 사람들이 Toasts를 읽을 충분한 시간을 갖도록 [`delay` timeout](#options) 를 업데이트 하십시오.

```html
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-bs-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```

`autohide: false`를 사용할 때에는, 사용자가 Toast를 해제할 수 있도록 닫기 버튼을 추가해야 합니다.

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

## JavaScript behavior

### Usage

JavaScript를 통해 Toast 초기화:

```js
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})
```

### Options

옵션은 데이터 속성이나 JavaScript를 통해 전달될 수 있습니다. 데이터 속성의 경우 `data-bs-animation=""`와 같이 옵션 이름에 `data-bs-`를 추가하십시오.

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
      <td>Apply a CSS fade transition to the toast</td>
    </tr>
    <tr>
      <td><code>autohide</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Auto hide the toast</td>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>number</td>
      <td>
        <code>5000</code>
      </td>
      <td>Delay hiding the toast (ms)</td>
    </tr>
  </tbody>
</table>

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### show

Reveals an element's toast. **Returns to the caller before the toast has actually been shown** (i.e. before the `shown.bs.toast` event occurs).
You have to manually call this method, instead your toast won't show.

```js
toast.show()
```

#### hide

Hides an element's toast. **Returns to the caller before the toast has actually been hidden** (i.e. before the `hidden.bs.toast` event occurs). You have to manually call this method if you made `autohide` to `false`.

```js
toast.hide()
```

#### dispose

Hides an element's toast. Your toast will remain on the DOM but won't show anymore.

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
      <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
      <td><code>shown.bs.toast</code></td>
      <td>This event is fired when the toast has been made visible to the user.</td>
    </tr>
    <tr>
      <td><code>hide.bs.toast</code></td>
      <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.toast</code></td>
      <td>This event is fired when the toast has finished being hidden from the user.</td>
    </tr>
  </tbody>
</table>

```js
var myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.bs.toast', function () {
  // do something...
})
```
