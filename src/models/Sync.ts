import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(public rootURL: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`)
  }

  save(data: UserProps): void {
    const id = data.id;

    if (id) {
      axios.put(`${this.rootURL}/${id}`, data);
    } else {
      axios.post(this.rootURL, data);
    }
  }
}