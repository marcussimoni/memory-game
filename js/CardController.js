class CardController {

    pairs = []
    totalItens = 10
    array = []

    buildDeck = (cards) => {
        const div = this.getElement('card-content')
        div.innerHTML = ""

        cards.forEach((card) => {
            div.appendChild(this.createHidedCard(card)) 
        });
        
        div.appendChild(this.createDivClear())
    }

    createArray = (totalItens) => {
        let i = 1
        let number = 1;
        const array = new Array()
        
        while(i <= totalItens * 2){
            
            array.push({index: i++, number: number})
            array.push({index: i++, number: number})
    
            number++
        }
        
        this.shuffle(array)
        this.array = array
   
        return array
    }
    
    getElement = (id) => {
        return document.getElementById(id)
    }
    
    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5)
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
        console.log('clicked')
        const card = this.array.filter(a => a.index === index)[0]
        
        if(this.pairs.length < 2){
    
            if(this.pairs.includes(card)){
                this.pairs.pop()
                this.hideCard(card)
            } else {
                this.pairs.push(card)
                this.showCard(card)
            }
    
        }
        
        if(this.pairs.length === 2){
            setTimeout(() => {
                if(this.sameCardsSelected(this.pairs)){
                    const card1 = this.pairs[0]
                    this.clearPairs()
                    const matchCards = this.array.filter(card => card.number === card1.number)
                    
                } else {
                    this.clearPairs()
                }
            }, 1000);
        } 
    }

    updateScore = () => {
        this.score += 10;
        const score = this.getElement('score')
        score.innerHTML = this.score
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
            return this.getElement(`card-${card.index}`)
        }
    } 
    
    createHidedCard = (card) => {
        const index = card.index
        const div = document.createElement('div')
        div.className = `card`
        div.id = `card-${index}`
        div.addEventListener('click', event => this.checkSelectedCard(index))
        return div
        //return `<div class="card" id="card-${index}" onClick="checkSelectedCard(${index}).bind(this)"></div>`
    }

    createElement = (name) => {
        return document.createElement(name)
    }

    createDivClear() {
        const div = this.createElement('div')        
        div.className = 'clear'
        return div
    }
}