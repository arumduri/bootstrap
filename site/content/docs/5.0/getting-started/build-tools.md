---
layout: docs
title: Build tools(빌드 도구)
description: 문서 빌드, 소스 코드 컴파일, 테스트 실행 등을 할 수 있는 Bootstrap에 포함된 npm 스크립트를 사용하는 방법에 대해서 알아보세요. 
group: getting-started
toc: true
---

## Tooling setup

Bootstrap은 빌드 시스템으로 [npm 스크립트](https://docs.npmjs.com/misc/scripts/)를 사용합니다. [package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json)에는 코드 컴파일, 테스트 실행 등을 포함한 프레임워크 작업을 위한 편리한 수단들이 이습니다.

빌드 시스템을 사용하고 로컬에서 문서를 실행하려면 Bootstrap의 소스 파일과 Node의 복사본이 필요합니다. 이 단계를 따르면 작업할 준비가 될겁니다:

1. 의존성 관리를 위해 사용하는 [Node.js를 다운로드하고 설치해주세요](https://nodejs.org/en/download/).
2. [Bootstrap의 소스]({{< param "download.source" >}})를 다운로드하거나 [Bootstrap의 리포지토리]({{< param repo >}})를 포크해주세요.
3. 최상위 `/bootstrap` 폴더로 이동한 다음 `npm install`을 실행해서 [package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json)에 있는 로컬 의존성을 설치해주세요.

모두 완료했다면 명령줄을 통해서 여려 명령어를 실행할 수 있습니다.

## Using npm scripts

[package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json)에는 프로젝트 개발에 사용되는 다수의 작업이 있습니다. 터미널에서 `npm run`을 실행해서 모든 npm 스크립트를 확인해보세요. **최우선 작업에는 다음이 포함됩니다:**

<table class="table">
  <thead>
    <tr>
      <th>작업</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>npm start</code>
      </td>
      <td>
        CSS와 JavaScript를 컴파일하고 문서를 빌드한 다음 로컬 서버를 시작합니다.
      </td>
    </tr>
    <tr>
      <td>
        <code>npm run dist</code>
      </td>
      <td>
       컴파일된 파일과 함께 <code>dist/</code> 폴더를 생성합니다. <a href="https://sass-lang.com/">Sass</a>, <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>, 그리고 <a href="https://github.com/terser/terser">terser</a>가 필요합니다.
      </td>
    </tr>
    <tr>
      <td>
        <code>npm test</code>
      </td>
      <td>
        <code>npm run dist</code>를 실행한 다음 로컬에서 테스트를 실행합니다
      </td>
    </tr>
    <tr>
      <td>
        <code>npm run docs-serve</code>
      </td>
      <td>
        빌드하고 로컬에서 문서를 실행합니다.
      </td>
    </tr>
  </tbody>
</table>

## Autoprefixer

Bootstrap은 빌드할 때 CSS 속성에 자동으로 벤더 접두사를 추가하기 위해 [Autoprefixer][autoprefixer] (빌드 과정에 포함됨)를 사용합니다. 이것을 통해서 시간과 코드를 아낄 수 있고 v3에서 볼 수 있는 것과 같은 벤더 믹스인의 필요성을 제거하면서 CSS의 핵심 부분을 한 번에 작성할 수 있습니다.

우리는 Autoprefixer를 통해서 지원하는 브라우저의 목록을 GitHub repository내의 개별 파일에서 관리하고 있습니다. 자세한 부분은 [.browserslistrc]({{< param repo >}}/blob/v{{< param current_version >}}/.browserslistrc)를 확인해주세요.

## RTLCSS

Bootstrap은 컴파일된 CSS를 처리하고 RTL로 변환하기 위해서 [RTLCSS](https://rtlcss.com/)를 사용합니다 – 기본적으로 수평 방향이 정의된 속성 (예 `padding-left`)을 반대로 바꿉니다. 이를 통해서 한 번만 CSS를 작성할 수 있게 해주고 RTLCSS [컨트롤](https://rtlcss.com/learn/usage-guide/control-directives/)과 [값](https://rtlcss.com/learn/usage-guide/value-directives/) 지침을 사용해서 마이너한 트윅들을 만들어줍니다.

## Local documentation

로컬에서 문서를 실행하려면 Hugo가 필요하며, [hugo-bin](https://www.npmjs.com/package/hugo-bin) npm 패키지를 통해서 설치할 수 있습니다. Hugo은 기본 포함, 마크다운 기반 파일, 템플릿 등을 제공하는 아주 빠르면서 상당한 수준으로 확장할 수 있는 정적 사이트 생성기입니다 다음은 시작하는 방법입니다:

1. [도구 구성](#도구-구성)의 내용을 통해서 모든 의존성을 설치해주세요.
2. 최상위 `/bootstrap` 폴더에서 명령줄 도구를 통해 `npm run docs-serve`를 실행해주세요.
3. 브라우저에서 `http://localhost:9001/`를 열면, 짜잔.

Hugo를 사용하는 방법에 대해 자세히 알아보고 싶다면 자체 [문서](https://gohugo.io/documentation/)를 확인해주세요.

## Troubleshooting

의존성을 설치하면서 문제가 발생한다면 모든 이전 의존성 버전 (전역 및 로컬)을 제거해주세요. 그리고 `npm install`을 다시 실행해주세요.

[autoprefixer]: https://github.com/postcss/autoprefixer
