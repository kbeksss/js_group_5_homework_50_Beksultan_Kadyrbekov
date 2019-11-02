class Product{
    constructor(title, calories){
        this.title = title;
        this.calories = calories;
    }
}

const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);
const potato = new Product('Картошка', 77);
class Dish{
    constructor(title){
        this.title = title;
        this.products = [];
    }
    addProduct(title, grams){
        this.products.push([title, grams]);
    }
}
const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const shurpa = new Dish('Шурпа');
shurpa.addProduct(meat, 1000);
shurpa.addProduct(onion, 100);
shurpa.addProduct(carrot, 200);
shurpa.addProduct(potato, 200);

const samsy = new Dish('Слоеная самса');
samsy.addProduct(meat, 30);
samsy.addProduct(onion, 10);
samsy.addProduct(potato, 10);


class CaloriesCalculator{
    constructor(){
        this.dishes = [];
    }
    addDish(dish){
        this.dishes.push(dish);
    }
    getTotalCalories(){
        let totalCal = 0;
        for(const dish of this.dishes){
            for(const product of dish.products){
                totalCal += product[0].calories * product[1] / 100;
            }
        }
        return totalCal;
    }
    getAllDishesInfo(){
        for(const dish of this.dishes){
            let totalCal = 0;
            let products = [];
            for(const product of dish.products){
                totalCal += product[0].calories * product[1] / 100;
                products.push(`${product[0].title}, ${product[1]} гр., ${product[0].calories * product[1]/100} ккал`);
            }
            console.log(`========================= \n${dish.title} - 1 порция, ${totalCal} ккал:`);
            for(const product of products){
                console.log(`* ${product}`)
            }
            console.log('=========================');
        }
    }
}
const calculator = new CaloriesCalculator();
calculator.addDish(plov);
calculator.addDish(samsy);
calculator.addDish(shurpa);
const calories = 'Общее количетсво употребляемой вами каллорий: ' + calculator.getTotalCalories() + ' ккал';
console.log(calories);
calculator.getAllDishesInfo();

