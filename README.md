<!-- [νκ΅­μ΄π°π·](./README.ko.md) -->

<div align="center">

  <img src="./static/welcome/blog-main.gif" width="45%" />
  <img src="./static/welcome/blog-contents.gif" width="45%" />

</div>

<br><br>

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/LeeAndJang/blog-share/issues)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4b1962ce-6206-4d8f-9516-63be92294198/deploy-status)](https://app.netlify.com/sites/LeeAndJang/deploys)

<br><br>

## LeeAndJang Gatsby blog starter λ...

- `React.js`μ `Gatsby.js`λ₯Ό μ΄μ©νμ¬ λκ΅¬λ μμ½κ² λΈλ‘κ·Έλ₯Ό μ΄μν  μ μμ΅λλ€.
- `Netlify`μ `Github`λ₯Ό ν΅ν λ¬΄μ€λ¨, μλλ°°ν¬, μλ²λ¦¬μ€ μΉμλΉμ€λ₯Ό μ κ³΅ν©λλ€.
- μ΄ ννλ¦Ώμ μ΄μ©νλ©΄ λ¦¬μ‘νΈμ λν μ§μμ΄ μμ΄λ `λ¦¬μ‘νΈ κΈ°λ° λΈλ‘κ·Έ`λ₯Ό μ²΄νν  μ μμ΅λλ€.
- λ³λμ μ΄μμλ²μμ΄ `λ¬΄λ£ νΈμ€ν μλΉμ€`λ₯Ό μ΄μ©νμ¬ λλ§μ λΈλ‘κ·Έλ₯Ό `μ§μ ` μ μν  μ μμ΅λλ€.

<br>

## LeeAndJang Gatsby blog starter μμ μ κ³΅νλ μλΉμ€λ...

- π Code highlight with Fira Code font
- π§ CLI Tool
- π Emoji (emojione)
- π£ Social share feature (Twitter, Facebook)
- π¬ Comment feature (disqus, utterances)
- β 'Buy me a coffee' service
- π€ GA(Google Analytics)
- β­ Enhance UX
- β Configurable

<br>

## λ°λͺ¨ μ¬μ΄νΈ

- [Click Here !](https://l-j-gatsby-blog-starter.netlify.com/)

<details open>
  <summary>Use case (λΈλ‘κ·Έλ₯Ό μ¬μ©ν΄μ£Όμλ κ³ λ§μ΄ λΆλ€)</summary>
  <p>
    <!-- <img src="./assets/demos.png" alt="demo-image"> -->
    <ul>
      <li>L's tech blog: https://ramsbaby.netlify.com/</li>
      <li>J's tech blog: https://goguj.netlify.com/</li>
      <li>κΉμ νλμ blog: https://bisunny.netlify.com/</li>
    </
    </ul>
  </p>
</details>

> μ΄ λΈλ‘κ·Έ ννλ¦Ώμ μ¬μ©νμλ κ²½μ°, `Use case` μ λ³ΈμΈμ λΈλ‘κ·Έλ₯Ό μΆκ°ν΄μ£ΌμκΈΈ λΆνλλ¦½λλ€!

<br><br>

## π€ Quick Start

### 1. Clone a project

```sh
# create a new Gatsby site using the blog starter
npx gatsby new my-blog-starter https://github.com/LeeAndJang/L-J-gatsby-blog-starter
```

> If you are not using `npx`, following [Gatsby Getting Started](https://github.com/LeeAndJang/L-J-gatsby-blog-starter)

```sh
npm install -g gatsby-cli
gatsby new my-blog-starter https://github.com/LeeAndJang/L-J-gatsby-blog-starter
```

### 2. Start developing

```sh
cd my-blog-starter/
npm start
# open localhost:8000
```

### 3. Add your content

You can write...

- contents to blog in `content/blog` directory.
- resume `content/__about` directory.

> With markdown syntax and some meta data

### 4. Fix meta data

You can fix meta data of blog in `/gatsby-meta-config.js` file.

### 5. Publish with [netlify](https://netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LeeAndJang/L-J-gatsby-blog-starter)

> if you want to deploy github pages, add following script to package.json

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master -r 'git@github.com:${your github id}/${github page name}.github.io.git'"
}
```

<br><br>

## π§ Customize

### β Gatsby config

```sh
/root
βββ gatsby-browser.js // font, polyfill, onClientRender ...
βββ gatsby-config.js // Gatsby config
βββ gatsby-meta-config.js // Template meta config
βββ gatsby-node.js // Gatsby Node config
```

### β Structure

```sh
src
βββ components // Just component with styling
βββ layout // home, post layout
βββ pages // routing except post: /(home), /about
βββ styles
β   βββ code.scss
β   βββ dark-theme.scss
β   βββ light-theme.scss
β   βββ variables.scss
βββ templates
    βββ blog-post.js
    βββ home.js
```

### π¨ Style

You can customize color in `src/styles` directory.

```sh
src/styles
βββ code.scss
βββ dark-theme.scss
βββ light-theme.scss
βββ variables.scss
```

### π­ Tips (You can change...)

- Profile image! (replace file in `/content/assets/profile.png`)
- Create thumbnail image (add file to `/static`)
- Favicon image! (replace file in `/content/assets/React.js_logo-512.png`)
- Header gradient! (\$theme-gradient `/styles/variables.scss`)
- Utterances repository! (replace repository address in `/gatsby-meta-config.js`)
  - β οΈ Please check, this guide(https://utteranc.es/)

<br><br>

## β Like it?

<a href="https://www.buymeacoffee.com/ramsbaby" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" >
</a>

<br><br>

## π Source of Our blog...

[νμ¬μ½λμ λΈλ‘κ·Έ](https://github.com/JaeYeopHan/gatsby-starter-bee/)!

<br><br>

## :bug: Bug reporting

[Issue](https://github.com/LeeAndJang/L-J-gatsby-blog-starter/issues)

<br><br>

## π Contributing

[Contributing guide](./CONTRIBUTING.md)

<br><br>

## π Creator

[μ΄μ μ°](https://www.notion.so/Ramsbaby-13eb750380004cab9942867038d7e00f)
<br>
[μ₯μ² μ°](https://github.com/jcwooo)

<br><br>

## LICENSE

[MIT](./LICENSE)

<div align="center">

<sub><sup>Project by <a href="https://github.com/LeeAndJang/L-J-gatsby-blog-starter/">@LeeAndJang</a></sup></sub><small>β</small>

</div>
