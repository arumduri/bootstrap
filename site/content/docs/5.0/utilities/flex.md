---
layout: docs
title: 플렉스
title_en: Flex
description: 반응형 flexbox 유틸리티 세트를 사용해 그리드 열, 네비게이션 바, 구성 요소, 레이아웃의 정렬 및 크기 조정을 신속하게 관리합니다. 더 복잡한 구현의 경우 사용자 정의 CSS가 필요할 수 있습니다.
group: utilities
toc: true
---

## Enable flex behaviors

`display` 유틸리티를 적용하여 flexbox 컨테이너를 만들고 **직계 자식 요소** 를 flex 항목으로 변환합니다. flex컨테이너와 아이템은 추가적인 flex 속성을 사용하여 수정할 수 있습니다.

{{< example >}}
<div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
{{< /example >}}

{{< example >}}
<div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
{{< /example >}}

`.d-flex` 및 `.d-inline-flex`에 대한 반응형 변형도 있습니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.d{{ .abbr }}-flex`
- `.d{{ .abbr }}-inline-flex`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Direction

방향 유틸리티를 사용하여 flex 컨테이너에서 flex 항목의 방향을 설정합니다. 대부분의 경우 브라우저 기본값이 `row` 이므로 여기서 horizontal클래스를 생략 할 수 있습니다. 그러나 값을 명시적으로 설정해야하는 상황이 발생할 수 있습니다 (예 : 반응형 레이아웃).

`.flex-row`를 사용하여 수평 방향 (브라우저 기본값)으로 설정하고 `.flex-row-reverse`를 사용하여 역방향에서 수평 방향을 시작합니다.

{{< example >}}
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
{{< /example >}}

`.flex-column`을 사용하여 수직 방향으로 설정하거나 `.flex-column-reverse`를 사용하여 역방향으로 수직 방향을 시작합니다.

{{< example >}}
<div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse bd-highlight">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
{{< /example >}}

`flex-direction`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-row`
- `.flex{{ .abbr }}-row-reverse`
- `.flex{{ .abbr }}-column`
- `.flex{{ .abbr }}-column-reverse`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Justify content

flexbox 컨테이너에서 `justify-content` 유틸리티를 사용하여 기본 축 (시작할 x 축, `flex-direction : column` 인 경우 y축)에서 flex 항목들의 정렬을 변경합니다. `start` (브라우저 기본값), `end` , `center` , `between` , `around` 또는 `evenly` 중에서 선택합니다.

<div class="bd-example">
  <div class="d-flex justify-content-start bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-end bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-center bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-between bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-around bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-evenly bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
<div class="d-flex justify-content-evenly">...</div>
```

`justify-content`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.justify-content{{ .abbr }}-start`
- `.justify-content{{ .abbr }}-end`
- `.justify-content{{ .abbr }}-center`
- `.justify-content{{ .abbr }}-between`
- `.justify-content{{ .abbr }}-around`
- `.justify-content{{ .abbr }}-evenly`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Align items

flexbox 컨테이너에서 `align-items` 유틸리티를 사용하여 교차 축 (시작할 y 축, `flex-direction : column` 인 경우 x축)에서 flex 항목의 정렬을 변경합니다. `start` , `end` , `center` , `baseline` 또는 `stretch` (브라우저 기본값) 중에서 선택합니다.

<div class="bd-example">
  <div class="d-flex align-items-start bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-end bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-center bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-baseline bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-stretch bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>
```

`align-items`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-items{{ .abbr }}-start`
- `.align-items{{ .abbr }}-end`
- `.align-items{{ .abbr }}-center`
- `.align-items{{ .abbr }}-baseline`
- `.align-items{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Align self

flexbox 항목에서 `align-self` 유틸리티를 사용하여 교차 축 (시작할 y 축, `flex-direction : column` 인 경우 x축)에서 정렬을 개별적으로 변경합니다. `align-items` 와 동일한 옵션 인 `start` , `end` , `center` , `baseline` 또는 `stretch` (브라우저 기본값) 중에서 선택합니다.

<div class="bd-example">
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-start p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-end p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-center p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-baseline p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-stretch p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="align-self-start">Aligned flex item</div>
<div class="align-self-end">Aligned flex item</div>
<div class="align-self-center">Aligned flex item</div>
<div class="align-self-baseline">Aligned flex item</div>
<div class="align-self-stretch">Aligned flex item</div>
```

