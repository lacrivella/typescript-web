import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userDisplay: '.user-display',
      userForm: '.user-form',
    };
  }

  template(): string {
    return `
      <div>
        <div class="user-display"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
