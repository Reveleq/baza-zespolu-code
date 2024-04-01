import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Equipment,
  MemberData,
} from 'src/app/modules/core/models/members-models';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
})
export class AddEquipmentComponent implements OnInit {
  constructor(
    private memberApiService: MemberApiService,
    private route: Router,
    private location: Location
  ) {}
  method = '';
  date: MemberData[] = [];
  memberData: MemberData = {
    name: '',
    address: '',
    email: '',
    id: null,
    sex: '',
    surname: '',
    birthday: '',
    class: 0,
    phone: '',
  };
  finishMember!: Omit<Equipment, 'id'>;
  type = '';
  showTable = true;
  displayedColumns: string[] = ['lp', 'name', 'surname', 'class', 'more-info'];
  chooseMember(index: number) {
    this.showTable = !this.showTable;
    this.memberData = this.date[index];
  }
  back() {
    this.showTable = !this.showTable;
    this.memberData = {
      name: '',
      address: '',
      email: '',
      id: null,
      sex: '',
      surname: '',
      birthday: '',
      class: 0,
      phone: '',
    };
  }
  return() {
    this.location.back();
  }
  add(name: string, surname: string, classs: string) {
    this.finishMember = {
      name: name,
      surname: surname,
      class: Number(classs),
    };
    this.memberApiService
      .addEqimpentMember(this.finishMember, this.type)
      .subscribe({
        next: () => {
          this.method = 'done';
          this.route.navigate(['/baza/rekwizyty']);
        },
        error: () => {
          window.alert('wystąpił błąd, spróbuj ponownie');
        },
      });
  }
  ngOnInit(): void {
    this.method = '';
    this.memberApiService.getDate().subscribe({
      next: (value) => (this.date = value),
    });
  }
}
