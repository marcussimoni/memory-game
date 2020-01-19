class Main {

    domUtil = new DomUtil()

    start = () => {
        this.selectGameDifficulty()
    }

    selectGameDifficulty = () => {
        const modal = this.domUtil.getElement('modal')
        modal.style.display = 'block'
        const button = this.domUtil.getElement('modal-confirm')
        button.onclick = this.setDifficulty
    }

    setDifficulty = () => {
        const difficulty = this.domUtil.getElement('difficulty')
        const cardController = new CardController(difficulty.value)
        cardController.configNewGame(1)
        this.hideModal()
    }

    hideModal = () => {
        const modal = this.domUtil.getElement('modal')
        modal.style.display = 'none'
    }

}
