---
layout: docs
title: Reboot
description: 단일 파일에 있는 요소별 CSS 변경 모음인 Reboot는 Bootstrap을 초기에 빌드하는 우아하고 일관되며 간단한 기준선을 제공합니다.
group: content
aliases: "/docs/5.2/content/"
toc: true
---

## 접근

Reboot는 Normalize를 기반으로 빌드되어 요소 선택자만 사용하여 다소 독선적인 스타일을 가진 많은 HTML 요소를 제공합니다. 추가 스타일링은 클래스에서만 수행됩니다. 예를 들어 더 간단한 기준선을 위해 일부 `<table>` 스타일을 재부팅하고 나중에 `.table`, `.table-border` 등을 제공합니다.

다음은 재부팅에서 Reboot할 항목을 선택하는 지침과 이유입니다:

- 확장 가능한 컴포넌트 간격에 `em` 대신`rem`을 사용하도록 일부 브라우저의 기본값을 업데이트합니다.
- `margin-top`을 제외합니다. 수직 margin은 구조적으로 불안정하며, 예상치 못한 결과를 가져올 수 있습니다. 더 중요한 것은 단방향 `margin`이 더 단순한 멘탈 모델이기 때문입니다.
- 더 쉬운 기기 간 크기 확장을 위해서 블럭 요소의 `margin`에 `rem`을 사용합니다.
- 가능하면 `inherit`를 사용하여 `font` 관련 속성의 선언을 최소한으로 유지합니다.

## CSS 변수

{{< added-in "5.2.0" >}}

v5.1.1에서는 모든 CSS 번들(`bootstrap.css`, `bootstrap-reboot.css`, `bootstrap-grid.css` 포함)에서 필수 `@import`를 표준화하여 `_root.scss`를 포함하도록 했습니다. 이렇게 하면 해당 번들에서 사용되는 변수의 수에 관계없이 모든 번들에 `:root` 수준의 CSS 변수가 추가됩니다. 궁극적으로 부트스트랩 5는 시간이 지남에 따라 더 많은 [CSS 변수]({{< docsref "/customize/css-variables">}})를 추가하여 Sass를 항상 다시 컴파일할 필요 없이 더 많은 실시간 사용자 정의 기능을 제공할 것입니다. 우리의 접근 방식은 소스 Sass 변수를 가져와 CSS 변수로 변환하는 것입니다. 이렇게 하면 CSS 변수를 사용하지 않더라도 Sass의 모든 기능을 사용할 수 있습니다. **이 작업은 아직 진행 중이며 완전히 구현하는 데 시간이 걸립니다.**

예를 들어 일반적인 `<body>` 스타일에 대한 `:root` CSS 변수를 생각해 보겠습니다:

{{< scss-docs name="root-body-variables" file="scss/_root.scss" >}}

실제로 이러한 변수는 다음과 같이 Reboot에 적용됩니다:

{{< scss-docs name="reboot-body-rules" file="scss/_reboot.scss" >}}

이를 통해 원하는 대로 실시간 커스터마이징을 할 수 있습니다:

```html
<body style="--bs-body-color: #333;">
  <!-- ... -->
</body>
```

## 페이지 기본값

페이지 전체에 더 나은 기본값을 제공하도록 `<html>` 및 `<body>` 요소가 업데이트되었습니다. 좀 더 구체적으로 설명하면:

- `box-sizing`는 `*::before` 및 `*::after`이후, `border-box`를 포함한 모든 요소에서 전역적으로 설정됩니다. 이렇게 하면 패딩이나 테두리로 인해 요소의 선언된 너비가 초과되지 않습니다.
- `<html>`에는 기본 `font-size`가 선언되지 않고 16px(브라우저 기본값)가 사용됩니다. `<body>`에는 미디어 쿼리를 통해 반응형 글꼴 크기를 쉽게 조정하는 동시에 사용자 기본 설정을 존중하고 접근성을 높일 수 있도록`font-size: 1rem`이 적용됩니다. 이 브라우저 기본값은 `$font-size-root` 변수를 수정하여 재정의할 수 있습니다.
- `<body>`는 또한 `font-family`, `font-weight`, `line-height` 및 `color`을 설정합니다. 이는 나중에 일부 폼 요소에서 상속되어 글꼴 불일치를 방지합니다.
- 안전을 위해 `<body>`에는 선언된 `background-color`이 있으며 기본값은 `#fff`입니다.

