<template>
    <WhoAmI class="mt-12"/>
    <MostImportant class="mt-12"/>
    <About id="#about" />
    <Experience id="#experience" />
    <Contact id="#contact" />
    <Credits />
</template>

<script>
import WhoAmI from '../components/HomePage/WhoAmI.vue'
import MostImportant from '../components/HomePage/MostImportant.vue'
import About from '../components/HomePage/About.vue'
import Experience from '../components/HomePage/Experience.vue'
import Contact from '../components/HomePage/Contact.vue'
import Credits from '../components/HomePage/Credits.vue'

export default {
    components: {
        WhoAmI, MostImportant, About, Experience, Contact, Credits
    },
    data() {
    return {
        show1: false,
        angle: '30',
        color1: 'purple',
        color2: 'indigo',
    }
  },
  computed: {
    createBackgroundString() {
      return `linear-gradient(${this.angle}deg, ${this.color1}, ${this.color2})`;
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10%;
    right: 0;
}
.bg-color {
    background: rgba(70, 70, 70, 0.644);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    backdrop-filter: blur(10px);
}
.avatar {
    border-radius: 50%; 
    width: 400px; 
    height: 400px; 
    margin: auto;
}
</style>