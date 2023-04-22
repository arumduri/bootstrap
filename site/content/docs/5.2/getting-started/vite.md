---
layout: docs
title: "Bootstrap & Vite"
description: Vite를 사용하여 프로젝트에 부트스트랩의 CSS와 JavaScript를 포함하고 번들링하는 방법에 대한 공식 가이드입니다.
group: getting-started
toc: true
thumbnail: guides/bootstrap-vite@2x.png
---
<img class="mb-4 img-fluid rounded-3" srcset="/docs/{{< param docs_version >}}/assets/img/guides/bootstrap-vite.png, /docs/{{< param docs_version >}}/assets/img/guides/bootstrap-vite@2x.png 2x" src="/docs/{{< param docs_version >}}/assets/img/guides/bootstrap-vite.png" width="2000" height="1000" alt="">

{{< callout >}}
**끝으로 건너뛰고 싶으신가요?** 이 가이드의 소스 코드와 동작 확인을 위한 데모는 [twbs/examples repository](https://github.com/twbs/examples/tree/main/vite)에서 다운로드 하세요. [StackBlitz 예제를 열어](https://stackblitz.com/github/twbs/examples/tree/main/vite?file=index.html) 실시간으로 편집할 수도 있습니다.
{{< /callout >}}

## 설정하기

부트스트랩으로 Vite 프로젝트를 처음부터 구축하기 위해 실제로 시작하기 전에 몇 가지 전제 조건과 선행 단계가 있습니다. 이 가이드를 사용하려면 Node.js가 설치되어 있고 터미널을 어느 정도 다룰 줄 알아야 합니다.

1. **프로젝트 폴더를 만들고 npm을 설정합니다.** `my-project` 폴더를 만들고 모든 대화형 질문을 하지 않도록 `-y` 인수를 사용하여 npm을 초기화 합니다.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Vite를 설치합니다.** 웹팩 가이드와 달리 여기에는 빌드 도구 종속성이 하나만 있습니다. 이 종속성이 프로덕션용이 아닌 개발용으로만 사용된다는 것을 알리기 위해 `--save-dev`를 사용합니다.

   ```sh
   npm i --save-dev vite
   ```

3. **Bootstrap을 설치합니다.** 이제 부트스트랩을 설치할 수 있습니다. 드롭다운, 팝오버, 툴팁의 위치가 부트스트랩에 따라 달라지므로 Popper도 설치합니다. 이러한 컴포넌트를 사용하지 않을 계획이라면 여기서 Popper를 생략할 수 있습니다.

   ```sh
   npm i --save bootstrap @popperjs/core
   ```
4. **추가 종속 요소를 설치합니다.** Vite와 Bootstrap 외에도 Bootstrap의 CSS를 제대로 가져와 번들링하려면 또 다른 종속성(Sass)이 필요합니다.

   ```sh
   npm i --save-dev sass
   ```

이제 필요한 모든 종속성을 설치하고 설정했으므로 프로젝트 파일을 만들고 부트스트랩을 가져올 수 있습니다.

## 프로젝트 구조

이미 `my-project` 폴더를 생성하고 npm을 초기화했습니다. 이제 프로젝트 구조를 완성하기 위해 `src` 폴더, 스타일시트, JavaScript 파일도 생성합니다. `my-project`에서 다음을 실행하거나 아래 표시된 폴더와 파일 구조를 수동으로 생성합니다.

```sh
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js
```

완료되면 전체 프로젝트는 다음과 같은 모습일 것입니다:

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│   |   └── styles.scss
|   └── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

이 시점에서 모든 것이 올바른 위치에 있지만 아직 `vite.config.js`를 채우지 않았기 때문에 Vite가 작동하지 않습니다.

## Parcel 설정하기

종속성이 설치되고 코딩을 시작할 수 있는 프로젝트 폴더가 준비되었으므로 이제 Vite를 구성하고 로컬에서 프로젝트를 실행할 수 있습니다.

1. **에디터에서 `vite.config.js` 파일을 열어 주세요.** 비어 있으므로 서버를 시작할 수 있도록 정형화된 설정을 추가해야 합니다. 이 설정 부분은 Vite에 프로젝트의 JavaScript를 찾을 위치와 개발 서버의 동작(핫 리로드를 통해 `src` 폴더에서 가져옴)을 지시하는 부분입니다.

   <!-- eslint-skip -->
   ```js
   const path = require('path')

   export default {
     root: path.resolve(__dirname, 'src'),
     server: {
       port: 8080,
       hot: true
     }
   }
   ```

2. **다음으로 `src/index.html`을 작성합니다.** 이는 Vite가 브라우저에서 불러오는 HTML 페이지로, 이후 단계에서 추가하는 번들 CSS와 JS를 활용하기 위한 것입니다.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Bootstrap w/ Vite</title>
     </head>
     <body>
       <div class="container py-4 px-3 mx-auto">
         <h1>Hello, Bootstrap and Vite!</h1>
         <button class="btn btn-primary">Primary button</button>
       </div>
       <script type="module" src="./js/main.js"></script>
     </body>
   </html>
   ```

   여기에 `div class="container"`와 `<button>`으로 약간의 부트스트랩의 스타일링을 사용하여 부트스트랩의 CSS가 Vite에서 로드되는 시점을 확인할 수 있도록 했습니다.

3. **이제 Vite를 실행하려면 npm 스크립트가 필요합니다.** `package.json`을 열고 아래에 표시된 `start` 스크립트를 추가합니다(이미 테스트 스크립트가 있을 것입니다). 이 스크립트를 사용하여 로컬 Vite 개발 서버를 시작하겠습니다.

   ```json
   {
     // ...
     "scripts": {
       "start": "vite",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     // ...
   }
   ```

4. **이제 Vite를 시작할 수 있습니다.** 터미널의 `my-project` 폴더에서 새로 추가된 npm 스크립트를 실행합니다:

   ```sh
   npm start
   ```

   <img class="img-fluid" src="/docs/{{< param docs_version >}}/assets/img/guides/vite-dev-server.png" alt="Vite dev server running">

이 가이드의 마지막인 다음 섹션에서는 부트스트랩의 모든 CSS와 JavaScript를 가져오겠습니다.

## 부트스트랩 불러오기

1. **`vite.config.js`에서 부트스트랩의 Sass 가져오기를 설정하세요.** 이제 설정 파일이 완성되었으며 아래와 같은 내용이 되어 있을 것입니다. 여기서 유일하게 새로 추가된 부분은 `resolve` 섹션입니다. 가져오는 것을 가능한 간단하게 하기 위해 `node_modules` 내의 소스 파일에 alias를 추가해 사용됩니다.

   <!-- eslint-skip -->
   ```js
   const path = require('path')

   export default {
     root: path.resolve(__dirname, 'src'),
     resolve: {
       alias: {
         '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
       }
     },
     server: {
       port: 8080,
       hot: true
     }
   }
   ```

2. **이제 부트스트랩의 CSS를 불러오겠습니다.** 부트스트랩의 모든 소스 Sass를 가져오려면 `src/scss/styles.scss`에 다음을 추가하세요.

   ```scss
   // Import all of Bootstrap's CSS
   @import "~bootstrap/scss/bootstrap";
   ```

   *원하는 경우 스타일시트를 개별적으로 가져올 수도 있습니다. 자세한 내용은 [Sass 불러오기 문서]({{< docsref "/customize/sass#importing" >}})를 참조하세요.*

3. **다음으로 CSS를 로드하고 부트스트랩의 JavaScript를 불러옵니다.** `src/js/main.js`에 다음을 추가하여 CSS를 로드하고 부트스트랩의 모든 JS를 임포트합니다. Popper는 부트스트랩을 통해 자동으로 임포트됩니다.

   <!-- eslint-skip -->
   ```js
   // Import our custom CSS
   import '../scss/styles.scss'

   // Import all of Bootstrap's JS
   import * as bootstrap from 'bootstrap'
   ```

   필요에 따라 JavaScript 플러그인을 개별적으로 가져와 번들 크기를 줄일 수도 있습니다:

   <!-- eslint-skip -->
   ```js
   import Alert from 'bootstrap/js/dist/alert';

   // or, specify which plugins you need:
   import { Tooltip, Toast, Popover } from 'bootstrap';
   ```

   *[Read our JavaScript docs]({{< docsref "/getting-started/javascript/" >}}) for more information on how to use Bootstrap's plugins.*

4. **이제 끝났습니다! 🎉** 부트스트랩의 소스 Sass와 JS가 완전히 로드되면 이제 로컬 개발 서버는 다음과 같은 모습일 것입니다.

   <img class="img-fluid" src="/docs/{{< param docs_version >}}/assets/img/guides/vite-dev-server-bootstrap.png" alt="Vite dev server running with Bootstrap">

   이제 사용하고자 하는 부트스트랩 컴포넌트를 추가할 수 있습니다. 추가 커스텀 Sass를 포함시키고 필요한 부트스트랩의 CSS 및 JS 부분만 임포트하여 빌드를 최적화하는 방법은 [전체 Vite 예제 프로젝트 확인](https://github.com/twbs/examples/tree/main/vite)을 참조하세요.

{{< markdown >}}
{{< partial "guide-footer.md" >}}
{{< /markdown >}}
