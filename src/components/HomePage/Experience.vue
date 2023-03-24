<template>
    <v-parallax src="/background_template/triangles.png">
        <v-container>
            <h1 style="text-transform: uppercase;" class="mt-3 mb-5">My programming experience</h1>

            <v-timeline v-if="!mobile" line-color="#5d6d7e" line-thickness="5">
                <v-timeline-item v-for="item in experience" :dot-color="item.color">
                <div>
                    <v-card style="text-align: start; border-radius: 15px;">
                        <v-card-title :style="`background-color: ${item.color}`">
                        <h2>{{item.title}}</h2>
                        </v-card-title>
                        <v-card-text class="bg-white mt-3">
                            <h2 class="mb-3">{{item.inner}}</h2>
                            <p>{{item.text}}</p>
                        </v-card-text>
                        <v-btn @click="this.$router.push(item.link)" block>
                            Посмотреть
                        </v-btn>
                    </v-card>
                    <v-row class="mt-5" style="width: 80%; margin: auto;">
                        <v-col cols="4" v-for="skill in item.skills">
                            <v-btn plain icon size="x-large" style="background-color: rgba(0, 0, 0, 0);">
                            <img :src="skill.img" style="border-radius: 50%; width: 64px; height: 64px;">
                            <v-tooltip activator="parent" location="bottom">
                                {{skill.text}}
                            </v-tooltip>
                        </v-btn>
                        </v-col>
                    </v-row>
                </div>
                </v-timeline-item>
            </v-timeline>
            <v-timeline v-if="mobile" side="end" line-color="#5d6d7e" line-thickness="5">
                <v-timeline-item v-for="item in experience" :dot-color="item.color">
                <div>
                    <v-card style="text-align: start; border-radius: 15px;">
                        <v-card-title :style="`background-color: ${item.color}`">
                        <h2>{{item.title}}</h2>
                        </v-card-title>
                        <v-card-text class="bg-white mt-3">
                            <h2 class="mb-3">{{item.inner}}</h2>
                            <p>{{item.text}}</p>
                        </v-card-text>
                    </v-card>
                    <v-row class="mt-5" style="width: 80%; margin: auto;">
                        <v-col cols="4" v-for="skill in item.skills">
                            <v-btn plain icon size="x-large" style="background-color: rgba(0, 0, 0, 0);">
                            <img :src="skill.img" style="border-radius: 50%; width: 64px; height: 64px;">
                            <v-tooltip activator="parent" location="bottom">
                                {{skill.text}}
                            </v-tooltip>
                        </v-btn>
                        </v-col>
                    </v-row>
                </div>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </v-parallax>
</template>

<script>
import { onMounted } from 'vue'
import { useDisplay } from 'vuetify'

export default {
    mounted () {
        if (this.$vuetify.display.width < 700) {
            this. mobile = true
        }
        else this. mobile = false
    },
    data: () => ({
        mobile: false,
        experience: [
            {
                title: 'February 2022',
                inner: 'Индивидуальная траектория',
                text: 'Проект индивидуальной траектории был разработан в команде других студентов. Данная информационная система позволяет проходить тестирования и получать рекомендации по выбору предметов для дополнительного изучения',
                skills: [
                    { text: 'Навыки работы с GitHub', img: '/icons/github.png' },
                    { text: 'Работа в команде', img: '/icons/teamwork.png' },
                    { text: 'Работа с Vue.js 2', img: '/icons/vue.png' },
                    { text: 'Работа с Vuetify 2', img: '/icons/vuetify.png' },
                    { text: 'Использование Axios в проекте', img: '/icons/axios.png' },
                    { text: 'Работа с Pytest для тестирования методов backend', img: '/icons/pytest.png' },
                    { text: 'Использование Jira', img: '/icons/jira.png' },
                    { text: 'Проектирование БД', img: '/icons/postgresql.png' },
                    { text: 'Использование JS', img: '/icons/js.png' },
                ],
                link: '',
                color: '#f5b7b1'
            },
            {
                title: 'October 2022',
                inner: 'Система автоматического проектирования учебно-методических материалов',
                text: 'Проект учебно-методических материалов разрабатывается в команде других студентов. Он является библиотекой учебно-методических материалов. Преподаватель может создавать модули, которые объединяют в себе информационные ресурсы по определенным темам, что упрощает проведение учебных занятий.',
                skills: [
                    { text: 'GitHub и GitFlow', img: '/icons/github.png' },
                    { text: 'Работа в команде и получение навыков руководства', img: '/icons/teamwork.png' },
                    { text: 'Работа с Vue.js 3, создания проектов на Vue.js / Nuxt.js', img: '/icons/vue.png' },
                    { text: 'Работа с Vuetify 3', img: '/icons/vuetify.png' },
                    { text: 'Использование доски GitHub вместо Jira', img: '/icons/gitflow.png' },
                    { text: 'Использование Vite для создания проекта', img: '/icons/vite.png' },
                    { text: 'Использование JS', img: '/icons/js.png' },
                    { text: 'Проектирование БД', img: '/icons/postgresql.png' },
                ],
                color: '#d2b4de'
            },
            {
                title: 'December 2022',
                inner: 'Визуализация данных Covid-19',
                text: 'Проект covid-analytics был разработан для получения данных из больших БД и отображения их в виде удобных графиков и диаграмм. Разработан был не только frontend, но и backend. Код проекта доступен на GitHub',
                skills: [
                    { text: 'Использование GitHub', img: '/icons/github.png' },
                    { text: 'Использование Vue.js 3, Создания проектов на Vue.js / Nuxt.js', img: '/icons/vue.png' },
                    { text: 'Использование Vuetify 3', img: '/icons/vuetify.png' },
                    { text: 'Использование Vite для создания проекта', img: '/icons/vite.png' },
                    { text: 'Использование JS', img: '/icons/js.png' },
                    { text: 'Использование Flask для написания базового backend', img: '/icons/flask.png' },
                    { text: 'Использование SQL для работы с БД', img: '/icons/sql.png' },
                    { text: 'Проектирование БД', img: '/icons/postgresql.png' },
                    { text: 'Использование Axios', img: '/icons/axios.png' },
                    { text: 'Использование Chart.js для отображения информации из БД', img: '/icons/chart.png' },
                ],
                color: '#85c1e9'
            },
            {
                title: 'February 2023',
                inner: 'Модуль создания и прохождения тестирования',
                text: 'Проект создания тестирования разрабатывается в качестве дипломной работы. Он предназначен для интеграции в учебные организации для удобного создания и прохождения тестирований.',
                skills: [
                    { text: 'Vue.js 3, Создания проектов на Vue.js / Nuxt.js', img: '/icons/vue.png' },
                    { text: 'Vuetify 3', img: '/icons/vuetify.png' },
                    { text: 'Vite', img: '/icons/vite.png' },
                    { text: 'JS', img: '/icons/js.png' },
                ],
                color: '#76d7c4'
            },
            {
                title: 'March 2023',
                inner: 'Портфолио на хостинге',
                text: 'Данное портфолио также является проектом на Vue.js + Vuetify',
                color: '#f7dc6f'
            },
        ]
    })
}
</script>
