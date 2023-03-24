<template>
    <v-container :style="`width: ${width}%; margin: auto;`" class="mt-3 mb-5">
        <v-card theme="dark" style="background-color: #1a5276; border-radius: 15px;">
            <v-container>
                <h1 style="text-transform: uppercase;" class="mt-3 mb-5">Contact me</h1>
                <v-text-field v-model="name" label="От кого"></v-text-field>
                <v-text-field v-model="email" label="Ваш email"></v-text-field>
                <v-textarea v-model="message" label="Текст письма"></v-textarea>
                <v-btn @click="sendMail">Отправить!</v-btn>
            </v-container>
        </v-card>
        <h2 class="mt-5 mb-10">Socials</h2>
        <v-row style="width: 80%; margin: auto;">
            <v-col cols="4" v-for="item in socials">
                <v-btn @click="this.$router.push(item.link)" style="background-color: rgba(0, 0, 0, 0);" class="mr-5" icon size="x-large">
                    <img :src="item.img" :alt="item.text" style="border-radius: 50%; width: 64px; height: 64px;">
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-snackbar color="red-lighten-3" rounded="pill" v-model="snackbar">
        <p>{{ snackbar_text }}</p>
        <template v-slot:actions></template>
  </v-snackbar>
</template>

<script>
import emailjs from 'emailjs-com';
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

export default {
    setup () {
      const { name } = useDisplay()

      const width = computed(() => {
        switch (name.value) {
          case 'xs': return '100'
          case 'sm': return '70'
          case 'md': return '40'
          case 'lg': return '30'
          case 'xl': return '20'
          case 'xxl': return '20'
        }

        return undefined
      })

      return { width }
    },
    data: () => ({
        socials: [
            { text: 'ВКонтакте', img: '/icons/vk.png', link: '' },
            { text: 'Телеграм', img: '/icons/telegram.png', link: '' },
            { text: 'HH.RU', img: '/icons/hh.png', link: '' },
        ],

        snackbar: false,
        snackbar_text: '',

        name: '',
        email: '',
        message: ''
    }),
    methods: {
        sendMail(e) {
            if (!this.validate()) {
                return
            }
            try {
                emailjs.send('service_zjfeisl', 'template_8bzwu6h', {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }, 'qqImq2V6M2GQGPHGV' )

            } catch(error) {
                console.log({error})
            }
            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''

            this.snackbar_text = 'Ваше письмо доставлено!';
            this.snackbar = true;
        },
        validate() {
            if (this.name === '') {
                this.snackbar_text = 'Введите имя!';
                this.snackbar = true;
                return false;
            }

            if (this.email === '') {
                this.snackbar_text = 'Введите email!';
                this.snackbar = true;
                return false;
            }

            if (this.message === '') {
                this.snackbar_text = 'Введите текст письма!';
                this.snackbar = true;
                return false;
            }

            return true
        },
        validateEmail(email) {

        },
    }
}

</script>