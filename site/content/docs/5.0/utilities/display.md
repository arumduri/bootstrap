---
layout: docs
title: Display property (디스플레이 속성)
description: 디스플레이 유틸리티를 사용하여 구성 요소의 표시여부 등을 빠르고 신속하게 전환 할 수 있습니다. 인쇄시 표시를 제어하기 위한 일부 추가 기능뿐만 아니라 더 일반적인 값에 대한 지원도 포함 됩니다.
group: utilities
toc: true
---

## How it works

반응형 디스플레이 유틸리티 클래스를 사용하여 [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)의 값을 변경합니다. 의도적으로 `디스플레이` 에 대해 가능한 모든 값의 하위 집합만 지원합니다. 클래스는 다양한 효과를 위해 필요에 따라 결합 시킬 수 있습니다.

## Notation

 `xs` 에서 `xxl` 까지 모든 [breakpoints]({{< docsref "/layout/breakpoints" >}})에 적용되는 디스플레이 유틸리티 클래스에는 중단 점 축약어가 없습니다. 이는 해당 클래스가 `min-width: 0;` 에서 적용되기 때문입니다. 따라서 미디어 쿼리에 의해 제한되지 않습니다. 그러나 나머지 중단 점에는 중단 점 축약어가 포함됩니다.

따라서 클래스는 다음 형식을 사용하여 이름이 지정됩니다.

- `.d-{value}` for `xs`
- `.d-{breakpoint}-{value}` for `sm` , `md` , `lg` , `xl` , and `xxl` .

다음 *값* 중 하나일 경우:

- `none`
- `inline`
- `inline-block`
- `block`
- `grid`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`

디스플레이 값은 `$displays` 변수를 변경 하고 SCSS를 다시 컴파일하여 변경할 수 있습니다.

미디어 쿼리는 지정된 중단 점 **보다 큰** 화면 너비에 영향을 줍니다. 예를 들어, `.d-lg-none` 설정은 `lg` 뿐만 아니라 `xl` 그리고 `xxl` 화면을 `display: none;` 합니다. 

## Examples

{{< example >}}
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
{{< /example >}}

{{< example >}}
<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>
{{< /example >}}

## Hiding elements

모바일 친화적으로 개발 속도를 높이려면 반응형 디스플레이 클래스를 사용하여 장치별로 요소를 표시하고 숨기세요. 동일한 사이트의 완전히 다른 버전을 만드는 것을 피하고, 대신 각 화면 크기에 대해 요소를 반응적으로 숨기세요.

반응형 화면에 요소를 숨기려면 `.d-none` 클래스 또는 `.d- {sm, md, lg, xl, xxl} -none` 클래스 중 하나를 사용하십시오.

특정한 화면 크기 간격에서만 요소를 표시하려면 `.d-*-none` 클래스를 `.d-*-*` 클래스와 결합 하세요. (예 : `.d-none .d-md-block .d-xl-none .d-xxl-none`). 이렇게하면 중형(md) 및 대형(lg) 장치를 제외한 모든 화면 크기의 요소를 숨길 수 있습니다.

<table class="table">
  <thead>
    <tr>
      <th>Screen size</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hidden on all</td>
      <td><code>.d-none</code></td>
    </tr>
    <tr>
      <td>Hidden only on xs</td>
      <td><code>.d-none .d-sm-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on sm</td>
      <td><code>.d-sm-none .d-md-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on md</td>
      <td><code>.d-md-none .d-lg-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on lg</td>
      <td><code>.d-lg-none .d-xl-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on xl</td>
      <td><code>.d-xl-none .d-xxl-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on xxl</td>
      <td><code>.d-xxl-none</code></td>
    </tr>
    <tr>
      <td>Visible on all</td>
      <td><code>.d-block</code></td>
    </tr>
    <tr>
      <td>Visible only on xs</td>
      <td><code>.d-block .d-sm-none</code></td>
    </tr>
    <tr>
      <td>Visible only on sm</td>
      <td><code>.d-none .d-sm-block .d-md-none</code></td>
    </tr>
    <tr>
      <td>Visible only on md</td>
      <td><code>.d-none .d-md-block .d-lg-none</code></td>
    </tr>
    <tr>
      <td>Visible only on lg</td>
      <td><code>.d-none .d-lg-block .d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible only on xl</td>
      <td><code>.d-none .d-xl-block .d-xxl-none</code></td>
    </tr>
    <tr>
      <td>Visible only on xxl</td>
      <td><code>.d-none .d-xxl-block</code></td>
    </tr>
  </tbody>
</table>

{{< example >}}
<div class="d-lg-none">hide on lg and wider screens</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>
{{< /example >}}

## Display in print

인쇄 디스플레이 유틸리티 클래스로 인쇄 할 때 요소의 `display` 값을 변경합니다. 반응 형 `.d- *` 유틸리티와 동일한 `display` 값에 대한 지원을 포함합니다.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-grid`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

인쇄 및 표시 클래스를 결합 할 수도 있습니다.

{{< example >}}
<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
{{< /example >}}

## Sass

### Utilities API

디스플레이 유틸리티는 `scss / _utilities.scss` 의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법 알아보기]({{<docsref "/ utilities / api # using-the-api">}})

{{< scss-docs name="utils-display" file="scss/_utilities.scss" >}}
