---
layout: docs
title: 옵션
title_en: Options
description: 내장된 변수를 사용하여 Bootstrap을 신속하게 사용자 정의하여 스타일 및 동작을 제어하기 위한 글로벌 CSS 설정을 쉽게 전환할 수 있습니다.
group: customize
---

내장된 사용자 정의 변수 파일과 새로운 `$enable-*` Sass 변수를 사용하여 글로벌한 CSS 설정을 쉽게 전환할 수 있습니다. 변수 값을 재정의하고 필요에 따라 `npm run test`로 다시 컴파일 해 주세요.

이러한 변수는 Bootstrap의 `scss/_variables.scss` 파일 내의 주요 글로벌 옵션을 찾아 재정의 할 수 있습니다.

{{< bs-table "table text-start" >}}
| 변수                       | 값                             | 설명                                                                            |
| ------------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$spacer`                      | `1rem` (기본), 혹은 어떤 수 > 0 | [간격 유틸리티]({{< docsref "/utilities/spacing" >}})를 만들때 기본 간격 값을 지정. |
| `$enable-dark-mode`            | `true` (default) or `false`        | Enables built-in [dark mode support]({{< docsref "/customize/color-modes#dark-mode" >}}) across the project and its components. |
| `$enable-rounded`              | `true` (기본) 혹은 `false`        | 다양한 컴포넌트에서 정의된 `border-radius` 스타일의 사용 유무. |
| `$enable-shadows`              | `true` 혹은 `false` (기본)        | 다양한 컴포넌트에서 정의가 끝난 장식용의 `box-shadow` 스타일의 사용 유무. 포커스 상태에서 사용되는 `box-shadow`에는 영향을 주지 않습니다. |
| `$enable-gradients`            | `true` 혹은 `false` (기본)        | 다양한 컴포넌트에서 정의된 `background-image` 그라데이션의 사용 유무. |
| `$enable-transitions`          | `true` (기본) 혹은 `false`        | 다양한 컴포넌트에서 정의된 `transition`의 사용 유무. |
| `$enable-reduced-motion`       | `true` (기본) 혹은 `false`        | 사용자의 브라우저/운영 체제 기본 설정에 따라 특정 애니메이션/트랜지션을 억제하는 [`prefers-reduced-motion` 미디어 쿼리]({{< docsref "/getting-started/accessibility#reduced-motion" >}})를 사용합니다.|
| `$enable-grid-classes`         | `true` (기본) 혹은 `false`        | 그리드 시스템용 CSS 클래스(예를 들어, `.row`, `.col-md-1`, 등등)를 사용합니다. |
| `$enable-container-classes`    | `true` (default) or `false`        | Enables the generation of CSS classes for layout containers. (New in v5.2.0) |
| `$enable-caret`                | `true` (기본) 혹은 `false`        | `.dropdown-toggle`의 가상 요소의 화살표(캐럿 caret)를 사용합니다. |
| `$enable-button-pointers`      | `true` (기본) 혹은 `false`        | 비활성화 되지 않은 버튼 요소에 "손모양(hand)" 커서 추가합니다. |
| `$enable-rfs`                  | `true` (기본) 혹은 `false`        | 글로벌하게 [RFS]({{< docsref "/getting-started/rfs" >}}) 지원. |
| `$enable-validation-icons`     | `true` (기본) 혹은 `false`        | 유효성 검사를 위한 텍스트 입력이나 일부 사용자 정의 폼에서 `background-image`로 아이콘을 사용합니다. |
| `$enable-negative-margins`     | `true` 혹은 `false` (기본)        | [마이너스 마진 유틸리티]({{< docsref "/utilities/spacing#negative-margin" >}})를 사용합니다. |
| `$enable-deprecation-messages` | `true` (기본) 혹은 `false`        | `false`로 설정하면 `v6`에서 삭제 예정인 권장 믹스인이나 함수를 사용할때 에러가 표시되지 않습니다. |
| `$enable-important-utilities`  | `true` (기본) 혹은 `false`        | 유틸리티 클래스에서 `!important` 접미사를 사용합니다. |
| `$enable-smooth-scroll`        | `true` (기본) 혹은 `false`        | `scroll-behavior: smooth`를 [`prefers-reduced-motion` 미디어 쿼리]({{< docsref "/getting-started/accessibility#reduced-motion" >}})를 통해서 감소된 모션을 요청하는 사용자를 제외하고 전역으로 전용합니다. |
{{< /bs-table >}}
