import { computed, defineComponent, ref } from 'vue'

// Значения взяты из https://jsonplaceholder.typicode.com/comments
export const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
]

export default defineComponent({
  name: 'MarkedEmailsApp',

  setup() {
    const search = ref('')

    const filteredEmails = computed(() =>
      emails.map(email => {
        const isMarked = search.value ? email.toLowerCase().includes(search.value.toLowerCase()) : false
        return {
          value: email,
          isMarked,
        }
      }),
    )

    return {
      search,
      filteredEmails,
    }
  },

  template: `
    <div>
      <div class="form-group">
        <input v-model.trim="search" type="search" aria-label="Search"/>
      </div>
      <ul aria-label="Emails">
        <li v-for="email in filteredEmails" :class="{'marked': email.isMarked}">
          {{ email.value }}
        </li>
      </ul>
    </div>
  `,
})
