import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postRegister(data : any){

    return this.http.post<any>("http://localhost:3000/register", data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }
  getRegister() {
    return this.http.get<any>("http://localhost:3000/register/posts")
    .pipe(map((res:any)=> {
      return res;
    }))
  }
}
