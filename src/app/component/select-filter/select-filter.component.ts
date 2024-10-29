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
  @Output() sendGenre = new EventEmitter<any>;

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
    const page=1;
    this.sendGenre.emit(genreId);
    this.getMoviesByGenre(Number(genreId),Number(page));
    console.log('el numero de genero es' + genreId);
  }
  //obtiene peliculas por genero seleccionado
  getMoviesByGenre(genreId: number, page:number): void {
    this.movieService.getAllMoviesByGenres(genreId,page).subscribe((res) => {
      this.sendmov.emit(res.results);

    });
  }
}
