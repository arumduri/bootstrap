---
layout: docs
title: Navs and tabs(내비와 탭)
description: Bootstrap에 포함된 내비게이션 컴포넌트를 어떻게 사용하는지 문서와 예시입니다.
group: components
aliases: "/docs/5.0/components/navs/"
toc: true
---

## Base nav

Bootstrap에서 이용할 수 있는 내비게이션은 기본 `.nav` 클래스부터 활성화 상태와 비활성화 상태까지 일반적인 마크업과 스타일을 공유합니다. 각각의 스타일을 바꾸기 위해서 수식자 클래스를 교체합니다.

기본 `.nav` 컴포넌트는 flexbox로 구축되어 있으며, 모든 타입의 내비게이션 컴포넌트를 구축하기 위한 강력한 구조를 제공하고 있습니다. 여기에는 몇몇의 스타일 오버라이드(목록을 다루기 위한), 보다 넓은 클릭 영역을 위한 여백, 기본적인 비활성화된 스타일이 포함되어 있습니다.

{{< callout info >}}
베이스의 `.nav` 컴포넌트에는 `.active` 상태는 포함되지 않습니다. 아래의 예에서는 주로 이 특정 클래스가 특별한 스타일링을 하지 않는 것을 나타내기 위해 이 클래스를 포함합니다.

활성화된 상태를 스크린 리더에 전달하기 위해서는 현재 페이지라면 `page` 속성을, 세트내의 현재 아이템이라면 `true` 를 사용합니다.
{{< /callout >}}

{{< example >}}
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

클래스는 전체적으로 사용되어 있어서, 우리의 마크업은 매우 유연성이 있습니다. 위의 예시처럼 `<ul>` 을 사용하거나, 아이템의 순서가 중요한 경우에는 `<ol>` 를 사용하거나, `<nav>` 요소를 사용해서 독자적인 롤을 만들거나 할 수 있습니다. `.nav` 는 `display: flex` 을 사용하고 있기 때문에, nav-link 는 따로 추가적인 마크업 없이, nav-item 과 동일하게 동작합니다.

{{< example >}}
<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
{{< /example >}}

## Available styles

`.nav` 컴포넌트 스타일을 수식자와 유틸리티로 변경할 수 있습니다. 필요에 따라서 조합해 사용하는 것도 가능하며, 독자적인 스타일을 만드는것도 가능합니다.

### Horizontal alignment

[flexbox utilities]({{< docsref "/layout/grid#horizontal-alignment" >}}) 를 사용해, 내비게이션의 수평방향의 배치를 변경합니다. 내비게이션의 기본은 왼쪽 정렬이지만, 쉽게 가운데 혹은 오른쪽 정렬로 변경 가능합니다.

`.justify-content-center` 을 사용해 가운데 정렬이 가능합니다.

{{< example >}}
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

`.justify-content-end` 를 사용해, 오른쪽 정렬:

{{< example >}}
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

### Vertical

`.flex-column` 유틸리티를 사용해 flex item(플렉스 아이템) 의 방향을 변경해 내비게이션을 세로로 만들수 있습니다. 일부 뷰포트에서는 세로로, 또 다른 뷰포트에서는 세로로 하고 싶지 않을 경우, `.flex-sm-column` 을 사용해 주세요.

{{< example >}}
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

언제나 그렇듯, 세로 내비게이션도 `<ul>` 없이 가능합니다.

{{< example >}}
<nav class="nav flex-column">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
{{< /example >}}

### Tabs

