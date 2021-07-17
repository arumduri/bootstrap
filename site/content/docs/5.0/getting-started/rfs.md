---
layout: docs
title: RFS
description: Bootstrap의 크기 조절 엔진은 일반적인 CSS 속성을 반응적으로 확장하여 뷰포트 및 기기에서 사용 가능한 공간을 더 잘 활용합니다.
group: getting-started
toc: true
---

## RFS?

Bootstrap의 사이드 프로젝트인 [RFS](https://github.com/twbs/rfs/tree/v{{< param "rfs_version" >}})는 글꼴 크기를 조절하기 위해 만들어졌던 (즉 반응형 글꼴 크기 (Responsive Font Sizes)의 약자) 유닛 크기 조절 엔진입니다. 지금의 RFS는 `margin`, `padding`, `border-radius` 또는`box-shadow`와 같은 단위 값으로 대부분의 CSS 속성의 크기를 조정할 수 있습니다.

메커니즘이 브라우저 뷰포트의 치수를 기반으로 적절한 값을 자동으로 계산합니다. 반응형 스케일링 동작을 활성화하기 위해 `rem` 및 뷰포트 단위가 혼합된 `calc()` 함수로 컴파일됩니다.

## RFS 사용하기

믹스인은 Bootstrap에 포함되어 있으며 Bootstrap의 `scss`를 포함하면 사용할 수 있습니다. RFS는 필요한 경우 [독립형으로 설치](https://github.com/twbs/rfs/tree/v{{< param "rfs_version" >}}#installation)할 수도 있습니다.

### 믹스인 사용하기

`rfs()` 믹스인 `font-size`, `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding`, `padding-top`, `padding-right`, `padding-bottom`, 그리고 `padding-left`에 대한 약어가 있습니다. 소스 Sass 및 컴파일된 CSS에 대해서는 아래 예시를 참조하세요.

```scss
.title {
  @include font-size(4rem);
}
```

```css
.title {
  font-size: calc(1.525rem + 3.3vw);
}

@media (min-width: 1200px) {
  .title {
    font-size: 4rem;
  }
}
```

다른 속성은 다음과 같이 `rfs()` 믹스인에 전달할 수 있습니다:

```scss
.selector {
  @include rfs(4rem, border-radius);
}
```

`!important`를 원하는 값에 추가할 수도 있습니다:

```scss
.selector {
  @include padding(2.5rem !important);
}
```

### 기능 사용하기

포함해서 사용하지 않으려는 경우 다른 두 가지 기능도 있습니다:

- `rfs-value()`는 `px` 값이 전달되면 값을 `rem` 값으로 변환하고, 다른 경우에는 동일한 결과를 반환합니다.
- `rfs-fluid-value()`는 속성의 크기 조정이 필요한 경우 값의 유동적 버전을 반환합니다.

이 예시에서는 Bootstrap의 내장 [반응형 중단점 믹스인]({{< docsref "/layout/breakpoints" >}}) 중 하나를 사용하여 `lg` 중단점 아래에만 스타일을 적용합니다.

```scss
.selector {
  @include media-breakpoint-down(lg) {
    padding: rfs-fluid-value(2rem);
    font-size: rfs-fluid-value(1.125rem);
  }
}
```

```css
@media (max-width: 991.98px) {
  .selector {
    padding: calc(1.325rem + 0.9vw);
    font-size: 1.125rem; /* 1.125rem is small enough, so RFS won't rescale this */
  }
}
```

## 확장된 문서
RFS는 Bootstrap 조직 아래의 별도 프로젝트입니다. RFS 및 구성에 대한 자세한 내용은 [GitHub 저장소](https://github.com/twbs/rfs/tree/v{{< param "rfs_version" >}})에서 찾을 수 있습니다.
