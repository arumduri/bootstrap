---
layout: docs
title: Dropdowns(드롭다운)
description: Bootstrap의 드롭다운 플러그인으로 링크 목록 등을 표시하기 위한 상황별 오버레이를 토글합니다.
group: components
toc: true
---

## Overview

드롭다운은 링크 목록 등을 표시하기 위한 상황별 오버레이를 토글합니다. 이들은 Bootstrap에 포함된 드롭다운 JavaScript 플러그인으로 작동합니다. 토글은 호버링이 아닌 클릭을 통해 작동합니다. 참고 [an intentional design decision](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

드롭다운은 동적인 포지셔닝과 뷰포트 검출을 제공하는 서드파티의 라이브러리인 [Popper](https://popper.js.org/)로 구축되어 있습니다. 반드시 Bootstrap의 JavaScript 전에 [popper.min.js]({{< param "cdn.popper" >}})를 넣거나 Popper를 포함한 `bootstrap.bundle.min.js` / `bootstrap.bundle.js`를 사용해 주십시오. Popper는 동적인 배치가 필요하지 않기 때문에, navbars의 드롭다운 배치에는 사용하지 않습니다.


## Accessibility

[<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) 에서는, 실제의 [`role="menu"` widget](https://www.w3.org/WAI/PF/aria/roles#menu)가 정의되어 있지만, 이것은 액션이나 기능을 트리거로 하는 application-like 메뉴에 특화한 것입니다. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 메뉴는 메뉴 항목, 체크 박스 메뉴 항목, 라디오 버튼 메뉴 항목, 라디오 버튼 그룹, 서브 메뉴만을 포함할 수 있습니다.

한편 Bootstrap의 드롭다운은 범용적으로 설계되어 다양한 상황이나 마크업 구조에 적용할 수 있습니다. 예를 들어 검색 필드나 로그인 폼 등의 추가 입력이나 폼 컨트롤을 포함한 드롭다운을 작성할 수 있습니다. 이 때문에 Bootstrap은, 진정한 <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 메뉴에 필요한 `role`과 `aria-` 속성을 모두 기대하고 있지 않습니다(자동으로 추가도 하고 있지 않습니다). 이러한 보다 구체적인 속성들을 사용자가 추가로 작성해야 합니다.

그러나, Bootstrap은 커서 키를 이용하여 각각의 `.dropdown-item` 요소를 이동하거나 <kbd>ESC</kbd> 키로 메뉴를 닫는 기능과 대부분의 표준 키보드 메뉴의 상호작용을 위한 built-in 지원을 추가하고 있습니다.

## Examples

드롭다운의 토글(버튼이나 링크)과 드롭다운 메뉴를 `.dropdown` 이나 `position: relative;`를 가진 다른 요소로 감쌉니다. 드롭다운은 `<a>` 나 `<button>` 요소로부터 트리거 할 수 있습니다. 여기서 보여주는 예시는, 필요에 따라서 시멘틱적인 `<ul>` 요소를 사용하고 있지만, 사용자 정의 마크업도 지원하고 있습니다.

### Single button

마크업을 변경하는 것만으로, 임의의 단일 `.btn`을 드롭다운 토글로 바꿀 수 있습니다. 여기에서는, `<button>` 요소의 어느 쪽인가로 동작하는 방법을 설명합니다.

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
{{< /example >}}

그리고 `<a>` 요소를 사용해:

{{< example >}}
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
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

### Split button

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

## Sizing

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

## Dark dropdowns

기존의 `.dropdown-menu`에 `.dropdown-menu-dark`를 추가해 어두운 내비게이션바나 사용자 정의 스타일에 맞추어 어두운 드롭다운을 만들 수 있습니다. 드롭다운 항목을 변경을 할 필요는 없습니다.

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
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
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
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

## Directions

{{< callout info >}}
#### RTL
RTL에서 Bootstrap을 사용할 경우, 방향성은 반대가 되어 `.dropstart`는 오른쪽에 표시됩니다.
{{< /callout >}}

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

### Dropright

부모 요소에 `.dropend`를 추가하여 요소의 오른쪽에 표시할 수 있습니다.

<div class="bd-example">
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropright
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
      <span class="visually-hidden">Toggle Dropright</span>
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
    Dropright
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
    <span class="visually-hidden">Toggle Dropright</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropleft

부모 요소에 `.dropstart`를 추가하여 요소의 왼쪽에 표시할 수 있습니다.

<div class="bd-example">
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropleft
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
    <div class="btn-group dropstart" role="group">
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropleft</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
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
<div class="btn-group">
  <div class="btn-group dropstart" role="group">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropstart</span>
    </button>
    <ul class="dropdown-menu">
      <!-- Dropdown menu links -->
    </ul>
  </div>
  <button type="button" class="btn btn-secondary">
    Split dropstart
  </button>
</div>
```

## Menu items

역사적으로 드롭다운 메뉴의 내용은 링크가 되어야 했는데, v4에서는 그렇지 않았습니다. 드롭다운에서는 `<a>` 대신에 `<button>` 요소를 사용할 수 있게 되었습니다.

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
{{< /example >}}

또한, `.dropdown-item-text` 으로 non-interactive 드롭다운을 만들 수 있습니다. 사용자 정의 CSS 나 text 유틸리티를 사용하여 자유롭게 스타일을 설정해 주십시오.

{{< example >}}
<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
{{< /example >}}

### Active

드롭다운 아이템에 `.active`를 추가하여 **활성화** 스타일을 만듭니다. 활성화된 상태를 스크린 리더에 전달하기 위해 `aria-current` 속성을 사용합니다. 현재 페이지에는 `page` 값을, 세트 내 현재 아이템에는 `true`를 사용합니다.

{{< example >}}
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
{{< /example >}}

### Disabled

드롭다운 아이템에 `.disabled`를 추가해 **disabled** 의 스타일을 만듭니다.

{{< example >}}
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
{{< /example >}}

## Menu alignment

기본적으로, 드롭다운 메뉴는 자동으로 위에서 100% 위치와 부모의 왼쪽에 따라 배치됩니다. You can change this with the directional `.drop*` classes, but you can also control them with additional modifier classes.

드롭다운 메뉴를 오른쪽으로 배치하려면 `.dropdown-menu` 에 `.dropdown-menu-end`를 추가합니다. RTL로 사용할 경우 방향성은 반대가 되기 때문에 `.dropdown-menu-end` 는 왼쪽에 표시됩니다.

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

### Responsive alignment

반응형 배치를 사용하고 싶을 경우, `data-bs-display="static"` 속성을 추가하여 동적 배치를 비활성화하고 반응형 변형 클래스를 사용합니다.

드롭다운 메뉴를 지정된 브레이크 포인트 혹은 그 이상일 경우 **오른쪽**에 배치하려면 `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-end`를 추가합니다.

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

**왼쪽**의 드롭다운 메뉴를 지정된 브레이크 포인트 이상의 크기에 배치하려면, `.dropdown-menu-end`와 `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start`를 추가합니다.

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

### Alignment options

다양한 드롭다운 배치를 한 곳에서 확인할 수 있도록 위에서 설명한 옵션들의 데모를 소개합니다.

{{< example >}}
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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

## Menu content

### Headers

임의의 드롭다운 메뉴 액션 섹션 라벨에 header를 추가합니다.

{{< example >}}
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>
{{< /example >}}

### Dividers

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

### Text

자유롭게 드롭다운 메뉴 내에 문자로 배치하고 [spacing utilities]({{< docsref "/utilities/spacing" >}})를 사용합니다. 메뉴의 너비를 제한하기 위해 추가로 인라인 스타일이 필요할 가능성이 크다는 점에 유의하십시오.

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

### Forms

드롭다운 메뉴 안에 form을 넣거나 드롭다운 메뉴로 해서 [margin 혹은 padding utilities]({{< docsref "/utilities/spacing" >}}) 를 사용하여 여백을 제공합니다.

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
{{< /example >}}

## Dropdown options

드롭다운의 위치를 변경하려면 `data-bs-offset` 나 `data-bs-reference`를 사용합니다.

{{< example >}}
<div class="d-flex">
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Offset
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

### Auto close behavior

기본적으로, 드롭다운 메뉴의 안쪽 또는 바깥쪽을 클릭하면 드롭 다운 메뉴가 닫힙니다. `autoClose` 옵션을 사용하면, 이 동작을 변경할 수 있습니다.

{{< example >}}
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
    Clickable outside
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Clickable inside
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
    Manual close
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
{{< /example >}}

## Sass

### Variables

드롭다운에서 사용하는 변수입니다:

{{< scss-docs name="dropdown-variables" file="scss/_variables.scss" >}}

[dark dropdown](#dark-dropdowns)용 변수입니다:

{{< scss-docs name="dropdown-dark-variables" file="scss/_variables.scss" >}}

드롭다운의 상호작용성을 나타내는 CSS 기반의 화살표 기호용 변수입니다:

{{< scss-docs name="caret-variables" file="scss/_variables.scss" >}}

### Mixins

믹스인은 CSS 기반의 화살표 기호를 생성하기 위한 `scss/mixins/_caret.scss`을 사용합니다.

{{< scss-docs name="caret-mixins" file="scss/mixins/_caret.scss" >}}

## Usage

data 속성이나 JavaScript를 사용해, 드롭다운 플러그인은 부모의 `.dropdown-menu`의 `.show` 클래스를 토글하는 것으로 숨기는 콘텐츠(드롭다운 메뉴)를 토글합니다. `data-bs-toggle="dropdown"` 속성은 어플리케이션 레벨에서 드롭다운 메뉴를 닫기 위해 이용됩니다.

{{< callout info >}}
터치 대응 기기에서는, 드롭다운을 열면 빈 `mouseover` 핸들러가 `<body>` 요소의 바로 아래 자식 요소에 추가됩니다. 이렇게 보기 싫은 hack은  [iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html)을 피하고자 필요한 것으로, 그렇지 않으면 드롭다운 바깥쪽의 임의의 곳을 탭 해도 드롭다운을 닫는 코드를 트리거 할 수 없습니다. 드롭다운이 닫히면, 이렇게 추가된 빈 `mouseover` 핸들러는 삭제됩니다.
{{< /callout >}}

### Via data attributes

링크나 버튼에 `data-bs-toggle="dropdown"`을 추가하고, 드롭다운을 바꾸도록 합니다.

```html
<div class="dropdown">
  <button id="dLabel" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown trigger
  </button>
  <ul class="dropdown-menu" aria-labelledby="dLabel">
    ...
  </ul>
</div>
```

### Via JavaScript

JavaScript 로 드롭다운을 호출합니다:

```js
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
```

{{< callout info >}}
##### `data-bs-toggle="dropdown"`은 여전히 필요하다

JavaScript로 드롭다운을 호출하느냐 data-api를 사용하느냐에 상관없이 `data-bs-toggle="dropdown"`은 항상 드롭다운의 트리거 요소에 존재해야 합니다.
{{< /callout >}}

### Options

옵션은 data 속성이나 JavaScript로 전달할 수 있습니다. data 속성의 경우는, `data-bs-offset=""`과 같이 `data-bs-`에 옵션 명을 추가합니다. data 속성으로 옵션을 전달하려면 옵션 명의 대문자와 소문자를 캐멀케이스(camelCase)에서 케밥케이스(kebab-case)로 변경해 주세요. 예를 들어 `data-bs-autoClose="false"`가 아니라 `data-bs-auto-close="false"`로 해야 합니다.

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
      <td><code>boundary</code></td>
      <td>string | element</td>
      <td><code>'clippingParents'</code></td>
      <td>드롭다운 메뉴의 오버플로 제약 경계(Popper의 preventOverflow modifier에만 적용). 기본적으로 <code>'clippingParents'</code>로 HTMLElement의 참조를 받을 수 있습니다.(JavaScript만). 자세한 정보는 Popper의 <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow docs</a>를 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>reference</code></td>
      <td>string | element | object</td>
      <td><code>'toggle'</code></td>
      <td>드롭다운 메뉴의 참조요소. <code>'toggle'</code>, <code>'parent'</code>, HTMLElement 참조 혹은 <code>getBoundingClientRect</code>를 제공하는 객체 값을 받아들입니다. 더 자세한 정보는 Popper의 <a href="https://popper.js.org/docs/v2/constructors/#createpopper">constructor docs</a>와 <a href="https://popper.js.org/docs/v2/virtual-elements/">virtual element docs</a>를 참조해 주세요.</td>
    </tr>
    <tr>
      <td><code>display</code></td>
      <td>string</td>
      <td><code>'dynamic'</code></td>
      <td>기본적으로는, 동적인 위치 맞추기로 Popper를 사용하고 있습니다. 이것을 비활성화시키려면, <code>static</code> 으로 지정해 주세요.</td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>array | string | function</td>
      <td><code>[0, 2]</code></td>
      <td>
        <p>타깃에 대한 드롭다운의 상대적인 오프셋. data 속성에는 <code>data-bs-offset="10,20"</code>와 같이 콤마 구분으로 문자열을 건내줄 수 있습니다.</p>
        <p>오프셋을 결정하기 위해 함수가 사용되는 경우는 Popper의 배치, 참조, Popper의 직사각형을 포함한 객체를 첫번째 인수로 호출합니다. 트리거 되는 요소의 DOM 노드가 두번째 인수로 전달됩니다. 이 함수는 두 값을 갖는 배열 <code>[<a href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>, <a href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>]</code>을 반환해야 합니다.</p>
        <p>보다 자세한 정보는 Popper의 <a href="https://popper.js.org/docs/v2/modifiers/offset/#options">offset docs</a>를 참조해 주세요.</p>
      </td>
    </tr>
    <tr>
      <td><code>autoClose</code></td>
      <td>boolean | string</td>
      <td><code>true</code></td>
      <td>
        <p>Configure the auto close behavior of the dropdown:</p>
        <ul>
          <li><code>true</code> - 드롭다운 메뉴의 바깥쪽 혹은 안쪽을 클릭해 드롭다운을 닫습니다.</li>
          <li><code>false</code> - 토글 버튼을 클릭해 <code>hide</code> 혹은 <code>toggle</code> 메소드를 호출하거나 해서 수동으로 닫습니다.(<kbd>esc</kbd> 키를 눌러도 닫히지 않습니다)</li>
          <li><code>'inside'</code> - 드롭다운 메뉴의 안쪽을 클릭할때만 닫습니다.</li>
          <li><code>'outside'</code> - 드롭다운 메뉴의 바깥쪽을 클릭했을때만 닫습니다.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>popperConfig</code></td>
      <td>null | object | function</td>
      <td><code>null</code></td>
      <td>
        <p>Bootstrap의 기본 Popper 설정을 변경하려면 <a href="https://popper.js.org/docs/v2/constructors/#options">Popper's configuration</a>을 참조해 주세요.</p>
        <p>Popper 구성을 만들기 위해 함수가 사용될 때 Bootstrap 기본 Popper 구성을 포함한 객체로 호출됩니다. 그것은 당신이 기본을 사용하고, 당신의 구성과 통합하는 것을 도와줍니다. 함수는 Popper의 구성 객체를 반환해야 합니다.</p>
      </td>
    </tr>
  </tbody>
</table>

#### Using function with `popperConfig`

```js
var dropdown = new bootstrap.Dropdown(element, {
  popperConfig: function (defaultBsPopperConfig) {
    // var newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
```

### Methods

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
      <td>
        지정된 navbar 또는 탭 내비게이션의 드롭다운 메뉴를 바꿉니다.
      </td>
    </tr>
    <tr>
      <td><code>show</code></td>
      <td>
        지정된 navbar 또는 탭 내비게이션의 드롭다운 메뉴를 표시합니다.
      </td>
    </tr>
    <tr>
      <td><code>hide</code></td>
      <td>
        지정된 navbar 또는 탭 내비게이션의 드롭다운 메뉴를 숨깁니다.
      </td>
    </tr>
    <tr>
      <td><code>update</code></td>
      <td>
        요소의 드롭다운 위치를 업데이트 합니다.
      </td>
    </tr>
    <tr>
      <td><code>dispose</code></td>
      <td>
        요소의 드롭다운을 없앱니다.(DOM 요소에 지정되어 있는 데이타를 삭제합니다)
      </td>
    </tr>
    <tr>
      <td><code>getInstance</code></td>
      <td>
        DOM 요소에 관련 지어진 드롭다운의 인스턴스를 취득하는 Static 메소드.
      </td>
    </tr>
  </tbody>
</table>

### Events

모든 드롭다운 이벤트는 토글링 요소로 시작해 이후 버블 업 됩니다. 그 때문에 `.dropdown-menu`의 부모 요소에 이벤트 리스너를 추가할 수도 있습니다. `hide.bs.dropdown`과 `hidden.bs.dropdown` 이벤트는, 클릭 이벤트의 이벤트 객체를 포함한 `clickEvent` 속성(원래의 이벤트 타입이 `click` 경우만)을 가집니다.

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
        <code>show.bs.dropdown</code>
      </td>
      <td>
        이 이벤트는 show 인스턴스 메소드가 호출되지마자 발생합니다.
      </td>
    </tr>
    <tr>
      <td>
        <code>shown.bs.dropdown</code>
      </td>
      <td>
        이 이벤트는 드롭다운 메뉴가 표시되어 CSS 트랜지션이 완료되었을 때 발생합니다.
      </td>
    </tr>
    <tr>
      <td>
        <code>hide.bs.dropdown</code>
      </td>
      <td>
        이 이벤트는 hide 인스턴스 메소드가 호출되자마자 발생합니다.
      </td>
    </tr>
    <tr>
      <td>
        <code>hidden.bs.dropdown</code>
      </td>
      <td>
        이 이벤트는 드롭다운 메뉴가 비표시되어 CSS 트랜지션이 완료되었을 때 발생합니다.
      </td>
    </tr>
  </tbody>
</table>

```js
var myDropdown = document.getElementById('myDropdown')
myDropdown.addEventListener('show.bs.dropdown', function () {
  // do something...
})
```
