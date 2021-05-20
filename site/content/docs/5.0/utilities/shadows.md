---
layout: docs
title: Shadows (그림자)
description: box-shadow 유틸리티를 사용하여 요소에 그림자를 추가하거나 제거합니다.
group: utilities
toc: true
---

## Examples

컴포넌트의 그림자는 부트스트랩에서 기본적으로 비활성화되어 있고 `$ enable-shadows`를 통해 활성화 할 수 있지만, `box-shadow` 유틸리티 클래스를 사용하여 섀도우를 빠르게 추가하거나 제거 할 수 있습니다. `.shadow-none` 및 세 가지 기본 크기 (일치 할 관련 변수가 있음) 에 대한 지원이 포함됩니다.

{{< example >}}
<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="box-shadow-variables" file="scss/_variables.scss" >}}

### Utilities API

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-shadow" file="scss/_utilities.scss" >}}
