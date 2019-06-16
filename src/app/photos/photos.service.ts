import { Injectable } from '@angular/core';

import { GenericMethod } from '../generic/generic-method';
import {Photos} from './photos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhotosService implements GenericMethod<Photos>{

  private END_POINT = 'https://jsonplaceholder.typicode.com/photos';
  
  constructor(private http:HttpClient) { }

  post(data: Photos) {
    throw new Error("Method not implemented.");
  }
  put(data: Photos) {
    throw new Error("Method not implemented.");
  }
  getAll(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.END_POINT);
  }
  getById(id?: number): Observable<Photos> {
    throw new Error("Method not implemented.");
  }
  deleteById(id?: number) {
    throw new Error("Method not implemented.");
  }
  delete(data: Photos) {
    throw new Error("Method not implemented.");
  }

  
}
