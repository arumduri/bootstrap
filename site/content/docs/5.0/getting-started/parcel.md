---
layout: docs
title: Parcel
description: Parcel을 사용해서 Bootstrap을 프로젝트에 포함하는 방법에 대해 알아봅니다.
group: getting-started
toc: true
---

## Install Parcel

[Parcel Bundler](https://en.parceljs.org/getting_started.html)를 설치해주세요.

## Install Bootstrap

npm을 통해서 Node.js 모듈로 [bootstrap을 설치]({{< docsref "/getting-started/download#npm" >}})해주세요.

Bootstrap은 `peerDependencies` 속성에 지정된 Popper에 의존합니다. 이것은 `npm install @ popperjs/core` 를 사용하여 두 가지 모두를 `package.json` 에 추가해야 한다는 것을 의미합니다.

모든 작업이 완료되면 프로젝트는 다음과 같이 구성됩니다:

```text
project-name/
├── build/
├── node_modules/
│   └── bootstrap/
│   └── popper.js/
├── scss/
│   └── custom.scss
├── src/
│   └── index.html
│   └── index.js
└── package.json
```

## Importing JavaScript
앱의 진입점 (일반적으로 `src/index.js`)에서 [Bootstrap의 JavaScript]({{< docsref "/getting-started/javascript" >}})를 가져옵니다. 모든 플러그인을 하나의 파일로 가져오거나 일부만 필요한 경우 개별적으로 가져올 수도 있습니다.

```js
// Import all plugins
import * as bootstrap from 'bootstrap';

// Or import only needed plugins
import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// Or import just one
import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';
```

## Importing CSS

Bootstrap의 잠재력을 최대한 활용하고 필요에 맞게 커스터마이징하려면 프로젝트 번들링 과정의 일부로 소스 파일을 사용하세요.

자체 `scss/custom.scss` 를 만들어서 [Bootstrap의 Sass 파일을 불러오고]({{< docsref "/customize/sass#importing" >}}) [기본 제공되는 맞춤 변수]({{< docsref "/customize/sass#variable-defaults" >}})를 재정의해주세요.

## Build app

`</body>` 태그로 닫기 전에 `src/index.js`를 포함시켜주세요.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

### Edit `package.json`

`package.json` 파일에 `dev` 및 `build` 스크립트를 추가해주세요.

```json
"scripts": {
  "dev": "parcel ./src/index.html",
  "prebuild": "npx rimraf build",
  "build": "parcel build --public-url ./ ./src/index.html --experimental-scope-hoisting --out-dir build"
}
```

### Run dev script

`http://127.0.0.1:1234` 를 통해서 앱에 접근할 수 있습니다.

```sh
npm run dev
```

### Build app files

빌드된 파일은 `build/` 폴더 내에 있습니다.

```sh
npm run build
```
