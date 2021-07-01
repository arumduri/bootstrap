---
layout: docs
title: Z-index
description: z-index는 Bootstrap 그리드 시스템의 일부는 아니지만 구성 요소가 서로 중첩되고 상호 작용하는 방식에서 중요한 역할을 담당합니다.
group: layout
---

다수의 Bootstrap 컴포넌트는 콘텐츠를 정렬하는 제3의 축을 제공하여 레이아웃을 제어하는 데에 도움이 되는 CSS 속성인 `z-index`를 사용합니다. 우리는 내비게이션, 툴팁 및 팝오버, 모달 등을 적절하게 계층화하도록 설계된 Bootstrap의 기본 z-index 스케일을 사용합니다.

이러한 높은 값은 임의의 숫자에서 시작하며 충돌을 이상적으로 피할 수 있을만큼 높고 구체적입니다. 툴팁, 팝오버, 내비게이션, 드롭다운, 모달 등 계층화된 구성 요소 전반에 걸쳐 이러한 표준 세트가 필요하므로 동작에서 합리적으로 일관성을 유지할 수 있습니다. `100`+ 또는 `500`+를 사용할 수 없을 이유가 없습니다.

이러한 값을 개별적으로 커스터마이징하는 것은 권장되지 않습니다. 하나를 변경하면 모두 변경해야 합니다.

{{< scss-docs name="zindex-stack" file="scss/_variables.scss" >}}

컴포넌트 (예: 입력 그룹의 버튼 및 입력) 내에서 겹치는 테두리를 처리하기 위해 기본값, 호버링 및 활성 상태에 대해 `1`, `2`, `3`의 낮은 단일 숫자 `z-index`값을 사용합니다. 호버/포커스/활성화 상태에서 우리는 더 높은 `z-index` 값으로 특정 요소를 맨 앞으로 가져와 형제 요소 위에 테두리를 표시합니다.
To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.
