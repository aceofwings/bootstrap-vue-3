import AnchoredHeading from './anchored-heading'
import {computed, defineComponent, h, ref, toRefs} from 'vue'

export default defineComponent({
  name: 'BDVComponents',
  render() {
    return h(AnchoredHeading, {props: {id: 'component-reference'}}, 'Component reference')
  },
})
