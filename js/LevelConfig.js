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
                cards: 10,
                hints: 1
            },
            {
                level: 2,
                attempts: 12,
                cards: 12,
                hints: 2
            },
            {
                level: 3,
                attempts: 14,
                cards: 14,
                hints: 3
            },
            {
                level: 4,
                attempts: 16,
                cards: 16,
                hints: 4
            },
            {
                level: 5,
                attempts: 18,
                cards: 18,
                hints: 5
            }
        ]
    }

}