## 기본 글꼴 스택

Bootstrap은 모든 장치 및 OS에서 최적의 텍스트 렌더링을 위해 "기본 글꼴 스택" 또는 "시스템 글꼴 스택"을 사용합니다. 이러한 시스템 글꼴은 화면 렌더링 개선, 가변 글꼴 지원 등을 포함하여 오늘날의 장치를 염두에 두고 특별히 설계되었습니다. [*Smashing Magazine*의 글에서 기본 글꼴 스택](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/)에 대해서 자세히 알아보세요.

```scss
$font-family-sans-serif:
  // Cross-platform generic font family (default user interface font)
  system-ui,
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // older macOS and iOS
  "Helvetica Neue"
  // Linux
  "Noto Sans",
  "Liberation Sans",
  // Basic web fallback
  Arial,
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

글꼴 스택에는 이모지 글꼴이 포함되어 있기 때문에 많은 일반적인 기호/딩뱃 유니코드 텍스트가 여러 색상의 그림 텍스트로 렌더링됩니다. 브라우저/플랫폼의 기본 이모티콘 글꼴에 사용된 스타일에 따라 모양이 달라지며 CSS `color` 스타일의 영향을 받지 않습니다.

이 `font-family`는 자동으로 `<body`에 적용되며 Bootstrap을 통해 자동으로 전역 상속됩니다. 전역 `font-family`를 바꾸려면 `$font-family-base`를 업데이트한 다음 Bootstrap을 다시 컴파일해주세요.

## 제목과 단락

모든 제목 요소 (예: `<h1>` 및 `<p>`)는 `margin-top`이 제거되도록 재설정됩니다. 제목에는 `margin-bottom: .5rem`이추가되고 단락은 `margin-bottom : 1rem`이 추가되어 간격을 쉽게 조정할 수 있습니다.

{{< bs-table "table" >}}
| Heading | Example |
| --- | --- |
| `<h1></h1>` | <span class="h1">h1. Bootstrap heading</span> |
| `<h2></h2>` | <span class="h2">h2. Bootstrap heading</span> |
| `<h3></h3>` | <span class="h3">h3. Bootstrap heading</span> |
| `<h4></h4>` | <span class="h4">h4. Bootstrap heading</span> |
| `<h5></h5>` | <span class="h5">h5. Bootstrap heading</span> |
| `<h6></h6>` | <span class="h6">h6. Bootstrap heading</span> |
{{< /bs-table >}}

## 수평 규칙

`<hr>` 요소가 단순화되었습니다. 브라우저 기본값과 유사하게 `<hr>`는 `border-top`을 통해 스타일이 지정되고, 기본 `opacity: .25`를 가지며, 부모를 통해 `color`이 설정된 경우를 포함하여 `color`을 통해 `border-color`을 자동으로 상속받습니다. 텍스트, 테두리 및 불투명도 유틸리티를 사용하여 수정할 수 있습니다.

{{< example >}}
<hr>

<div class="text-success">
  <hr>
</div>

<hr class="border border-danger border-2 opacity-50">
<hr class="border border-primary border-3 opacity-75">
{{< /example >}}

## 목록

모든 목록(`<ul>`, `<ol>`, `<dl>`)에는 `margin-top`이 제거되고 `margin-bottom: 1rem`이 적용됩니다. 중첩된 목록에는 `margin-bottom`이 없습니다. 또한`<ul>` 및 `<ol>` 요소에서 `padding-left`를 재설정했습니다.

<div class="bd-example">
{{< markdown >}}
* All lists have their top margin removed
* And their bottom margin normalized
* Nested lists have no bottom margin
  * This way they have a more even appearance
  * Particularly when followed by more list items
* The left padding has also been reset

1. Here's an ordered list
2. With a few list items
3. It has the same overall look
4. As the previous unordered list
{{< /markdown >}}
</div>

더 간단한 스타일, 명확한 계층 구조, 더 나은 간격을 위해 설명 목록에는 업데이트된 `margin`이 포함되어 있습니다. `<dd>`의 `margin-left`를 `0`으로 재설정하고 `margin-bottom: .5rem`을 추가합니다. `<dt>`는 **굵게 표시**됩니다.

<div class="bd-example">
  <dl>
    <dt>Description lists</dt>
    <dd>A description list is perfect for defining terms.</dd>
    <dt>Term</dt>
    <dd>Definition for the term.</dd>
    <dd>A second definition for the same term.</dd>
    <dt>Another term</dt>
    <dd>Definition for this other term.</dd>
  </dl>
</div>

## 인라인 코드

인라인 코드 스니펫을 `<code>`로 묶습니다. HTML 꺾쇠 괄호를 이스케이프해야 합니다.

{{< example >}}
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
{{< /example >}}

## 코드 블록

여러 줄의 코드에는 `<pre>`를 사용하세요. 다시 한 번 올바른 렌더링을 위해 코드에서 꺾쇠 괄호를 이스케이프해야 합니다. `<pre>` 요소는 `margin-top`을 제거하고 `margin-bottom`에 `rem` 단위를 사용하도록 재설정됩니다.

{{< example >}}
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
{{< /example >}}

## 변수

변수를 나타내려면 `<var>` 태그를 사용하세요.

{{< example >}}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{{< /example >}}

## 사용자 입력

일반적으로 키보드를 통해 입력되는 입력을 나타내려면 `<kbd>`를 사용해주세요.

{{< example >}}
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{{< /example >}}

## 출력 예시

프로그램의 출력 예시를 나타내려면 `<samp>` 태그를 사용해주세요.

{{< example >}}
<samp>This text is meant to be treated as sample output from a computer program.</samp>
{{< /example >}}

## 표

표는 스타일 `<caption>`, 테두리 축소 및 전체적으로 일관된 `text-align`을 위해 약간 조정됩니다. 테두리, 패딩 등에 대한 추가 변경 사항은 [`.table` 클래스]({{< docsref "/content/tables" >}})와 함께 제공됩니다.

{{< example >}}
<table>
  <caption>
    This is an example table, and this is its caption to describe the contents.
  </caption>
  <thead>
    <tr>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## 폼

더 간단한 기본 스타일을 위해 다양한 폼 요소가 Reboot되었습니다. 다음은 가장 눈에 띄는 변경 사항입니다:

- `<fieldset>`에는 테두리, 패딩 또는 여백이 없으므로 개별 입력 또는 입력 그룹의 래퍼로 쉽게 사용할 수 있습니다.
- 필드셋과 마찬가지로 `<legend>`도 일종의 제목으로 표시되도록 스타일이 변경되었습니다.
- `<label>`이 `display: inline-block`으로 설정되어 `margin`이 적용될 수 있습니다.
- `<input>`, `<select>`, `<textarea>`, `<button>`은 대부분 Normalize에 의해 처리되지만 Reboot는 `margin`을 제거하고 `line-height: inherit`도 설정합니다.
- 가로로 크기를 조정하면 페이지 레이아웃이 "깨지는" 경우가 많으므로 `<textarea>`은 세로로만 크기를 조정할 수 있도록 수정되었습니다.
- `<button>`과 `<input>` 버튼 요소는`:not(:disabled)`일 때 `cursor : pointer`를 갖습니다.

이러한 변경 사항 등은 아래에 설명되어 있습니다.

<form class="bd-example">
  <fieldset>
    <legend>Example legend</legend>
    <p>
      <label for="input">Example input</label>
      <input type="text" id="input" placeholder="Example input">
    </p>
    <p>
      <label for="email">Example email</label>
      <input type="email" id="email" placeholder="test@example.com">
    </p>
    <p>
      <label for="tel">Example telephone</label>
      <input type="tel" id="tel">
    </p>
    <p>
      <label for="url">Example url</label>
      <input type="url" id="url">
    </p>
    <p>
      <label for="number">Example number</label>
      <input type="number" id="number">
    </p>
    <p>
      <label for="search">Example search</label>
      <input type="search" id="search">
    </p>
    <p>
      <label for="range">Example range</label>
      <input type="range" id="range" min="0" max="10">
    </p>
    <p>
      <label for="file">Example file input</label>
      <input type="file" id="file">
    </p>
    <p>
      <label for="select">Example select</label>
      <select id="select">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea">Example textarea</label>
      <textarea id="textarea" rows="3"></textarea>
    </p>
    <p>
      <label for="date">Example date</label>
      <input type="date" id="date">
    </p>
    <p>
      <label for="time">Example time</label>
      <input type="time" id="time">
    </p>
    <p>
      <label for="password">Example password</label>
      <input type="password" id="password">
    </p>
    <p>
      <label for="datetime-local">Example datetime-local</label>
      <input type="datetime-local" id="datetime-local">
    </p>
    <p>
      <label for="week">Example week</label>
      <input type="week" id="week">
    </p>
    <p>
      <label for="month">Example month</label>
      <input type="month" id="month">
    </p>
    <p>
      <label for="color">Example color</label>
      <input type="color" id="color">
    </p>
    <p>
      <label for="output">Example output</label>
      <output name="result" id="output">100</output>
    </p>
    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="reset" value="Input reset button">
      <input type="button" value="Input button">
    </p>
    <p>
      <button type="submit" disabled>Button submit</button>
      <input type="submit" value="Input submit button" disabled>
      <input type="reset" value="Input reset button" disabled>
      <input type="button" value="Input button" disabled>
    </p>
  </fieldset>
</form>

{{< callout warning >}}
{{< partial "callout-warning-input-support.md" >}}
{{< /callout >}}

### 버튼 포인터

Reboot에는 기본 커서를 `pointer`로 변경하는 `role="button"`의 개선 사항이 포함되어 있습니다. 이 속성을 요소에 추가하면 요소가 상호 작용함을 나타내는 데에 도움이 됩니다. 이 역할은 자체 `cursor` 변경 사항을 갖는 `<button>` 요소에는 필요하지 않습니다.

{{< example >}}
<span role="button" tabindex="0">Non-button element button</span>
{{< /example >}}

## 기타 요소

### 주소

`<address>` 요소가 업데이트되어 브라우저 기본 `font-style`이 `italic`에서 `normal`로 재설정됩니다. 이제` line-height`도 상속되고 `margin-bottom: 1rem`이 추가되었습니다. `<address>`는 가장 가까운 조상 (또는 전체 작업)의 연락처 정보를 표시하기 위한 것입니다. 줄을 `<br>`로 끝내서 서식을 유지합니다.

<div class="bd-example">
  <address>
    <strong>Twitter, Inc.</strong><br>
    1355 Market St, Suite 900<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>

  <address>
    <strong>Full Name</strong><br>
    <a href="mailto:first.last@example.com">first.last@example.com</a>
  </address>
</div>

### 인용구

인용구의 기본 `margin`은 `1em 40px`이므로 다른 요소와 더 일관된 무언가를 위해 `0 0 1rem`으로 재설정합니다.

<div class="bd-example">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <p>Someone famous in <cite title="Source Title">Source Title</cite></p>
</div>

### 인라인 요소

`<abbr>` 요소는 단락 텍스트 사이에서 눈에 띄도록 기본 스타일링을 받습니다.

<div class="bd-example">
  The <abbr title="HyperText Markup Language">HTML</abbr> abbreviation element.
</div>

### 요약

요약의 기본 `cursor`는 `text`이므로 요소를 클릭하여 상호 작용할 수 있음을 전달하기 위해 이를 `pointer`로 재설정합니다.

<div class="bd-example">
  <details>
    <summary>Some details</summary>
    <p>More info about the details.</p>
  </details>

  <details open>
    <summary>Even more details</summary>
    <p>Here are even more details about the details.</p>
  </details>
</div>

## HTML5 `[hidden]` 속성

HTML5에는 [`[hidden]`이라고 불리는 새로운 전역 속성](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)이 추가되었으며, 기본적으로 `display: none`으로 스타일링됩니다. [PureCSS](https://purecss.io/)에서 아이디어를 빌려서 `[hidden] {display: none !important; }`를 사용하여 `display`가 실수로 재정의되는 것을 방지합니다.

```html
<input type="text" hidden>
```

{{< callout warning >}}
##### jQuery와 호환되지 않음

`[hidden]`은 jQuery의 `$(...).hide()` 및 `$(...).show()` 메소드와 호환되지 않습니다. 따라서 현재 요소의 `display`를 관리하는 다른 기술보다 `[hidden]`을 딱히 추천하지 않습니다.
{{< /callout >}}

요소의 표시 여부를 전환하기 만하면 `display`가 수정되지 않고 요소가 문서의 흐름에 계속 영향을 미칠 수 있음을 의미합니다. 대신 [`.invisible` 클래스]({{< docsref "/utilities/visibility" >}})를 사용하세요.
