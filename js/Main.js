class Main {

    
    
    array = []

    start = () => {
        const cardController = new CardController()
        this.array = cardController.createArray(cardController.totalItens)
        cardController.buildDeck(this.array)
    }

}