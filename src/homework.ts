// 1. Given the data below, define a type alias for representing users.
type User = {
    name: string,
    age: number,
    company?: string
}
let users:User[] = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];
console.log(users[0])
console.log(users[1])

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type dayOfWeek = string
// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}
    fullName = (): string =>{
        return `Their name is ${this.firstName} ${this.lastName}`
    }
}
const jake = new Person('Jake', 'Mandeville')
console.log(jake.fullName())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person{
    constructor(
        firstName: string,
        lastName: string,
        private salary: number
    ) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}
const eJake = new Employee(jake.firstName,jake.lastName, 50_000)
console.log(eJake.fullName());
console.log(eJake.getSalary());

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
interface IAddress{
    street: string,
    city: string,
    zipCode:number
}
interface IEmployee{
    name: string,
    salary: number
    address: IAddress
}

let employee: IEmployee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};