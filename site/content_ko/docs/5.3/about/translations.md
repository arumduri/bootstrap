---
layout: docs
title: 번역
description: 커뮤니티 번역된 Bootstrap 문서들의 링크입니다.
group: about
---

Bootstrap의 문서들이 커뮤니티 멤버들에 의해서 여러 언어로 번역되었습니다. 모두 공식적으로 지원되지 않으며 최신 버전이 아닐 수도 있습니다.

{{< translations.inline >}}
<ul>
{{ range .Site.Data.translations -}}
  <li><a href="{{ .url }}" hreflang="{{ .code }}">{{ .description }} ({{ .name }})</a></li>
{{ end -}}
</ul>
{{< /translations.inline >}}

**우리는 번역을 돕거나 호스트하지 않으며, 링크만 걸어줍니다.**

새롭거나 더 나은 번역을 완료하셨나요? 풀 리퀘스트를 열어 우리 목록에 추가하세요.
