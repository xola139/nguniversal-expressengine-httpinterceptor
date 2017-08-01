import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject('serverUrl') protected serverUrl: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const serverReq = !this.serverUrl ? req : req.clone({
      url: `${this.serverUrl}${req.url}`
    });

    return next.handle(serverReq);

  }

}
