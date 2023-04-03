---
layout: docs
title: "Bootstrap & Webpack"
description: Webpack을 사용하여 프로젝트에 부트스트랩의 CSS와 JavaScript를 포함하고 번들링하는 방법에 대한 공식 가이드입니다.
group: getting-started
toc: true
thumbnail: guides/bootstrap-webpack@2x.png
---
{{< callout info >}}
{{< partial "callout-untranslated.md" >}}
{{< /callout >}}
<img class="mb-4 img-fluid rounded-3" srcset="/docs/{{< param docs_version >}}/assets/img/guides/bootstrap-webpack.png, /docs/{{< param docs_version >}}/assets/img/guides/bootstrap-webpack@2x.png 2x" src="/docs/{{< param docs_version >}}/assets/img/guides/bootstrap-webpack.png" width="2000" height="1000" alt="">

{{< callout >}}

**끝부분으로 건너뛰고 싶으신가요?** 이 가이드의 소스 코드와 워킹 데모를 [twbs/examples 리포지토리](https://github.com/twbs/examples/tree/main/webpack)에서 다운로드 하세요. [StackBlitz에서 예제를 열어](https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index.html) 실시간으로 편집할 수도 있습니다.
{{< /callout >}}

## 설정

부트스트랩으로 웹팩 프로젝트를 처음부터 구축하는 것이므로 실제로 시작하기 전에 몇 가지 전제 조건과 선행 단계가 있습니다. 이 가이드를 사용하려면 Node.js가 설치되어 있고 터미널에 어느 정도 익숙해야 합니다.

1. **프로젝트 폴더를 만들고 npm을 설치합니** `my-project` 폴더를 만들고 npm이 모든 대화형 질문을 하지 않도록 `-y` 인수를 사용하여 초기화 합니다.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Webpack을 설치합니다.** 다음으로 Webpack 개발 종속 요소를 설치해야 합니다.: Webpack의 핵심인 `webpack`, 터미널에서 Webpack 명령을 실행하기 위한 `webpack-cli`, 로컬 개발 서버를 실행하기 위한 `webpack-dev-server`입니다. 이러한 종속성이 프로덕션이 아닌 개발 전용임을 알리기 위해 `--save-dev`를 사용합니다.

   ```sh
   npm i --save-dev webpack webpack-cli webpack-dev-server
   ```

3. **Bootstrap을 설치합니다.** 이제 부트스트랩을 설치할 수 있습니다. 드롭다운, 팝오버, 툴팁의 위치가 Popper에 따라 달라지므로 Popper도 설치합니다. 이러한 컴포넌트를 사용할 계획이 없다면 여기서 Popper를 생략할 수 있습니다.

   ```sh
   npm i --save bootstrap @popperjs/core
   ```

4. **추가 종속 요소를 설치합니다.** Webpack과 부트스트랩 외에도 부트스트랩의 CSS와 JS를 웹팩으로 제대로 가져와 번들링하려면 몇 가지 종속성이 더 필요합니다. 여기에는 Sass, 일부 로더 및 자동 프리픽서가 포함됩니다.

   ```sh
   npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader
   ```

이제 필요한 모든 종속 요소가 설치되었으므로 프로젝트 파일을 만들고 부트스트랩을 가져올 수 있습니다.

## 프로젝트 구조

이미 `my-project` 폴더를 생성하고 npm을 초기화했습니다. 이제 프로젝트 구조를 완성하기 위해 `src` 및 `dist` 폴더도 생성하겠습니다. `my-project`에서 다음을 실행하거나 아래에 표시된 폴더와 파일 구조를 수동으로 생성합니다.

```sh
mkdir {dist,src,src/js,src/scss}
touch dist/index.html src/js/main.js src/scss/styles.scss webpack.config.js
```

완료되면 전체 프로젝트의 모습은 다음과 같아야 합니다:

```text
my-project/
├── dist/
│   └── index.html
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
├── package-lock.json
├── package.json
└── webpack.config.js
```

이 시점에서 모든 것이 올바른 위치에 있지만 아직 `webpack.config.js`를 채우지 않았기 때문에 Webpack이 작동하지 않습니다.

## Webpack 구성

종속성이 설치되고 코딩을 시작할 수 있는 프로젝트 폴더가 준비되었으므로 이제 Webpack을 구성하고 로컬에서 프로젝트를 실행할 수 있습니다.

1. **에디터에서 `webpack.config.js`를 엽니다.** 비어 있으므로 서버를 시작할 수 있도록 상용구 구성을 추가해야 합니다. 이 구성 부분은 Webpack이 프로젝트의 JavaScript를 어디에서 찾을지, 컴파일된 코드를 어디에 출력할지(`dist`), 개발 서버가 어떻게 동작해야 하는지(핫 리로드를 통해 `dist` 폴더에서 가져오기)를 알려줍니다.

   ```js
   const path = require('path')

   module.exports = {
     entry: './src/js/main.js',
     output: {
       filename: 'main.js',
       path: path.resolve(__dirname, 'dist')
     },
     devServer: {
       static: path.resolve(__dirname, 'dist'),
       port: 8080,
       hot: true
     }
   }
   ```

2. **다음으로 'dist/index.html'을 작성합니다.** 이것은 이후 단계에서 추가할 번들 CSS와 JS를 활용하기 위해 Webpack이 브라우저에 로드할 HTML 페이지입니다. 그러기 전에 렌더링할 무언가를 제공하고 이전 단계의 `output` JS를 포함시켜야 합니다.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Bootstrap w/ Webpack</title>
     </head>
     <body>
       <div class="container py-4 px-3 mx-auto">
         <h1>Hello, Bootstrap and Webpack!</h1>
         <button class="btn btn-primary">Primary button</button>
       </div>
       <script src="./main.js"></script>
     </body>
   </html>
   ```

   여기에 `div class="container"`와 `<button>`을 사용하여 약간의 부트스트랩 스타일링을 포함시켜 웹팩에서 부트스트랩의 CSS가 로드될 때 확인할 수 있도록 했습니다.

3. **이제 Webpack을 실행하기 위한 npm 스크립트가 필요합니다.** `package.json`을 열고 아래에 표시된 `start` 스크립트를 추가합니다(이미 테스트 스크립트가 있어야 합니다). 이 스크립트를 사용하여 로컬 Webpack 개발 서버를 시작하겠습니다.

   ```json
   {
     // ...
     "scripts": {
       "start": "webpack serve --mode development",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     // ...
   }
   ```

4. **마지막으로 Webpack을 시작합니다.** 터미널의 `my-project` 폴더에서 새로 추가된 npm 스크립트를 실행합니다:

   ```sh
   npm start
   ```

   <img class="img-fluid" src="/docs/{{< param docs_version >}}/assets/img/guides/webpack-dev-server.png" alt="Webpack dev server running">

이 가이드의 다음이자 마지막 섹션에서는 Webpack 로더를 설정하고 부트스트랩의 모든 CSS와 JavaScript를 가져오겠습니다.

## 부트스트랩 가져오기

부트스트랩을 Webpack으로 가져오려면 첫 번째 섹션에서 설치한 로더가 필요합니다. npm을 사용하여 설치했지만 이제 이를 사용하도록 Webpack을 구성해야 합니다.

1. **`webpack.config.js`에서 로더를 설정합니다.** 이제 구성 파일이 완성되었으며 아래 스니펫과 일치해야 합니다. 여기서 유일하게 새로 추가된 부분은 `module` 섹션입니다.

   ```js
   const path = require('path')

   module.exports = {
     entry: './src/js/main.js',
     output: {
       filename: 'main.js',
       path: path.resolve(__dirname, 'dist')
     },
     devServer: {
       static: path.resolve(__dirname, 'dist'),
       port: 8080,
       hot: true
     },
     module: {
       rules: [
         {
           test: /\.(scss)$/,
           use: [
             {
               loader: 'style-loader'
             },
             {
               loader: 'css-loader'
             },
             {
               loader: 'postcss-loader',
               options: {
                 postcssOptions: {
                   plugins: () => [
                     require('autoprefixer')
                   ]
                 }
               }
             },
             {
               loader: 'sass-loader'
             }
           ]
         }
       ]
     }
   }
   ```

   이 모든 로더가 필요한 이유를 요약하면 다음과 같습니다. `style-loader`는 HTML 페이지의 `<head>`에 있는 `<style>` 요소에 CSS를 삽입하고, `css-loader`는 `@import`와 `url()`을 사용하는 데 도움을 주며, `postcss-loader`는 Autoprefixer에 필요하고, `sass-loader`는 Sass를 사용할 수 있도록 합니다.

2. **이제 부트스트랩의 CSS를 가져와 보겠습니다.** 부트스트랩의 모든 소스 Sass를 가져오려면 `src/scss/styles.scss`에 다음을 추가하세요.

   ```scss
   // Import all of Bootstrap's CSS
   @import "~bootstrap/scss/bootstrap";
   ```

   *원하는 경우 스타일시트를 개별적으로 가져올 수도 있습니다. 자세한 내용은 [Sass import 문서를 참조하세요.]({{< docsref "/customize/sass#importing" >}})*

3. **다음으로 CSS를 로드하고 부트스트랩의 JavaScript를 가져옵니다.** `src/js/main.js`에 다음을 추가하여 CSS를 로드하고 부트스트랩의 모든 JS를 가져옵니다. Popper는 부트스트랩을 통해 자동으로 임포트됩니다.

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
   import Alert from 'bootstrap/js/dist/alert'

   // or, specify which plugins you need:
   import { Tooltip, Toast, Popover } from 'bootstrap'
   ```

   *부트스트랩의 플러그인 사용 방법에 대한 자세한 내용은 [JavaScript 문서를 참조하세요]({{< docsref "/getting-started/javascript/" >}}) .*

4. **이제 끝났습니다! 🎉** 부트스트랩의 소스 Sass와 JS가 완전히 로드되면 이제 로컬 개발 서버는 다음과 같은 모습일 것입니다.

   <img class="img-fluid" src="/docs/{{< param docs_version >}}/assets/img/guides/webpack-dev-server-bootstrap.png" alt="Webpack dev server running with Bootstrap">

   이제 사용하려는 부트스트랩 컴포넌트를 추가하기 시작할 수 있습니다. 추가 커스텀 Sass를 포함시키고 필요한 부트스트랩의 CSS 및 JS 부분만 임포트하여 빌드를 최적화하는 방법은 [전체 Webpack 예제 프로젝트](https://github.com/twbs/examples/tree/main/webpack)를 확인하세요.

## 프로덕션 최적화

설정에 따라 프로덕션 환경에서 프로젝트를 실행하는 데 유용한 몇 가지 추가 보안 및 속도 최적화를 구현할 수 있습니다. 이러한 최적화는 [Webpack 예제 프로젝트](https://github.com/twbs/examples/tree/main/webpack)에 적용되지 않으며 구현은 사용자의 몫입니다.

### CSS 추출

위에서 구성한 `style-loader`는 번들로 CSS를 편리하게 내보내므로 `dist/index.html`에서 CSS 파일을 수동으로 로드할 필요가 없습니다. 그러나 이 접근 방식은 엄격한 콘텐츠 보안 정책에서는 작동하지 않을 수 있으며, 번들 크기가 커서 애플리케이션에서 병목 현상이 발생할 수 있습니다.

`dist/index.html`에서 직접 로드할 수 있도록 CSS를 분리하려면 `mini-css-extract-loader` 웹팩 플러그인을 사용하세요.

먼저 플러그인을 설치합니다:

```sh
npm install --save-dev mini-css-extract-plugin
```

그런 다음 웹팩 구성에서 플러그인을 인스턴스화하여 사용합니다:

```diff
--- a/webpack/webpack.config.js
+++ b/webpack/webpack.config.js
@@ -1,8 +1,10 @@
+const miniCssExtractPlugin = require('mini-css-extract-plugin')
 const path = require('path')
 
 module.exports = {
   mode: 'development',
   entry: './src/js/main.js',
+  plugins: [new miniCssExtractPlugin()],
   output: {
     filename: "main.js",
     path: path.resolve(__dirname, "dist"),
@@ -18,8 +20,8 @@ module.exports = {
         test: /\.(scss)$/,
         use: [
           {
-            // Adds CSS to the DOM by injecting a `<style>` tag
-            loader: 'style-loader'
+            // Extracts CSS for each JS file that includes CSS
+            loader: miniCssExtractPlugin.loader
           },
           {
```

`npm run build`를 다시 실행하면 `src/js/main.js`에서 가져온 CSS가 모두 포함된 `dist/main.css`라는 파일이 새로 생성될 것입니다. 이제 브라우저에서 `dist/index.html`을 보면 `dist/main.css`에 있는 것처럼 스타일이 누락되어 있을 것입니다. 이렇게 생성된 CSS는 다음과 같이 `dist/index.html`에 포함시킬 수 있습니다:

```diff
--- a/webpack/dist/index.html
+++ b/webpack/dist/index.html
@@ -3,6 +3,7 @@
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
+    <link rel="stylesheet" href="./main.css">
     <title>Bootstrap w/ Webpack</title>
   </head>
   <body>
```

### SVG 파일 추출하기

부트스트랩의 CSS에는 인라인 `data:` URI를 통해 SVG 파일에 대한 여러 참조가 포함되어 있습니다. 프로젝트에 이미지에 대한 `data:` URI를 차단하는 콘텐츠 보안 정책을 정의하면 이러한 SVG 파일이 로드되지 않습니다. Webpack의 에셋 모듈 기능을 사용하여 인라인 SVG 파일을 추출하면 이 문제를 해결할 수 있습니다.

다음과 같이 인라인 SVG 파일을 추출하도록 Webpack을 구성합니다:

```diff
--- a/webpack/webpack.config.js
+++ b/webpack/webpack.config.js
@@ -16,6 +16,14 @@ module.exports = {
   },
   module: {
     rules: [
+      {
+        mimetype: 'image/svg+xml',
+        scheme: 'data',
+        type: 'asset/resource',
+        generator: {
+          filename: 'icons/[hash].svg'
+        }
+      },
       {
         test: /\.(scss)$/,
         use: [
```

`npm run build`를 다시 실행하면 `dist/icons`로 추출되고 CSS에서 적절하게 참조된 SVG 파일을 찾을 수 있습니다.

{{< markdown >}}
{{< partial "guide-footer.md" >}}
{{< /markdown >}}
