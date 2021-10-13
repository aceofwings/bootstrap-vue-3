import {computed, defineComponent, h, ref, toRefs} from 'vue'

export default defineComponent({
  name: 'BVAnchoredHeading',
  functional: true,
  props: {
    id: {
      type: String,
      default: '',
    },
    level: {
      type: [Number, String],
      default: 2,
    },
  },
  setup(props) {
    return {}
  },
  render() {
    const $anchor = h('b-link', {
      'class': 'anchorjs-link',
      'to': {hash: `#${this.id}`},
      'aria-labelledby': this.id || null,
      'aria-label': this.id ? null : 'Anchor',
    })

    const $content = h('span', {class: ['bd-content-title']}, [this.$slots.default(), $anchor])
    return h(
      `h${this.level}`,
      {
        id: this.id,
        tabindex: '-1',
      },
      $content
    )
  },
})
