---
layout: docs
title: RTL
description: 레이아웃, 컴포넌트 및 유틸리티에서 Bootstrap의 오른쪽에서 왼쪽으로 읽는 텍스트의 지원을 활성화하는 방법을 알아보세요.
group: getting-started
toc: true
---

## 익숙해지기

먼저 [시작하기 페이지]({{< docsref "/getting-started/introduction" >}})를 읽고 Bootstrap에 익숙해지는 것이 좋습니다. 어느정도 읽어보았다면 RTL을 활성화하는 방법에 대해 계속 읽어보세요.

또한 RTL에 대한 우리의 접근 방식을 주도하는 [RTLCSS 프로젝트](https://rtlcss.com/)에 대해서도 읽어보시길 바랍니다.

{{< callout warning >}}
**Bootstrap의 RTL 기능은 아직 실험 단계이며** 사용자 피드백을 바탕으로 발전해 나갈 예정입니다. 무언가를 발견했거나 개선할 점이 있나요? [이슈를 열어서]({{< param repo >}}/issues/new/choose) 여러분들의 의견을 듣고 싶습니다.
{{< /callout >}}

## HTML 요구 사항

현재 Bootstrap 기반 페이지에서 RTL을 활성화하기 위한 두 가지 엄격한 요구 사항이 있습니다.

1. `<html>` 요소에 `dir="rtl"`을 설정하세요.
2. `<html>` 요소에 `lang="ar"`와 같은 적절한 `lang` 속성을 추가해주세요.

여기서 CSS의 RTL 버전을 포함해야 합니다. 예를 들어, 다음은 RTL이 활성화된 컴파일 및 경량화된 CSS의 스타일시트입니다:

```html
<link rel="stylesheet" href="{{< param "cdn.css_rtl" >}}" integrity="{{< param "cdn.css_rtl_hash" >}}" crossorigin="anonymous">
```

### 스타터 템플릿

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

    <title>مرحبًا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبًا بالعالم!</h1>

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

### RTL 예시

여러 [RTL 예시]({{< docsref "/examples/#rtl" >}}) 중 하나로 시작하세요.

## 접근

RTL 지원을 Bootstrap에 빌드하는 방법에는 CSS를 작성하고 사용하는 방법에 영향을 주는 두 가지 중요한 결정사항이 있습니다:

1. **먼저 우리는 [RTLCSS](https://rtlcss.com/) 프로젝트로 빌드하기로 결정했습니다.** 이를 통해 LTR에서 RTL로 이동할 때 변경 및 재정의를 관리하기 위한 몇 가지 강력한 기능이 제공됩니다. 또한 하나의 코드베이스에서 두 가지 버전의 Bootstrap을 빌드할 수 있습니다.

2. **두번째로 논리적 속성 접근 방식을 채택하기 위해 몇 가지 방향성 클래스의 이름을 변경했습니다.** 대부분의 사용자는 flex 유틸리티 덕분에 이미 논리적 속성과 상호작용을 했습니다. 이것들은 `left`, `right`와 같은 방향 속성을 `start`와 `end`로 대체합니다. 이를 통해 오버헤드 없이 LTR 및 RTL에 적합한 클래스 이름과 값을 만듭니다.

  예를 들어 `margin-left`에서 `.ml-3` 대신에 `.ms-3`을 사용할 수 있습니다.

Sass 소스 또는 컴파일된 CSS를 통한 RTL 작업은 기본 LTR과 크게 다르지 않습니다.

## 사용자 지정 소스
[사용자 지정]({{< docsref "/customize/sass" >}})과 관련하여 선호되는 방법은 변수, 맵 및 믹스인을 활용하는 것입니다. 이 접근 방식은 [RTLCSS가 작동하는 방식](https://rtlcss.com/learn/getting-started/why-rtlcss/) 덕분에 컴파일된 파일에서 사후 처리 되더라도 RTL에 대해 동일하게 작동합니다.

### 사용자 지정 RTL 값

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

### 대체 글꼴 스택

맞춤 글꼴을 사용하는 경우 모든 글꼴이 라틴어가 아닌 알파벳을 지원하는 것은 아닙니다. 범유럽 계열에서 아랍어 계열로 전환하려면 글꼴 스택에서 `/*rtl:insert: {value}*/`를 사용하여 글꼴 계열의 이름을 수정해야 할 수 있습니다.

예를 들어 LTR용 `Helvetica Neue` 폰트에서 RTL용 `Helvetica Neue Arabic`으로 전환하는 경우 Sass 코드는 다음과 같을 수 있습니다:

```scss
$font-family-sans-serif:
  Helvetica Neue #{"/* rtl:insert:Arabic */"},
  // Cross-platform generic font family (default user interface font)
  system-ui,
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

### LTR과 RTL을 동시에 사용하기

동일한 페이지에 LTR과 RTL이 모두 필요하신가요? [RTLCSS String Maps](https://rtlcss.com/learn/usage-guide/string-map/) 덕분에 이것은 매우 간단합니다. `@import`를 클래스로 줄바꿈하고 RTLCSS에 대한 커스텀 이름 바꾸기 규칙을 다음과 같이 설정하면 됩니다:

```scss
/* rtl:begin:options: {
  "autoRename": true,
  "stringMap":[ {
    "name": "ltr-rtl",
    "priority": 100,
    "search": ["ltr"],
    "replace": ["rtl"],
    "options": {
      "scope": "*",
      "ignoreCase": false
    }
  } ]
} */
.ltr {
  @import "../node_modules/bootstrap/scss/bootstrap";
}
/*rtl:end:options*/
```

Sass를 실행한 다음 RTLCSS를 실행하면 CSS 파일의 각 선택자에 `.ltr`이 추가되고 RTL 파일의 경우 `.rtl`이 추가됩니다. 이제 동일한 페이지에서 두 파일을 모두 사용할 수 있으며 컴포넌트 래퍼에서 .ltr 또는 .rtl을 사용하여 둘 중 하나의 방향을 사용할 수 있습니다.

{{< callout warning >}}
LTR과 RTL을 결합한 구현으로 작업할 때 고려해야 할 **경계 조건과 알려진 한계**입니다.

1. `.ltr`과 `.rtl` 간에서 전환할 때 그에 따른 `dir` 및 `lang` 속성을 추가해야 합니다.
2. 두 파일을 모두 불러오면 실제 성능에 병목 현상이 발생할 수 있습니다. [최적화]({{< docsref "/customize/optimize" >}})를 고려하고 둘 중 하나의 파일만 [비동기적으로 로드](https://www.filamentgroup.com/lab/load-css-simpler/)해보세요.
3. 이런 식으로 스타일을 중첩하면 `form-validation-state()` 믹스인이 의도한 대로 작동하지 않음으로 어느정도 직접 조정이 필요합니다. [#31223을 참고](https://github.com/twbs/bootstrap/issues/31223)해주세요.
{{< /callout >}}

이 프로세스를 자동화하고 단일 스타일시트 내에서 양방향과 관련된 여러 가지 예외 사례를 해결하고 싶으신가요? 그렇다면 [PostCSS RTLCSS](https://github.com/elchininet/postcss-rtlcss)를 [PostCSS](https://github.com/postcss/postcss) 플러그인으로 사용하여 소스 파일을 처리하는 것을 고려하세요. PostCSS RTLCSS는 방향 전환 프로세스를 관리하기 위해 [RTLCSS](https://rtlcss.com)를 백그라운드에서 사용하지만, 뒤집힌 선언을 LTR 및 RTL에 대한 다른 접두사가 있는 규칙으로 분리하여 동일한 스타일시트 파일 내에서 양방향을 사용할 수 있습니다. 이렇게 하면 페이지의 `dir`을 변경하기만 하면(또는 플러그인을 적절히 구성한 경우 특정 클래스를 수정하여) LTR 및 RTL 방향을 전환할 수 있습니다.

{{< callout warning >}}
**PostCSS RTLCSS를 사용하여 결합된 LTR 및 RTL 구현을 빌드할 때 고려해야 할 중요 사항**:

1. `html` 요소에 `dir` 속성을 추가하는 것이 좋습니다. 이렇게 하면 방향을 변경할 때 전체 페이지가 영향을 받습니다. 또한 `lang` 속성도 그에 따라 추가해야 합니다.
2. 두 방향의 단일 번들을 사용하면 최종 스타일시트의 크기가 증가합니다. (평균적으로 20%-30%) [최적화]({{< docsref "/customize/optimize" >}})를 고려하세요.
3. PostCSS RTLCSS는 CSS 규칙을 제거하지 않기 때문에 `/* rtl:remove */` 지시문과 호환되지 않는다는 점을 고려하세요. `/* rtl:remove */`, `/* rtl:begin:remove */` 및 `/* rtl:end:remove */` 지시어를 각각 `/* rtl:freeze */`, `/* rtl:begin:freeze */` 및 `/* rtl:end:freeze */` 지시어로 바꿔야 합니다. 이러한 지시어는 대상 규칙 또는 선언에 현재 방향을 접두사로 붙이지만 RTL 대응물을 생성하지는 않습니다. (RTLCSS의 `remove`와 동일한 결과)
{{< /callout >}}

## 브래드크럼의 경우

[브래드크럼 구분 기호]({{< docsref "/components/breadcrumb#dividers" >}})는 `$breadcrumb-divider`로 기본 설정된 자체 새 변수인 `$breadcrumb-divider-flipped`가 필요한 유일한 경우입니다.

## 추가 자료

- [RTLCSS](https://rtlcss.com/)
- [RTL 스타일링 기초 과정](https://rtlstyling.com/posts/rtl-styling)
