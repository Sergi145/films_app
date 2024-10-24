import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "../interfaces/film.interface";



@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  url = "https://api.themoviedb.org/3";

  // Obtener lista del baner
  bannerApiData():Observable<any> {
    return this.http.get(`${this.url}/trending/all/week`);
  }
  // Obtener lista de peliculas
  getAllMovies_bypage(page:number):Observable<any> {
    return this.http.get(`${this.url}/trending/movie/day?page=${page}`);
  }

  // Obtener detalles de peliculas
  getMovieDetails(data:string):Observable<any> {
    return this.http.get(`${this.url}/movie/${data}`)
  }

  // Obtener lista de géneros
  getMovieGenres(): Observable<any> {
    return this.http.get(`${this.url}/genre/movie/list`);
  }

  // Obtener películas filtradas por género
  getMoviesByGenre(genreId: number): Observable<any> {
    return this.http.get(`${this.url}/discover/movie?with_genres=${genreId}`);
  }



}
