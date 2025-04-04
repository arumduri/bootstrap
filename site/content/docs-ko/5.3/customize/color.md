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

Bootstrap의 색상 팔레트는 v5.3.0에서 계속 확장되고 더욱 세세해졌습니다. `secondary` 및 `tertiary` 텍스트 및 배경색에 대한 새로운 변수와 테마 색상에 대한 `{color}-bg-subtle`, `{color}-border-subtle` 및 `{color}-text-emphasis`가 추가되었습니다. 이러한 새로운 색상은 밝고 어두운 등 다양한 색상 모드에서 더 쉽게 사용자 정의할 수 있도록 하기 위해 Sass 및 CSS 변수(색상 맵이나 유틸리티 클래스 제외)를 통해 사용할 수 있습니다. 이 새로운 변수는 `:root`에 전역적으로 설정되며, 원래 테마 색상은 변경되지 않은 채 새로운 어두운 색상 모드에 맞게 조정됩니다.

`-rgb`로 끝나는 색상은 `rgb()` 및 `rgba()` 색상 모드에서 사용할 `red`, `green`, `blue` 값을 제공합니다. (예: `rgba(var(--bs-secondary-bg-rgb), .5)`)

{{< callout warning>}}
**주의!** 새로운 보조(secondary) 및 참고(tertiary) 색상과 기존 보조 테마 색상, 밝은 테마 색상과 어두운 테마 색상이 혼동될 가능성이 있습니다. 이 문제는 v6에서 해결될 것으로 예상됩니다.
{{< /callout >}}

<div class="table-responsive">
  <table class="table table-swatches">
    <thead>
      <tr>
        <th style="width: 340px;">설명</th>
        <th style="width: 200px;" class="ps-0">예시</th>
        <th>변수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">
          {{< markdown >}}**Body —** 컴포넌트를 포함한 기본 전경(색상) 및 배경입니다.{{< /markdown >}}
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
          {{< markdown >}}**Secondary —** 더 밝은 텍스트를 원하면 `color` 옵션을, 구분선 및 비활성화된 컴포넌트 상태를 표시하려면 `bg` 옵션을 사용하세요.{{< /markdown >}}
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
          {{< markdown >}}**Tertiary —** 더 밝은 색상의 텍스트를 원하시면 `color` 옵션을 사용하세요. `bg` 옵션을 사용하여 호버 상태, 액센트 및 우물의 배경 스타일을 지정하세요.{{< /markdown >}}
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
          {{< markdown >}}**Emphasis —** 대비가 높은 텍스트의 경우에 사용됩니다. 배경에는 적용되지 않습니다.{{< /markdown >}}
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
          {{< markdown >}}**Border —** 컴포넌트 테두리, 디바이더 및 규칙의 경우에 사용됩니다. 배경과 `-rgba()` 값을 가진 배경과 혼합하려면 `--bs-border-color-transparent`를 사용하세요.{{< /markdown >}}
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
          {{< markdown >}}**Primary —** 하이퍼링크, 포커스 스타일, 컴포넌트 및 양식 활성 상태에 사용되는 기본 테마 색상입니다.{{< /markdown >}}
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
          {{< markdown >}}**Success —** 긍정적이거나 성공적인 작업 및 정보에 사용되는 테마 색상입니다.{{< /markdown >}}
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
          {{< markdown >}}**Danger —** 오류 및 위험한 행동에 사용되는 테마 색상입니다.{{< /markdown >}}
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
          {{< markdown >}}**Warning —** 덜 위험한 경고 메시지에 사용되는 테마 색상입니다.{{< /markdown >}}
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
          {{< markdown >}}**Info —** 중립적이거나 정보성 콘텐츠에 사용되는 테마 색상입니다.{{< /markdown >}}
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
          {{< markdown >}}**Light —** 대비가 적은 색상을 위한 추가 테마 옵션입니다.{{< /markdown >}}
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
          {{< markdown >}}**Dark —** 대비가 높은 색상을 위한 추가 테마 옵션입니다.{{< /markdown >}}
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

### 새로운 색상 사용

이러한 새로운 색상은 CSS 변수와 유틸리티 클래스(예: `--bs-primary-bg-subtle` 및 `.bg-primary-subtle`)를 통해 액세스할 수 있으므로 변수를 사용하여 자신만의 CSS 규칙을 작성하거나 클래스를 통해 스타일을 빠르게 적용할 수 있습니다. 이 유틸리티는 색상과 관련된 CSS 변수를 사용하여 구축되며, 다크 모드에 맞게 사용자 정의되므로 기본적으로 색상 모드에 맞게 조정됩니다.

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

`mix()`의 사용은 `lighten()`과 `darken()`간에 조금 다릅니다. 전자는 지정한 색상을 흰색과 검은색으로 섞지만, 후자는 각 색의 밝기 값을 조정하기만 하면 됩니다. 그 결과, [CodePen 데모](https://codepen.io/emdeoh/pen/zYOQOPB)에서 보이는 것처럼 더 완전한 색을 얻을 수 있습니다.

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

Sass에서 이를 사용하는 방법입니다:
```scss
.alpha { color: $purple; }
.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
```

[색상]({{< docsref "/utilities/colors" >}}) 및 [배경]({{< docsref "/utilities/background" >}}) 유틸리티 클래스는 `500` 색상 값을 사용하여 `color` 및 `background-color`를 설정하는 데 사용할 수도 있습니다.

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