---
layout: docs
title: 배지
title_en: Badges
description: 배지에 대한 개요와 사용법 예시입니다.
group: components
toc: true
---

## Examples

부모 요소의 크기에 일치하도록 상대적인 폰트 크기 `em`을 사용하고 있습니다. v5 이후, 배지에는 더 이상 링크에 대한 포커스나 호버 스타일은 없습니다.

### Headings

{{< example >}}
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
<h6>Example heading <span class="badge bg-secondary">New</span></h6>
{{< /example >}}

### Buttons

배지는 카운터를 제공하기 위해 링크나 버튼의 일부로 사용될 수 있습니다.

{{< example >}}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>
{{< /example >}}

배지를 사용하는 방법에 따라서, 스크린 리더나 동일한 지원기술을 사용하는 사용자에게 혼란을 줄 수 있음으로 주의하세요. 배지의 스타일은 그 목적을 시각적으로 보여주는 것이지만, 이러한 사용자들에게는 단지 배지의 내용만이 제시될 뿐입니다. 특정 상황에 따라 이 배지들은 문장의 끝, 링크 혹은 버튼에 임의로 추가된 단어나 숫자로 보일 수 있습니다.

문맥이 명확하지 않은 경우("Notifications" 의 예처럼, "4" 가 알림 숫자라고 이해되는 경우), 시각적으로 숨겨진 추가 문자 부분에 추가 문맥을 포함하는 것을 검토해 주세요.

### Positioned

Use utilities to modify a `.badge` and position it in the corner of a link or button.

{{< example >}}
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
{{< /example >}}

You can also replace the `.badge` class with a few more utilities without a count for a more generic indicator.

{{< example >}}
<button type="button" class="btn btn-primary position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
{{< /example >}}

## Background colors

Background 유틸리티 클래스를 사용해, 배지의 외형을 변경할 수 있습니다. Bootstrap의 기본의 `.bg-light`를 사용할 경우, 적절한 스타일링을 위해 `.text-dark`와 같은 글자색을 변경하는 유틸리티가 필요할 수 있으니 주의하세요. Background 유틸리티 클래스는 `background-color` 외에는 아무것도 설정하지 않기 때문입니다.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge bg-{{ .name }}{{ with .contrast_color }} text-{{ . }}{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Pill badges

`.rounded-pill`을 사용하면 `border-radius` 보다 더 동그란 배지를 만들 수 있습니다.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge rounded-pill bg-{{ .name }}{{ with .contrast_color }} text-{{ . }}{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="badge-variables" file="scss/_variables.scss" >}}
