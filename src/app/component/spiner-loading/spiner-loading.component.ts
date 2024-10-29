import {Component, inject, Input, OnInit} from '@angular/core';
import {SpinerServiceService} from "../../service/spiner-service.service";

@Component({
  selector: 'app-spiner-loading',
  templateUrl: './spiner-loading.component.html',
  styleUrl: './spiner-loading.component.css'
})
export class SpinerLoadingComponent implements OnInit {
  private readonly serviceSniper = inject(SpinerServiceService);
  isLoading = this.serviceSniper.spinner;

  ngOnInit() {
    console.log(this.isLoading);
  }


}
