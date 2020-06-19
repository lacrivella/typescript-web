import { User } from './models/User';

const user = new User({ name: 'Jonas', age: 17 });

user.on('click', () => {
  console.log('click 1');
});

user.on('click', () => {
  console.log('click 2');
});

user.on('save', () => {
  console.log('saved by the bell');
});

user.trigger('click');
