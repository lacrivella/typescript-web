export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    //whatever the second argument is, it gets copied&pasted onto the first argument
    Object.assign(this.data, update);
  }
}
