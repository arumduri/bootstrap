---
layout: docs
title: 객체 차우기
title_en: Object fit
description: 개체 맞춤 유틸리티를 사용하여 `<img>` 또는 `<video>`와 같은 [대체된 요소](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)의 콘텐츠가 컨테이너에 맞게 크기를 조정하는 방법을 수정할 수 있습니다.
group: utilities
toc: true
---

## 작동 방식

반응형 `object-fit` 유틸리티 클래스로 [`object-fit` 속성](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)의 값을 변경하세요. 이 속성은 가로 세로 비율을 유지하거나 가능한 한 많은 공간을 차지하도록 늘리는 등 다양한 방식으로 콘텐츠가 부모 컨테이너를 채우도록 지시합니다.

`object-fit` 값에 대한 클래스는 `.object-fit-{value}` 형식을 사용하여 이름이 지정됩니다. 다음 값 중에서 선택합니다:

- `contain`
- `cover`
- `fill`
- `scale` (scale 축소)
- `none`

## 예제

[대체된 요소](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)에 `object-fit-{value}` 클래스를 추가합니다:

{{< example class="d-flex overflow-auto" >}}
{{< placeholder width="140" height="120" class="object-fit-contain border rounded" text="Object fit contain" markup="img" color="#868e96" background="#dee2e6" >}}
{{< placeholder width="140" height="120" class="object-fit-cover border rounded" text="Object fit cover" markup="img" color="#868e96" background="#dee2e6" >}}
{{< placeholder width="140" height="120" class="object-fit-fill border rounded" text="Object fit fill" markup="img" color="#868e96" background="#dee2e6" >}}
{{< placeholder width="140" height="120" class="object-fit-scale border rounded" text="Object fit scale down" markup="img" color="#868e96" background="#dee2e6" >}}
{{< placeholder width="140" height="120" class="object-fit-none border rounded" text="Object fit none" markup="img" color="#868e96" background="#dee2e6" >}}
{{< /example >}}

## 반응형

각 `객체 맞춤` 값에 대해 `.object-fit-{breakpoint}-{value}` 형식을 사용하는 반응형 변형도 존재하며, 중단점 약어는 `SM`, `MD`, `LG`, `XL`, `XXL`이 있습니다. 필요에 따라 다양한 효과를 위해 클래스를 조합할 수 있습니다.

{{< example class="d-flex overflow-auto" >}}
{{< placeholder width="140" height="80" class="object-fit-sm-contain border rounded" text="Contain on sm" markup="img" color="#868e96" background="#dee2e6" >}}
{{< placeholder width="140" height="80" class="object-fit-md-contain border rounded" text="Contain on md" markup="img" color="#868e96" background="#dee2e6" >}}
{{< placeholder width="140" height="80" class="object-fit-lg-contain border rounded" text="Contain on lg" markup="img" color="#868e96" background="#dee2e6" >}}
{{< placeholder width="140" height="80" class="object-fit-xl-contain border rounded" text="Contain on xl" markup="img" color="#868e96" background="#dee2e6" >}}
{{< placeholder width="140" height="80" class="object-fit-xxl-contain border rounded" text="Contain on xxl" markup="img" color="#868e96" background="#dee2e6" >}}
{{< /example >}}

## 동영상

`.object-fit-{value}` 및 반응형 `.object-fit-{breakpoint}-{value}` 유틸리티는 `<video>` 요소에서도 작동합니다.

```html
<video src="..." class="object-fit-contain" autoplay></video>
<video src="..." class="object-fit-cover" autoplay></video>
<video src="..." class="object-fit-fill" autoplay></video>
<video src="..." class="object-fit-scale" autoplay></video>
<video src="..." class="object-fit-none" autoplay></video>
```

## CSS

### Sass 유틸리티 API

객체 맞춤 유틸리티는 유틸리티 API의 `scss/_utilities.scss`에 선언되어 있습니다. [유틸리티 API 사용 방법 알아보기]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-object-fit" file="scss/_utilities.scss" >}}
