import * as components from '@/components/index';
import {forEach} from "lodash-es";
import type {App} from "vue";
import '@/style/index.css'

export const createDemoUI = () => {
    return {
        install: (app:App) => {
            forEach(components,component => {
                app.component(component.name,component)
            })
        }
    }
}
export {components}