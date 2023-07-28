import { Component, Input } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SpecialMember } from 'src/app/_models/specialmember';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
 @Input() member:Member;
//@Input() member:SpecialMember;

faCoffee = faCoffee;
faHeart=faHeart;
faUser=faUser;
faEnvelope=faEnvelope;
}
