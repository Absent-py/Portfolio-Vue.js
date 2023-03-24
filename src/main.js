import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Three.js
import { TroisJSVuePlugin } from 'troisjs';

// import { defineComponent } from 'vue';
// import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';
// export default defineComponent({
//   components: { Box, Camera, Renderer, Scene, PointLight, LambertMaterial },
// });

// Router
import router from './router/index.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faEye, faEyeSlash, faPlus, faTrash, faPenToSquare, faList, faVk, faTelegram, faEnvelope, faBriefcase, faCaretDown, faCaretUp)

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app
  .use(vuetify)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(TroisJSVuePlugin)
  .mount('#app')
