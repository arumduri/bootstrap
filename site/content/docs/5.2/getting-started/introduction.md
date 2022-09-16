---
layout: docs
title: Bootstrap 시작하기
title_en: Get started with Bootstrap
description: Bootstrap은 강력하고 기능이 풍부한 프론트엔드 툴킷입니다. 프로토타입부터 프로덕션까지 뭐든지 빠르게 빌드해보세요.
group: getting-started
aliases:
  - "/docs/5.2/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## 빠른 시작

바로 프로덕션이 가능한 Bootstrap의 CSS와 JavaScript를 CDN을 사용해서 빌드 단계를 거치지 않고 시작해보세요. [Bootstrap CodePen 데모](https://codepen.io/team/bootstrap/pen/qBamdLj)에서 어떻게 해야하는지 직접 볼 수 있습니다.

<br>

1. **Create a new `index.html` file in your project root.** Include the `<meta name="viewport">` tag as well for [proper responsive behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) in mobile devices.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Bootstrap demo</title>
     </head>
     <body>
       <h1>Hello, world!</h1>
     </body>
   </html>
   ```

2. **Include Bootstrap's CSS and JS.** Place the `<link>` tag in the `<head>` for our CSS, and the `<script>` tag for our JavaScript bundle (including Popper for positioning dropdowns, poppers, and tooltips) before the closing `</body>`. Learn more about our [CDN links](#cdn-links).

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Bootstrap demo</title>
       <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
     </head>
     <body>
       <h1>Hello, world!</h1>
       <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
     </body>
   </html>
   ```

   You can also include [Popper](https://popper.js.org/) and our JS separately. If you don't plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.

   ```html
   <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
   <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
   ```

3. **Hello, world!** Open the page in your browser of choice to see your Bootstrapped page. Now you can start building with Bootstrap by creating your own [layout]({{< docsref "/layout/grid" >}}), adding dozens of [components]({{< docsref "/components/buttons" >}}), and utilizing [our official examples]({{< docsref "/examples" >}}).

## CDN links

As reference, here are our primary CDN links.

{{< bs-table >}}
| Description | URL |
| --- | --- |
| CSS | `{{< param "cdn.css" >}}` |
| JS | `{{< param "cdn.js_bundle" >}}` |
{{< /bs-table >}}

You can also use the CDN to fetch any of our [additional builds listed in the Contents page]({{< docsref "/getting-started/contents" >}}).

## Next steps

- Read a bit more about some [important global environment settings](#important-globals) that Bootstrap utilizes.

- Read about what's included in Bootstrap in our [contents section]({{< docsref "/getting-started/contents/" >}}) and the list of [components that require JavaScript](#js-components) below.

- Need a little more power? Consider building with Bootstrap by [including the source files via package manager]({{< docsref "/getting-started/download#package-managers" >}}).

- Looking to use Bootstrap as a module with `<script type="module">`? Please refer to our [using Bootstrap as a module]({{< docsref "/getting-started/javascript#using-bootstrap-as-a-module" >}}) section.

## JS 컴포넌트

어떤 컴포넌트가 JavaScript나 Popper를 요구하는지 궁금하신가요? 아래 컴포넌트 링크를 눌러서 확인해보세요. 일반적인 페이지 구조에 대해 전혀 확신하지 못하신다면 예시 페이지 템플릿을 계속 읽어보세요.

<details>
<summary class="text-primary mb-3">JavaScript를 요구하는 컴포넌트 보기</summary>
{{< markdown >}}
- 경고 닫기
- 상태 및 체크 박스/라디오 기능 버튼
- 캐러셀의 모든 슬라이드 동작, 제어 및 인디케이터
- 콘텐츠 가시성 접기 전환
- 드롭다운에서의 표시 및 위치 ([Popper](https://popper.js.org/)도 필요)
- 모달에서의 표시, 위치, 스크롤 행동
- 네비게이션 바와 오프캔버스에서의 반응형 동작 구현을 위한 접기 플러그인 확장
- Navs with the Tab plugin for toggling content panes
- 표시, 위치 지정, 스크롤 동작을 위한 오프캔버스
- Scrollspy for scroll behavior and navigation updates
- 토스트 표시 및 닫기
- 툴팁과 팝오버에서의 표시 및 위치 ([Popper](https://popper.js.org/)도 필요)
{{< /markdown >}}
</details>

## 중요한 전역 속성

Bootstrap은 몇 가지 중요한 전역 스타일과 설정을 사용하고 있으며, 이 모든 기능은 거의 크로스 브라우저 스타일의 *정규화*에 맞추어져 있습니다. 한 번 알아봅시다.

### HTML5 doctype

Bootstrap은 HTML5 doctype의 사용을 필요로 합니다. 이것이 없다면 약간 맛이 간 불완전한 스타일을 볼 수 있습니다.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### 반응형 meta 태그

Bootstrap은 *모바일 우선*으로 개발되기 때문에 모바일 기기에 먼저 코드를 최적화한 다음 CSS 미디어 쿼리를 사용해서 필요에 따라 컴포넌트를 확장하고 있습니다. 모든 장치에서 올바를 렌더링 및 터치 확대 조절을 보장하려면 `<head>`에 반응형 뷰포트 메타 태그를 추가해주세요.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

[빠른 시작](#빠른-시작)에서 적용 예시를 확인하실 수 있습니다.

### Box-sizing

CSS에서 보다 간단한 크기 조절을 위해서 우리는 `content-box`에서 `border-box`까지 전역 `box-sizing` 값을 사용하고 있습니다. 이렇게 하면 `padding`이 요소의 최종 계산된 너비에 영향을 미치지는 않지만 Google Maps나 Google Custom Search Engine같은 서드 파티 소프트웨어에서 문제가 발생할 수 있습니다.

드물지만 재정의를 해야 한다면 다음과 같이 사용할 수 있습니다.

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

위 스니펫을 사용하면 `::before`와 `::after`를 통해서 생성된 콘텐츠와 같은 중첩된 요소는 모두 `.selector-for-some-widget`에 대해서 지정된 `box-sizing`를 상속합니다.

[CSS Tricks에서 박스 모델과 크기 조절](https://css-tricks.com/box-sizing/)에 대해서 자세히 알아보세요.

### Reboot

개선된 크로스 브라우저 렌더링을 위해서 우리는 [Reboot]({{< docsref "/content/reboot" >}})을 사용해 일반적인 HTML 요소에 대해 약간 더 의견이 수렴된 초기화 기능을 제공을 제공하면서 브라우저 및 기기 간의 일관적이지 못한 부분을 수정하고 있습니다.

## 커뮤니티

최신 Bootstrap 개발 상황을 계속 알아보고 여기 있는 도움이 될 만한 리소스들을 통해 커뮤니티에 참가해 보세요.

- [공식 Bootstrap 블로그]({{< param blog >}})를 읽고 구독해 보세요.
- [GitHub Discussions](https://github.com/twbs/bootstrap/discussions)에서 질문을 하거나 추가적인 정보를 얻을 수 있습니다.
- 다른 Bootstrap 유저들과 IRC에서 대화해 보세요. `irc.libera.chat` 서버의 `#bootstrap` 채널에서 만나실 수 있습니다.
- 구현 방법에 대한 도움을 Stack Overflow (태그는 [`bootstrap-5`](https://stackoverflow.com/questions/tagged/bootstrap-5))에서 받으실 수 있습니다.
- 개발자 분들은 [npm](https://www.npmjs.com/search?q=keywords:bootstrap) 또는 비슷한 전송 매커니즘에서 Bootstrap 수정 패키지 또는 기능 추가 패키지에서 `bootstrap` 단어를 사용해서 찾기 쉽도록 해주셔야 합니다.

[Twitter에서 @getbootstrap을 팔로우](https://twitter.com/{{< param twitter >}})해서 최신 가십이나 멋진 뮤직 비디오들을 확인하실 수도 있습니다.
