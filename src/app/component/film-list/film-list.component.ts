import { Component, Input } from '@angular/core';
import { TrendingResult } from '../../interfaces/trending.interface';
import { Genre } from '../../interfaces/gender.interface';
import { GenderFilm } from '../../interfaces/gender_film.interface';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css',
})
export class FilmListComponent {
  @Input() TrendingResult: TrendingResult[] = [];
  public genres: Genre[] = [];
  public genresFilm: GenderFilm[] = [];

  recibeData($event: any) {
    this.TrendingResult = $event;
  }
}
