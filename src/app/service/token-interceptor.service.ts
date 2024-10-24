import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  private readonly bearerToken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTdiZmUzN2VmZTAwMjNlOWFlZTE5OWRmZTlhMjg0YyIsIm5iZiI6MTcyOTYwMzMwNS44NDQ5MTYsInN1YiI6IjU2YTY5M2JjYzNhMzY4MTljZTAwMDc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iquLxBG8ANlAsZ64v63hxutS_7kjb_a6fD7r7KAFYlA'; // El token de TMDB

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.bearerToken}`
      }
    });
    return next.handle(clonedReq);
  }
}
