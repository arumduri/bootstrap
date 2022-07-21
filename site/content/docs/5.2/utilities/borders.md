---
layout: docs
title: 테두리
title_en: Borders
description: 테두리 유틸리티를 사용하여 요소의 테두리 및 테두리 반경 스타일을 빠르게 지정합니다. 이미지, 버튼 또는 기타 요소에 적합합니다.
group: utilities
toc: true
---

## 테두리

테두리 유틸리티를 사용하여 요소에 테두리를 추가하거나 제거합니다. 모든 테두리를 선택하거나 한 번에 하나씩 선택 하세요.

### 테두리 방향

Add borders to custom elements:

{{< example class="bd-example-border-utils" >}}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
{{< /example >}}

### 반전 방향

Or remove borders:

{{< example class="bd-example-border-utils" >}}
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
{{< /example >}}

## Color

테마 색상에 사전정의된 유틸리티를 사용하여 테두리 색상을 변경하십시오.

{{< example class="bd-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="border border-{{ .name }}"></span>
{{- end -}}
{{< /border.inline >}}
<span class="border border-white"></span>
{{< /example >}}

Or modify the default `border-color` of a component:

{{< example >}}
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
  Dangerous heading
</div>

<div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
  Changing border color and width
</div>
{{< /example >}}

## Opacity

{{< added-in "5.2.0" >}}

Bootstrap `border-{color}` utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.border-success` utility.

```css
.border-success {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}
```

We use an RGB version of our `--bs-success` (with the value of `25, 135, 84`) CSS variable and attached a second CSS variable, `--bs-border-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.border-success` now, your computed `color` value is `rgba(25, 135, 84, 1)`. The local CSS variable inside each `.border-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

### Example

To change that opacity, override `--bs-border-opacity` via custom styles or inline styles.

{{< example >}}
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2" style="--bs-border-opacity: .5;">This is 50% opacity success border</div>
{{< /example >}}

Or, choose from any of the `.border-opacity` utilities:

{{< example >}}
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
<div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
{{< /example >}}

## Width

{{< example class="bd-example-border-utils" >}}
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>
{{< /example >}}

## Radius

요소에 클래스를 추가하여 모서리를 쉽게 둥근형태로 만듭니다.

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded" title="Example rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-top" title="Example top rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-end" title="Example right rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-bottom" title="Example bottom rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-start" title="Example left rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-circle" title="Completely round image" >}}
{{< placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" >}}
{{< /example >}}

### 크기

Use the scaling classes for larger or smaller rounded corners. Sizes range from `0` to `5`, and can be configured by modifying the utilities API.

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-0" title="Example non-rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-1" title="Example small rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-2" title="Example default rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-3" title="Example large rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-4" title="Example larger rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-5" title="Example extra large rounded image" >}}
{{< /example >}}

## CSS

### 변수

{{< scss-docs name="root-border-var" file="scss/_root.scss" >}}

### Sass variables

{{< scss-docs name="border-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="border-radius-variables" file="scss/_variables.scss" >}}

### Sass mixins

{{< scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### 유틸리티 API

테두리 유틸리티는 `scss / _utilities.scss`의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법 알아보기] ({{< docsref "/utilities/api # using-the-api" >}})

{{< scss-docs name="utils-borders" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius" file="scss/_utilities.scss" >}}
