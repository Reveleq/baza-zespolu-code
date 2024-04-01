import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Equipment } from 'src/app/modules/core/models/members-models';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent {
  showTable: boolean = false;
  constructor(private memberApiService: MemberApiService) {}
  type = '';
  equipment: Equipment[] = [];

  search(value: string) {
    this.memberApiService.getEquipment(value).subscribe({
      next: (value) => {
        (this.equipment = value), (this.showTable = true);
      },
      error: () => {
        window.alert('wystąpił błąd, spróbuj ponownie');
      },
    });
  }
  deleteMember(id: number, source: string) {
    const QDelete = window.confirm(
      'Czy napewno chcesz usunąć członka z posiadania przedmiotu?'
    );
    if (QDelete) {
      this.memberApiService
        .deleteEqimpentMember(id, source)
        .subscribe({ next: (value) => window.location.reload() });
    } else {
      return;
    }
  }

  dataSource: Equipment[] = [];
  displayedColumns: string[] = ['lp', 'name', 'surname', 'class', 'delete'];
}
