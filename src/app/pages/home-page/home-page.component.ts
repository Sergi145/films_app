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
    this.serviceSniper.show();
    this.service.getAllMoviesBypage(page).subscribe((res) => {
      console.log(res, 'resultado de populares');
      this.trendingMovieResult = res.results;
      this.totalPages = res.total_pages;
      this.serviceSniper.hide();
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
