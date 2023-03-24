<template>
    <div :style="{ backgroundImage: createBackgroundString }" class="main">
        <v-card theme="dark" class="card vertical-center">
            <h2 class="mt-7 mb-3">Create new account</h2>
            <hr class="marwid mb-15">
            <v-text-field label="LOGIN" variant="underlined" class="marwid"></v-text-field>
            <div>
                <v-row class="ml-12">
                    <v-col cols="9">
                        <v-text-field 
                        :type="show1 ? 'text' : 'password'" 
                        label="PASSWORD" 
                        variant="underlined" ></v-text-field>
                    </v-col> 
                    <v-col cols="3">
                        <v-btn v-if="show1" style="margin-right: 100px;" class="mt-2" icon variant="plain" @click="show1 = !show1">
                            <font-awesome-icon icon="fa-solid fa-eye" />
                        </v-btn> 
                        <v-btn v-if="!show1" style="margin-right: 100px;" class="mt-2" icon variant="plain" @click="show1 = !show1">
                            <font-awesome-icon icon="fa-solid fa-eye-slash" />
                        </v-btn> 
                    </v-col> 
                </v-row>
            </div>
            <div>
                <v-row class="ml-12">
                    <v-col cols="9">
                        <v-text-field 
                        :type="show1 ? 'text' : 'password'" 
                        label="REPEAT PASSWORD" 
                        variant="underlined" ></v-text-field>
                    </v-col> 
                    <v-col cols="3">
                        <v-btn v-if="show1" style="margin-right: 100px;" class="mt-2" icon variant="plain" @click="show1 = !show1">
                            <font-awesome-icon icon="fa-solid fa-eye" />
                        </v-btn> 
                        <v-btn v-if="!show1" style="margin-right: 100px;" class="mt-2" icon variant="plain" @click="show1 = !show1">
                            <font-awesome-icon icon="fa-solid fa-eye-slash" />
                        </v-btn> 
                    </v-col> 
                </v-row>
            </div>
            
            <v-btn variant="tonal" class="pl-15 pr-15 mt-15">Register</v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
    return {
        show1: false,
        angle: '50',
        color1: 'red',
        color2: 'blue'
    }
  },
  computed: {
    createBackgroundString() {
      return `linear-gradient(${this.angle}deg, ${this.color1}, ${this.color2})`;
    }
  }
}
</script>

<style scoped>
.card {
    width: 420px;
    height: 500px;
    background: rgba(26, 14, 41, 0.623);
    backdrop-filter: blur(100px);
    border-radius: 30px;
}
.vertical-center {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);  
}
.main {
    height: 100vh;
}
.marwid {
    margin: auto;
    width: 70%;
}
</style>