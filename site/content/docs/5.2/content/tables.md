---
layout: docs
title: 테이블
title_en: Tables
description: Bootstrap을 사용한 테이블의 opt-in 스타일에 대한 문서 및 예시 (JavaScript 플러그인에서 널리 사용됨)입니다.
group: content
toc: true
---

## 개요

`<table>` 요소는 캘린더나 날짜 선택기 같은 서드 파티 위젯에서 폭넓게 사용되고 있기 때문에 Bootstrap의 테이블은 **opt-in** 방식을 사용합니다. 기본 클래스 `.table`을 `<table>`에 넣으면 우리의 선택 수정자 클래스 또는 커스텀 스타일로 확장할 수 있습니다. 모든 테이블 스타일이 Bootstrap에 상속되지 않기 때문에 중첩된 테이블은 부모와 독립적으로 스타일을 지정할 수 있습니다.

가장 기본적인 테이블 마크업을 사용해서 `.table` 기반 테이블이 Bootstrap에서 어떻게 표시되는지 보여드리겠습니다.

{{< table class="table" simplified="false" >}}

## 변형

상황별 테이블 색상, 테이블 행 또는 개별 셀을 사용하세요.

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

## 테이블 강조

### 스트라이프 행

`.table-striped`를 사용하여 `<tbody>`내의 테이블 행에 줄무늬 (zebra-striping)를 추가합니다.

{{< table class="table table-striped" >}}

### Striped columns

Use `.table-striped-columns` to add zebra-striping to any table column.

{{< table class="table table-striped-columns" >}}

These classes can also be added to table variants:

{{< table class="table table-dark table-striped" >}}

{{< table class="table table-dark table-striped-columns" >}}

{{< table class="table table-success table-striped" >}}

{{< table class="table table-success table-striped-columns" >}}

### Hoverable rows

`.table-hover`를 추가하여 `<tbody>`내의 테이블 행에 마우스 오버 상태를 활성화합니다.

{{< table class="table table-hover" >}}

{{< table class="table table-dark table-hover" >}}

These hoverable rows can also be combined with the striped rows variant:

{{< table class="table table-striped table-hover" >}}

### 활성화 테이블

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

## 변형과 강조 테이블은 어떻게 작동하나요?

For the accented tables ([striped rows](#striped-rows), [striped columns](#striped-columns), [hoverable rows](#hoverable-rows), and [active tables](#active-tables)), we used some techniques to make these effects work for all our [table variants](#variants):

- We start by setting the background of a table cell with the `--bs-table-bg` custom property. All table variants then set that custom property to colorize the table cells. This way, we don't get into trouble if semi-transparent colors are used as table backgrounds.
- Then we add an inset box shadow on the table cells with `box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);` to layer on top of any specified `background-color`. Because we use a huge spread and no blur, the color will be monotone. Since `--bs-table-accent-bg` is unset by default, we don't have a default box shadow.
- When either `.table-striped`, `.table-striped-columns`, `.table-hover` or `.table-active` classes are added, the `--bs-table-accent-bg` is set to a semitransparent color to colorize the background.
- For each table variant, we generate a `--bs-table-accent-bg` color with the highest contrast depending on that color. For example, the accent color for `.table-primary` is darker while `.table-dark` has a lighter accent color.
- Text and border colors are generated the same way, and their colors are inherited by default.

내용을 보면 다음과 같습니다:

{{< scss-docs name="table-variant" file="scss/mixins/_table-variants.scss" >}}

## 테이블 테두리

### 테두리가 있는 테이블

셀의 모든 면에 테두리가 있는 테이블을 만들려면 `.table-border`를 추가하면 됩니다.

{{< table class="table table-bordered" >}}

[테두리 색상 유틸리티]({{< docsref "/utilities/borders#border-color" >}})는 색상을 변경하는 데에 사용할 수 있습니다:

{{< table class="table table-bordered border-primary" >}}

### 테두리가 없는 테이블

테두리가 없는 테이블을 만들려면 `.table-borderless`를 추가하면 됩니다.

{{< table class="table table-borderless" >}}

{{< table class="table table-dark table-borderless" >}}

## 얇은 테이블

`.table-sm`을 추가하여 모든 셀 `padding`을 반으로 잘라 `.table`을 더 간결하게 만듭니다.

{{< table class="table table-sm" >}}

{{< table class="table table-dark table-sm" >}}

## Table group dividers

Add a thicker border, darker between table groups—`<thead>`, `<tbody>`, and `<tfoot>`—with `.table-group-divider`. Customize the color by changing the `border-top-color` (which we don't currently provide a utility class for at this time).

{{< example >}}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
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
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Vertical alignment

Table cells of `<thead>` are always vertical aligned to the bottom. Table cells in `<tbody>` inherit their alignment from `<table>` and are aligned to the top by default. Use the [vertical align]({{< docsref "/utilities/vertical-align" >}}) classes to re-align where needed.

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

## 중첩

테두리 스타일, 활성화 스타일 및 테이블 변형은 중첩된 테이블에 상속되지 않습니다.

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

## 중첩 작동 원리

_아무_ 스타일이 중첩 테이블로 유출되는 것을 방지하기 위해 CSS에서 자식 결합자 (`>`) 선택자를 사용합니다. 우리는 `thead`, `tbody`, `tfoot`의 모든 `td`와 `th`를 대상으로 해야 하므로 선택자가 없으면 꽤 길어보일 것입니다. 따라서 다소 이상해 보이는 `.table > :not(caption) > * > *`선택기를 사용하여 `.table`의 모든 `td`와 `th`를 타겟팅하지만 잠재적 중첩 테이블은 없습니다.

테이블의 직계 자식으로 `<tr>`을 추가하면 해당 `<tr>`이 기본적으로 `<tbody>`에 줄바꿈되므로 선택자가 의도한 대로 작동합니다.

## 구조

### 테이블 머리글

테이블 및 어두운 테이블과 유사하게, 수정자 클래스 `.table-light` 또는 `.table-dark`를 사용하여 `<thead>`가 밝은 회색 또는 어두운 회색으로 표시되도록 합니다.

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

### 테이블 하단

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

### 테이블 이름

`<caption>`은 테이블 이름과 같은 기능을 합니다. 스크린 리더를 사용하는 사용자가 테이블을 찾고 그 내용을 이해하고 읽을 것인지 결정할 수 있도록 도와줍니다.

<div class="bd-example">
  <table class="table">
    <caption>List of users</caption>
    {{< partial "table-content" >}}
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

## 반응형 테이블
반응형 테이블을 사용하면 테이블을 쉽게 가로로 스크롤할 수 있습니다. `.table`을 `.table-responsive`로 줄바꿈하여 모든 뷰포트에서 테이블이 반응하도록 만듭니다. 또는 `.table-responsive{-sm|-md|-lg|-xl|-xxl}`을 사용하여 반응형 테이블을 가질 최대 중단점을 선택합니다.

{{< callout warning >}}
##### 수직 자르기/잘림

반응형 테이블은 `overflow-y: hidden`을 사용하여 테이블의 하단 또는 상단 가장자리를 벗어나는 콘텐츠를 잘라냅니다. 특히 드롭다운 메뉴 및 기타 서드 타피 위젯을 잘라낼 수 있습니다.
{{< /callout >}}

### 항상 반응형

모든 중단점에서 테이블 수평 스크롤에 `.table-responsive`를 사용합니다.

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

### 중단점으로 구분

특정 중단점까지 반응형 테이블을 생성하려면 필요에 따라 `.table-responsive{-sm|-md|-lg|-xl|-xxl}`을 사용합니다. 중단점 이상에서 테이블은 정상적으로 작동하며 가로로 스크롤되지 않습니다.

**이러한 테이블은 반응형 스타일이 특정 뷰포트 너비에 적용될 때까지 깨져보일 수 있습니다.**

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

### 변수

{{< scss-docs name="table-variables" file="scss/_variables.scss" >}}

### 루프

{{< scss-docs name="table-loop" file="scss/_variables.scss" >}}

### Customizing

- The factor variables (`$table-striped-bg-factor`, `$table-active-bg-factor` & `$table-hover-bg-factor`) are used to determine the contrast in table variants.
- Apart from the light & dark table variants, theme colors are lightened by the `$table-bg-scale` variable.
