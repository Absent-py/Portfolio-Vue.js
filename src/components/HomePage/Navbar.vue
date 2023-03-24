<template>
    <div style="background-color: black;" class="sticky">
       <v-container style="color: white;">
            <v-row>
                <v-btn variant="plain">
                    <h2>Logo</h2>
                </v-btn>
                <v-spacer></v-spacer>
                <div class="d-none d-md-flex">
                    <v-btn variant="plain">
                        <h2>About</h2>
                    </v-btn>
                    <v-btn variant="plain">
                        <h2>Experience</h2>
                    </v-btn>
                    <v-btn variant="plain">
                        <h2>Contact</h2>
                    </v-btn>
                </div>
                <div class="d-sm-flex d-md-none">
                    <v-btn variant="plain" icon v-if="!drawer" @click="drawer = true">
                        <font-awesome-icon icon="fa-solid fa-caret-down" />
                    </v-btn>
                    <v-btn variant="plain" icon v-if="drawer" @click="drawer = false">
                        <font-awesome-icon icon="fa-solid fa-caret-up" />
                    </v-btn>
                    <v-layout>
                        <v-navigation-drawer
                        theme="dark"
                        v-model="drawer"
                        location="right"
                        temporary
                    >
                        <v-btn class="mt-5" variant="plain">
                            <h2>About</h2>
                        </v-btn>
                        <v-btn class="mt-5" variant="plain">
                            <h2>Experience</h2>
                        </v-btn>
                        <v-btn class="mt-5" variant="plain">
                            <h2>Contact</h2>
                        </v-btn>
                    </v-navigation-drawer>
                    </v-layout>
                    
                </div>
            </v-row>
        </v-container> 
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                {
                title: 'Foo',
                value: 'foo',
                },
                {
                title: 'Bar',
                value: 'bar',
                },
                {
                title: 'Fizz',
                value: 'fizz',
                },
                {
                title: 'Buzz',
                value: 'buzz',
                },
            ],
        }
    }
}
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
</style>