---
layout: docs
title: Carousel
description: 캐러셀은 이미지나 텍스트의 슬라이드를 가로로 슬라이드시켜 여러 개를 표시하는 컴포넌트입니다.
group: components
toc: true
---

## How it works

- 캐러셀은, CSS 3D 트랜스폼과 약간의 JavaScript로 만들어진, 일련의 콘텐츠를 순환시키기 위한 슬라이드쇼입니다. 일련의 이미지, 텍스트, 혹은 사용자 정의 마크업으로 동작합니다. 그리고 이전/다음의 컨트롤이나 위치 표시(인디게이터, indicator)도 지원합니다.

- 성능상의 이유로 **캐러셀은 [캐러셀 생성자 메소드](#메소드)를 사용하여 수동으로 초기화**해야 합니다. 초기화하지 않으면 일부 이벤트 리스너(특히 터치/스와이프 지원이 필요한 이벤트)는 사용자가 컨트롤이나 표시기를 명시적으로 활성화할 때까지 등록되지 않습니다.

  유일한 예외는 `data-bs-ride="carousel"` 속성이 있는 [자동 재생 캐러셀](#자동-재생-캐러셀)로, 페이지 로드 시 자동으로 초기화되므로 이 캐러셀은 예외입니다. 데이터 속성이 있는 자동 재생 캐러셀을 사용하는 경우 **생성자 메소드로 동일한 캐러셀을 명시적으로 초기화하지 마세요**.

- 중첩된 캐러셀은 지원되지 않습니다. 또한 일반적으로 캐러셀은 사용성 및 접근성 문제를 야기할 수 있다는 점에 유의해야 합니다.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## 기본 예제

다음은 슬라이드가 3개인 캐러셀의 기본 예시입니다. 이전/다음 컨트롤에 주목하세요. `<button>` 요소를 사용하는 걸 권장하지만 `role="button"`이 포함된 `<a>` 요소를 사용할 수도 있습니다.

{{< example >}}
<div id="carouselExample" class="carousel slide">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

캐러셀은 슬라이드 크기를 자동으로 정규화하지 않습니다. 따라서 콘텐츠 크기를 적절하게 조정하려면 추가 유틸리티 또는 사용자 지정 스타일을 사용해야 할 수 있습니다. 캐러셀은 이전/다음 컨트롤 및 표시기를 지원하지만 명시적으로 필요한 것은 아닙니다. 원하는 대로 추가하고 사용자 지정하세요.

**슬라이드 중 하나에 `.active` 클래스를 추가해야 합니다**. 그렇지 않으면 캐러셀이 표시되지 않습니다. 또한 특히 한 페이지에서 여러 개의 캐러셀을 사용하는 경우 선택적 컨트롤의 경우 `.carousel`에 고유한 `id`를 설정해야 합니다. 컨트롤 및 표시기 요소에는 `.carousel` 요소의 `id`와 일치하는 `data-bs-target` 속성(링크의 경우 `href`)이 있어야 합니다.

### Indicators

그리고, 캐러셀에는 컨트롤과 함께 위치 표시(인디게이터)를 추가할 수도 있습니다. 인디게이터를 통해 사용자는 특정 슬라이드로 바로 이동할 수 있습니다.

{{< example >}}
<div id="carouselExampleIndicators" class="carousel slide">
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

### 설명문

`.carousel-item` 안의 `.carousel-caption` 요소를 사용해, 슬라이드에 설명문 (캡션, caption)을 손쉽게 추가할 수 있습니다. 아래와 같이, 옵션의 [디스플레이 유틸리티]({{< docsref "/utilities/display" >}})를 사용함으로써, 보다 작은 뷰포트에서 간단하게 설명문 (캡션, caption)을 감추는 것도 가능합니다. 처음에는 `.d-none`로 비표시하고, 중형 기기에서는 `.d-md-block`으로 다시 표시합니다.

{{< example >}}
<div id="carouselExampleCaptions" class="carousel slide">
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

### Crossfade

`.carousel-fade`를 캐러셀에 추가하면, 슬라이드 대신에 fade 트랜지션으로 슬라이드를 애니메이션화 시킬 수 있습니다. Depending on your carousel content (e.g., text only slides), you may want to add `.bg-body` or some custom CSS to the `.carousel-item`s for proper crossfading.

{{< example >}}
<div id="carouselExampleFade" class="carousel slide carousel-fade">
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

## 자동 재생 캐러셀

페이지 로드 시 캐러셀이 자동 재생되도록 설정하려면 `ride` 옵션을 `carousel`로 설정하면 됩니다. 자동 재생 캐러셀은 마우스로 마우스를 가리키는 동안 자동으로 일시 중지됩니다. 이 동작은 `pause` 옵션으로 제어할 수 있습니다. [페이지 가시성 API](https://www.w3.org/TR/page-visibility/)를 지원하는 브라우저에서는 브라우저 탭이 비활성 상태이거나 브라우저 창이 최소화되는 등 웹페이지가 사용자에게 보이지 않을 경우 캐러셀의 순환이 중지됩니다.

{{< callout info >}}
접근성을 위해 자동 재생 캐러셀은 사용하지 않는 것이 좋습니다. 페이지에 자동 재생 캐러셀이 포함되어 있는 경우 캐러셀을 명시적으로 일시 중지/정지할 수 있는 추가 버튼이나 컨트롤을 제공하는 것이 좋습니다.

[WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/WCAG21/#pause-stop-hide)를 참고해주세요.
{{< /callout >}}

{{< example >}}
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

`carousel`러셀' 대신 `ride` 옵션을 `true`로 설정하면 페이지 로드 시 캐러셀이 자동으로 순환하기 시작하지 않습니다. 대신 첫 번째 사용자 상호 작용 후에만 시작됩니다.

{{< example >}}
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
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

### 컨트롤 없는 자동 재생 캐러셀

다음은 슬라이드만 있는 캐러셀입니다. 브라우저 기본 이미지 정렬을 방지하기 위해 캐러셀 이미지에 `.d-block`과 `.w-100`이 있는지 확인하세요.

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

## 터치 스와이프 비활성화

캐러셀은 터치 스크린 단말기에서의 좌우 스와이프에 의한 슬라이드 간 이동을 지원합니다. 이것은 `touch` 옵션을 `false`로 설정해서 비활성화시킬 수 있습니다.

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

## 어두운 변형

{{< deprecated-in "5.3.0" >}}

컨트롤, 위치 표시(인디게이터, indicator) 혹은 설명문(캡션, caption)을 어둡게 하기 위해서 `.carousel-dark`를 `.carousel`에 추가했습니다. 컨트롤은 `filter` CSS 속성으로 기본 흰색으로 칠해진 것이 반전됩니다. 설명문(캡션, caption)과 컨트롤에는 `color`와 `background-color`를 재정의하는 Sass 변수가 추가되었습니다.

{{< callout-deprecated-dark-variants "carousel" >}}

{{< example >}}
<div id="carouselExampleDark" class="carousel carousel-dark slide">
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

## CSS

### Sass 변수

모든 캐러셀에 대한 변수입니다.

{{< scss-docs name="carousel-variables" file="scss/_variables.scss" >}}

[어두운 캐러셀](#검은색-변형)에 대한 변수입니다:

{{< scss-docs name="carousel-dark-variables" file="scss/_variables.scss" >}}

## 사용 예시

### 데이터 속성 사용하기

캐러셀의 위치를 간단히 제어하려면, data 속성을 사용합니다. `data-bs-slide`는 키워드 `prev`나 `next`를 받아, 현재의 위치에 대한 슬라이드의 위치를 변경합니다. 혹은 `data-bs-slide-to`를 사용해 가공되지 않은 슬라이드 인덱스를 캐러셀에게 건네주면 `data-bs-slide-to="2"`가 되어, 슬라이드의 위치를 `0`에서 시작하는 특정의 인덱스로 이동시킵니다.

### JavaScript 사용하기

캐러셀을 수동으로 부르는 경우:

```js
const carousel = new bootstrap.Carousel('#myCarousel')
```

### 옵션

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table >}}
| 이름         | 유형              | 기본값       | 설명                                                                                                                                                                                                                                                                       |
| ---------- | --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `interval` | number          | `5000`    | 아이템을 자동으로 순환시킬 때까지의 지연 시간을 지정합니다.                                                                                                                                                                                                                                        |
| `keyboard` | boolean         | `true`    | 캐러셀이 키보드 이벤트에 반응해야 하는지 여부.                                                                                                                                                                                                                                               |
| `pause`    | string, boolean | `"hover"` | `"hover"`로 설정하면, `mouseenter`로 캐러셀의 순환이 일시 정지하고 `mouseleave`로 캐러셀의 순환이 재개됩니다. 만약 `false`라면, 캐러셀 위에 커서를 올려도 일시 정지하지 않습니다. 터치 대응 기기에서는 `"hover"`로 설정되어 있는 경우, `touchend` (사용자가 캐러셀과의 상호작용을 마치면)시에 순환은 두번의 간격으로 일시 정지하고 그 후 자동으로 재개됩니다. 이는 위의 마우스 동작에 덧붙여 수행된다는 점에 주의해 주세요. |
| `ride`     | string, boolean | `false`   | `true`로 설정되어 있다면 사용자가 수동으로 처음 아이템을 순화시킨 후, 캐러셀을 자동 재생합니다. 만약 `"carousel"`로 설정되어 있는 경우에는 로드시 캐러셀을 자동 재생합니다.                                                                                                                                                               |
| `touch`    | boolean         | `true`    | 터치 스크린 기기에서 캐러셀이 좌우 스와이프 인터렉션을 지원할지 여부.                                                                                                                                                                                                                                  |
| `wrap`     | boolean         | `true`    | 캐러셀을 연속적으로 순환시킬지 혹은 강제로 멈추게 할지 여부.                                                                                                                                                                                                                                       |
{{< /bs-table >}}

### 메소드

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

캐러셀 생성자를 사용하여 캐러셀 인스턴스를 생성하고 추가 옵션을 전달할 수 있습니다. 예를 들어, 마크업 자체에서 `data-bs-ride="carousel"` 속성을 사용하지 않는 경우 특정 간격으로 터치 지원을 비활성화한 상태에서 자동 재생 캐러셀을 수동으로 초기화하려면 다음을 사용할 수 있습니다:

```js
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
```

{{< bs-table >}}
| 메소드                   | 설명                                                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `cycle`               | 캐러셀의 아이템을 왼쪽에서 오른쪽으로 순환시킵니다.                                                                                                      |
| `dispose`             | 요소의 캐러셀을 없앱니다. (DOM 요소에 저장되어 있는 데이터를 삭제)                                                                                          |
| `getInstance`         | 정적 메소드를 사용하여 DOM 요소에 연결된 캐러셀 인스턴스를 가져올 수 있습니다. `bootstrap.Carousel.getInstance(element)`처럼 사용할 수 있습니다.                            |
| `getOrCreateInstance` | DOM 엘리먼트에 연결된 캐러셀 인스턴스를 반환하거나 초기화되지 않은 경우 새 인스턴스를 생성하는 정적 메소드입니다. `bootstrap.Carousel.getOrCreateInstance(element)`처럼 사용할 수 있습니다. |
| `next`                | 다음 아이템으로 순환합니다. **다음 아이템이 표시되기 전** (예를 들어, `slid.bs.carousel` 이벤트가 발생하기 전)에 호출된 곳으로 돌아갑니다.                                        |
| `nextWhenVisible`     | 페이지가 표시되어 있지 않은 경우나 캐러셀이나 그 부모가 표시되어 있지 않는 경우는 캐러셀을 다음 페이지로 순환시키지 않도록 합니다. **대상이 되는 아이템이 표시되기 전에 호출된 곳으로 돌아갑니다**.                 |
| `pause`               | 캐러셀의 아이템 순환을 중지시킵니다.                                                                                                              |
| `prev`                | 이전 아이템으로 순환합니다. **이전 아이템이 표시되기 전** (예를 들어, `slid.bs.carousel` 이벤트가 발생하기 전)에 호출된 곳으로 돌아갑니다.                                        |
| `to`                  | 캐러셀을 특정 프레임에 순환시킵니다 (0 베이스, 배열과 비슷합니다). **대상 아이템이 나타나기 전** (예를 들어, `slid.bs.carousel` 이벤트 발생 이전)에 호출된 곳으로 돌아갑니다.                  |
{{< /bs-table >}}

### 이벤트

Bootstrap의 캐러셀 클래스는 캐러셀 기능에 연결하기 위한 두 가지 이벤트를 제공하고 있습니다. 두 가지 이벤트는 다음과 같은 추가 속성을 가지고 있습니다:

- `direction`: 캐러셀이 슬라이딩하는 방향 (`"left"` 혹은 `"right"`).
- `relatedTarget`: 액티브한 아이템으로 슬라이드 시키고 있는 DOM 요소.
- `from`: 현재 아이템의 인덱스.
- `to`: 다음 아이템의 인덱스.

모든 캐러셀 이벤트는 캐러셀 자체 (즉, `<div class="carousel">`)에서 발생합니다.

{{< bs-table >}}
| 이벤트 유형              | 설명                                  |
| ------------------- | ----------------------------------- |
| `slid.bs.carousel`  | 캐러셀의 슬라이드 트렌지션이 완료했을 때 발생합니다.       |
| `slide.bs.carousel` | `slide` 인스턴스 메소드가 호출되었을 때 바로 발생합니다. |
{{< /bs-table >}}

```js
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})
```
