const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElevator = new Elevator();
const julia = new Person("Julia", 4, 6);
const peter = new Person("Peter", 7, 1);
const ori = new Person("Ori", 7, 10);
const raul= new Person("Raul", 5, 0);
myElevator.start();
myElevator.call(julia);
myElevator.call(peter);
myElevator.call(ori);
myElevator.call(raul);

