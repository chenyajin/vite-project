/*
 * @Author: ChenYaJin
 * @Date: 2022-06-30 17:24:31
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 14:43:38
 * @Description:
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
