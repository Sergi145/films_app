import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environemnt } from '../environment/environment';

// TODO: Nuevos interceptores.
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${environemnt.bearerToken}`,
      },
    });
    return next.handle(clonedReq);
  }
}
