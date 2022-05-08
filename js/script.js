class Hamburger {
    topping = [];

    constructor(size) {
        this.size = size;
    }

    addTopping(topping) {
        this.topping.push(topping)
    }

    checkCalories() {
        return this.topping.reduce((acc, topping) => acc += topping.CALORIES, 0) + this.size.CALORIES
    }

    checkCost() {
        return this.topping.reduce((acc, topping) => acc += topping.COST, 0) + this.size.COST
    }
}

const SIZE = {
    SMALL: {
        COST: 50,
        CALORIES: 20
    },
    MEDIUM: {
        COST: 75,
        CALORIES: 30
    },
    BIG: {
        COST: 100,
        CALORIES: 40
    }
}
const TOPPINGS = {
    CHEESE: {
        COST: 10,
        CALORIES: 20
    },
    SALAD: {
        COST: 20,
        CALORIES: 5
    },
    POTATO: {
        COST: 15,
        CALORIES: 10
    },
    SPICE: {
        COST: 15,
        CALORIES: 0
    },
    MAYO: {
        COST: 20,
        CALORIES: 5
    }
}

const hamburger = new Hamburger(SIZE.BIG)
hamburger.addTopping(TOPPINGS.CHEESE)
hamburger.addTopping(TOPPINGS.MAYO)
console.log("Price with sauce:",hamburger.checkCost())
console.log("Callories with sauce:",hamburger.checkCalories())

