---
layout: docs
title: 기여
title_en: Contribute
description: 설명서 빌드 스크립트 및 테스트를 통해 Bootstrap 개발을 돕습니다.
group: getting-started
toc: true
aliases: "/docs/5.3/getting-started/build-tools/"
---

## 준비하기

Bootstrap은 [npm 스크립트](https://docs.npmjs.com/misc/scripts/)를 사용하여 문서를 작성하고 소스 파일을 컴파일합니다. [package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json)에는 코드 컴파일, 테스트 실행 등을 위한 스크립트가 들어 있습니다. 이는 저장소 및 문서 외부에서 사용하기 위한 것이 아닙니다.

빌드 시스템을 사용하고 로컬에서 문서를 실행하려면 Bootstrap의 소스 파일과 Node의 복사본이 필요합니다. 이 단계를 따르면 작업할 준비가 될겁니다:

1. [Node.js를 다운로드하고 설치해주세요](https://nodejs.org/ko/download). 의존성 관리를 위해 사용됩니다.
2. [Bootstrap의 소스]({{< param "download.source" >}})를 다운로드하거나 [Bootstrap의 리포지토리]({{< param repo >}})를 포크 후 클론해주세요.
3. 최상위 `/bootstrap` 폴더로 이동한 다음 `npm install`을 실행해서 [package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json)에 있는 로컬 의존성을 설치해주세요.

모두 완료했다면 명령줄을 통해서 여려 명령어를 실행할 수 있습니다.

## npm 스크립트 사용하기

[package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json)에는 프로젝트 개발에 사용되는 다수의 작업이 있습니다. 터미널에서 `npm run`을 실행해서 모든 npm 스크립트를 확인해보세요. **최우선 작업에는 다음이 포함됩니다:**

{{< bs-table >}}
| 작업 | 설명 |
| --- | --- |
| `npm start` | CSS와 JavaScript를 컴파일하고 문서를 빌드한 다음 로컬 서버를 시작합니다. |
| `npm run dist` | 컴파일된 파일과 함께 `dist/` 폴더를 생성합니다. [Sass](https://sass-lang.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), 그리고 [terser](https://github.com/terser/terser)를 사용합니다. |
| `npm test` | `npm run dist`를 실행한 다음 로컬에서 테스트를 실행합니다. |
| `npm run docs-serve` | 빌드하고 로컬에서 문서를 실행합니다. |
{{< /bs-table >}}

{{< callout info >}}
{{< partial "callouts/info-npm-starter.md" >}}
{{< /callout >}}

## Sass

Bootstrap은 빌드할 때 Sass 소스 파일을 CSS 파일로 컴파일하기 위해 [Dart Sass](https://sass-lang.com/dart-sass) (빌드 과정에 포함됨)를 사용하며 자체 자산 파이프라인을 사용해서 Sass를 컴파일하는 경우에도 동일한 작업을 수행하는 것이 좋습니다. 이전 Bootstrap v4에는 Node Sass를 사용했지만 Node Sass를 포함하여 그 위에 빌드된 LibSass 및 패키지는 이제 더 이상 [사용되지 않습니다](https://sass-lang.com/blog/libsass-is-deprecated).

Dart Sass는 10의 반올림 정밀도를 사용하며 이 값은 효율성을 위해서 조정할 수 없습니다. 경량화와 같이 생성된 CSS를 추가적으로 처리하는 동안에는 정밀도를 낮추지 않지만 그렇게 선택한다면 브라우저 반올림 문제를 방지하기 위해서 정밀도를 6 이상으로 유지하는 것이 좋습니다.

## Autoprefixer

Bootstrap은 빌드할 때 CSS 속성에 자동으로 벤더 접두어를 추가하기 위해 [Autoprefixer](https://github.com/postcss/autoprefixer) (빌드 과정에 포함됨)를 사용합니다. 이것을 통해서 시간과 코드를 아낄 수 있고 v3에서 볼 수 있는 것과 같은 벤더 믹스인의 필요성을 제거하면서 CSS의 핵심 부분을 한 번에 작성할 수 있습니다.

우리는 Autoprefixer를 통해서 지원하는 브라우저의 목록을 GitHub repository내의 개별 파일에서 관리하고 있습니다. 자세한 부분은 [.browserslistrc]({{< param repo >}}/blob/v{{< param current_version >}}/.browserslistrc)를 확인해주세요.

## RTLCSS

Bootstrap은 컴파일된 CSS를 처리하고 RTL로 변환하기 위해서 [RTLCSS](https://rtlcss.com/)를 사용합니다 – 기본적으로 수평 방향이 정의된 속성 (예: `padding-left`)을 반대로 바꿉니다. 이를 통해서 한 번만 CSS를 작성할 수 있게 해주고 RTLCSS [컨트롤](https://rtlcss.com/learn/usage-guide/control-directives/)과 [값](https://rtlcss.com/learn/usage-guide/value-directives/) 지침을 사용해서 마이너한 트윅들을 만들어줍니다.

## 로컬 문서

로컬에서 문서를 실행하려면 Hugo가 필요하며, [hugo-bin](https://www.npmjs.com/package/hugo-bin) npm 패키지를 통해서 설치할 수 있습니다. Hugo은 기본 포함, 마크다운 기반 파일, 템플릿 등을 제공하는 아주 빠르면서 상당한 수준으로 확장할 수 있는 정적 사이트 생성기입니다 다음은 시작하는 방법입니다:

1. [도구 구성](#도구-구성)의 내용을 통해서 모든 의존성을 설치해주세요.
2. 최상위 `/bootstrap` 폴더에서 명령줄 도구를 통해 `npm run docs-serve`를 실행해 주세요.
3. 브라우저에서 `http://localhost:9001/`를 열면, 짜잔.

Hugo를 사용하는 방법에 대해 자세히 알아보고 싶다면 자체 [문서](https://gohugo.io/documentation/)를 확인해주세요.

## 문제 해결

의존성을 설치하면서 문제가 발생한다면 모든 이전 의존성 버전 (전역 및 로컬)을 제거해주세요. 그리고 `npm install`을 다시 실행해주세요.
