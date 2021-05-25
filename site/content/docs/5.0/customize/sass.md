---
layout: docs
title: Sass
description: 변수, 맵, 믹스인 그리고 함수를 활용한 소스의 Sass 파일을 이용하여 프로젝트 구축을 고속화하고 재정의 할 수 있습니다.
group: customize
toc: true
---

변수, 맵, 믹스인 등을 활용한 소스의 Sass 파일을 이용합니다.

## File structure

가능한 한, Bootstrap의 핵심 파일은 수정하지 마세요. Sass에서는 Bootstrap을 가져와 자체 스타일 시트를 생성함으로써 Bootstrap을 수정하고 확장할 수 있습니다. npm과 같은 패키지 매니저를 사용하는 경우 다음과 같은 파일 구조가 됩니다.:

```text
your-project/
├── scss
│   └── custom.scss
└── node_modules/
    └── bootstrap
        ├── js
        └── scss
```

소스 파일을 다운로드한 후 패키지 관리자를 사용하지 않는 경우 해당 구조와 유사한 파일을 수동으로 설정하고 Bootstrap의 소스 파일을 개인 파일과는 별도로 분리해 두는 것이 좋습니다.

```text
your-project/
├── scss
│   └── custom.scss
└── bootstrap/
    ├── js
    └── scss
```

## Importing

당신의 `custom.scss`에서 Bootstrap의 소스 Sass 파일을 가져옵니다. 두 가지 옵션이 있습니다: Bootstrap 모두를 포함할지, 필요한 부분을 선택할 지 입니다. 후자를 권하지만 컴포넌트 간에 몇 가지 요건과 의존 관계가 있다는 점에 유의해 주세요. 또한 플러그인 사용을 위해 위해 몇 가지 JavaScript를 포함해야 합니다.

```scss
// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
```

```scss
// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

// 4. Include any optional Bootstrap components as you like
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";

// 5. Add additional custom code here
```

이 설정이 완료되면, `custom.scss` 안에 있는 Sass 변수나 맵을 변경할 수 있습니다. 그리고 필요에 따라 `// Optional` 섹션에 Bootstrap 일부를 추가할 수도 있습니다. 시작은 우리의 `bootstrap.scss` 파일에서 전체 가져오기 스택을 사용하기를 추천합니다.

## Variable defaults

Bootstrap의 모든 Sass 변수에는 `!default` 플래그가 포함되어 있으며, Bootstrap의 소스 코드를 수정하지 않고 당신의 Sass에서 변수의 기본값을 재정의할 수 있습니다. 필요에 따라 변수를 복사&붙여넣기 하여 값을 수정하고 `!default` 플래그를 삭제하세요. 변수가 이미 설정되어 있으면 Bootstrap의 기본값으로 재설정되지 않습니다.

Bootstrap 변수의 전체 목록은 `scss/_variables.scss`에 있습니다. 몇 가지 변수는 `null`로 설정되어 있어, 이러한 변수는 설정에서 재정의되지 않는 한, 속성을 출력하지 않습니다.

변수의 재정의는 함수와 변수, 믹스인을 가져온 이후 나머지를 가져오기 전에 수행해야 합니다.

여기에서는 npm으로 가져온 Bootstrap을 컴파일 할 때에,`<body>`의 `background-color`와 `color`를 변경하는 예시를 보여주고 있습니다.

```scss
// Required
@import "../node_modules/bootstrap/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

// Bootstrap and its default variables

// Optional Bootstrap components here
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
```

Bootstrap의 모든 변수에 대해 필요에 따라 반복, 아래 글로벌 옵션을 포함합니다.

{{< callout info >}}
{{< partial "callout-info-npm-starter.md" >}}
{{< /callout >}}

## Maps and loops

Bootstrap에는 관련된 CSS의 계열을 쉽게 생성하기 위한 키벨류의 한쌍으로 된 Sass 맵이 포함되어 있습니다. 색상, 그리드 브레이크포인트 등에 Sass 맵을 사용하고 있습니다. Sass 변수처럼 모든 Sass 맵은 `!default` 플래그를 포함하며 재정의나 확장이 가능합니다.

일부 Sass 맵은 기본적으로 텅 빈 것으로 병합되어 있습니다. 이는 특정 Sass 맵을 쉽게 확장할 수 있도록 하기 위해서지만 대신 맵에서 아이템을 _삭제하는_ 것이 약간 어렵습니다.

### Modify map

All variables in the `$theme-colors` 맵의 모든 변수는 독립된 변수로 정의되어 있습니다. `$theme-colors` 맵의 기존 색을 변경하고 싶다면 사용자 정의 Sass 파일에 아래와 같이 추가합니다:

```scss
$primary: #0074d9;
$danger: #ff4136;
```

나중에 이러한 변수는 Bootstrap의 `$theme-colors` 맵에 설정됩니다:

```scss
$theme-colors: (
  "primary": $primary,
  "danger": $danger
);
```

### Add to map

사용자 정의 값으로 `$theme-colors`나 기타 맵에 새로운 색을 추가하여 새로운 Sass 맵을 만들고 기존 맵과 병합할 수 있습니다. 아래 예시에서는 새로운 `$theme-colors` 맵을 만들어 `$theme-colors`와 병합할 것입니다.

