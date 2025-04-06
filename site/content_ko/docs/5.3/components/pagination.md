---
layout: docs
title: 페이지네이션
description: 여러 페이지에 일련의 관련 내용이 있음을 나타내는 페이지네이션을 사용한 문서와 예시입니다.
group: components
toc: true
---

## 개요

페이지네이션은 큰 블록의 링크를 사용하고 있어서, 넓은 클릭 영역을 제공하면서 쉽게 확장할 수 있습니다. 목록의 HTML 요소로 구성되며 스크린 리더는 이용 가능한 링크의 수를 알려줄 수 있습니다. `<nav>` 요소를 사용해, 그것을 스크린 리더나 기타 지원 기술에서 내비게이션 영역으로서 식별합니다.

게다가 페이지에는 여러 개의 내비게이션 영역이 있을 가능성이 높기 때문에, 그 목적을 반영하기 위해서 `<nav>`에 `aria-label`을 붙히는 것을 권장합니다. 예를 들어 페이지네이션 컴포넌트를 사용해 일련의 검색 결과 사이를 이동하는 경우 적절한 라벨은 `aria-label="Search results pages"`가 됩니다.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
{{< /example >}}

## 아이콘 사용하기

Looking to use an icon or symbol in place of text for some pagination links? 페이지네이션 링크에 텍스트 대신 아이콘이나 심벌을 사용하고 싶다면, `aria` 속성을 사용하여 스크린 리더를 적절히 지원하도록 하세요.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
{{< /example >}}

## 비활성화 및 활성화 상태

페이지네이션 링크는 다양한 상황에 따라 재정의할 수 있습니다. 클릭할 수 없는 링크에는 `.disabled`를, 현재의 페이지에는 `.active`를 사용합니다.

`.disabled` 클래스는 `pointer-events: none`를 사용하여 `<a>`의 링크 기능을 무효화 _하려고_ 하고 있습니다만, 이 CSS 속성은 아직 표준화 되어 있지 않고, 키보드 내비게이션을 고려하고 있지 않습니다. 그래서 비활성화된 링크에는 항상 `tabindex="-1"`를 추가하고 그 기능을 완전히 비활성화하기 위헤 사용자 정의 JavaScript를 사용해야 합니다.

{{< example >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

활성화된 앵커나 비활성화된 앵커를 `<span>`으로 교체하거나, 이전/다음의 화살표의 경우 앵커를 생략해서 원하는 스타일로 유지한 채 클릭 기능을 삭제하거나 키보드 포커스를 막을 수 있습니다.

{{< example >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

## 크기 조절

Fancy larger or smaller pagination? 크기 변경을 원할 경우 `.pagination-lg` 나 `.pagination-sm`를 추가해 주세요.

{{< example >}}
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{{< /example >}}

{{< example >}}
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{{< /example >}}

## 정렬

[Flexbox utilities]({{< docsref "/utilities/flex" >}})를 사용해 페이지네이션의 위치를 변경합니다. For example, with `.justify-content-center`:

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

Or with `.justify-content-end`:

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

## CSS

### 변수

{{< added-in "5.2.0" >}}

Bootstrap의 진화하는 CSS 변수 접근 방식의 일환으로, 이제 페이지네이션에서 `.pagination`의 로컬 CSS 변수를 사용하여 실시간 사용자 정의 기능을 강화합니다. CSS 변수의 값은 Sass를 통해 설정되므로 Sass 사용자 정의도 계속 지원됩니다.

{{< scss-docs name="pagination-css-vars" file="scss/_pagination.scss" >}}

### Sass 변수

{{< scss-docs name="pagination-variables" file="scss/_variables.scss" >}}

### Sass 믹스인

{{< scss-docs name="pagination-mixin" file="scss/mixins/_pagination.scss" >}}
