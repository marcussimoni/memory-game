class LevelConfig {

    levels = []

    constructor(){
        this.levels = this.createDifficuties()
    }

    nextDifficulty(level){
        return this.levels.filter(d => d.level === level)[0]
    }

    createDifficuties = () => {
        return [
            {
                level: 1,
                attempts: 10,
                cards: 5,
                hints: 3
            },
            {
                level: 2,
                attempts: 12,
                cards: 7,
                hints: 0
            },
            {
                level: 3,
                attempts: 14,
                cards: 9,
                hints: 1
            },
            {
                level: 4,
                attempts: 16,
                cards: 15,
                hints: 2
            },
            {
                level: 5,
                attempts: 20,
                cards: 20,
                hints: 3
            }
        ]
    }

}
