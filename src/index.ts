import { UserEdit } from './views/UserEdit';
import { UserProps, User } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

// UserDisplay and UserForm
const user = User.buildUser({ name: '', age: 0 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('root element cannot be found');
}

// Collection View and UserList
const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('collection');

  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();