`align-self`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-self{{ .abbr }}-start`
- `.align-self{{ .abbr }}-end`
- `.align-self{{ .abbr }}-center`
- `.align-self{{ .abbr }}-baseline`
- `.align-self{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Fill

일련의 형제 요소에 `.flex-fill` 클래스를 사용하면 사용 가능한 모든 가로 공간을 차지하면서 콘텐츠와 동일한 너비 (또는 콘텐츠가 테두리 상자를 초과하지 않는 너비)로 강제 설정합니다.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight">Flex item with a lot of content</div>
  <div class="p-2 flex-fill bd-highlight">Flex item</div>
  <div class="p-2 flex-fill bd-highlight">Flex item</div>
</div>
{{< /example >}}

`flex-fill`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-fill`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Grow and shrink


`.flex-grow- *` 유틸리티는 사용 가능한 공간을 꽉 채우기 위해 확장하는 flex 아이템 입니다. 아래 예시에서 `.flex-grow-1` 요소는 가능한 모든 공간을 사용하고 나머지 두 개의 flex 항목은 필요한 공간만을 허용합니다.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Third flex item</div>
</div>
{{< /example >}}

필요한 경우 `.flex-shrink- *` 유틸리티를 사용하여 flex 아이템의 수축 기능을 전환합니다. 아래 예시에서 `.flex-shrink-1`이포함 된 두 번째 flex 아이템은 해당 내용이 강제로 새로운 row로 감싸집니다. `.w-100`이포함 된 첫번째 flex 아이템에 더 많은 공간을 허용하기 위해 "축소" 합니다.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 w-100 bd-highlight">Flex item</div>
  <div class="p-2 flex-shrink-1 bd-highlight">Flex item</div>
</div>
{{< /example >}}

`flex-grow` 와 `flex-shrink`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-{grow|shrink}-0`
- `.flex{{ .abbr }}-{grow|shrink}-1`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Auto margins

Flexbox는 flex 정렬과 자동여백을 혼합할 때 꽤 멋진 일을 할 수 있습니다. 아래는 자동 여백을 통해 flex 아이템을 제어하는 세 가지 예시입니다. 기본값 (자동 여백 없음), 두 항목을 오른쪽으로 밀기 ( `.me-auto` ), 두 항목을 왼쪽으로 밀기 ( `.ms-auto` ).

{{< example >}}
<div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="me-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="ms-auto p-2 bd-highlight">Flex item</div>
</div>
{{< /example >}}

### With align-items

`align-items` , `flex-direction : column` , `margin-top : auto` 또는 `margin-bottom : auto`를 혼합하여 하나의 flex 아이템을 컨테이너의 상단 또는 하단으로 수직 이동 시킵니다.

{{< example >}}
<div class="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="mb-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>

<div class="d-flex align-items-end flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="mt-auto p-2 bd-highlight">Flex item</div>
</div>
{{< /example >}}

## Wrap

flex 컨테이너에서 flex 아이템이 줄바꿈되는 방식을 변경합니다. `.flex-nowrap`으로 줄바꿈을 없애거나 (브라우저 기본값), `.flex-wrap`으로 줄바꿈 또는`.flex-wrap-reverse`로 역방향으로 줄바꿈 중에서 선택하십시오.

<div class="bd-example">
  <div class="d-flex flex-nowrap bd-highlight" style="width: 8rem;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex flex-nowrap">
  ...
</div>
```

<div class="bd-example">
  <div class="d-flex flex-wrap bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex flex-wrap">
  ...
</div>
```

<div class="bd-example">
  <div class="d-flex flex-wrap-reverse bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex flex-wrap-reverse">
  ...
</div>
```


`flex-wrap`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-nowrap`
- `.flex{{ .abbr }}-wrap`
- `.flex{{ .abbr }}-wrap-reverse`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Order

몇 가지 `order` 유틸리티로 특정 flex 아이템의 _보이는_ 순서를 변경합니다. flex 아이템 순서를 처음 또는 마지막으로 만드는 옵션과 DOM 순서를 사용하기 위한 재설정 만 제공합니다. `order` 는 0에서 5 사이의 값을 취하므로 필요한 추가 값은 사용자 정의 CSS에 추가하십시오.

{{< example >}}
<div class="d-flex flex-nowrap bd-highlight">
  <div class="order-3 p-2 bd-highlight">First flex item</div>
  <div class="order-2 p-2 bd-highlight">Second flex item</div>
  <div class="order-1 p-2 bd-highlight">Third flex item</div>
</div>
{{< /example >}}

`order`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints -}}
{{- range (seq 0 5) }}
- `.order{{ $bp.abbr }}-{{ . }}`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

