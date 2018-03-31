import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogRestService {

  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http:HttpClient) { }

  getAll(){
    this.http.get('${this.baseUrl}/posts');
    console.log("After call - ${baseUrl}");
  }


}
