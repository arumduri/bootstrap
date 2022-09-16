---
layout: docs
title: CSS 변수
title_en: CSS variables
description: 빠르고 미래 지향적인 설계와 개발을 위해 Bootstrap의 CSS 사용자 정의를 사용합니다.
group: customize
toc: true
---

Bootstrap은 Sass를 재컴파일할 필요 없이 실시간 커스터마이징을 할 수 있도록 컴파일된 CSS에 많은 [CSS 사용자 정의 속성 (변수)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)를 포함하고 있습니다. 이들은 브라우저의 검사기, 코드 샌드박스 또는 일반 프로토타입으로 작업할때 테마 색상, 중단점, 주요 글꼴 스택과 같이 일반적으로 자주 사용되는 값에 대해 간단하게 접근을 제공합니다.

서드파티 CSS와의 충돌을 피하기 위해 **모든 사용자 정의 속성 앞에 `bs-`가 붙습니다.**

## 최상위 변수

여기에는 Bootstrap의 CSS가 포함된 곳이면 어디에서나 접근할 수 있는(`:root`가 필수인 것에 주의해 주세요) 변수가 있습니다. 이들은 `_root.scss` 파일 안에 있음며 컴파일된 dist 파일에 포함되어 있습니다.

```css
{{< root.inline >}}
{{- $css := readFile "dist/css/bootstrap.css" -}}
{{- $match := findRE ":root {([^}]*)}" $css 1 -}}

{{- if (eq (len $match) 0) -}}
{{- errorf "Got no matches for :root in %q!" $.Page.Path -}}
{{- end -}}

{{- index $match 0 -}}

{{< /root.inline >}}
```

## 컴포넌트 변수

Bootstrap 5 is increasingly making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren't inherited in places like nested tables, and allow some basic restyling and extending of Bootstrap components after Sass compilation.

Have a look at our table documentation for some [insight into how we're using CSS variables]({{< docsref "/content/tables#how-do-the-variants-and-accented-tables-work" >}}). Our [navbars also use CSS variables]({{< docsref "/components/navbar#css" >}}) as of v5.2.0. We're also using CSS variables across our grids—primarily for gutters the [new opt-in CSS grid]({{< docsref "/layout/css-grid" >}})—with more component usage coming in the future.

Whenever possible, we'll assign CSS variables at the base component level (e.g., `.navbar` for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications by our team in future updates.

## Prefix

Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the `--` that's required on every CSS variable.

Customize the prefix via the `$prefix` Sass variable. By default, it's set to `bs-` (note the trailing dash).

## 예시

CSS 변수는 Sass 변수와 동일한 유연성을 제공하지만 브라우저에 제공되기 전에 컴파일할 필요는 없습니다. 예를 들어, 여기에서는 페이지의 글꼴이나 링크의 스타일을 CSS 변수로 재설정하고 있습니다.

```css
body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
  color: var(--bs-blue);
}
```

## 그리드 중단점

우리는 그리드 중단점을 CSS 변수로 포함시켰지만(`xs` 제외) **CSS 변수는 미디어 쿼리에서 작동하지 않습니다**. 이것은 변수에 대한 CSS 사양의 설계에 의한 것이지만 `env()` 변수에 대한 지원에 따라 향후 변경될 수 있습니다. 몇 가지 유용한 링크는 [이 Stack Overflow 답변](https://stackoverflow.com/a/47212942)을 확인하세요. 그동안 다른 CSS 상황과 JavaScript에서 이러한 변수를 사용할 수 있습니다.
