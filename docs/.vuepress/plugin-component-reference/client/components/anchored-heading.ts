import {computed, defineComponent, h, ref, toRefs} from 'vue'
export default {
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
  render() {
    const $anchor = h('b-link', {
      staticClass: 'anchorjs-link',
      props: {to: {hash: `#${this.id}`}},
      attrs: {
        'aria-labelledby': this.id || null,
        'aria-label': this.id ? null : 'Anchor',
      },
    })

    const $content = h('span', {staticClass: 'bd-content-title'}, [$anchor]) // [children, $anchor])

    return h(
      `h${this.level}`,
      {
        id: this.id,
        tabindex: '-1',
      },
      $content
    )
  },
}
