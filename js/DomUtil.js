class DomUtil {
    
    createElement = (name) => {
        return document.createElement(name)
    }

    getElement = (id) => {
        return document.getElementById(id)
    }

    updateElement = (id, value) => {
        this.getElement(id).innerHTML = value
    }

}
