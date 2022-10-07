---
layout: docs
title: 모달
title_en: Modal
description: Bootstrap JavaScript 모달 플러그인을 사용하여 라이트박스, 사용자 알림 또는 사용자 정의 콘텐츠를 만들 수 있습니다.
group: components
toc: true
---

## 작동 원리

모달 컴포넌트의 메뉴 옵션이 최근 변경되었으니 사용하기 전에 아래 내용을 꼭 읽어보시기 바랍니다.

- 모달은 HTML, CSS, 그리고 JavaScript로 빌드됩니다. 모달은 문서 내의 다른 모든 것 위에 배치되어 `<body>`의 스크롤을 제거하고 모달의 콘텐츠가 스크롤 되도록 합니다.
- 모달의 "배경" 을 클릭하면 자동으로 모달이 닫힙니다.
- Bootstrap은 한번에 하나의 모달을 지원합니다. 중첩된 모달은 지원되지 않습니다.
- 모달은 `position: fixed`를 사용합니다. 가능한 다른 요소와의 간섭을 피하기 위해, 모달 HTML을 최상단의 위치에 넣어 주세요. 다른 고정 요소안에 `.modal`을 중첩해 넣으면 문제가 발생할 가능성이 높습니다.
- 다시 한번 말씀드리지만, `position: fixed` 때문에 모바일 기기에서 모달을 사용할 때 주의할 사항이 몇가지 있습니다. 자세한 내용은 [browser support docs]({{< docsref "/getting-started/browsers-devices#modals-and-dropdowns-on-mobile" >}})를 참조해 주십시오.
- HTML5가 시멘틱하게 정의하는 방법 때문에, [`autofocus` HTML 속성](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus)은 Bootstrap 모달에 영향을 줄 수 없습니다. 같은 효과를 얻으려면 몇개의 사용자 정의 JavaScript를 사용해 주십시오:

```js
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
```

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

데모와 사용 가이드를 계속해서 읽어 주세요.

## 예시

### 모달 컴포넌트

아래는 _static_ 모달의 예입니다. (즉, `position`과 `display`가 오버라이드되는 것을 의미합니다) 여기에는 모달 header, 모달 body (`padding` 때문에 필요), 모달 footer (선택)가 포함되어 있습니다. 가능한 한 모달을 닫을 수 있는 것을 포함시키거나 닫을 수 있는 다른 명시적인 요소를 제공하도록 부탁드립니다.

<div class="bd-example bg-light">
  <div class="modal position-static d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

{{< callout info >}}
In the above static example, we use `<h5>`, to avoid issues with the heading hierarchy in the documentation page. Structurally, however, a modal dialog represents its own separate document/context, so the `.modal-title` should ideally be an `<h1>`. If necessary, you can use the [font size utilities]({{< docsref "/utilities/text#font-size" >}}) to control the heading's appearance. All the following live examples use this approach.
{{< /callout >}}

### 라이브 데모

아래 버튼을 눌러 보세요. 모달 화면이 위에서 아래로 나타납니다.

<div class="modal fade" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLiveLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Woo-hoo, you're reading this text in a modal!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLive">
    Launch demo modal
  </button>
</div>

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

### 정적 백드롭

백드롭을 static으로 설정하면, 배경을 클릭해도 모달은 닫히지 않습니다. 아래 버튼을 클릭해 시도해 보세요.

<div class="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLiveLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>I will not close if you click outside of me. Don't even try to press escape key.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive">
    Launch static backdrop modal
  </button>
</div>

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
```

### 기다란 콘텐츠 스크롤

사용자의 뷰포트나 기기가 너무 길면 모달 페이지가 자체적으로 스크롤을 생성합니다. 아래 버튼을 클릭해 시도해 보십시오.

<div class="modal fade" id="exampleModalLong" tabindex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLongTitle">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="min-height: 1500px">
        <p>This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text the modal, we use an inline style set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
    Launch demo modal
  </button>
</div>

또한 `.modal-dialog`에 `.modal-dialog-scrollable`를 추가하는 것으로, 모달 본체를 스크롤할 수 있는 스크롤 가능한 모달로 만들 수 있습니다.

<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalScrollableTitle">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <p>This content should appear at the bottom after you scroll.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">
    Launch demo modal
  </button>
</div>

```html
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-scrollable">
  ...
