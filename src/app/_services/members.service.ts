import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../_models/member';
import { environment } from 'src/environments/environment.development';
import { Observable, map, of } from 'rxjs';
import { UserByUserName } from '../_models/userbyusername';

@Injectable({
  providedIn: 'root'
})

export class MembersService {
  //members:Member[]=[]
  constructor(private http:HttpClient) { }
getMembers():Observable<Member[]>
{
  // if (this.members.length>0) return of(this.members)
  return this.http.get<Member[]>
  (
    environment.apiUrl+'Users'
  )
  // .pipe
  // (
  //   map
  //   (
  //     members=>{
  //       this.members=members;
  //       return members;
  //     }
  //   )
  // )
}
getMember(username:string)
{
  // const member=this.members.find(x=>x.userName===username);
  // if (member !==undefined) return of(member);
  return this.http.get<UserByUserName>
  (
    environment.apiUrl+'Users/GetUserByUserName?userName='+username
  )
}
updateMember(user:UserByUserName,id:number){
return this.http.put
(
  environment.apiUrl+`Users/UpdateUser/${id}`, user
 )
}
}
// updateUser(user: GetAllUsersDto, id: number) {
//   return this.http.put(/api/UpdateUser/${id}, user);
// getMembers():Observable<SpecialMember[]>
// {
//   return this.http.get<SpecialMember[]>(environment.apiUrl+'Users/GetAllUsers?CountItems=10&page=1')
// }
// getMember(username:string)
// {
//   return this.http.get<UserByUserName>(environment.apiUrl+'Users/GetUserByUserName?userName='+username)
// }