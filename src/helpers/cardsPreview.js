function parseCardsArray(size, object) {
    let parsed = []
    for (let i = 0; i < object.length; i+= size) {
        let pack = []
        for (let row = 0; row < size; row++) {
            if (object[i + row] !== undefined) {
                pack.push(object[i + row])
            }
        }

        parsed.push({
            pack: pack
        })

        pack = []
    }
    return parsed
}

class CardGrid {
    constructor(gridSize, cardsArray) {
        this.gridSize = gridSize
        this.cards = parseCardsArray(gridSize, cardsArray)
    }

    update(gridSize, cardsArray) {
        this.gridSize = gridSize
        this.cards = parseCardsArray(gridSize, cardsArray)
    }
    
    get getCardsObject() {
        return this.cards
    }
}

export default CardGrid