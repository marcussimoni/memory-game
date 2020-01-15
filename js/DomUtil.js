class DomUtil {
    
    createElement = (name) => {
        return document.createElement(name)
    }

    createDivClear() {
        const div = this.createElement('div')        
        div.className = 'clear'
        return div
    }

    getElement = (id) => {
        return document.getElementById(id)
    }

}