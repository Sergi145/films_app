import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import {DetailMoviePageComponent} from "../detail-movie-page/detail-movie-page.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
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
