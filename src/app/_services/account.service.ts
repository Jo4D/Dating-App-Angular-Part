import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import{HttpClient} from '@angular/common/http'
import { ReplaySubject, map } from 'rxjs';
import { UserByUserName } from '../_models/userbyusername';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
//baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  //currentUserSource=new ReplaySubject<User>(1);
  currentUserSource=new ReplaySubject<UserByUserName>(1);
  currentUser$=this.currentUserSource.asObservable();
  login(model:any){
    return this.http.post(environment.apiUrl+'Users/Login',model)
    .pipe(
    //  map((res:User)=>{
      map((res:UserByUserName)=>{
        const user = res;
        if (user) {
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }
  //setCurrentUser(user:User){
    setCurrentUser(user:UserByUserName){
    this.currentUserSource.next(user);
  }
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
  register(model:any){
    return this.http.post('https://localhost:44365/api/Users/AddUser',model)
  //  return this.http.post(environment.apiUrl+ 'Users/AddUser',model)
    .pipe(
     //map((user:User)=>{
      map((user:UserByUserName)=>{
      if (user) {
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUserSource.next(user) 
      }
     return user; 
     }) 
    )
  }
}