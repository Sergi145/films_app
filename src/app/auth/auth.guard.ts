import {inject} from "@angular/core";
import {Router} from "@angular/router";


export const authGuard = () => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  console.log('Auth Guard is running. User is logged in:', isLoggedIn);


  if (isLoggedIn) {
    return true; // Permite el acceso
  } else {
    router.navigate(['']); // Redirige al login si no está "autenticado"
    return false;
  }
};
