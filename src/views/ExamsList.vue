<template>
  <v-container>
    <v-container class="mb-5">
      <v-row>
        <h2>{{ author }}</h2>
        <v-spacer></v-spacer>
        <v-btn color="red-lighten-3" @click="exit"><h4>Выйти</h4></v-btn>
      </v-row>
    </v-container>
    <h1 class="mb-15">Доступные тестирования</h1>
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-card class="mb-5" v-for="item in exams">
            <v-row>
              <v-col cols="4">
                <v-container>
                  <h2>{{ item.title }}</h2>
                  <p class="mt-3 mb-3 ml-1">{{ item.subject }}</p>
                  <p class="mt-3 mb-3 ml-1">Ограничение по времени:</p>
                </v-container>
              </v-col>
              <v-col>
                <v-container>
                  <p>{{ item.description }}</p>
                </v-container>
              </v-col>
            </v-row>
            <hr>
            <v-row class="mb-3 mt-1">
              <v-col cols="4">
                <p class=" ml-3">{{ item.author }}</p>
              </v-col>
              <v-col>
                <v-row>
                  <v-col>Всего вопросов: {{ examInfo(item).length }}</v-col>
                  <v-col>Максимум баллов: {{ examInfo(item).max_score }}</v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card color="grey-darken-3" class="full-height">
            <v-container>
              <h2>Tools</h2>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <v-dialog
      v-model="dialog"
      width="auto"
  >
    <template v-slot:activator="{ props }">
    </template>
    <v-card>
      <v-container align="center">
        <h4>{{ dialog_text }}</h4>
        <v-btn v-if="dialog_type === 'return'" class="mt-9" block color="grey-darken-2" @click="returnToMain">
          <h4>{{ dialog_button }}</h4>
        </v-btn>
        <v-btn v-if="dialog_type === 'none'" class="mt-9" block color="grey-darken-2" @click="">
          <h4>{{ dialog_button }}</h4>
        </v-btn>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ExamsList",
  data: () => ({
    author: 'Шевнина Юлия Сергеевна',

    dialog: false,
    dialog_text: '',
    dialog_button: '',
    dialog_type: '',
    dialog_data: 0,

    exams: []
  }),
  created() {
    this.getExam()
  },
  methods: {
    examInfo(item) {
      const length = item.questions.length
      let max_score = 0
      for (let question of item.questions) {
        max_score += question.score
      }
      return {
        'length': length,
        'max_score': max_score
      }
    },
    getExam() {
      const raw = localStorage.getItem('exams')
      this.exams = JSON.parse(raw)
      console.log(this.exams)
    },
    exit() {
      this.dialog_text = 'Вы уверены, что хотите выйти?';
      this.dialog_button = 'Выйти';
      this.dialog_type = 'return';
      this.dialog = true;
    },
    returnToMain() {
      this.dialog = false;
      this.$router.push('/exams-module');
    }
  }
}
</script>

<style scoped>
.v-card {
  text-align: start;
}
.full-height {
  min-height: 100%;
}
</style>