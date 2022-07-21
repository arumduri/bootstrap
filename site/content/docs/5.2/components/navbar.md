---
layout: docs
title: 내비게이션 바
title_en: Navbar
description: Bootstrap의 강력하고 반응형적인 내비게이션 헤더, 내비게이션 바의 문서와 예. 콜랩스(collapse) 플러그인 지원을 포함한 브랜딩, 내비게이션 등의 지원이 포함되어 있습니다.
group: components
toc: true
---

## 작동 원리

내비게이션 바를 시작하기 전에 알아야 할 것들을 설명하겠습니다:

- Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` for responsive collapsing and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Change the [container](#containers) to limit their horizontal width in different ways.
- Use our [spacing]({{< docsref "/utilities/spacing" >}}) and [flex]({{< docsref "/utilities/flex" >}}) utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set.
- **New in v5.2.0:** Navbars can be themed with CSS variables that are scoped to the `.navbar` base class. `.navbar-light` has been deprecated and `.navbar-dark` has been rewritten to override CSS variables instead of adding additional styles.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## 지원 콘텐츠

내비게이션에는 몇 가지의 서브 컴포넌트의 지원이 포함되어 있습니다. 필요에 따라, 아래에서 선택해 주세요.:

- `.navbar-brand`으로 회사명이나 제품명, 프로젝틈명 등.
- `.navbar-nav`으로 full-height와 보다 가벼운 네비게이션(드롭다운을 위한 지원 포함)을 실현.
- `.navbar-toggler`은 콜랩스 플러그인과 다른 [navigation toggling](#responsive-behaviors)행동에 사용.
- 모든 폼 컨트롤과 액션을 위한 flex와 spacing 유틸리티.
- 수직 방향으로 센터링된 문자열을 추가하기 위한 `.navbar-text`.
- `.collapse.navbar-collapse`으로 부모 중단점에 따라 내비게이션 바의 콘텐츠를 그룹화하거나 감출수 있음.
- 옵션으로 `.navbar-scroll`를 추가해 `max-height`와 [scroll expanded navbar content](#scrolling)이 가능.

여기서는 `lg` (large) 중단점에서 자동으로 접히는 'light' 테마를 사용한 반응형 내비게이션 바에 포함된 서브 컴포넌트의 예시를 보여주고 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

This example uses [background]({{< docsref "/utilities/background" >}}) (`bg-light`) and [spacing]({{< docsref "/utilities/spacing" >}}) (`me-auto`, `mb-2`, `mb-lg-0`, `me-2`) utility classes.

### 브랜드

`.navbar-brand` 는 대부분의 요소에 적용이 가능하지만, 요소에 따라서 유틸리티 클래스나 사용자 정의 스타일을 필요로 하는 경우가 있기 때문에 앵커가 최적입니다.

#### 텍스트

`.navbar-brand` 클래스를 요소 내의 텍스트에 추가합니다.

{{< example >}}
<!-- As a link -->
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<!-- As a heading -->
<nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>
{{< /example >}}

#### 이미지

`.navbar-brand` 안에 텍스트 대신 `<img>`를 사용할 수 있습니다.

{{< example >}}
<nav class="navbar bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
    </a>
  </div>
</nav>
{{< /example >}}

#### 이미지와 텍스트

또한 몇 가지 추가 유틸리티를 이용하여 이미지와 텍스트를 동시에 추가할 수 있습니다. `<img>`에 `.d-inline-block`과 `.align-text-top`을 추가하고 있다는 사실에 주목해 주세요.

{{< example >}}
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>
{{< /example >}}

### 내비게이션 바

내비게이션 바의 내비게이션 링크는 `.nav` 옵션에 독자적인 변경 클래스를 추가하여 빌드되며, 적절한 반응형 스타일링을 위해 [toggler classes](#toggler) 사용을 해야 합니다. 내비게이션 바 안에서 내비게이션 링크는 **수평 방향으로 펼쳐져 깔끔하게 정렬**합니다.

현재 페이지를 나타내기 위해 `.nav-link`에 `.nav-link` 클래스를 추가합니다.

현재 페이지의 `.nav-link`에는 `aria-current` 속성을 추가해 주세요.


{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

또한, 내비게이션 링크에 클래스를 사용하고 있기 때문에 목록 기반 접근법을 완전히 피할수 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

내비게이션 바에서 드롭다운을 사용할 수도 있습니다.
드롭다운 메뉴는 배치를 위한 줄바꿈 된 요소가 필요하기 때문에 아래와 같이 `.nav-item`과 `.nav-link` 과는 다른 중첩 된 요소로 분리해 사용해 주세요.

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
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

### 폼

내비게이션 바 내에 다양한 폼 컨트롤 및 컴포넌트를 배치합니다:

{{< example >}}
<nav class="navbar bg-light">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
{{< /example >}}

`.navbar`의 바로 다음 자식 요소는 flex 레이아웃을 사용하며 기본값은 `justify-content: space-between` 입니다. 이 동작을 조정하려면 필요에 따라 추가적인 [flex utilities]({{< docsref "/utilities/flex" >}})를 사용하세요.

{{< example >}}
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
{{< /example >}}

Input group도 사용 가능합니다. 내비게이션 바가 폼 전체 혹은 대부분이 폼인 경우라면, `<form>` 요소를 컨테이너로 사용하여 HTML을 저장할 수 있습니다.

{{< example >}}
<nav class="navbar bg-light">
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
<nav class="navbar bg-light">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</nav>
{{< /example >}}

### 텍스트

문자열의 수직 방향과 수평 간격을 조정하는 `.navbar-text`를 포함할 수 있습니다.

{{< example >}}
<nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
{{< /example >}}

필요 시 다른 컴포넌트 및 유틸리티와 혼합하여 사용할 수 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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

## 색상 스키마

{{< callout warning >}}
**New in v5.2.0:** Navbar theming is now powered by CSS variables and `.navbar-light` has been deprecated. CSS variables are applied to `.navbar`, defaulting to the "light" appearance, and can be overridden with `.navbar-dark`.
{{< /callout >}}

Navbar themes are easier than ever thanks to Bootstrap's combination of Sass and CSS variables. The default is our "light navbar" for use with light background colors, but you can also apply `.navbar-dark` for dark background colors. Then, customize with `.bg-*` utilities.

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
        <form class="d-flex" role="search">
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
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
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
        <form class="d-flex" role="search">
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

<nav class="navbar" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
```