```scss
// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge the maps
$theme-colors: map-merge($theme-colors, $custom-colors);
```

### Remove from map

`$theme-colors`나 그 밖의 맵에서 색을 삭제하려면 `map-remove`를 사용합니다. 단, 필요조건(requirements)과 옵션(option) 사이에 넣어야 합니다:

```scss
// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

// Optional
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
```

## Required keys

Bootstrap은 Sass 맵 내의 몇몇 특정 키를 전제로 사용하며 우리는 이들을 그대로 혹은 확장하여 사용했습니다. 포함된 맵을 재정의하면 특정 Sass 맵의 키가 사용되는 오류가 생길 수도 있습니다.

예를 들어, 링크와 버튼 그리고 폼 상태에 사용되는 `$theme-colors`의 `primary`, `success`, `danger` 등의 키를 사용하고 있습니다. 이런 키의 값을 바꾸어도 문제가 없지만, 삭제하면 Sass의 컴파일에 문제가 생길 수 있습니다. 이러한 경우에는 이 값을 사용하는 Sass의 코드를 수정해야 합니다.

## Functions

### Colors

[Sass maps]({{< docsref "/customize/color#color-sass-maps" >}})의 사용 외에 `$primary`과 같이 독립된 변수로 사용할 수 있습니다.

```scss
.custom-element {
  color: $gray-100;
  background-color: $dark;
}
```

Bootstrap의 `tint-color()`와 `shade-color()` 함수로, 색을 밝게 혹은 어둡게 만들 수 있습니다. 이들 함수는 Sass의 순수한 `lighten()`과 `darken()` 함수와는 달리 색을 검은색 혹은 흰색과 섞어 밝기를 일정량 변화시켜 원하는 효과를 얻지 못하는 경우가 많습니다.


{{< scss-docs name="color-functions" file="scss/_functions.scss" >}}

실제로는 이 함수를 호출하여 색상과 중량의 파라미터를 전달합니다.

```scss
.custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}
```

### Color contrast

[WCAG 2.0 색 대비 표준 접근성](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)을 만족시키기 위해서는, 극소수의 예외를 제외하고 만드는 사람은 [최소 4.5:1의 대비 비율](https://www.w3.org/WAI/WCAG20/quickref/20160105/Overview.php#visual-audio-contrast-contrast)을 제공**해야 합니다**

Bootstrap에 포함된 추가 기능은 색 대비 함수 `color-contrast`입니다. [WCAG 2.0 알고리즘](https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests)을 이용해, `sRGB` 색 공간의 상대 휘도에 근거한 대비 임계치를 계산하여 자동으로 light (`#fff`), dark (`#212529`), black (`#000`)을 반환합니다. 이 함수는 복수의 클래스를 만드는 믹스인이나 반복에 특히 유용합니다.

예를 들어, `$theme-colors` 맵에서 swatch의 색상을 만드는 경우입니다:

```scss
@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}
```

또한, 단발적인 요구에도 대응할 수 있습니다:

```scss
.custom-element {
  color: color-contrast(#000); // returns `color: #fff`
}
```

그리고 색상 map 함수로 기본 색을 지정할 수도 있습니다:

```scss
.custom-element {
  color: color-contrast($dark); // returns `color: #fff`
}
```

### Escape SVG

SVG 배경 이미지 코드에서 `<`, `>`, `#`의 문자를 사용하지 않기 위해 `escape-svg` 함수를 사용합니다. `escape-svg` 함수를 사용할 때에는 data URI를 인용해야 합니다.

### Add and Subtract functions

CSS `calc` 함수 사용을 위해 `add`와 `subtract` 함수를 사용합니다. 이들 함수의 주된 목적은 "단위가 없다", `calc`의 식에 `0`의 값이 들어갔을 때 에러를 피하는 것입니다. `calc(10px - 0)`과 같은 식은 수학적 의미로는 맞지만, 모든 브라우저에서 오류를 반환합니다.

calc 계산이 유효한 예제:

```scss
$border-radius: .25rem;
$border-width: 1px;

.element {
  // Output calc(.25rem - 1px) is valid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output the same calc(.25rem - 1px) as above
  border-radius: subtract($border-radius, $border-width);
}
```

calc 계산이 잘못된 예제:

```scss
$border-radius: .25rem;
$border-width: 0;

.element {
  // Output calc(.25rem - 0) is invalid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output .25rem
  border-radius: subtract($border-radius, $border-width);
}
```

## Mixins

`scss/mixins/` 폴더에는 Bootstrap을 강화하는 많은 믹스인이 있으며, 우리의 프로젝트에도 사용할 수 있습니다.

### Color schemes

`prefers-color-scheme` 미디어 쿼리의 간단한 믹스인은 `light`, `dark`, 그리고 사용자 정의 색상 배합을 지원합니다.

{{< scss-docs name="mixin-color-scheme" file="scss/mixins/_color-scheme.scss" >}}

```scss
.custom-element {
  @include color-scheme(dark) {
    // Insert dark mode styles here
  }

  @include color-scheme(custom-named-scheme) {
    // Insert custom color scheme styles here
  }
}
```
