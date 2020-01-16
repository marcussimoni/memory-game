class CardController {

    pairs = []
    totalItens = 10
    cards = []
    score = 0
    attempts = 20
    level = 1
    difficulty

    arrayUtil
    domUtil

    constructor(){
        this.arrayUtil = new ArrayUtil()
        this.domUtil = new DomUtil()
        this.difficulty = new Difficulty()
        
    }

    configDifficulty = (difficulty) => {
        this.totalItens = difficulty.cards
        this.attempts = difficulty.attempts
        this.level = difficulty.level
        this.updateAttempts()
    }

    configNewGame = (level) => {

        const difficulty = this.difficulty.nextDifficulty(level)
        
        this.configDifficulty(difficulty)

        this.buildDeck()

        this.domUtil.updateElement('level', level);
        
    }

    buildDeck = () => {

        this.cards = this.arrayUtil.createArray(this.totalItens)

        const div = this.domUtil.getElement('card-content')
        div.innerHTML = ''

        this.cards.forEach((card) => {
            div.appendChild(this.createCard(card)) 
        });

        this.hideCards()
    }

    hideCards = () => {
        setTimeout(() => {
            this.cards.forEach(card => {
                this.domUtil.updateElement(`card-${card.index}`, '')
            })
        }, 5000);
    }
    
    clearPairs = () => {
        let effect = ''
    
        if(this.sameCardsSelected(this.pairs)){
            effect = 'hide-card'
        }
    
        for(let i = 0; i < this.pairs.length; i++){
            const card = this.pairs[i]
            this.hideCard(card, effect)
        }
    
        this.pairs = []
    }
    
    checkSelectedCard = (index) => {
        const card = this.cards.filter(a => a.index === index)[0]
        
        if(this.pairs.length < 2 && !this.pairs.includes(card)){
            this.pairs.push(card)
            this.showCard(card)
        }
        
        if(this.pairs.length === 2){
            setTimeout(() => {
                this.updateScoreAndAttempts();

                if(this.attempts < 0){
                    alert("Game Over")
                    this.configNewGame(1)
                }
                
                if(this.allCardsDiscovered()){
                    this.level++
                    alert(`Congratulations. Head to the next level: ${this.level}`)
                    this.configNewGame(this.level)
                }
            }, 500);
        } 
    }

    allCardsDiscovered = () => {
        const cards = this.cards.filter(card => card.visible)
        return cards.length === 0
    }

    updateScore = () => {
        this.score += 10;
        this.domUtil.updateElement('score', this.score)
    }

    updateAttempts = () => {
        this.attempts--;
        this.domUtil.updateElement('attempts', this.attempts)
    }
    
    sameCardsSelected = (pairs) => {
        const card1 = pairs[0]
        const card2 = pairs[1]
        return card1.number === card2.number
    }
    
    showCard = (card, effect) => {
        this.cardAction(card, effect, card.number)
    }
    
    hideCard = (card, effect) => {
        this.cardAction(card, effect, '')
    }
    
    cardAction = (card, effect, value) => {
        const element = this.getCard(card)
        if(element){
            element.innerHTML = value
        }
    
        if(effect){
            element.className = 'card ' + effect
        }
    }
    
    getCard = (card) => {
        if(card){
            return this.domUtil.getElement(`card-${card.index}`)
        }
    } 
    
    createCard = (card) => {
        const index = card.index
        const div = this.domUtil.createElement('div')
        div.className = `card`
        div.id = `card-${index}`
        div.innerHTML = card.number
        div.addEventListener('click', event => this.checkSelectedCard(index))
        return div
    }

    updateScoreAndAttempts = () => {
        if (this.sameCardsSelected(this.pairs)) {
            this.changeVisibleState(this.pairs)
            this.updateScore();
        }
        else {
            this.updateAttempts();
        }
        this.clearPairs();
    }

    changeVisibleState = (pairs) => {

        pairs.forEach(card => {

            this.cards = this.cards.map(c => {
                if(card.index === c.index && card.number === c.number){
                    c.visible = !c.visible
                }
                return c
            })

        })

    }
}
