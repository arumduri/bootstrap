---
layout: docs
title: Text truncation(말 줄임표)
description: 줄임표를 사용하여 긴 문자의 문자열을 자릅니다.
group: helpers
toc: false
--- 

컨텐츠의 내용이 너무 길 경우 `.text-truncate` 클래스를 사용하여 문자열을 자를 수 있습니다. ** `display: inline-block` 또는 `display: block` 이 필요합니다.**

{{< example >}}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>
{{< /example >}}
