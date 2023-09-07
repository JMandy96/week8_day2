"use strict";
let users = [
    {
        name: 'Shoha Tsuchida',
        age: 99,
        company: 'Coding Temple'
    },
    {
        name: 'Dylan Katina',
        age: 99
    }
];
console.log(users[0]);
console.log(users[1]);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = () => {
            return `Their name is ${this.firstName} ${this.lastName}`;
        };
    }
}
const jake = new Person('Jake', 'Mandeville');
console.log(jake.fullName());
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
const eJake = new Employee(jake.firstName, jake.lastName, 50000);
console.log(eJake.fullName());
console.log(eJake.getSalary());
let employee = {
    name: 'Christian Askew',
    salary: 1000000,
    address: {
        street: 'Thieves st',
        city: 'Seattle',
        zipCode: 98101
    }
};
