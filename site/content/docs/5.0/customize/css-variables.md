---
layout: docs
title: CSS 변수
title_en: CSS variables
description: 빠르고 미래 지향적인 설계와 개발을 위해 Bootstrap의 CSS 사용자 정의를 사용합니다.
group: customize
toc: true
---

Bootstrap은 컴파일된 CSS에 약 24개의 [CSS 사용자 정의 속성(변수)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)를 포함하고 있으며, 컴포넌트별 재정의를 개선하기 위해 더 많은 변수들을 준비하고 있습니다. 이들은 브라우저의 검사기, 코드 샌드박스 또는 일반 프로토타입으로 작업할때 테마 색상, 브레이크 포인트, 주요 글꼴 스택과 같이 일반적으로 자주 사용되는 값에 대해 간단하게 접근을 제공합니다.

제 3의 CSS와의 충돌을 피하기 위해 **모든 사용자 정의 속성 앞에 `bs-`가 붙습니다.**

## Root variables

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

## Component variables

그리고 사용자 정의 속성을 여러 컴포넌트의 로컬 변수로 이용하는 것도 시작하고 있습니다. 이렇게 함으로써 컴파일된 CSS를 줄이고, 중첩된 테이블과 같은 곳에서 스타일이 상속되지 않도록 하며, Sass 컴파일 후에 Bootstrap 컴포넌트의 기본적인 스타일 변경과 확장을 가능하게 합니다.

우리가 [어떻게 CSS 변수를 사용하고 있는지에]({{< docsref "/content/tables#how-do-the-variants-and-accented-tables-work" >}}) 대해서는 테이블 문서를 확인해 주세요.

또한 주로 그리드의 거터에 CSS 변수를 사용하고 있는데 - 향후 더 많은 컴포넌트를 사용하게 될 것입니다.

## Examples

CSS 변수는 Sass 변수와 동일한 유연성을 제공하지만 브라우저에 제공되기 전에 컴파일할 필요는 없습니다. 예를 들어, 여기에서는 페이지의 글꼴이나 링크의 스타일을 CSS 변수로 재설정하고 있습니다.

```css
body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
  color: var(--bs-blue);
}
```
