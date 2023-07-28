import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserByUserName } from 'src/app/_models/userbyusername';
import { MembersService } from 'src/app/_services/members.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit{
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
member:UserByUserName;
constructor(private memberService:MembersService,
  private route:ActivatedRoute){}
  ngOnInit(): void {
      this.loadMember();
    //this.getImages();


   this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation:NgxGalleryAnimation.Slide,
        imagePercent: 100,
        preview: false,
      
        //imageArrows:true
        //imageSwipe:true,
       //imageAutoPlay:true
      },
    ];   
  }
  getImages():NgxGalleryImage[]{
const imageUrls=[];
for (const photo of this.member.data.photos) {
imageUrls.push({
  // small:this.member.data.photo,
  // medium:this.member.data.photo,
  // big:this.member.data.photo
  small:photo,
  medium:photo,
  big:photo
})
}
return imageUrls

  }
loadMember(){
  this.memberService.getMember(this.route.snapshot.paramMap.get('username'))
  .subscribe(member=>{
    
    this.member=member; 
    console.log("----------------------------------");
    
       console.log(member);
       this.galleryImages = this.getImages();

  })
}
}


