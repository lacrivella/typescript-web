import axios, { AxiosResponse } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(public rootURL: string) {}

  fetch(id: number): void {
    axios
      .get(`${this.rootURL}/${id}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
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