import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    public accountService:AccountService,
    private toastr:ToastrService
    ,private router:Router){}
  model:any={};
  //currentUser$:Observable<User>;
  loggedIn :boolean;
  ngOnInit(): void {
    //this.currentUser$=this.accountService.currentUser$;
  }


  login(){
this.accountService.login(this.model).subscribe(res=>{
  console.log(res);
  console.log('ooooooooooo');
  console.log(this.accountService.currentUser$);
  
  
this.router.navigateByUrl('/members');
},err=>{
  console.log(err);
  //this.toastr.error(err.error)
}
);
  }
  register(){
    this.accountService.register(this.model).subscribe(res=>{
      console.log(res);
      
    }
    )
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }  
    //              "./node_modules/font-awesome/css/font-awesome.css",

  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user=>{
  //     this.loggedIn=!!user;
  //   },err=>{
  //     console.log(err);
      
  //   })
  // }
}
