---
layout: docs
title: 다운로드
title_en: Download
description: Bootstrap을 다운로드하여 컴파일된 CSS 및 JavaScript, 소스 코드를 얻거나 npm, RubyGems 등과 같은 즐겨쓰는 패키지 관리자를 사용해서 포함시키세요.
group: getting-started
toc: true
---

## 컴파일된 CSS와 JS

바로 사용할 수 있는 컴파일된 **Bootstrap v{{< param current_version >}}** 코드를 다운로드해서 프로젝트에 포함시킬 수 있습니다. 다음이 포함되어 있습니다:

- 컴파일 및 경량화 된 CSS 번들 ([CSS 파일 비교]({{< docsref "/getting-started/contents#css-files" >}}) 보기)
- 컴파일 및 경량화 된 JavaScript 플러그인 ([JS 파일 비교]({{< docsref "/getting-started/contents#js-files" >}}) 보기)

여기에는 문서, 소스 파일, 그리고 Popper같은 선택적 JavaScript 의존성이 포함되어 있지 않습니다.

<a href="{{< param "download.dist" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">다운로드</a>

## 소스 파일
Sass, JavaScript, 그리고 문서 소스를 다운로드해서 고유 자산 파이프라인을 사용해서 BootStrap를 컴파일할 수 있습니다. 이를 위해서는 다음 도구들이 필요합니다:

- CSS 컴파일을 위한 Sass 컴파일러 (Libsass 또는 Ruby Sass도 지원함).
- CSS 벤더 접두어를 위한 [Autoprefixer](https://github.com/postcss/autoprefixer)

- Sass 소스 파일을 CSS 파일로 컴파일하기 위한 [Sass 컴파일러]({{< docsref "/getting-started/contribute#sass" >}})
- CSS 벤더 접두어를 위한 [Autoprefixer](https://github.com/postcss/autoprefixer)

필요한 경우 [빌드 도구]({{< docsref "/getting-started/contribute#tooling-setup" >}})를 사용할 수도 있습니다. Bootstrap 및 문서 개발을 위해 포함되어 있긴 하지만, 목적에 적합하지 않을 수도 있습니다.

<a href="{{< param "download.source" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">소스 다운로드</a>

## 예시

[예시]({{< docsref "/examples" >}})를 다운로드하고 확인하고 싶다면 이미 만들어진 예시를 사용해 볼 수도 있습니다:

<a href="{{< param "download.dist_examples" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Examples');">예시 다운로드</a>

## jsDelivr를 통한 CDN

[jsDelivr](https://www.jsdelivr.com/)를 사용해서 다운로드하지 않고 Bootstrap의 컴파일된 CSS와 JS의 캐시 버전을 프로젝트에 전달하세요.

```html
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

이미 컴파일된 JavaScript를 사용하고 있고 Popper를 개별적으로 포함하는 것을 선호한다면 JS 이전에 CDN을 통해서 Popper를 추가하세요.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

## 패키지 관리자

Bootstrap의 **소스 파일**을 유명한 패키지 관리자들을 사용해서 거의 모든 프로젝트에 Bootstrap을 사용할 수 있습니다. 패키지 관리자와 상관없이 Bootstrap은 공식 컴파일된 버전과 일치하는 구성을 위해 **[Sass 컴파일러]({{< docsref "/getting-started/contribute#sass" >}})와 [Autoprefixer](https://github.com/postcss/autoprefixer)를 필요로 합니다**.

### npm

[npm 패키지](https://www.npmjs.com/package/bootstrap)를 사용해서 Node.js로 만들어진 앱에 Bootstrap를 설치하세요:

```sh
npm install bootstrap
```

`const bootstrap = require('bootstrap')` 또는 `import bootstrap from 'bootstrap'`는 `bootstrap` 객체에 모든 Bootstrap의 플러그인을 불러옵니다.
`bootstrap` 모듈은 자체에서 모든 플러그인을 내보냅니다. 패키지 최부모 디렉토리 아래에 있는 `/js/dist/*.js` 파일을 불러옴으로서 Bootstrap의 플러그인을 직접 독립적으로 불러올 수 있습니다.

Bootstrap의 `package.json`에는 다음 키에 몇몇 메타데이터가 포함되어 있습니다:

- `sass` - Bootstrap의 메인 [Sass](https://sass-lang.com/) 소스 파일로 향하는 경로
- `style` - Bootstrap의 경량화되지 않았지만 (추가 설정 없이) 기본 설정으로만 사전 컴파일된 CSS로 향하는 경로

{{< callout info >}}
{{< partial "callout-info-npm-starter.md" >}}
{{< /callout >}}

### yarn

[yarn 패키지](https://yarnpkg.com/en/package/bootstrap)를 사용해서 Node.js로 만들어진 앱에 Bootstrap를 설치하세요:

```sh
yarn add bootstrap
```

### RubyGems

[Bundler](https://bundler.io/) (**권장**)와 [RubyGems](https://rubygems.org/) by adding the following line to your [`Gemfile`](https://bundler.io/gemfile.html)에 다음 줄을 추가해 [Bundler](https://bundler.io/) (**권장**)와 [RubyGems](https://rubygems.org/)를 사용해서 Ruby 앱에 Bootstrap을 설치할 수 있습니다:

```ruby
gem 'bootstrap', '~> {{< param current_ruby_version >}}'
```

Bundler를 사용하고 있지 않다면 다음 명령어를 실행해서 gem을 설치할 수 있습니다:

```sh
gem install bootstrap -v {{< param current_ruby_version >}}
```

자세한 사항은 [gem의 README](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md)를 확인해주세요.

### Composer

[Composer](https://getcomposer.org/)로도 Bootstrap의 Sass와 JavaScript를 설치 및 관리할 수 있습니다:

```sh
composer require twbs/bootstrap:{{< param current_version >}}
```

### NuGet

.NET으로 개발하고 있다면, [NuGet](https://www.nuget.org/)을 사용해서 Bootstrap의 [CSS](https://www.nuget.org/packages/bootstrap/) 또는 [Sass](https://www.nuget.org/packages/bootstrap.sass/) 및 JavaScript를 설치 및 관리할 수 있습니다:

```powershell
Install-Package bootstrap
```

```powershell
Install-Package bootstrap.sass
```
