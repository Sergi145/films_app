import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import {DetailMoviePageComponent} from "../detail-movie-page/detail-movie-page.component";
import {canMatchGuard} from "../../auth/auth.guard";



const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canMatch: [canMatchGuard] //Anclamos la función del canMatch
  },
  {
    path: 'movie/:id',
    component: DetailMoviePageComponent
  } // Ruta hija para el detalle de la película

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
