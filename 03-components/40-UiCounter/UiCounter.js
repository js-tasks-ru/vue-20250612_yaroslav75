import { computed, defineComponent, toRefs } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    const { min, max, count } = toRefs(props)

    const isMin = computed(() => count.value <= min.value)
    const isMax = computed(() => count.value >= max.value)

    const onClickIncrement = () => {
      emit('update:count', count.value + 1)
    }
    const onClickDecrement = () => {
      emit('update:count', count.value - 1)
    }

    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    return {
      onClickIncrement,
      onClickDecrement,
      isMin,
      isMax,
    }
  },

  template: `
    <div class="counter">
      <UiButton
        @click="onClickDecrement"
        :disabled="isMin"
        aria-label="Decrement"
      >➖
      </UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton
        @click="onClickIncrement"
        :disabled="isMax"
        aria-label="Increment"
      >➕
      </UiButton>
    </div>
  `,
})
