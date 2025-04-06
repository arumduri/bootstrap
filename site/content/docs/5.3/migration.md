---
layout: docs
title: v5으로 마이그레이션하기
title_en: Migrating to v5
description: Bootstrap의 소스 파일, 문서 및 컴포넌트의 변경 내용을 확인하고 검토함으로써 v4에서 v5로의 마이그레이션을 지원합니다.
group: migration
aliases: "/migration/"
toc: true
---

## v5.3.0

이전 v5.3.0 알파 릴리즈에서 마이그레이션하는 경우 이 섹션과 함께 해당 변경 사항을 검토하세요.

### 도우미 

- [컬러 링크]({{< docsref "/helpers/colored-links" >}})에 다시 한 번 `!important`가 추가되어 새로 추가된 링크 유틸리티와 더 잘 작동합니다.

### 유틸리티

- 새로운 `.d-inline-grid` [표시 유틸리티]({{< docsref "/utilities/display" >}})를 추가했습니다.

## v5.3.0-alpha2

이전 v5.3.0 알파 릴리즈에서 마이그레이션하는 경우 이 섹션과 함께 해당 변경 사항을 검토하세요.

### CSS 변수

- 중복되거나 사용되지 않는 여러 루트 CSS 변수를 제거했습니다.

### 색상 모드

- 이제 다크 모드 색상은 특정 색조나 음영(예: `$blue-300`)이 아닌 Sass의 테마 색상(예: `$primary`)에서 파생됩니다. 따라서 기본 테마 색상을 사용자 지정할 때 보다 자동화된 다크 모드를 사용할 수 있습니다.

- 다크 모드 텍스트, 미묘한 배경 및 미묘한 테두리의 테마 색상을 생성하기 위한 Sass 맵을 추가했습니다.

- [스니펫 예시]({{< docsref "/examples#snippets" >}})는 이제 마크업이 업데이트되고 사용자 정의 스타일이 축소된 다크 모드에 사용할 수 있습니다.

- 스크롤 막대와 같은 OS 레벨 컨트롤을 변경하기 위해 다크 모드 CSS에 `color-scheme: dark`를 추가했습니다.

- 양식 유효성 검사 `border-color` 및 텍스트 `color` 상태가 이제 새로운 Sass 및 CSS 변수 덕분에 다크 모드에 반응합니다.

- 최근에 추가된 양식 컨트롤 백그라운드 CSS 변수를 삭제하고 대신 CSS 변수를 사용하도록 Sass 변수를 재할당했습니다. 이렇게 하면 여러 색상 모드에서 스타일링이 단순화되고 다크 모드의 양식 컨트롤이 제대로 업데이트되지 않는 문제를 방지할 수 있습니다.

- 이제 `box-shadow`는 다크 모드에서 흰색으로 반전되는 대신 항상 어두운 상태로 유지됩니다.

- 색상 모드 토글 스크립트의 HTML 및 JavaScript가 개선되었습니다. 활성 SVG 변경을 위한 선택기가 개선되었으며, ARIA 속성을 사용하여 마크업에 더 쉽게 액세스할 수 있게 되었습니다.

- 라이트 모드와 다크 모드에서 문서 코드 구문 색상 등이 개선되었습니다.

### 타이포그래피

- 더 이상 다크 모드에서 `$headings-color-dark` 또는 `--bs-heading-color`의 색상을 설정하지 않습니다. 컴포넌트 내의 제목이 잘못된 색상으로 표시되는 몇 가지 문제를 방지하기 위해 Sass 변수를 `null`로 설정하고 기본 라이트 모드에서 사용하는 것과 같은 `null` 검사를 추가했습니다.

### 컴포넌트

- 이제 카드에 `색상`이 설정되어 색상 모드에서 렌더링이 개선됩니다.

- 활성 탐색 링크 아래에 더 단순한 하단 테두리가 있는 탐색을 위한 새로운 `.nav-underline` 변형을 추가했습니다. [예시는 문서를 참조하세요.]({{< docsref "/components/navs-tabs#underline" >}})

- 이제 탐색에 사용자 정의 버튼 포커스 스타일과 더 잘 어울리는 새로운 `:focus-visible` 스타일이 추가되었습니다.

### 도우미

- 텍스트 링크와 함께 Bootstrap 아이콘을 빠르게 배치하고 정렬할 수 있는 새로운 `.icon-link` 도우미가 추가되었습니다. 아이콘 링크는 새로운 링크 유틸리티도 지원합니다.

- 기본 `outline`을 제거하고 사용자 지정 `box-shadow` 포커스 링을 설정할 수 있는 새로운 포커스 링 도우미를 추가했습니다.

### 유틸리티

- 관련 유틸리티와 일치하도록 Sass 및 CSS 변수 `${color}-text`의 이름을 `${color}-text-emphasis`로 변경했습니다.

- [컬러 링크]({{< docsref "/helpers/colored-links" >}})와 함께 새로운 `.link-body-emphasis` 헬퍼를 추가했습니다. 컬러 모드 반응형 강조 색상을 사용하여 컬러 링크를 생성합니다.

- 링크 색상 불투명도, 밑줄 오프셋, 밑줄 색상 및 밑줄 불투명도를 위한 새로운 링크 유틸리티가 추가되었습니다. [새로운 링크 유틸리티 살펴보기]({{< docsref "/utilities/link" >}})

- (v5.2.0 이전처럼) CSS 변수 기반 `border-width` 유틸리티가 해당 속성을 직접 설정하도록 되돌려졌습니다. 이렇게 하면 표를 포함한 중첩된 요소에서 상속 문제를 방지할 수 있습니다.

- `.text-black` 및 `.bg-black` 유틸리티와 일치하는 새로운 `.border-black` 유틸리티를 추가했습니다.

- <span class="badge text-warning-emphasis bg-warning-subtle">지원 중단</span> `.text-muted` 유틸리티와 `$text-muted` Sass 변수가 더 이상 사용되지 않으며 `.text-body-secondary` 및 `$body-secondary-color`로 대체되었습니다.

### 문서

- 이제 예제는 문서의 설정에 따라 적절한 밝거나 어두운 색상 모드로 표시됩니다. 각 예시에는 개별 색상 모드 선택기가 있습니다.

- 라이브 토스트 데모에 포함된 JavaScript가 개선되었습니다.

- 예제 페이지 상단에 `twbs/examples` 리포지토리 콘텐츠를 추가했습니다.

### 툴링

- 유틸리티 API 및 기타 커스터마이징을 테스트할 수 있도록 True를 통한 SCSS 테스트를 추가했습니다.

