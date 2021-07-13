---
layout: docs
title: 시작하기
title_en: Introduction
description: 세계에서 가장 인기있는 프레임워크인 Bootstrap으로 반응형, 모바일 우선 사이트를 jsDelivr와 스타터 페이지 템플릿을 통해 시작해보세요.
group: getting-started
aliases:
  - "/docs/5.0/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## Quick start

프로젝트에 빠르게 Bootstrap을 추가하고 싶으신가요? 무료 오픈소스 CDN인 jsDelivr를 사용해보세요. 패키지 관리자나 소스 파일을 다운로드할 필요가 있으신가요? [다운로드 페이지를 확인해보세요]({{< docsref "/getting-started/download" >}}).

### CSS


`<head>` 맨 위에 우리 `<link>` 스타일시트를 복사한 뒤 붙여넣어 우리의 CSS를 가장먼저 불러와 주세요.

```html
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
```

### JS

우리의 많은 컴포넌트들은 작동에 JavaScript를 필요로 합니다. 정확히 말하면 우리의 JavaScript 플러그인과 [Popper](https://popper.js.org/) 가 필요합니다. **다음 중 하나의`<script>`**를 `</body>` 태그가 닫히기 전에 페이지 끝 부분에 넣어 활성화 시켜주세요.

#### Bundle

두 가지의 번들을 통해서 모든 Bootstrap JavaScript 플러그인과 의존성을 한 번에 포함시키세요. `bootstrap.bundle.js`와 `bootstrap.bundle.min.js` 모두 툴팁과 팝오버를 위해서 [Popper](https://popper.js.org/)가 포함되어 있습니다. Bootstrap에 무엇이 포함되어 있는지 자세히 알고 싶으시다면 [콘텐츠]({{< docsref "/getting-started/contents#precompiled-bootstrap" >}}) 부분을 확인해주세요.

```html
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

#### Separate

분리된 스크립트 솔루션을 사용하기로 결정했을 경우, Popper가 맨 앞에 와야 하며 (툴팁 또는 팝오버를 사용하는 경우), 그 다음에 우리 JavaScript 플러그인을 넣어주세요.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

#### Modules

`<script type="module">`를 사용하신다면, [Bootstrap을 모듈로 사용하기]({{< docsref "/getting-started/javascript#using-bootstrap-as-a-module" >}}) 섹션을 확인해주세요.

#### Components

어떤 컴포넌트가 JavaScript나 Popper를 요구하는지 궁금하신가요? 아래 컴포넌트 링크를 눌러서 확인해보세요. 일반적인 페이지 구조에 대해 전혀 확신하지 못하신다면 예제 페이지 템플릿을 계속 읽어보세요.

<details>
<summary class="text-primary mb-3">JavaScript를 요구하는 컴포넌트 보기</summary>
{{< markdown >}}
- 경고 닫기
- 상태 및 체크 박스/라디오 기능 버튼
- 캐러셀의 모든 슬라이드 동작, 제어 및 인디케이터
- 콘텐츠 가시성 접기 전환
- 드롭다운에서의 표시 및 위치 ([Popper](https://popper.js.org/)도 필요)
- 모달에서의 표시, 위치, 스크롤 행동
- 네비게이션 바에서의 반응형 동작 구현을 위한 접기 플러그인 확장
- 토스트 표시 및 닫기
- 툴팁과 팝오버에서의 표시 및 위치 ([Popper](https://popper.js.org/)도 필요)
- 스크롤스파이에서의 스크롤 동작과 내비게이션 갱신
{{< /markdown >}}
</details>

## Starter template

페이지가 최신 디자인 및 개발 표준을 준수하고 있는지 확인해보세요. 즉, HTML5 doctype과 적절한 반응형 동작을 위해 뷰포트 메타 태그를 사용해야 합니다. 이 모든 부분을 합친 페이지는 다음과 같습니다.

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
    <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

다음 단계를 위해서 [레이아웃 문서]({{< docsref "/layout/grid" >}}) 또는 [공식 예제]({{< docsref "/examples" >}})를 통해 사이트의 콘텐츠와 구성요소를 배치하기 시작해보세요.

## Important globals

Bootstrap을 사용할 때 알아야 할 몇 가지 중요한 전역 스타일과 설정을 사용하고 있으며, 이 모든 기능은 거의 크로스 브라우저 스타일의 *정규화*에 맞추어져 있습니다. 한 번 알아봅시다.

### HTML5 doctype

Bootstrap은 HTML5 doctype의 사용을 필요로 합니다. 이것이 없다면 약간 맛이 간 불완전한 스타일을 볼 수 있습니다. 이것을 포함한다고 문제가 생기지는 않습니다.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

Bootstrap은 *모바일 우선*으로 개발되기 때문에 모바일 기기에 먼저 코드를 최적화한 다음 CSS 미디어 쿼리를 사용해서 필요에 따라 구성 요소를 확장하고 있습니다. 모든 장치에서 올바를 렌더링 및 터치 확대 조절을 보장하려면 `<head>`에  **반응형 뷰포트 메타 태그를 추가해주세요**.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

[스타터 템플릿](#starter-template)에서 적용 예시를 확인하실 수 있습니다.

### Box-sizing

CSS에서 보다 간단한 크기 조절을 위해서 우리는 `content-box`에서 `border-box`까지 전역 `box-sizing` 값을 사용하고 있습니다. 이렇게 하면 `padding`이 요소의 최종 계산된 너비에 영향을 미치지는 않지만 Google Maps나 Google Custom Search Engine같은 서드파티 소프트웨어에서 문제가 발생할 수 있습니다.

드물지만 재정의를 해야 한다면 다음과 같이 사용할 수 있습니다.

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

위 스니펫을 사용하면 `::before`와 `::after`를 통해서 생성된 콘텐츠와 같은 중첩된 요소는 모두 `.selector-for-some-widget`에 대해서 지정된 `box-sizing`를 상속합니다.

[box model and sizing at CSS Tricks에서 박스 모델과 크기 조절](https://css-tricks.com/box-sizing/)에 대해서 자세히 알아보세요.

### Reboot

개선된 크로스 브라우저 렌더링을 위해서 우리는 [Reboot]({{< docsref "/content/reboot" >}})을 사용해 일반적인 HTML 요소에 대해 약간 더 의견이 수렴된 초기화 기능을 제공을 제공하면서 브라우저 및 기기 간의 일관적이지 못한 부분을 수정하고 있습니다.

## Community

최신 Bootstrap 개발 상황을 계속 알아보고 여기 있는 도움이 될 만한 리소스들을 통해 커뮤니티에 참가해 보세요.

- [공식 Bootstrap 블로그]({{< param blog >}})를 읽고 구독해 보세요.
- [공식 Slack 방]({{< param slack >}})에 참가해 보세요.
- 다른 Bootstrap 유저들과 IRC에서 대화해 보세요. `irc.libera.chat` 서버의 `#bootstrap` 채널에서 만나실 수 있습니다.
- 구현 방법에 대한 도움을 Stack Overflow (태그는 [`bootstrap-5`](https://stackoverflow.com/questions/tagged/bootstrap-5))에서 받으실 수 있습니다.
- 개발자 분들은 [npm](https://www.npmjs.com/search?q=keywords:bootstrap) 또는 비슷한 전송 매커니즘에서 Bootstrap 수정 패키지 또는 기능 추가 패키지에서 `bootstrap` 단어를 사용해서 찾기 쉽도록 해주셔야 합니다.

[Twitter에서 @getbootstrap을 팔로우](https://twitter.com/{{< param twitter >}})해서 최신 가십이나 멋진 뮤직 비디오들을 확인하실 수도 있습니다.
