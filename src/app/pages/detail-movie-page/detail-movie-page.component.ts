import {Component, inject, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-movie-page',
  templateUrl: './detail-movie-page.component.html',
  styleUrl: './detail-movie-page.component.css'
})
export class DetailMoviePageComponent implements OnInit {
  private readonly service= inject(MovieApiServiceService);
  getMovieDetail:any;

  constructor(private router: ActivatedRoute, private location:Location) {
  }

  goBack() {
    this.location.back();
  }


  ngOnInit():void {
    // obtiene el valor del parametro de la ruta
    const getParamId = this.router.snapshot.paramMap.get('id');
    if (!getParamId) return;
    this.getMovie(getParamId);
  }

  getMovie(id:string) {
    this.service.getMovieDetails(id).subscribe((result)=> {
      console.log(result, 'reultados de los detalles de pelicula')
      this.getMovieDetail = result;
    })
  }
}
