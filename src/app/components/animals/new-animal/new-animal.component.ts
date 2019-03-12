import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import {AnimalService} from '../../../services/animal.service';
import { Validators } from '@angular/forms';
import {Animal} from '../../../models/animal';
import { Data } from 'src/app/models/data';
import { Weight } from 'src/app/models/weight';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.scss']
})
export class NewAnimalComponent implements OnInit {
  animal : Animal = new Animal();
  fg = new FormGroup({
    name : new FormControl(''),
    specie : new FormControl(''),
    weigthValue : new FormControl(''),
    weigthUnit : new FormControl(''),
   birthdate : new FormControl(''),
    

  });


  constructor(private service : AnimalService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.animal.name = this.fg.controls.name.value;
    this.animal.specie = this.fg.controls.specie.value;
    this.animal.data = new Data();
    this.animal.data.weight = new Weight();
    this.animal.data.weight.unit = this.fg.controls.weigthUnit.value;
    this.animal.data.weight.value = this.fg.controls.weigthValue.value;
    this.animal.data.birthdate = this.fg.controls.birthdate.value;
    
    console.warn( this.animal);
     
    this.service.addAnimal(this.animal);
  }

  updateName() {
   // name.setValue('Nancy');
  }

}
