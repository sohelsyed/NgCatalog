import { map } from 'rxjs/operators';
import 'rxjs/Rx' 
import {of} from 'rxjs/Observable/of'
import {Observable} from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from './User'

@Injectable()
export class CatalogRestService {

  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { }

  public getAll():Observable<Response>{
   return  this.http.get(this.baseUrl+'posts');
 }
}