---
layout: docs
title: 캐러셀
title_en: Carousel
description: 캐러셀은 이미지나 텍스트의 슬라이드를 가로로 슬라이드시켜 여러 개를 표시하는 컴포넌트입니다.
group: components
toc: true
---

## 작동 원리

캐러셀은, CSS 3D 트랜스폼과 약간의 JavaScript로 만들어진, 일련의 콘텐츠를 순환시키기 위한 슬라이드쇼입니다. 일련의 이미지, 텍스트, 혹은 사용자 정의 마크업으로 동작합니다. 그리고 이전/다음의 컨트롤이나 위치 표시(인디게이터, indicator)도 지원합니다.

[Page Visibility API](https://www.w3.org/TR/page-visibility/)가 지원되고 있는 브라우저에서는, 웹 페이지가 사용자에게 보이지 않을 때(브라우저 탭이 활성화되지 않았거나, 브라우저 윈도 크기가 최소화되어 있을 때 등등), 캐러셀은 동작하지 않습니다.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

중첩된 캐러셀은 지원되고 있지 않고, 캐러셀은 일반적으로 접근성(accessibility) 기준에 의거하고 있지 않다는 것에 주의해 주세요.

## 예시

캐러셀은, 슬라이드의 치수를 자동으로 정규화하지 않습니다. 그 때문에, 콘텐츠의 크기를 적절하게 조정하기 위해, 추가의 유틸리티나 사용자 정의 스타일을 사용할 필요가 있는 떄가 있습니다. 캐러셀은 이전/다음의 컨트롤과 위치 표시(인디게이터, indicator)를 지원하고 있지만, 명시적으로 필수는 아닙니다. 자유롭게 추가하여 재정의해 주세요.

**어느 쪽이든 슬라이드에 `.active` 클래스를 추가할 필요가 있습니다.** 그렇지 않으면 캐러셀은 표시되지 않습니다, 그리고 특히, 1개의 페이지에서 복수의 캐러셀을 사용하고 있는 경우에는, 옵션의 컨트롤용으로 `.carousel`로 유니크한 `id`를 설정해 주세요. 컨트롤이나 인디게이터의 요소는 `.carousel` 요소의 `id`에 매치하는 `data-bs-target` 속성(링크의 경우는 `href`)을 가져야 합니다.

### 슬라이드만

슬라이드만 사용하는 캐러셀입니다. 캐러셀 이미지에 `.d-block`과 `.w-100`이있는 것을 주의해 주세요.

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

### 컨트롤 포함

이전/다음의 컨트롤을 추가할 때 권장하는 것은 `<button>` 요소지만, `role="button"`을 사용한 `<a>` 요소를 사용할 수도 있습니다.

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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### 인디케이터 포함

그리고, 캐러셀에는 컨트롤과 함께 위치 표시(인디게이터, indicator)를 추가할 수도 있습니다.

{{< example >}}
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### 설명문 포함

`.carousel-item` 안의 `.carousel-caption` 요소를 사용해, 슬라이드에 설명문 (캡션, caption)을 손쉽게 추가할 수 있습니다. 아래와 같이, 옵션의 [디스플레이 유틸리티]({{< docsref "/utilities/display" >}})를 사용함으로써, 보다 작은 뷰포트에서 간단하게 설명문 (캡션, caption)을 감추는 것도 가능합니다. 처음에는 `.d-none`로 비표시하고, 중형 기기에서는 `.d-md-block`으로 다시 표시합니다.

{{< example >}}
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### 덮어씌우기

Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add `.bg-body` or some custom CSS to the `.carousel-item`s for proper crossfading.

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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### 독립 `.carousel-item` 지연 시간

다음 아이템으로 자동으로 바뀔 때까지의 지연 시간을 변경하려면 `.carousel-item`에 `data-bs-interval=""`을 추가합니다.

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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### 터치 스와이프 비활성화

Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the `data-bs-touch` attribute. The example below also does not include the `data-bs-ride` attribute so it doesn't autoplay.

{{< example >}}
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

## 검은색 변형

컨트롤, 위치 표시(인디게이터, indicator) 혹은 설명문(캡션, caption)을 어둡게 하기 위해서 `.carousel-dark`를 `.carousel`에 추가했습니다. 컨트롤은 `filter` CSS 속성으로 기본 흰색으로 칠해진 것이 반전됩니다. 설명문(캡션, caption)과 컨트롤에는 `color`와 `background-color`를 재정의하는 Sass 변수가 추가되었습니다.

{{< example >}}
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#aaa" background="#f5f5f5" text="First slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#bbb" background="#eee" text="Second slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#999" background="#e5e5e5" text="Third slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

## 사용자 지정 트랜지션

`.carousel-item`의 트랜지션의 지속시간은 컴파일 전의 Sass 변수인 `$carousel-transition-duration`이나, 컴파일된 CSS를 사용하는 경우의 사용자 정의 스타일로 변경할 수 있습니다. 여러 개의 트랜지션이 적용되는 경우 트랜스폼 트랜지션이 맨 앞에 정의되어 있는지 확인해 주세요(예를 들어, `transition: transform 2s ease, opacity .5s ease-out`).

## Sass

### 변수

{{< scss-docs name="carousel-variables" file="scss/_variables.scss" >}}

## 사용 예시

### 데이터 속성 사용하기

캐러셀의 위치를 간단히 제어하려면, data 속성을 사용합니다. `data-bs-slide`는 키워드 `prev`나 `next`를 받아, 현재의 위치에 대한 슬라이드의 위치를 변경합니다. 혹은 `data-bs-slide-to`를 사용해 가공되지 않은 슬라이드 인덱스를 캐러셀에게 건네주면 `data-bs-slide-to="2"`가 되어, 슬라이드의 위치를 `0`에서 시작하는 특정의 인덱스로 이동시킵니다.

`data-bs-ride="carousel"` 속성은, 페이지 로드 시 캐러셀을 애니메이션화 시키는데 사용됩니다. 캐러셀의 초기화에 `data-bs-ride="carousel"`를 사용하지 않는 경우에는, 스스로 초기화할 필요가 있습니다. **같은 캐러셀의 명시적인 JavaScript의 초기화(장황하고 불필요한)와 동시 사용은 할 수 없습니다.**

### JavaScript 사용하기

캐러셀을 수동으로 부르는 경우 :

```js
const carousel = new bootstrap.Carousel('#myCarousel')
```

### 옵션

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `interval` | number | `5000` | The amount of time to delay between automatically cycling an item. |
| `keyboard` | boolean | `true` | Whether the carousel should react to keyboard events. |
| `pause` | string, boolean | `"hover"` | If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it. On touch-enabled devices, when set to `"hover"`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. This is in addition to the mouse behavior. |
| `ride` | string, boolean | `false` | If set to `true`, autoplays the carousel after the user manually cycles the first item. If set to `"carousel"`, autoplays the carousel on load. |
| `touch` | boolean | `true` | Whether the carousel should support left/right swipe interactions on touchscreen devices. |
| `wrap` | boolean | `true` | Whether the carousel should cycle continuously or have hard stops. |
{{< /bs-table >}}

### 메소드

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

예를 들어, 캐러셀의 생성자에서 캐러셀의 인스턴스를 만들어, 추가 옵션으로 초기화 하거나, 아이템의 순환을 시작하거나 할 수 있습니다.

```js
const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})
```

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `cycle` | Cycles through the carousel items from left to right. |
| `dispose` | Destroys an element's carousel. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the carousel instance associated to a DOM element, you can use it like this: `bootstrap.Carousel.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a carousel instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `bootstrap.Carousel.getOrCreateInstance(element)` |
| `next` | Cycles to the next item. **Returns to the caller before the next item has been shown** (e.g., before the `slid.bs.carousel` event occurs). |
| `nextWhenVisible` | Don't cycle carousel to next when the page isn't visible or the carousel or its parent isn't visible. **Returns to the caller before the target item has been shown** |
| `pause` | Stops the carousel from cycling through items. |
| `prev` | Cycles to the previous item. **Returns to the caller before the previous item has been shown** (e.g., before the `slid.bs.carousel` event occurs). |
| `to` | Cycles the carousel to a particular frame (0 based, similar to an array). **Returns to the caller before the target item has been shown** (e.g., before the `slid.bs.carousel` event occurs). |
{{< /bs-table >}}

### 이벤트

Bootstrap의 캐러셀 클래스는 캐러셀 기능에 연결하기 위한 두 가지 이벤트를 제공하고 있습니다. 두 가지 이벤트는 다음과 같은 추가 속성을 가지고 있습니다:

- `direction`: 캐러셀이 슬라이딩하는 방향 (`"left"` 혹은 `"right"`).
- `relatedTarget`: 액티브한 아이템으로 슬라이드 시키고 있는 DOM 요소.
- `from`: 현재 아이템의 인덱스.
- `to`: 다음 아이템의 인덱스.

모든 캐러셀 이벤트는 캐러셀 자체 (즉, `<div class="carousel">`)에서 발생합니다.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `slid.bs.carousel` | Fired when the carousel has completed its slide transition. |
| `slide.bs.carousel` | Fires immediately when the `slide` instance method is invoked. |
{{< /bs-table >}}

```js
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})
```
