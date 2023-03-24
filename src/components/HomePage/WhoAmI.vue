<template>
    <v-parallax src="background_template/points.png">
        <v-container>
        <v-row>
            <v-col class="d-none d-sm-block">
                <img class="mb-5 mt-15" src="/avatar.jpg" style="border-radius: 50%; width: 400px; height: 400px;">
                <h1 style="font-size: 88px;">Sergey</h1>
                <h1>FrontEnd Developer</h1>
            </v-col>
            <v-col class="d-xs-block d-sm-none">
                <img class="mb-5 mt-5" src="/avatar.jpg" style="border-radius: 50%; width: 90%;">
                <h1 style="font-size: 88px;">Sergey</h1>
                <h1>FrontEnd Developer</h1>
            </v-col>
            <v-col class="d-none d-md-block">
                <v-container>
                    <h1 class="mt-5 mb-5">Technologies I use</h1>
                    <v-row class="mb-15">
                        <v-col>
                            <img src="/icons/html_css_js.png" style="width: 80%;">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <img src="/icons/vue_vuetify.png" style="width: 80%;">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <img src="/icons/vite_nuxt.png" style="width: 80%;">
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        
    </v-container>
    <v-container class="d-sm-block d-md-none">
        <h1 class="mt-15 mb-15">Technologies I you</h1>
        <v-row class="mb-15">
            <v-col>
                <img src="/icons/html_css_js.png" style="width: 80%;">
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <img src="/icons/vue_vuetify.png" style="width: 80%;">
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <img src="/icons/vite_nuxt.png" style="width: 80%;">
            </v-col>
        </v-row>
    </v-container>
    </v-parallax>
    
</template>
