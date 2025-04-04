---
layout: docs
title: 색상 모드
title_en: Color modes
description: Bootstrap은 이제 v5.3.0부터 색상 모드 또는 테마를 지원합니다. 기본값인 라이트 모드와 새로운 다크 모드를 살펴보거나 스타일을 템플릿으로 사용하여 나만의 모드를 만들어 보세요.
group: customize
toc: true
added: "5.3"
---

{{< callout >}}
**직접 사용해보세요!** [twbs/examples 저장소](https://github.com/twbs/examples/tree/main/color-modes)에서 Bootstrap과 Stylelint 및 색상 모드를 사용하기 위한 소스 코드와 작업 데모를 다운로드하세요. [StackBlitz에서 예제를 열어볼 수도 있습니다](https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index.html).
{{< /callout >}}

## 다크 모드

**이제 Bootstrap에서 어두운 모드부터 색상 모드를 지원합니다!** v5.3.0에서는 자체 색상 모드 토글을 구현하고(아래 Bootstrap 문서에서 예시를 참조하세요) 원하는 대로 다양한 색상 모드를 적용할 수 있습니다. 기본값인 라이트 모드, 그리고 새로운 다크 모드가 지원됩니다. 색상 모드는 `<html>` 요소에서 전역적으로 토글하거나 'data-bs-theme' 속성을 사용하여 특정 컴포넌트 및 요소에서 토글할 수 있습니다.

또는 컬러 모드 믹스인(자세한 내용은 사용 섹션 참조)(#building-with-sass) 덕분에 미디어 쿼리 구현으로 전환할 수도 있습니다. 주의할 점은 아래 그림과 같이 컴포넌트별로 테마를 변경할 수 없다는 점입니다.

## 예제

예를 들어 드롭다운 메뉴의 색상 모드를 변경하려면 `data-bs-theme="light"` 또는 `data-bs-theme="dark"`를 부모 `.dropdown`에 추가하면 됩니다. 이제 전역 색상 모드에 관계없이 이러한 드롭다운은 지정된 테마 값으로 표시됩니다.

{{< example class="d-flex justify-content-between" >}}
<div class="dropdown" data-bs-theme="light">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="dropdown" data-bs-theme="dark">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
    Dark dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
{{< /example >}}

## 작동 방식

- 위에 표시된 것처럼 색상 모드 스타일은 `data-bs-theme` 속성으로 제어됩니다. 이 속성은 `<html>` 요소 또는 다른 요소나 Bootstrap 컴포넌트에 적용할 수 있습니다. `<html>` 요소에 적용하면 모든 요소에 적용됩니다. 컴포넌트나 요소에 적용하면 해당 특정 컴포넌트나 요소로 범위가 지정됩니다.

- 지원하려는 각 색상 모드에 대해 공유 전역 CSS 변수에 대한 새로운 오버라이드를 추가해야 합니다. 다크 모드의 경우 `_root.scss` 스타일시트에서 이미 이 작업을 수행했으며 라이트 모드가 기본값으로 설정되어 있습니다. 컬러 모드별 스타일을 작성할 때는 믹스인을 사용하세요:

  ```scss
  // Color mode variables in _root.scss
  @include color-mode(dark) {
    // CSS variable overrides here...
  }
  ```

- 사용자 정의 `_variables-dark.scss`를 사용하여 다크 모드에 대한 공유 전역 CSS 변수 오버라이드를 강화합니다. 이 파일은 사용자 정의 색상 모드에는 필요하지 않지만 두 가지 이유로 다크 모드에는 필요합니다. 첫째, 전역 색상을 재설정할 수 있는 단일 위치가 있는 것이 좋습니다. 둘째, 아코디언, 양식 컴포넌트 등을 위해 CSS에 포함된 배경 이미지에 대해 일부 Sass 변수를 재정의해야 했기 때문입니다.

## 사용법

### 다크 모드 활성화

`<html>` 요소에 `data-bs-theme="dark"` 속성을 추가하여 전체 프로젝트에서 기본 제공 어두운 색상 모드를 사용하도록 설정합니다. 이렇게 하면 특정 `data-bs-theme` 속성이 적용된 요소를 제외한 모든 컴포넌트와 요소에 어두운 색상 모드가 적용됩니다. 아래는 [빠른 시작 템플릿]({{< docsref "/getting-started/introduction#quick-start" >}})을 기반으로 만들어진 예시입니다:

```html
<!doctype html>
<html lang="en" data-bs-theme="dark">
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

Bootstrap에는 아직 내장된 색상 모드 선택기가 제공되지 않지만 원하는 경우 자체 문서에 있는 색상 모드 선택기를 사용할 수 있습니다. [JavaScript 문단에서 자세히 확인해보세요.](#javascript)

### Sass로 빌드하기

새로운 다크 모드 옵션은 Bootstrap의 모든 사용자가 사용할 수 있지만 미디어 쿼리 대신 데이터 속성을 통해 제어되며 프로젝트의 색상 모드를 자동으로 전환하지 않습니다. Sass를 통해 `$enable-dark-mode`를 `false`로 변경하여 다크 모드를 완전히 비활성화할 수 있습니다.

색상 모드가 _어떻게_ 적용되는지 제어할 수 있도록 사용자 정의 Sass 믹스인 `color-mode()`를 사용합니다. 기본적으로 `data` 속성 접근 방식을 사용하여 (이 문서처럼) 방문자가 자동 다크 모드를 선택하거나 기본 설정을 제어할 수 있는 보다 사용자 친화적인 환경을 만들 수 있습니다. 또한 라이트/다크 외에도 다양한 테마와 사용자 정의 색상 모드를 추가할 수 있는 쉽고 확장 가능한 방법입니다.

미디어 쿼리를 사용하고 색상 모드만 자동으로 만들려면 Sass 변수를 통해 믹싱의 기본 유형을 변경할 수 있습니다. 다음 스니펫과 컴파일된 CSS 출력을 살펴보세요.

```scss
$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

결과는 다음과 같습니다.

```css
[data-bs-theme=dark] .element {
  color: var(--bs-primary-text-emphasis);
  background-color: var(--bs-primary-bg-subtle);
}
```

`media-query` 설정 시를 사용한 예시입니다.

```scss
$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

결과는 다음과 같습니다.

```css
@media (prefers-color-scheme: dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

## 사용자 지정 색상 모드

색상 모드의 주요 사용 사례는 라이트/다크 모드이지만 사용자 정의 색상 모드도 가능합니다. 사용자 정의 값을 색상 모드의 이름으로 사용하여 나만의 `data-bs-theme` 선택기를 만든 다음 필요에 따라 Sass 및 CSS 변수를 수정합니다. 저희는 Bootstrap의 다크 모드 전용 Sass 변수를 저장하기 위해 별도의 `_variables-dark.scss` 스타일시트를 만들기로 선택했지만, 반드시 필요한 것은 아닙니다.

예를 들어 `data-bs-theme="blue"` 선택기를 사용하여 "파란색 테마"를 만들 수 있습니다. 사용자 정의 Sass 또는 CSS 파일에서 새 선택기를 추가하고 필요에 따라 전역 또는 컴포넌트 CSS 변수를 재정의합니다. Sass를 사용하는 경우 CSS 변수 오버라이드 내에서 Sass의 함수를 사용할 수도 있습니다.

{{< scss-docs name="custom-color-mode" file="site/assets/scss/_content.scss" >}}

<div class="bd-example text-body bg-body" data-bs-theme="blue">
  <div class="h4">Example blue theme</div>
  <p>Some paragraph text to show how the blue theme might look with written copy.</p>

  <hr class="my-4">

  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonCustom" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCustom">
      <li><a class="dropdown-item active" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

```html
<div data-bs-theme="blue">
  ...
</div>
```

## JavaScript

방문자나 사용자가 색상 모드를 전환할 수 있도록 하려면 루트 요소인 `<html>`의 `data-bs-theme` 속성을 제어하는 토글 요소를 만들어야 합니다. 처음에는 사용자의 현재 시스템 색상 모드를 따르지만, 이를 재정의하고 특정 색상 모드를 선택할 수 있는 옵션을 제공하는 토글러를 문서에 작성했습니다.

이 기능을 구동하는 JavaScript를 살펴보세요. 자체 컴포넌트에서 HTML과 CSS를 사용하여 어떻게 구현되었는지 보려면 자체 문서 내비게이션 바를 살펴보시기 바랍니다. 사이트 새로고침 시 발생할 수 있는 화면 깜박임을 줄이려면 페이지 상단에 JavaScript를 포함하는 것이 좋습니다. 색상 모드에 미디어 쿼리를 사용하기로 결정한 경우, 암시적 제어를 선호하는 경우 JavaScript를 수정하거나 제거해야 할 수 있습니다.

{{< example lang="js" show_preview="false" >}}
{{< js.inline >}}
{{- readFile (path.Join "site/static/docs" .Site.Params.docs_version "assets/js/color-modes.js") -}}
{{< /js.inline >}}
{{< /example >}}

## 테마 색상 추가

[경고창]({{< docsref "/components/alerts" >}})이나 [목록 그룹]({{< docsref "/components/list-group" >}})과 같은 일부 컴포넌트의 경우 `$theme-colors`에 새 색상을 추가하는 것만으로는 충분하지 않습니다. 밝은 테마의 경우 `$theme-colors-text`, `$theme-colors-bg-subtle` 및 `$theme-colors-border-subtle`에도 새 색상을 정의해야 하며 어두운 테마의 경우 `$theme-colors-text-dark`, `$theme-colors-bg-subtle-dark` 및 `$theme-colors-border-subtle-dark`에도 새 색상을 정의해야 합니다.

Sass는 기존 변수나 맵에서 자체 Sass 변수를 생성할 수 없으므로 이 과정은 수동으로 진행해야 합니다. 향후 버전의 Bootstrap에서는 중복을 줄이기 위해 이 설정을 다시 검토할 예정입니다.

```scss
// Required
@import "functions";
@import "variables";
@import "variables-dark";

// Add a custom color to $theme-colors
$custom-colors: (
  "custom-color": #712cf9
);
$theme-colors: map-merge($theme-colors, $custom-colors);

@import "maps";
@import "mixins";
@import "utilities";

// Add a custom color to new theme maps

// Light mode
$custom-colors-text: ("custom-color": #712cf9);
$custom-colors-bg-subtle: ("custom-color": #e1d2fe);
$custom-colors-border-subtle: ("custom-color": #bfa1fc);

$theme-colors-text: map-merge($theme-colors-text, $custom-colors-text);
$theme-colors-bg-subtle: map-merge($theme-colors-bg-subtle, $custom-colors-bg-subtle);
$theme-colors-border-subtle: map-merge($theme-colors-border-subtle, $custom-colors-border-subtle);

// Dark mode
$custom-colors-text-dark: ("custom-color": #e1d2f2);
$custom-colors-bg-subtle-dark: ("custom-color": #8951fa);
$custom-colors-border-subtle-dark: ("custom-color": #e1d2f2);

$theme-colors-text-dark: map-merge($theme-colors-text-dark, $custom-colors-text-dark);
$theme-colors-bg-subtle-dark: map-merge($theme-colors-bg-subtle-dark, $custom-colors-bg-subtle-dark);
$theme-colors-border-subtle-dark: map-merge($theme-colors-border-subtle-dark, $custom-colors-border-subtle-dark);

// Remainder of Bootstrap imports
@import "root";
@import "reboot";
// etc
```

## CSS

### 변수

수십 개의 루트 수준 CSS 변수가 다크 모드에 대한 오버라이드로 반복됩니다. 이러한 변수의 범위는 색상 모드 선택기에 한정되며, 기본값은 `data-bs-theme`이지만 [직접 구성 가능한](#sass로-빌드하기) 미디어 쿼리에서 `prefers-color-scheme`을 사용하도록 설정할 수 있습니다. 이 변수를 새 색상 모드를 생성할 때 가이드라인으로 사용하세요.

{{< scss-docs name="root-dark-mode-vars" file="scss/_root.scss" >}}

### Sass 변수

다크 컬러 모드의 CSS 변수는 부분적으로 `_variables-dark.scss`의 다크 모드 전용 Sass 변수에서 생성됩니다. 여기에는 컴포넌트 전체에 사용되는 임베디드 SVG의 색상을 변경하기 위한 몇 가지 사용자 정의 오버라이드도 포함됩니다.

{{< scss-docs name="sass-dark-mode-vars" file="scss/_variables-dark.scss" >}}

### Sass 믹스인

다크 모드의 스타일과 사용자가 만든 모든 사용자 정의 색상 모드는 사용자 정의 가능한 `color-mode()` 믹스인을 사용하여 `data-bs-theme` 속성 선택기 또는 미디어 쿼리에 적절하게 범위를 지정할 수 있습니다. 자세한 내용은 [Sass 사용법 문단](#sass로-빌드하기)을 참조하세요.

{{< scss-docs name="color-mode-mixin" file="scss/mixins/_color-mode.scss" >}}
