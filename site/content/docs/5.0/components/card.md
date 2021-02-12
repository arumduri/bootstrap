---
layout: docs
title: Cards(카드)
description: 여러 가지 종류와 옵션을 가진 유연하고 확장 가능한 컨텐츠를 제공합니다.
group: components
toc: true
---

## About
**카드**는 유연하고 확장이 가능한 컨테이너입니다. Headers 나 footers 의 옵션, 다양한 컨텐츠, 문맥에 따른 배경 색상, 강력한 표시 옵션이 포함되어 있습니다.  Bootstrap3 의 panels、wells、thumbnails 는 카드로 바꿉니다. 이러한 컴포넌트의 기능은, 카드의 클래스로 이용할 수 있습니다.

## Example

카드는 적은 마크업과 스타일로 되어 있습니다만, 많은 커스터마이즈가 가능합니다. Flexbox 로 만들어져 있어 쉽게 배치가 가능하고, 다른 컴포넌트와 조합이 가능합니다. 기본 값에는 `margin` 설정이 없기 때문에 필요에 따라 [spacing utilities]({{< docsref "/utilities/spacing" >}}) 를 사용합니다.

아래는, 폭이 고정된 카드의 예입니다. 카드에는 폭이 고정되어 있지 않기 때문에 자연스럽게 부모 요소의 폭에 맞춰집니다. 이것은 [sizing options](#sizing) 을 통해서 간단하게 커스터마이즈 할 수 있습니다.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

## Content types

이미지나 텍스트, 리스트, 링크 등의 카드는 다양한 컨텐츠를 지원하고 있습니다. 아래와 같습니다.

### Body

카드를 구축하는 클래스는 `.card-body` 입니다. 카드 내에 여백에 필요할 때 사용합니다.

{{< example >}}
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
{{< /example >}}

### Titles, text, and links

카드 타이틀은 `<h*>` 태그에 `.card-title` 을 적용합니다. `<a>` 태그에 `.card-link` 를 적용하면 링크가 추가됩니다. 서브 타이틀은, `<h*>` 태크에 `.card-subtitle` 를 적용합니다.

`.card-title` 과 `.card-subtitle` 를 `.card-body` 안에 배치하면 카드 제목과 서브 타이틀이 깔끔하게 적용됩니다.

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{{< /example >}}

### Images

`.card-img-top` 은 이미지를 위로 가지고 옵니다. `.card-text` 는 텍스트를 카드에 추가할 수 있습니다.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{{< /example >}}

### List groups

Flush list group 을 사용하여 카드안에 리스트를 만듭니다.

{{< example >}}
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-footer">
    Card footer
  </div>
</div>
{{< /example >}}

### Kitchen sink

복수의 컨텐츠 타입을 조합하고, 필요한 카드를 작성하거나 모든 것을 이 안에 집어 넣을수 있습니다. 아래는 이미지 스타일, 블럭, 텍스트 스타일, 리스트 그룹으로, 모든것이 고정폭의 카드안에 싸여 있습니다.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{{< /example >}}

### Header and footer

Header 와/혹은 footer 를 넣는 카드의 옵션이 있습니다.

{{< example >}}
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

`<h*>` 요소에 `.card-header` 를 적용합니다.

{{< example >}}
<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
{{< /example >}}

## Sizing

카드는 특별히 지정하지 않는 한, `width` 는 100% 의 가로 폭을 가지게 됩니다. 필요에 따라, 커스텀 CSS, grid 클래스, grid Sass 믹스인, 혹은 유틸리티를 사용해 변경할 수 있습니다.

### Using grid markup

Grid 를 사용해, 필요에 따라 카드를 columns 과 rows 안에 넣어서 사용합니다.

{{< example >}}
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Using utilities

[Available sizing utilities]({{< docsref "/utilities/sizing" >}}) 을 사용해 카드의 가로 폭을 빠르게 설정합니다.

{{< example >}}
<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>

<div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
{{< /example >}}

### Using custom CSS

스타일 시트나 인라인 스타일로 가로 폭을 적용할 수 있습니다.

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

## Text alignment

텍스트의 배치는 [text align classes]({{< docsref "/utilities/text#text-alignment" >}}) 을 사용해 변경할 수 있습니다.

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-end" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

## Navigation

[Nav components]({{< docsref "/components/navs-tabs" >}}) 을 사용해 카드의 header (혹은 block)에 내비게이션을 적용할 수 있습니다.

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

## Images

카드에는, 이미지를 다루기 위한 몇 가지의 옵션이 있습니다. 카드의 양끝에 "image caps" 을 추가하거나, 카드의 내용에 이미지를 겹쳐 맞추거나 또는 그저 이미지를 카드에 삽입할 수 있습니다.

### Image caps

Header 나 footer 와 같이, 카드에는 카드의 상부와 하부의 "image caps"(카드의 상부 또는 하부의 이미지) 을 포함할 수 있습니다.

{{< example >}}
<div class="card mb-3">
  {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  {{< placeholder width="100%" height="180" class="card-img-bottom" text="Image cap" >}}
</div>
{{< /example >}}

### Image overlays

이미지를 카드의 배경으로 하여, 카드의 텍스트를 덮어씌우기 합니다. 이미지에 따라서는, 추가 스타일이나 유틸리티가 필요한 경우와 필요하지 않은 경우가 있습니다.

{{< example >}}
<div class="card bg-dark text-white">
  {{< placeholder width="100%" height="270" class="bd-placeholder-img-lg card-img" text="Card image" >}}
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
{{< /example >}}

{{< callout info >}}
컨텐츠는 이미지의 높이보다 커지지 않게 주의해 주세요. 컨텐츠가 이미지보다 큰 경우, 컨텐츠는 이미지의 외부에 표시됩니다.
{{< /callout >}}

## Horizontal

그리드와 유틸리티 클래스를 조합해 사용하는 것으로, 모바일에 친화적이고 반응형적인 방법으로 카드를 수평으로 배치할 수 있습니다. 아래의 예시에서는, `.g-0` 으로 그리드의 거터를 삭제하고, `.col-md-*` 클래스를 사용해 `md` 브레이크 포인트로 카드를 수평으로 배치하고 있습니다. 카드의 내용에 따라서는, 더 조정이 필요할지도 모릅니다.

{{< example >}}
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      {{< placeholder width="100%" height="250" text="Image" >}}
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Card styles

카드에는 배경, 모서리, 색을 커스터마이즈 하기 위한 다양한 옵션이 포함되어 있습니다.

### Background and color

[Text and background utilities]({{< docsref "/utilities/colors" >}}) 을 사용해, 카드의 외형을 변경할 수 있습니다.

{{< example >}}
{{< card.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="card{{ if .contrast_color }} text-{{ .contrast_color }}{{ else }} text-white{{ end }} bg-{{ .name }} mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">{{ .name | title }} card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{{- end -}}
{{< /card.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Border

카드의 `border-color` 만 변경하려면, [border utilities]({{< docsref "/utilities/borders" >}}) 를 사용합니다. 아래와 같이, `.text-{color}` 클래스를 부모의 `.card` 나 카드의 내용의 서브 세트에 배치할 수 있습니다.

{{< example >}}
{{< card.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="card border-{{ .name }} mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body{{ if not .contrast_color }} text-{{ .name }}{{ end }}">
    <h5 class="card-title">{{ .name | title }} card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{{- end -}}
{{< /card.inline >}}
{{< /example >}}

### Mixins utilities

필요에 따라서 카드의 header 나 footer 의 라인을 변경하거나, `.bg-transparent` 를 사용해 `background-color` 를 삭제할 수 있습니다.

{{< example >}}
<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
{{< /example >}}

## Card layout

카드안의 컨텐츠의 스타일링에 가세해, 일련의 카드를 배치하기 위한 옵션이 포함되어 있습니다. **현재, 레이아웃 옵션은 아직 반응형에는 지원하고 있지 않습니다**.

### Card groups

카드 그룹을 사용해, 폭과 높이의 열이 같은 하나의 요소로 카드를 렌더링합니다. 카드 그룹은 쌓여진 상태로부터 시작하고, `display: flex;` 를 사용해 `sm` 브레이크 포인트부터 같은 크기의 상태로 넣어집니다.

{{< example >}}
<div class="card-group">
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{{< /example >}}

Footer가 있는 카드 그룹을 사용하면, 그 내용이 자동으로 정렬됩니다.

{{< example >}}
<div class="card-group">
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
{{< /example >}}

### Grid cards

Bootstrap grid 시스템과 [`.row-cols` 클래스]({{< docsref "/layout/grid#row-columns" >}})를 사용해, 행마다 표시하는 그리드 열의 개수(카드 주변을 감싼)를 제어합니다. 예를 들어, 여기에서는 `.row-cols-1` 은 한 줄로 카드를 배치하고, `.row-cols-md-2` 은 4개의 카드를 해당 브레이크 포인트에서 그 다음 줄로 넘겨 동일의 가로 폭으로 나눠주고 있습니다.

{{< example >}}
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

`.row-cols-3` 으로 변경하면, 4번째 카드가 다음 줄에 표시됩니다.

{{< example >}}
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

같은 높이가 필요한 경우에는, 카드에 `.h-100` 클래스를 추가합니다. Sass 에 `$card-height: 100%` 를 설정하면, 클래스 추가없이 기본적(항상)으로 같은 높이를 사용할 수 있습니다.

{{< example >}}
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

카드 그룹에서 사용한 것처럼, 카드 footer가 자동 정렬됩니다.

{{< example >}}
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Masonry

`v4` 에서는 [Masonry](https://masonry.desandro.com/) 식의 컬럼을 따라했습니다만, 이 기법은 많은 [side effects](https://github.com/twbs/bootstrap/pull/28922)가 있었습니다. 만일 `v5`에서도 이런 레이아웃으로 하고 싶다면, Masonry 플러그인을 이용하십시오. **Masonry 는 Bootstrap에 포함되어 있지 않지만**, 당신이 시작하는데 도움이 되도록 [demo example]({{< docsref "/examples/masonry" >}}) 을 만들어 보았습니다.
