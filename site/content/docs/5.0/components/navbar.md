---
layout: docs
title: Navbar(내비게이션바)
description: Bootstrap 의 파워풀하고 반응형적인 내비게이션 헤더, 내비바의 문서와 예. 콜랩스(collapse) 플러그인 지원을 포함한 브랜딩, 내비게이션 등의 지원이 포함되어 있습니다.
group: components
toc: true
---

## How it works

내비게이션바를 시작하기 전에 알아야 할 것들을 설명하겠습니다:

- 내비게이션바는 `.navbar` 를 `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` 로 감싸야 하며, [color scheme](#color-schemes) 클래스가 필요합니다.
- 내비게이션과 그 컨텐츠는 기본 유동적입니다. [container](#containers) 를 변경하여 다양한 방법으로 가로폭을 제한할 수 있습니다.
- 내비게이션에서 간격이나 배치를 제어하려면 [spacing]({{< docsref "/utilities/spacing" >}}) 와 [flex]({{< docsref "/utilities/flex" >}}) 유틸리티 클래스를 사용합니다.
- 내비게이션은 기본 반응형인데, 그것을 간단히 변경할 수 있습니다. 반응형 동작은 Collapse JavaScript 플러그인에 의존합니다.
- 접근성을 확보하려면 `<nav>` 요소를 사용하거나, 혹은 `<div>` 와 같이 보다 범용적인 요소를 사용하는 경우에는 `role="navigation"` 을 추가하여 스크린 리더 사용자를 위해 랜드마크가 되는 곳임을 명시적으로 알려주어야 합니다.
- 현재 페이지에는 `aria-current="page"` 를, 세트 안에서의 현재 아이템에는 `aria-current="true"` 를 사용하여, 현재 아이템을 표시합니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Supported content

내비게이션에는 몇 가지의 서브 컴퍼넌트의 지원이 포함되어 있습니다. 필요에 따라, 아래에서 선택해 주세요.:

- 회사명, 제품명, 프로젝트명의 `.navbar-brand`.
- full-height 와 가벼운 내비게이션의 `.navbar-nav`(드롭다운 포함).
- collapse 플러그인이나 기타 [navigation toggling](#responsive-behaviors) 동작을 사용하기 위한 `.navbar-toggler`.
- 폼 컨트롤과 액션을 위한 Flex 와 spacing 유틸리티.
- 수직 방향의 중앙에 텍스트를 추가하기 위한 `.navbar-text`.
- 내비게이션바의 내용을 부모 브레이크 포인트로 그룹화 하거나 숨기기 위한 `.collapse.navbar-collapse`.

여기에서는 `lg` (large) 브레이크 포인트에서 자동으로 접히는 'light'의 테마를 사용한 반응형 내비게이션바에 포함된 서브 컴포넌트의 예를 보여주고 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

이 예에서는, [color]({{< docsref "/utilities/colors" >}}) (`bg-light`) 와 [spacing]({{< docsref "/utilities/spacing" >}}) (`my-2`, `my-lg-0`, `me-sm-0`, `my-sm-0`) 유틸리티 클래스를 사용하고 있습니다.

### Brand

`.navbar-brand` 는 대부분의 요소에 적용이 가능하지만, 요소에 따라서 유틸리티 클래스나 커스텀 스타일을 필요로 하는 경우가 있기 때문에 앵커가 최적입니다.

{{< example >}}
<!-- As a link -->
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<!-- As a heading -->
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>
{{< /example >}}

`.navbar-brand` 에 이미지를 추가하는 경우, 적절한 크기로 하기 위해서 커스텀 스타일이나 유틸리티가 필요하게 됩니다. 아래의 예를 참고해 주십시오.

{{< example >}}
<!-- Just an image -->
<nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
    </a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top">
      Bootstrap
    </a>
  </div>
</nav>
{{< /example >}}

### Nav

내비게이션바의 내비게이션 링크는 `.nav` 옵션에 독자적인 변경 클래스를 추가하여 구축되며, 적절한 반응형 스타일링을 위해 [toggler classes](#toggler) 사용을 필요로 합니다. 내비게이션바 안에서의 내비게이션 링크는 **수평 방향으로 펼쳐져 깔끔하게 정렬**합니다.

현재 페이지를 `.nav-link` 나 그 바로 위의 부모 `.nav-item` 에 `.active` 를 사용하여 활성화 상태를 나타냅니다.

그리고 `.nav-link` 자체에 `aria-current` 속성을 추가해야 할 필요가 있다는 점에 주의해 주세요.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

또한, 내비게이션 링크에 클래스를 사용하고 있기 때문에 리스트 기반 접근법을 완전히 피할수 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

내비게이션바에서 드롭다운을 사용할 수도 있습니다.
드롭다운 메뉴는 배치를 위한 랩핑된 요소가 필요하기 때문에 아래와 같이 `.nav-item` 와 `.nav-link` 과는 다른 중첩 된 요소로 분리해 사용해 주세요.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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

### Forms

내비게이션바 내에 다양한 폼 컨트롤 및 컴포넌트를 배치합니다:

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
{{< /example >}}

`.navbar` 의 바로 다음 자식 요소는 flex 레이아웃을 사용하며 기본값은 `justify-content: space-between` 입니다. 이 동작을 조정하려면 필요에 따라 추가적인 [flex utilities]({{< docsref "/utilities/flex" >}})를 사용하십시오.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
{{< /example >}}

Input group 도 사용 가능합니다. 내비게이션바가 폼 전체 혹은 대부분이 폼인 경우라면, `<form>` 요소를 컨테이너로 사용하여 HTML 을 저장할 수 있습니다.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
{{< /example >}}

다양한 버튼도 이러한 내비게이션 폼의 일부로서 지원되고 있습니다. 이것은 또한 세로 정렬 유틸리티를 사용하여 서로 다른 크기의 요소들을 정렬시킬 수 있습니다.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</nav>
{{< /example >}}

### Text

텍스트의 문자열의 수직 방향과 수평 간격을 조정하는 `.navbar-text` 를 포함할 수 있습니다.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
{{< /example >}}

필요 시 다른 컴포넌트 및 유틸리티와 혼합하여 사용할 수 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
{{< /example >}}

## Color schemes

테마 설정 클래스와 `background-color` 유틸리티의 조합으로 내비게이션바의 테마 설정이 그 어느때보다 간단해졌습니다. 밝은 배경색에는 `.navbar-light`, 어두운 배경색에는 `.navbar-dark` 를 선택합니다. 그 다음, `.bg-*` 유틸리티를 사용하여 커스터마이즈합니다.

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
```

## Containers

필수는 아니지만, 내비게이션바를 `.container` 로 감싸 페이지 중앙에 배치할 수도 있지만 내부의 컨테이너가 필요하게 된다는 점을 주의해 주세요. 혹은, `.navbar` 의 내부에 컨테이너를 추가하고 [fixed 혹은 static top navbar](#placement) 의 내용만을 중앙에 배치할 수도 있습니다.

{{< example >}}
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
{{< /example >}}

반응형 컨테이너 중 하나를 사용하여 내비게이션바의 컨텐츠 표시 폭을 변경할 수 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
{{< /example >}}

## Placement

[Position utilities]({{< docsref "/utilities/position" >}}) 를 사용하여 내비게이션바를 정적이지 않은 위치에 배치할 수 있습니다. 상단고정, 하단 고정, 스티커식(페이지가 상단까지 스크롤한 뒤에도 그 위치에 남는) 상단고정을 할지 선택할 수 있습니다. 고정 내비게이션바는 `position: fixed` 를 사용합니다. 이는 DOM 의 통상적인 흐름에서 취득되어 다른 요소와의 중복을 막기 위해 커스텀 CSS(예를 들어, `<body>` 의 `padding-top` 등)가 필요할 수 있습니다.

또한, **`.sticky-top`은 `position: sticky`를 사용하고 있는데 [모든 브라우저에서 완전이 지원되는 것은 아닙니다](https://caniuse.com/css-sticky)**

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Default</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar sticky-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>
{{< /example >}}

## Responsive behaviors

`.navbar-toggler`, `.navbar-collapse`, 및 `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` 클래스를 사용하여 컨텐츠가 버튼 뒤쪽에서 접히는 시점을 결정합니다. 다른 유틸리티와 결합하여 특정 요소를 언제 표시하고 감출지 손쉽게 선택할 수 있습니다.

접히지 않는 내비게이션바의 경우, `.navbar-expand` 클래스를 내비바에 추가합니다. 항상 접히는 내비게이션바의 경우 `.navbar-expand` 클래스를 추가하지 마십시오.

### Toggler

내비게이션바의 토글은 기본적으로 왼쪽 정렬입니다만, `.navbar-brand` 와 같은 형제 요소에 이어지는 경우는 자동적으로 오른쪽 정렬이 됩니다. 마크업을 거꾸로 하면 토글의 배치도 거꾸로 바뀝니다. 아래는 색다른 토글 스타일의 예입니다.

최소의 브레이크 포인트에서 `.navbar-brand` 가 표시되지 않습니다:

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

왼쪽에 브랜드명이 표시되고 오른쪽에 토글이 표시되고 있습니다:

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

왼쪽에 토글이, 오른쪽에 브랜드명이 들어가 있습니다:

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

### External content

구조적으로 `.navbar` 바깥쪽에 있는 컨텐츠를 위해 collapse 플러그인을 사용해 컨테이너 요소를 트리거하고 싶을 수도 있습니다. 이 플러그인은 `id` 와 `data-bs-target` 의 매칭으로 동작하기 때문에 실행이 간단합니다.

{{< example >}}
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
{{< /example >}}

이러한 경우는, 컨테이너가 열렸을 때에 프로그램적으로 포커스를 컨테이너로 이동시키기 위해 추가의 JavaScript 를 포함하는 것을 권장합니다. 그렇지 않으면 키보드 사용자나 스크린 리더 사용자는 새로 표시된 컨텐츠를 찾는데 어려움을 겪을 것입니다. 특히 열린 컨테이너가 문서 구조의 토글 *앞*에 있는 경우가 그렇습니다. 또한 토글이 `aria-controls` 속성을 가지고 있으며 `id` 를 가리키도록 하는 것을 권장합니다. 이론적으로는 이를 통해 스크린 리더 사용자가 토글에서 토글이 컨트롤하는 컨테이너로 직접 뛰어오를 수 있게 되는데, 현재까지 이 지원은 상당 부분 패치가 잘 되어 있습니다.