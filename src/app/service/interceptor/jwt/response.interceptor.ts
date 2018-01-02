import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar} from '@angular/material';

import {UnauthorizedSnackBarComponent} from '../../../common/components';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.body === 401) {
          const snackBarRef = this.snackBar.openFromComponent(UnauthorizedSnackBarComponent, {
            verticalPosition: 'top',
            panelClass: ['app-unauthorized-snack-bar-white-background'],
            data: {
              errorCode: 401,
            }
          });
          snackBarRef.instance.snackBarRef = snackBarRef;
        }
      }
    });
  }

}
