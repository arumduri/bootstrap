---
layout: docs
title: 드롭다운
title_en: Dropdowns
description: Bootstrap의 드롭다운 플러그인으로 링크 목록 등을 표시하기 위한 상황별 오버레이를 토글합니다.
group: components
toc: true
---

## 개요

드롭다운은 링크 목록 등을 표시하기 위한 상황별 오버레이를 토글합니다. 이들은 Bootstrap에 포함된 드롭다운 JavaScript 플러그인으로 작동합니다. 토글은 호버링이 아닌 클릭을 통해 작동합니다. 참고 [an intentional design decision](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

드롭다운은 동적인 포지셔닝과 뷰포트 검출을 제공하는 서드 파티의 라이브러리인 [Popper](https://popper.js.org/)로 빌드되어 있습니다. 반드시 Bootstrap의 JavaScript 전에 [popper.min.js]({{< param "cdn.popper" >}})를 넣거나 Popper를 포함한 `bootstrap.bundle.min.js` / `bootstrap.bundle.js`를 사용해 주십시오. Popper는 동적인 배치가 필요하지 않기 때문에, navbars의 드롭다운 배치에는 사용하지 않습니다.


## 접근성
The [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) standard defines an actual [`role="menu"` widget](https://www.w3.org/TR/wai-aria/#menu), but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

[<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) 에서는, 실제의 [`role="menu"` widget](https://www.w3.org/WAI/PF/aria/roles#menu)가 정의되어 있지만, 이것은 액션이나 기능을 트리거로 하는 application-like 메뉴에 특화한 것입니다. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 메뉴는 메뉴 항목, 체크 박스 메뉴 항목, 라디오 버튼 메뉴 항목, 라디오 버튼 그룹, 서브 메뉴만을 포함할 수 있습니다.

한편 Bootstrap의 드롭다운은 범용적으로 설계되어 다양한 상황이나 마크업 구조에 적용할 수 있습니다. 예를 들어 검색 필드나 로그인 폼 등의 추가 입력이나 폼 컨트롤을 포함한 드롭다운을 작성할 수 있습니다. 이 때문에 Bootstrap은, 진정한 <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 메뉴에 필요한 `role`과 `aria-` 속성을 모두 기대하고 있지 않습니다 (자동으로 추가도 하고 있지 않습니다). 이러한 보다 구체적인 속성들을 사용자가 추가로 작성해야 합니다.

그러나, Bootstrap은 커서 키를 이용하여 각각의 `.dropdown-item` 요소를 이동하거나 <kbd>ESC</kbd> 키로 메뉴를 닫는 기능과 대부분의 표준 키보드 메뉴의 상호작용을 위한 built-in 지원을 추가하고 있습니다.

## 예시

드롭다운의 토글(버튼이나 링크)과 드롭다운 메뉴를 `.dropdown` 이나 `position: relative;`를 가진 다른 요소로 감쌉니다. 드롭다운은 `<a>` 나 `<button>` 요소로부터 트리거 할 수 있습니다. 여기서 보여주는 예시는, 필요에 따라서 시멘틱적인 `<ul>` 요소를 사용하고 있지만, 사용자 정의 마크업도 지원하고 있습니다.

### 단일 버튼

마크업을 변경하는 것만으로, 임의의 단일 `.btn`을 드롭다운 토글로 바꿀 수 있습니다. 여기에서는, `<button>` 요소의 어느 쪽인가로 동작하는 방법을 설명합니다.

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
{{< /example >}}

그리고 `<a>` 요소를 사용해:

{{< example >}}
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
{{< /example >}}

가장 좋은 것은 버튼의 종류를 불문하고 전부 가능하다는 것입니다:

<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
</div>

```html
<!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

### 분할 버튼

마찬가지로, 단일 버튼의 드롭다운과 실질적으로 같은 마크업으로 분할된 버튼의 드롭다운을 만드는데, 드롭다운의 화살표 주위의 적절한 간격을 확보하기 위해서 `.dropdown-toggle-split`를 추가합니다.

이 추가 클래스를 사용하여, 화살표 양쪽의 좌우 `padding`을 25% 줄이고, 일반적인 버튼 트롭다운을 위해 추가되었던 `margin-left`를 삭제합니다. 이러한 추가 변경으로 인해 화살표는 분할된 버튼의 중앙에 오게 되고 메인 버튼 옆에서의 클릭 영역의 크기가 더욱 적절해집니다.


<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
</div>

```html
<!-- Example split danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## 크기 조절

버튼의 드롭다운은 기본적인 드롭다운 버튼이나 분할된 드롭다운 버튼 등 모든 크기의 버튼으로 동작합니다.

<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Large button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

```html
<!-- Large button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Large button
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Large split button
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Small button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

```html
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small button
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Small split button
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

## 검은색 드롭다운

기존의 `.dropdown-menu`에 `.dropdown-menu-dark`를 추가해 어두운 내비게이션 바나 사용자 정의 스타일에 맞추어 어두운 드롭다운을 만들 수 있습니다. 드롭다운 항목을 변경을 할 필요는 없습니다.

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
{{< /example >}}

그리고, 이걸 navbar에 넣어 사용:

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

## 방향성

{{< callout info >}}
#### RTL
RTL에서 Bootstrap을 사용할 경우, 방향성은 반대가 되어 `.dropstart`는 오른쪽에 표시됩니다.
{{< /callout >}}

### Centered

Make the dropdown menu centered below the toggle with `.dropdown-center` on the parent element.

{{< example >}}
<div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
{{< /example >}}

### Dropup

부모 요소에 `.dropup`을 추가하여 요소의 위쪽으로 표시할 수 있습니다.

<div class="bd-example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropup
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">
      Split dropup
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

```html
<!-- Default dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Split dropup
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropup centered

Make the dropup menu centered above the toggle with `.dropup-center` on the parent element.

{{< example >}}
<div class="dropup-center dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
{{< /example >}}

### Dropend

부모 요소에 `.dropend`를 추가하여 요소의 오른쪽에 표시할 수 있습니다.

<div class="bd-example">
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropend
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary">
      Split dropend
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropend</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

```html
<!-- Default dropend button -->
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropend button -->
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary">
    Split dropend
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropend</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropstart

부모 요소에 `.dropstart`를 추가하여 요소의 왼쪽에 표시할 수 있습니다.

<div class="bd-example">
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropstart
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropstart</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <button type="button" class="btn btn-secondary">
      Split dropstart
    </button>
  </div>
</div>

```html
<!-- Default dropstart button -->
<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropstart button -->
<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropstart</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
  <button type="button" class="btn btn-secondary">
    Split dropstart
  </button>
</div>
```

## 메뉴 항목

You can use `<a>` or `<button>` elements as dropdown items.

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
{{< /example >}}

또한, `.dropdown-item-text`으로 non-interactive 드롭다운을 만들 수 있습니다. 사용자 정의 CSS 나 text 유틸리티를 사용하여 자유롭게 스타일을 설정해 주십시오.

{{< example >}}
<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
{{< /example >}}

### 활성화

드롭다운 아이템에 `.active`를 추가하여 **활성화** 스타일을 만듭니다. 활성화된 상태를 스크린 리더에 전달하기 위해 `aria-current` 속성을 사용합니다. 현재 페이지에는 `page` 값을, 세트 내 현재 아이템에는 `true`를 사용합니다.

{{< example >}}
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
{{< /example >}}

### 비활성화

드롭다운 아이템에 `.disabled`를 추가해 **disabled** 의 스타일을 만듭니다.

{{< example >}}
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item disabled">Disabled link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
{{< /example >}}

## 메뉴 정렬

기본적으로, 드롭다운 메뉴는 자동으로 위에서 100% 위치와 부모의 왼쪽에 따라 배치됩니다. 이것은 방향성이 있는 `.drop*` 클래스로 변경할 수 있지만, 추가적인 제어자 클래스로 제어할 수도 있습니다.

드롭다운 메뉴를 오른쪽으로 배치하려면 `.dropdown-menu`에 `.dropdown-menu-end`를 추가합니다. RTL로 사용할 경우 방향성은 반대가 되기 때문에 `.dropdown-menu-end` 는 왼쪽에 표시됩니다.

{{< callout info >}}
**주의!** 드롭다운은 네비바에 포함된 경우를 제외하고 Popper에 의해 배치되어 있습니다.
{{< /callout >}}

{{< example >}}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu example
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
{{< /example >}}

### 반응형 정렬

반응형 배치를 사용하고 싶을 경우, `data-bs-display="static"` 속성을 추가하여 동적 배치를 비활성화하고 반응형 변형 클래스를 사용합니다.

드롭다운 메뉴를 지정된 중단점 혹은 그 이상일 경우 **오른쪽**에 배치하려면 `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-end`를 추가합니다.

{{< example >}}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
{{< /example >}}

**왼쪽**의 드롭다운 메뉴를 지정된 중단점 이상의 크기에 배치하려면, `.dropdown-menu-end`와 `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start`를 추가합니다.

{{< example >}}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
{{< /example >}}

navbars 의 드롭다운 버튼에 `data-bs-display="static"` 속성을 추가할 필요가 없다는 점에 주의하십시오.

### 정렬 옵션

다양한 드롭다운 배치를 한 곳에서 확인할 수 있도록 위에서 설명한 옵션들의 데모를 소개합니다.

{{< example >}}
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned, right-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned, left-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
{{< /example >}}

## 메뉴 콘텐츠

### 헤더

임의의 드롭다운 메뉴 액션 섹션 라벨에 헤더를 추가합니다.

{{< example >}}
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>
{{< /example >}}

### 구분선

관련 메뉴 아이템을 구분선으로 나눕니다.

{{< example >}}
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
{{< /example >}}

### 텍스트

자유롭게 드롭다운 메뉴 내에 텍스트로 배치하고 [간격 유틸리티]({{< docsref "/utilities/spacing" >}})를 사용합니다. 메뉴의 너비를 제한하기 위해 추가로 인라인 스타일이 필요할 가능성이 크다는 점에 유의하십시오.

{{< example >}}
<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
{{< /example >}}

### 폼

드롭다운 메뉴 안에 폼을 넣거나 드롭다운 메뉴로 해서 [margin 혹은 padding utilities]({{< docsref "/utilities/spacing" >}})를 사용하여 여백을 제공합니다.

{{< example >}}
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
{{< /example >}}

{{< example >}}
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Dropdown form
  </button>
  <form class="dropdown-menu p-4">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck2">
        <label class="form-check-label" for="dropdownCheck2">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</div>
{{< /example >}}

## 드롭다운 옵션

드롭다운의 위치를 변경하려면 `data-bs-offset` 나 `data-bs-reference`를 사용합니다.

{{< example >}}
<div class="d-flex">
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Offset
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

### 자동 닫기 비헤이비어

기본적으로, 드롭다운 메뉴의 안쪽 또는 바깥쪽을 클릭하면 드롭 다운 메뉴가 닫힙니다. `autoClose` 옵션을 사용하면, 이 동작을 변경할 수 있습니다.

{{< example >}}
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
    Clickable outside
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Clickable inside
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
    Manual close
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.2.0" >}}

As part of Bootstrap's evolving CSS variables approach, dropdowns now use local CSS variables on `.dropdown-menu` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="dropdown-css-vars" file="scss/_dropdown.scss" >}}

Customization through CSS variables can be seen on the `.dropdown-menu-dark` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="dropdown-dark-css-vars" file="scss/_dropdown.scss" >}}

### Sass 변수

Variables for all dropdowns:

{{< scss-docs name="dropdown-variables" file="scss/_variables.scss" >}}

[dark dropdown](#dark-dropdowns)용 변수입니다:

{{< scss-docs name="dropdown-dark-variables" file="scss/_variables.scss" >}}

드롭다운의 상호작용성을 나타내는 CSS 기반의 화살표 기호용 변수입니다:

{{< scss-docs name="caret-variables" file="scss/_variables.scss" >}}

### 믹스인

믹스인은 CSS 기반의 화살표 기호를 생성하기 위한 `scss/mixins/_caret.scss`을 사용합니다.

{{< scss-docs name="caret-mixins" file="scss/mixins/_caret.scss" >}}

## 사용 방법

data 속성이나 JavaScript를 사용해, 드롭다운 플러그인은 부모의 `.dropdown-menu`의 `.show` 클래스를 토글하는 것으로 숨기는 콘텐츠(드롭다운 메뉴)를 토글합니다. `data-bs-toggle="dropdown"` 속성은 어플리케이션 레벨에서 드롭다운 메뉴를 닫기 위해 이용됩니다.

{{< callout info >}}
터치 대응 기기에서는, 드롭다운을 열면 빈 `mouseover` 핸들러가 `<body>` 요소의 바로 아래 자식 요소에 추가됩니다. 이렇게 보기 싫은 hack은  [iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html)을 피하고자 필요한 것으로, 그렇지 않으면 드롭다운 바깥쪽의 임의의 곳을 탭 해도 드롭다운을 닫는 코드를 트리거 할 수 없습니다. 드롭다운이 닫히면, 이렇게 추가된 빈 `mouseover` 핸들러는 삭제됩니다.
{{< /callout >}}

### 데이터 속성 사용하기

링크나 버튼에 `data-bs-toggle="dropdown"`을 추가하고, 드롭다운을 바꾸도록 합니다.

```html
<div class="dropdown">
  <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown trigger
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

### JavaScript 사용하기

JavaScript 로 드롭다운을 호출합니다:

```js
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))
```

{{< callout info >}}
##### `data-bs-toggle="dropdown"`은 여전히 필요합니다

JavaScript로 드롭다운을 호출하느냐 data-api를 사용하느냐에 상관없이 `data-bs-toggle="dropdown"`은 항상 드롭다운의 트리거 요소에 존재해야 합니다.
{{< /callout >}}

### 옵션

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | boolean, string | `true` | Configure the auto close behavior of the dropdown: <ul class="my-2"><li>`true` - the dropdown will be closed by clicking outside or inside the dropdown menu.</li><li>`false` - the dropdown will be closed by clicking the toggle button and manually calling `hide` or `toggle` method. (Also will not be closed by pressing <kbd>esc</kbd> key)</li><li>`'inside'` - the dropdown will be closed (only) by clicking inside the dropdown menu.</li> <li>`'outside'` - the dropdown will be closed (only) by clicking outside the dropdown menu.</li></ul> Note: the dropdown can always be closed with the <kbd>ESC</kbd> key. |
| `boundary` | string, element | `'clippingParents'` | Overflow constraint boundary of the dropdown menu (applies only to Popper's preventOverflow modifier). By default it's `clippingParents` and can accept an HTMLElement reference (via JavaScript only). For more information refer to Popper's [detectOverflow docs](https://popper.js.org/docs/v2/utils/detect-overflow/#boundary). |
| `display` | string | `'dynamic'` | By default, we use Popper for dynamic positioning. Disable this with `static`. |
| `offset` | array, string, function | `[0, 2]` | Offset of the dropdown relative to its target. You can pass a string in data attributes with comma separated values like: `data-bs-offset="10,20"`. When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: [skidding](https://popper.js.org/docs/v2/modifiers/offset/#skidding-1), [distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1). For more information refer to Popper's [offset docs](https://popper.js.org/docs/v2/modifiers/offset/#options). |
| `popperConfig` | null, object, function | `null` | To change Bootstrap's default Popper config, see [Popper's configuration](https://popper.js.org/docs/v2/constructors/#options). When a function is used to create the Popper configuration, it's called with an object that contains the Bootstrap's default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper. |
| `reference` | string, element, object | `'toggle'` | Reference element of the dropdown menu. Accepts the values of `'toggle'`, `'parent'`, an HTMLElement reference or an object providing `getBoundingClientRect`. For more information refer to Popper's [constructor docs](https://popper.js.org/docs/v2/constructors/#createpopper) and [virtual element docs](https://popper.js.org/docs/v2/virtual-elements/). |
{{< /bs-table >}}

#### `popperConfig`으로 기능 사용하기

```js
const dropdown = new bootstrap.Dropdown(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
```

### 메소드

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's dropdown. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the dropdown instance associated to a DOM element, you can use it like this: `bootstrap.Dropdown.getInstance(element)`. |
| `getOrCreateInstance` | Static method which returns a dropdown instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `bootstrap.Dropdown.getOrCreateInstance(element)`. |
| `hide` | Hides the dropdown menu of a given navbar or tabbed navigation. |
| `show` | Shows the dropdown menu of a given navbar or tabbed navigation. |
| `toggle` | Toggles the dropdown menu of a given navbar or tabbed navigation. |
| `update` | Updates the position of an element's dropdown. |
{{< /bs-table >}}

### 이벤트

모든 드롭다운 이벤트는 토글링 요소로 시작해 이후 버블 업 됩니다. 그 때문에 `.dropdown-menu`의 부모 요소에 이벤트 리스너를 추가할 수도 있습니다. `hide.bs.dropdown`과 `hidden.bs.dropdown` 이벤트는, 클릭 이벤트의 이벤트 객체를 포함한 `clickEvent` 속성(원래의 이벤트 타입이 `click` 경우만)을 가집니다.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `hide.bs.dropdown` | Fires immediately when the `hide` instance method has been called. |
| `hidden.bs.dropdown` | Fired when the dropdown has finished being hidden from the user and CSS transitions have completed. |
| `show.bs.dropdown` | Fires immediately when the `show` instance method is called. |
| `shown.bs.dropdown` | Fired when the dropdown has been made visible to the user and CSS transitions have completed. |
{{< /bs-table >}}

```js
const myDropdown = document.getElementById('myDropdown')
myDropdown.addEventListener('show.bs.dropdown', event => {
  // do something...
})
```
