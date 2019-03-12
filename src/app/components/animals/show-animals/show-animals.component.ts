import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../../../services/animal.service';
import {Observable} from 'rxjs';
import {Animal} from '../../../models/animal';

@Component({
  selector: 'app-show-animals',
  templateUrl: './show-animals.component.html',
  styleUrls: ['./show-animals.component.scss']
})
export class ShowAnimalsComponent implements OnInit {

  animals : Array<Animal>;

  constructor(private service : AnimalService) { }

  ngOnInit() {
    this.animals = this.service.getAnimals();
  //this.service.getAnimals().subscribe(
    //  data => this.animals = data
    //)

  }

}
