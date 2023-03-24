<template>
    <v-container class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 style="text-transform: uppercase;" class="mb-5">This is my own 3D portfolio</h1>

            <svg class="room" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2160 2160">
                <image  width="2160" height="2160" :xlink:href="getImage()"></image> 
                <a cursor="pointer" :onclick="social">
                    <rect x="390" y="936" fill="#fff" opacity="0" width="255" height="292"></rect>
                </a><a cursor="pointer" :onclick="poster">
                    <rect x="747" y="423" fill="#fff" opacity="0" width="230" height="407"></rect>
                </a><a cursor="pointer" :onclick="window">
                    <rect x="1190" y="420" fill="#fff" opacity="0" width="347" height="553"></rect>
                </a><a cursor="pointer" :onclick="books">
                    <rect x="1590" y="606" fill="#fff" opacity="0" width="290" height="470"></rect>
                </a><a cursor="pointer" :onclick="bed">
                    <rect x="907" y="1110" fill="#fff" opacity="0" width="660" height="220"></rect>
                </a>
            </svg>
                
            

            
        </v-container>
    <v-dialog
      v-model="dialog"
      width="auto"
  >
    <template v-slot:activator="{ props }">
    </template>
    <v-card>
      <v-container>
        <h4>{{ dialog_text }}</h4>
        <v-btn v-if="dialog_type === 'social'" class="mt-9" block color="indigo" @click="pushToSocial()">
          <h4>{{ dialog_button }}</h4>
        </v-btn>
        <v-btn v-if="dialog_type === 'window'" class="mt-9" block color="indigo" @click="closeWindow()">
          <h4>{{ dialog_button }}</h4>
        </v-btn>
        <v-btn v-if="dialog_type === 'bed'" class="mt-9" block color="indigo" @click="sleep()">
          <h4>{{ dialog_button }}</h4>
        </v-btn>
        <v-btn v-if="dialog_type === 'books'" class="mt-9" block color="indigo" @click="pushToSocial()">
          <h4>{{ dialog_button }}</h4>
        </v-btn>
        <v-btn v-if="dialog_type === 'poster'" class="mt-9" block color="indigo" @click="pushToSocial()">
          <h4>{{ dialog_button }}</h4>
        </v-btn>
        <v-btn v-if="dialog_type === 'none'" class="mt-9" block color="indigo" @click="">
          <h4>{{ dialog_button }}</h4>
        </v-btn>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
    data: () => ({
        dialog_text: '',
        dialog_type: '',
        dialog_button: '',
        dialog: false,

        night: false,
        closed: false,
    }),
    methods: {
        getImage() {
          if (this.night && this.closed) {
            return '/room10_night_closed.png'
          }
          else if (!this.night && this.closed) {
            return '/room10_closed.png'
          }
          else if (this.night && !this.closed) {
            return '/room10_night.png'
          }
          else if (!this.night && !this.closed) {
            return '/room10.png'
          }
        },
        social() {
            this.dialog_text = 'Do you want to find my socials?'
            this.dialog_type = 'social'
            this.dialog_button = 'Take me to social!'
            this.dialog = true
        },
        window() {
            this.dialog_text = 'Do you want to close the window?'
            this.dialog_type = 'window'
            this.dialog_button = 'Close it!'
            this.dialog = true
        },
        closeWindow() {
          this.closed = !this.closed
          this.dialog = false
        },
        bed() {
            this.dialog_text = 'Do you want to sleep?'
            this.dialog_type = 'bed'
            this.dialog_button = 'Sleep!'
            this.dialog = true
        },
        sleep() {
          this.night = !this.night
          this.dialog = false
        },
        poster() {
            this.dialog_text = 'Do you want to see my programming experiance?'
            this.dialog_type = 'poster'
            this.dialog_button = 'Check it out!'
            this.dialog = true
        },
        books() {
            this.dialog_text = 'Do you want to see my best works?'
            this.dialog_type = 'books'
            this.dialog_button = 'Check it out!'
            this.dialog = true
        }
    }
}
</script>

<style scoped>
.card {
    height: 400px;
}
.room {
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
 
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
</style>