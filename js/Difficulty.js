class Difficulty {

    difficulties = []

    constructor(){
        this.difficulties = this.createDifficuties()
    }

    nextDifficulty(level){
        const difficulty = this.difficulties.filter(d => d.level === level)
        console.log(difficulty)
        return difficulty[0]
    }

    createDifficuties = () => {
        return [
            {
                level: 1,
                attempts: 20,
                cards: 15
            },
            {
                level: 2,
                attempts: 18,
                cards: 18
            },
            {
                level: 3,
                attempts: 16,
                cards: 21
            },
            {
                level: 4,
                attempts: 14,
                cards: 25
            },
            {
                level: 5,
                attempts: 12,
                cards: 30
            }
        ]
    }

}