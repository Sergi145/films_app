import {Component, Input} from '@angular/core';
import {Result} from "../../interfaces/film.interface";

@Component({
  selector: 'carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  @Input() bannerResult: Result[] = [];

  ngOnInit(): void {}
}
