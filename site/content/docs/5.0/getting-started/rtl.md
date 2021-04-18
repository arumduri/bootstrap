---
layout: docs
title: RTL
description: 레이아웃, 구성 요소 및 유틸리티에서 Bootstrap의 오른쪽에서 왼쪽으로 읽는 텍스트의 지원을 활성화하는 방법을 알아보십시오.
group: getting-started
toc: true
---

## Get familiar

먼저 [시작하기 페이지]를 읽고 Bootstrap에 익숙해지는 것이 좋습니다. 어느정도 읽어보았다면 RTL을 활성화하는 방법에 대해 계속 읽어보세요.

우리가 RTL에 접근하는 방식을 강화하는 [RTLCSS 프로젝트]에 대해서 읽어볼 수도 있습니다.

{{< callout warning >}}
### 실험적 기능

RTL 기능은 아직 **실험적이며** 사용자 피드백에 따라 발전할 것입니다. 무언가를 발견했거나 개선할 점이 있나요? [이슈를 열어서]({{< param repo >}}/issues/new) 여러분들의 의견을 알려주세요.
{{< /callout >}}

## Required HTML

현재 Bootstrap 기반 페이지에서 RTL을 활성화하기 위한 두가지 엄격한 요구 사항이 있습니다.

1. `<html>` 요소에 `dir="rtl"`을 설정하세요.
2. `<html>` 요소에 `lang="ar"`와 같은 적절한 `lang` 속성을 추가해주세요.

여기서 CSS의 RTL 버전을 포함해야 합니다. 예를 들어, 다음은 RTL이 활성화된 컴파일 및 경량화된 CSS의 스타일시트입니다:

```html
<link rel="stylesheet" href="{{< param "cdn.css_rtl" >}}" integrity="{{< param "cdn.css_rtl_hash" >}}" crossorigin="anonymous">
```

### Starter template

수정된 RTL 스타터 템플릿에 상기된 요구사항이 반영되어 있음을 알 수 있습니다.

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{< param "cdn.css_rtl" >}}" integrity="{{< param "cdn.css_rtl_hash" >}}" crossorigin="anonymous">

    <title>مرحبا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبا بالعالم!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper.js -->
    <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper.js and Bootstrap JS -->
    <!--
    <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
    <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

### RTL examples

여러 [RTL 예제]({{< docsref "/examples/#rtl" >}}) 중 하나로 시작하세요.

## Approach

RTL 지원을 Bootstrap에 구축하는 방법에는 CSS를 작성하고 사용하는 방법에 영향을 주는 두 가지 중요한 결정사항이 있습니다:

1. **먼저 우리는 [RTLCSS](https://rtlcss.com/) 프로젝트로 빌드하기로 결정했습니다.** 이를 통해 LTR에서 RTL로 이동할 때 변경 및 재정의를 관리하기 위한 몇 가지 강력한 기능이 제공됩니다. 또한 하나의 코드베이스에서 두 가지 버전의 Bootstrap을 빌드할 수 있습니다.

2. **두번째로 논리적 속성 접근 방식을 채택하기 위해 몇 가지 방향성 클래스의 이름을 변경했습니다.** 대부분의 사용자는 flex 유틸리티 덕분에 이미 논리적 속성과 상호작용을 했습니다. 이것들은 `left`, `right`와 같은 방향 속성을 `start`와 `end`로 대체합니다. 이를 통해 오버헤드 없이 LTR 및 RTL에 적합한 클래스 이름과 값을 만듭니다.

  예를 들어 `margin-left`에서 `.ml-3` 대신에 `.ms-3`을 사용할 수 있습니다.

Sass 소스 또는 컴파일된 CSS를 통한 RTL 작업은 기본 LTR과 크게 다르지 않습니다.

## Customize from source
커스터마이제이션과({{< docsref "/customize/sass" >}}) 관련하여 선호되는 방법은 변수, 맵 및 믹스인을 활용하는 것입니다. 이 접근 방식은 [RTLCSS가 작동하는 방식]((https://rtlcss.com/learn/getting-started/why-rtlcss/)) 덕분에 컴파일된 파일에서 사후 처리 되더라도 RTL에 대해 동일하게 작동합니다.

### Custom RTL values

RTLCSS 값 지시문을 사용하여 변수 출력을 RTL에 대해 다른 값으로 만들 수 있습니다. 예를 들어, 코드베이스 전체에서 `$font-weight-bold`의 가중치를 줄이려면 `/*rtl: {value}*/` 구문을 사용할 수 있습니다:

```scss
$font-weight-bold: 700 #{/* rtl:600 */} !default;
```

이렇게 하면 기본 CSS 및 RTL CSS에 대해 다음과 같이 출력됩니다:

```css
/* bootstrap.css */
dt {
  font-weight: 700 /* rtl:600 */;
}

/* bootstrap.rtl.css */
dt {
  font-weight: 600;
}
```

### Alternative font stack

맞춤 글꼴을 사용하는 경우 모든 글꼴이 라틴어가 아닌 알파벳을 지원하는 것은 아닙니다. 범유럽 계열에서 아랍어 계열로 전환하려면 글꼴 스택에서 `/*rtl:insert: {value}*/`를 사용하여 글꼴 계열의 이름을 수정해야 할 수 있습니다.

예를 들어 LTR용 `Helvetica Neue Webfont`에서 RTL용 'Helvetica Neue Arabic`으로 전환하는 경우 Sass 코드는 다음과 같습니다:

```scss
$font-family-sans-serif:
  Helvetica Neue #{"/* rtl:insert:Arabic */"},
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Chrome < 56 for macOS (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // Basic web fallback
  Arial,
  // Linux
  "Noto Sans",
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

## The breadcrumb case

브레드크럼 구분자는 `$breadcrumb-divider-flipped`라는 고유한 새로운 변수가 필요한 유일한 경우이며 기본값은 `$breadcrumb-divider`입니다.

## Additional resources

- [RTLCSS](https://rtlcss.com/)
- [RTL 스타일링 기초 과정](https://rtlstyling.com/posts/rtl-styling)
