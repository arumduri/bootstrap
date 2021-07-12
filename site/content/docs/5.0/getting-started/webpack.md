---
layout: docs
title: 웹팩과 번들러
title_en: Webpack and bundlers
description: 웹팩이나 다른 번들러를 사용하여 프로젝트에 Bootstrap을 포함하는 방법을 알아보세요.
group: getting-started
toc: true
---

## Installing Bootstrap

npm을 사용하여 Node.js 모듈로 [Bootstrap을 설치]({{< docsref "/getting-started/download#npm" >}})합니다.

## Importing JavaScript

앱의 진입점 (일반적으로 `index.js` 또는 `app.js`)에 다음 줄을 추가하여 [Bootstrap의 JavaScript]({{< docsref "/getting-started/javascript" >}})를 불러옵니다:

```js
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';
```

또는 플러그인이 전부 필요하지 않다면 필요에 따라서 **개별적으로 플러그인을 불러올 수 있습니다**:

```js
import Alert from 'bootstrap/js/dist/alert';
...
```

Bootstrap은 `peerDependencies` 속성에 지정된 [Popper](https://popper.js.org/)에 의존합니다.
이것은 This means that you will have to make sure to add it to your `npm install @popperjs/core`를 사용하여 `package.json`에 추가해야 함을 의미합니다.

## Importing Styles

### Importing Precompiled Sass

Bootstrap의 잠재력을 최대한 활용하고 필요에 맞게 커스터마이징하려면 프로젝트 번들링 프로세스의 일부로 소스 파일을 사용하세요.

먼저 `_custom.scss`를 직접 만들고 이를 통해 [기본 제공 커스텀 변수]({{< docsref "/customize/sass" >}})를 재정의합니다. 그런 다음에 메인 Sass 파일을 사용하여 커스텀 변수를 가져온 다음 Bootstrap을 사용합니다:

```scss
@import "custom";
@import "~bootstrap/scss/bootstrap";
```

Bootstrap을 컴파일하려면 필수 로더인 [sass-loader](https://github.com/webpack-contrib/sass-loader) 및 [Autoprefixer](https://github.com/postcss/autoprefixer#webpack)와 [postcss-loader](https://github.com/webpack-contrib/postcss-loader)를 설치하고 사용해야합니다. 최소한의 설정으로 웹팩 구성에 다음 규칙 또는 유사한 규칙이 포함되여아 합니다:

```js
// ...
{
  test: /\.(scss)$/,
  use: [{
    // inject CSS to page
    loader: 'style-loader'
  }, {
    // translates CSS into CommonJS modules
    loader: 'css-loader'
  }, {
    // Run postcss actions
    loader: 'postcss-loader',
    options: {
      // `postcssOptions` is needed for postcss 8.x;
      // if you use postcss 7.x skip the key
      postcssOptions: {
        // postcss plugins, can be exported to postcss.config.js
        plugins: function () {
          return [
            require('autoprefixer')
          ];
        }
      }
    }
  }, {
    // compiles Sass to CSS
    loader: 'sass-loader'
  }]
}
// ...
```

### Importing Compiled CSS

프로젝트의 진입점에 이 줄을 추가하여 Bootstrap의 즉시 사용 가능한 CSS를 사용할 수도 있습니다:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

이 경우에는 웹팩 구성에 대한 특별한 수정 없이 `css`에 대한 기존 규칙을 사용할 수 있습니다. 단, `sass-loader`는 [style-loader](https://github.com/webpack-contrib/style-loader) 및 [css-loader](https://github.com/webpack-contrib/css-loader)가 필요하지 않습니다.

```js
// ...
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}
// ...
```
