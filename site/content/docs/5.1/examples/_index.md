---
layout: single
title: 예시
title_en: Examples
description: 프레임워크의 일부를 사용하는 것부터 사용자 지정 컴포넌트 및 레이아웃에 이르기까지 다양한 예시를 통해 프로젝트를 빠르게 시작하세요.
aliases: "/examples/"
---

{{< list-examples.inline >}}
{{ range $entry := $.Site.Data.examples -}}
  <h2 id="{{ $entry.category | urlize }}">{{ $entry.category }}</h2>
  <p>{{ $entry.description }}</p>
  {{ if eq $entry.category "RTL" -}}
    <div class="bd-callout bd-callout-warning">
      <p>RTL 기능은 아직 <strong>실험적이며</strong> 사용자 피드백에 따라 발전할 것입니다. 무언가를 발견했거나 개선할 점이 있나요? <a href="{{ $.Site.Params.repo }}/issues/new">이슈를 열어서</a> 여러분들의 의견을 알려주세요.</p>
    </div>
  {{ end -}}

  {{ range $i, $example := $entry.examples -}}
    {{- $len := len $entry.examples -}}
    {{ if (eq $i 0) }}<div class="row">{{ end }}
      <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
        <a class="d-block" href="/docs/{{ $.Site.Params.docs_version }}/examples/{{ $example.name | urlize }}/"{{ if in $example.name "RTL" }} hreflang="ar"{{ end }}>
          <img class="img-thumbnail mb-3" srcset="/docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}.png,
                                                  /docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}@2x.png 2x"
                                          src="/docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}.png"
                                          alt=""
                                          width="480" height="300"
                                          loading="lazy">
          <h3 class="h5 mb-1">{{ $example.name }}</h3>
        </a>
        <p class="text-muted">{{ $example.description }}</p>
      </div>
    {{ if (eq (add $i 1) $len) }}</div>{{ end }}
  {{ end -}}
{{ end -}}
{{< /list-examples.inline >}}
