class Animal {
    constructor(name) {
        this.name = name;
    }

    eat () {
        console.log('nom nom');
    }

    bark () {
        console.log('woof woof');
    }
}

const Bello = new Animal('bello');

console.log(Bello.name)

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark () {
        console.log('wau wau');
    }
}

const Fifi = new Dog('Fifi');
console.log(Fifi.name)
Fifi.eat();