또한 각각 `order : -1` 및 `order : 6`을 적용하여 요소의 `순서`를 변경하는 반응형 `.order-first` 및 `.order-last` 클래스도 있습니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints -}}
{{- range (slice "first" "last") }}
- `.order{{ $bp.abbr }}-{{ . }}`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Align content

flexbox 컨테이너에서 `align-content` 유틸리티를 사용하여 flex 아이템을 교차 축에서 *함께* 정렬합니다. `start` (브라우저 기본값), `end` , `center` , `between` , `around` 또는 `stretch` 중에서 선택합니다. 이러한 유틸리티를 시연하기 위해 `flex-wrap : wrap`을 시행하고 flex 아이템의 수를 늘렸습니다.

**주의!** 이 속성은 플렉스 항목의 단일 행에서는 영향을 주지 않습니다.

<div class="bd-example">
  <div class="d-flex align-content-start flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex align-content-start flex-wrap">
  ...
</div>
```

<div class="bd-example">
  <div class="d-flex align-content-end flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex align-content-end flex-wrap">...</div>
```

<div class="bd-example">
  <div class="d-flex align-content-center flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex align-content-center flex-wrap">...</div>
```

<div class="bd-example">
  <div class="d-flex align-content-between flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex align-content-between flex-wrap">...</div>
```

<div class="bd-example">
  <div class="d-flex align-content-around flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex align-content-around flex-wrap">...</div>
```

<div class="bd-example">
  <div class="d-flex align-content-stretch flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

```html
<div class="d-flex align-content-stretch flex-wrap">...</div>
```

`align-content`에 대한 반응형 변형도 존재합니다.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-content{{ .abbr }}-start`
- `.align-content{{ .abbr }}-end`
- `.align-content{{ .abbr }}-center`
- `.align-content{{ .abbr }}-around`
- `.align-content{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Media object

Bootstrap4에서 [미디어 개체 구성 요소](https://getbootstrap.com/docs/4.6/components/media-object/)를 복제 해오고 싶으십니까? 이전보다 훨씬 더 많은 유연성과 사용자 정의를 허용하는 몇 가지 flex유틸리티를 사용하여 즉시 다시 만드세요.

{{< example >}}
<div class="d-flex">
  <div class="flex-shrink-0">
    {{< placeholder width="100" height="100" color="#999" background="#e5e5e5" text="Image" >}}
  </div>
  <div class="flex-grow-1 ms-3">
    This is some content from a media component. You can replace this with any content and adjust it as needed.
  </div>
</div>
{{< /example >}}

이미지 옆에 컨텐츠를 세로로 가운데에 배치하고 싶다고 가정합니다.:

{{< example >}}
<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    {{< placeholder width="100" height="100" color="#999" background="#e5e5e5" text="Image" >}}
  </div>
  <div class="flex-grow-1 ms-3">
    This is some content from a media component. You can replace this with any content and adjust it as needed.
  </div>
</div>
{{< /example >}}

## Sass

### Utilities API

Flexbox 유틸리티는 `scss / _utilities.scss`의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법 알아보기]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-flex" file="scss/_utilities.scss" >}}
