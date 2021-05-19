---
layout: docs
title: Navbar(내비게이션 바)
description: Bootstrap의 강력하고 반응형적인 내비게이션 헤더, 내비게이션 바의 문서와 예. 콜랩스(collapse) 플러그인 지원을 포함한 브랜딩, 내비게이션 등의 지원이 포함되어 있습니다.
group: components
toc: true
---

## How it works

내비게이션 바를 시작하기 전에 알아야 할 것들을 설명하겠습니다:

- 내비게이션 바는 `.navbar`를 `.navbar-expand{-sm|-md|-lg|-xl|-xxl}`로 감싸야 하며, [color scheme](#color-schemes)클래스가 필요합니다.
- 내비게이션과 그 컨텐츠는 기본적으로 유동적입니다. [container](#containers)를 변경하여 다양한 방법으로 가로폭을 제한할 수 있습니다.
- 내비게이션에서 배치 및 간격 제어는 [spacing]({{< docsref "/utilities/spacing" >}}) 와 [flex]({{< docsref "/utilities/flex" >}}) 유틸리티 클래스를 사용합니다.
- 내비게이션은 기본적으로 반응형이지만 간단히 변경할 수 있습니다. 반응형 동작은 Collapse JavaScript 플러그인에 의존합니다.
- 접근성을 확보하려면 `<nav>` 요소를 사용하거나, 혹은 `<div>`와 같이 보다 범용적인 요소를 사용하는 경우에는 `role="navigation"`을 추가하여 스크린 리더 사용자를 위해 랜드마크가 되는 곳임을 명시적으로 알려주어야 합니다.
- 현재 페이지에는 `aria-current="page"`를, 세트 안에서의 현재 아이템에는 `aria-current="true"`를 사용하여, 현재 아이템을 표시합니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Supported content

내비게이션에는 몇 가지의 서브 컴포넌트의 지원이 포함되어 있습니다. 필요에 따라, 아래에서 선택해 주세요.:

- `.navbar-brand`으로 회사명이나 제품명, 프로젝틈명 등.
- `.navbar-nav` 으로 full-height와 보다 가벼운 네비게이션(드롭다운을 위한 지원 포함)을 실현.
- `.navbar-toggler`은 콜랩스 플러그인과 다른 [navigation toggling](#responsive-behaviors)행동에 사용.
- 모든 폼 컨트롤과 액션을 위한 flex와 spacing 유틸리티.
- 수직방향으로 센터링된 문자열을 추가하기 위한 `.navbar-text`.
- `.collapse.navbar-collapse` 으로 부모 브레이크 포인트에 따라 내비바의 컨텐츠를 그룹화하거나 감출수 있음.
- 옵션으로 `.navbar-scroll`를 추가해 `max-height`와 [scroll expanded navbar content](#scrolling)이 가능.

여기서는 `lg` (large) 브레이크 포인트에서 자동으로 접히는 'light' 테마를 사용한 반응형 내비게이션 바에 포함된 서브 컴포넌트의 예시를 보여주고 있습니다.

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

This example uses [background]({{< docsref "/utilities/background" >}}) (`bg-light`) and [spacing]({{< docsref "/utilities/spacing" >}}) (`my-2`, `my-lg-0`, `me-sm-0`, `my-sm-0`) utility classes.

### Brand

`.navbar-brand` 는 대부분의 요소에 적용이 가능하지만, 요소에 따라서 유틸리티 클래스나 사용자 정의 스타일을 필요로 하는 경우가 있기 때문에 앵커가 최적입니다.

#### Text

Add your text within an element with the `.navbar-brand` class.

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

#### Image

You can replace the text within the `.navbar-brand` with an `<img>`.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
    </a>
  </div>
</nav>
{{< /example >}}

#### Image and text

You can also make use of some additional utilities to add an image and text at the same time. Note the addition of `.d-inline-block` and `.align-text-top` on the `<img>`.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>
{{< /example >}}

### Nav

내비게이션 바의 내비게이션 링크는 `.nav` 옵션에 독자적인 변경 클래스를 추가하여 구축되며, 적절한 반응형 스타일링을 위해 [toggler classes](#toggler) 사용을 필요로 합니다. 내비게이션 바 안에서 내비게이션 링크는 **수평 방향으로 펼쳐져 깔끔하게 정렬**합니다.

Add the `.active` class on `.nav-link` to indicate the current page.

Please note that you should also add the `aria-current` attribute on the active `.nav-link`.

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

또한, 내비게이션 링크에 클래스를 사용하고 있기 때문에 목록 기반 접근법을 완전히 피할수 있습니다.

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

내비게이션 바에서 드롭다운을 사용할 수도 있습니다.
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

내비게이션 바 내에 다양한 폼 컨트롤 및 컴포넌트를 배치합니다:

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

Input group 도 사용 가능합니다. 내비게이션 바가 폼 전체 혹은 대부분이 폼인 경우라면, `<form>` 요소를 컨테이너로 사용하여 HTML 을 저장할 수 있습니다.

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

문자열의 수직 방향과 수평 간격을 조정하는 `.navbar-text` 를 포함할 수 있습니다.

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

테마 설정 클래스와 `background-color` 유틸리티의 조합으로 내비게이션 바의 테마 설정이 더욱 간단해졌습니다. 밝은 배경색에는 `.navbar-light`, 어두운 배경색에는 `.navbar-dark` 를 선택합니다. 그 다음, `.bg-*` 유틸리티를 사용하여 커스터마이징합니다.

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

필수는 아니지만, 내비게이션 바를 `.container` 로 감싸 페이지 중앙에 배치할 수도 있지만 내부의 컨테이너가 필요하게 된다는 점을 주의해 주세요. 혹은, `.navbar` 의 내부에 컨테이너를 추가하고 [fixed 혹은 static top navbar](#placement) 의 내용만을 중앙에 배치할 수도 있습니다.

{{< example >}}
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
{{< /example >}}

반응형 컨테이너 중 하나를 사용하여 내비게이션 바의 컨텐츠 표시 폭을 변경할 수 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
{{< /example >}}

## Placement

[Position utilities]({{< docsref "/utilities/position" >}}) 를 사용하여 내비게이션 바를 정적이지 않은 위치에 배치할 수 있습니다. 상단고정, 하단 고정, 스티커식(페이지가 상단까지 스크롤한 뒤에도 그 위치에 남는) 상단고정을 할지 선택할 수 있습니다. 고정 내비게이션 바는 `position: fixed` 를 사용합니다. 이는 DOM 의 통상적인 흐름에서 취득되어 다른 요소와의 중복을 막기 위해 사용자 정의 CSS(예를 들어, `<body>` 의 `padding-top` 등)가 필요할 수 있습니다.

또한, **`.sticky-top`은 `position: sticky`를 사용하고 있는데 [모든 브라우저에서 완벽하게 지원되는 것은 아닙니다](https://caniuse.com/css-sticky)**

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

## Scrolling

`.navbar-nav` (혹은 다른 내비바의 서브 컴포넌트)에 `.navbar-nav-scroll`을 추가하여 접힌 내비바의 토글 가능한 컨텐츠 내에서 수직방향 스크롤을 활성화시킵니다. 기본적으로는 `75vh`(혹은 뷰포트 높이의 75%)로 스크롤이 시작되지만 로컬 CSS 사용자 정의 속성 `--bs-navbar-height`나 사용자 정의 스타일로 덮어쓸수 있습니다. 큰 뷰포트에서 내비바를 펼치면 기본 내비바처럼 컨텐츠가 나타납니다.

이 동작에는 `overflow`의 잠재적인 결점이 따르므로 주의가 필요합니다. `overflow-y: auto`(여기서 컨텐츠를 스크롤하기 위해 필요)를 설정하면 `overflow-x`는 `auto`와 동등해져 수평방향의 컨텐츠가 일부 잘립니다. 

아래는 `.navbar-nav-scroll`에 `style="--bs-scroll-height: 100px;"`를 사용한 내비바의 예시로, 최적의 간격을 확보하기 위한 여백을 갖추고 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
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

## Responsive behaviors

`.navbar-toggler`, `.navbar-collapse`, 및 `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` 클래스를 사용하여 컨텐츠가 버튼 뒤쪽에서 접히는 시점을 결정합니다. 다른 유틸리티와 결합하여 특정 요소를 언제 표시하고 감출지 손쉽게 선택할 수 있습니다.

접히지 않는 내비게이션 바의 경우, `.navbar-expand` 클래스를 내비게이션 바에 추가합니다. 항상 접히는 내비게이션 바의 경우 `.navbar-expand` 클래스를 추가하지 마십시오.

### Toggler

내비게이션 바의 토글은 기본적으로 왼쪽 정렬이지만 `.navbar-brand`와 같은 형제 요소와 연결되는 경우는 자동적으로 오른쪽 정렬이 됩니다. 마크업을 거꾸로 하면 토글의 배치도 반대로 바뀝니다. 아래는 색다른 토글 스타일의 예입니다.

아래의 예시를 가장 작은 브레이크 포인트로 확인해 보세요.
`.navbar-brand`가 표시되지 않습니다:

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

구조적으로 `.navbar` 바깥쪽에 있는 컨텐츠를 위해 콜랩스 플러그인을 사용해 컨테이너 요소를 트리거하고 싶을 수도 있습니다. 이 플러그인은 `id`와 `data-bs-target`의 매칭으로 동작하기 때문에 실행이 간단합니다.

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

이렇게 했을때는 컨테이너가 열렸을 때 포커스를 이동시키기 위한 추가적인 JavaScript를 포함시키는 것을 권장합니다. 그렇지 않으면, 키보드 사용자나 지원 기술 사용자는 새롭게 표시된 컨텐츠를 찾는데 어려움을 겪을 것입니다. 특히, 열린 컨테이너가 문서의 구조상 토글러보다 *before*에 있는 경우는 더욱 그렇습니다. 또한 토글러가 컨텐츠의 `id`를 가르키는 `aria-controls` 속성을 가지고 있는 것을 확인할 필요가 있습니다. 이론적으로는 지원 기술 사용자가 토글러에서 그것을 제어하는 컨텐츠를 직접 점프할수 있게 되어 있지만 현재 이 지원은 매우 애매합니다.

## Sass

### Variables

{{< scss-docs name="navbar-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="navbar-theme-variables" file="scss/_variables.scss" >}}

### Loop

[Responsive navbar expand/collapse classes](#responsive-behaviors)(예를 들어, `.navbar-expand-lg`)는 `$breakpoints` 맵과 조합되어 `scss/_navbar.scss`내의 반복문으로 생성됩니다.

{{< scss-docs name="navbar-expand-loop" file="scss/_navbar.scss" >}}
