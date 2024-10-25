import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genre } from '../../interfaces/gender.interface';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { GenderFilm } from '../../interfaces/gender_film.interface';
import {Film} from "../../interfaces/film.interface";

@Component({
  selector: 'select-filter',
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css',
})
export class SelectFilterComponent {
  @Input() genres: Genre[] = [];
  @Input() genresFilm: GenderFilm[] = [];
  @Output() sendmov = new EventEmitter<Film[]>();

  constructor(private movieService: MovieApiServiceService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.movieService.getMovieGenres().subscribe((genero) => {
      this.genres = genero.genres;
      //console.log(genres);
    });
  }

  // Manejar el cambio de género en el select
  onGenreChange(event: Event): void {
    //acceso al valor del select
    const genreId = (event.target as HTMLSelectElement).value;
    this.getMoviesByGenre(Number(genreId));
    console.log('el numero de genero es' + genreId);
  }
  //obtiene peliculas por genero seleccionado
  getMoviesByGenre(genreId: number): void {
    this.movieService.getMoviesByGenre(genreId).subscribe((res) => {
      this.sendmov.emit(res.results);
      console.log(this.sendmov, 'el resultado final');
    });
  }
}
