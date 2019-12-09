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
    tag : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),    
    specie : new FormControl('',Validators.required),
    weigthValue : new FormControl(''),
    weigthUnit : new FormControl(''),
   birthdate : new FormControl(''),
    

  });


  constructor(private service : AnimalService) { }

  ngOnInit() {
  }

  onSubmit() {
    // let param : any;
    // param.name = this.fg.controls.name;
   
    // param.data.weight.unit = this.fg.controls.weigthUnit.value;
    // param.data.birthdate = this.fg.controls.birthdate.value;
  /*   this.animal.name = this.fg.controls.name.value;
    this.animal.specie = this.fg.controls.specie.value;
    this.animal.data = new Data();
    this.animal.data.weight = new Weight();
    this.animal.data.weight.unit = this.fg.controls.weigthUnit.value;
    this.animal.data.weight.value = this.fg.controls.weigthValue.value;
    this.animal.data.birthdate = this.fg.controls.birthdate.value;*/

     
    // this.service.addAnimal(this.fg.value);
  }

  updateName() {
   // name.setValue('Nancy');
  }

}
