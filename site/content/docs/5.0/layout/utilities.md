---
layout: docs
title: 레이아웃용 유틸리티
description: Bootstrap에서는 더  빠른 모바일 친화적 반응형 개발을 위해서 콘텐츠 표시, 숨기기, 정렬, 간격 조정을 위한 수십 개의 유틸리티 클래스가 포함되어 있습니다.
group: layout
toc: true
---

## Changing `display`

`display` 속성의 공통값을 반응형으로 전환하려면 [디스플레이 유틸리티]({{< docsref "/utilities/display" >}})를 사용하세요. 그리드 시스템, 콘텐츠 또는 구성 요소와 혼합하여 특정 뷰포트에서 표시하거나 숨길 수 있습니다.

## Flexbox options

Bootstrap은 flexbox로 빌드되었지만 모든 요소의 `display`가 `display: flex`로 변경되지는 않았습니다. 불필요한 재정의가 많이 추가되고 예기치 않게 주요 브라우저 동작이 변경되기 때문입니다. 대부분의 [컴포넌트]({{< docsref "/components/alerts" >}})는 flexbox가 활성화된 상태로 만들어졌습니다.

요소에 `display: flex`를 추가해야하는 경우 `.d-flex` 또는 반응형 변수 중 하나 (예 : `.d-sm-flex`)를 사용하여 추가합니다. 크기 조정, 정렬, 간격 등에 대한 추가 [flexbox 유틸리티]({{< docsref "/utilities/flex" >}})를 사용하려면 이 클래스 또는 `display` 값이 필요합니다.

## Margin and padding

`margin` 및 `padding` [간격 유틸리티]({{< docsref "/utilities/spacing" >}})를 사용하여 요소 및 컴포넌트의 간격과 크기를 제어합니다. 부트 스트랩에는 `1rem`을 기본값으로 하는 `$spacer` 변수를 기반으로하는 간격 유틸리티에 대한 6단계 스케일이 포함되어 있습니다. 모든 뷰포트에 대한 값을 선택하거나 (예: LTR에서의 `margin-right: 1rem`의 `me-3`) 특정 뷰포트를 대상으로 하는 반응형 변수를 선택합니다 (예: `md` 중단점에서 시작하는 -LTR에서의- `margin-right: 1rem`의 `me-3`).

## Toggle `visibility`

`display`를 전환할 필요가 없는 경우 [가시성 유틸리티]({{< docsref "/utilities/visibility" >}})를 사용하여 요소의 `visibility`를 전환할 수 있습니다. 보이지 않는 요소는 여전히 페이지 레이아웃에 영향을 주지만 방문자에게는 시각적으로 숨겨집니다.