---
layout: docs
title: Tables
description: Bootstrap을 사용한 테이블의 opt-in 스타일에 대한 문서 및 예제 (JavaScript 플러그인에서 널리 사용됨)입니다.
group: content
toc: true
---

## Overview

`<table>` 요소는 캘린더나 날짜 선택기 같은 서드 파티 위젯에서 폭넓게 사용되고 있기 때문에 Bootstrap의 표는 **opt-in** 방식을 사용합니다. 기본 클래스 `.table`을 `<table>`에 넣으면 우리의 선택 수정자 클래스 또는 커스텀 스타일로 확장할 수 있습니다. 모든 표 스타일이 Bootstrap에 상속되지 않기 때문에 중첩된 테이블은 부모와 독립적으로 스타일을 지정할 수 있습니다.

가장 기본적인 표 마크업을 사용해서 `.table` 기반 표가 Bootstrap에서 어떻게 표시되는지 보여드리겠습니다.

{{< table class="table" simplified="false" >}}

## Variants

상황별 표 색상, 표 행 또는 개별 셀을 사용하세요.

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      {{< table.inline >}}
      {{- range (index $.Site.Data "theme-colors") }}
        <tr class="table-{{ .name }}">
          <th scope="row">{{ .name | title }}</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      {{- end -}}
      {{< /table.inline >}}
    </tbody>
  </table>
</div>

