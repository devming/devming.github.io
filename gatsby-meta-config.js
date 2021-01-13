module.exports = {
  title: `devming의 뇌장하드`,
  description: `iOS 개발자 devming의 블로그입니다.`,
  author: `devming`,
  introduction: `UX를 좋아하는 개발자 devming입니다.`,
  siteUrl: `https://devming.github.io/`, // Your blog site url
  social: {
    github: `devming` // Your GitHub account
  },
  icon: `content/assets/React.js_logo-512.png`, // Add your favicon
  keywords: [`iOS`, `Apple`, `Project Vanilla`, `Stock`],
  comment: {
    disqusShortName: '', // Your disqus-short-name. check disqus.com.
    utterances: 'devming/devmingming', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: 'devming',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: '', // Add your google analytics tranking ID
  seo: {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://devming.github.io/',
      sitemap: 'https://devming.github.io/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
}
