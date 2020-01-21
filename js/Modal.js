class Modal {
    
    domUtil

    constructor(){
        this.domUtil = new DomUtil()
        //this.startModalAnimation()
    }

    startModalAnimation = () => {
        const modal = this.domUtil.getElement('modal-background')
        const horizontalCards = screen.width / 120
        const verticalLines = screen.height / 150
        
        let v = 0
        let h = 0

        while(verticalLines > h){
            const line = this.domUtil.createElement('div')
            line.className = 'card-queue'

            while(horizontalCards > v){
                const div = this.domUtil.createElement('div')
                div.className = 'card'
                line.appendChild(div)
                v++
            }

            modal.appendChild(line)
            h++
            v = 0
        }
    }

    updateHeader = (value) => {
        this.domUtil.updateElement('modal-header', value)
    }

    updateBody = (value) => {
        this.domUtil.updateElement('modal-body', value)
    }

    updateFooter = (value) => {
        this.domUtil.updateElement('modal-footer', value)
    }

    show = () => {
        this.domUtil.getElement('modal').style.display = 'block'
    }

    hide = () => {
        this.domUtil.getElement('modal').style.display = 'none'
    }
}