`.nav-tabs` 클래스를 추가해 탭이 있는 인터페이스를 만들수 있습니다. [tab JavaScript plugin](#javascript-behavior) 으로 탭 가능한 영역을 만듭니다。

{{< example >}}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

### Pills

동일한 HTML로, `.nav-pills` 도 사용할 수 있습니다.

{{< example >}}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

### Fill and justify

`.nav` 가로폭을 100% 사용하게 합니다. `.nav-item` 에서 사용 가능한 모든 여백을 비교하고 채우기 위해 `.nav-fill` 을 사용합니다. 내비게이션 아이템의 가로 폭이 모두 동일한 것이 아니므로 주의해 주세요.

{{< example >}}
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

`<nav>` 베이스의 내비게이션을 사용할 경우, `<a>` 요소의 스타일 설정에 필요한 것은 `.nav-link` 뿐이므로, `.nav-item` 을 생략할 수 있습니다.

{{< example >}}
<nav class="nav nav-pills nav-fill">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
{{< /example >}}

동일한 가로 폭의 아이템을 사용하고 싶은 경우에는, `.nav-justified` 을 사용합니다. 모든 수평 방향의 여백은 nav-links 가 갖고 있지만, 위의 `.nav-fill` 과는 다르게, 모든 내비게이션 아이템은 동일한 가로폭을 가지게 됩니다.

{{< example >}}
<ul class="nav nav-pills nav-justified">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

`<nav>` 에 `.nav-fill` 을 적용한 경우는

{{< example >}}
<nav class="nav nav-pills nav-justified">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>

{{< /example >}}
## Working with flex utilities

반응형 내비게이션의 변화가 필요한 경우에는 [flexbox utilities]({{< docsref "/utilities/flex" >}}) 를 사용합니다. 이 유틸리티들은 좀 장황스럽지만, 반응형 브레이크 포인트 간에 더 많은 커스터마이징이 가능합니다. 아래의 예시에서 내비게이션은 가장 좁은 화면의 경우 세로로, 폭을 넓힘으로써 수평 레이아웃이 됩니다.

{{< example >}}
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
{{< /example >}}

## Regarding accessibility

내비게이션바를 제공하기 위해 내비게이션을 사용하고 있는 경우, `<ul>` 의 부모 컨테이너에 `role="navigation"` 을 추가하거나, `<nav>` 요소를 내비게이션 전체에 감싸주세요. role을 `<ul>` 자체에 추가하지 마십시오.

내비게이션바는, `.nav-tabs` 에서 시각적으로는 탭으로 보여지게 되있지만, `role="tablist"`, `role="tab"`, `role="tabpanel"` 속성을 부여하지 **말아** 주십시오. 이들은 [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel) 에서 설명된 것처럼, 동적인 탭 인터페이스에만 적절합니다. [JavaScript behavior](#javascript-behavior) 를 참조해 주십시오. JavaScript 는 활성화된 탭에 `aria-selected="true"` 를 추가하여 선택된 상태를 처리하기 때문에 인터페이스에서는 `aria-current` 속성이 필요하기 않습니다.

## Using dropdowns

dropdown(드롭다운) 에 HTML을 조금 추가하고, [dropdowns JavaScript plugin]({{< docsref "/components/dropdowns#usage" >}}) 으로 드롭다운 메뉴를 추가합니다.


### Tabs with dropdowns

{{< example >}}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

### Pills with dropdowns

{{< example >}}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="nav-variables" file="scss/_variables.scss" >}}

## JavaScript behavior

`bootstrap.js`파일을 통해 탭의 JavaScript 플러그인을 사용함으로써 내비게이션 탭과 pill을 확장하고 드롭다운 메뉴에서도 로컬 컨텐츠의 탭 가능한 창을 만들 수 있습니다.

[<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)에서는, 지원 기술(스크린 리더 등)의 사용자에게 구조, 기능, 현재의 상태를 전달하기 위해 `role="tablist"`, `role="tab"`, `role="tabpanel"` 및 추가의 `aria-` 속성을 지원합니다. 좋은 실행 방법으로써 탭에는 `<button>` 요소 사용을 권장합니다. 이것은 새로운 페이지나 장소로 이동하는 링크가 아니라, 동적인 변화를 일으키는 컨트롤이기 때문입니다.

동적인 탭이 있는 인터페이스는 드롭다운 메뉴를 포함해서는 <em>안됩니다</em>. 사용성 관점에서 현재 표시되고 있는 탭의 트리커 요소가 곧바로 표시되지 않는다는(닫힌 드롭다운 메뉴 안에 있기 때문에) 사실은 혼란을 일으킬 가능성이 있습니다. 접근성 관점에서 이러한 종류의 구조를 표준적인 WAI ARIA 패턴에 매핑하기 위한 현명한 방법은 현재로선 없습니다.

<div class="bd-example">
  <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
  </div>
</div>

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
```

요구에 맞춰, 이것은 위에 나온 것과 같이 `<ul>`의 마크업에서도, 임의의 마크업에서도 동작합니다. `<nav>`를 사용하는 경우 `role="tablist"`를 직접 추가하지 않습니다. 대신에 다른 요소(아래의 예시에서는 단순한 `<div>`)로 전환해 `<nav>`로 감쌌습니다.

<div class="bd-example">
  <nav>
    <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
      <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
  </div>
</div>

```html
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>
```

탭의 플러그인은 pills에서도 동작합니다.

<div class="bd-example">
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
  </div>
</div>

```html
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
```

 세로형 pills에서도 같습니다.

<div class="bd-example">
  <div class="d-flex align-items-start">
    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
      <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
      <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
      <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
    </div>
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <p><strong>This is some placeholder content the Messages tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
      <p><strong>This is some placeholder content the Settings tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>
```

