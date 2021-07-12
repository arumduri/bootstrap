---
layout: docs
title: 타이포그래피
title_en: Typography
description: 전역 설정, 제목, 본문 텍스트, 목록 등을 포함하여 Bootstrap 타이포그래피에 대한 문서 및 예제입니다.
group: content
toc: true
---

## Global settings

Bootstrap은 기본 전역 표시, 타이포그래피 및 링크 스타일을 설정합니다. 더 많은 제어가 필요한 경우 [텍스트 유틸리티 클래스]({{< docsref "/utilities/text" >}})를 확인해보세요.

- 각 OS 및 기기에 가장 적합한 `font-family`를 선택하는 [기본 글꼴 스택]({{< docsref "/content/reboot#native-font-stack" >}})을 사용합니다.
- 보다 포괄적이고 접근 가능한 유형 척도를 위해 브라우저의 기본 루트 `font-size` (일반적으로 16px)를 사용하여 방문자가 필요에 따라 브라우저 기본값을 사용자 지정할 수 있습니다.
- `<body>`에 적용된 타이포그래피 기반으로 `$font-family-base`, `$font-size-base` 및`$line-height-base` 속성을 사용합니다.
- `$link-color`를 통해 글로벌 링크 색상을 설정합니다.
- `$body-bg`를 사용하여 `<body>`에 `background-color`를 설정합니다 (기본적으로 `#fff`).

이러한 스타일은 `_reboot.scss`에서 찾을 수 있으며 전역 변수는 `_variables.scss`에서 정의됩니다. `rem`에 `$ font-size-base`를 설정해야 합니다.

## Headings

`<h1>`부터 `<h6>`까지의 모든 제목을 사용할 수 있습니다.

<table class="table">
  <thead>
    <tr>
      <th>Heading</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{< markdown >}}`<h1></h1>`{{< /markdown >}}
      </td>
      <td><span class="h1">h1. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h2></h2>`{{< /markdown >}}
      </td>
      <td><span class="h2">h2. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h3></h3>`{{< /markdown >}}
      </td>
      <td><span class="h3">h3. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h4></h4>`{{< /markdown >}}
      </td>
      <td><span class="h4">h4. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h5></h5>`{{< /markdown >}}
      </td>
      <td><span class="h5">h5. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h6></h6>`{{< /markdown >}}
      </td>
      <td><span class="h6">h6. Bootstrap heading</span></td>
    </tr>
  </tbody>
</table>

```html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
```

제목의 글꼴 스타일과 일치시키고 싶지만 관련 HTML 요소를 사용할 수 없는 경우 `.h1`부터 `.h6` 클래스도 사용할 수 있습니다.

{{< example >}}
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
{{< /example >}}

### Customizing headings

포함된 유틸리티 클래스를 사용하여 Bootstrap 3에서의 작은 보조 제목 텍스트를 다시 만듭니다.

{{< example >}}
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
{{< /example >}}

## Display headings

기존 제목 요소는 페이지 콘텐츠의 핵심에서 가장 잘 작동하도록 설계되었습니다. 눈에 띄는 제목이 필요한 경우 **표시 제목**을 사용하는 것이 좋습니다. 이 제목은 좀 더 크고 약간 더 독선적인 제목 스타일입니다.

<div class="bd-example">
  <div class="display-1 pb-3 mb-3 border-bottom">Display 1</div>
  <div class="display-2 pb-3 mb-3 border-bottom">Display 2</div>
  <div class="display-3 pb-3 mb-3 border-bottom">Display 3</div>
  <div class="display-4 pb-3 mb-3 border-bottom">Display 4</div>
  <div class="display-5 pb-3 mb-3 border-bottom">Display 5</div>
  <div class="display-6">Display 6</div>
</div>

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```

디스플레이 제목은 `$display-font-sizes` Sass 맵과 두 개의 변수 `$display-font-weight` 및 `$display-line-height`를 통해 구성됩니다.

{{< scss-docs name="display-headings" file="scss/_variables.scss" >}}

## Lead

`.lead`를 추가하여 단락을 눈에 띄게 만드십시오.

{{< example >}}
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
{{< /example >}}

## Inline text elements

일반적인 인라인 HTML5 요소의 스타일링입니다.

{{< example >}}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{{< /example >}}

이러한 태그는 시맨틱 목적으로 사용되어야합니다:

- `<mark>`는 참조 또는 표기 목적으로 표시되거나 강조된 텍스트를 나타냅니다.
- `<small>`은 저작권 및 법적 텍스트와 같은 부가적인 댓글과 작은 글씨를 나타냅니다.
- `<s>`는 더 이상 관련이 없거나 더 이상 정확하지 않은 요소를 나타냅니다.
- `<u>`는 텍스트가 아닌 주석이 있음을 나타내는 방식으로 렌더링되어야 하는 인라인 텍스트의 범위를 나타냅니다.

