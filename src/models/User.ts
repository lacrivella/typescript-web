import { Model } from './Model';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootURL = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  //add a static class method to user that will give a prefig version of a user
}
