export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"sheep-design-vue\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/hero.png\",\"heroText\":\"sheep-design-vue\",\"tagline\":\"sheep-design-vue\",\"title\":\"sheep-design-vue\",\"actions\":[{\"text\":\"Start→\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/about/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简介至上\",\"details\":\"简洁至上啊\"},{\"title\":\"简介至上\",\"details\":\"简洁至上啊\"},{\"title\":\"简介至上\",\"details\":\"简洁至上啊\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1656671017000,\"contributors\":[{\"name\":\"yanghong\",\"email\":\"15034009501@163.com\",\"commits\":2}]},\"filePathRelative\":\"index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
