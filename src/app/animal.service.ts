import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http :HttpClient) { }

  private url ="https://jsonplaceholder.typicode.com/users";

  getAnimals(){
    console.log(this.url);
    return this.http.get(this.url);
  }
}
