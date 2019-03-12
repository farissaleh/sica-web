import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShowAnimalsComponent } from './components/animals/show-animals/show-animals.component';
import { NewAnimalComponent } from './components/animals/new-animal/new-animal.component';
import { EditAnimalComponent } from './components/animals/edit-animal/edit-animal.component';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShowAnimalsComponent,
    NewAnimalComponent,
    EditAnimalComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
