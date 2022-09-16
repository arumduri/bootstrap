---
layout: docs
title: 구성 요소
title_en: Contents
description: 컴파일 및 소스 코드 버전을 포함해서 Bootstrap에 무엇이 포함되어 있는지 알아보세요.
group: getting-started
toc: true
---

## 컴파일된 Bootstrap

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

이것은 어떤 웹 프로젝트에서도 빠르게 사용할 수 있는 Bootstrap의 가장 기본적인 형태인 컴파일된 파일입니다. 우리는 컴파일된 CSS와 JS (`bootstrap.*`), 그리고 컴파일 및 경량화된 primevideoCSS와 JS (`bootstrap.min.*`)도 제공합니다. [소스 맵](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`)은 몇몇 브라우저의 개발자 도구에서 사용할 수 있습니다. 번들된 JS 파일 (`bootstrap.bundle.js` 및 경량화된 `bootstrap.bundle.min.js`)에는 [Popper](https://popper.js.org/)가 포함되어 있습니다.

### CSS 파일

Bootstrap에는 컴파일된 CSS의 일부 또는 전체를 포함하기 위한 몇 가지 선택지가 포함되어 있습니다.

{{< bs-table "table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `bootstrap.css`<br> `bootstrap.min.css`<br> `bootstrap.rtl.css`<br> `bootstrap.rtl.min.css` | Included | Included | Included | Included |
| `bootstrap-grid.css`<br> `bootstrap-grid.rtl.css`<br> `bootstrap-grid.min.css`<br> `bootstrap-grid.rtl.min.css` | [Only grid system]({{< docsref "/layout/grid" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
| `bootstrap-utilities.css`<br> `bootstrap-utilities.rtl.css`<br> `bootstrap-utilities.min.css`<br> `bootstrap-utilities.rtl.min.css` | — | — | — | Included |
| `bootstrap-reboot.css`<br> `bootstrap-reboot.rtl.css`<br> `bootstrap-reboot.min.css`<br> `bootstrap-reboot.rtl.min.css` | — | [Only Reboot]({{< docsref "/content/reboot" >}}) | — | — |
{{< /bs-table >}}

## JS 파일

마찬가지로 컴파일된 JavaScript의 일부 또는 전체를 포함할 수 있는 선택지가 있습니다.

{{< bs-table "table" >}}
| JS Files | Popper |
| --- | --- |
| `bootstrap.bundle.js`<br> `bootstrap.bundle.min.js`<br> | Included |
| `bootstrap.js`<br> `bootstrap.min.js`<br> | – |
{{< /bs-table >}}

## Bootstrap 소스 코드

Bootstrap 소스 코드 다운로드에는 컴파일된 CSS 및 JavaScript 에셋, Sass 소스, JavaScript 및 문서가 포함되어 있습니다. 구체적으로는 다음에 나와있는 것 외에도 추가적인 것들이 포함되어 있습니다:

```text
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── {{< param docs_version >}}/
│              └── examples/
├── js/
└── scss/
```

`scss/` 및 `js/`는 우리 CSS 및 JavaScript의 소스 코드입니다. `dist/` 폴더에는 사전 컴파일 다운로드 부분에 나와있는 모든 것들이 포함되어 있습니다. `site/content/docs/` 폴더에는 호스팅되는 문서의 소스 코드가 포함되어 있으며, Bootstrap의 라이브 예제도 포함되어 있습니다. 그 밖의 다른 파일에는 패키지 지원, 라이선스 정보, 그리고 개발 관련을 제공합니다.
