import { Component, OnInit, inject } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import {Film} from "../../interfaces/film.interface";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  private readonly service = inject(MovieApiServiceService);

  public bannerResult: Film[] = [];
  public trendingMovieResult: Film[] = [];
  public isLoading: boolean = false;

  currentPage: number = 1;
  totalPages: number = 0;

  ngOnInit() {
    this.bannerFilm();
    this.trendingData(this.currentPage);
  }

  bannerFilm() {
    this.service.bannerApiData().subscribe((res) => {
      console.log(res, 'resultado de las peliculas de la semana');
      this.bannerResult = res.results;
    });
  }

  trendingData(page: number) {
    this.isLoading = true;
    this.service.getAllMoviesBypage(page).subscribe((res) => {
      console.log(res, 'resultado de populares');
      this.trendingMovieResult = res.results;
      this.totalPages = res.total_pages;
      this.isLoading = false;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.trendingData(this.currentPage);
    }

    console.log(this.currentPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.trendingData(this.currentPage);
    }
    console.log(this.currentPage);
  }
}
