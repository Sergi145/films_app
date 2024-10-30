import { inject } from '@angular/core'; // Asegúrate de importar esto
import {
  CanMatchFn,
  Route,
  UrlSegment,
  Router,
} from '@angular/router';

export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const router = inject(Router); // Inyectar Router
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  console.log('isLoggedIn:', isLoggedIn); //

  if (!isLoggedIn) {
    router.navigate(['']); // Redirige a la página de inicio (o login)
    console.log('Usuario no autenticado, redirigiendo...');
    return false;
  }
  return true;
};
