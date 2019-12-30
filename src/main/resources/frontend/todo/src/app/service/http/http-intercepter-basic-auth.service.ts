import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = "user1"
    // let password = "user1"
    // let basicAuthHeaderString = 'Basic '+window.btoa(username+':'+password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHeaderString && username) {
      req = req.clone({
        setHeaders : {
          Authorization: basicAuthHeaderString
        }
      })
    }
    
    return next.handle(req)

  }

}
