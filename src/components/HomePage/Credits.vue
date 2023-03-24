<template>
    <v-container class="mb-3 mt-10" style="text-align: start; width: 80%;">
        <h2 class="ml-3 mb-5">Credits</h2>
        <v-row style="margin: auto;">
            <v-col class="pt-0 pb-0" cols="4" v-for="item in links">
                <a target="_blank" :href="item.href">{{ item.title }}</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        links: [
            { title: 'GitHub', href: 'https://icons8.com/icon/iEBcQcM9rnZ9/github' },
            { title: 'Jira', href: 'https://icons8.com/icon/oROcPah5ues6/jira' },
            { title: 'Vuetify', href: 'https://icons8.com/icon/coFje4JDyijL/vuetify' },
            { title: 'PostgreSQL', href: 'https://icons8.com/icon/38561/postgresql' },
            { title: 'SQL', href: 'https://icons8.com/icon/QSjnrUKYMnxO/sql' },
            { title: 'Flask', href: 'https://icons8.com/icon/MHcMYTljfKOr/flask' },
            { title: 'Python', href: 'https://icons8.com/icon/13441/python' },
            { title: 'Git', href: 'https://icons8.com/icon/20906/git' },
            { title: 'Team Work', href: 'https://icons8.com/icon/ZccyHvWGPxyI/team-work' },
            { title: 'Chart', href: 'https://icons8.com/icon/31168/chart' },
            { title: 'JavaScript', href: 'https://icons8.com/icon/PXTY4q2Sq2lG/javascript' },
            { title: 'VK', href: 'https://icons8.com/icon/13977/vk-com' },
            { title: 'Telegram App', href: 'https://icons8.com/icon/63306/telegram-app' },
            { title: 'Vue.js an open-source JavaScript framework', href: 'https://icons8.com/icon/dzfo6UeXW9h7/vue.js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications' },
        ]
    })
}

</script>