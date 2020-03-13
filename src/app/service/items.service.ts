import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Items } from '../model/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
 
  baseUrl:string;


  
  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:8988/item/11";
   }
   getAll() : Observable<Items []>{
    return this.httpClient.get<Items []>(this.baseUrl);
   }
   getById(itemId:number) : Observable<Items >{ 
    return this.httpClient.get<Items>(`${this.baseUrl}/${itemId}`);
   }
   add(items:Items ) : Observable<Items >{
     return this.httpClient.post<Items >(this.baseUrl,items);
   }
 
}