import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(
     private http:HttpClient
     ){

     }
   ngOnInit(): void {
//this.getusers(); 
   }
 
 registerMode=false;
 users:any;
 // we need to pass users from parent component (home) to child component (register)
 //so we will use @input() in the child ts to do that 
 registerToggle(){
   this.registerMode=!this.registerMode; 
 }
 
 getusers(){
     this.http.get('https://localhost:44365/api/Users')
     .subscribe(users=>{
       this.users = users
      }
     )
   }
   cancelRegisterMode(event:boolean){
 this.registerMode=event;
   }
}
