---
layout: docs
title: 색상
title_en: Color
description: Bootstrap은 우리의 스타일과 컴포넌트를 테마로 한 광범위한 컬러 시스템을 지원합니다. 어떤 프로젝트라도 보다 포괄적으로 재정의 및 확장이 가능합니다.
group: customize
toc: true
---

## 색상

{{< added-in "5.3.0" >}}

Bootstrap's color palette has continued to expand and become more nuanced in v5.3.0. We've added new variables for `secondary` and `tertiary` text and background colors, plus `{color}-bg-subtle`, `{color}-border-subtle`, and `{color}-text-emphasis` for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on `:root` and are adapted for our new dark color mode while our original theme colors remain unchanged.

Colors ending in `-rgb` provide the `red, green, blue` values for use in `rgb()` and `rgba()` color modes. For example, `rgba(var(--bs-secondary-bg-rgb), .5)`.

{{< callout warning>}}
**Heads up!** There's some potential confusion with our new secondary and tertiary colors, and our existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6.
{{< /callout >}}

<div class="table-responsive">
  <table class="table table-swatches">
    <thead>
      <tr>
        <th style="width: 340px;">Description</th>
        <th style="width: 200px;" class="ps-0">Swatch</th>
        <th>Variables</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">
          {{< markdown >}}**Body —** Default foreground (color) and background, including components.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2" style="background-color: var(--bs-body-color);">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-body-color`<br>`--bs-body-color-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2 border" style="background-color: var(--bs-body-bg);">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-body-bg`<br>`--bs-body-bg-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          {{< markdown >}}**Secondary —** Use the `color` option for lighter text. Use the `bg` option for dividers and to indicate disabled component states.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2" style="background-color: var(--bs-secondary-color);">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-secondary-color`<br>`--bs-secondary-color-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2 border" style="background-color: var(--bs-secondary-bg);">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-secondary-bg`<br>`--bs-secondary-bg-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          {{< markdown >}}**Tertiary —** Use the `color` option for even lighter text. Use the `bg` option to style backgrounds for hover states, accents, and wells.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2" style="background-color: var(--bs-tertiary-color);">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-tertiary-color`<br>`--bs-tertiary-color-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2 border" style="background-color: var(--bs-tertiary-bg);">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-tertiary-bg`<br>`--bs-tertiary-bg-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}**Emphasis —** For higher contrast text. Not applicable for backgrounds.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2" style="background-color: var(--bs-emphasis-color);">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-emphasis-color`<br>`--bs-emphasis-color-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}**Border —** For component borders, dividers, and rules. Use `--bs-border-color-translucent` to blend with backgrounds with an `rgba()` value.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2" style="background-color: var(--bs-border-color);">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-border-color`<br>`--bs-border-color-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="4">
          {{< markdown >}}**Primary —** Main theme color, used for hyperlinks, focus styles, and component and form active states.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2 bg-primary">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-primary`<br>`--bs-primary-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="background-color: var(--bs-primary-bg-subtle)">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-primary-bg-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="border: 5px var(--bs-primary-border-subtle) solid">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-primary-border-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="py-3 fw-bold h5" style="color: var(--bs-primary-text-emphasis)">Text</div>
        </td>
        <td>
          {{< markdown >}}`--bs-primary-text-emphasis`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="4">
          {{< markdown >}}**Success —** Theme color used for positive or successful actions and information.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2 bg-success">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-success`<br>`--bs-success-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="background-color: var(--bs-success-bg-subtle)">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-success-bg-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="border: 5px var(--bs-success-border-subtle) solid">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-success-border-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="py-3 fw-bold h5" style="color: var(--bs-success-text-emphasis)">Text</div>
        </td>
        <td>
          {{< markdown >}}`--bs-success-text-emphasis`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="4">
          {{< markdown >}}**Danger —** Theme color used for errors and dangerous actions.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2 bg-danger">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-danger`<br>`--bs-danger-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="background-color: var(--bs-danger-bg-subtle)">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-danger-bg-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="border: 5px var(--bs-danger-border-subtle) solid">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-danger-border-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="py-3 fw-bold h5" style="color: var(--bs-danger-text-emphasis)">Text</div>
        </td>
        <td>
          {{< markdown >}}`--bs-danger-text-emphasis`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="4">
          {{< markdown >}}**Warning —** Theme color used for non-destructive warning messages.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2 bg-warning">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-warning`<br>`--bs-warning-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="background-color: var(--bs-warning-bg-subtle)">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-warning-bg-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="border: 5px var(--bs-warning-border-subtle) solid">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-warning-border-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="py-3 fw-bold h5" style="color: var(--bs-warning-text-emphasis)">Text</div>
        </td>
        <td>
          {{< markdown >}}`--bs-warning-text-emphasis`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="4">
          {{< markdown >}}**Info —** Theme color used for neutral and informative content.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2 bg-info">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-info`<br>`--bs-info-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="background-color: var(--bs-info-bg-subtle)">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-info-bg-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="border: 5px var(--bs-info-border-subtle) solid">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-info-border-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="py-3 fw-bold h5" style="color: var(--bs-info-text-emphasis)">Text</div>
        </td>
        <td>
          {{< markdown >}}`--bs-info-text-emphasis`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="4">
          {{< markdown >}}**Light —** Additional theme option for less contrasting colors.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2 bg-light">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-light`<br>`--bs-light-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="background-color: var(--bs-light-bg-subtle)">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-light-bg-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="border: 5px var(--bs-light-border-subtle) solid">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-light-border-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="py-3 fw-bold h5" style="color: var(--bs-light-text-emphasis)">Text</div>
        </td>
        <td>
          {{< markdown >}}`--bs-light-text-emphasis`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td rowspan="4">
          {{< markdown >}}**Dark —** Additional theme option for higher contrasting colors.{{< /markdown >}}
        </td>
        <td class="ps-0">
          <div class="p-3 rounded-2 bg-dark">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-dark`<br>`--bs-dark-rgb`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="background-color: var(--bs-dark-bg-subtle)">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-dark-bg-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="p-3 rounded-2" style="border: 5px var(--bs-dark-border-subtle) solid">&nbsp;</div>
        </td>
        <td>
          {{< markdown >}}`--bs-dark-border-subtle`{{< /markdown >}}
        </td>
      </tr>
      <tr>
        <td>
          <div class="py-3 fw-bold h5" style="color: var(--bs-dark-text-emphasis)">Text</div>
        </td>
        <td>
          {{< markdown >}}`--bs-dark-text-emphasis`{{< /markdown >}}
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Using the new colors

These new colors are accessible via CSS variables and utility classes—like `--bs-primary-bg-subtle` and `.bg-primary-subtle`—allowing you to compose your own CSS rules with the variables, or to quickly apply styles via classes. The utilities are built with the color's associated CSS variables, and since we customize those CSS variables for dark mode, they are also adaptive to color mode by default.

{{< example >}}
<div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
  Example element with utilities
</div>
{{< /example >}}

### 테마 색상

모든 색상의 자식 집합을 사용하여 색 구성표를 만들기 위한 더 작은 색상 팔레트를 만들며, Sass 변수와 Bootstrap의 `scss/_variables.scss` 파일의 Sass 맵으로도 사용할 수 있습니다.

<div class="row">
  {{< theme-colors.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
    <div class="col-md-4">
      <div class="p-3 mb-3 text-bg-{{ .name }} rounded-3">{{ .name | title }}</div>
    </div>
  {{ end -}}
  {{< /theme-colors.inline >}}
</div>

이 색상들은 모두 Sass 맵인 `$theme-colors`로 이용할 수 있습니다.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

이 색상을 변경하는 방법은 [Sass 맵과 반복 문서]({{< docsref "/customize/sass#maps-and-loops" >}})를 확인해 주세요.

## 모든 색상

모든 Bootstrap 색상은 `scss/_variables.scss` 파일의 Sass 변수와 Sass 맵으로 이용할 수 있습니다. 파일 크기 증가를 막기 위해서 이런 변수마다 텍스트나 배경색 클래스를 만들지 않습니다. 그 대신에, 이런 색의 자식 집합을 [테마 팔레트](#테마-색상)로 선택하고 있습니다.

색을 재정의할 때는 색상 대비에 주의해 주세요. 아래 표시된 것처럼 메인 색상에 현재 색상에 대해, 흰색에 대해, 검은색에 대해서 각각 세 가지 대비 비율을 추가했습니다.

<div class="row font-monospace">
  {{< theme-colors.inline >}}
  {{- range $color := $.Site.Data.colors }}
    {{- if (and (not (eq $color.name "white")) (not (eq $color.name "gray")) (not (eq $color.name "gray-dark"))) }}
    <div class="col-md-4 mb-3">
      <div class="p-3 mb-2 position-relative swatch-{{ $color.name }}">
        <strong class="d-block">${{ $color.name }}</strong>
        {{ $color.hex }}
      </div>
      {{ range (seq 100 100 900) }}
      <div class="p-3 bd-{{ $color.name }}-{{ . }}">${{ $color.name }}-{{ . }}</div>
      {{ end }}
    </div>
    {{ end -}}
  {{ end -}}

  <div class="col-md-4 mb-3">
    <div class="p-3 mb-2 position-relative swatch-gray-500">
      <strong class="d-block">$gray-500</strong>
      #adb5bd
    </div>
  {{- range $.Site.Data.grays }}
    <div class="p-3 bd-gray-{{ .name }}">$gray-{{ .name }}</div>
  {{ end -}}
  </div>
  {{< /theme-colors.inline >}}

  <div class="col-md-4 mb-3">
    <div class="p-3 mb-2 bd-black text-white">
      <strong class="d-block">$black</strong>
      #000
    </div>
    <div class="p-3 mb-2 bd-white border">
      <strong class="d-block">$white</strong>
      #fff
    </div>
  </div>
</div>

### Sass 참고 사항

Sass는 프로그램적으로 변수를 만들 수 없어서 모든 색상을 위한 변수를 수동으로 만듭니다. 중간 값을 지정하고 (예를 들어, `$blue-500`), Sass의 `mix()` 색상 함수로 색조(밝게) 혹은 음영(어둡게)의 사용자 정의 색상 함수를 사용하고 있습니다.

`mix()`의 사용은 `lighten()`과 `darken()` 조금 다릅니다. 전자는 지정한 색상을 흰색과 검은색으로 섞지만, 후자는 각 색의 밝기 값을 조정하기만 하면 됩니다. 그 결과, [CodePen 데모](https://codepen.io/emdeoh/pen/zYOQOPB)에서 보이는 것처럼 더 완전한 색을 얻을 수 있습니다.

`tint-color()`와 `shade-color()` 함수에서는 `mix()`를 `$theme-color-interval` 변수와 함께 사용합니다. 전체 소스 코드는 `scss/_functions.scss`와 `scss/_variables.scss` 파일을 참조해 주세요.

## 색상 Sass 맵

Bootstrap의 소스 Sass 파일에는 색상과 그 16진수 값의 목록을 빠르고 쉽게 반복하기 위한 세가지 맵이 포함되어 있습니다.

- `$colors`는 이용 가능한 기본(`500`) 색상을 나열합니다.
- `$theme-colors`는 의미 있는 이름을 가진 테마 색상을 나열합니다.(아래 그림 참조)
- `$grays`는 모든 회색의 색조와 음영을 나열합니다.

`scss/_variables.scss` 안에는, Bootstrap의 색상 변수와 Sass 맵이 있습니다. 다음은 `$colors` Sass 맵의 예시입니다:

{{< scss-docs name="colors-map" file="scss/_variables.scss" >}}

맵에서 값을 추가, 삭제, 수정하여 다른 많은 컴포넌트에서의 값을 사용하는 방법을 업데이트합니다. 안타깝게도 현시점에서는 _모든_ 컴포넌트가 이 Sass 맵을 이용하고 있는 것은 아닙니다. 추후 업데이트 시, 이 점을 개선하도록 노력하겠습니다. 그때까지는 Sass 맵과 `${color}` 변수를 이용해 주세요.

### 예시

당신의 Sass에서 이를 사용하는 방법입니다:
```scss
.alpha { color: $purple; }
.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
```

[Color]({{< docsref "/utilities/colors" >}}) and [background]({{< docsref "/utilities/background" >}}) utility classes are also available for setting `color` and `background-color` using the `500` color values.

## 유틸리티 생성하기

{{< added-in "5.1.0" >}}

Bootstrap에는 모든 색상 변수에 대한 `color` 및 `background-color` 유틸리티가 포함되어 있지 않지만 [유틸리티 API]({{< docsref "/utilities/api" >}}) 및 확장된 v5.1.0에 Sass 맵이 추가되어 있습니다.


1. 시작하려면 함수, 변수, 믹스인, 유틸리티를 가져왔는지 확인하세요.
2. `map-merge-multiple()` 함수를 사용하여 여러 Sass 맵을 새 맵에서 빠르게 병합하세요.
3. 이 새로운 결합 맵을 병합하여 `{color}-{level}` 클래스 이름을 가진 유틸리티를 확장하세요.

다음은 위의 단계를 사용하여 텍스트 색상 유틸리티 (예: `.text-purple-500`)를 생성하는 예입니다.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);

$utilities: map-merge(
  $utilities,
  (
    "color": map-merge(
      map-get($utilities, "color"),
      (
        values: map-merge(
          map-get(map-get($utilities, "color"), "values"),
          (
            $all-colors
          ),
        ),
      ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
```

이렇게 하면 모든 색상과 레벨에 대해 새로운 `.text-{color}-{level}` 유틸리티가 생성됩니다. 다른 유틸리티 및 속성에 대해서도 동일한 작업을 수행할 수 있습니다.