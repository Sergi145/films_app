import { Component, OnInit, inject } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import {Film} from "../../interfaces/film.interface";
import {SpinerServiceService} from "../../service/spiner-service.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  private readonly service = inject(MovieApiServiceService);
  private readonly serviceSniper = inject(SpinerServiceService);

  public bannerResult: Film[] = [];
  public trendingMovieResult: Film[] = [];

  currentPage: number = 1;
  totalPages: number = 0;
  selectedGenreId: any;

  ngOnInit() {
    this.bannerFilm();
    this.trendingData(this.currentPage, this.selectedGenreId);

  }

  bannerFilm() {
    this.service.bannerApiData().subscribe((res) => {
      this.bannerResult = res.results;
    });
  }

  trendingData(page: number, genreId:number) {
    this.serviceSniper.show();
    const genreFilter= genreId || 28;
    //TODO
    //conseguir el valor del combo
    this.service.getAllMoviesByGenres(genreFilter,page).subscribe((res) => {
      this.trendingMovieResult = res.results;
      this.totalPages = res.total_pages;
      this.serviceSniper.hide();
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.trendingData(this.currentPage, this.selectedGenreId);
    }

    console.log(this.currentPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.trendingData(this.currentPage, this.selectedGenreId);
    }
    console.log(this.currentPage);
  }

  onGenreChange(genreId: number) {
    this.selectedGenreId = genreId; // Actualizar el genreId seleccionado
    this.currentPage = 1; // Reiniciar la página actual
    this.trendingData(this.currentPage, this.selectedGenreId); // Volver a cargar los datos con el nuevo género
  }
}
