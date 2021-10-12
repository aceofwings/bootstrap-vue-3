import type {PluginObject} from '@vuepress/core'
import {path} from '@vuepress/utils'

const pluginObject: PluginObject = {
  name: 'plugin-object',
  clientAppEnhanceFiles: path.resolve(__dirname, './client/clientAppEnhance.ts'),
}

export default pluginObject
