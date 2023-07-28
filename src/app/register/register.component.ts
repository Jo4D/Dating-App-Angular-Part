import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private accountService:AccountService,
    private toastr:ToastrService

  //  private toastr:ToastrService
    ){}
  // we get this data from homecomponent the parent
  @Input() usersFromHomeComponent:any;
  @Output() cancelRegister = new EventEmitter();
//four things to send data from child to parent
//1- declare an output property of type eventlistener
//2- make function that emit the property
//3- subscripte to event in 
//the child reference in the template that will go to the function that listen in the parent
//4- Make the Function that will listen the event in the parent 
model:any={};
register(){
  this.accountService.register(this.model).subscribe(response=>{
    console.log("res is "+
     //response.userName 
     response.data.username
     + "  "+
    // response.token);
    response.data.username);

    this.cancel();
  },err=>{
    console.log(err);

    this.toastr.error(err.error);
  },
  
  ()=>{console.log('completed');
  })
  console.log(this.model);
  
}
cancel(){
this.cancelRegister.emit(false);  
}
}
