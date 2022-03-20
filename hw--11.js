class Gift {
    constructor() {
        this.candies = []; 
    }

    addCandy(candy) {
        this.candies.push(candy); 
    }

    getCommonWeight() {
        return this.candies.map(obj => obj.weight)
            .reduce((a, b) => a + b);
    }

    filterChocolates() {
        return this.candies.filter(name => {
            if(name.chocolatePercentage) {
                return name; 
            }
        })
    }
}

class Candies {
    constructor(name, producer, price, weight) {
        this.name = name;
        this.producer = producer;
        this.price = price;
        this.weight = weight;
    }
}

class Chocolates extends Candies {
    constructor(name, producer, price, weight, chocolatePercentage) {
        super(name, producer, price, weight);
        this.chocolatePercentage = chocolatePercentage;
    }
} 
// Icicles = сосульки
class Icicles extends Candies {
    constructor(name, producer, price, weight, color) {
        super(name, producer, price, weight);
        this.color = color;
    } 
} 

const gift = new Gift();
gift.addCandy(new Chocolates('Milky way', 'France', 50, 5, 5));
gift.addCandy(new Chocolates('Mars', 'Germany', 60, 6, 40));

gift.addCandy(new Icicles('Шипучка', 'Ukraine', 20, 2, 'Желтый'));
gift.addCandy(new Icicles('Барбарис', 'Russia', 10, 1, 'Красный'));

console.log(`Суммарный вес подарка = ${gift.getCommonWeight('weight')} грамм`);
console.log(gift.filterChocolates());