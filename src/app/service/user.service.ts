import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser() {
    throw new Error("Method not implemented.");
  }
  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:8081/users";
   }
   getAll() : Observable<User []>{
    return this.httpClient.get<User []>(this.baseUrl);
   }
   getById(id:number) : Observable<User >{ 
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
   }
   add(user:User ) : Observable<User >{
     return this.httpClient.post<User >(this.baseUrl,user);
   }
 
}
