export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/hero.png\",\"heroText\":\"ui-yh\",\"tagline\":1111,\"actions\":[{\"text\":\"Start→\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/about/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简介至上\",\"details\":\"简洁至上啊\"},{\"title\":\"简介至上\",\"details\":\"简洁至上啊\"},{\"title\":\"简介至上\",\"details\":\"简洁至上啊\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"index.md\"}")

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
