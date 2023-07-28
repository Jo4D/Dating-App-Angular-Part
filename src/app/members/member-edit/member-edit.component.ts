import { Component, HostListener, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { UpdateMember } from 'src/app/_models/updatemember';
import { UserByUserName } from 'src/app/_models/userbyusername';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit{
member:UserByUserName;
//user:User;
mm:Member;
user:UserByUserName;
updateModel:UpdateMember;
@ViewChild('editForm') editForm:NgForm;
@HostListener('window:beforeunload',['$event']) unloadNotification($event:any){
  if (this.editForm.dirty) {
    $event.returnValue=true;
  }
}
constructor
(
  private accountService:AccountService,
  private memberService:MembersService,
  private toastr:ToastrService
  )
  {
   this.accountService.currentUser$.pipe(take(1)).subscribe(user=>this.user=user);
   console.log(this.user);
   
  }
  ngOnInit(): void {
    this.loadMember();
  }
  loadMember(){
this.memberService.getMember(this.user.data.username)
.subscribe
(
  member=>
  {
  this.member=member;
  console.log(member); 
}
)
  }
  updateMember(){
    this.memberService.updateMember(this.member,this.user.data.userId).subscribe(()=>{
       console.log(this.member);
    this.toastr.success('profile updated successfully');
    this.editForm.resetForm(this.member);
    },err=>{
      this.toastr.error(err);
      console.log(err);
      
    })    
  }
}
//Angular use name property to track the input inside the form
//ngModel give us the binding