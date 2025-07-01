import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import './MeetupView.css'
import MeetupCover from './MeetupCover.js'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupInfo from './MeetupInfo.js'
import MeetupDescription from "./MeetupDescription.js";

export default defineComponent({
  name: 'MeetupView',

  components: {
    MeetupInfo,
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupAgenda,
    MeetupDescription,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>

      <!-- Обложка митапа -->
      <MeetupCover
        :title="meetup.title"
        :image="meetup.image"
      />

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <!-- Описание митапа -->
            <MeetupDescription :description="meetup.description"/>

            <h2>Программа</h2>

            <!-- Программа митапа -->
            <MeetupAgenda
              v-if="meetup.agenda.length > 0"
              :agenda="meetup.agenda"
            />

            <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
            <UiAlert v-else>Программа пока пуста</UiAlert>

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->
            <MeetupInfo
              :date="meetup.date"
              :organizer="meetup.organizer"
              :place="meetup.place"
            />

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
