---
layout: docs
title: 접근성
title_en: Accessibility
description: 접근성 콘텐츠 제작을 위한 Bootstrap의 기능과 제한사항에 대한 간략한 설명입니다.
group: getting-started
toc: true
---

Bootstrap은 개발자가 시각적으로 매력적이고 기능이 풍부하며 즉시 액세스할 수 있는 웹사이트와 애플리케이션을 만들 수 있도록 사전 제작된 스타일과 레이아웃 도구 및 대화형 구성요소로 이루어진 사용하기 쉬운 프레임워크를 제공합니다.

## 개요와 한계

Bootstrap으로 개발한 프로젝트의 전반적인 접근성은 작성자가 추가한 마크업, 추가 스타일 및 스크립트에 큰 영향을 받습니다. 이 부분이 올바르게 구현되었다면 [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.2](https://www.w3.org/TR/WCAG/) (A/AA/AAA), [Section 508](https://www.section508.gov/) 및 유사한 접근성 표준 및 요구사항을 충족하는 Bootstrap을 사용하여 웹사이트와 애플리케이션을 만드는 것이 완벽하게 가능해야 합니다.

### 구조적 마크업

Bootstrap의 스타일과 레이아웃은 다양한 마크업 구조에 적용할 수 있습니다. 이 문서는 개발자에게 잠재적인 접근성 문제를 해결할 수 있는 방법을 포함하여 Bootstrap의 사용방법을 보여주고 적합한 시멘틱 마크업을 설명하는 모범 사례를 제공하는 것에 중점을 두고 있습니다.

### 상호 작용이 가능한 컴포넌트

Bootstrap의 모달 다이얼로그, 드롭다운 메뉴 및 커스텀 툴팁 같은 상호 작용이 가능한 컴포넌트는 터치, 마우스, 그리고 키보드 사용자들에게 최적화되어 있습니다. 관련 [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/standards-guidelines/aria/) 역할 및 속성의 사용을 통해 이러한 컴포넌트는 보조 기술 (예: 화면 리더기)을 사용하여 이해하고 작동할 수 있어야 합니다.

Bootstrap의 구성요소는 상당히 보편적으로 설계되었으므로 작성자는 해당 구성요소의 정확한 특성과 기능을 보다 정확하게 전달하기 위해 추가 <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 역할 및 속성 외에 JavaScript 동작을 포함해야 할 수도 있습니다. 이것은 일반적으로 문서에 명시되어 있습니다.

### 색상 대비

현재 Bootstrap의 단추 변형, 경고 변형, 폼 유효성 검사 표시기 등을 위해 프레임워크 전체에서 사용되는 기본 팔레트를 구성하는 일부 색상조합은 색상 대비가 *불충분*할 수 있습니다. ([WCAG 2.1 글꼴 색상 대비 4.5:1](https://www.w3.org/TR/WCAG21/#contrast-minimum) 미만 및 [WCAG 2.2 글꼴 외 색상 대비 3:1](https://www.w3.org/TR/WCAG21/#non-text-contrast) 미만이 권장됨). 이 부분은 밝은배경에서 더 강하게 발생하기 때문에 작성자는 특정 색상들을 테스트 한 뒤 필요할 경우 이러한 기본색상을 수동으로 수정/확장하여 적절한 색상 대비를 확인하는 것이 좋습니다.

### 시각적으로 숨겨진 콘텐츠

시각적으로 숨겨야 하지만 화면 리더기와 같은 보조 기술이 계속 접근해야 하는 콘텐츠는 `.visually-hidden` 클래스를 사용하여 스타일을 지정할 수 있습니다. 이는 추가적인 시각정보 또는 단서 (예: 색상 사용을 통해 표시되는 의마)를 비 시각적 사용자에게도 전달해야 하는 상황에서 유용할 수 있습니다.

```html
<p class="text-danger">
  <span class="visually-hidden">Danger: </span>
  This action is not reversible
</p>
```

기존의 "건너뛰기" 링크와 같이 시각적으로 숨겨진 대화형 컨트롤의 경우 `.visually-hidden-focusable` 클래스를 사용합니다. (고대비 키보드 사용자의 경우) 이렇게 초점이 맞춰지면 컨트롤이 표시됩니다. **이전 버전의 `.sr-only` 및 `.sr-only-focusable` 클래스와 달리 Bootstrap 5의 `.visually-hidden-focusable`은 독립된 클래스이며 `.visually-hidden` 클래스와 함께 사용해서는 안됩니다.**

```html
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
```

### 감소된 모션

Bootstrap에는 [`prefers-reduced-motion` 미디어 기능](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion) 지원이 포함되어 있습니다. 사용자가 감소된 모션에 대한 기본 설정을 지정할 수 있는 브라우저/환경에서 Bootstrap의 대부분의 CSS 전환 효과 (예: 모달 다이얼로그 상자가 열리거나 닫힐 때 또는 캐러셀의 슬라이딩 애니메이션)가 비활성화되고 의미 있는 애니메이션 (예: 스피너)의 속도가 느려집니다.

`prefers-reduced-motion`을 지원하는 브라우저와 사용자가 감소된 모션을 선호한다고 명시적으로 신호를 보내지 *않은* 경우 (예: `prefers-reduced-motion: no-preference`) Bootstrap은 `scroll-behavior` 속성을 사용하여 부드러운 스크롤을 가능하게 합니다.

## 추가 자료

- [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG/)
- [The A11Y Project](https://www.a11yproject.com/)
- [MDN 접근성 문서](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Color Contrast Analyser (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/)
- [접근성 문제를 식별하기 위한 "HTML Codesniffer" 북마크릿](https://github.com/squizlabs/HTML_CodeSniffer)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/)
- [Deque Axe 테스트 도구](https://www.deque.com/axe/)
- [웹 접근성에 대해 알아보기](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
