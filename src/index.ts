import { User } from './models/User';

const user = new User({ name: 'Mikkel', age: 12 });

user.events.on('change', () => {
  console.log('Time travel!');
});

user.events.trigger('change');
