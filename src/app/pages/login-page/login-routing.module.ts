import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page.component";
import {HomeRoutingModule} from "../home-page/home-routing.module";

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [HomeRoutingModule]
})
export class LoginRoutingModule {}