</div>
```

### 세로 중앙

모달을 중앙에 배치하기 위해서 `.modal-dialog`에 `.modal-dialog-centered`를 추가합니다.

<div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalCenterTitle">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>This is a vertically centered modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalCenteredScrollableTitle">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
        <br><br><br><br><br><br><br><br><br><br>
        <p>Just like that.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
    Vertically centered modal
  </button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
    Vertically centered scrollable modal
  </button>
</div>

```html
<!-- Vertically centered modal -->
<div class="modal-dialog modal-dialog-centered">
  ...
</div>

<!-- Vertically centered scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
</div>
```

### 툴팁과 팝오버

[툴팁]({{< docsref "/components/tooltips" >}})과 [팝오버]({{< docsref "/components/popovers" >}})는 필요에 따라 모달 안에 배치시킬 수 있습니다. 모달이 닫히면 그 안에 있는 툴팁이나 팝오버도 자동으로 삭제됩니다.

<div class="modal fade" id="exampleModalPopovers" tabindex="-1" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalPopoversLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2 class="fs-5">Popover in a modal</h2>
        <p>This <a href="#" role="button" class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute." data-bs-container="#exampleModalPopovers">button</a> triggers a popover on click.</p>
        <hr>
        <h2 class="fs-5">Tooltips in a modal</h2>
        <p><a href="#" data-bs-toggle="tooltip" title="Tooltip" data-bs-container="#exampleModalPopovers">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip" data-bs-container="#exampleModalPopovers">that link</a> have tooltips on hover.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPopovers">
    Launch demo modal
  </button>
</div>

```html
<div class="modal-body">
  <h2 class="fs-5">Popover in a modal</h2>
  <p>This <a href="#" role="button" class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
  <hr>
  <h2 class="fs-5">Tooltips in a modal</h2>
  <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
```

### 그리드 사용하기

`.modal-body` 안에 `.container-fluid`를 중첩시켜 모달 안에 Bootstrap 그리드 시스템을 이용할 수 있습니다. 다른 곳에서 사용하듯이 일반적인 그리드 시스템 클래스를 사용합니다.

<div class="modal fade" id="gridSystemModal" tabindex="-1" aria-labelledby="gridModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="gridModalLabel">Grids in modals</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid bd-example-row">
          <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
            <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-sm-9">
              Level 1: .col-sm-9
              <div class="row">
                <div class="col-8 col-sm-6">
                  Level 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6">
                  Level 2: .col-4 .col-sm-6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gridSystemModal">
  Launch demo modal
</button>
</div>

```html
<div class="modal-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
      <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Level 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 다양한 모달 콘텐츠

같은 모달을 트리거하는 버튼들이 있는데, 그것들이 미묘하게 다른 내용의 모달을 트리거하고 있나요? `event.relatedTarget`과 [HTML `data-bs-*` 속성](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)를 사용하여 어떤 버튼이 클릭 되었는지에 따라 모달의 내용을 변화시킬 수 있습니다.

