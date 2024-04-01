import { Component, OnInit } from '@angular/core';
import { Docs } from 'src/app/modules/core/models/docs-model';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {
  constructor(private memberApiService: MemberApiService) {}
  docs: Docs[] = [];
  deleteDoc(id: number | null) {
    const QDelete = window.confirm('Czy napewno chcesz usunąć dokument?');
    if (QDelete) {
      this.memberApiService.deleteDoc(id).subscribe({
        next: () => {window.location.reload()},
      });
    } else {
      return;
    }
  }
  ngOnInit(): void {
    this.memberApiService.getDocs().subscribe({
      next: (docs) => {
        this.docs = docs;
      },
      error: () => {
        window.alert('wystąpił błąd, spróbuj ponownie')
      }
    });
  }
}
