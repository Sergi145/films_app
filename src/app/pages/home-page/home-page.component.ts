import { Component, OnInit, inject } from '@angular/core';
import { Result } from '../../interfaces/film.interface';
import { TrendingResult } from '../../interfaces/trending.interface';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  private readonly service = inject(MovieApiServiceService);

  public bannerResult: Result[] = [];
  public trendingMovieResult: TrendingResult[] = [];
  public isLoading: boolean = false;

  currentPage: number = 1;
  totalPages: number = 0;

  ngOnInit() {
    this.bannerData();
    this.trendingData(this.currentPage);
  }

  bannerData() {
    this.service.bannerApiData().subscribe((res) => {
      console.log(res, 'resultado');
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
