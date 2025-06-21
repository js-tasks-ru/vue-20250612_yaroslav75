import { defineComponent, ref, watchEffect } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetup = ref(null)
    const meetupId = ref(1)

    watchEffect(async () => {
      try {
        meetup.value = await getMeetup(meetupId.value)
      } catch (error) {
        console.error(error)
      }
    })

    return {
      meetup,
      meetupId,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" @click="meetupId--"
                :disabled="meetupId === 1">Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <template v-for="id in 5">
            <div class="radio-group__button">
              <input
                :id="'meetup-id-'+ id"
                class="radio-group__input"
                type="radio"
                name="meetupId"
                :value="id"
                v-model="meetupId"
              />
              <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
            </div>
          </template>
        </div>

        <button class="button button--secondary" type="button" @click="meetupId++" :disabled="meetupId === 5">
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup?.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
