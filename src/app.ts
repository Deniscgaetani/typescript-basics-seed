// aula 1 de ES6 e TypeScript
/* console.log('OLÁ TypeScript!');
const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni']}
];
const mappedPizzas = pizzas.map( pizza => pizza.name.toUpperCase());
console.log(mappedPizzas);
const pizza = {
    name : 'Blazing Inferno',
    getName: () =>  pizza.name
};
console.log(pizza.getName()); */

// aula 2 de ES6 e TypeScript
/* function multiply(a:number, b = 25) {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5,35)); */

// aula 3 de ES6 e TypeScript
/* const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return this.name;
    },
};

const toppings = ['pepperoni'];

const order = {pizza, toppings};

function createOrder(pizza:any, toppings:any) {
 return {pizza, toppings};
};

console.log(createOrder(pizza, toppings));
 */
// aula 4 de ES6 e TypeScript

/* function sumAll(message:string,...arr:any) {
    console.log(arguments);
    return arr.reduce((prev:any, next:any) => prev + next);
}

const sum = sumAll('Hello!',1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);
 */

// aula 5 de ES6 e TypeScript
/* const toppings = ['bacon', 'chilli'];
const newToppings = ['pepperoni'];
const allToppings = [...newToppings, ...toppings ];

console.log(allToppings); */

// aula 6 de ES6 e TypeScript
/* const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};
function order(name: any, toppings: any) {
 console.log(name, toppings);
}
 
const myOrder = order(pizza.name, pizza.toppings);

const toppings = ['pepperoni', 'bacon', 'chilli'];

function logToppings([first, second, third]: any) {
    console.log(first, second, third);
}

logToppings(toppings); */

// aula 1 Primitives types
/* const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(Number('15'), pizzaToppings);

console.log(`Pizza costs: ${cost}`); */
// aula 2 Primitives types
/* const coupon: string = "pizza25";
function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}
const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage); */
// aula 3 Primitives types
/* const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
    return orders >= 3 ;
}

if (offerDiscount(pizzas)) {
    console.log(`You're entitled to a discount!`);
} else {
    console.log(`Order more than 3 pizzas for a discount!`);
} */

// aula 1 Special types
/* let explicitCoupon: string ;
explicitCoupon = 'pizza25';
let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string) {
    selectedTopping = topping;
}

selectTopping('bacon');
console.log(selectTopping); */

/* function orderError(error: string): never {
    throw new Error(error);
    // never going to return a value!
};

const errado = orderError('Something went wrong');

console.error(errado); */

/* let sumOrder: (price: number, quantitỵ?: number) => number;

sumOrder = (x, y = 1) => x * y;
const sum = sumOrder(25, 5);

console.log(`Total sum: ${sum}`);
 */

/* let pizza: { name: string; price: number; getName(): string} ={
    name: 'Plain Old Pepperoni',
    price: 20,
    getName() {
        return pizza.name;
    }
}

console.log(pizza.getName()); */
/* 
let sizes: number[];
sizes = [1, 2, 3];
let toppings: Array<string>;
toppings = ['pepperoni', 'tomato', 'bacon'];

console.log(toppings, sizes); */

/* let pizza: [string, number, boolean];

pizza = [ 'Pepperoni', 20, true]

console.log(pizza); */
/* 
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;
let pizzaSize: Size = 'small';

const selectSize: Callback = x => {
    pizzaSize = x;
}
selectSize('medium');

console.log(pizzaSize); */

/* type Pizza = { name: string, toppings: number};
const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5};

const serialized = JSON.stringify(pizza);

function getNameFromJson(obj: string) {
    return (JSON.parse(obj) as Pizza)
}

getNameFromJson(serialized); */

/* interface Pizza {
    name: string;
    sizes: string[],
    getAvailableSizes(): string[];
};
type getAvailableSizes = () => void;
let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('Pepperoni',['small', 'medium']); */

/* interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    name: string;
    toppings: number;
    getAvailableSizes(): void;
    [key: number]: any;
}
let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        toppings: 1,
        getAvailableSizes() {
            return this.sizes;
        },
    };
}

pizza = createPizza('Pepperoni', ['small' , 'medium']);
pizza.toppings = 1;
pizza[1] = 'xyz';
console.log(pizza); */
/* 
class Pizza {
  toppings: string[] = [];
  constructor(readonly name: string) {
    this.name = name;
  }
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
const pizza = new Pizza("Pepperoni");

pizza.addTopping("pepperoni");
pizza.addTopping("mussarela");

console.log(pizza);
 */