import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {HomeRoutingModule} from "./home-routing.module";
import {DetailMoviePageComponent} from "../detail-movie-page/detail-movie-page.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule

  ]
})
export class HomePageModule { }
