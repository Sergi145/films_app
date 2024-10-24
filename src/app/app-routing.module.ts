import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DetailMoviePageComponent} from "./pages/detail-movie-page/detail-movie-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

const routes: Routes = [
  {
    path:'', component: LoginPageComponent
  },
  {
    path:'home', component: HomePageComponent
  },
  {
    path:'movie/:id', component: DetailMoviePageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
