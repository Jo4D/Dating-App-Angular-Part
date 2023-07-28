import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SpecialMember } from 'src/app/_models/specialmember';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit{
  members:Member[];
// members:SpecialMember[];
  faCoffee = faCoffee;

constructor(private membersService:MembersService){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  this.loadMembers();
}
loadMembers(){
  this.membersService.getMembers()
  .subscribe( 
    members=>{
      //console.log(members.flat());
      console.log(members);
      
      this.members =members;
      
}
  )
}
}