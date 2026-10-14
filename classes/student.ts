export class Student {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }

}

// Class must be defined as export, when the classes are intentded to access outside the file.
// fields can be private, public, protected.
// By default variables are public
// A class can have only single constructor.
// Lazy Readonly fields must have to initialize in the constructor