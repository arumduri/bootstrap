---
layout: docs
title: 브라우저 및 기기
title_en: Browsers and devices
description: 각각의 알려진 특성과 버그를 포함하여 Bootstrap에서 지원하는 구버전부터 최신버전까지의 브라우저와 장치들에 대해 알아 봅시다.
group: getting-started
toc: true
---

## 지원 브라우저

Bootstrap은 모든 주요 브라우저 및 플랫폼의 **최신 및 안정 버전**을 지원합니다.

최신 버전의 WebKit, Blink, Gecko 등을 직접적으로 또는 플랫폼의 웹 뷰 API를 기반으로 하는 브라우저를 사용하는 경우에는 명시적으로 지원하지 않습니다. 하지만 Bootstrap은 이러한 브라우저에서도 (대부분의 경우) 정상적으로 출력 및 작동합니다. 더 구체적인 지원 정보는 아래에 설명되어 있습니다.

[`.browserslistrc 파일`]({{< param repo >}}/blob/v{{< param current_version >}}/.browserslistrc)에서 지원되는 브라우저의 범위와 버전에 대해서 확인하실 수 있습니다:

```text
{{< rf.inline >}}
{{- readFile ".browserslistrc" | chomp | htmlEscape -}}
{{< /rf.inline >}}
```

우리는 CSS 접두어를 통해 의도한 브라우저 지원을 처리하기 위해서 [Autoprefixer](https://github.com/postcss/autoprefixer)를 사용하며 [Browserslist](https://github.com/browserslist/browserslist)를 통해 브라우저 버전을 관리합니다. 이러한 도구를 프로젝트에 통합하는 방법은 해당 문서를 참고해주세요.

### 모바일 기기

대부분의 경우 Bootstrap은 각 주요 플랫폼 기본 브라우저의 최신 버전을 지원합니다. 단 프록시 브라우저 (Opera Mini, Opera Mobile의 터보 모드, UC Browser Mini, Amazon Silk 등)는 지원하지 않습니다.

<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Chrome</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
      <th scope="col">Android Browser &amp; WebView</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Android</th>
      <td>지원</td>
      <td>지원</td>
      <td class="text-muted">&mdash;</td>
      <td>v6.0+</td>
    </tr>
    <tr>
      <th scope="row">iOS</th>
      <td>지원</td>
      <td>지원</td>
      <td>지원</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

### 데스크톱 브라우저

마찬가지로 대부분의 데스크톱 브라우저의 최신 버전을 지원합니다.

<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Chrome</th>
      <th scope="col">Firefox</th>
      <th scope="col">Microsoft Edge</th>
      <th scope="col">Opera</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mac</th>
      <td>지원</td>
      <td>지원</td>
      <td>지원</td>
      <td>지원</td>
      <td>지원</td>
    </tr>
    <tr>
      <th scope="row">Windows</th>
      <td>지원</td>
      <td>지원</td>
      <td>지원</td>
      <td>지원</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

Firefox의 경우 일반적인 최신 안정 버전과 더불어서 [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/enterprise/) 버전도 지원합니다.

Bootstrap은 Linux용 Chromium 및 Chrome과 Linux용 Firefox에서 정상적으로 표시되고 작동하겠지만 공식적으로 지원하지는 않습니다.

## Internet Explorer

Internet Explorer는 지원되지 않습니다. **Internet Explorer 지원이 필요하다면 Bootstrap v4를 사용해주세요.**

## 모바일에서의 모달과 드롭다운

### 오버플로우와 스크롤

`<body>` 요소에서 `overflow: hidden;` 지원은 iOS와 Android에서 제한되어 있습니다. 이를 위해 장치의 브라우저에서 모달 상단 또는 하단을 스크롤하면 `<body>` 콘텐츠가 스크롤되기 시작합니다. [Chrome 버그 #175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (Chrome v40에서 수정됨)과 [WebKit 버그 #153852](https://bugs.webkit.org/show_bug.cgi?id=153852)를 확인해주세요.

### iOS 텍스트 필드와 스크롤

iOS 9.2부터 모달이 열려있을 때 `<input>` 또는 `<textarea>`의 경계 내에서 초기 스크롤 제스쳐 터치를 하면 모달 아래에 있는 콘텐츠가 모달 자체 대신에 스크롤됩니다. [WebKit 버그 #153856](https://bugs.webkit.org/show_bug.cgi?id=153856)를 확인해주세요.

### 내비게이션 바 드롭다운

`.dropdown-backdrop` 요소는 z-index의 복잡성 때문에 iOS의 nav에서 사용되지 않습니다. 따라서 네비게이션 바에서 드롭다운을 닫으려면 드롭다운 요소를 직접 클릭 (또는 [iOS에서 클릭 이벤트를 발생시키는 기타 요소](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile)를 사용) 해야 합니다.

## 브라우저 확대/축소

페이지 확대/축소 기능은 필연적으로 Bootstrap과 웹에 나머지 컴포넌트 모두에 렌더링 아티펙트를 표시합니다. 문제에 따라 해결이 가능할 수도 있습니다 (먼저 검색하고 필요하다면 문제를 열어주세요). 그러나 우리는 종종 단순무식한 해결 방법 외에는 직접적인 해결책이 없는지라 이러한 것들을 무시한는 경향이 있습니다.

## 유효성 검사

오래된 브라우저와 버그가 많은 브라우저에 최상의 환경을 제공하기 위해 Bootstrap은 [CSS 브라우저 해결책](http://browserhacks.com/)을 사용하여 특정 브라우저 버전에 대한 특수 CSS를 대상으로 브라우저 자체에서 버그 관련 작업을 수행합니다. 이러한 해결책으로 인해 CSS 검증자가 잘못되었다는 불만을 제기할 수 있습니다. 일부 브라우저에서는 아직 완전히 표준화되지 않은 불완전한 최신 CSS 기능도 사용하지만, 이러한 기능은 순수하게 점진적인 향상을 위해 사용됩니다.

이러한 유효성 검사 경고는 실제로 중요하지 않습니다. CSS 해결책이 아닌 부분이 완전히 유효하고 해결책이 아닌 부분의 적절한 기능을 방해하지 않기 때문입니다. 따라서 우리는 이러한 특정 경고를 의도적으로 무시합니다.

우리 HTML 문서에는 [특정 Firefox 버그](https://bugzilla.mozilla.org/show_bug.cgi?id=654072)에 대한 해결 방법이 포함되어 있기 때문에 사소한 HTML 유효성 검사 경고가 있습니다.
