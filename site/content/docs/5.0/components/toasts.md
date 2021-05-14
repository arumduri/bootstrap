---
layout: docs
title: Toasts(토스트)
description: 가볍고 쉽게 커스터마이즈할 수 있는 알림메시로 푸시 알림을 보냅니다.
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

토스트의 확장성과 예측 가능성을 높이기 위해 header와 body 사용을 권장합나디. 토스트의 header는 `display: flex` 를 사용하고 있으며, margin 과 flexbox 유틸리티를 통해 컨텐츠를 쉽게 정렬시킬 수 있습니다.

토스트는 필요에 따라 유연하게 대응할 수 있으며 필요한 마크업은 거의 없습니다. 토스트 컨텐츠를 포함하는 요소가 최소 하나는 있어야 하고 닫기 버튼은 강력히 권장합니다.

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

Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default with `.hide`.

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

Toasts are slightly translucent to blend in with what's below them.

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

토스트를 `toast container` 로 감싸면 여러개 사용할 수 있습니다.

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

Customize your toasts by removing sub-components, tweaking them with [utilities]({{< docsref "/utilities/api" >}}), or by adding your own markup. Here we've created a simpler toast by removing the default `.toast-header`, adding a custom hide icon from [Bootstrap Icons]({{< param icons >}}), and using some [flexbox utilities]({{< docsref "/utilities/flex" >}}) to adjust the layout.

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

Building on the above example, you can create different toast color schemes with our [color]({{< docsref "/utilities/colors" >}}) and [background]({{< docsref "/utilities/background" >}}) utilities. Here we've added `.bg-primary` and `.text-white` to the `.toast`, and then added `.btn-close-white` to our close button. For a crisp edge, we remove the default border with `.border-0`.

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

필요에 따라 사용자 지정 CSS로 토스트를 배치시킵니다. 우측 상단은 알림용으로 사용되는 경우가 많으며, 상단 중앙도 마찬가지입니다. 한번에 하나의 토스트 밖에 표시하지 않는다면, 배치 스타일을 `.toast` 의 오른쪽에 넣어주세요.

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

Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user's focus or otherwise interrupt the user. Additionally, include `aria-atomic="true"` to ensure that the entire toast is always announced as a single (atomic) unit, rather than just announcing what was changed (which could lead to problems if you only update part of the toast's content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the [alert component]({{< docsref "/components/alerts" >}}) instead of toast.

토스트가 생성되거나 업데이트 되기 *전*에 라이브리전이 마크업에 존재해야 한다는 점에 주의하십시오. 두가지를 동시에 동적으로 생성하여 페이지에 주입하면 일반적으로 지원기술을 통해 공지되지 않습니다.

그리고, 내용에 따라 `role` 과 `aria-live` 의 레벨을 조정할 필요가 있습니다. 만약 오류와 같은 중요한 메세지라면 `role="alert" aria-live="assertive"` 속성을 사용하고, 그렇지 않으면 `role="status" aria-live="polite"` 속성을 사용합니다.

As the content you're displaying changes, be sure to update the [`delay` timeout](#options) so that users have enough time to read the toast.

```html
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-bs-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```

`autohide: false` 를 사용할 때에는, 사용자가 토스트를 해제할 수 있도록 닫기 버튼을 추가해야 합니다.

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

While technically it's possible to add focusable/actionable controls (such as additional buttons or links) in your toast, you should avoid doing this for autohiding toasts. Even if you give the toast a long [`delay` timeout](#options), keyboard and assistive technology users may find it difficult to reach the toast in time to take action (since toasts don't receive focus when they are displayed). If you absolutely must have further controls, we recommend using a toast with `autohide: false`.

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

옵션은 data 속성 또는 JavaScript로 줄 수 있습니다. data 속성의 경우 `data-bs-animation=""` 처럼 `data-bs-` 에 옵션명을 추가합니다.

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

요소인 토스트를 숨깁니다. **토스트가 실제로 숨겨지기 전에 호출한 곳으로 돌아갑니다** (즉, `hidden.bs.toast` 이벤트가 발생하기 전). `autohide` 를 `false` 로 했을 경우, 이 메소드를 수동으로 호출할 필요가 있습니다.

```js
toast.hide()
```

#### dispose

요소의 토스트를 숨깁니다. 토스트는 DOM 상에 남습니다만, 표시되지 않게 됩니다.

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
