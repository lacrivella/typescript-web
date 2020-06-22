import { User } from './models/User';

const user = new User({ name: 'Regina', age: 16 });

// console.log(user.get('name'));

// reminder on how 'this' works in javascript
const colors = {
  color: 'purple',
  printColor() {
    console.log(this.color);
  },
};

//whatever is left to the method is the this.
// colors.printColor();

const printColor = colors.printColor;
printColor();
// there is nothing left of printColor() so it will be undefine
