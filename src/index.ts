import { User } from './models/User';

const user = new User({ name: 'Regina', age: 16 });

console.log(user.get('name'));
