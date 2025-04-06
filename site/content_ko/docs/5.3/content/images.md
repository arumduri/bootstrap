---
layout: docs
title: Images
description: 이미지를 반응형 동작으로 선택하고 (부모보다 커지지 않도록) 클래스를 통해 경량 스타일을 추가하는 문서 및 예시입니다.
group: content
toc: true
---

## 반응형 이미지

Bootstrap의 이미지는 `.img-fluid`를 통해서 반응형으로 만들어집니다. 이렇게 하면 이미지에 `max-width: 100%;` 및 `height: auto;`가 적용되어 부모 너비와 함께 크기가 조정됩니다.

{{< example >}}
{{< placeholder width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" >}}
{{< /example >}}

## 이미지 썸네일

[border-radius 유틸리티]({{< docsref "/utilities/borders" >}}) 유틸리티 외에도, `.img-thumbnail`을 사용하여 이미지에 둥근 1px 테두리 모양을 제공할 수 있습니다.

{{< example >}}
{{< placeholder width="200" height="200" class="img-thumbnail" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
{{< /example >}}

## 이미지 정렬

[helper float 클래스]({{< docsref "/utilities/float" >}}) 또는 [텍스트 정렬 클래스]({{< docsref "/utilities/text#text-alignment" >}})로 이미지를 정렬하세요. `block`-level 이미지는 [`.mx-auto` margin 유틸리티 클래스]({{< docsref "/utilities/spacing#horizontal-centering" >}})로 중앙 정렬할 수 있습니다.

{{< example >}}
{{< placeholder width="200" height="200" class="rounded float-start" >}}
{{< placeholder width="200" height="200" class="rounded float-end" >}}
{{< /example >}}


{{< example >}}
{{< placeholder width="200" height="200" class="rounded mx-auto d-block" >}}
{{< /example >}}

{{< example >}}
<div class="text-center">
  {{< placeholder width="200" height="200" class="rounded" >}}
</div>
{{< /example >}}


## 사진

`<picture>` 요소를 사용하여 특정 `<img>`에 대해 여러 `<source>` 요소를 지정하는 경우 `<picture>` 태그가 아닌 `<img>`에 `.img-*` 클래스를 추가해야 합니다.

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```

## CSS

### Sass 변수

이미지 썸네일에 변수를 사용할 수 있습니다.

{{< scss-docs name="thumbnail-variables" file="scss/_variables.scss" >}}
