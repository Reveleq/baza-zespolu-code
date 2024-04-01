import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MemberData } from '../models/members-models';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  static deleteMember() {
    throw new Error('Method not implemented.');
  }
  date = '';
  addMember(member: MemberData): void {
    this._data.push(member);
    this.memberChanged.next(this.data);
  }
  private _data: MemberData[] = [];
  memberChanged = new Subject<MemberData[]>();

  public get data() {
    return this._data.slice();
  }

  public set data(arrTodos: MemberData[]) {
    this._data = [...arrTodos];
    this.memberChanged.next(this.data);
  }
}
