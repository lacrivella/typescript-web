import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';
import { UserDisplay } from './UserDisplay';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserDisplay(itemParent, model).render();
  }
}
