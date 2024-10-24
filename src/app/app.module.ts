import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MovieApiServiceService} from "./service/movie-api-service.service";
import { CarrouselComponent } from './component/carrousel/carrousel.component';
import { FilmListComponent } from './component/film-list/film-list.component';
import { SelectFilterComponent } from './component/select-filter/select-filter.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {TokenInterceptorService} from "./service/token-interceptor.service";
import { SpinerLoadingComponent } from './component/spiner-loading/spiner-loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarrouselComponent,
    FilmListComponent,
    SelectFilterComponent,
    LoginPageComponent,
    SpinerLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieApiServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
