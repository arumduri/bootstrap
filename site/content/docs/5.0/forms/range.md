---
layout: docs
title: 범위
title_en: Range
description: 사용자 범위 컨트롤을 사용하여 크로스 브라우저에서 일관되게 표시할 수 있으며 맞춤 제작도 가능합니다.
group: forms
toc: true
---

## Overview

`<input type="range">`에 `.form-range`를 사용합니다. track (배경)과 thumb (값)은 어느 브라우저에서도 동일하게 표시되도록 스타일링되어 있습니다. 진행 상황을 시각적으로 보여주는 수단으로 thumb의 왼쪽 또는 오른쪽을 track으로 "채우는" 것을 지원하는 것은 Firefox뿐이라서 현재는 지원하지 않습니다.

{{< example >}}
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
{{< /example >}}

## Disabled

`disabled` 블리언 속성을 추가하면 비활성화되어 표시되고 포인터 이벤트가 삭제됩니다.

{{< example >}}
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>
{{< /example >}}

## Min and max

범위 입력에는 `min`과 `max`으로 각각 `0` 과 `100`이라는 암묵적인 값을 가지고 있습니다. `min` 과 `max` 속성을 사용해 새롭게 값을 지정할 수 있습니다.

{{< example >}}
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
{{< /example >}}

## Steps

기본적으로, 범위 입력은 정수 값으로 "눌러"집니다 . 이것을 변경하려면 `step` 값을 지정합니다. 아래의 예시에서는 `step="0.5"` 으로 지정해 스텝수를 두 배로 하는 것을 보여주고 있습니다.

{{< example >}}
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="form-range-variables" file="scss/_variables.scss" >}}
