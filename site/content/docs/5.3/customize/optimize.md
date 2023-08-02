---
layout: docs
title: 최적화
title_en: Optimize
description: 프로젝트를 단순하고, 대응력이 뛰어나며, 유지 관리할 수 있도록 하여 최고의 경험을 제공하고 보다 중요한 일에 집중할 수 있습니다.
group: customize
toc: true
---

## Sass 불러오기 경량화

asset pipeline에서 Sass를 사용하는 경우, 필요한 컴포넌트만 `@import`해서 Bootstrap을 최적화 하십시오. 가장 큰 최적화는 `bootstrap.scss` 섹션의 `Layout & Components`에서 얻을 수 있습니다.

{{< scss-docs name="import-stack" file="scss/bootstrap.scss" >}}


컴포넌트를 사용하지 않을 때는 주석 처리를 하거나 완전히 삭제해 주세요. 예를 들어, 캐러셀(carousel)을 사용하지 않을 경우 해당 import를 삭제하여 컴파일한 CSS의 파일 크기를 절약할 수 있습니다. Sass import에는 몇 가지 의존 관계가 있어 파일을 생략하기가 어려울 수도 있으니 주의해 주세요.

## JavaScript 경량화

Bootstrap의 JavaScript는 기본적인 dist 파일(`bootstrap.js`와 `bootstrap.min.js`)안에 모든 컴포넌트를 포함하고 있으며, 번들 파일(`bootstrap.bundle.js`와 `bootstrap.bundle.min.js`)안의 기본 의존 관계(Popper)도 제공합니다. Sass를 통해 재정의 하는 동안에는 반드시 관련된 JavaScript는 삭제해 주세요.

예를 들어, Webpack, Parcel, 또는 Vite 같은 자체 JavaScript 번들러를 사용하고 있다면 사용할 JavaScript만 포함하면 됩니다. 아래의 예시에서는, 모달의 JavaScript를 포함하는 방법을 보여주고 있습니다:

<!-- eslint-skip -->
```js
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
```

이렇게 하면 버튼, 캐러셀, 툴팁과 같은 사용할 예정이 없는 컴포넌트에 JavaScript를 포함하지 않도록 할 수 있습니다. 드롭다운, 툴팁, 팝오버를 포함하는 경우에는 반드시 `package.json` 파일에 Popper의 의존 관계를 기술해 주세요.

{{< callout info >}}
**중요!** `bootstrap/js/dist`에 있는 파일은 **default export**를 사용하고 있기 때문에, 그 중 하나를 사용하고 싶다면 아래와 같이 해야 합니다::

<!-- eslint-skip -->
```js
import Modal from 'bootstrap/js/dist/modal'
const modal = new Modal(document.getElementById('myModal'))
```
{{< /callout >}}

## Autoprefixer .browserslistrc

Bootstrap은 특정 CSS 속성에 브라우저 접두어(prefixes)를 자동으로 추가하기 위해 Autoprefixer에 의존합니다. 접두어는 Bootstrap의 루트에 있는 `.browserslistrc` 파일에 의해 결정됩니다. 브라우저의 이 목록을 재정의하여 Sass를 컴파일하면 해당 브라우저나 버전에 고유한 벤더 접두어가 있는 경우 컴파일된 CSS에서 일부 CSS가 자동으로 삭제됩니다.

## 사용되지 않은 CSS

_이 부분은 여러분의 도움이 필요합니다. PR을 만들어 주세요. 감사합니다!_

[PurgeCSS](https://github.com/FullHuman/purgecss)를  Bootstrap과 함께 사용하기 위한 사전 빌드된 예시는 없지만, 커뮤니티에 올라온 글 중 도움이 되는 기사나 공략 글을 소개합니다. 몇 가지의 선택지가 있으니 확인해 주세요:

- <https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772>
- <https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/>

마지막으로, [사용되지 않은 CSS에 대한 CSS Tricks 문서](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/)에서는 PurgeCSS나 다른 유사한 도구를 사용하는 방법을 소개하고 있습니다.

## 경량화와 gzip

가능한 한 방텍스트에게 제공하는 모든 코드를 압축해야 합니다. Bootstrap의 dist 파일을 사용하는 경우에는, 경량화된 버전(`.min.css`와 `.min.js` 확장자로 표시)을 고수해 주세요. 자체 빌드 시스템으로 소스에서 Bootstrap을 빌드하는 경우 HTML, CSS, JS용으로 자체 압축 파일을 빌드해야 합니다.

## 파일을 차단하지 않기

압축을 최소화해 사용하는 것만으로도 충분할 수 있지만, 파일을 차단하지 않고 만드는 데 있어 사이트를 최적화하고 빠르게 만드는데 있어 아주 중요합니다.

구글 크롬에서 [Lighthouse](https://developers.google.com/web/tools/lighthouse/) 플러그인을 사용하고 있다면 FCP를 잘 아실 것입니다. [The First Contentful Paint](https://web.dev/fcp/) 라는 지표는 페이지를 불러오기 시작한 후 페이지의 콘텐츠 일부가 화면에 표시될 때까지의 시간을 측정합니다.

중요하지 않은 JavaScript나 CSS를 늦게 호출함으로써 FCP를 개선할 수 있습니다. 이게 무슨 의미일까요? 간단히 말하면 첫 화면에 굳이 필요하지 않은 JavaScript나 스타일 시트에는 `async`나 `defer` 속성을 붙여야 합니다.

이렇게 되면 덜 중요한 자원은 나중에 읽혀 첫 화면을 그리는 데 방해를 하지 않습니다. 한편 중요한 자원은 인라인의 스크립트나 스타일로서 포함할 수 있습니다.

이것에 대해 좀 더 자세히 알고 싶다면 이미 훌륭한 기사들이 많이 있습니다:

- <https://web.dev/render-blocking-resources/>
- <https://web.dev/defer-non-critical-css/>

## 항상 HTTPS 사용하기

실제 환경에서 웹사이트는 HTTPS 접속으로만 이용하도록 해 주세요. HTTPS는, 모든 사이트의 보안, 개인 정보 보호 및 가용성을 향상시키며, [민감하지 않은 웹 트래픽은 없습니다](https://https.cio.gov/everything/). 웹 사이트가 HTTPS에서만 제공되도록 설정하는 순서는 아키텍처나 웹 호스팅 공급자에 따라 크게 다르기 때문에 이 문서에서는 설명하지 않습니다.

HTTPS를 통해 제공되는 사이트도 HTTPS 연결을 통해 모든 스타일 시트, 스크립트, 그 외 기타 어셋에 접근해야 합니다. 그렇지 않으면 사용자에게 [혼합된 활성 콘텐츠](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)를 보내 종속성을 변경하여 사이트가 위험에 노출되는 잠재적인 취약성이 발생합니다. 이로 인해 사용자에게 보안 문제나 브라우저 내의 경고로 표시될 수 있습니다. CDN에서 Bootstrap을 호출하든 직접 제공하든 관계없이 HTTPS를 통해서만 접근해 주세요.
