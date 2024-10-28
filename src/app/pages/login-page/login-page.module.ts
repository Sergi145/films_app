import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "./login-page.component";
import {LoginRoutingModule} from "./login-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginPageModule { }
