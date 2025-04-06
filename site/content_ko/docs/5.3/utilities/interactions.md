---
layout: docs
title: Interactions
description: 사용자가 웹 사이트의 콘텐츠와 상호 작용하는 방식을 변경하는 유틸리티 클래스입니다.
group: utilities
toc: false
---

## 텍스트 선택

사용자가 콘텐츠와 상호 작용할 때 콘텐츠가 선택되는 방식을 변경합니다.

{{< example >}}
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto">This paragraph has default select behavior.</p>
<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
{{< /example >}}

## 포인터 이벤트

Bootstrap은 요소와의 상호 작용을 금지하거나 추가하기 위해 `.pe-none` 및 `.pe-auto` 클래스를 제공합니다.

{{< example >}}
<p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
<p><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
<p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#" class="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
{{< /example >}}

`.pe-none` 클래스 (및 `pointer-events` CSS 속성 설정)는 커서 (마우스, 스타일러스, 터치)와의 상호 작용 만 방지합니다. `.pe-none`을 사용하는 링크와 컨트롤은 기본적으로 키보드 사용자가 여전히 포커스를 받을 수 있고 실행 또한 가능합니다. 키보드 사용자도 완전히 상호작용 불가능하게 하려면 `tabindex = "-1"` (키보드 포커스를 받지 못하도록 방지) 및 `aria-disabled = "true"` (사실을 전달하기 위해)와 같은 속성을 추가해야 할 수 있습니다. 보조 기술에 대해 효과적으로 JavaScript를 사용하여 실행 가능한 것을 완전히 방지할 수 있습니다.

가능하다면 더 쉬운 방법이 있습니다:

- 양식 컨트롤의 경우 `disabled` HTML 속성을 추가합니다.
- 링크의 경우 `href` 속성을 제거하여 비대화형 앵커 또는 플레이스홀더 링크로 만듭니다.

## CSS

### Sass 유틸리티 API

상호작용 유틸리티는 `scss/_utilities.scss`의 유틸리티 API에 선언되어 있습니다. [유틸리티 API 사용 방법에 대해 알아보세요.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-interaction" file="scss/_utilities.scss" >}}
