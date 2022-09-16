---
layout: single
title: Examples
description: Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.
aliases: "/examples/"
---

{{< list-examples.inline >}}
{{ range $entry := $.Site.Data.examples -}}
<div class="row g-lg-5 mb-5">
  <div class="bd-content col-lg-3">
    <h2 id="{{ $entry.category | urlize }}">{{ $entry.category }}</h2>
    <p>{{ $entry.description }}</p>
    {{ if eq $entry.category "RTL" -}}
      <div class="bd-callout bd-callout-warning small">
        <p>
          <strong>RTL 기능은 아직 실험적이며</strong> 피드백으로 발전할 것입니다. 무언가를 발견했거나 개선할 점이 있나요?
        </p>
        <p><a href="{{ $.Site.Params.repo }}/issues/new/choose">이슈를 열어주세요.</a></p>
      </div>
    {{ end -}}
  </div>

  <div class="col-lg-9">
    {{ range $i, $example := $entry.examples -}}
      {{- $len := len $entry.examples -}}
      {{ if (eq $i 0) }}<div class="row">{{ end }}
        <div class="col-sm-6 col-md-4 mb-3">
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
  </div>
</div>
{{ end -}}
{{< /list-examples.inline >}}
