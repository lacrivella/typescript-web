import { User } from './models/User';

const user = new User({ name: 'Jonas', age: 17 });

user.set({ name: 'Adam', age: 83 });

console.log(user.get('name'));
console.log(user.get('age'));
