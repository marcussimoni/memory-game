class ArrayUtil {

    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5)
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
   
        return array
    }

}