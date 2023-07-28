import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { UserByUserName } from 'src/app/_models/userbyusername';
import { faBan, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment.development';
import { AccountService } from 'src/app/_services/account.service';
import { User } from 'src/app/_models/user';
import { take } from 'rxjs';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit{
@Input() member:UserByUserName;
uploader:FileUploader;
hasBaseDropZoneOver:false;
//hasAnotherDropZoneOver:boolean;
response:string;
faTrash=faTrash;
faUpload=faUpload;
faBan=faBan;

user:UserByUserName;
constructor(private accountService:AccountService){
  this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
    this.user=user;
  })
}
  ngOnInit(): void {
    this.initializeUploader();
  }
  fileOverBase(e:any){
this.hasBaseDropZoneOver=e;
  }
  
initializeUploader(){
  this.uploader= new FileUploader({
    url:environment.apiUrl+'Users/add-photo',
    authToken:'Bearer '+this.user.data.token,
    isHTML5:true,
    allowedFileType:['image'],
    removeAfterUpload:true,
    autoUpload:false,
    maxFileSize:10*1024,

  });
  this.uploader.onAfterAddingFile=(file)=>{
file.withCredentials=false;

this.uploader.onSuccessItem=(item,response,status,headers)=>{
  if (response) {
    const photo = JSON.parse(response);
    this.member.data.photos.push(photo)
  }
}
  }

}
}
