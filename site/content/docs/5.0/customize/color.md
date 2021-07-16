---
layout: docs
title: 색상
title_en: Color
description: Bootstrap은 우리의 스타일과 컴포넌트를 테마로 한 광범위한 컬러 시스템을 지원합니다. 어떤 프로젝트라도 보다 포괄적으로 재정의 및 확장이 가능합니다.
group: customize
toc: true
---

## 테마 색상

모든 색상의 자식 집합을 사용하여 색 구성표를 만들기 위한 더 작은 색상 팔레트를 만들며, Sass 변수와 Bootstrap의 `scss/_variables.scss` 파일의 Sass 맵으로도 사용할 수 있습니다.

<div class="row">
  {{< theme-colors.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-{{ .name }} {{ if .contrast_color }}text-{{ .contrast_color }}{{ else }}text-white{{ end }}">{{ .name | title }}</div>
    </div>
  {{ end -}}
  {{< /theme-colors.inline >}}
</div>

이 색상들은 모두 Sass 맵인 `$theme-colors`로 이용할 수 있습니다.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

이 색상을 변경하는 방법은 [Sass 맵과 반복 문서]({{< docsref "/customize/sass#maps-and-loops" >}})를 확인해 주세요.

## 모든 색상

모든 Bootstrap 색상은 `scss/_variables.scss` 파일의 Sass 변수와 Sass 맵으로 이용할 수 있습니다. 파일 크기 증가를 막기 위해서 이런 변수마다 텍스트나 배경 색상 클래스를 만들지 않습니다. 그 대신에, 이런 색의 자식 집합을 [theme palette](#theme-colors)로 선택하고 있습니다.

색을 재정의 할 때는, 색상 대비에 주의해 주세요. 아래 표시된 것처럼 메인 색상에 - 현재 색상에 대해, 흰색에 대해, 검은색에 대해 - 각각 세 가지 대비 비율을 추가했습니다.

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

`mix()` 사용은, `lighten()`과 `darken()`이 동일하지 않습니다. — 전자는 지정한 색상을 흰색과 검은색으로 섞지만, 후자는 각 색의 밝기 값을 조정하기만 하면 됩니다. 그 결과, [CodePen 데모](https://codepen.io/emdeoh/pen/zYOQOPB)처럼 충실한 색을 얻을 수 있습니다.

`tint-color()` 및 `shade-color()` 함수에서는 `mix()`를 `$theme-color-interval` 변수와 함께 사용합니다. 전체 소스 코드는 `scss/_functions.scss`와 `scss/_variables.scss` 파일을 참조해 주세요.

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

[Color]({{< docsref "/utilities/colors" >}})와 [background]({{< docsref "/utilities/background" >}}) 유틸리티 클래스는 `500` 색상의 값을 사용해 `color`와 `background-color`를 설정하기 위해서 이용할 수 있습니다.
