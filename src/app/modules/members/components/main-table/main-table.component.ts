import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MemberData } from 'src/app/modules/core/models/members-models';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';
import { MemberService } from 'src/app/modules/core/services/member.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements OnInit {
  constructor(
    private memberService: MemberService,
    private memberApiService: MemberApiService
  ) {}
  dataSource: MemberData[] = this.memberService.data;
  displayedColumns: string[] = ['name', 'surname', 'class', 'more-info'];
  sub!: Subscription;
  ngOnInit(): void {
    // this.sub = this.memberService.memberChanged.subscribe({
    //   next: (arrMember) => (this.dataSource = arrMember),
    // });

    // if (this.dataSource.length === 0) {
    this.memberApiService.getDate().subscribe({
      next: (todos) => {
        this.dataSource = todos;
      },
      error: () => {
        window.alert('wystąpił błąd, spróbuj ponownie');
      },
    });
  }
}
