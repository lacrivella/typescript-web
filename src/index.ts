import { User } from './models/User';

const user = new User({ id: 1, name: 'Stranger', age: 40 });

user.on('save', () => {
  console.log(user);
});

user.save();
