import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit{
constructor(private http:HttpClient){}
testValidationErrors:string[];
ngOnInit(): void {
}

get404Error(){
  this.http.get(environment.apiUrl+'buggy/not-found').subscribe(res=>{
    console.log(res);
    
  },err=>{
    console.log(err);
    
  })
}
get400Error(){
  this.http.get(environment.apiUrl+'buggy/bad-request').subscribe(res=>{
    console.log(res);
    
  },err=>{
    console.log(err);
    
  })
}get500Error(){
  this.http.get(environment.apiUrl+'Buggy/server-error').subscribe(res=>{
    console.log(res);
    
  },err=>{
    console.log(err);
    
  })
}
get401Error(){
  this.http.get(environment.apiUrl+'buggy/auth').subscribe(res=>{
    console.log(res);
    
  },err=>{
    console.log(err);
    
  })
}

get400ValidationError(){
  this.http.post(environment.apiUrl+'users/adduser',{})

  
  
  .subscribe
  (
    res=>{
    console.log(res);
    
  },err=>{
    console.log(err);
    this.testValidationErrors=err;
  }

  )
}

  // .pipe(
  //   map(
  //     res=>{console.log(res);
  //     },err=>{console.log(err);
  //     }
  //   )
  // ).subscribe()
}
