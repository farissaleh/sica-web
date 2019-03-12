import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowAnimalsComponent} from './components/animals/show-animals/show-animals.component';
import {NewAnimalComponent} from './components/animals/new-animal/new-animal.component'

;const routes: Routes = [
{
  path : 'animal/list',
  component : ShowAnimalsComponent
},
{
  path : 'animal/post',
  component : NewAnimalComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
