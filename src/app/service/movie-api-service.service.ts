import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film.interface';
import { environemnt } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  private readonly http = Injectable(HttpClient);

  // Obtener lista del baner
  bannerApiData(): Observable<any> {
    return this.http.get(`${environemnt.url}/trending/all/week`);
  }

  // Obtener lista de peliculas
  getAllMovies_bypage(page: number): Observable<any> {
    return this.http.get<any>(`${environemnt.url}/trending/movie/day?page=${page}`);
  }

  // Obtener detalles de peliculas
  getMovieDetails(data: string): Observable<any> {
    return this.http.get(`${environemnt.url}/movie/${data}`);
  }

  // Obtener lista de géneros
  getMovieGenres(): Observable<any> {
    return this.http.get(`${environemnt.url}/genre/movie/list`);
  }

  // Obtener películas filtradas por género
  getMoviesByGenre(genreId: number): Observable<any> {
    return this.http.get(`${environemnt.url}/discover/movie?with_genres=${genreId}`);
  }
}
