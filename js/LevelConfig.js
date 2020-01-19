class LevelConfig {

    levels = []
    difficulty

    constructor(difficulty){
        this.configDifficulty();
        this.levels = this.createLevels(this.getDifficulty(difficulty))
    }

    getDifficulty = (difficulty) => {
        return this.difficulty.get(difficulty)
    }

    configDifficulty = () => {
        this.difficulty = new Map();
        this.difficulty.set('very-easy', 1);
        this.difficulty.set('easy', 2);
        this.difficulty.set('medium', 3);
        this.difficulty.set('hard', 4);
        this.difficulty.set('very-hard', 5);
    }

    nextLevel(level){
        return this.levels.filter(d => d.level === level)[0]
    }

    createLevels = (difficulty) => {
        return [
            {
                level: 1,
                attempts: 6,
                cards: 3 * difficulty,
                hints: 1
            },
            {
                level: 2,
                attempts: 10,
                cards: 5 * difficulty,
                hints: 2
            },
            {
                level: 3,
                attempts: 10,
                cards: 8 * difficulty,
                hints: 3
            },
            {
                level: 4,
                attempts: 15,
                cards: 10 * difficulty,
                hints: 4
            },
            {
                level: 5,
                attempts: 18,
                cards: 12 * difficulty,
                hints: 5
            }
        ]
    }

}
