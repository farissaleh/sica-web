import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  "rxjs";
import {Animal} from '../models/animal';
import {Weight} from '../models/weight';
import {Data} from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animals : Array<Animal> = [];
  animalsObservable : Observable<Animal[]>;
  constructor(private http :HttpClient) { }

  private url ="https://jsonplaceholder.typicode.com/users";


  //private params = new  HttpParams().set('_page', "1").set('_limit', "1");

  getAnimals(){
    this.initAnimals();
    return this.animals;
  }

  getAnimals_(){
    return this.http.get(this.url);
  }

  getAnimals_1(){
    this.animalsObservable = this.http.get<Animal[]>(this.url);
    return this.animalsObservable;
  }

  addAnimal(animal : Animal){
    this.initAnimals();
      this.animals.push(animal);
      this.logAnimals();
  }

  addAnimal_(animal : Animal){
    this.http.post(this.url,animal)
    .subscribe(
      data =>{
        console.log("POST Request is successful ", data);
      },
      error => {console.log("Error", error);
    });
  }

  logAnimals(){
    console.log(JSON.stringify(this.animals));
   
  }

  initAnimals(){
    for(let i =1 ; i<= 5; i++){
      let a = new Animal();
      a.tag = "XXSF000001200"+i;
      a.name = "Animal "+i;
      a.specie = "Cavalo";

      let d = new Data();

      let w = new Weight();
      w.unit = "kg";
      w.value =200;

      d.weight = w;

      d.birthdate= "12/12/2012";
      let c : string[] = ["branco","amarelo"]
      d.colors = c;
      
      a.data = d;

      this.animals.push(a);
    }
   
  }
}