---
layout: docs
title: 컴포넌트
title_en: Components
description: 기본 클래스와 제어자 클래스를 가지고 거의 모든 컴포넌트를 반응하는 방식으로 빌드하는 방법과 이유를 소개합니다.
group: customize
toc: true
---

## 기본 클래스

Bootstrap의 컴포넌트는 주로 기본-제어자(base-modifier) 명명법으로 만들어졌습니다. 가능한 한 많은 공유 속성을 `.btn`과 같은 기본 클래스로 그룹화 하고, 각 변형 개개의 스타일은 `.btn-primary` 혹은 `.btn-success`와 같은 제어자 클래스로 그룹화 하고 있습니다.

제어자 클래스를 만들기 위해, Sass의 `@each` 반복문을 사용하여 Sass 맵을 반복합니다. 이는 특히 `$theme-colors`로 컴포넌트의 변형을 만들고 중단점별로 반응하는 변형을 만들때 도움이 됩니다. 이 Sass 맵을 재정의하고 다시 컴파일하면 자동으로 반복문에 변경이 반영됩니다.

이러한 반복문을 재정의하고 Bootstrap의 기본 제어자 클래스 접근법을 당신의 코드로 확장하는 방법에 대해서는 [Sass 맵과 루프 문서]({{< docsref "/customize/sass#maps-and-loops" >}})를 확인해 주세요.

## 제어자

Bootstrap의 컴포넌트의 대부분은 기본-제어자 클래스 접근법으로 만들어졌습니다. 즉, 스타일의 대부분은 기본 클래스(예를 들어, `.btn`)에 포함되어 스타일의 변형(예를 들어, `.btn-danger`)은 제어자 클래스로 한정되어 있습니다. 이 제어자 클래스는 `$theme-colors` 맵에서 빌드되어 제어자 클래스의 수와 이름을 재정의 합니다.

여기서는 `$theme-colors` 맵을 반복해 `.alert`와 `.list-group` 컴포넌트의 제어자를 생성하는 방법의 두가지 예시입니다.

{{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}}

{{< scss-docs name="list-group-modifiers" file="scss/_list-group.scss" >}}

## 반응형

이러한 Sass 반복은 색상 맵 뿐만이 아닙니다. 컴포넌트의 반응적인 변형을 생성할 수도 있습니다. 예를 들면, `$grid-breakpoints` Sass 맵에 대해 `@each` 반복을 미디어 쿼리와 혼합하는 드롭다운의 반응적 배치는 다음과 같습니다.

{{< scss-docs name="responsive-breakpoints" file="scss/_dropdown.scss" >}}

`$grid-breakpoints`를 변경하면, 그 맵을 반복 처리하는 모든 반복문에 적용됩니다.

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

Sass 맵과 변수를 변경하는 방법에 대한 자세한 예시는 [그리드 문서의 CSS 섹션]({{< docsref "/layout/grid#css" >}})을 참조해 주세요.

## 직접 만들기

Bootstrap을 사용하여 직접 컴포넌트를 작성할 때는 이러한 지침을 따르는 것이 좋습니다. 이 접근 방식을 문서나 예시의 사용자 정의 컴포넌트에도 적용하고 있습니다. callout 같은 컴포넌트는 기본 클래스와 제어자 클래스가 있는 제공된 컴포넌트처럼 작성됩니다.


<div class="bd-example">
  <div class="bd-callout my-0">
    <strong>This is a callout.</strong> We built it custom for our docs so our messages to you stand out. It has three variants via modifier classes.
  </div>
</div>

```html
<div class="callout">...</div>
```

아래와 같이 CSS에는 대부분이 `.callout`으로 이루어지고 있습니다. 그리고 각 변형 간의 독자적인 스타일은 제어자 클래스로 제어합니다.

```scss
// Base class
.callout {}

// Modifier classes
.callout-info {}
.callout-warning {}
.callout-danger {}
```

callout의 경우, `border-left-color`라는 독자적인 스타일을 사용하고 있습니다. 이 기본 클래스와 제어자 클래스를 조합하면 컴포넌트 계열이 완성됩니다:

{{< callout info >}}
**This is an info callout.** Example text to show it in action.
{{< /callout >}}

{{< callout warning >}}
**This is a warning callout.** Example text to show it in action.
{{< /callout >}}

{{< callout danger >}}
**This is a danger callout.** Example text to show it in action.
{{< /callout >}}
