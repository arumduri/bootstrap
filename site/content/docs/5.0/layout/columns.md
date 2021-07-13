---
layout: docs
title: 열
title_en: Columns
description: flexbox 그리드 시스템을 통해 정렬, 순서 지정 및 오프셋을 위한 소수의 옵션으로 열을 수정하는 방법을 알아보세요. 또한 column 클래스를 사용하여 그리드가 아닌 요소의 너비를 관리하는 방법을 알아보세요.
group: layout
toc: true
---

{{< callout info >}}
**주의!** 그리드 열을 수정하고 커스터마이징하는 방법에 대해 자세히 알아보기 전에 먼저 [그리드 페이지를 읽어보세요]({{< docsref "/layout/grid" >}}).
{{< /callout >}}

## How they work

- **열은 그리드의 flexbox 아키텍처를 기반으로 합니다.** flexbox는 개별 열을 변경하고 [행 수준에서 열 그룹을 수정하는 옵션]({{< docsref "/layout/grid#row-columns" >}})이 있음을 의미합니다. 열이 커지거나 줄어들거나 변경되는 방식을 선택할 수 있습니다.

- **그리드 레이아웃을 만들 때 모든 콘텐츠는 열에 들어갑니다.** Bootstrap 그리드의 계층 구조는 [컨테이너]({{< docsref "/layout/containers" >}})에서 행, 열, 콘텐츠로 이동합니다. 흔치 않은 상황에서 콘텐츠와 열을 합칠 수는 있지만 의도하지 않은 결과가 발생할 수도 있습니다.

- **Bootstrap에는 빠른 반응형 레이아웃을 만들기 위한 미리 정의된 클래스가 포함되어 있습니다.** [6개의 중단점]({{< docsref "/layout/breakpoints" >}}) 및 각 그리드 계층의 12개의 열에 원하는 레이아웃을 생성할 수 있도록 이미 수십 개의 클래스가 구축되어 있습니다. 원하는 경우 Sass를 통해 비활성화할 수 있습니다.

## Alignment

flexbox 정렬 유틸리티를 사용하여 가로나 세로로 열을 정렬합니다.

### Vertical alignment

{{< example class="bd-example-row bd-example-row-flex-cols" >}}
<div class="container">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row bd-example-row-flex-cols" >}}
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
{{< /example >}}

### Horizontal alignment

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-evenly">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
{{< /example >}}

### Column wrapping

단일 행에 12개 이상의 열이 있는 경우 추가 열의 각 그룹은 하나의 단위로 새 줄로 줄바꿈됩니다.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
{{< /example >}}

### Column breaks

flexbox에서 열을 줄바꿈하려면 약간 다르게 생각할 필요가 있습합니다. 열을 새 줄로 묶고 싶은 곳에 `width: 100%` 요소를 추가하세요. 일반적으로 이건 여러 `.row`로 수행되지만 모든 구현 방법이 이를 지원하지는 않습니다.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  </div>
</div>
{{< /example >}}

[반응형 디스플레이 유틸리티]({{< docsref "/utilities/display" >}})를 사용하여 특정 중단점에 이 중단을 적용할 수도 있습니다.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  </div>
</div>
{{< /example >}}

## Reordering

### Order classes

콘텐츠의 **시각적 순서**를 제어하려면 `.order-` 클래스를 사용하세요. 이러한 클래스는 반응형이므로 중단점으로 `order`를 설정할 수 있습니다 (예: `.order-1.order-md-2`). 여기에는 6개의 모든 그리드 계층에서 `1`부터 `5`까지에 대한 지원이 포함됩니다.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col">
      First in DOM, no order applied
    </div>
    <div class="col order-5">
      Second in DOM, with a larger order
    </div>
    <div class="col order-1">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>
{{< /example >}}

또한 각각 `order: -1`과 `order: 6`을 적용하여 요소의 `order`를 변경하는 반응형 `.order-first` 및 `.order-last` 클래스가 있습니다. 이러한 클래스는 필요에 따라 번호가 매겨진 `.order-*` 클래스와 섞어서 사용할 수도 있습니다.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col order-last">
      First in DOM, ordered last
    </div>
    <div class="col">
      Second in DOM, unordered
    </div>
    <div class="col order-first">
      Third in DOM, ordered first
    </div>
  </div>
</div>
{{< /example >}}

### Offsetting columns

반응형 `.offset-` 그리드 클래스와 [여백 유틸리티]({{< docsref "/utilities/spacing" >}})의 두 가지 방법으로 그리드 열을 오프셋할 수 있습니다. 그리드 클래스는 열과 일치하도록 크기가 조정되는 반면 여백은 오프셋 너비가 가변적인 빠른 레이아웃에 더 유용합니다.

#### Offset classes

`.offset-md-*` 클래스를 사용하여 열을 오른쪽으로 이동합니다. 이 클래스는 열의 왼쪽 여백을 `*` 열만큼 늘립니다. 예를 들어 `.offset-md-4`는 `.col-md-4`를 4개의 열로 이동합니다.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>
</div>
{{< /example >}}

반응형 중단점에서 열 지우기 외에도 오프셋을 재설정해야 할 수 있습니다. [그리드 예제]({{< docsref "/examples/grid" >}})에서 실제 동작을 확인해보세요.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
  </div>
</div>
{{< /example >}}

#### Margin utilities

v4에서 flexbox으로 이동하면서 `.me-auto`와 같은 여백 유틸리티를 사용하여 맞닿아 있는 열을 강제로 서로 멀리 떨어뜨릴 수 있습니다.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
  </div>
  <div class="row">
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  </div>
  <div class="row">
    <div class="col-auto me-auto">.col-auto .me-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>
</div>
{{< /example >}}

## Standalone column classes

`.col-*` 클래스를 `.row` 외부에서 사용하여 요소에 특정 너비를 지정할 수도 있습니다. 열 클래스가 행의 직계가 아닌 자식으로 사용될 때마다 패딩이 생략됩니다.

{{< example >}}
<div class="col-3 bg-light p-3 border">
  .col-3: width of 25%
</div>
<div class="col-sm-9 bg-light p-3 border">
  .col-sm-9: width of 75% above sm breakpoint
</div>
{{< /example >}}

클래스를 유틸리티와 함께 ​​사용하여 반응형 float 이미지를 만들 수 있습니다. 텍스트가 더 짧은 경우 float를 지우려면 내용을 [`.clearfix`]({{< docsref "/helpers/clearfix" >}}) 래퍼로 감싸야 합니다.

{{< example >}}
<div class="clearfix">
  {{< placeholder width="100%" height="210" class="col-md-6 float-md-end mb-3 ms-md-3" text="Responsive floated image" >}}

  <p>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>
{{< /example >}}
