import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserDisplay } from './UserDisplay';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userDisplay: '.user-display',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    new UserDisplay(this.regions.userDisplay, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
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
