import { User } from './models/User';

const user = new User({ name: 'Jonas', age: 17 });

user.save();