다음은 HTML과 JavaScript의 예시가 포함된 라이브 데모입니다. `relatedTarget`의 자세한 내용은 [모달 이벤트 문서](#events)를 참조해 주세요.

{{< example stackblitz_add_js="true" >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

```js
const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector('.modal-title')
  const modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
})
```

### 모달 간 토글

`data-bs-target`과 `data-bs-toggle` 속성을 교묘하게 배치함으로써 여러 모달을 토글할 수 있습니다. 예를 들어 이미 열려있는 로그인 모달에서 비밀번호 재설정의 모달을 열수 있습니다. **여러 개의 모달을 동시에 열 수 없으므로 주의해 주세요.** 이 방법으로 손쉽게 두 개의 다른 모달을 표시할 수 있습니다.

{{< example >}}
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
{{< /example >}}

### 애니메이션 변경

`$modal-fade-transform` 변수는 모달 페이드인 애니메이션 이전 `.modal-dialog`의 전환 상태를 결정하고, `$modal-show-transform` 변수는 모달 페이드인 애니메이션 종료시 `.modal-dialog`의 전환 상태를 결정합니다.

예를 들어, zoom-in애니메이션을 만들고 싶다면 `$modal-fade-transform: scale(.8)`을 설정합니다.

### 애니메이션 제거

화면에 페이드인 하는 것이 아니라 단순히 표시만 하는 경우에는, 마크업에서 `.fade` 클래스를 삭제합니다.

```html
<div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
  ...
</div>
```

### 동적 높이

모달이 열려있는데 높이가 변경된 경우에는 스크롤바가 표시되었을 때 모달의 위치를 재조정하기 위해 `myModal.handleUpdate()`를 호출해야 합니다.

### 접근성

반드시 `.modal`에 모달 타이틀을 참조하는 `aria-labelledby="..."`를 추가해 주세요. 게다가 `.modal`에 `aria-describedby`를 추가하는 것으로, 모달 다이얼로그의 설명을 줄 수 있습니다. JavaScript로 이미 추가하고 있음으로 `role="dialog"`를 추가할 필요가 없다는 점에 주의해 주세요.

### YouTube 동영상 포함시키키

YouTube 동영상을 모달에 포함시키려면, Bootstrap에는 없는 JavaScript를 추가해 자동으로 재생을 정지하는 등의 처리가 필요합니다. 자세한 내용은 [도움이 되는 Stack Overflow 글](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal)을 참조해 주세요.

## 선택적 크기

모달에는 3개의 옵션 크기가 있어, 제어자 클래스를 통해 `.modal-dialog`로 배치할 수 있습니다. 이들 크기는 좁은 뷰포트에서의 가로 스크롤 바를 피하기 위해 특정 중단점에서 유효하게 됩니다.

{{< bs-table "table" >}}
| Size | Class | Modal max-width
| --- | --- | --- |
| Small | `.modal-sm` | `300px` |
| Default | <span class="text-muted">None</span> | `500px` |
| Large | `.modal-lg` | `800px` |
| Extra large | `.modal-xl` | `1140px` |
{{< /bs-table >}}

제어자 클래스를 가지고 있지 않은 기본 모달은, "medium" 크기의 모달로 보여집니다.

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalXl">Extra large modal</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Large modal</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalSm">Small modal</button>
</div>

```html
<div class="modal-dialog modal-xl">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-sm">...</div>
```

<div class="modal fade" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalXlLabel">Extra large modal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalLgLabel">Large modal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalSm" tabindex="-1" aria-labelledby="exampleModalSmLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalSmLabel">Small modal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

## 전체화면 모달

`.modal-dialog`에는 아래와 같은 클래스를 추가하는 것으로, 화면을 꽉채운 모달을 이용할 수 있습니다.

{{< bs-table >}}
| Class | Availability |
| --- | --- | --- |
| `.modal-fullscreen` | Always |
| `.modal-fullscreen-sm-down` | `576px` |
| `.modal-fullscreen-md-down` | `768px` |
| `.modal-fullscreen-lg-down` | `992px` |
| `.modal-fullscreen-xl-down` | `1200px` |
| `.modal-fullscreen-xxl-down` | `1400px` |
{{< /bs-table >}}

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Full screen</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenSm">Full screen below sm</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenMd">Full screen below md</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenLg">Full screen below lg</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXl">Full screen below xl</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXxl">Full screen below xxl</button>
</div>

```html
<!-- Full screen modal -->
<div class="modal-dialog modal-fullscreen-sm-down">
  ...
</div>
```

<div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalFullscreenLabel">Full screen modal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1" aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalFullscreenSmLabel">Full screen below sm</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1" aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-md-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalFullscreenMdLabel">Full screen below md</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1" aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-lg-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalFullscreenLgLabel">Full screen below lg</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1" aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-xl-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalFullscreenXlLabel">Full screen below xl</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1" aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-xxl-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalFullscreenXxlLabel">Full screen below xxl</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

## CSS

### 변수

{{< added-in "5.2.0" >}}

As part of Bootstrap's evolving CSS variables approach, modals now use local CSS variables on `.modal` and `.modal-backdrop` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="modal-css-vars" file="scss/_modal.scss" >}}

{{< scss-docs name="modal-backdrop-css-vars" file="scss/_modal.scss" >}}

### Sass 변수

{{< scss-docs name="modal-variables" file="scss/_variables.scss" >}}

### 루프

[반응형 전체화면 모달](#fullscreen-modal)은 `$breakpoints` 맵과 `scss/_modal.scss`내의 반복에 의해 생성됩니다.

{{< scss-docs name="modal-fullscreen-loop" file="scss/_modal.scss" >}}

## 사용 방법

모달 플러그인은, data 속성이나 JavaScript를 사용하고, 필요에 따라 숨겨서 콘텐츠를 바꿉니다. 또한 기본 스크롤 동작을 덮어쓰고 모달의 바깥쪽을 클릭했을 때 표시된 모달을 삭제하기 위한 클릭 영역을 제공하기 위해서 `.modal-backdrop`을 생성합니다.

### 데이터 속성 사용하기

#### 토글

JavaScript를 쓰지 않고 모달을 활성화 시킵니다. 버튼과 같은 컨트롤러 요소에 `data-bs-toggle="modal"`을 설정하고, 추가로 `data-bs-target="#foo"` 또는 `href="#foo"`를 지정하고, 토글하는 특정 모달을 타깃으로 합니다.

```html
<button type="button" data-bs-toggle="modal" data-bs-target="#myModal">Launch modal</button>
```

#### 해제

{{% js-dismiss "modal" %}}

{{< callout warning >}}
모달을 해제하는 두 가지 방법을 모두 지원하지만 모달 외부에서 해제하는 것은 [ARIA Authoring Practices Guide dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)과 일치하지 않습니다. 문제가 생길 수도 있다는 점에 주의하세요.
{{< /callout >}}

### JavaScript 사용하기

JavaScript 한 줄로 모달을 생성합니다:

```js
const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
// or
const myModalAlternative = new bootstrap.Modal('#myModal', options)
```

### 옵션

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean, `'static'` | `true` | Includes a modal-backdrop element. Alternatively, specify `static` for a backdrop which doesn't close the modal when clicked. |
| `focus` | boolean | `true` | Puts the focus on the modal when initialized. |
| `keyboard` | boolean | `true` | Closes the modal when escape key is pressed. |
{{< /bs-table >}}

### 메소드

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### 옵션 전달

모달로서 콘텐츠를 활성화합니다. 옵션의 `object`를 받습니다.

```js
const myModal = new bootstrap.Modal('#myModal', {
  keyboard: false
})
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's modal. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method which allows you to get the modal instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn't initialized. |
| `handleUpdate` | Manually readjust the modal's position if the height of a modal changes while it is open (i.e. in case a scrollbar appears). |
| `hide` | Manually hides a modal. **Returns to the caller before the modal has actually been hidden** (i.e. before the `hidden.bs.modal` event occurs). |
| `show` | Manually opens a modal. **Returns to the caller before the modal has actually been shown** (i.e. before the `shown.bs.modal` event occurs). Also, you can pass a DOM element as an argument that can be received in the modal events (as the `relatedTarget` property). (i.e. `const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle)`. |
| `toggle` | Manually toggles a modal. **Returns to the caller before the modal has actually been shown or hidden** (i.e. before the `shown.bs.modal` or `hidden.bs.modal` event occurs). |
{{< /bs-table >}}

### 이벤트

Bootstrap의 모달 클래스는 모달 기능으로 연결하기 위한 몇 가지 이벤트를 공개하고 있습니다. 모든 모달 이벤트는, 모달 자체(즉, `<div class="modal">`)에서 발생합니다.

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `hide.bs.modal` | This event is fired immediately when the `hide` instance method has been called. |
| `hidden.bs.modal` | This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). |
| `hidePrevented.bs.modal` | This event is fired when the modal is shown, its backdrop is `static` and a click outside of the modal is performed. The event is also fired when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.bs.modal` | This event fires immediately when the `show` instance method is called. If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
| `shown.bs.modal` | This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
{{< /bs-table >}}

```js
const myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('hidden.bs.modal', event => {
  // do something...
})
```
