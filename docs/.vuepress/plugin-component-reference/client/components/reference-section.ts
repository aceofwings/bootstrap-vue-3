import AnchoredHeading from './anchored-heading'
import {computed, defineComponent, h, ref, toRefs} from 'vue'

import {usePageData} from '@vuepress/client'

export default defineComponent({
  name: 'BDVComponents',
  render() {
    return h(AnchoredHeading, {id: 'component-reference'}, 'Component reference')
  },
})
