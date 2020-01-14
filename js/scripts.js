const totalItens = 10

let pairs = []

createArray = (totalItens) => {
    let i = 1
    let number = 1;
    const array = new Array()
    
    while(i <= totalItens * 2){
        
        array.push({index: i++, number: number})
        array.push({index: i++, number: number})

        number++
    }
    
    shuffle(array)

    return array
}

getElement = (id) => {
    return document.getElementById(id)
}

shuffle = (array) => {
    array.sort(() => Math.random() - 0.5)
} 

init = (cards) => {
    let content = ''
    
    cards.forEach((card) => {
        content += createHidedCard(card)
    });
    
    content += '<div class="clear"></div>'

    const div = getElement('card-content')
    
    div.innerHTML = content


}

clearPairs = () => {
    let effect = ''

    if(sameCardsSelected(pairs)){
        effect = 'card-clicked'
    }

    for(i = 0; i < pairs.length; i++){

        const card = pairs[i]
        hideCard(card, effect)

    }

    pairs = []
}

checkSelectedCard = (index) => {
    const card = array.filter(a => a.index === index)[0]
    
    if(pairs.length < 2){

        if(pairs.includes(card)){
            pairs.pop()
            hideCard(card)
        } else {
            pairs.push(card)
            showCard(card)
        }

    }
    
    if(pairs.length === 2){
        setTimeout(() => {
            if(sameCardsSelected(pairs)){
                const card1 = pairs[0]
                clearPairs()
                array = array.filter(card => card.number !== card1.number)
                init(array)
            } else {
                clearPairs()
            }
        }, 1000);
    } 
}

sameCardsSelected = (pairs) => {
    const card1 = pairs[0]
    const card2 = pairs[1]
    return card1.number === card2.number
}

showCard = (card, effect) => {
    cardAction(card, effect, card.number)
}

hideCard = (card, effect) => {
    cardAction(card, effect, '')
}

cardAction = (card, effect, value) => {
    const element = getCard(card)
    if(element){
        element.innerHTML = value
    }

    if(effect){
        element.className = 'card ' + effect
    }
}

getCard = (card) => {
    if(card){
        return getElement(`card-${card.index}`)
    }
} 

createHidedCard = (card) => {
    const index = card.index
    return `<div class="card" id="card-${index}" onClick="checkSelectedCard(${index})"></div>`
}

createShowedCard = (card) => {
    const index = card.index
    return `<div class="card" id="card-${index}" onClick="checkSelectedCard(${index})">${card.number}</div>`
}

let array = createArray(totalItens)