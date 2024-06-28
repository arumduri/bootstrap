---
layout: docs
title: 포커스 링
description: 요소와 컴포넌트에 사용자 지정 포커스 링 스타일을 추가하고 수정할 수 있는 유틸리티 클래스입니다.
group: helpers
toc: true
added: "5.3"
---

`.focus-ring` 도우미는 `:focus`의 기본 `outline`을 제거하여 보다 광범위하게 사용자 정의할 수 있는 `box-shadow`로 대체합니다. 새 그림자는 `:root` 수준에서 상속된 일련의 CSS 변수로 구성되며, 모든 요소 또는 컴포넌트에 대해 수정할 수 있습니다.

## 예시

아래 링크를 직접 클릭하여 초점 링이 작동하는 모습을 보거나 아래 예시를 클릭한 다음 <kbd>Tab</kbd> 키를 누릅니다.

{{< example >}}
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Custom focus ring
</a>
{{< /example >}}

## 사용자 지정

CSS 변수, Sass 변수, 유틸리티 또는 사용자 정의 스타일을 사용하여 포커스 링의 스타일을 수정합니다.

### CSS 변수

필요에 따라 `--bs-focus-ring-*` CSS 변수를 수정하여 기본 모양을 변경할 수 있습니다.

{{< example >}}
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
  Green focus ring
</a>
{{< /example >}}

`.focus-ring`은 위와 같이 모든 부모 요소에서 재정의할 수 있는 전역 CSS 변수를 통해 스타일을 설정합니다. 이러한 변수는 Sass 변수에 대응하는 변수에서 생성됩니다.

{{< scss-docs name="root-focus-variables" file="scss/_root.scss" >}}

기본적으로 `--bs-focus-ring-x`, `--bs-focus-ring-y`, `--bs-focus-ring-blur`는 없지만 초기 `0` 값에 대한 폴백이 있는 CSS 변수를 제공합니다. 기본 모양을 변경하려면 해당 변수를 수정하세요.

{{< example >}}
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-x: 10px; --bs-focus-ring-y: 10px; --bs-focus-ring-blur: 4px">
  Blurry offset focus ring
</a>
{{< /example >}}

### Sass 변수

포커스 링 Sass 변수를 사용자 정의하여 Bootstrap 기반 프로젝트에서 포커스 링 스타일의 모든 사용법을 수정할 수 있습니다.

{{< scss-docs name="focus-ring-variables" file="scss/_variables.scss" >}}

### Sass 유틸리티 API

`.focus-ring` 외에도 도우미 클래스 기본값을 수정하는 여러 `.focus-ring-*` 유틸리티가 있습니다. [테마 색상]({{< docsref "/customize/color#theme-colors" >}}) 중 하나를 사용하여 색상을 수정하세요. 현재 색상 모드 지원으로 인해 모든 배경색에서 밝고 어두운 변형이 표시되지 않을 수 있습니다.

{{< example >}}
{{< focus-ring.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="d-inline-flex focus-ring focus-ring-{{ .name }} py-1 px-2 text-decoration-none border rounded-2">{{ title .name }} focus</a></p>
{{- end -}}
{{< /focus-ring.inline >}}
{{< /example >}}

초점 링 유틸리티는 유틸리티 API의 `scss/_utilities.scss`에 선언되어 있습니다. [유틸리티 API 사용 방법 알아보기]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-focus-ring" file="scss/_utilities.scss" >}}