## 컨테이너

필수는 아니지만, 내비게이션 바를 `.container`로 감싸 페이지 중앙에 배치할 수도 있지만 내부의 컨테이너가 필요하게 된다는 점을 주의해 주세요. 혹은, `.navbar`의 내부에 컨테이너를 추가하고 [fixed 혹은 static top navbar](#placement) 의 내용만을 중앙에 배치할 수도 있습니다.

{{< example >}}
<div class="container">
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
{{< /example >}}

반응형 컨테이너 중 하나를 사용하여 내비게이션 바의 콘텐츠 표시 폭을 변경할 수 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
{{< /example >}}

## 배치

Use our [position utilities]({{< docsref "/utilities/position" >}}) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, stickied to the top (scrolls with the page until it reaches the top, then stays there), or stickied to the bottom (scrolls with the page until it reaches the bottom, then stays there).

Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

{{< example >}}
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Default</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar fixed-top bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar fixed-bottom bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar sticky-top bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar sticky-bottom bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky bottom</a>
  </div>
</nav>
{{< /example >}}

## Scrolling

`.navbar-nav` (혹은 다른 내비게이션 바의 서브 컴포넌트)에 `.navbar-nav-scroll`을 추가하여 접힌 내비게이션 바의 토글 가능한 콘텐츠 내에서 수직 방향 스크롤을 활성화시킵니다. 기본적으로는 `75vh`(혹은 뷰포트 높이의 75%)로 스크롤이 시작되지만 로컬 CSS 사용자 정의 속성 `--bs-navbar-height`나 사용자 정의 스타일로 덮어쓸수 있습니다. 큰 뷰포트에서 내비게이션 바를 펼치면 기본 내비게이션 바처럼 콘텐츠가 나타납니다.

이 동작에는 `overflow`의 잠재적인 결점이 따르므로 주의가 필요합니다. `overflow-y: auto`(여기서 콘텐츠를 스크롤하기 위해 필요)를 설정하면 `overflow-x`는 `auto`와 동등해져 수평 방향의 콘텐츠가 일부 잘립니다. 

아래는 `.navbar-nav-scroll`에 `style="--bs-scroll-height: 100px;"`를 사용한 내비게이션 바의 예시로, 최적의 간격을 확보하기 위한 여백을 갖추고 있습니다.

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

## 반응형 비헤이비어

`.navbar-toggler`, `.navbar-collapse`, 및 `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` 클래스를 사용하여 콘텐츠가 버튼 뒤쪽에서 접히는 시점을 결정합니다. 다른 유틸리티와 결합하여 특정 요소를 언제 표시하고 감출지 손쉽게 선택할 수 있습니다.

접히지 않는 내비게이션 바의 경우, `.navbar-expand` 클래스를 내비게이션 바에 추가합니다. 항상 접히는 내비게이션 바의 경우 `.navbar-expand` 클래스를 추가하지 마십시오.

### 토글

내비게이션 바의 토글은 기본적으로 왼쪽 정렬이지만 `.navbar-brand`와 같은 형제 요소와 연결되는 경우는 자동으로 오른쪽 정렬이 됩니다. 마크업을 거꾸로 하면 토글의 배치도 반대로 바뀝니다. 아래는 색다른 토글 스타일의 예입니다.

아래의 예시를 가장 작은 중단점로 확인해 보세요.
`.navbar-brand`가 표시되지 않습니다:

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

왼쪽에 브랜드명이 표시되고 오른쪽에 토글이 표시되고 있습니다:

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

왼쪽에 토글이, 오른쪽에 브랜드명이 들어가 있습니다:

{{< example >}}
<nav class="navbar navbar-expand-lg bg-light">
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
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

### 외부 콘텐츠

구조적으로 `.navbar` 바깥쪽에 있는 콘텐츠를 위해 콜랩스 플러그인을 사용해 컨테이너 요소를 트리거하고 싶을 수도 있습니다. 이 플러그인은 `id`와 `data-bs-target`의 매칭으로 동작하기 때문에 실행이 간단합니다.

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

이렇게 했을 때는 컨테이너가 열렸을 때 포커스를 이동시키기 위한 추가적인 JavaScript를 포함하는 것을 권장합니다. 그렇지 않으면, 키보드 사용자나 지원 기술 사용자는 새롭게 표시된 콘텐츠를 찾는 데 어려움을 겪을 것입니다. 특히, 열린 컨테이너가 문서의 구조상 토글러보다 *before*에 있는 경우는 더욱더 그렇습니다. 또한 토글러가 콘텐츠의 `id`를 가르키는 `aria-controls` 속성을 가지고 있는 것을 확인할 필요가 있습니다. 이론적으로는 지원 기술 사용자가 토글러에서 그것을 제어하는 콘텐츠를 직접 점프할 수 있게 되어 있지만, 현재 이 지원은 매우 애매합니다.

### 오프캔버스

Transform your expanding and collapsing navbar into an offcanvas drawer with the [offcanvas component]({{< docsref "/components/offcanvas" >}}). We extend both the offcanvas default styles and use our `.navbar-expand-*` classes to create a dynamic and flexible navigation sidebar.

아래 예에서 모든 중단점에서 항상 축소되는 오프캔버스 탐색 모음을 만들려면 `.navbar-expand-*` 클래스를 완전히 생략해야 합니다.

{{< example >}}
<nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

`lg`와 같은 특정 중단점에서 일반 내비바로 확장되는 캔버스 내비바를 만들려면 `.navbar-expand-lg`를 사용하세요.

```html
<nav class="navbar navbar-expand-lg bg-light fixed-top">
  <a class="navbar-brand" href="#">Offcanvas navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    ...
  </div>
</nav>
```

When using offcanvas in a dark navbar, be aware that you may need to have a dark background on the offcanvas content to avoid the text becoming illegible. In the example below, we add `.navbar-dark` and `.bg-dark` to the `.navbar`, `.text-bg-dark` to the `.offcanvas`, `.dropdown-menu-dark` to `.dropdown-menu`, and `.btn-close-white` to `.btn-close` for proper styling with a dark offcanvas.

{{< example >}}
<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.2.0" >}}

As part of Bootstrap's evolving CSS variables approach, navbars now use local CSS variables on `.navbar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="navbar-css-vars" file="scss/_navbar.scss" >}}

Some additional CSS variables are also present on `.navbar-nav`:

{{< scss-docs name="navbar-nav-css-vars" file="scss/_navbar.scss" >}}

### Sass variables

{{< scss-docs name="navbar-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="navbar-theme-variables" file="scss/_variables.scss" >}}

### Sass loop

[Responsive navbar expand/collapse classes](#responsive-behaviors)(예를 들어, `.navbar-expand-lg`)는 `$breakpoints` 맵과 조합되어 `scss/_navbar.scss`내의 반복문으로 생성됩니다.

{{< scss-docs name="navbar-expand-loop" file="scss/_navbar.scss" >}}
