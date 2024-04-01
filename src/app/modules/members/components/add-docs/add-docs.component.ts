import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';
import { MemberService } from 'src/app/modules/core/services/member.service';
import { Location } from '@angular/common';
import { Docs } from 'src/app/modules/core/models/docs-model';
@Component({
  selector: 'app-add-docs',
  templateUrl: './add-docs.component.html',
  styleUrls: ['./add-docs.component.scss'],
})
export class AddDocsComponent implements OnInit {
  return() {
    this.location.back();
  }
  constructor(
    private memberApiService: MemberApiService,
    private memberService: MemberService,
    private router: Router,
    private location: Location
  ) {}

  method = '';
  newDocs: Omit<Docs, 'id'> = {
    content: '',
    src: '',
    href: '',
  };
  ngOnInit(): void {
    this.method = '';
  }
  addDocs() {
    this.memberApiService.addDocs(this.newDocs).subscribe({
      next: (value) => {
        this.method = 'done';
        this.router.navigate(['/baza/dokumenty']);
      },
      error: (err) => {
        window.alert('Wystąpił błąd. Spróbuj ponownie.');
      },
    });
  }
}
