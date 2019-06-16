import { GenericMethod } from './../generic/generic-method';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService implements GenericMethod<Post>{

  private END_POINT = 'https://jsonplaceholder.typicode.com/posts';

  //Injeção de dependência da lib httpclient na camada de serviço
  constructor(private http: HttpClient) { }

  post(data: Post) {
    throw new Error("Method not implemented.");
  }

  put(data: Post) {
    throw new Error("Method not implemented.");
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.END_POINT);
  }

  getById(id?: number): Observable<Post> {
    throw new Error("Method not implemented.");
  }

  deleteById(id?: number) {
    throw new Error("Method not implemented.");
  }

  delete(data: Post) {
    throw new Error("Method not implemented.");
  }

}
