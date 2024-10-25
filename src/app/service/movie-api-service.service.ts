import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environemnt } from '../environment/environment';
import {Film, Film_response} from "../interfaces/film.interface";
import {GenreResponse} from "../interfaces/gender.interface";

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  private readonly http = inject(HttpClient);

  // Obtener lista del baner
  bannerApiData(): Observable<Film_response> {
    return this.http.get<Film_response>(`${environemnt.url}/trending/all/week`);
  }

  // Obtener lista de peliculas
  getAllMoviesBypage(page: number): Observable<Film_response> {
    return this.http.get<Film_response>(`${environemnt.url}/trending/movie/day?page=${page}`);
  }

  // Obtener detalles de peliculas
  getMovieDetails(id: string): Observable<Film> {
    return this.http.get<Film>(`${environemnt.url}/movie/${id}`);
  }

  // Obtener lista de géneros
  getMovieGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${environemnt.url}/genre/movie/list`);
  }

  // Obtener películas filtradas por género
  getMoviesByGenre(genreId: number): Observable<Film_response> {
    return this.http.get<Film_response>(`${environemnt.url}/discover/movie?with_genres=${genreId}`);
  }
}
