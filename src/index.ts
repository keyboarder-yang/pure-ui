import * as components from '@/components/index';
import Button from '@/components/button/Button.vue'
import {forEach} from "lodash-es";
import type {App} from "vue";
import '@/style/index.css'

export const createPureUI = () => {
    return {
        install: (app:App) => {
            forEach(components,component => {
                app.component(component.name,component)
            })
        }
    }
}

export {Button}
