import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinerServiceService {
  private spinnerSubject = new BehaviorSubject<boolean>(false);
  spinner = this.spinnerSubject.asObservable();

  constructor() {}

  show() {
    this.spinnerSubject.next(true);
    console.log('activando spiner');
  }

  hide() {
    this.spinnerSubject.next(false);
    console.log('escondiendo spiner');

  }


}
