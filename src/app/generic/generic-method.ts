import { Observable } from "rxjs";

export interface GenericMethod<T> {

  post(data : T);
  put(data : T);
  getAll(): Observable<T[]>; //Array<T>;
  getById(id? : number) : Observable<T>;
  deleteById(id? : number);
  delete(data : T);
}
