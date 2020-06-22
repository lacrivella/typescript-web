import { User } from './models/User';

const user = new User({ name: 'Regina', age: 16 });

// quick reminder on accessors
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Aleksander', 'Tiedemann');
console.log(person.fullName);
