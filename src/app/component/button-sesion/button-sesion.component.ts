import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'button-sesion',
  templateUrl: './button-sesion.component.html',
  styleUrl: './button-sesion.component.css'
})
export class ButtonSesionComponent {
    constructor(private router:Router) {
    }

    logout() {
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/']);
    }
}
