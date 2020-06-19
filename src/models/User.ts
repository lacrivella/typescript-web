interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    //whatever the second argument is, it gets copied&pasted onto the first argument
    Object.assign(this.data, update);
  }
}
