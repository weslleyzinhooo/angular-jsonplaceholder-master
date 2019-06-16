import { Injectable } from '@angular/core';

import { GenericMethod } from './../generic/generic-method';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements GenericMethod<User> {

  private END_POINT = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  post(data: User) {
    throw new Error("Method not implemented.");
  }
  put(data: User) {
    throw new Error("Method not implemented.");
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.END_POINT);
  }
  getById(id?: number): Observable<User> {
    throw new Error("Method not implemented.");
  }
  deleteById(id?: number) {
    throw new Error("Method not implemented.");
  }
  delete(data: User) {
    throw new Error("Method not implemented.");
  }
}
