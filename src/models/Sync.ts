import axios, { AxiosResponse } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(public rootURL: string) {}

  fetch(): void {
    axios
      .get(`${this.rootURL}/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`${this.rootURL}/${id}`, this.data);
    } else {
      axios.post(this.rootURL, this.data);
    }
  }
}