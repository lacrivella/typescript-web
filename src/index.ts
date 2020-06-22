import { User } from './models/User';

const user = new User({ name: 'Regina', age: 16 });

user.on('change', () => {
  console.log('time travel');
});