### Using data attributes

요소에 `data-bs-toggle="tab"` 혹은 `data-bs-toggle="pill"`를 지정하는것 만으로, JavaScript를 쓰지 않고도 탭이나 pill의 내비게이션을 활성화 시킬 수 있습니다. 이러한 data 속성은 `.nav-tabs`나 `.nav-pills`로 사용합니다.

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>
```

### Via JavaScript

JavaScript로 탭 가능한 탭을 유효하게 합니다(각 탭을 개별적으로 유효하게 할 필요가 있습니다).

```js
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

각각의 탭은 여러 가지 방법으로 활성화 할 수 있습니다.

```js
var triggerEl = document.querySelector('#myTab a[href="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

var triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
```

### Fade effect

탭을 페이드인 시키려면, `.tab-pane`에 `.fade`를 추가합니다. 첫 번째 탭에는 컨텐츠를 표시하기 위해 `.show`를 추가할 필요가 있습니다.

```html
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>
```

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### constructor

탭 요소와 컨텐츠 컨테이너를 활성화합니다. 탭은 DOM 안의 컨테이너 노드를 타겟으로 하는 `data-bs-target`가 있어야 하며 링크를 사용하면 `href`가 있어야 합니다.

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>

<script>
  var firstTabEl = document.querySelector('#myTab li:last-child a')
  var firstTab = new bootstrap.Tab(firstTabEl)

  firstTab.show()
</script>
```

#### show

지정된 탭을 선택해 관련 창을 표시합니다. 이전에 선택되어 있던 다른 탭은 선택되지 않은 상태가 되고 관련된 창도 비표시 됩니다. **탭 창이 실제로 표시되기 전에 호출된 곳으로 돌아옵니다**(`shown.bs.tab` 이벤트가 발생하기 전).

```js
  var someTabTriggerEl = document.querySelector('#someTabTrigger')
  var tab = new bootstrap.Tab(someTabTriggerEl)

  tab.show()
```

#### dispose

탭 요소를 없앱니다.

#### getInstance

DOM 요소에 연관된 탭의 인스턴스를 가져오는 *Static* 메소드

```js
var triggerEl = document.querySelector('#trigger')
var tab = bootstrap.Tab.getInstance(triggerEl) // Returns a Bootstrap tab instance
```

### Events

새로운 탭을 표시할 때, 아래의 순서대로 이벤트가 발생합니다.

1. `hide.bs.tab` (현재의 활성탭)
2. `show.bs.tab` (표시되는 탭)
3. `hidden.bs.tab` (`hide.bs.tab` 이벤트와 동일)
4. `shown.bs.tab` (`show.bs.tab` 이벤트와 동일)

이미 활성화된 탭이 없는 경우, `hide.bs.tab` 및 `hidden.bs.tab` 이벤트는 발생하지 않습니다.

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Event type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.tab</code></td>
      <td>이 이벤트는 탭 표시 시 발생하는데, 새로운 탭이 표시되기 전에 발생합니다. <code>event.target</code> 과 <code>event.relatedTarget</code> 을 사용하여 각각 활성화된 탭과 이전 활성화된 탭을 타겟으로 합니다.</td>
    </tr>
    <tr>
      <td><code>shown.bs.tab</code></td>
      <td>이 이벤트는 탭이 표시된 이후 탭 표시 시 발생합니다. <code>event.target</code> 과 <code>event.relatedTarget</code> 을 사용하여 각각 활성화된 탭과 이전 활성화된 탭을 타겟으로 합니다.</td>
    </tr>
    <tr>
      <td><code>hide.bs.tab</code></td>
      <td>이 이벤트는 새로운 탭이 표시될 (즉, 이전에 활성화 된 탭이 감춰질) 때 발생합니다. <code>event.target</code> 과 <code>event.relatedTarget</code> 을 사용하여 각각 현재의 활성화된 탭과 다음에 활성화 될 새로운 탭을 타겟으로 합니다.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.tab</code></td>
      <td>이 이벤트는 새로운 탭이 표시된 후에 발생합니다.(따라서 앞의 활성화한 탭은 숨김이 됩니다.) <code>event.target</code> 과 <code>event.relatedTarget</code> 을 사용하여 각각 이전 활성화된 탭과 새로운 활성화된 탭을 타겟으로 합니다.</td>
    </tr>
  </tbody>
</table>

```js
var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', function (event) {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
})
```
