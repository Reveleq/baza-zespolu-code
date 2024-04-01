import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MemberData } from 'src/app/modules/core/models/members-models';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';
import { MemberService } from 'src/app/modules/core/services/member.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss'],
})
export class EditMemberComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private memberApiService: MemberApiService,
    private router: Router,
    private memberService: MemberService,
    private location: Location
  ) {}
  method = '';
  member: MemberData = {
    id: null,
    name: '',
    surname: '',
    birthday: '',
    address: '',
    sex: '',
    phone: '',
    email: '',
    class: 0,
  };
  return() {
    this.location.back();
  }
  ngOnInit(): void {
    this.method = '';
    this.route.paramMap
      .pipe(
        switchMap((params) =>
          this.memberApiService.getMember(Number(params.get('id')))
        )
      )
      .subscribe({
        next: (member) => {
          this.member = { ...member };
        },
        error: (err) => {
          if (err.status === 404) {
            window.alert('nie ma takiej osoby');
          } else {
            window.alert('Wystąpił błąd');
          }
        },
      });
  }
  editMember() {
    this.memberApiService.editMember(this.member.id, this.member).subscribe({
      next: (value) => {
        this.method = 'done';
        this.router.navigate(['/baza/dane']);
      },
      error: (err) => {
        window.alert('Wystąpił błąd. Spróbuj ponownie.');
      },
    });
  }
  delete() {
    const QDelete = window.confirm('Czy napewno chcesz usunąć członka?');
    if (QDelete) {
      this.memberApiService.deleteMember(this.member.id).subscribe({
        next: (value) => {
          this.method = 'done';
          this.router.navigate(['/baza/dane']);
        },
      });
    } else {
      return;
    }
  }
}
