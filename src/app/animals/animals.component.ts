import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../animal.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
 
  animals$: Object;

  constructor(private service :AnimalService) { }

  ngOnInit() {
    this.service.getAnimals().subscribe(
      data => this.animals$ = data
    )
  }

}
