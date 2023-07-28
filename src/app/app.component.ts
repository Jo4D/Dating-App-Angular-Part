import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserByUserName } from './_models/userbyusername';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  faCoffee = faCoffee;

  ngOnInit(): void {
    this.setCurrentUser();
  }
  title = 'how-are-you';
  constructor(private accountservice:AccountService){}
  setCurrentUser(){
   // const user:User =JSON.parse(localStorage.getItem('user'));
   const user:UserByUserName =JSON.parse(localStorage.getItem('user'));

    this.accountservice.setCurrentUser(user);
  }
}
