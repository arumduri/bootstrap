---
layout: docs
title: 사용자 지정
description: Sass를 사용하여 테마 지정 및 Bootstrap 확장과 사용자 정의 방법, 풍부한 글로벌 옵션, 광범위한 컬러 시스템 등을 소개합니다.
group: customize
toc: false
aliases: "/docs/5.3/customize/"
sections:
  - 
    title: Sass
    description: 변수, 맵, 믹스인, 함수의 장점을 활용해 소스의 Sass 파일을 이용합니다.
  - 
    title: Options
    description: 내장 변수를 사용하여 Bootstrap을 재정의해 글로벌 CSS 기본 설정을 쉽게 전환할 수 있습니다.
  - 
    title: Color
    description: 툴킷 전체를 지원하는 컬러 시스템에 대해 배우고 재정의합니다.
  - 
    title: Color modes
    description: Explore our default light mode and the new dark mode, or create custom color modes yourself.
  - 
    title: Components
    description: 기본 클래스와 제어자 클래스를 사용하여 거의 모든 컴포넌트를 반응형으로 빌드하는 방법을 학습합니다.
  - 
    title: CSS variables
    description: 빠르고 미래지향적인 디자인과 개발 실현을 위해 Bootstrap의 CSS 사용자 정의 속성을 사용합니다.
  - 
    title: Optimize
    description: 프로젝트를 간소화하고, 반응형, 유지 보수 할 수 있게 최고의 경험을 제공합니다.
---

## 개요

Bootstrap을 재정의 하는 방법은 여러 가지가 있습니다. 가장 좋은 방법은 당신의 프로젝트, 빌드 도구의 복잡성, 사용하고 있는 Bootstrap 버전, 브라우저 지원 등에 따라 달라질 수 있습니다.

우리는 아래의 두 가지 방법을 선호합니다:

1. 소스 파일을 사용하고 확장할 수 있도록 [패키지 매니저를 통해]({{< docsref "/getting-started/download#패키지-관리자" >}}) Bootstrap을 사용합니다.
2. Bootstrap의 스타일을 추가하거나 덮어씌기 할 수 있도록 Bootstrap의 컴파일된 배포 파일 또는 [jsDelivr]({{< docsref "/getting-started/download#jsdelivr를-통한-cdn" >}})를 사용합니다.

모든 패키지 매니저의 사용법을 여기서 자세히 설명할 수는 없지만, [자체 Sass 컴파일러에서 Bootstrap을 사용하기 위한]({{< docsref "/customize/sass" >}}) 몇 가지 방법은 안내해 줄 수 있습니다.

배포 파일을 사용하고자 하는 사람은 [getting started page]({{< docsref "/getting-started/introduction" >}})에서 해당 파일을 포함하는 방법과 HTML 페이지에서 예시를 확인해 주세요. 거기에서 레이아웃, 구성요소 및 사용하고 싶은 동작에 대한 문서를 참조해 주세요.

글로벌 옵션 이용 방법, 컬러 시스템 이용과 변경, 컴포넌트 빌드 방법, 늘어나는 CSS 사용자 정의 속성 사용 방법과 Bootstrap로 빌드할때 코드 최적화 방법등 Bootstrap을 숙지한 후 계속해서 살펴봐 주세요.

## CSP와 임베디드 SVG

브라우저 및 기기 간에 일관되게 스타일링하기 위해 몇몇 Bootstrap 컴포넌트는 CSS에 내장된 SVG를 포함하고 있습니다. **<abbr title="Content Security Policy">CSP</abbr> 형태가 보다 엄격한 조직을 위해**, embedded SVG(모두 `background-image`를 통해 적용되게)의 모든 인스턴스를 문서화하여 옵션을 보다 철저하게 검토할 수 있게 하였습니다.

- [Accordion]({{< docsref "/components/accordion" >}})
- [캐러셀 제어]({{< docsref "/components/carousel#with-controls" >}})
- [닫기 버튼]({{< docsref "/components/close-button" >}}) (경고창과 모달에서 사용)
- [폼 체크 박스와 라디오 버튼]({{< docsref "/forms/checks-radios" >}})
- [폼 스위치]({{< docsref "/forms/checks-radios#switches" >}})
- [폼 유효성 검사 아이콘]({{< docsref "/forms/validation#server-side" >}})
- [내비게이션 바 토글 버튼]({{< docsref "/components/navbar#responsive-behaviors" >}})
- [셀렉트 메뉴]({{< docsref "/forms/select" >}})

[커뮤니티 정보](https://github.com/twbs/bootstrap/issues/25394)에 의하면, 사용자의 코드를 가지고 이 문제에 대처하는 방법으로는 [URL을 로컬 호스트한다]({{< docsref "/getting-started/webpack#extracting-svg-files" >}}), 이미지를 삭제해 인라인으로 이미지를 사용한다 (모든 컴포넌트로 가능한 것은 아닙니다), CSP를 변경한다 등이 있습니다. 우리는 사용자가 자신의 보안 정책을 확인하고 필요에 따라 최적의 방법을 선택하는 것을 권장합니다.
