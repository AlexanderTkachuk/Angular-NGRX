import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistentService } from './persistent.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private persistentService: PersistentService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistentService.get('accessToken');
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` :  ''
      }
    });
    return next.handle(request);
  }
}
