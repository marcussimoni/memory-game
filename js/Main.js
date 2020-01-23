class Main {

    domUtil = new DomUtil()
    modal = new Modal()

    start = () => {
        this.selectGameDifficulty()
    }

    selectGameDifficulty = () => {
        const modal = this.domUtil.getElement('modal')
        modal.style.display = 'block'
        
        this.modal.updateHeader(`<h3>Select your game difficulty</h3>`)
        this.modal.updateBody(this.createOptions())
        this.modal.updateFooter(`<button id="modal-confirm" class="button">Start Game</button>`)

        this.domUtil.setOnClickEvent('modal-confirm', this.setDifficulty)
    }

    setDifficulty = () => {
        const difficulty = this.domUtil.getElement('difficulty')
        const cardController = new CardController(difficulty.value)
        cardController.configNewGame(1)
        this.hideModal()
        this.domUtil.updateElement('difficulty-selected', difficulty.value)
    }

    hideModal = () => {
        const modal = this.domUtil.getElement('modal')
        modal.style.display = 'none'
    }

    createOptions = () => {
        const options = `
        <select id="difficulty">
            <option value="very-easy">Very easy</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="very-hard">Very Hard</option>
        </select>`
        return options
    }

}
