<template>
  <b-table
    :items="propsItems"
    :fields="propFields"
    primary-key="prop"
    table-class="bv-docs-table"
    responsive="sm"
    sort-icon-left
    bordered
    striped
  >
  </b-table>
</template>
<script lang="ts">
import {resolveComponent, defineComponent, computed, ComputedRef} from 'vue'

// type definitions

export default defineComponent({
  name: 'BVComponentdoc',
  props: {
    component: {type: String},
    propsMeta: {
      // For getting prop descriptions
      type: Array,
      default: () => [],
    },
    slots: {
      type: Array,
      default: () => [],
    },
    events: {
      type: Array,
      default: () => [],
    },
    rootEventListeners: {
      type: Array,
      default: () => [],
    },
    aliases: {
      type: Array,
      default: () => [],
    },
    version: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const component = resolveComponent(props.component)

    const propsMetaObj: ComputedRef<[]> = computed(() => {
      return props.propsMeta.reduce((obj, propMeta) => {
        if (propMeta.prop) {
          obj[propMeta.prop] = propMeta
        }
        return obj
      }, {})
    })

    const propsItems: ComputedRef<[]> = computed(() => {
      const props = component.props

      return []
    })

    const propFields: ComputedRef<any> = computed(() => {
      const sortable = propsItems.value.length >= SORT_THRESHOLD

      const hasDescriptions = propsItems.value.some((p) => {
        return p.description
      })
      return [
        {key: 'prop', label: 'Property', sortable},
        {key: 'type', label: 'Type', sortable},
        {key: 'defaultValue', label: 'Default'},
        ...(hasDescriptions ? [{key: 'description', label: 'Description'}] : []),
      ]
    })

    return {
      propsItems,
      propsMetaObj,
    }
  },
})
</script>

})