텍스트 스타일을 지정해야 된다면 다음 클래스를 사용할 수도 있습니다.

- `.mark`는 `<mark>`와 동일한 스타일을 적용합니다.
- `.small`은 `<small>`과 동일한 스타일을 적용합니다.
- `.text-decoration-underline`은 `<u>`와 동일한 스타일을 적용합니다.
- `.text-decoration-line-through`는 `<s>`와 동일한 스타일을 적용합니다.

위에는 표시되지 않았지만 HTML5에서 `<b>` 및 `<i>`를 자유롭게 사용하세요. `<b>`는 추가 중요성을 전달하지 않고 단어나 구문을 강조하는 반면 `<i>`는 대부분 음성, 기술 용어 등에 사용됩니다.

## Text utilities

[텍스트 유틸리티]({{< docsref "/utilities/text" >}}) 및 [색상 유틸리티]({{< docsref "/utilities/colors" >}})를 사용하여 텍스트 정렬, 변형, 스타일, 두께, 선 높이, 장식 및 색상을 변경하십시오.

## Abbreviations

약어 및 두문자어에 대한 HTML의 `<abbr>` 요소를 스타일링하여 마우스 오버시 확장된 버전을 표시합니다. 약어에는 기본 밑줄이 있으며 도움말 커서를 통해 마우스 오버 시 및 보조 기술 사용자에게 추가 컨텍스트를 제공합니다.

약간 더 작은 글꼴 크기의 약어에 `.initialism`을 추가합니다.

{{< example >}}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{{< /example >}}

## Blockquotes

문서 내의 다른 소스에서 콘텐츠 블록을 인용합니다. <abbr title="HyperText Markup Language">HTML</abbr>을 인용문으로 `<blockquote class="blockquote">`로 감쌉니다.

{{< example >}}
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
{{< /example >}}

### Naming a source

HTML 사양에서는 인용구 속성이 `<blockquote>`외부에 배치되어야 합니다. 어트리뷰션을 제공할 때 `<blockquote>`를 `<figure>`로 감싸고 `<figcaption>` 또는 블록 레벨 요소 (예: `<p>`)를 `.blockquote-footer` 클래스와 함께 사용하세요. 소스 작품의 이름도 `<cite>`로 감싸야 합니다.

{{< example >}}
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{< /example >}}

### Alignment

인용구의 정렬을 변경하려면 필요에 따라 텍스트 유틸리티를 사용하십시오.

{{< example >}}
<figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{< /example >}}

{{< example >}}
<figure class="text-end">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{< /example >}}

## Lists

### Unstyled

기본 `list-style`과 목록 항목의 왼쪽 여백을 제거합니다 (직계 자식만 해당). **이 부분은 직속 하위 목록 항목에만 적용됩니다**. 즉, 중첩된 목록에 대해서도 클래스를 추가해야 합니다.

{{< example >}}
<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
{{< /example >}}

### Inline

목록의 글 머리 기호를 제거하고 `.list-inline`과 `.list-inline-item`의 두 클래스 조합으로 약간의 `margin`을 적용합니다.

{{< example >}}
<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they're displayed inline.</li>
</ul>
{{< /example >}}

### Description list alignment

그리드 시스템의 사전 정의된 클래스 (또는 시맨틱 믹스인)를 사용하여 용어와 설명을 수평으로 정렬합니다. 더 긴 용어의 경우 선택적으로 `.text-truncate` 클래스를 추가하여 줄임표로 텍스트를 자를 수 있습니다.

{{< example >}}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Term</dt>
  <dd class="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
  </dd>

  <dt class="col-sm-3">Another term</dt>
  <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
    </dl>
  </dd>
</dl>
{{< /example >}}

## Responsive font sizes

Bootstrap 5에서는 기본적으로 반응형 글꼴 크기를 활성화하여 텍스트가 장치 및 뷰포트 크기에 따라 더 자연스럽게 확장될 수 있도록 했습니다. 어떻게 작동하는지 알아보려면 [RFS 페이지]({{< docsref "/getting-started/rfs" >}})를 살펴보십시오.

## Sass

### Variables

제목에는 크기 및 간격에 대한 전용 변수가 있습니다.

{{< scss-docs name="headings-variables" file="scss/_variables.scss" >}}

여기와 [Reboot]({{< docsref "/content/reboot" >}})에서 다루는 기타 타이포그래피 요소에도 전용 변수가 있습니다.

{{< scss-docs name="type-variables" file="scss/_variables.scss" >}}

### Mixins

타이포그래피 전용 믹스인은 없지만 Bootstrap은 [반응형 글꼴 크기 (Responsive Font Sizing, RFS)]({{< docsref "/getting-started/rfs" >}})을 사용합니다.
