import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/yanghong/learn/06-my-components/pure-ui/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/yanghong/learn/06-my-components/pure-ui/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
