---
layout: docs
title: 번역
title_en: Translations
description: 커뮤니티 번역된 Bootstrap 문서들의 링크입니다.
group: about
---

Community members have translated Bootstrap's documentation into various languages. None are officially supported and they may not always be up-to-date.

{{< translations.inline >}}
<ul>
{{ range .Site.Data.translations -}}
  <li><a href="{{ .url }}" hreflang="{{ .code }}">{{ .description }} ({{ .name }})</a></li>
{{ end -}}
</ul>
{{< /translations.inline >}}

**우리는 번역을 돕거나 호스트하지 않으며, 링크만 걸어줍니다.**

새롭거나 더 나은 번역을 완료하셨나요? 풀 리퀘스트를 열어 우리 목록에 추가하세요.
