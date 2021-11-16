const numbers =[1, 2, 3, 4, 5,];
const person={
    name:"John Doe",
    age: 39,
    food: ["Burger", "fries"],
    car:{
        name:"tesla",
        model:'mdoel s',
        year: 2020,
    }
}
console.log(numbers);
console.log(person.food);

const somethingElse = require('./myModule');
console.log(somethingElse);

somethingElse.hello();
console.log(somethingElse.hello());