{{< highlight html >}}
<!-- On tables -->{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<table class="table-{{ .name }}">...</table>
{{- end -}}
{{< /table.inline >}}

<!-- On rows -->{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<tr class="table-{{ .name }}">...</tr>
{{- end -}}
{{< /table.inline >}}

<!-- On cells (`td` or `th`) -->
<tr>{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <td class="table-{{ .name }}">...</td>
{{- end -}}
{{< /table.inline >}}
</tr>
{{< /highlight >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Accented tables

### Striped rows

`.table-striped`를 사용하여 `<tbody>`내의 테이블 행에 줄무늬 (zebra-striping)를 추가합니다.

{{< table class="table table-striped" >}}

이러한 클래스는 테이블 변형에도 추가할 수 있습니다:

{{< table class="table table-dark table-striped" >}}

{{< table class="table table-success table-striped" >}}

### Hoverable rows

`.table-hover`를 추가하여 `<tbody>`내의 테이블 행에 마우스 오버 상태를 활성화합니다.

{{< table class="table table-hover" >}}

{{< table class="table table-dark table-hover" >}}

These hoverable rows can also be combined with the striped variant:

{{< table class="table table-striped table-hover" >}}

### Active tables

`.table-active` 클래스를 추가하여 테이블 행 또는 셀을 강조 표시합니다.

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

<div class="bd-example">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-dark">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## How do the variants and accented tables work?

악센트가 있는 표 ([스트라이프 행](#striped-rows), [호버할 수 있는 행](#hoverable-rows), and [활성화 표](#active-tables))을 위해서 이러한 효과가 모든 [표 변수](#variants)에서 작동하도록 몇 가지 기술을 사용했습니다:

- 먼저 `--bs-table-bg` 사용자 정의 속성으로 테이블 셀의 배경을 설정합니다. 그런 다음 모든 테이블 변형에 해당 사용자 정의 속성을 설정하여 테이블 셀을 색상화합니다. 이렇게 하면 반투명 색상을 테이블 배경으로 사용하더라도 문제가 발생하지 않습니다.
- 그런 다음 `box-shadow: inset 0009999px var (-bs-table-accent-bg);`를 사용하여 테이블 셀에 삽입 상자 그림자를 추가하여 지정된 `background-color` 위에 레이어를 추가합니다. 큰 스프레드를 사용하고 블러를 사용하지 않기 때문에 색상이 모노톤이 됩니다. `--bs-table-accent-bg`는 기본적으로 설정되어 있지 않기 때문에 기본 상자 그림자가 없습니다.
- `.table-striped`, `.table-hover` 또는`.table-active` 클래스가 추가되면 `--bs-table-accent-bg`가 반투명 색상으로 설정되어 배경을 채색합니다.
- 각 테이블 변형에 대해 해당 색상에 따라 가장 높은 대비를 가진 `--bs-table-accent-bg` 색상을 생성합니다. 예를 들어 `.table-primary`의 강조 색상은 더 어둡고 `.table-dark`는 더 밝은 강조 색상입니다.
- 텍스트 및 테두리 색상은 동일한 방식으로 생성되며 기본적으로 색상이 상속됩니다.

내용을 보면 다음과 같습니다:

{{< scss-docs name="table-variant" file="scss/mixins/_table-variants.scss" >}}

## Table borders

### Bordered tables

셀의 모든 면에 테두리가 있는 표를 만드려면 `.table-border`를 추가하면 됩니다.

{{< table class="table table-bordered" >}}

[테두리 색상 유틸리티]({{< docsref "/utilities/borders#border-color" >}})는 색상을 변경하는 데에 사용할 수 있습니다:

{{< table class="table table-bordered border-primary" >}}

### Tables without borders

테두리가 없는 표를 만드려면 `.table-borderless`를 추가하면 됩니다.

{{< table class="table table-borderless" >}}

{{< table class="table table-dark table-borderless" >}}

## Small tables

`.table-sm`을 추가하여 모든 셀 `padding`을 반으로 잘라 `.table`을 더 간결하게 만듭니다.

{{< table class="table table-sm" >}}

{{< table class="table table-dark table-sm" >}}

## Vertical alignment

`<thead>`의 표 셀은 항상 하단에 수직으로 정렬됩니다. `<tbody>`의 표 셀은 `<table>`에서 정렬을 상속하며 기본적으로 상단에 정렬됩니다. [수직 정렬]({{< docsref "/utilities/vertical-align" >}}) 클래스를 사용하여 필요한 곳에 다시 정렬합니다.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col" class="w-25">Heading 1</th>
          <th scope="col" class="w-25">Heading 2</th>
          <th scope="col" class="w-25">Heading 3</th>
          <th scope="col" class="w-25">Heading 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr class="align-bottom">
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td class="align-top">This cell is aligned to the top.</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table align-middle">
    <thead>
      <tr>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        ...
      </tr>
      <tr class="align-bottom">
        ...
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td class="align-top">This cell is aligned to the top.</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Nesting

테두리 스타일, 활성화 스타일 및 표 변형은 중첩된 표에 상속되지 않습니다.

<div class="bd-example">
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">A</th>
              <td>First</td>
              <td>Last</td>
            </tr>
            <tr>
              <th scope="row">B</th>
              <td>First</td>
              <td>Last</td>
            </tr>
            <tr>
              <th scope="row">C</th>
              <td>First</td>
              <td>Last</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

```html
<table class="table table-striped">
  <thead>
    ...
  </thead>
  <tbody>
    ...
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          ...
        </table>
      </td>
    </tr>
    ...
  </tbody>
</table>
```

## How nesting works

_아무_ 스타일이 중첩 테이블로 유출되는 것을 방지하기 위해 CSS에서 자식 결합자 (`>`) 선택자를 사용합니다. 우리는 `thead`, `tbody`, `tfoot`의 모든 `td`와 `th`를 대상으로 해야 하므로 선택자가 없으면 꽤 길어보일 것입니다. 따라서 다소 이상해 보이는 `.table > :not(caption) > * > *`선택기를 사용하여 `.table`의 모든 `td`와 `th`를 타겟팅하지만 잠재적 중첩 테이블은 없습니다.

테이블의 직계 자식으로 `<tr>`을 추가하면 해당 `<tr>`이 기본적으로 `<tbody>`에 래핑되므로 선택자가 의도한 대로 작동합니다.

## Anatomy

### Table head

표 및 어두운 표과 유사하게, 수정자 클래스 `.table-light` 또는 `.table-dark`를 사용하여 `<thead>`가 밝은 회색 또는 어두운 회색으로 표시되도록 합니다.

<div class="bd-example">
<table class="table">
  <thead class="table-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

```html
<table class="table">
  <thead class="table-light">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

<div class="bd-example">
<table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

```html
<table class="table">
  <thead class="table-dark">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

### Table foot

<div class="bd-example">
<table class="table">
  <thead class="table-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer</td>
      <td>Footer</td>
      <td>Footer</td>
      <td>Footer</td>
    </tr>
  </tfoot>
</table>
</div>

```html
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    ...
  </tfoot>
</table>
```

### Captions

`<caption>`은 표 제목과 같은 기능을 합니다. 화면 판독기를 사용하는 사용자가 표를 찾고 그 내용을 이해하고 읽을 것인지 결정할 수 있도록 도와줍니다.

<div class="bd-example">
  <table class="table">
    <caption>List of users</caption>
    {{< partial "table-content.html" >}}
  </table>
</div>

```html
<table class="table table-sm">
  <caption>List of users</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

`.caption-top`으로 테이블 상단에 `<caption>`을 넣을 수도 있습니다.

{{< example >}}
<table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Responsive tables
반응형 표를 사용하면 테이블을 쉽게 가로로 스크롤할 수 있습니다. `.table`을 `.table-responsive`로 래핑하여 모든 뷰포트에서 표가 반응하도록 만듭니다. 또는 `.table-responsive{-sm|-md|-lg|-xl|-xxl}`을 사용하여 반응형 테이블을 가질 최대 중단점을 선택합니다.

{{< callout warning >}}
##### 수직 자르기/잘림

반응형 표는 `overflow-y: hidden`을 사용하여 표의 하단 또는 상단 가장자리를 벗어나는 콘텐츠를 잘라냅니다. 특히 드롭다운 메뉴 및 기타 서드 타피 위젯을 잘라낼 수 있습니다.
{{< /callout >}}

### Always responsive

모든 중단 점에서 표 수평 스크롤에 `.table-responsive`를 사용합니다.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

### Breakpoint specific

특정 중단점까지 반응형 테이블을 생성하려면 필요에 따라 `.table-responsive{-sm|-md|-lg|-xl|-xxl}`을 사용합니다. 중단점 이상에서 표는 정상적으로 작동하며 가로로 스크롤되지 않습니다.

**이러한 표는 반응형 스타일이 특정 뷰포트 너비에 적용될 때까지 깨져보일 수 있습니다.**

{{< tables.inline >}}
{{ range $.Site.Data.breakpoints }}
{{ if not (eq . "xs") }}
<div class="bd-example">
  <div class="table-responsive{{ .abbr }}">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{{ end -}}
{{- end -}}
{{< /tables.inline >}}

{{< highlight html >}}
{{< tables.inline >}}
{{- range $.Site.Data.breakpoints -}}
{{- if not (eq . "xs") }}
<div class="table-responsive{{ .abbr }}">
  <table class="table">
    ...
  </table>
</div>
{{ end -}}
{{- end -}}
{{< /tables.inline >}}
{{< /highlight >}}

## Sass

### Variables

{{< scss-docs name="table-variables" file="scss/_variables.scss" >}}

### Loop

{{< scss-docs name="table-loop" file="scss/_variables.scss" >}}

### Customizing
-요인 변수 (`$table-striped-bg-factor`, `$table-active-bg-factor` & `$table-hover-bg-factor`)는 표 변형의 대비를 결정하는 데에 사용됩니다.
-밝고 어두운 테이블 변형 외에도 테마 색상은 `$table-bg-level` 변수에 의해 밝아집니다.
