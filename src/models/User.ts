interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    //whatever the second argument is, it gets copied&pasted onto the first argument
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {}
}
