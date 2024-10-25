import { Component, Input } from '@angular/core';
import { Genre } from '../../interfaces/gender.interface';
import { GenderFilm } from '../../interfaces/gender_film.interface';
import {Film} from "../../interfaces/film.interface";

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css',
})
export class FilmListComponent {
  @Input() TrendingResult: Film[] = [];
  public genres: Genre[] = [];
  public genresFilm: GenderFilm[] = [];

  recibeData($event: any) {
    this.TrendingResult = $event;
  }
}
