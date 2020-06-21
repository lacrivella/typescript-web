export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: T): void {
    //whatever the second argument is, it gets copied&pasted onto the first argument
    Object.assign(this.data, update);
  }
}
