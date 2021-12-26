---
layout: docs
title: 확장형 링크
title_en: Stretched link
description: CSS를 통해 중첩 된 링크를 "확장"하여 HTML 요소 또는 Bootstrap 컴포넌트를 클릭할 수 있도록 만듭니다.
group: helpers
---

링크에 `.stretched-link` 클래스를 추가하여 `:: after` 가상 요소를 통해 [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block)을 클릭할 수 있도록 만듭니다. 대부분의 경우 이는 링크에 `.stretched-link` 클래스가 포함되어 있고 이를 감싸고 있는 `position : relative;` 상태의 요소를 클릭할 수 있음을 의미합니다. [CSS `position`이 작동하는 방식](https://www.w3.org/TR/CSS21/visuren.html#propdef-position)을 고려하면 `.stretched-link` 는 대부분의 테이블 요소와 혼합할 수 없습니다.

Bootstrap에서 card는 기본적으로 `position: relative` 상태를 갖고 있습니다. 그렇기 때문에 이 경우 사용자가 별도의 HTML 변경 없이 `.stretched-link` 클래스를 안전하게 카드의 링크 부분에 추가할 수 있습니다.

확장형 링크에 탭 대상 및 다중링크 사용은 권장하지 않습니다. 그럼에도 사용이 필요한 경우 `position` 및 `z-index` 스타일이 도움이 될 수 있습니다.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="false" title="Card image cap" >}}
  <div class="card-body">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
  </div>
</div>
{{< /example >}}

대부분의 사용자 지정 컴포넌트는 `position: relative`를 기본적으로 포함하고 있지 않습니다. 따라서 링크가 부모요소 바깥으로 무한정 확장하는 것을 방지하려면 부모 요소에 `.position-relative` 클래스를 추가해야합니다.

{{< example >}}
<div class="d-flex position-relative">
  {{< placeholder width="144" height="144" class="flex-shrink-0 me-3" text="false" title="Generic placeholder image" >}}
  <div>
    <h5 class="mt-0">Custom component with stretched link</h5>
    <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="row g-0 bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    {{< placeholder width="100%" height="200" class="w-100" text="false" title="Generic placeholder image" >}}
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Columns with stretched link</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
{{< /example >}}

## containing block 식별하기

만약 확장형 링크가 작동하지 않는다면, [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block)이 원인일 수 있습니다. 다음 CSS 속성은 요소를 포함하는 블록형태로 만듭니다.

- `static` 이외의 `position` 값
- `none` 이외의 `transform` 또는 `perspective` 값
- `transform` 또는 `perspective`의 `will-change` 값
- `none` 이외의 `filter` 값 또는 `filter`의  `will-change` 값 (Firefox에서만 작동)

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="false" title="Card image cap" >}}
  <div class="card-body">
    <h5 class="card-title">Card with stretched links</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">
      <a href="#" class="stretched-link text-danger" style="position: relative;">Stretched link will not work here, because <code>position: relative</code> is added to the link</a>
    </p>
    <p class="card-text bg-light" style="transform: rotate(0);">
      This <a href="#" class="text-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
    </p>
  </div>
</div>
{{< /example >}}
