import { Component, OnInit } from '@angular/core';
import { Subject, elementAt, map } from 'rxjs';
import { Timetable } from 'src/app/modules/core/models/members-models';
import { MemberApiService } from 'src/app/modules/core/services/member-api.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent implements OnInit {
  constructor(private memberApiService: MemberApiService) {}
  timetable!: Timetable[];
  actualDate = new Date();
  _timetable!: Timetable[];
  method = '';

  date: Omit<Timetable, 'id'> = {
    date: this.actualDate,
    name: null,
  };
  cutDate = '';
  clg() {
    console.log(this.date.name);
  }

  addDate() {
    this.date.date.toLocaleDateString();
    this.cutDate = this.date.date.toString().slice(0, 10);
    this.memberApiService.addTimetables(this.date).subscribe({
      next: (value) => {
        this.method = 'done';
        window.location.reload();
      },
    });
  }
  deleteTimetable(id: number) {
    const QDelete = window.confirm('Czy napewno chcesz usunąć członka?');
    if (QDelete) {
      this.memberApiService.deleteTimetable(id).subscribe({
        next: (value) => window.location.reload(),
      });
    } else {
      return;
    }
  }

  show = false;
  ngOnInit(): void {
    this.method = '';
    this.memberApiService.geTimetables().subscribe({
      next: (value) => {
        this.timetable = value;
        this._timetable = this.timetable;
        // this._timetable.next(value);
        console.log(value);
        this._timetable?.map((element) => {
          let nowdate = new Date().toLocaleDateString();
          let date = element.date;
          let month = element.date.toString().slice(5, 7);
          let year = element.date.toString().slice(0, 4);
          let day = element.date.toString().slice(8, 10);
          let nowMonth = nowdate.slice(3, 5);
          let nowYear = nowdate.slice(6, 10);
          let nowDay = nowdate.slice(0, 2);
          let transformNowDate = Number(`${nowYear}${nowMonth}${nowDay}`);
          let transformDate = Number(`${year}${month}${day}`);
          if (transformDate < transformNowDate) {
            this.memberApiService.deleteTimetable(element.id).subscribe({
              next: () => window.location.reload(),
            });
          }
        });
      },
      error: () => {
        window.alert('wystąpił błąd, spróbuj ponownie');
      },
    });
  }
}
