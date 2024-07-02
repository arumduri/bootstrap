---
layout: docs
title: 한국어 번역 기여자
description: Bootstrap을 한국어로 번역해주신 기여자 분들입니다.
origin: true
---

{{< team.inline >}}
<div class="list-group mb-3">
  {{- range (index $.Site.Data "arumduri") }}
    <a class="list-group-item list-group-item-action d-flex align-items-center" href="https://github.com/{{ .user }}">
      <img src="https://github.com/{{ .user }}.png" alt="@{{ .user }}" width="32" height="32" class="rounded me-2" loading="lazy">
      <span>
        <strong>{{ .name }}</strong> @{{ .user }}
      </span>
    </a>
  {{ end -}}
</div>
{{< /team.inline >}}
