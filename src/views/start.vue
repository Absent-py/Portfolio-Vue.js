<template>
    <v-container>
        <h1>Start</h1>
        <v-container>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="3">
                    <v-combobox
                        variant="solo"
                        label="Colums"
                        :items="[1, 2, 3, 4, 6]"
                        v-model="gridSize"
                        @update:modelValue="update()"
                    ></v-combobox>
                </v-col>
            </v-row>
            <v-row v-for="pack in cards" :key="pack">
                <v-col :cols="12 / gridSize" v-for="card in pack.pack" :key="card">
                    <v-card @click="$router.push(card.link)">
                        <v-img :src="card.img" max-height="400px"></v-img>
                        <v-card-title>
                            {{ card.name }}
                        </v-card-title>
                        <v-card-text>
                            {{ card.text }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>       
        </v-container>
    </v-container>
</template>

<script>
import CardGrid from '../helpers/cardsPreview.js'

export default {
    name: 'Start',
    data: () => ({
        gridSize: 2,
        cardsData: [
            {name: 'Registration', text: 'Registration page example', img: '', link: '/reg'},
            {name: 'ExamsModule', text: 'Full creation and taking exams', img: '', link: '/exams-module'},
            {name: 'Greetings', text: 'Portfolio greetings', img: '', link: '/greet'},
            {name: 'ThreeJS', text: '3D Room portfolio', img: '', link: '/three'},
            {name: 'Placeholder', text: 'Placeholder description', img: ''},
            {name: 'Placeholder', text: 'Placeholder description', img: ''},
            {name: 'Placeholder', text: 'Placeholder description', img: ''},
            {name: 'Placeholder', text: 'Placeholder description', img: ''},
            {name: 'Placeholder', text: 'Placeholder description', img: ''},
        ],

        Cards: null,
        cards: null

    }),
    mounted() {
        this.Cards = new CardGrid(this.gridSize, this.cardsData)
        this.cards = this.Cards.getCardsObject
    },
    methods: {
        update() {
            this.Cards = new CardGrid(this.gridSize, this.cardsData)
            this.cards = this.Cards.getCardsObject
        }
    }
}
</script>