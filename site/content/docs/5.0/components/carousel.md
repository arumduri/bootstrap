---
layout: docs
title: Carousel(캐러셀)
description: 캐러셀은 이미지나 텍스트의 슬라이드를 가로로 슬라이드시켜 여러개를 표시하는 컴포넌트입니다.
toc: true
---

## How it works

캐러셀은, CSS 3D 트랜스폼과 약간의 JavaScript 로 만들어진, 일련의 컨텐츠를 순환시키기 위한 슬라이드쇼 입니다. 일련의 이미지, 텍스트, 혹은 커스텀 마크업으로 동작합니다. 그리고 이전/다음의 컨트롤이나 위치 표시(인디게이터, indicator)도 지원합니다.

[Page Visibility API](https://www.w3.org/TR/page-visibility/) 가 지원되고 있는 브라우저에서는, 웹 페이지가 사용자에게 보이지 않을 때(브라우저 탭이 활성화 되지 않았거나, 브라우저 윈도우 크기가 최소화되어 있을때 등등), 캐러셀은 동작하지 않습니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

중첩된 캐러셀은 지원되고 있지 않고, 캐러셀은 일반적으로 접근성(accessibility) 기준에 준거하고 있지 않다는 것에 주의해 주세요.

## Example

캐러셀은, 슬라이드의 치수를 자동적으로 정규화하지 않습니다. 그 때문에, 컨텐츠의 크기를 적절하게 조정하기 위해, 추가의 유틸리티나 커스텀 스타일을 사용할 필요가 있는 경우가 있습니다. 캐러셀은 이전/다음의 컨트롤과 위치 표시(인디게이터, indicator)를 지원하고 있지만, 명시적으로 필수는 아닙니다. 자유롭게 추가하여 커스터마이즈 해 주세요.

**`.active` 클래스는, 슬라이드 하나에는 추가할 필요가 있습니다.** 그렇게 하지 않으면 캐러셀은 표시되지 않습니다. 그리고, 한 페이지에 복수의 캐러셀을 사용하고 있는 경우에는 특히 옵션의 컨트롤을 위한 `.carousel` 에 하나의 id 를 설정해야 합니다. 컨트롤과 위치 표시(인디게이터, indicator)의 요소는, `.carousel` 요소의 id 와 일치하는 `data-bs-target` 속성(링크의 경우에는 `href`)을 가져야 합니다.

### Slides only

슬라이드만 사용하는 캐러셀입니다. 캐러셀 이미지에 `.d-block` 과 `.w-100` 이 있는 것을 주의해 주세요.

{{< example >}}
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
</div>
{{< /example >}}

### With controls

이전/다음의 컨트롤을 추가합니다.

{{< example >}}
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
{{< /example >}}

### With indicators

그리고, 캐러셀에는 컨트롤과 함께 위치 표시(인디게이터, indicator)를 추가할 수도 있습니다.

{{< example >}}
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
{{< /example >}}

### With captions

`.carousel-item` 안의 `.carousel-caption` 요소를 사용해, 슬라이드에 설명문(캡션, caption)을 손쉽게 추가할 수 있습니다. 아래와 같이, 옵션의 [display utilities]({{< docsref "/utilities/display" >}}) 를 사용함으로써, 보다 작은 뷰포터에서 간단히 설명문(캡션, caption)을 감추는것도 가능합니다. 처음에는 `.d-none` 로 비표시하고, 중형 디바이스에서는 `.d-md-block` 로 다시 표시합니다.

{{< example >}}
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
{{< /example >}}

### Crossfade

`.carousel-fade` 를 캐러셀에 추가하면, 슬라이드 대신에 fade 트랜지션으로 슬라이드를 애니메이션 시킬 수 있습니다.

{{< example >}}
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
{{< /example >}}

### Individual `.carousel-item` interval

다음 아이템으로 자동적으로 바뀔 때까지의 지연 시간을 변경하려면 `.carousel-item` 에 `data-bs-interval=""` 을 추가합니다.

{{< example >}}
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
{{< /example >}}

## Dark variant

컨트롤, 위치 표시(인디게이터, indicator) 혹은 설명문(캡션, caption) 을 어둡게 하기 위해서 `.carousel-dark` 을 `.carousel` 에 추가했습니다. 컨트롤은 `filter` CSS 속성으로 기본 흰색으로 칠해 진 것이 반전됩니다. 설명문(캡션, caption)과 컨트롤에는 `color` 와 `background-color` 를 커스터마이즈하는 Sass 변수가 추가되었습니다.

{{< example >}}
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#aaa" background="#f5f5f5" text="First slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#bbb" background="#eee" text="Second slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#999" background="#e5e5e5" text="Third slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
{{< /example >}}

## Usage

### Via data attributes

캐러셀의 위치를 간단히 제어하려면, data 속성을 사용합니다. `data-bs-slide` 는 키워드 `prev` 나 `next` 을 받아, 현재의 위치에 대한 슬라이드의 위치를 변경합니다. 혹은 `data-bs-slide-to` 를 사용해 가공되지 않은 슬라이드 인덱스를 캐러셀에게 건네주면 `data-bs-slide-to="2"` 가 되어, 슬라이디의 위치를 `0` 에서 시작하는 특정의 인덱스로 이동시킵니다.

`data-bs-ride="carousel"` 속성은, 페이지 로드시 캐러셀을 애니메이션 시키는데 사용됩니다. 캐러셀의 초기화에 `data-bs-ride="carousel"` 를 사용하지 않는 경우에는, 스스로 초기화 할 필요가 있습니다. **같은 캐러셀의 명시적인 JavaScript 의 초기화(장황하고 불필요한)와 동시 사용은 할 수 없습니다.**

### Via JavaScript

캐러셀을 수동으로 부르는 경우 :

```js
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
```

### Options

옵션은, data 속성 혹은 JavaScript 으로 줄 수 있습니다. data 속성의 경우, `data-bs-interval=""` 과 같이, `data-bs-` 에 옵션명을 추가합니다.

<table class="table">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>interval</code></td>
      <td>number</td>
      <td><code>5000</code></td>
      <td>아이템이 자동적으로 순환하기까지의 시간을 지정합니다. false 의 경우, 캐러셀은 자동적으로 순환하지 않습니다.</td>
    </tr>
    <tr>
      <td><code>keyboard</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>캐러셀이 키보드 이벤트에 반응해야 하는지 여부.</td>
    </tr>
    <tr>
      <td><code>pause</code></td>
      <td>string | boolean</td>
      <td><code>"hover"</code></td>
      <td><p><code>"hover"</code> 로 설정하면 <code>mouseenter</code> 로 캐러셀의 순환을 일시정지하고, <code>mouseleave</code> 로 캐러셀의 순환을 재개합니다. <code>false</code> 로 설정하면, 캐러셀 위에 커서를 올려 놓아도 캐러셀은 일시정지 하지 않습니다.</p></td>
    </tr>
    <tr>
      <td><code>slide</code></td>
      <td>string | boolean</td>
      <td><code>false</code></td>
      <td>사용자가 첫번째 아이템을 수동으로 순환시킨 후, 캐러셀을 자동 재생합니다. "carousel" 의 경우, 로드시 캐러셀을 자동 재생 합니다.</td>
    </tr>
    <tr>
      <td><code>wrap</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>캐러셀을 연속적으로 순환시킬지 혹은 강제로 멈추게 할지 여부.</td>
    </tr>
    <tr>
      <td><code>touch</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>터치 스크린 디바이스에서 캐러셀이 좌우 스와이프 인터렉션을 지원할지 여부.</td>
    </tr>
  </tbody>
</table>

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

예를 들어, 캐러셀의 컨스트럭터에서 캐러셀의 인스턴스를 만들어, 추가 옵션으로 초기화 하거나, 아이템의 순환을 시작하거나 할 수 있습니다.

```js
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
```

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>cycle</code></td>
      <td>캐러셀의 아이템을 왼쪽에서 오른쪽으로 순환시킵니다.</td>
    </tr>
    <tr>
      <td><code>pause</code></td>
      <td>캐러셀의 아이템 순환을 중지 시킵니다.</td>
    </tr>
    <tr>
      <td><code>prev</code></td>
      <td>이전 아이템으로 순환합니다. <strong>이전 아이템이 표시되기 전</strong> (예를 들어, <code>slid.bs.carousel</code> 이벤트가 발생하기 전)에 호출된 곳으로 돌아갑니다.</td>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>다음 아이템으로 순환합니다. <strong>다음 아이템이 표시되기 전</strong> (예를 들어, <code>slid.bs.carousel</code> 이벤트가 발생하기 전)에 호출된 곳으로 돌아갑니다.</td>
    </tr>
    <tr>
      <td><code>nextWhenVisible</code></td>
      <td>페이지가 표시되어 있지 않은 경우나 캐러셀이나 그 부모가 표시되어 있지 않는 경우는 캐러셀을 다음 페이지로 순환시키지 않도록 합니다. <strong>대상이 되는 아이템이 표시되기 전에 호출된 곳으로 돌아갑니다.</strong>
    </tr>
    <tr>
      <td><code>to</code></td>
      <td>캐러셀을 특정 프레임에 순환시킵니다 (0 베이스, 배열과 비슷합니다). <strong>대상 아이템이 나타나기 전</strong> (예를 들어, <code>slid.bs.carousel</code> 이벤트 발생 이전)에 호출된 곳으로 돌아갑니다.</td>
    </tr>
    <tr>
      <td><code>dispose</code></td>
      <td>요소의 캐러셀을 없앱니다. (DOM 요소에 저장되어 있는 데이타를 삭제)</td>
    </tr>
    <tr>
      <td><code>getInstance</code></td>
      <td>DOM 요소에 관련지어진 캐러셀의 인스턴스를 취득하는 정적 메소드.</td>
    </tr>
  </tbody>
</table>

### Events

Bootstrap 의 캐러셀 클래스는 캐러셀 기능에 연결하기 위한 2 가지 이벤트를 공개하고 있습니다. 두가지 이벤트는 다음과 같은 추가 속성을 가지고 있습니다:

- `direction`: 캐러셀이 슬라이딩 하는 방향 (`"left"` 혹은 `"right"`).
- `relatedTarget`: 액티브한 아이템으로 슬라이드 시키고 있는 DOM 요소.
- `from`: 현재 아이템의 인덱스.
- `to`: 다음 아이템의 인덱스.

모든 캐러셀 이벤트는 캐러셀 자체 (즉, `<div class="carousel">`)에서 발생합니다.

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Event type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slide.bs.carousel</code></td>
      <td><code>slide</code> 인스턴스 메소드가 호출되었을 때 바로 발생합니다.</td>
    </tr>
    <tr>
      <td><code>slid.bs.carousel</code></td>
      <td>캐러셀의 슬라이드 트렌지션이 완료했을 때 발생합니다.</td>
    </tr>
  </tbody>
</table>

```js
var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  // do something...
})
```

### Change transition duration

`.carousel-item` 의 트렌지션 시간은 CSS 컴파일 전의 Sass 변수 `$carousel-transition` 에서 변경할 수 있습니다. 복수의 트렌지션이 적용되고 있는 경우는, 처음 transform 트렌지션이 정의되고 있는 곳을 확인해 주세요(eg. `transition: transform 2s ease, opacity .5s ease-out`).
