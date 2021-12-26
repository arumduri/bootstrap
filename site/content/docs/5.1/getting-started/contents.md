---
layout: docs
title: 구성 요소
title_en: Contents
description: 사전 컴파일 및 소스 코드 버전을 포함해서 Bootstrap에 무엇이 포함되어 있는지 알아보세요.
group: getting-started
toc: true
---

## 사전 컴파일된 Bootstrap

다운로드 한 후 압축을 해제하면 다음과 같은 것들을 확인하실 수 있습니다:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-grid.rtl.css
│   ├── bootstrap-grid.rtl.css.map
│   ├── bootstrap-grid.rtl.min.css
│   ├── bootstrap-grid.rtl.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap-reboot.rtl.css
│   ├── bootstrap-reboot.rtl.css.map
│   ├── bootstrap-reboot.rtl.min.css
│   ├── bootstrap-reboot.rtl.min.css.map
│   ├── bootstrap-utilities.css
│   ├── bootstrap-utilities.css.map
│   ├── bootstrap-utilities.min.css
│   ├── bootstrap-utilities.min.css.map
│   ├── bootstrap-utilities.rtl.css
│   ├── bootstrap-utilities.rtl.css.map
│   ├── bootstrap-utilities.rtl.min.css
│   ├── bootstrap-utilities.rtl.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap.rtl.css
│   ├── bootstrap.rtl.css.map
│   ├── bootstrap.rtl.min.css
│   └── bootstrap.rtl.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.esm.js
    ├── bootstrap.esm.js.map
    ├── bootstrap.esm.min.js
    ├── bootstrap.esm.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map
```

이것은 어떤 웹 프로젝트에서도 빠르게 사용할 수 있는 Bootstrap의 가장 기본적인 형태인 프리 컴파일된 파일입니다. 우리는 컴파일된 CSS와 JS (`bootstrap.*`), 그리고 컴파일 및 경량화된 primevideoCSS와 JS (`bootstrap.min.*`)도 제공합니다. [소스 맵](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`)은 몇몇 브라우저의 개발자 도구에서 사용할 수 있습니다. 번들된 JS 파일 (`bootstrap.bundle.js` 및 경량화된 `bootstrap.bundle.min.js`)에는 [Popper](https://popper.js.org/)가 포함되어 있습니다.

## CSS 파일

Bootstrap에는 컴파일된 CSS의 일부 또는 전체를 포함하기 위한 몇 가지 선택지가 포함되어 있습니다.

<table class="table">
  <thead>
    <tr>
      <th scope="col">CSS 파일</th>
      <th scope="col" class="text-nowrap">레이아웃</th>
      <th scope="col">콘텐츠</th>
      <th scope="col" class="text-nowrap">컴포넌트</th>
      <th scope="col" class="text-nowrap">유틸리티</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.rtl.min.css</code></div>
      </th>
      <td>포함</td>
      <td>포함</td>
      <td>포함</td>
      <td>포함</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap-grid.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.rtl.min.css</code></div>
      </th>
      <td><a class="link-secondary" href="{{< docsref "/layout/grid" >}}">그리드 시스템만</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary" href="{{< docsref "/utilities/flex" >}}">flex 유틸리티만</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td>포함</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary text-nowrap" href="{{< docsref "/content/reboot" >}}">Reboot만</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

## JS 파일

마찬가지로 컴파일된 JavaScript의 일부 또는 전체를 포함할 수 있는 선택지가 있습니다.

<table class="table">
  <thead>
    <tr>
      <th scope="col">JS 파일</th>
      <th scope="col">Popper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap.bundle.js</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.bundle.min.js</code></div>
      </th>
      <td>포함</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap.js</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.min.js</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

## Bootstrap 소스 코드

Bootstrap 소스코드 다운로드에는 사전 컴파일된 CSS 및 JavaScript 에셋, Sass 소스, JavaScript 및 문서가 포함되어 있습니다. 구체적으로는 다음에 나와있는 것 외에도 추가적인 것들이 포함되어 있습니다:

```text
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── 5.1/
│              └── examples/
├── js/
└── scss/
```

`scss/` 및 `js/`는 우리 CSS 및 JavaScript의 소스 코드입니다. `dist/` 폴더에는 사전 컴파일 다운로드 부분에 나와있는 모든 것들이 포함되어 있습니다. `site/docs/` 폴더에는 문서의 소스 코드가 포함되어 있으며, `examples/`에는 Bootstrap의 사용 예시가 있습니다. 그 밖의 다른 파일에는 패키지 지원, 라이선스 정보, 그리고 개발 관련을 제공합니다.
