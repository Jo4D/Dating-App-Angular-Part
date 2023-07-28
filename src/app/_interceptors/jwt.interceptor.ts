import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, map, take } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { UserByUserName } from '../_models/userbyusername';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountServices:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //let currenUser:User;
    let currenUser:UserByUserName;

    this.accountServices.currentUser$.pipe
    (
      take
      (
1
      )
    ).subscribe(user=>currenUser=user);
    if (currenUser) {
      request=request.clone
      (
        {
          setHeaders:
          {
//Authorization:`Bearer ${currenUser.token}`
Authorization:`Bearer ${currenUser.data.token}`

          }
        }
      )
    }
    return next.handle(request);
  }
}
