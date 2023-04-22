---
layout: docs
title: "Bootstrap & Parcel"
description: Parcel을 사용하여 프로젝트에 부트스트랩의 CSS와 JavaScript를 포함하고 번들링하는 방법에 대한 공식 가이드입니다.
group: getting-started
toc: true
thumbnail: guides/bootstrap-parcel@2x.png
---
<img class="mb-4 img-fluid rounded-3" srcset="/docs/{{< param docs_version >}}/assets/img/guides/bootstrap-parcel.png, /docs/{{< param docs_version >}}/assets/img/guides/bootstrap-parcel@2x.png 2x" src="/docs/{{< param docs_version >}}/assets/img/guides/bootstrap-parcel.png" width="2000" height="1000" alt="">

{{< callout >}}
**끝으로 건너뛰고 싶으신가요?** 이 가이드의 소스 코드와 동작 확인을 위한 데모는 [twbs/examples repository](https://github.com/twbs/examples/tree/main/parcel)에서 다운로드 하세요. [StackBlitz 예제 보기](https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index.html)에서도 가능하지만 현재 Parcel은 지원되지 않아 실행할 수 없습니다.
{{< /callout >}}

## 설정하기

부트스트랩으로 Parcel 프로젝트를 처음부터 구축하기 위해 실제로 시작하기 전에 몇 가지 전제 조건과 선행 단계가 있습니다. 이 가이드를 사용하려면 Node.js가 설치되어 있고 터미널을 어느 정도 다룰 줄 알아야 합니다.

1. **프로젝트 폴더를 만들고 npm을 설정합니다.** `my-project` 폴더를 만들고 모든 대화형 질문을 하지 않도록 `-y` 인수를 사용하여 npm을 초기화 합니다.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Parcel을 설치합니다.** 웹팩 가이드와 달리 여기에는 빌드 도구 종속성이 하나만 있습니다. Parcel은 언어 변환기(예: Sass)를 감지하면 자동으로 설치합니다. 이 종속성이 프로덕션용이 아닌 개발용으로만 사용된다는 것을 알리기 위해 `--save-dev`를 사용합니다.

   ```sh
   npm i --save-dev parcel
   ```

3. **Bootstrap을 설치합니다.** 이제 부트스트랩을 설치할 수 있습니다. 드롭다운, 팝오버, 툴팁의 위치가 부트스트랩에 따라 달라지므로 Popper도 설치합니다. 이러한 컴포넌트를 사용하지 않을 계획이라면 여기서 Popper를 생략할 수 있습니다.

   ```sh
   npm i --save bootstrap @popperjs/core
   ```

이제 필요한 모든 종속 요소가 설치되었으므로 프로젝트 파일을 만들고 부트스트랩을 가져올 수 있습니다.

## 프로젝트 구조

이미 `my-project` 폴더를 생성하고 npm을 초기화했습니다. 이제 프로젝트 구조를 완성하기 위해 `src` 폴더, 스타일시트, JavaScript 파일도 생성합니다. `my-project`에서 다음을 실행하거나 아래 표시된 폴더와 파일 구조를 수동으로 생성합니다.

```sh
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss
```

완료되면 전체 프로젝트는 다음과 같은 모습일 것입니다:

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── package-lock.json
└── package.json
```

이 시점에서 모든 것이 올바른 위치에 있지만 Parcel은 서버를 시작하기 위해 HTML 페이지와 npm 스크립트가 필요합니다.

## Parcel 설정하기

종속성이 설치되고 코딩을 시작할 수 있는 프로젝트 폴더가 준비되었으므로 이제 Parcel을 설정하고 로컬에서 프로젝트를 실행할 수 있습니다. Parcel 자체는 설계상 설정 파일이 필요하지 않지만 서버를 시작하려면 npm 스크립트와 HTML 파일이 필요합니다.

1. **`src/index.html` 파일을 작성합니다.** Parcel은 렌더링할 페이지가 필요하므로 `index.html` 페이지를 사용하여 CSS 및 JavaScript 파일을 포함한 몇 가지 기본 HTML을 설정합니다.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Bootstrap w/ Parcel</title>
       <link rel="stylesheet" href="scss/styles.scss">
       <script type="module" src="js/main.js"></script>
     </head>
     <body>
       <div class="container py-4 px-3 mx-auto">
         <h1>Hello, Bootstrap and Parcel!</h1>
         <button class="btn btn-primary">Primary button</button>
       </div>
     </body>
   </html>
   ```

   여기에는 `div class="container"`와 `<button>`으로 약간의 부트스트랩의 스타일링을 사용하여 부트스트랩의 CSS가 웹팩에 로드될 때 표시되도록 했습니다.

   Parcel은 자동으로 Sass를 사용하고 있음을 감지하고 이를 지원하기 위해 [Sass Parcel 플러그인](https://parceljs.org/languages/sass/)을 설치합니다. 그러나 필요하다면 수동으로 `npm i --save-dev @parcel/transformer-sass`를 실행할 수도 있습니다.

2. **Parcel npm 스크립트를 추가합니다.** `package.json`을 열고 `scripts` 객체에 아래의 `start` 스크립트를 추가합니다. 이 스크립트로 Parcel 개발 서버를 실행하고 `dist` 디렉터리에 컴파일한 후 생성한 HTML 파일을 렌더링합니다.

   ```json
   {
      // ...
      "scripts": {
        "start": "parcel serve src/index.html --public-url / --dist-dir dist",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      // ...
   }
   ```

3. **마지막으로, Parcel을 시작할 수 있습니다.** 터미널의 `my-project` 폴더에서 새로 추가된 npm 스크립트를 실행합니다:

   ```sh
   npm start
   ```

   <img class="img-fluid" src="/docs/{{< param docs_version >}}/assets/img/guides/parcel-dev-server.png" alt="Parcel dev server running">

이 가이드의 마지막인 다음 섹션에서는 부트스트랩의 모든 CSS와 JavaScript를 가져오겠습니다.

## 부트스트랩 불러오기

부트스트랩을 Parcel로 가져오려면 두 개의 임포트가 필요한데, 하나는 `styles.scss`, 다른 하나는 `main.js`를 임포트해야 합니다.

1. **부트스트랩의 CSS를 불러옵니다.** 부트스트랩의 모든 소스 Sass를 가져오려면 `src/scss/styles.scss`에 다음을 추가하세요.

   ```scss
   // Import all of Bootstrap's CSS
   @import "~bootstrap/scss/bootstrap";
   ```

   *원하는 경우 스타일시트를 개별적으로 가져올 수도 있습니다. 자세한 내용은 [Sass 불러오기 문서]({{< docsref "/customize/sass#importing" >}})를 참조하세요.*

2. **부트스트랩의 JS를 불러옵니다.** 부트스트랩의 모든 JS를 가져오려면 `src/js/main.js`에 다음을 추가합니다. Popper는 부트스트랩을 통해 자동으로 임포트됩니다.

   <!-- eslint-skip -->
   ```js
   // Import all of Bootstrap's JS
   import * as bootstrap from 'bootstrap'
   ```

   필요에 따라 JavaScript 플러그인을 개별적으로 가져와 번들 크기를 줄일 수도 있습니다:

   <!-- eslint-skip -->
   ```js
   import Alert from 'bootstrap/js/dist/alert'

   // or, specify which plugins you need:
   import { Tooltip, Toast, Popover } from 'bootstrap'
   ```

   *부트스트랩의 플러그인 사용 방법에 대한 자세한 내용은 [JavaScript 문서]({{< docsref "/getting-started/javascript/" >}})를 참조하세요.*

3. **이제 끝났습니다! 🎉** 부트스트랩의 소스 Sass와 JS가 완전히 로드되면 이제 로컬 개발 서버는 다음과 같은 모습일 것입니다.

   <img class="img-fluid" src="/docs/{{< param docs_version >}}/assets/img/guides/parcel-dev-server-bootstrap.png" alt="Parcel dev server running with Bootstrap">

   이제 사용하려는 부트스트랩 컴포넌트를 추가할 수 있습니다. 추가 커스텀 Sass를 포함시키고 필요한 부분만 Bootstrap의 CSS와 JS를 임포트하여 빌드를 최적화하는 방법은 [전체 Parcel 예제 프로젝트](https://github.com/twbs/examples/tree/main/parcel)를 참조하세요.

{{< markdown >}}
{{< partial "guide-footer.md" >}}
{{< /markdown >}}
