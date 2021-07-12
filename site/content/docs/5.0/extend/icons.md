---
layout: docs
title: 아이콘
title_en: Icons
description: Bootstrap과 함께 외부 아이콘 라이브러리를 사용하기 위한 지침 및 제안입니다.
group: extend
---

Bootstrap에는 기본적으로 아이콘 세트가 포함되어 있지는 않지만 Bootstrap Icons라는 자체적인 종합 아이콘 라이브러리가 있습니다. 자유롭게 사용하실 수 있으며 프로젝트에 있는 다른 아이콘 세트와도 함께 사용할 수 있습니다. 아래에서는 Bootstrap Icons 및 다른 선호되는 아이콘 세트에 대한 설명이 포함되어 있습니다

대부분의 아이콘 세트는 여러 유형의 확장자를 지원하지만 우리는 향상된 접근석 및 벡터 지원을 위해서 SVG로 구현하는 것을 선호합니다.

## Bootstrap Icons

Bootstrap Icons는 [@mdo](https://github.com/mdo)가 디자인하고 [Bootstrap Team](https://github.com/orgs/twbs/people)에서 관리하는 SVG 아이콘 라이브러리입니다. 이 아이콘 세트의 시작은 Bootstrap의 양식, 캐러셀 등의 자체 컴포넌트로부터 비롯되었습니다. Bootstrap에는 기본적으로 필요한 아이콘이 거의 없기 때문에 많이 필요하지 않았습니다. 하지만 일단 만들기 시작하니 멈출 수 없었습니다.

아참, 우리가 완전한 오픈 소스라고 이미 말씀드렸나요? Bootstrap처럼 MIT 라이선스를 사용하기 때문에 모두가 아이콘 세트를 사용할 수 있습니다.

 Bootstrap Icons를 어떻게 설치하고 어떤 것이 권장되는 사용법인지 [자세히 알아보세요]({{< param icons >}}).

## Alternatives

우리는 이 아이콘 세트를 Bootstrap Icons에 대한 선호 대안으로 테스트하고 사용했습니다

{{< markdown >}}
{{< icons.inline >}}
{{- $type := .Get "type" | default "preferred" -}}

{{- range (index .Site.Data.icons $type) }}
- [{{ .name }}]({{ .website }})
{{- end }}
{{< /icons.inline >}}
{{< /markdown >}}

## More options

아직 확인해보지는 않았지만 좋아보이며 SVG를 포함한 여러 형식을 제공합니다.

{{< markdown >}}
{{< icons.inline type="more" />}}
{{< /markdown >}}
