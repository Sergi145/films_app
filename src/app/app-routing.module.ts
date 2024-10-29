import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {canActivateGuard, canMatchGuard} from "./auth/auth.guard";
import {LoginPageComponent} from "./pages/login-page/login-page.component";


// TODO: LazyLoad.
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
    canMatch: [canMatchGuard] //Anclamos la función del canMatch
  },
  {
    path: '**',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