- bootstrap-npm-starter 프로젝트의 인스턴스를 더 새롭고 완전한 [twbs/examples 리포지토리](https://github.com/twbs/examples)로 교체했습니다.

<hr class="mb-4">

전체 변경 사항 목록은 [GitHub의 v5.3.0-alpha2 프로젝트](https://github.com/orgs/twbs/projects/13)를 참조하세요.

## v5.3.0-alpha1

<hr class="mb-4">

### 컬러 모드!

새로운 [컬러 모드 문서]({{< docsref "/customize/color-modes" >}})에서 자세히 알아보세요.

- **라이트(기본값) 및 다크 모드를 전역적으로 지원합니다.** `:root` 요소, 래퍼 클래스가 있는 요소 및 컴포넌트 그룹 또는 `data-bs-theme="light|dark"`를 사용하여 컴포넌트에 직접 색상 모드를 전역적으로 설정할 수 있습니다. 또한 `data-bs-theme` 선택기 또는 미디어 쿼리와 함께 규칙 집합을 출력할 수 있는 새로운 `color-mode()` 믹스인이 포함되어 있어 원하는 대로 설정할 수 있습니다.

- <span class="badge text-warning-emphasis bg-warning-subtle">지원 중단</span> 색상 모드는 컴포넌트의 어두운 변형을 대체하므로 `.btn-close-white`, `.carousel-dark`, `.dropdown-menu-dark` 및 `.navbar-dark`는 더 이상 사용되지 않습니다.

- 새로운 확장 색상 시스템: `color` 및 `background-color`에 대한 새로운 보조, 보조, 강조 색상과 함께 보다 미묘한 시스템 전반의 색상 팔레트를 위해 새로운 테마 색상(`$theme-colors`에는 없음)을 추가했습니다. 이러한 새로운 색상은 Sass 변수, CSS 변수 및 유틸리티로 사용할 수 있습니다.

- 또한 텍스트 강조색, 미묘한 배경색, 미묘한 테두리색을 포함하도록 테마 색상 Sass 변수, CSS 변수 및 유틸리티를 확장했습니다. 이러한 기능은 Sass 변수, CSS 변수 및 유틸리티로 사용할 수 있습니다.

- 다크 모드 전용 오버라이드를 저장하기 위해 새로운 `_variables-dark.scss` 스타일시트를 추가합니다. 이 스타일시트는 가져오기 스택의 기존 `_variables.scss` 파일 바로 뒤에 가져와야 합니다.

  ```diff
  diff --git a/scss/bootstrap.scss b/scss/bootstrap.scss
  index 8f8296def..449d70487 100644
  --- a/scss/bootstrap.scss
  +++ b/scss/bootstrap.scss
  @@ -6,6 +6,7 @@
   // Configuration
   @import "functions";
   @import "variables";
  +@import "variables-dark";
   @import "maps";
   @import "mixins";
   import "utilities";
  ```

### CSS 변수

- 중단점에 대한 CSS 변수를 복원하지만, 미디어 쿼리에서는 지원되지 않으므로 사용하지 않습니다. 그러나 JS 관련 컨텍스트에서는 유용할 수 있습니다.

- 색상 모드 업데이트에 따라 새로운 Sass CSS 변수 `secondary` 및 `tertiary` 텍스트 및 배경색에 대한 새로운 유틸리티와 테마 색상에 대한 `{color}-bg-subtle`, `{color}-border-subtle` 및 `{color}-text-emphasis`가 추가되었습니다. 이러한 새로운 색상은 밝음과 어두움 등 다양한 색상 모드에서 더 쉽게 사용자 정의할 수 있도록 하기 위해 Sass 및 CSS 변수를 통해 사용할 수 있습니다(색상 맵은 제공되지 않음).

- 경고창, `.btn-close` 및 `.offcanvas`에 대한 변수가 추가되었습니다.

- `--bs-heading-color` 변수가 업데이트되어 다크 모드를 지원합니다. 첫째, 이제 CSS 변수를 출력하기 전에 연결된 Sass 변수인 `$headings-color`에 `null` 값이 있는지 확인하므로 기본적으로 컴파일된 CSS에는 이 변수가 존재하지 않습니다. 둘째, 폴백 값인 `inherit`이 있는 CSS 변수를 사용하여 원래 동작이 유지되도록 하면서도 재정의도 허용합니다.

- 링크가 `color` 스타일링에 CSS 변수를 사용하도록 변환하지만 `text-decoration`은 사용하지 않습니다. 이제 `--bs-link-color-rgb` 및 `--bs-link-opacity` 색상을 `rgba()` 색상으로 설정하여 반투명도를 쉽게 사용자 지정할 수 있습니다. 이제 `a:hover` 의사 클래스가 `color` 속성을 명시적으로 설정하는 대신 `--bs-link-color-rgb`를 재정의합니다.

- 이제 더 많은 컴포넌트에서 `--bs-border-width`가 사용되어 기본 전역 스타일을 더 잘 제어할 수 있습니다.

-`b-box-shadow`, `--bs-box-shadow-sm`, `--bs-box-shadow-lg`, `--bs-box-shadow-inset` 등 `box-shadow`에 대한 새로운 루트 CSS 변수를 추가합니다.

### 컴포넌트

#### 경고창

- 이제 CSS 변수를 통해 경고 변형의 스타일을 지정할 수 있습니다.

- <span class="badge text-warning-emphasis bg-warning-subtle">지원 중단</span> `alert-variant()` 믹스인은 이제 더 이상 사용되지 않습니다. 이제 [Sass 루프]({{< docsref "/components/alerts#sass-loops" >}})를 직접 사용하여 각 변형에 대한 컴포넌트의 기본 CSS 변수를 수정합니다.

#### 목록 그룹

- 목록 그룹 항목 변형은 이제 CSS 변수를 통해 스타일을 지정할 수 있습니다.

- <span class="badge text-warning-emphasis bg-warning-subtle">지원 중단</span> `list-group-item-variant()` 믹스인은 이제 더 이상 사용되지 않습니다. 이제 [Sass 루프]({{< docsref "/components/list-group#sass-loops" >}})를 직접 사용하여 각 변형에 대한 컴포넌트의 기본 CSS 변수를 수정합니다.

#### 드롭다운

- <span class="badge text-warning-emphasis bg-warning-subtle">지원 중단</span> 드롭다운 또는 상위 요소에서 `.dropdown-menu-dark` 클래스는 더 이상 사용되지 않으며 `data-bs-theme="dark"`로 대체되었습니다. [예시는 문서를 참조하세요.]({{< docsref "/components/dropdowns#dark-dropdowns" >}})

#### 닫기 버튼

- <span class="badge text-warning-emphasis bg-warning-subtle">지원 중단</span> 닫기 버튼 또는 모든 상위 요소에서 `.btn-close-white` 클래스는 더 이상 사용되지 않으며 `data-bs-theme="dark"`로 대체되었습니다. [예시는 문서를 참조하세요.]({{< docsref "/components/close-button#dark-variant" >}})

#### 내비게이션 바

- <span class="badge text-warning-emphasis bg-warning-subtle">지원 중단</span> `.navbar-dark` 클래스는 더 이상 사용되지 않으며 탐색 모음 또는 모든 상위 요소에서 `data-bs-theme="dark"`로 대체되었습니다. [업데이트된 예제는 문서를 참조하세요.]({{< docsref "/components/navbar#color-schemes" >}})

### 진행률 표시줄

[진행률 표시줄]({{< docsref "/components/progress" >}})에 대한 마크업이 v5.3.0에서 업데이트되었습니다. 내부 `.progress-bar` 요소에 `role` 및 다양한 `aria-` 속성을 배치했기 때문에 **일부 스크린 리더에서 0 값 진행률 표시줄이 표시되지 않았습니다**. 이제 `role="progressbar"` 및 관련 `aria-*` 속성은 바깥쪽 `.progress` 요소에 있으며, `.progress-bar`는 막대의 시각적 표시와 선택적 레이블만 남게 됩니다.

모든 스크린 리더와의 호환성 향상을 위해 새 마크업을 채택하는 것이 좋지만, 기존 진행률 표시줄 구조는 이전처럼 계속 작동한다는 점에 유의하세요.

```html
<!-- Previous markup -->
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- New markup -->
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
```

또한 [여러 개의 진행률 표시줄]({{< docsref "/components/progress#multiple-bars" >}})을 하나의 누적된 진행률 표시줄로 보다 논리적으로 묶을 수 있도록 새로운 `.progress-stacked` 클래스를 도입했습니다.

```html
<!-- Previous markup -->
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Segment one" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- New markup -->
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
```

### 양식

- `.form-control`은 이제 색상 모드를 지원하기 위해 CSS 변수로 스타일을 지정합니다. 여기에는 기본 및 비활성화된 양식 컨트롤 배경에 대한 두 개의 새로운 루트 CSS 변수가 추가되었습니다.

- `.form-check` 및 `.form-switch` 컴포넌트는 이제 `background-image` 설정을 위한 CSS 변수로 빌드됩니다. 여기서 사용법은 각 컴포넌트의 다양한 포커스, 활성 등의 상태가 베이스 클래스에 설정되지 않는다는 점에서 다른 컴포넌트와 다릅니다. 대신, 상태는 하나의 변수(예: `--bs-form-switch-bg`)를 재정의합니다.

- 플로팅 폼 레이블에 `background-color`가 추가되어 `<textarea>` 요소에 대한 지원이 수정되었습니다. 비활성화 상태 등을 지원하기 위해 추가 변경이 이루어졌습니다.

- WebKit 기반 브라우저에서 날짜 및 시간 입력 표시가 수정되었습니다.

### 유틸리티

- <span class="badge text-warning-emphasis bg-warning-subtle">지원 중단</span> `.text-muted`는 v6에서 `.text-body-secondary`로 대체됩니다.

  확장된 테마 색상과 변수가 추가됨에 따라 `.text-muted` 변수와 유틸리티는 v5.3.0에서 더 이상 사용되지 않습니다. 또한 기본값은 색상 모드를 더 잘 지원하기 위해 새로운 `--bs-secondary-color` CSS 변수로 재할당되었습니다. 이 변수는 v6.0.0에서 제거될 예정입니다.

- 새로운 `.overflow-x`, `.overflow-y` 및 여러 `.object-fit-*` 유틸리티를 추가했습니다. object-fit 속성은 `<img>` 또는 `<video>`의 크기를 컨테이너에 맞게 조정하는 방법을 지정하는 데 사용되며, 크기 조정이 가능한 채우기/맞춤 이미지에 `background-image`를 사용하는 대신 반응형 대안을 제공합니다.

- 새로운 `.fw-medium` 유틸리티를 추가합니다.

- `z-index`를 위한 새로운 [`.z-*` 유틸리티]({{< docsref "/utilities/z-index" >}})를 추가했습니다.

- [박스 그림자 유틸리티]({{< docsref "/utilities/shadows" >}})(및 Sass 변수)가 다크 모드용으로 업데이트되었습니다. 이제 `--bs-body-color-rgb`를 사용하여 `rgba()` 색상 값을 생성하므로 지정된 전경색에 따라 색상 모드에 쉽게 적응할 수 있습니다.

전체 변경 사항 목록은 [GitHub의 v5.3.0 프로젝트](https://github.com/twbs/bootstrap/projects/)를 참조하세요.

## v5.2.0

<hr class="mb-4">

### 새로워진 디자인

Bootstrap v5.2.0은 프로젝트 전반의 몇 가지 구성 요소와 속성에 대한 미묘한 디자인 업데이트, **특히 버튼과 양식 컨트롤의 `border-radius` 값을 개선한 것이 가장 큰 특징입니다**. 또한 새로운 홈페이지, 더 이상 사이드바의 섹션을 축소하지 않는 더 간단한 문서 레이아웃, [Bootstrap Icons](https://icons.getbootstrap.com)의 더 눈에 띄는 예시로 문서가 업데이트되었습니다.

### 더 많은 CSS 변수

**모든 컴포넌트가 CSS 변수를 사용하도록 업데이트되었습니다.** Sass는 여전히 모든 것을 뒷받침하지만, 각 컴포넌트 베이스 클래스(예: `.btn`)에 CSS 변수를 포함하도록 업데이트되어 Bootstrap을 더욱 실시간으로 사용자 정의할 수 있게 되었습니다. 이후 릴리스에서는 레이아웃, 폼, 헬퍼 및 유틸리티로 CSS 변수 사용을 계속 확장할 예정입니다. 각 컴포넌트의 CSS 변수에 대한 자세한 내용은 해당 문서 페이지에서 확인하세요.

Bootstrap 6까지는 CSS 변수 사용이 다소 불완전할 것입니다. 전반적으로 완벽하게 구현하고 싶지만, 변경 사항이 발생할 수 있는 위험이 있습니다. 예를 들어, 소스 코드에서 `$alert-border-width: var(--bs-border-width)`를 설정하면 어떤 이유로 `$alert-border-width * 2`를 사용하는 경우 사용자 코드에서 잠재적인 Sass가 깨질 수 있습니다.

따라서 가능한 한 더 많은 CSS 변수를 제공하기 위해 계속 노력할 것이지만, v5에서는 구현이 약간 제한될 수 있다는 점을 양해해 주시기 바랍니다.

### 새로운 `_maps.scss`

**Bootstrap v5.2.0에서는 `_maps.scss`가 포함된 새로운 Sass 파일이 도입되었습니다.** `_variables.scss`에서 여러 Sass 맵을 가져와 원본 맵의 업데이트가 이를 확장하는 보조 맵에 적용되지 않는 문제를 해결합니다. 예를 들어, `$theme-colors`에 대한 업데이트가 `$theme-colors`에 의존하는 다른 테마 맵에 적용되지 않아 주요 사용자 정의 워크플로우가 중단되었습니다. 요컨대, Sass에는 기본 변수나 맵이 한 번 _사용_되면 업데이트할 수 없다는 한계가 있습니다. 다른 CSS 변수를 구성하는 데 사용되는 CSS 변수에도 비슷한 단점이 있습니다.

그렇기 때문에 Bootstrap에서 변수 커스터마이징은 `@import "functions"` 뒤에 오는 것이 아니라 `@import "variables"`와 나머지 import 스택 앞에 와야 합니다. Sass 맵에도 동일하게 적용되며, 기본값을 재정의해야만 사용할 수 있습니다. 다음 맵은 새로운 `_maps.scss`로 이동되었습니다.

- `$theme-colors-rgb`
- `$utilities-colors`
- `$utilities-text`
- `$utilities-text-colors`
- `$utilities-bg`
- `$utilities-bg-colors`
- `$negative-spacers`
- `$gutters`

이제 별도의 맵을 가져와서 사용자 정의 Bootstrap CSS 빌드가 다음과 같이 보일 것입니다.

```diff
  // Functions come first
  @import "functions";

  // Optional variable overrides here
+ $custom-color: #df711b;
+ $custom-theme-colors: (
+   "custom": $custom-color
+ );

  // Variables come next
  @import "variables";

+ // Optional Sass map overrides here
+ $theme-colors: map-merge($theme-colors, $custom-theme-colors);
+
+ // Followed by our default maps
+ @import "maps";
+
  // Rest of our imports
  @import "mixins";
  @import "utilities";
  @import "root";
  @import "reboot";
  // etc
```

### 새 유틸리티

- [`font-weight` 유틸리티]({{< docsref "/utilities/text#font-weight-and-italics" >}})를 확장하여 세미볼드 글꼴용 `.fw-semibold`를 포함하도록 했습니다.
- [`border-radius` 유틸리티]({{< docsref "/utilities/borders#sizes" >}})를 확장하여 더 많은 옵션을 위해 두 가지 새로운 크기인 `.rounded-4`와 `.rounded-5`를 포함하도록 했습니다.

### 추가 변경 사항

- **새로운 `$enable-container-classes` 옵션. -** 이제 실험적인 CSS 그리드 레이아웃을 선택할 때 이 옵션을 `false`로 설정하지 않는 한 `.container-*` 클래스가 계속 컴파일됩니다. 이제 컨테이너도 거터 값을 유지합니다.

- **오프캔버스 컴포넌트의 [반응형 변형]({{< docsref "/components/offcanvas#responsive" >}}).** 원래의 `.offcanvas` 클래스는 변경되지 않고 모든 뷰포트에서 콘텐츠를 숨깁니다. 반응형으로 만들려면 해당 `.offcanvas` 클래스를 `.offcanvas-{sm|md|lg|xl|xxl}` 클래스로 변경하세요.

- **이제 더 두꺼운 표 구분선은 선택 사항. -** 더 두껍고 재정의하기 어려운 표 그룹 사이의 테두리를 제거하여 선택적으로 적용할 수 있는 `.table-group-divider` 클래스로 옮겼습니다. [예시는 테이블 문서를 참조하세요.]({{< docsref "/content/tables#table-group-dividers" >}})

- **스크롤스파이 옵저버 API를 사용하도록 [재작성](https://github.com/twbs/bootstrap/pull/33421)되었으므로** 더 이상 상대 부모 래퍼가 필요하지 않고, `offset` 구성이 더 이상 사용되지 않습니다. 탐색 강조 표시가 더 정확하고 일관성 있게 구현되도록 Scrollspy 구현을 살펴보세요.

- **CSS 변수를 사용하는 팝오버와 툴팁.** 일부 CSS 변수는 변수 수를 줄이기 위해 Sass에서 업데이트되었습니다. 그 결과 이번 릴리스에서는 `$popover-arrow-color`, `$popover-arrow-outer-color`, `$tooltip-arrow-color` 변수가 더 이상 사용되지 않습니다.

- **새로운 `.text-bg-{color}` 도우미.** 이제 개별 `.text-*` 및 `.bg-*` 유틸리티를 설정하는 대신 [`.text-bg-*` 헬퍼]({{< docsref "helpers/color-background" >}})를 사용하여 전경 `색`과 대비되는 `배경-색`을 설정할 수 있습니다.

- 레이블과 관련 체크박스/라디오의 순서를 뒤집을 수 있는 `.form-check-reverse` 수정자를 추가했습니다.

- 새로운 `.table-striped-columns` 클래스를 통해 [줄무늬 열]({{< docsref "/content/tables#striped-columns" >}}) 지원을 표에 추가했습니다.

전체 변경사항 목록은 [GitHub의 v5.2.0 프로젝트](https://github.com/twbs/bootstrap/projects/32)를 참조하세요.

## v5.1.0

<hr class="mb-4">

- **[CSS 그리드 레이아웃]({{< docsref "/layout/css-grid" >}})에 대한 실험적 지원 추가. -** 이 기능은 진행 중인 작업으로 아직 프로덕션용으로 사용할 준비가 되지 않았지만 Sass를 통해 새 기능을 선택할 수 있습니다. 이 기능을 사용하려면 `$enable-grid-classes: false`를 설정하여 기본 그리드를 비활성화하고 `$enable-cssgrid: true`를 설정하여 CSS 그리드를 활성화하세요.

- **오프캔버스를 지원하는 내비게이션 바. -** 반응형 `navbar-expand-*` 클래스와 일부 오프캔버스 마크업으로 [모든 탐색바에 오프캔버스 서랍]({{< docsref "/components/navbar#offcanvas" >}})을 추가해보세요.

- **새로운 [플레이스홀더 컴포넌트]({{< docsref "/components/placeholders/" >}}). -** 사이트나 앱에서 무언가가 아직 로드 중임을 표시하기 위해 실제 콘텐츠 대신 임시 블록을 제공하는 최신 컴포넌트입니다.

- **[수평 콜랩스]({{< docsref "/components/collapse#horizontal" >}}). -** '.collapse'에 `.collapse-horizontal`을 추가하면 `height` 대신 `width`를 축소할 수 있습니다. `min-width` 또는 `height`를 설정하여 브라우저가 다시 칠하는 것을 방지하세요.

- **새로운 스택 및 수직 규칙 헬퍼. -** [스택]({{< docsref "/helpers/stacks/" >}})으로 여러 플렉스박스 속성을 빠르게 적용하여 사용자 지정 레이아웃을 빠르게 만들 수 있습니다. 가로(`.hstack`) 및 세로(`.vstack`) 스택 중에서 선택하세요. [새로운 `.vr` 도우미]({{< docsref "/helpers/vertical-rule/" >}})로 `<hr>` 요소와 유사한 세로 구분자 추가하세요.

- **새로운 전역 `:root` CSS 변수. -** `<body>` 스타일을 제어하기 위해 `:root` 레벨에 몇 가지 새로운 CSS 변수를 추가했습니다. 유틸리티와 컴포넌트 전반을 포함해 더 많은 기능이 추가될 예정이지만 지금은 [사용자 정의 섹션의 CSS 변수]({{< docsref "/customize/css-variables/" >}})를 읽어보세요.

- **CSS 변수를 사용하도록 변경된 색상 및 배경 유틸리티, 새로운 [텍스트 불투명도]({{< docsref "/utilities/text#opacity" >}}) 및 [배경 불투명도]({{< docsref "/utilities/background#opacity" >}}) 유틸리티. -** 이제 `.text-*` 및 `.bg-*` 유틸리티는 CSS 변수와 `rgba()` 색상 값으로 빌드되므로 새로운 불투명도 유틸리티로 모든 유틸리티를 쉽게 사용자 정의할 수 있습니다.

- **컴포넌트를 사용자 정의하는 방법을 보여주는 새로운 스니펫 예제. -** 새로운 [스니펫 예시]({{< docsref "/examples#snippets" >}})를 통해 사용자 정의 컴포넌트 및 기타 일반적인 디자인 패턴을 사용할 준비를 마쳤습니다. [바닥글]({{< docsref "/examples/footers/" >}}), [드롭다운]({{< docsref "/examples/dropdowns/" >}}), [목록 그룹]({{< docsref "/examples/list-groups/" >}}), [모달]({{< docsref "/examples/modals/" >}})을 포함합니다.

- **팝오버와 툴팁**에서 Popper에서 처리하기 전부터 있던 위치 지정 스타일을 제거했습니다. `$tooltip-margin`은 더 이상 사용되지 않으며 이 과정에서 `null`로 설정되었습니다.

더 자세한 정보를 원하시나요? [v5.1.0 블로그 게시물을 참조하세요](https://blog.getbootstrap.com/2021/08/04/bootstrap-5-1-0/).

## v5.0.0

<hr class="mb-4">

{{< callout info >}}
**안녕하세요!** Bootstrap 5의 첫 번째 주요 릴리스인 v5.0.0의 변경 사항은 아래에 설명되어 있습니다. 위에 표시된 추가 변경사항은 반영되지 않았습니다.
{{< /callout >}}

### 의존성

- 더 이상 jQuery를 사용하지 않음.
- Popper v1.x에서 Popper v2.x로 업그레이드.
- Libsass가 권장되지 않아 Dart Sass로 Sass 컴파일러 변경.
- 문서 작성을 위해 Jekyll에서 Hugo로 이동.

### 브라우저 지원

- Internet Explorer 10 및 11 지원 종료
- Microsoft Edge 16 미만 (Legacy Edge) 지원 종료
- Firefox 60 미만 지원 종료
- Safari 12 미만 지원 종료
- iOS Safari 12 미만 지원 종료
- Chrome 60 미만 지원 종료

<hr class="my-5">

### 문서 변경사항

- 첫페이지, 문서 레이아웃과 하단의 디자인 변경.
- [new Parcel guide]({{< docsref "/customize/overview" >}}) 추가.
- [new Customize section]({{< docsref "/customize/overview" >}}) 추가하고, [v4's Theming page](https://getbootstrap.com/docs/4.6/getting-started/theming/) 대체하여, Sass, 글로벌 설정 옵션, 색상 조합, CSS 변수 등의 세부사항 추가.
- 모든 폼 문서를 [new Forms section]({{< docsref "/forms/overview" >}})으로 재편성하여 콘텐츠를 좀 더 집중적인 페이지로 재편성.
- 마찬가지로, 그리드 콘텐츠를 더욱 명확하게 정리하여 [the Layout section]({{< docsref "/layout/breakpoints" >}}) 업데이트.
- "Navs" 컴포넌트 페이지가 "Navs & Tabs"로 변경.
- "Checks" 페이지가 "Checks & radios"로 변경.
- 사이트와 문서 버전의 이동을 손쉽게 하기 위해 navbar의 디자인을 변경하고 새로운 subnav를 추가.
- 검색에 새로운 키보드 단축키를 추가: <kbd>Ctrl + /</kbd>.

### Sass

- 중복된 값을 쉽게 삭제할 수 있도록 기본 Sass 맵의 병합을 폐지하였습니다. 앞으로는 `$theme-colors`과 같은 모든 값을 Sass 맵에서 정의해야 합니다. 자세한 내용은 [Sass 맵]({{< docsref "/customize/sass#maps-and-loops" >}})를 참조해 주세요.

- <span class="badge text-bg-danger">중요 변경사항</span> YIQ 색공간과 관련 없어졌기 때문에 `color-yiq()` 함수와 그에 관련된 변수들을 `color-contrast()`로 변경하였습니다. [#30168을 확인해주세요.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold`는 `$min-contrast-ratio`로 변경.
  - `$yiq-text-dark`와 `$yiq-text-light`는 각각 `$color-contrast-dark`와 `$color-contrast-light`로 변경.

- <span class="badge text-bg-danger">중요 변경사항</span> Media query mixins parameters have changed for a more logical approach.
  - `media-breakpoint-down()` uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-down(lg)` instead of `media-breakpoint-down(md)` targets viewports smaller than `lg`).
  - Similarly, the second parameter in `media-breakpoint-between()` also uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-between(sm, lg)` instead of `media-breakpoint-between(sm, md)` targets viewports between `sm` and `lg`).

- <span class="badge text-bg-danger">중요 변경사항</span> 인쇄 클래스와 `$enable-print-styles` 변수를 삭제하였습니다. 인쇄 표시 클래스는 아직 남아 있습니다. [#28339](https://github.com/twbs/bootstrap/pull/28339).

- <span class="badge text-bg-danger">중요 변경사항</span> `color()`, `theme-color()`, 그리고 `gray()`의 함수를 폐지하고 변수를 사용하도록 하였습니다.[#29083](https://github.com/twbs/bootstrap/pull/29083).

- <span class="badge text-bg-danger">중요 변경사항</span> `theme-color-level()` 함수를 `color-level()`로 변경하고, `$theme-color`의 색상뿐만 아니라 임의의 색을 받을수 있게 변경하였습니다. [#29083](https://github.com/twbs/bootstrap/pull/29083) **주의:** `v5.0.0-alpha3` 이후 `color-level()`은 삭제되었습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 간결하게 하기 위해서 `$enable-prefers-reduced-motion-media-query`와 `$enable-pointer-cursor-for-buttons`의 이름을 `$enable-reduced-motion`과 `$enable-button-pointers`로 변경하였습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 믹스인 `bg-gradient-variant()`를 삭제 하였습니다. 요소에 그라데이션을 추가하기 위해 사용한 `.bg-gradient-*` 클래스 대신에 `.bg-gradient` 클래스를 사용해 주세요.

- <span class="badge text-bg-danger">중요 변경사항</span> **더 이상 사용되지 않는 믹스인 삭제:**
  - `hover`, `hover-focus`, `plain-hover-focus`, 그리고 `hover-focus-active`
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (관련 유틸리티 클래스인`.text-hide`도 함께 삭제)
  - `visibility()`
  - `form-control-focus()`

- <span class="badge text-bg-danger">중요 변경사항</span> Sass 자신의 컬러 스케일링 기능과 충돌을 피해기 위해 `scale-color()` 함수명을 `shift-color()`로 변경하였습니다.

- `box-shadow` 믹스인에서 `null` 값을 허용하고 많은 인수에서 `none`을 삭제 하였습니다. [#30394](https://github.com/twbs/bootstrap/pull/30394).

- `border-radius()` 믹스인에 기본 값이 설정 되었습니다.

### 색상 시스템

- `color-level()`과 `$theme-color-interval`로 동작하던 컬러 시스템이 삭제되고 새로운 컬러 시스템이 채택 되었습니다. 기본적으로 모든 코드에 사용된 `lighten()`과 `darken()` 함수는 `tint-color()`와 `shade-color()`로 대체 되었습니다. 이 함수는 색의 명도를 일정량 변경하는 대신, 그 색에 흰색이나 검은색을 혼합 합니다. `shift-color()`는 양수 혹은 음수의 weight 매개 변수에 따라 색상을 바꾸거나 음영을 주기도 합니다. [#30622](https://github.com/twbs/bootstrap/pull/30622).

- 새로운 Sass 변수로서, 모든 색상에 새로운 색조와 음영을 추가해 각 기본 색상에 9개의 별도 색상을 제공합니다.

- 색상 대비(color contrast)를 개선하였습니다. 색상 대비 비율을 3:1에서 4.5:1로 변경하고 WCAG 2.2 AA contrast를 확보하기 위해 blue, green, cyan, pink 색상을 수정하였습니다. 그리고 색상 대비에서 사용하는 어두운 색($color-contrast-dark)을 `$gray-900`에서 `$black`으로 변경하였습니다.

- 색상을 적절하게 혼합한 새로운 사용자 정의 `tint-color()`와 `shade-color()` 함수를 사용해 컬러 시스템을 지원합니다.

### 그리드 업데이트

- **새로운 중단점!** `1400px` 이상의 경우, 새로운 `xxl` 중단점를 추가. 다른 중단점는 변경 없이 그대로.

- **개선된 거터.** 거터는 rem 단위로 설정되어, v4 보다 좁아졌습니다 (`1.5rem`, 혹은 약 `24px`, `30px`에서 감소). 이로 그리드 시스템의 거터가 여백 유틸리티와 일치 되었습니다.
  - 수평/수직 거터, 수평 거터, 그리고 수직 거터를 제어하는 새로운 [gutter class]({{< docsref "/layout/gutters" >}})(`.g-*`, `.gx-*`, 그리고 `.gy-*`)가 추가 되었습니다.
  - <span class="badge text-bg-danger">중요 변경사항</span> 새로운 거터 클래스에 맞춰 기존의 `.no-gutters` 클래스 이름이 `.g-0`으로 변경 되었습니다.

- 컬럼은 더 이상 `position: relative`가 적용되지 않기 때문에 필요에 따라 해당 동작을 위해 요소에 `.position-relative` 클래스를 추가해 사용할 필요가 있습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 자주 사용되지 않는 몇몇 `.order-*` 클래스를 삭제하였습니다. 현재는 `.order-0` 부터 `.order-5`까지의 클래스만 제공하고 있습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 유틸리티로 쉽게 복제 할 수 있는 `.media` 클래스를 삭제 하였습니다. [#28265](https://github.com/twbs/bootstrap/pull/28265)와 [flex utilities page for an example]({{< docsref "/utilities/flex#media-object" >}})을 참조해 주세요.

- <span class="badge text-bg-danger">중요 변경사항</span> 이제 `bootstrap-grid.css`에서는 global box-sizing을 리셋하는 대신, `box-sizing: border-box`만 적용합니다. 그렇게 함으로써 그리드 스타일을 더 많은 곳에서 간섭 없이 사용할 수 있습니다.

- `$enable-grid-classes`에서는 컨테이너 클래스의 생성을 비활성화 시키지 않습니다. [#29146.](https://github.com/twbs/bootstrap/pull/29146)

- 크기를 지정하지 않아도 기본적으로 균등한 열이 되도록 `make-col` 믹스인을 업데이드 하였습니다.

### 콘텐츠, Reboot 등

- **[RFS]({{< docsref "/getting-started/rfs" >}})가 기본으로 활성화 되었습니다.** Headings using the `font-size()` 믹스인을 사용한 제목은 뷰포트에 맞추어 자동적으로 `font-size`를 조정합니다. _이 기능은 이전에 v4에서 opt-in 이었습니다._

- <span class="badge text-bg-danger">중요 변경사항</span> `$display-*` 변수를 바꾸기 위해 디스플레이 타이포그래피를 정비하고 `$display-font-sizes` Sass 맵을 사용합니다. 또한 `$display-*-weight` 변수를 삭제하고 단일 `$display-font-weight`로 변경하여 글꼴의 크기를 조정했습니다.

- 새로운 `.display-*` 크기로, `.display-5`와 `.display-6`를 추가했습니다.

- 특정 컴포넌트의 일부가 아닌 한 (호버 뿐만 아니라)**기본 링크에 밑줄 추가**

- 스타일을 새롭게 고치기 위해 **테이블 디자인이 변경**되고 CSS 변수를 사용하여 스타일을 보다 효과적으로 제어 할 수 있도록 재구성되었습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 중첩된 테이블이 스타일을 상속받지 않게 되었습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `.thead-light`과 `.thead-dark`은 삭제되고, 모든 테이블 요소(`thead`, `tbody`, `tfoot`, `tr`, `th`, `td`)에 사용할 수 있는 `.table-*` 변형 클래스로 변경되었습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `table-row-variant()` 믹스인은 `table-variant()`으로 이름이 변경되며 2개의 매개 변수 `$color` (colon name)와 `$value` (color code)만 받습니다. 보더 컬러와 엑센트 컬러는 테이블 인자 변수에 따라 자동으로 계산됩니다.

- 테이블 셀의 패딩 변수를 `-y`와 `-x`로 분할 했습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `.pre-scrollable` 클래스 삭제. [#29135](https://github.com/twbs/bootstrap/pull/29135)

- <span class="badge text-bg-danger">중요 변경사항</span> `.text-*` 유틸리티는 링크에 호버와 포커스 상태를 추가하지 않습니다. 대신 `.link-*` 도우미 클래스를 사용할 수 있습니다.[#29267](https://github.com/twbs/bootstrap/pull/29267)

- <span class="badge text-bg-danger">중요 변경사항</span> `.text-justify` 클래스 삭제. [#29793](https://github.com/twbs/bootstrap/pull/29793)

- <span class="badge text-bg-danger">중요 변경사항</span> ~~`<hr>` elements now use `height` instead of `border` to better support the `size` attribute. This also enables use of padding utilities to create thicker dividers (e.g., `<hr class="py-1">`).~~

- `<ul>`과 `<ol>` 요소의 수평 방항에 설정된 `padding-left`를 브라우저의 기본 `40px`에서 `2rem`으로 변경.

- `prefers-reduced-motion` 미디어 쿼리를 통해 움직임을 억제하는 사용자를 제외하고 글로벌하게 `scroll-behavior: smooth`를 적용하는 `$enable-smooth-scroll`를 추가. [#31877](https://github.com/twbs/bootstrap/pull/31877)

### RTL

- 수평 방항으로 특화된 변수, 유틸리티 그리고 믹스인의 이름이 플레스 박스의 레이아웃에서 볼수 있는 - 예를 들어, `left` 와 `right` 대신에 `start`와 `end`과 같이 - 논리적인 속성으로 변경되었습니다.

### 폼

- **새로운 플로팅 폼 추가!** 플로팅 라벨의 예시를 완전히 지원되는 폼 컴포넌트로 승격시켰습니다. [새로운 플로팅 라벨 페이지 확인하러 가기]({{< docsref "/forms/floating-labels" >}})

- <span class="badge text-bg-danger">중요 변경사항</span> **네비티브와 사용자 정의 폼 요소의 통합.** 체크박스, 라디오 버튼, 셀렉트등 v4에서 네이티브와 사용자 정의 클래스를 가지고 있던 입력 요소들이 통합되었습니다. 이를 통해 모든 폼 요소가 완전히 커스텀화 되었고, 그 대부분이 사용자 정의 HTML을 필요로 하지 않게 되었습니다.
  - `.custom-control.custom-checkbox`는 `.form-check`로 변경.
  - `.custom-control.custom-custom-radio`는 `.form-check`로 변경.
  - `.custom-control.custom-switch`는 `.form-check.form-switch`로 변경.
  - `.custom-select`는 `.form-select`로 변경.
  - `.custom-file`과 `.form-file`은 `.form-control` 위에 사용자 정의 스타일로 변경.
  - `.custom-range`는 `.form-range`로 변경.
  - 네이티브 `.form-control-file`과 `.form-control-range`는 삭제.

- <span class="badge text-bg-danger">중요 변경사항</span> `.input-group-append`와 `.input-group-prepend`는 삭제. 입력 그룹의 직접 자식 요소로서 버튼과 `.input-group-text`를 추가할 수 있게 되었습니다.

- 오랫동안 지속 되었던 [유효성 검사를 사용할때 입력 그룹에서 반원 경계선이 누락되는 버그](https://github.com/twbs/bootstrap/issues/25110)는 유효성 검사 폼에 포함된 입력 그룹에 `.has-validation` 클래스를 추가하는 것으로 겨우 수정 되었습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> **그리드 시스템을 위한 폼 고유의 레이아웃 클래스 삭제.** `.form-group`, `.form-row`, `.form-inline` 대신 그리드와 유틸리티를 사용해 주세요.

- <span class="badge text-bg-danger">중요 변경사항</span> 폼 레벨에는 `.form-label`이 필요합니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `.form-text`는 삭제되어 `display` 되지 않으므로, HTML 요소를 변경하는 것으로 인라인 혹은 블록 도움말 텍스트를 자유롭게 만들 수 있습니다.

- Form controls no longer used fixed `height` when possible, instead deferring to `min-height` to improve customization and compatibility with other components.

- 유효성 검증 아이콘은 더 이상 `multiple<select>`에 적용되지 않습니다.

- 입력 그룹 스타일을 포함하여, `scss/forms/` 아래의 Sass 파일을 재배치 하였습니다.

<hr class="my-5">

### 컴포넌트

- 경고창, 브레드크럼, 카드, 드롭다운, 목록 그룹, 모달, 팝오버 그리고 툴팁의 `padding` 값을 `$spacer` 변수를 기반으로 통일. [#30564](https://github.com/twbs/bootstrap/pull/30564).

#### 아코디언

- [새로운 아코디언 컴포넌트]({{< docsref "/components/accordion" >}}) 추가.

#### 경고창

- 경고창에 [아이콘 사용한 예시]({{< docsref "/components/alerts#icons" >}})를 추가.

- 각 경고창에서 `currentColor`를 사용하게 되어 `<hr>` 사용자 정의 스타일은 삭제.

#### 배지

- <span class="badge text-bg-danger">중요 변경사항</span> 배경 유틸리티의 모든 `.badge-*` 색상 클래스 삭제 (예를 들어, `.badge-primary` 대신 `.bg-primary` 사용).

- <span class="badge text-bg-danger">중요 변경사항</span> `.badge-pill` 삭제 — 대신`.rounded-pill` 유틸리티를 사용해 주세요.

- <span class="badge text-bg-danger">중요 변경사항</span> `<a>`와 `<button>` 요소에 호버와 포커스 스타일 삭제.

- 배지의 기본 패딩을`.25em`/`.5em`에서 `.35em`/`.65em`으로 변경.

#### 브레드크럼

- `padding`, `background-color`, 그리고 `border-radius`를 제거하여 브레드크럼의 기본 모양을 단순화했습니다.

- CSS를 다시 컴파일할 필요 없이 쉽게 재정의 할 수 있도록 새로운 CSS 사용자 정의 속성인 `--bs-breadcrumb-divider`를 추가했습니다.

#### 버튼

- <span class="badge text-bg-danger">중요 변경사항</span> **체크 박스나 라디오 버튼에 있는 [토글 버튼]({{< docsref "/forms/checks-radios#toggle-buttons" >}})은, JavaScript가 필요없는 새로운 마크업을 채용하고 있습니다.** 더 이상 감싸는 요소는 필요하지 않고, 바로 `<input>`에 `.btn-check`를 추가해 `.btn` 클래스의 `<label>`과 조합 합니다. [#30650](https://github.com/twbs/bootstrap/pull/30650). _이 건에 관한 문서는 버튼 페이지에서 폼 섹션으로 이동하였습니다._

- <span class="badge text-bg-danger">중요 변경사항</span> **유틸리티용 `.btn-block`를 삭제.** `.btn`에 `.btn-block`을 사용하는 대신에, 버튼을 `.d-grid`와 `.gap-*` 유틸리티로 감싸고 필요에 따라 여백을 위한 클래스를 사용합니다. 보다 강력한 컨트롤을 위해 반응형 클래스로 전환 합니다. [몇 가지 예시에 대해서는 문서를 참조해 주세요]({{< docsref "/components/buttons#block-buttons" >}})

- 추가 매개 변수를 지원하기 위해 `button-variant()`와 `button-outline-variant()` 믹스인을 업데이트 했습니다.

- 호버와 액티브한 상태의 대비가 증가하도록 버튼을 업데이트 했습니다.

- 비활성화 버튼은 `pointer-events: none;` 되었습니다.

#### 카드

- <span class="badge text-bg-danger">중요 변경사항</span> 그리드에 유리하게 `.card-deck`을 삭제. card decks 재현을 위해 부모에 `.row-cols-*` 컨테이너를 추가하고 카드를 column 클래스로 감쌉니다. (반응형 정렬을 보다 효과적으로 제어할 수 있습니다).

- <span class="badge text-bg-danger">중요 변경사항</span> 조적식(Masonry) 레이아웃에 유리하도록 `.card-columns` 삭제. [#28922](https://github.com/twbs/bootstrap/pull/28922).

- <span class="badge text-bg-danger">중요 변경사항</span> `.card` 기반의 아코디언을 [새로운 아코디언 컴포넌트]({{< docsref "/components/accordion" >}})로 교체히였습니다.

#### 캐러셀

- 진한 텍스트, 컨트롤과 기호(밝은 배경에 최적) 표시를 위해 [`.carousel-dark`]({{< docsref "/components/carousel#dark-variant" >}})가 추가되었습니다.

- 캐러셀의 chevron 아이콘을 [Bootstrap Icons]({{< param "icons" >}})의 새로운 SVG로 대체하였습니다.

#### 닫기 버튼

- <span class="badge text-bg-danger">중요 변경사항</span> `.close`에서 보다 일반적인 이름인 `.btn-close`으로 변경되었습니다.

- 닫기 버튼은 HTML 내의 `&times;` 대신에 `background-image`(embedded SVG)를 사용하게 되어 마크업 변경없이 손쉽게 재정의 할 수 있게 되었습니다.

- 어두운 배경에서 고대비 닫기 아이콘을 활성화하려고 `filter: invert(1)`를 사용한 새로운 `.btn-close-white` 변형 클래스가 추가되었습니다.

#### 콜랩스

- 아코디언에 스크롤 고정 장치가 삭제 되었습니다.

#### 드롭다운

- 어두운 드롭다운을 위해 새로운 `.dropdown-menu-dark` 변형 클래스와 관련된 변수를 추가하였습니다.

- 새로운 `$dropdown-padding-x` 변수를 추가하였습니다.

- 드롭다운의 구분자를 진하게 해 색상 대비를 개선하였습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 드롭다운의 모든 이벤트는 드롭다운 토글 버튼으로 트리거 되어 이후 부모 요소에 버블링 됩니다.

- 드롭다운 메뉴에는 위치가 정적일때 또는 내비게이션 바에 있을 때에는 `data-bs-popper="static"` 속성이 설정됩니다. 이것은 JavaScript를 통해 추가되며 Popper의 배치에 간섭하지 않고 사용자 정의 위치 스타일을 사용하는데 도움이 됩니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 드롭다운 플러그인에 대한 `flip` 옵션을 삭제하고 Popper의 네이티브 설정으로 변경되었습니다. [flip](https://popper.js.org/docs/v2/modifiers/flip/) 제어자의 [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)의 빈 배열을 통해서 플립 동작을 비활성화 할 수 있습니다.

- 드롭다운 메뉴는 새로운 `autoClose` 옵션을 추가해 [자동 닫기 동작]({{< docsref "/components/dropdowns#auto-close-behavior" >}})을 처리하게 되었습니다. 이 옵션을 사용하면 드롭다운 메뉴의 안쪽 또는 바깥쪽에서 클릭을 받아 상호적인 메뉴를 만들 수 있습니다.

- 드롭다운이 이제 `<li>`에 싸여진 `.dropdown-item`를 지원합니다.

#### 점보트론

- <span class="badge text-bg-danger">중요 변경사항</span> 유틸리티로 만들수 있기 때문에 점보트론 컴포넌트는 삭제되었습니다. [데모로 새로운 점보트론의 사용을 확인해 주세요.]({{< docsref "/examples/jumbotron" >}})

#### 목록 그룹

- 목록 그룹에 새로운 [`.list-group-numbered` 제어자 클래스]({{< docsref "/components/list-group#numbered" >}})가 추가되었습니다.

#### 내비게이션과 탭

- `.nav-link` 클래스에 `font-size`, `font-weight`, `color`, `:hover` `color`에 대한 새로운 변수 `null`을 추가했습니다.

#### 내비게이션 바

- <span class="badge text-bg-danger">중요 변경사항</span> Navbars now require a container within (to drastically simplify spacing requirements and CSS required).
- <span class="badge text-bg-danger">중요 변경사항</span> 내비게이션 바는 컨테이너가 필요하게 되어 간격 요건이나 필요한 CSS가 대폭 간소화되었습니다.

#### 오프캔버스

- 새로운 [오프캔버스 컴포넌트]({{< docsref "/components/offcanvas" >}})가 추가되었습니다.

#### 페이지네이션

- 페이지네이션 링크의 `margin-left`를 재정의할 수 있게 되어, 떨어져 있을 때 모든 모서리가 다이내믹하게 둥글어지게 되었습니다.

- 페이지네이션 링크에 `트랜지션`을 추가하였습니다.

#### 팝오버

- <span class="badge text-bg-danger">중요 변경사항</span> 기본 팝오버 템플릿의 `.arrow` 이름을 `.popover-arrow`로 변경하였습니다.

- `whiteList` 옵션명을 `allowList`로 변경하였습니다.

#### 스피너

- 스피너의 애니메이션의 속도를 줄임으로써 `prefers-reduced-motion: reduce`를 존중하게 되었습니다. [#31882](https://github.com/twbs/bootstrap/pull/31882).

- 스피너의 수직 방향 배치를 개선하였습니다.

#### 토스트

- [위치 지정 유틸리티]({{< docsref "/utilities/position" >}})를 사용하여 `.toast-container` 안의 토스트를 [배치]({{< docsref "/components/toasts#placement" >}})시킬 수 있게 되었습니다.

- 기본 토스트의 지속 시간을 5초로 변경하였습니다.

- 토스트에서 `overflow: hidden`을 삭제하고 `calc()` 함수로 적절한 `border-radius`를 대체하였습니다.

#### 툴팁

- <span class="badge text-bg-danger">중요 변경사항</span> 기본 툴팁 템플렛에서 `.arrow` 이름을 `.tooltip-arrow`으로 변경하였습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `fallbackPlacements`의 기본 값이 `['top', 'right', 'bottom', 'left']`으로 popper 요소의 배치가 개선되었습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `whiteList` 옵션명이 `allowList`로 변경되었습니다.

### 유틸리티

- <span class="badge text-bg-danger">중요 변경사항</span> RTL 지원이 추가됨에 따라 방향적인 이름 대신 논리적인 속성명으로 여러 유틸리티의 이름이 변경되었습니다:
  - `.left-*`와 `.right-*`에서 `.start-*`와 `.end-*`로 변경.
  - `.float-left`와 `.float-right`에서 `.float-start`와 `.float-end`로 변경.
  - `.border-left`와 `.border-right`에서 `.border-start`와 `.border-end`로 변경.
  - `.rounded-left`와 `.rounded-right`에서 `.rounded-start`와 `.rounded-end`로 변경.
  -`.ml-*`과 `.mr-*`에서 `.ms-*`와 `.me-*`로 변경.
  - `.pl-*`과 `.pr-*`에서 `.ps-*`와 `.pe-*`로 변경.
  - `.text-left`와 `.text-right`에서 `.text-start`와 `.text-end`로 변경.

- <span class="badge text-bg-danger">중요 변경사항</span> 기본적으로 음수 마진을 비활성화.

- `<body>`의 배경을 추가적인 요소로 빠르게 설정하기 위해 새롭게 `.bg-body` 클래스를 추가하였습니다.

- `top`, `right`, `bottom`, `left` 표시를 위해 새로운 [위치 유틸리티]({{< docsref "/utilities/position#arrange-elements" >}})를 추가하였습니다. 값으로는 `0`, `50%`, `100%`가 있습니다.

- 새로운 `.translate-middle-x`와 `.translate-middle-y` 유틸리티를 추가하였습니다. 이 유틸리티는 absolute/fixed에 배치된 요소들을 수평 혹은 수직 방향에서 중앙에 오게 합니다.

- 새로운 [`border-width` 유틸리티]({{< docsref "/utilities/borders#border-width" >}})를 추가하였습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `.text-monospace` 클래스명이 `.font-monospace`으로 변경되었습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 텍스트를 숨기기 위한 시대 착오적인 방법으로 더 이상 사용되서는 안되는 `.text-hide`를 삭제하였습니다.

- `font-size` 유틸리티를 위한 `.fs-*` 유틸리티를 추가하였습니다. (RFS 사용). 이들은 HTML의 기본 제목과 동일한 크기(1-6, large ~ small)를 사용하고 있으며 Sass 맵에서 변경할 수 있습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `.font-weight-*` 유틸리티를 간결함과 일관성을 위해 `.fw-*`로 변경하였습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> Renamed `.font-italic` utility to `.fst-italic` for brevity and consistency with new `.fst-normal` utility.

- CSS 그리드와 flexbox 레이아웃용 표시를 위한 `.d-grid` 유틸리티와 새로운 `gap` 유틸리티(`.gap`)를 추가하였습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> `.rounded-sm`과 `rounded-lg`를 삭제하고, 스케일로서 새로운 클래스 `.rounded-0`부터 `.rounded-3`을 도입하였습니다. [#31687](https://github.com/twbs/bootstrap/pull/31687).

- 새로운 `line-height` 유틸리티를 추가하였습니다: `.lh-1`, `.lh-sm`, `.lh-base`와 `.lh-lg`. [자세히 보기]({{< docsref "/utilities/text#line-height" >}}).

- 다른 표시 유틸리티보다 더 비중을 두기 위해 CSS에 있는 `.d-none` 유틸리티를 이동 시켰습니다.

- 컨테이너 작업에도 사용할 수 있도록 `.visually-hidden-focusable` 도우미를 `:focus-within`로 확장하였습니다.

## 도우미

- <span class="badge text-bg-danger">중요 변경사항</span> 더욱 편리한 CSS 변수 추가로 동작이 개선된 **Responsive embed가 [ratio 도우미]({{< docsref "/helpers/ratio" >}})** 로 이름이 변경되었습니다.
  - 비율을 나타내는 클래스가 `by`에서 `x`로 이름이 변경되었습니다. 예를 들어, `.ratio-16by9`는 `.ratio-16x9`가 되었습니다.
  - `.embed-responsive-item`과 요소 그룹 셀렉터를 삭제하여 더욱 단순한 `.ratio > *` 셀렉터로 변경되었습니다. 이로써 클래스는 불필요해 졌고, 비율 도우미는 어떠한 HTML 요소로도 사용 가능해졌습니다.
  - `$embed-responsive-aspect-ratios`의 Sass 맵은 `$aspect-ratios`로 이름이 변경되었고, 그 값은 클래스 이름과 퍼센티지를 `key: value` 값으로 포함하도록 간소화되었습니다.
  - Sass 맵의 각 값에 CSS 변수가 생성되어 포함되었습니다. `.ratio`의 `--bs-aspect-ratio` 변수를 수정하여 임의의 [사용자 정의 비율]({{< docsref "/helpers/ratio#custom-ratios" >}})을 만듭니다.

- <span class="badge text-bg-danger">중요 변경사항</span> **"Screen reader" 클래스는 ["visually hidden"]({{< docsref "/helpers/visually-hidden" >}})이 되었습니다.**
  - `scss/helpers/_screenreaders.scss`에서 `scss/helpers/_visually-hidden.scss`로 Sass 파일이 변경되었습니다.
  - `.sr-only`와 `.sr-only-focusable`에서 `.visually-hidden`과 `.visually-hidden-focusable`로 변경되었습니다.
  - `sr-only()`와 `sr-only-focusable()`믹스인은 `visually-hidden()`과 `visually-hidden-focusable()`로 변경되었습니다.

- `bootstrap-utilities.css` 안에 도우미가 포함되어 있습니다. 도우미는 더 이상 사용자 정의 빌드로 따로 포함할 필요가 없습니다.

### JavaScript

- **jQuery에 대한 의존을 중단**하고 플러그인을 통상적인 JavaScript로 다시 썼습니다.

- <span class="badge text-bg-danger">중요 변경사항</span> 모든 JavaScript 플러그인의 데이터 속성은 제삼자의 코드와 자체 코드에서 Bootstrap의 기능을 구별하는 데 도움이 되도록 이름을 붙이고 있습니다. 예를 들어 `data-toggle` 대신 `data-bs-toggle`을 사용합니다.

- **모든 클러그인은 첫번째 인수로서 CSS 셀렉터를 받아들일 수 있게 되었습니다.** 플러그인의 새로운 인스턴스를 작성하기 위해 DOM 요소 또는 임의의 CSS 셀렉터를 전달할 수 있습니다. :

  ```js
  const modal = new bootstrap.Modal('#myModal')
  const dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
  ```

- `popperConfig`는 Bootstrap 기본 Popper 설정을 인수로 하는 함수로 전달할 수 있으며, 이 기본 설정을 내 방식대로 병합할 수 있습니다. **드롭다운, 팝오버, 툴팁에 적용됩니다.**

- 팝오버 요소의 보다 나은 배치를 위해 `fallbackPlacements` 기본값이 `['top', 'right', 'bottom', 'left']`로 변경되었습니다. **드롭다운, 팝오버, 툴팁에 적용됩니다.**

- `_getInstance()` → `getInstance()`와 같이 공공의 정적 메소드에서 밑줄표시 삭제하였습니다.

- `util.js`를 제거했으며, 이제 해당 기능이 개별 플러그인에 통합되었습니다. 이전에 `util.js`를 수동으로 포함했다면 더 이상 필요하지 않으므로 안전하게 제거할 수 있습니다. 각 플러그인은 이제 필요한 유틸리티만 포함하므로 모듈성이 향상되고 종속성이 줄어듭니다.
