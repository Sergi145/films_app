import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {HomeRoutingModule} from "./home-routing.module";
import {CarrouselComponent} from "../../component/carrousel/carrousel.component";
import {FilmListComponent} from "../../component/film-list/film-list.component";
import {SelectFilterComponent} from "../../component/select-filter/select-filter.component";
import {SpinerLoadingComponent} from "../../component/spiner-loading/spiner-loading.component";


@NgModule({
  declarations: [
    HomePageComponent,
    CarrouselComponent,
    FilmListComponent,
    SelectFilterComponent,
    SpinerLoadingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomePageModule { }
