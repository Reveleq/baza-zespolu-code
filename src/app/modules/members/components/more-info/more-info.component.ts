import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs';
import { MemberData } from 'src/app/modules/core/models/members-models';
import { Location } from '@angular/common';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  constructor(
    private memberApiService: MemberApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  close() {
    this.location.back();
  }
  member: MemberData = {
    name: '',
    sex: '',
    surname: '',
    address: '',
    phone: '',
    email: '',
    class: 0,
    id: 0,
    birthday: '',
  };
  ngOnInit(): void {
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
}
