---
layout: docs
title: Alerts(경고창)
description: 유연한 경고창으로, 일반적인 사용자 액션에 대해 상황에 맞는 피드백 메세지를 제공합니다.
group: components
toc: true
---

## Examples
텍스트 길이에 상관없이 메세지를 표시할 수 있으며 옵션으로 닫기 버튼을 제공합니다. 올바른 스타일링을 위해, 8가지의 테마 컬러(e.g., `.alert-success`) 로 사용 가능합니다. 인라인으로 경고창을 닫기 위해서는, [alerts JavaScript plugin](#dismissing) 을 사용합니다.

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert alert-{{ .name }}" role="alert">
  A simple {{ .name }} alert—check it out!
</div>{{- end -}}
{{< /alerts.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Link color

`.alert-link` 클래스를 사용하면, 경고창에 어울리는 색의 링크를 사용할 수 있습니다.

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert alert-{{ .name }}" role="alert">
  A simple {{ .name }} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>{{ end -}}
{{< /alerts.inline >}}
{{< /example >}}

### Additional content
경고창에는 제목, 단락 및 구분선 등과 같은 HTML 요소를 포함할 수도 있습니다.

{{< example >}}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{{< /example >}}

### Dismissing
경고창의 JavaScript 플러그인을 사용하면, 경고창을 인라인으로 닫을 수 있습니다.

- JavaScript 플러그인 또는 Bootstrap JavaScript를 가지고 옵니다.
- [close button]({{< docsref "/components/close-button" >}}) 에 `.alert-dismissible` 의 클래스를 추가하면 경고창의 오른쪽에 여백이 추가되고, 닫기 버튼의 위치가 결정됩니다.
- 닫기 버튼에 `data-bs-dismiss="alert"` 속성을 추가합니다. 그러면 JavaScript 기능이 트리커 됩니다. 모든 디바이스에서 올바르게 동작시키려면 반드시 `<button>` 요소를 사용해 주세요.
- 경고창을 닫을 때 애니메이션을 적용하려면, 반드시 `.fade` 와 `.show` 의 클래스를 추가해 주세요.

실시간 데모로 확인할 수 있습니다:

{{< example >}}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{{< /example >}}

{{< callout warning >}}
경고창이 해제되면 해당 요소는 페이지 구조에서 완전히 제거됩니다. 키보드 사용자가 닫기 버튼을 통해 경고창을 해제하면 포커스가 갑자기 사라지고 브라우저에 따라서는 페이지나 문서의 선두에 리셋됩니다. 그래서 `closed.bs.alert` 이벤트를 리슨하고 `focus()` 를 페이지 내의 가장 적절한 위치에 프로그램적으로 설정하는 JavaScript 를 추가할 것을 권장합니다. 보통은 포커스를 받지 않는 비인터랙티브한 요소에 포커스를 이동시키는 경우는, 그 요소에 `tabindex="-1"` 을 추가하도록 해 주세요.
{{< /callout >}}

## JavaScript behavior

### Triggers
JavaScript 를 통해 경고창을 닫습니다.

```js
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
})
```

혹은, 위에 설명한대로 **경고창 안의** 닫기 버튼에 `data` 속성을:

```html
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
```

경고창을 닫으면 DOM 에서 제거되는 점을 주의하세요.

### Methods

경고창의 생성자를 사용해 경고창의 인스턴스를 만들 수 있습니다. 예를 들어:

```js
var myAlert = document.getElementById('myAlert')
var bsAlert = new bootstrap.Alert(myAlert)
```

이렇게 하면 `data-bs-dismiss="alert"` 의 속성이 있는 하위 요소에서 클릭 이벤트를 상위의 경고창에서 알수 있습니다. (data-api 의 자동 초기화를 사용할 때에는 필요 없습니다.)

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>close</code>
      </td>
      <td>
        DOM 에서 제거되고 경고창을 닫습니다. <code>.fade</code> 와 <code>.show</code> 클래스가 요소에 있으면, 경고창은 제거 되기전에 사라집니다.
      </td>
    </tr>
    <tr>
      <td>
        <code>dispose</code>
      </td>
      <td>
        경고창을 없앱니다. (DOM 요소에 저장되어 있는 데이타를 삭제)
      </td>
    </tr>
    <tr>
      <td>
        <code>getInstance</code>
      </td>
      <td>
        DOM 요소와 관련된 경고창의 인스턴스를 가져오는 정적 메소드입니다. <br />사용법 : <code>bootstrap.Alert.getInstance(alert)</code>
      </td>
    </tr>
  </tbody>
</table>

```js
var alertNode = document.querySelector('.alert')
var alert = bootstrap.Alert.getInstance(alertNode)
alert.close()
```

### Events
Bootstrap 경고창 플러그인은, 경고창 기능에 연결하기 위한 몇 가지의 이벤트를 제공합니다.

<table class="table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>close.bs.alert</code></td>
      <td>
        <code>close</code> 인스턴스 메소드가 호출되면 바로 발생합니다.
      </td>
    </tr>
    <tr>
      <td><code>closed.bs.alert</code></td>
      <td>
        경고창이 닫히고, CSS 트렌지션이 완료되면 발생합니다.
      </td>
    </tr>
  </tbody>
</table>

```js
var myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', function () {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```
