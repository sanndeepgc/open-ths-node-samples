import {personPrototype} from "./classes/prototypeobject";

const message: string = "Congratulations, this is your node project";
console.log(message);
console.debug("This is how debugger looks like");
console.error("This is how error log looks like");


class Student {
    private readonly name: string;
    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }

}

const sandeep: Student = new Student ( "Sandeep G");
console.log(sandeep);
console.debug(sandeep.getName());



let john = Object.create(personPrototype);
john.greet();
john.name = "John";
john.age = 36;

console.log(john);
john.greet()

