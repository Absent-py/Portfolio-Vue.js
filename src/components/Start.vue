<template>
  <v-container class="container mt-15">
    <h1 class="mb-5">Exams Module</h1>
    <v-card class="card">
      <p>Данный модуль предназначен для создания и прохождения тестирований, обработки результатов, а также их импорт и экспорта. Проект выполнен на Фреймворке Vue.js 3 + Vite + TS + Vuetify.</p>
    </v-card>
    <v-card class="card" @click="$router.push('/exams-module/create')">
      <v-card-text>
        <v-row align="center" justify="center">
          <p>1. Перейдите ко вкладку 'Создание тестирования'</p>
          <v-spacer></v-spacer>
          <font-awesome-icon class="fa-2x" icon="fa-solid fa-plus" />
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="card" @click="$router.push('/exams-module/list')">
      <v-card-text>
        <v-row align="center" justify="center">
          <p>2. Перейдите к списку доступных тестирований</p>
          <v-spacer></v-spacer>
          <font-awesome-icon class="fa-2x" icon="fa-solid fa-list" />
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="card" @click="">
      <v-card-text>
        <v-row align="center" justify="center">
          <p>3. Импортируйте тестирование</p>
          <v-spacer></v-spacer>
          <font-awesome-icon class="fa-2x" icon="fa-solid fa-plus" />
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Start"
}
</script>

<style scoped>
.container {
  max-width: 65%;
}
.card {
  max-width: 65%;
  margin: auto auto 30px;
  padding: 10px;
}
</style>
