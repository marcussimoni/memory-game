class Modal {
    
    domUtil

    constructor(){
        this.domUtil = new DomUtil()
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
