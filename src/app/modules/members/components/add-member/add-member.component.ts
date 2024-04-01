import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberData } from 'src/app/modules/core/models/members-models';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';
import { MemberService } from 'src/app/modules/core/services/member.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {
  method = '';
  return() {
    this.location.back();
  }
  constructor(
    private memberApiService: MemberApiService,
    private memberService: MemberService,
    private router: Router,
    private location: Location
  ) {}

  newMember: Omit<MemberData, 'id'> = {
    name: '',
    surname: '',
    birthday: '',
    address: '',
    sex: '',
    phone: '',
    email: '',
    class: 0,
  };
  ngOnInit(): void {
    this.method = '';
  }
  addMember() {
    this.memberApiService.addMember(this.newMember).subscribe({
      next: (value) => {
        this.method = 'done';
        this.router.navigate(['/baza/dane']);
      },
      error: (err) => {
        window.alert('Wystąpił błąd. Spróbuj ponownie.');
      },
    });
  }
}
