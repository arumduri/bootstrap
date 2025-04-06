---
layout: docs
title: 경고창
description: 유연한 경고창으로, 일반적인 사용자 액션에 대해 상황에 맞는 피드백 메세지를 제공합니다.
group: components
toc: true
---

## Examples

텍스트 길이에 상관없이 메세지를 표시할 수 있으며 옵션으로 닫기 버튼을 제공합니다. 올바른 스타일링을 위해, 8가지의 테마 컬러(예를 들면, `.alert-success`) 로 사용 가능합니다. 인라인으로 경고창을 닫기 위해서는, [경고창 JavaScript 플러그인](#무시)을 사용합니다.

{{< callout info >}}
**주의!** v5.3.0부터 `alert-variant()` Sass 믹스인이 더 이상 사용되지 않습니다. 이제 경고 변형은 [Sass 루프](#sass-루프)에서 해당 CSS 변수를 재정의합니다.
{{< /callout >}}

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert alert-{{ .name }}" role="alert">
  A simple {{ .name }} alert—check it out!
</div>{{- end -}}
{{< /alerts.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Live example

아래 버튼을 클릭하여 경고 (시작할 인라인 스타일로 숨겨짐)를 표시한 다음 내장된 닫기 버튼으로 경고를 해제 (및 삭제)합니다.

{{< example stackblitz_add_js="true" >}}
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
{{< /example >}}

다음 예제에서는 JavaScript를 사용하여 라이브 알림 데모를 트리거합니다:

{{< js-docs name="live-alert" file="site/assets/js/snippets.js" >}}

### 링크 색상

`.alert-link` 클래스를 사용하면, 경고창에 어울리는 색의 링크를 사용할 수 있습니다.

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert alert-{{ .name }}" role="alert">
  A simple {{ .name }} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>{{ end -}}
{{< /alerts.inline >}}
{{< /example >}}

### 추가 콘텐츠

경고창에는 제목, 단락 및 구분선 등과 같은 HTML 요소를 포함할 수도 있습니다.

{{< example >}}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{{< /example >}}

### 아이콘

마찬가지로 [flexbox 유틸리티]({{< docsref "/utilities/flex" >}})와 [Bootstrap Icons]({{< param icons >}})을 이용하여 경고창을 만들 수 있습니다. 아이콘이나 콘텐츠에 따라서는 유틸리티나 사용자 정의 스타일을 더 추가할 수도 있습니다.

{{< example >}}
<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>
{{< /example >}}

경고창에 여러 개의 아이콘이 필요한가요? 로컬 SVG 스프라이트를 만들어 같은 아이콘을 간단하게 반복시켜 참조할 수 있는 보다 많은 Bootstrap 아이콘을 사용해 보세요.

{{< example >}}
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
  <div>
    An example alert with an icon
  </div>
</div>
<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    An example success alert with an icon
  </div>
</div>
<div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    An example warning alert with an icon
  </div>
</div>
<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    An example danger alert with an icon
  </div>
</div>
{{< /example >}}

### 무시

경고창의 JavaScript 플러그인을 사용하면, 경고창을 인라인으로 닫을 수 있습니다. Here's how:

- JavaScript 플러그인 또는 Bootstrap JavaScript를 가지고 옵니다.
- [close button]({{< docsref "/components/close-button" >}}) 에 `.alert-dismissible`의 클래스를 추가하면 경고창의 오른쪽에 여백이 추가되고, 닫기 버튼의 위치가 결정됩니다.
- 닫기 버튼에 `data-bs-dismiss="alert"` 속성을 추가합니다. 그러면 JavaScript 기능이 트리거 됩니다. 모든 기기에서 올바르게 동작시키려면 반드시 `<button>` 요소를 사용해 주세요.
- 경고창을 닫을 때 애니메이션을 적용하려면, 반드시 `.fade`와 `.show`의 클래스를 추가해 주세요.

You can see this in action with a live demo:

{{< example >}}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{{< /example >}}

{{< callout warning >}}
경고창이 해제되면 해당 요소는 페이지 구조에서 완전히 제거됩니다. 키보드 사용자가 닫기 버튼을 통해 경고창을 해제하면 포커스가 갑자기 사라지고 브라우저에 따라서는 페이지나 문서의 선두에 리셋됩니다. 그래서 `closed.bs.alert` 이벤트를 리슨하고 `focus()`를 페이지 내의 가장 적절한 위치에 프로그램적으로 설정하는 JavaScript를 추가할 것을 권장합니다. 보통은 포커스를 받지 않는 상호 작용할 수 없는 요소에 포커스를 이동시키는 경우는, 그 요소에 `tabindex="-1"`을 추가하도록 해 주세요.
{{< /callout >}}

## CSS

### 변수

{{< added-in "5.2.0" >}}

Bootstrap의 진화하는 CSS 변수 접근 방식의 일환으로, 이제 경고창에서 `.alert`의 로컬 CSS 변수를 사용하여 실시간 사용자 정의 기능을 강화합니다. CSS 변수의 값은 Sass를 통해 설정되므로 Sass 사용자 정의도 계속 지원됩니다.

{{< scss-docs name="alert-css-vars" file="scss/_alert.scss" >}}

### Sass 변수

{{< scss-docs name="alert-variables" file="scss/_variables.scss" >}}

### Sass 믹스인

{{< deprecated-in "5.3.0" >}}

{{< scss-docs name="alert-variant-mixin" file="scss/mixins/_alert.scss" >}}

### Sass 루프

CSS 변수를 오버라이드하는 제어자 클래스를 생성하는 반복문입니다.

{{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}}

## JavaScript 비헤이비어

### 초기화

요소를 경고로 초기화합니다.

```js
const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))
```

{{< callout info >}}
경고만 해제할 목적이라면 JS API를 통해 컴포넌트를 수동으로 초기화할 필요는 없습니다. `data-bs-dismiss="alert"`를 사용하면 컴포넌트가 자동으로 적절하게 초기화되고 해제됩니다.

자세한 내용은 [트리거](#트리거) 섹션을 참조하세요.
{{< /callout >}}

### Triggers

{{% js-dismiss "alert" %}}

**경고를 닫으면 DOM에서 경고가 제거된다는 사실에 주의하세요.**

### 메소드

예를 들어 경고창 생성자를 사용하여 알림 인스턴스를 만들 수 있습니다:

```js
const bsAlert = new bootstrap.Alert('#myAlert')
```

이렇게 하면 `data-bs-dismiss="alert"` 속성이 있는 하위 요소의 클릭 이벤트에 대해 알림을 수신합니다. (데이터 API의 자동 초기화를 사용할 때는 필요하지 않습니다.)

{{< bs-table >}}
| 메소드                   | 설명                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `close`               | DOM에서 제거되고 경고창을 닫습니다. `.fade` 와 `.show` 클래스가 요소에 있으면, 경고창은 제거 되기전에 사라집니다.                                         |
| `dispose`             | 경고창을 없앱니다. (DOM 요소에 저장되어 있는 데이터를 삭제)                                                                              |
| `getInstance`         | DOM 요소와 관련된 경고창의 인스턴스를 가져오는 Static 메소드입니다. 사용법: `bootstrap.Alert.getInstance(alert)`                              |
| `getOrCreateInstance` | DOM 요소와 연결된 경고 인스턴스를 반환하거나 초기화되지 않은 경우 새 인스턴스를 만드는 정적 메소드입니다. 사용법: `bootstrap.Alert.getOrCreateInstance(element)` |
{{< /bs-table >}}

기본적인 사용 예시:

```js
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
alert.close()
```

### 이벤트

Bootstrap 경고창 플러그인은, 경고창 기능에 연결하기 위한 몇 가지의 이벤트를 제공합니다.

{{< bs-table >}}
| 이벤트               | 설명                               |
| ----------------- | -------------------------------- |
| `close.bs.alert`  | `close` 인스턴스 메소드가 호출되면 바로 발생합니다. |
| `closed.bs.alert` | 경고창이 닫히고, CSS 트렌지션이 완료되면 발생합니다.  |
{{< /bs-table >}}

```js
const myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', event => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```
