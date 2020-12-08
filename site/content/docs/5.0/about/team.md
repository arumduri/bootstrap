---
layout: docs
title: Team
description: Bootstrap 초기 팀과 핵심 기여자들에 대한 요약입니다.
group: about
---

Bootstrap은 초기 팀과 귀중한 핵심 기여자들에 의해 관리되며 우리 커뮤니티로부터 막대한 지원과 참여를 받고 있습니다.

{{< team.inline >}}
<div class="list-group mb-3">
  {{- range (index $.Site.Data "core-team") }}
    <a class="list-group-item list-group-item-action d-flex align-items-center" href="https://github.com/{{ .user }}">
      <img src="https://github.com/{{ .user }}.png" alt="@{{ .user }}" width="32" height="32" class="rounded me-2" loading="lazy">
      <span>
        <strong>{{ .name }}</strong> @{{ .user }}
      </span>
    </a>
  {{ end -}}
</div>
{{< /team.inline >}}

Bootstrap 개발에 참여하려면 [이슈를 열거나]({{< param repo >}}/issues/new) 풀 리퀘스트를 제출해주세요. 우리가 어떻게 개발하는지에 대한 정보를 알고 싶으시다면 [기여 가이드라인]({{< param repo >}}/blob/v{{< param current_version >}}/.github/CONTRIBUTING.md)을 읽어보세요.
